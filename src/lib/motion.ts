import type { Transition, Variants } from "framer-motion";

/**
 * Canonical easing/duration scale for the whole site. Every scroll/entrance
 * animation should consume this instead of inventing its own curve, so the
 * site reads as one coherent motion language rather than N unrelated demos.
 */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.35,
  base: 0.55,
  slow: 0.8,
} as const;

export const TRANSITION_BASE: Transition = {
  duration: DURATION.base,
  ease: EASE_OUT,
};

/** Standard fade-up entrance for hero/section content. Combine with `stagger`. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: TRANSITION_BASE },
};

/** Softer fade for elements that shouldn't travel far (badges, kickers). */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: TRANSITION_BASE },
};

/** Scroll-triggered reveal — pairs with `whileInView`. `once: true` avoids
 * re-triggering on scroll-back, and matches SSR (initial state never ships
 * as final indexable content). */
export const revealOnView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-80px" },
} as const;

/** Stagger wrapper for a group of `fadeUp`/`fadeIn` children. */
export function stagger(delayChildren = 0, staggerChildren = 0.1): Transition {
  return { delayChildren, staggerChildren };
}
