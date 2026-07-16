"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useIsReducedMotion } from "@/shared/hooks/use-media-query";

interface SpotlightProps {
  /** Glow colour as an `"R, G, B"` triplet. */
  color?: string;
  /** Spotlight diameter in px. */
  size?: number;
  /** Peak opacity of the glow (0..1). */
  intensity?: number;
  className?: string;
}

/**
 * Full-bleed radial highlight that tracks the pointer. Renders a soft glow
 * pinned to the cursor inside its parent. Uses framer MotionValues so there is
 * no React re-render per frame.
 *
 * Under reduced-motion it renders a static, dimmer, top-centred glow (no
 * pointer tracking, no entrance animation).
 */
export function Spotlight({ color, size = 520, intensity = 0.5, className }: SpotlightProps) {
  const reduce = useIsReducedMotion();
  const { resolvedTheme } = useTheme();
  // Tracks the theme primary so the glow matches indigo (dark) / indigo-600 (light).
  const glow = color ?? (resolvedTheme === "light" ? "79, 70, 229" : "129, 140, 248");
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(18);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set(((event.clientX - rect.left) / rect.width) * 100);
      my.set(((event.clientY - rect.top) / rect.height) * 100);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, mx, my]);

  if (reduce) {
    return (
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0", className)}
        style={{
          background: `radial-gradient(${size}px at 50% 18%, rgba(${glow}, ${intensity * 0.4}), transparent 70%)`,
        }}
      />
    );
  }

  const background = useMotionTemplate`radial-gradient(${size}px at ${mx}% ${my}%, rgba(${glow}, ${intensity}), transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ background }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
