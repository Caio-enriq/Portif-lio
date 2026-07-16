"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { useTheme } from "next-themes";
import createGlobe from "cobe";
import type { COBEOptions } from "cobe";

/**
 * Interactive 3D Earth (cobe).
 *
 * - Users can drag to rotate the globe.
 * - The Brasília → Ireland arc and markers are rendered natively inside WebGL
 *   so they always follow the globe as it spins or when dragged.
 * - Theme changes update colors live without tearing down the WebGL context.
 * - Exposes `onFrame` so the parent can drive DOM overlays (labels, airplane)
 *   in sync with the WebGL animation loop — no React re-renders per frame.
 *
 * Exported helpers:
 *   projectGlobe(lat, lng, phi, theta, size) → { x, y, visible }
 *   projectRoutePoint(from, to, progress, phi, theta, size) → projected arc point
 *   GLOBE_THETA, BRASILIA, IRELAND           → used by overlays
 */

type RGB = [number, number, number];

// ── Geographic constants (exported for overlay use) ────────────────────────
export const BRASILIA: [number, number] = [-15.7801, -47.9292];
export const IRELAND: [number, number] = [53.3498, -6.2603];

export const GLOBE_THETA = 0.25;
const INITIAL_PHI = 0.85; // South America roughly centred on load (with negated x projection)
const INITIAL_THETA = GLOBE_THETA;
const SLOW_ROTATION_SPEED = 0.0018;
const GLOBE_RADIUS = 0.8;
const MARKER_ELEVATION = 0.04;
const MARKER_RADIUS = GLOBE_RADIUS + MARKER_ELEVATION;
const ARC_HEIGHT = 0.45;
const ARC_CONTROL_RADIUS = GLOBE_RADIUS + ARC_HEIGHT + MARKER_ELEVATION;
const MAX_THETA = 1.05;
const MIN_THETA = -1.05;

