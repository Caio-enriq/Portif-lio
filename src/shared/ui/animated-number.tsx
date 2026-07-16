"use client";

import { useCountUp } from "@/shared/hooks/use-count-in-view";
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  /** Target value. */
  value: number;
  start?: number;
  /** Animation length (seconds). */
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Use compact notation (e.g. "12K"). Default is locale-grouped ("12,500"). */
  compact?: boolean;
  decimals?: number;
  /** BCP-47 locale tag for formatting. */
  locale?: string;
  className?: string;
}

/**
 * Counts up to `value` once in view. The animated text is presentational — the
 * `aria-label` is always the final formatted value so screen readers don't
 * announce every frame. Snaps instantly under reduced-motion.
 */
export function AnimatedNumber({
  value,
  start = 0,
  duration,
  prefix = "",
  suffix = "",
  compact = false,
  decimals,
  locale = "en-US",
  className,
}: AnimatedNumberProps) {
  const { ref, value: current } = useCountUp({ end: value, start, duration });

  const options: Intl.NumberFormatOptions = {
    notation: compact ? "compact" : "standard",
  };
  if (decimals !== undefined) {
    options.minimumFractionDigits = decimals;
    options.maximumFractionDigits = decimals;
  }

  const formatter = new Intl.NumberFormat(locale, options);
  const display = `${prefix}${formatter.format(current)}${suffix}`;
  const aria = `${prefix}${formatter.format(value)}${suffix}`;

  return (
    <span ref={ref} className={cn("tabular-nums", className)} aria-label={aria}>
      {display}
    </span>
  );
}
