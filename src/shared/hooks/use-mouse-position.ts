"use client";

import { useEffect, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
  /** Pointer position relative to viewport centre: -0.5 (left/top) .. 0.5 (right/bottom). */
  nx: number;
  ny: number;
}

const INITIAL: MousePosition = { x: 0, y: 0, nx: 0, ny: 0 };

/**
 * Tracks the pointer position relative to the viewport, rAF-batched so there is
 * at most one state update per frame. SSR-safe (returns zeros until mount).
 *
 * NOTE: this re-renders the consumer on pointer move. For full-bleed effects
 * that must stay smooth at all times (e.g. Spotlight), prefer wiring a
 * `pointermove` listener directly to framer MotionValues so there is no React
 * re-render per frame.
 */
export function useMousePosition(): MousePosition {
  const [pos, setPos] = useState<MousePosition>(INITIAL);

  useEffect(() => {
    let frame = 0;
    let pending: MousePosition | null = null;

    const onMove = (event: PointerEvent) => {
      pending = {
        x: event.clientX,
        y: event.clientY,
        nx: event.clientX / window.innerWidth - 0.5,
        ny: event.clientY / window.innerHeight - 0.5,
      };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (pending) setPos(pending);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return pos;
}
