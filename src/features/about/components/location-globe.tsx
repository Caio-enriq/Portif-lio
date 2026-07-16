"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Globe as GlobeIcon, MapPin, Plane, Target, type LucideIcon } from "lucide-react";
import {
  Globe,
  projectGlobe,
  projectRoutePoint,
  BRASILIA,
  IRELAND,
  type GlobeFrameState,
} from "@/components/molecules/globe";

// ── Airplane timing ────────────────────────────────────────────────────────
const TRAVEL_MS = 7000; // ms for one Brasília → Ireland journey
const PAUSE_MS = 2500; // ms pause at Ireland before reset
const TOTAL_MS = TRAVEL_MS + PAUSE_MS;
const ROUTE_SAMPLE_STEP = 0.012;

/** Smooth ease-in-out for the flight progress. */
function easeInOut(x: number): number {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

type LocationId = "brasilia" | "ireland";

type LabelPlacement = "above" | "below";

type ProjectedLocation = {
  id: LocationId;
  name: string;
  latitude: number;
  longitude: number;
  screenX: number;
  screenY: number;
  visible: boolean;
  labelOffsetX: number;
  labelOffsetY: number;
  transform: string;
};

function getLabelTransform(
  screenX: number,
  screenY: number,
  size: number,
  preferredPlacement: LabelPlacement
): { labelOffsetX: number; labelOffsetY: number; transform: string } {
  const gap = 12;
  const edge = size * 0.27;

  if (screenX < edge) {
    return {
      labelOffsetX: gap,
      labelOffsetY: 0,
      transform: `translate(${gap}px, -50%)`,
    };
  }

  if (screenX > size - edge) {
    return {
      labelOffsetX: -gap,
      labelOffsetY: 0,
      transform: `translate(calc(-100% - ${gap}px), -50%)`,
    };
  }

  const shouldPlaceBelow = preferredPlacement === "below" || screenY < size * 0.22;
  const labelOffsetY = shouldPlaceBelow ? gap : -gap;

  return {
    labelOffsetX: 0,
    labelOffsetY,
    transform: shouldPlaceBelow
      ? `translate(-50%, ${gap}px)`
      : `translate(-50%, calc(-100% - ${gap}px))`,
  };
}

function applyProjectedLocation(element: HTMLDivElement | null, location: ProjectedLocation) {
  if (!element) return;

  element.style.left = `${location.screenX}px`;
  element.style.top = `${location.screenY}px`;
  element.style.opacity = location.visible ? "1" : "0";
  element.style.transform = location.transform;
}

// ── Legend component ───────────────────────────────────────────────────────
function LegendItem({
  icon: Icon,
  dotClass,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  dotClass: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border-border bg-card/50 hover:border-primary/40 flex items-center gap-3 rounded-lg border p-3 backdrop-blur-sm transition-colors">
      <span className={`relative flex h-2.5 w-2.5 shrink-0 rounded-full ${dotClass}`}>
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dotClass} opacity-60`}
        />
      </span>
      <Icon className="text-primary h-4 w-4 shrink-0" />
      <div className="min-w-0">
        <p className="text-sm leading-tight font-semibold">{title}</p>
        <p className="text-muted-foreground text-xs leading-tight">{subtitle}</p>
      </div>
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
interface LocationGlobeProps {
  isEn: boolean;
}

export function LocationGlobe({ isEn }: LocationGlobeProps) {
  // ── Overlay DOM refs (imperatively updated each frame, zero re-renders) ──
  const brasiliaRef = useRef<HTMLDivElement>(null);
  const irelandRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);

  /**
   * Called by <Globe> once per animation frame.
   * We update the overlay elements imperatively via style so React never
   * has to re-render — this keeps the overlay perfectly in sync with WebGL.
   */
  const handleFrame = useCallback(
    (state: GlobeFrameState) => {
      const { phi, theta, layoutSize: size } = state;

      const locationRefs: Record<LocationId, HTMLDivElement | null> = {
        brasilia: brasiliaRef.current,
        ireland: irelandRef.current,
      };

      const locations: ProjectedLocation[] = [
        {
          id: "brasilia",
          name: "Brasília",
          latitude: BRASILIA[0],
          longitude: BRASILIA[1],
          ...(() => {
            const projected = projectGlobe(BRASILIA[0], BRASILIA[1], phi, theta, size);
            const label = getLabelTransform(projected.x, projected.y, size, "below");
            return {
              screenX: projected.x,
              screenY: projected.y,
              visible: projected.visible,
              ...label,
            };
          })(),
        },
        {
          id: "ireland",
          name: isEn ? "Ireland" : "Irlanda",
          latitude: IRELAND[0],
          longitude: IRELAND[1],
          ...(() => {
            const projected = projectGlobe(IRELAND[0], IRELAND[1], phi, theta, size);
            const label = getLabelTransform(projected.x, projected.y, size, "above");
            return {
              screenX: projected.x,
              screenY: projected.y,
              visible: projected.visible,
              ...label,
            };
          })(),
        },
      ];

      locations.forEach((location) => {
        applyProjectedLocation(locationRefs[location.id], location);
      });

      // ── Airplane along the same 3D quadratic arc used by cobe ──────────────
      if (planeRef.current) {
        const cycle = performance.now() % TOTAL_MS;
        const rawT = Math.min(cycle / TRAVEL_MS, 1.0);
        const t = easeInOut(rawT); // smooth progress 0→1

        const aPos = projectRoutePoint(BRASILIA, IRELAND, t, phi, theta, size);

        // Compute forward direction on screen for icon rotation
        const tNext = Math.min(rawT + ROUTE_SAMPLE_STEP, 1);
        const nPos = projectRoutePoint(BRASILIA, IRELAND, easeInOut(tNext), phi, theta, size);
        const dx = nPos.x - aPos.x;
        const dy = nPos.y - aPos.y;
        // Lucide <Plane> default orientation is upper-right ≈ −45°, so subtract 45°
        const iconDeg = Math.hypot(dx, dy) > 0.001 ? Math.atan2(dy, dx) * (180 / Math.PI) - 45 : 0;

        // Hide plane during the pause period or when on back of globe
        const isVisible = rawT < 0.97 && aPos.visible;

        planeRef.current.style.left = `${aPos.x}px`;
        planeRef.current.style.top = `${aPos.y}px`;
        planeRef.current.style.opacity = isVisible ? "1" : "0";
        planeRef.current.style.transform = `translate(-50%, -50%) rotate(${iconDeg.toFixed(1)}deg)`;
      }
    },
    [isEn]
  ); // stable — only reads refs + module-level constants + language label

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-14"
      data-testid="location-globe"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="mb-2 flex items-center justify-center gap-2 text-2xl font-bold">
          <GlobeIcon className="text-primary h-5 w-5" />
          {isEn ? "Where I am and where I'm going" : "Onde estou e para onde vou"}
        </h2>
        <p className="text-muted-foreground text-sm">
          {isEn
            ? "Based in Brasília. Ireland is my next destination. Drag to explore."
            : "Baseado em Brasília, com a Irlanda como próximo destino. Arraste para explorar."}
        </p>
      </div>

      <div className="mx-auto flex max-w-md flex-col items-center gap-6">
        {/*
          Outer container: position:relative so overlays are positioned against it.
          The Globe inside is overflow:hidden + rounded-full for clipping.
          Labels and airplane live OUTSIDE Globe's clip (siblings, not children).
        */}
        <div className="relative aspect-square w-full max-w-[420px]">
          {/* Ambient glow */}
          <div className="bg-primary/10 pointer-events-none absolute inset-0 rounded-full blur-3xl" />

          {/* 3D Globe — arc and markers rendered natively in WebGL */}
          <div className="absolute inset-0">
            <Globe
              key={isEn ? "globe-en" : "globe-pt"}
              ariaLabel={
                isEn
                  ? "Interactive 3D globe showing the route from Brasília to Ireland."
                  : "Globo 3D interativo com rota de Brasília para a Irlanda."
              }
              fallbackText={
                isEn ? (
                  <>
                    3D globe unavailable on this device.
                    <br />
                    Brasília, DF → Ireland.
                  </>
                ) : (
                  <>
                    Globo 3D não suportado neste dispositivo.
                    <br />
                    Brasília, DF → Irlanda.
                  </>
                )
              }
              onFrame={handleFrame}
            />
          </div>

          {/*
            ── OVERLAYS ──────────────────────────────────────────────────────
            These are siblings of the Globe's wrapper, so they are NOT clipped
            by Globe's rounded-full overflow:hidden.
            Positions are updated imperatively by handleFrame() at 60 fps.
          */}

          {/* Brasília label — centered horizontally, pushed below the dot */}
          <div
            ref={brasiliaRef}
            data-testid="globe-label-brasilia"
            className="pointer-events-none absolute"
            style={{
              opacity: 0,
              transform: "translate(-50%, 10px)",
              transition: "opacity 0.2s",
            }}
            aria-hidden="true"
          >
            <span className="bg-background/90 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 shadow-md backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              Brasília
            </span>
          </div>

          {/* Ireland label — centered horizontally, pushed above the dot */}
          <div
            ref={irelandRef}
            data-testid="globe-label-ireland"
            className="pointer-events-none absolute"
            style={{
              opacity: 0,
              transform: "translate(-50%, calc(-100% - 10px))",
              transition: "opacity 0.2s",
            }}
            aria-hidden="true"
          >
            <span className="border-primary/40 bg-background/90 text-primary inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold shadow-md backdrop-blur-sm">
              <span className="bg-primary h-1.5 w-1.5 rounded-full shadow-[0_0_6px_#818cf8]" />
              {isEn ? "Ireland" : "Irlanda"}
            </span>
          </div>

          {/* Airplane — follows great-circle path, rotates toward destination */}
          <div
            ref={planeRef}
            data-testid="globe-plane"
            className="pointer-events-none absolute"
            style={{
              opacity: 0,
              transform: "translate(-50%, -50%) rotate(0deg)",
              transition: "opacity 0.3s",
            }}
            aria-hidden="true"
          >
            <div className="border-primary/30 bg-background/90 text-primary flex h-7 w-7 items-center justify-center rounded-full border shadow-[0_0_18px_rgba(129,140,248,0.6)] backdrop-blur-sm">
              <Plane className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Drag hint */}
          <div
            className="border-border/40 bg-background/60 text-muted-foreground pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border px-3 py-1 text-[9px] font-medium backdrop-blur-sm"
            aria-hidden="true"
          >
            {isEn ? "drag to rotate" : "arraste para girar"}
          </div>
        </div>

        {/* Legend */}
        <div className="grid w-full gap-3 sm:grid-cols-2">
          <LegendItem
            icon={MapPin}
            dotClass="bg-emerald-400"
            title="Brasília, DF"
            subtitle={isEn ? "Where I live" : "Onde moro"}
          />
          <LegendItem
            icon={Target}
            dotClass="bg-primary"
            title={isEn ? "Ireland" : "Irlanda"}
            subtitle={isEn ? "My goal" : "Minha meta"}
          />
        </div>
      </div>
    </motion.section>
  );
}
