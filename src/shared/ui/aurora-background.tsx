"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { Spotlight } from "@/shared/ui/spotlight";

interface AuroraBackgroundProps {
  /** `hero` = full mesh (WebGL + blobs + grain + optional spotlight);
   *  `condensed` = CSS blobs only, cheap enough for multiple sections. */
  variant?: "hero" | "condensed";
  /** 0..1 multiplier on WebGL + blob intensity. */
  intensity?: number;
  /** Mount a pointer-tracking Spotlight (hero only). */
  spotlight?: boolean;
  /** Let the WebGL flow field drift toward the cursor (hero only). */
  mouseReact?: boolean;
  className?: string;
}

const BLOBS = [
  {
    color: "129, 140, 248",
    size: 460,
    top: "38%",
    left: "8%",
    right: "auto",
    anim: "aurora-drift 26s ease-in-out infinite",
  },
  {
    color: "192, 132, 252",
    size: 420,
    top: "52%",
    left: "auto",
    right: "6%",
    anim: "aurora-drift-2 32s ease-in-out infinite",
  },
  {
    color: "45, 212, 191",
    size: 380,
    top: "72%",
    left: "40%",
    right: "auto",
    anim: "aurora-drift-3 28s ease-in-out infinite",
  },
] as const;

/**
 * The single aurora stack. Owns the only WebGL instance on the page and all its
 * performance concerns: pauses the shader via IntersectionObserver when the
 * host is off-screen, lowers intensity in light mode, and degrades to CSS blobs
 * when WebGL is unavailable or for `variant="condensed"` sections.
 */
export function AuroraBackground({
  variant = "hero",
  intensity = 1,
  spotlight = false,
  mouseReact = false,
  className,
}: AuroraBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  const isHero = variant === "hero";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      rootMargin: "200px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const webglOpacity = (isLight ? 0.07 : 0.22) * intensity;
  const blobOpacity = (isHero ? 0.6 : 0.4) * intensity;

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {isHero && (
        <WebGLShader
          opacity={webglOpacity}
          active={active}
          mouseReact={mouseReact}
          light={isLight}
        />
      )}

      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className="aurora-blob absolute"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            background: `radial-gradient(circle, rgba(${
              i === 0 ? (isLight ? "79, 70, 229" : "129, 140, 248") : blob.color
            }, 0.55), transparent 70%)`,
            opacity: blobOpacity,
            animation: blob.anim,
          }}
        />
      ))}

      <div className="grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      {/* Light-mode scrim so the WebGL doesn't muddy the bright navbar region. */}
      {isLight && (
        <div className="from-background/60 absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent" />
      )}

      {spotlight && isHero && <Spotlight />}
    </div>
  );
}
