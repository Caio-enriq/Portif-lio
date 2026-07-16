"use client";

import { useCallback, useRef, type PointerEvent } from "react";
import { useMotionValue, useSpring, useTransform, type MotionStyle } from "framer-motion";
import { useIsReducedMotion } from "@/shared/hooks/use-media-query";

interface UseTiltOptions {
  /** Max rotation, in degrees. */
  max?: number;
  /** Resting scale (subtle lift). */
  scale?: number;
  /** Spring stiffness / damping for the ease-back. */
  stiffness?: number;
  damping?: number;
}

export interface UseTiltResult {
  ref: React.RefObject<HTMLDivElement | null>;
  style: MotionStyle;
  onMouseMove: (event: PointerEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
}

/**
 * Pointer-driven 3D tilt. Spread `{ ref, style, onMouseMove, onMouseLeave }`
 * onto a single element. Rotation springs back to neutral on leave.
 *
 * Inert under reduced-motion (returns an empty style + no-op handlers) so the
 * surface stays flat and stable.
 */
export function useTilt({
  max = 6,
  scale = 1.01,
  stiffness = 150,
  damping = 15,
}: UseTiltOptions = {}): UseTiltResult {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useIsReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, { stiffness, damping, mass: 0.2 });
  const springY = useSpring(py, { stiffness, damping, mass: 0.2 });

  const rotateY = useTransform(springX, (v) => (v - 0.5) * max * 2);
  const rotateX = useTransform(springY, (v) => (0.5 - v) * max * 2);

  const onMouseMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (reduce) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      px.set((event.clientX - rect.left) / rect.width);
      py.set((event.clientY - rect.top) / rect.height);
    },
    [reduce, px, py]
  );

  const onMouseLeave = useCallback(() => {
    px.set(0.5);
    py.set(0.5);
  }, [px, py]);

  const style: MotionStyle = reduce ? {} : { rotateX, rotateY, scale, transformPerspective: 900 };

  return { ref, style, onMouseMove, onMouseLeave };
}
