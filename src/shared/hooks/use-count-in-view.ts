"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useIsReducedMotion } from "@/shared/hooks/use-media-query";
import { viewportOnce } from "@/shared/ui/motion";

interface UseCountUpOptions {
  end: number;
  /** Animation length in seconds. */
  duration?: number;
  start?: number;
}

export interface UseCountUpResult {
  ref: React.RefObject<HTMLSpanElement | null>;
  value: number;
  hasStarted: boolean;
}

/** Scalar expo-out easing — the numeric analogue of the site's EASE_OUT_EXPO. */
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Counts from `start` to `end` once the element scrolls into view.
 * Reduced-motion users get the final value instantly (no rAF loop).
 */
export function useCountUp({
  end,
  duration = 1.4,
  start = 0,
}: UseCountUpOptions): UseCountUpResult {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useIsReducedMotion();
  const inView = useInView(ref, viewportOnce);
  const [value, setValue] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!inView) return;

    let raf = requestAnimationFrame(() => {
      setHasStarted(true);

      if (reduce) {
        setValue(end);
        return;
      }

      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / (duration * 1000), 1);
        setValue(start + (end - start) * easeOutExpo(p));
        if (p < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [inView, reduce, end, start, duration]);

  return { ref, value, hasStarted };
}
