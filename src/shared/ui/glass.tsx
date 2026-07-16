import { cn } from "@/lib/utils";

/**
 * Frosted-glass surface primitives — the site's shared surface language.
 *
 * Convention (matches the rest of the codebase): translucent `bg-card/NN` +
 * `backdrop-blur-*`, never `bg-white/`. The indigo inner wash mirrors the
 * inset/glow precedent in `radial-orbital-timeline.tsx`.
 */

export type GlassVariant = "subtle" | "default" | "elevated";
export type GlassGlow = "primary" | "purple" | "teal" | "none";

const VARIANT: Record<GlassVariant, string> = {
  subtle: "bg-card/20 backdrop-blur-sm border border-border/40",
  default: "bg-card/30 backdrop-blur-md border border-border/60",
  elevated: "bg-card/50 backdrop-blur-xl border border-border/80",
};

/** Inner indigo wash — the "lit from within" enterprise-glass read. */
const INSET_SHADOW = "inset 0 0 60px rgb(var(--glow-rgb) / 0.05)";

const GLOW_SHADOW: Record<Exclude<GlassGlow, "none">, string> = {
  primary: "0 0 50px -12px rgb(var(--glow-rgb) / 0.45)",
  purple: "0 0 50px -12px rgba(192,132,252,0.45)",
  teal: "0 0 50px -12px rgba(45,212,191,0.40)",
};

interface GlassSurfaceProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: GlassVariant;
  glow?: GlassGlow;
  inset?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Low-level frosted surface (no opinionated padding/radius). Polymorphic via
 * `as`. Use directly for halos, backdrops, and bands; prefer {@link GlassCard}
 * for content tiles.
 */
export function GlassSurface({
  as: Tag = "div",
  variant = "default",
  glow = "none",
  inset = true,
  className,
  style,
  children,
  ...props
}: GlassSurfaceProps) {
  const boxShadow = [inset ? INSET_SHADOW : null, glow !== "none" ? GLOW_SHADOW[glow] : null]
    .filter(Boolean)
    .join(", ");

  return (
    <Tag
      className={cn(VARIANT[variant], className)}
      style={{ boxShadow: boxShadow || undefined, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}

interface GlassCardProps extends Omit<GlassSurfaceProps, "inset"> {
  /** Enable the hover treatment: border highlight + inner glow + shimmer sweep. */
  hover?: boolean;
  inset?: boolean;
}

/**
 * Opinionated frosted tile: {@link GlassSurface} + `rounded-xl` + padding, with
 * an optional VIP hover treatment (shimmer + glow).
 */
export function GlassCard({
  className,
  hover = false,
  variant = "default",
  glow = "none",
  inset = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <GlassSurface
      variant={variant}
      glow={glow}
      inset={inset}
      className={cn(
        "group relative overflow-hidden rounded-xl p-5",
        hover && "shimmer-sweep hover:border-primary/40 transition-colors duration-300",
        className
      )}
      {...props}
    >
      {hover && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div className="from-primary/15 absolute -inset-px bg-gradient-to-br via-transparent to-purple-500/10 blur-md" />
        </div>
      )}
      <div className="relative">{children}</div>
    </GlassSurface>
  );
}

interface GlassPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Render a pulsing status dot (e.g. availability indicator). */
  dot?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/** Compact frosted chip — availability pills, tags, badges. */
export function GlassPill({ dot = false, className, children, ...props }: GlassPillProps) {
  return (
    <span
      className={cn(
        "bg-card/30 border-border/60 text-foreground/90 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-[inset_0_0_30px_rgb(var(--glow-rgb)/0.05)] backdrop-blur-md",
        className
      )}
      {...props}
    >
      {dot && (
        <span aria-hidden className="relative flex h-1.5 w-1.5">
          <span className="status-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
      )}
      {children}
    </span>
  );
}