// ── Palette helpers ────────────────────────────────────────────────────────
const hexToRgb = (hex: string): RGB => {
  const n = parseInt(hex.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

const GOAL: Record<"dark" | "light", RGB> = {
  dark: hexToRgb("#818cf8"),
  light: hexToRgb("#4f46e5"),
};

function palette(theme: "dark" | "light") {
  const isLight = theme === "light";
  return {
    dark: isLight ? 0 : 1,
    diffuse: isLight ? 1.5 : 1.2,
    mapBrightness: isLight ? 5 : 6,
    baseColor: (isLight ? [0.9, 0.92, 0.95] : [0.4, 0.43, 0.55]) as RGB,
    markerColor: (isLight ? [0.2, 0.69, 0.59] : [0.2, 0.83, 0.6]) as RGB,
    glowColor: (isLight ? [0.85, 0.9, 1] : [0.16, 0.18, 0.35]) as RGB,
    arcColor: (isLight ? GOAL.light : GOAL.dark) as RGB,
  };
}

// ── WebGL capability (SSR-safe) ─────────────────────────────────────────────
let webglCache: boolean | null = null;
function readWebGLSupport(): boolean {
  if (typeof window === "undefined") return true;
  if (webglCache !== null) return webglCache;
  try {
    const c = document.createElement("canvas");
    webglCache = Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    webglCache = false;
  }
  return webglCache;
}
const subscribeNoop = () => () => {};
const serverSnapshot = () => true;

// ── Public projection helpers ───────────────────────────────────────────────

type Vec3 = [number, number, number];

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

function toCobeVector(lat: number, lng: number): Vec3 {
  const latR = (lat * Math.PI) / 180;
  const lngR = (lng * Math.PI) / 180 - Math.PI;
  const cosLat = Math.cos(latR);

  return [-cosLat * Math.cos(lngR), Math.sin(latR), cosLat * Math.sin(lngR)];
}

function normalize([x, y, z]: Vec3): Vec3 {
  const length = Math.hypot(x, y, z);
  if (length < 0.0001) return [0, 1, 0];
  return [x / length, y / length, z / length];
}

function scaleVector([x, y, z]: Vec3, scale: number): Vec3 {
  return [x * scale, y * scale, z * scale];
}

function addVectors(a: Vec3, b: Vec3): Vec3 {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function quadraticBezier(a: Vec3, b: Vec3, c: Vec3, t: number): Vec3 {
  const inv = 1 - t;
  return [
    inv * inv * a[0] + 2 * inv * t * b[0] + t * t * c[0],
    inv * inv * a[1] + 2 * inv * t * b[1] + t * t * c[1],
    inv * inv * a[2] + 2 * inv * t * b[2] + t * t * c[2],
  ];
}

function projectVector(
  point: Vec3,
  phi: number,
  theta: number,
  size: number
): { x: number; y: number; visible: boolean; depth: number; screenRadius: number } {
  const cosTheta = Math.cos(theta);
  const sinTheta = Math.sin(theta);
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);

  // This mirrors cobe's internal O() projection exactly for square canvases.
  const projectedX = cosPhi * point[0] + sinPhi * point[2];
  const projectedY =
    sinPhi * sinTheta * point[0] + cosTheta * point[1] - cosPhi * sinTheta * point[2];
  const depth = -sinPhi * cosTheta * point[0] + sinTheta * point[1] + cosPhi * cosTheta * point[2];
  const screenRadius = Math.hypot(projectedX, projectedY);

  return {
    x: ((projectedX + 1) / 2) * size,
    y: ((-projectedY + 1) / 2) * size,
    visible: depth >= 0 || screenRadius >= GLOBE_RADIUS,
    depth,
    screenRadius,
  };
}

/**
 * Project a geographic point (lat/lng in degrees) onto the globe's 2D surface.
 *
 * Uses the same Y→X rotation order that cobe applies (Ry(phi) then Rx(theta)).
 * The returned (x, y) are in CSS pixel coordinates relative to the container.
 */
export function projectGlobe(
  lat: number,
  lng: number,
  phi: number, // current globe spin (radians)
  theta: number, // globe vertical tilt (radians)
  size: number // container width in CSS px
): { x: number; y: number; visible: boolean } {
  return projectVector(scaleVector(toCobeVector(lat, lng), MARKER_RADIUS), phi, theta, size);
}

export function projectRoutePoint(
  from: [number, number],
  to: [number, number],
  progress: number,
  phi: number,
  theta: number,
  size: number
): { x: number; y: number; visible: boolean; depth: number; screenRadius: number } {
  const startUnit = toCobeVector(from[0], from[1]);
  const endUnit = toCobeVector(to[0], to[1]);
  const start = scaleVector(startUnit, MARKER_RADIUS);
  const end = scaleVector(endUnit, MARKER_RADIUS);
  const control = scaleVector(normalize(addVectors(startUnit, endUnit)), ARC_CONTROL_RADIUS);
  const point = quadraticBezier(start, control, end, clamp(progress, 0, 1));

  return projectVector(point, phi, theta, size);
}

// ── Component types ─────────────────────────────────────────────────────────

export interface GlobeMarker {
  location: [number, number];
  size: number;
}

export interface GlobeArc {
  from: [number, number];
  to: [number, number];
  color?: RGB;
}

/** State passed to onFrame — lets parents compute overlay positions. */
export type GlobeFrameState = {
  phi: number;
  theta: number;
  layoutSize: number; // CSS px width of the globe container
};

interface GlobeProps {
  className?: string;
  markers?: GlobeMarker[];
  arcs?: GlobeArc[];
  ariaLabel?: string;
  fallbackText?: ReactNode;
  /** Called once per animation frame. Use for imperative DOM overlays. */
  onFrame?: (state: GlobeFrameState) => void;
}

// ── Globe component ─────────────────────────────────────────────────────────

export function Globe({ className, markers, arcs, ariaLabel, fallbackText, onFrame }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const supported = useSyncExternalStore(subscribeNoop, readWebGLSupport, serverSnapshot);
  const { resolvedTheme } = useTheme();

  // Stable ref to onFrame so the setup effect ([]) never has to rebuild.
  const onFrameRef = useRef(onFrame);
  useEffect(() => {
    onFrameRef.current = onFrame;
  }, [onFrame]);

  // Globe runtime state in refs (no re-renders needed).
  const themeRef = useRef<"dark" | "light">("dark");
  const themeDirtyRef = useRef(true);
  const phiRef = useRef(INITIAL_PHI);
  const thetaRef = useRef(INITIAL_THETA);
  const sizeRef = useRef(360);
  const sizeDirtyRef = useRef(true);
  const reduceMotionRef = useRef(false);

  // Drag state
  const isDraggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const lastPointerYRef = useRef(0);
  const pointerSpeedRef = useRef(0);
  const pointerThetaSpeedRef = useRef(0);
  const autoSpinRef = useRef(true);

  // Theme sync without globe teardown.
  useEffect(() => {
    const next = resolvedTheme === "light" ? "light" : "dark";
    if (next !== themeRef.current) {
      themeRef.current = next;
      themeDirtyRef.current = true;
    }
  }, [resolvedTheme]);

  // Main setup — runs once per mount.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    themeRef.current = document.documentElement.classList.contains("light") ? "light" : "dark";
    themeDirtyRef.current = true;
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Imperatively create canvas so React never reconciles it.
    const canvas = document.createElement("canvas");
    canvas.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    canvas.setAttribute("role", "img");
    canvas.setAttribute(
      "aria-label",
      ariaLabel ?? "Globo 3D interativo com rota de Brasília para a Irlanda."
    );
    container.appendChild(canvas);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const initialSize = Math.max(220, Math.round(container.clientWidth) || sizeRef.current);
    sizeRef.current = initialSize;
    const p = palette(themeRef.current);

    const cobeMarkers = (
      markers ?? [
        { location: BRASILIA, size: 0.07 },
        { location: IRELAND, size: 0.07 },
      ]
    ).map((m) => ({ location: m.location, size: m.size }));

    const cobeArcs = (arcs ?? [{ from: BRASILIA, to: IRELAND, color: p.arcColor }]).map((a) => ({
      from: a.from,
      to: a.to,
      color: a.color ?? p.arcColor,
    }));

    let globe: ReturnType<typeof createGlobe>;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: initialSize,
        height: initialSize,
        phi: INITIAL_PHI,
        theta: INITIAL_THETA,
        dark: p.dark,
        diffuse: p.diffuse,
        mapSamples: 20000,
        mapBrightness: p.mapBrightness,
        baseColor: p.baseColor,
        markerColor: p.markerColor,
        glowColor: p.glowColor,
        arcColor: p.arcColor,
        arcWidth: 2.0,
        arcHeight: ARC_HEIGHT,
        markerElevation: MARKER_ELEVATION,
        markers: cobeMarkers,
        arcs: cobeArcs,
      });
    } catch {
      canvas.remove();
      return;
    }

    // ── Resize observer ────────────────────────────────────────────────────
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      if (w > 0) {
        const next = Math.max(220, Math.round(w));
        if (next !== sizeRef.current) {
          sizeRef.current = next;
          sizeDirtyRef.current = true;
        }
      }
    });
    ro.observe(container);

    // ── Drag / pointer ─────────────────────────────────────────────────────
    const onPointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      autoSpinRef.current = false;
      lastPointerXRef.current = e.clientX;
      lastPointerYRef.current = e.clientY;
      pointerSpeedRef.current = 0;
      pointerThetaSpeedRef.current = 0;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastPointerXRef.current;
      const dy = e.clientY - lastPointerYRef.current;
      lastPointerXRef.current = e.clientX;
      lastPointerYRef.current = e.clientY;
      pointerSpeedRef.current = dx * 0.006;
      pointerThetaSpeedRef.current = dy * 0.004;
      phiRef.current += pointerSpeedRef.current;
      thetaRef.current = clamp(
        thetaRef.current + pointerThetaSpeedRef.current,
        MIN_THETA,
        MAX_THETA
      );
    };
    const onPointerUp = () => {
      isDraggingRef.current = false;
      canvas.style.cursor = "grab";
      setTimeout(() => {
        autoSpinRef.current = true;
      }, 1200);
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    // ── Animation loop ─────────────────────────────────────────────────────
    const rafId = { current: 0 };

    const frame = () => {
      if (isDraggingRef.current) {
        pointerSpeedRef.current *= 0.92;
        pointerThetaSpeedRef.current *= 0.92;
      } else if (!reduceMotionRef.current && autoSpinRef.current) {
        phiRef.current += pointerSpeedRef.current + SLOW_ROTATION_SPEED;
        pointerSpeedRef.current *= 0.88;
        thetaRef.current = clamp(
          thetaRef.current + pointerThetaSpeedRef.current,
          MIN_THETA,
          MAX_THETA
        );
        pointerThetaSpeedRef.current *= 0.88;
      }

      const update: Partial<COBEOptions> = {
        phi: phiRef.current,
        theta: thetaRef.current,
      };

      if (sizeDirtyRef.current) {
        update.width = sizeRef.current;
        update.height = sizeRef.current;
        sizeDirtyRef.current = false;
      }
      if (themeDirtyRef.current) {
        const tp = palette(themeRef.current);
        Object.assign(update, {
          dark: tp.dark,
          diffuse: tp.diffuse,
          mapBrightness: tp.mapBrightness,
          baseColor: tp.baseColor,
          markerColor: tp.markerColor,
          glowColor: tp.glowColor,
          arcColor: tp.arcColor,
          arcs: cobeArcs.map((a) => ({ from: a.from, to: a.to, color: tp.arcColor })),
        });
        themeDirtyRef.current = false;
      }

      globe.update(update);

      // Notify parent overlay (imperative; zero React re-renders).
      onFrameRef.current?.({
        phi: phiRef.current,
        theta: thetaRef.current,
        layoutSize: sizeRef.current,
      });

      rafId.current = requestAnimationFrame(frame);
    };
    rafId.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId.current);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      globe.destroy();
      canvas.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!supported) {
    return (
      <div
        className={`border-border bg-card/40 text-muted-foreground flex aspect-square w-full items-center justify-center rounded-full border text-center text-xs ${className ?? ""}`}
        role="img"
        aria-label="Globo 3D indisponível neste dispositivo"
      >
        <span className="px-6">
          {fallbackText ?? (
            <>
              Globo 3D não suportado neste dispositivo.
              <br />
              Brasília, DF → Irlanda.
            </>
          )}
        </span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden rounded-full ${className ?? ""}`}
    />
  );
}
