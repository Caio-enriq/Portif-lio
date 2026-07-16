import type { Transition, Variants } from "framer-motion";

/**
 * Shared animation presets — the single source of truth for motion across the
 * site. Replaces ad-hoc `initial`/`animate` literals and the local `heroMotion`
 * that used to live in the hero.
 *
 * Every variant uses {@link EASE_OUT_EXPO} so the whole product moves with one
 * feel. Hooks/components that are JS-driven must additionally collapse to an
 * instant state under reduced-motion via {@link prefersReducedInstant}.
 */

/** Expo-out easing (the curve the hero already used). */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

/** Canonical durations, in seconds. */
export const DUR = {
  fast: 0.35,
  base: 0.55,
  slow: 0.8,
} as const;

/** Shared `whileInView` viewport config — fire once, slightly before in view. */
export const viewportOnce = { once: true, margin: "0px 0px -10% 0px" } as const;

const baseTransition: Transition = { duration: DUR.base, ease: EASE_OUT_EXPO };

/** Fade + rise. The workhorse entrance variant. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

/** Fade + soft blur-off. Drops to `fadeUp` behaviour under reduced-motion. */
export const blurIn: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: baseTransition },
};

/** Fade + scale-in — used for the orbit / hero art column. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: baseTransition },
};

/**
 * Stagger container. Children should reference `fadeUp`/`blurIn`/`scaleIn`.
 * @example variants={stagger(0.08)} initial="hidden" animate="visible"
 */
export function stagger(step = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: step, delayChildren },
    },
  };
}

/**
 * Returns a copy of a variant with its transition collapsed to zero duration —
 * use when `useIsReducedMotion()` is true so entrances are instant. Only the
 * `visible` state's transition is affected; the end values are preserved.
 */
export function prefersReducedInstant(variant: Variants): Variants {
  const visible = variant.visible;
  if (typeof visible !== "object" || visible === null) return variant;
  return {
    ...variant,
    visible: { ...visible, transition: { duration: 0 } },
  };
}
