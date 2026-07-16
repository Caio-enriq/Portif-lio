import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "card";
  width?: string;
  height?: string;
  lines?: number;
}

const variantStyles = {
  text: "h-4 rounded",
  circular: "rounded-full",
  rectangular: "rounded-lg",
  card: "rounded-xl",
};

export function Skeleton({
  variant = "text",
  width,
  height,
  lines = 1,
  className,
  ...props
}: SkeletonProps) {
  if (variant === "text" && lines > 1) {
    return (
      <div className={cn("space-y-2", className)} {...props}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn("bg-muted animate-pulse", variantStyles.text, i === lines - 1 && "w-3/4")}
            style={{ width: width, height: height }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("bg-muted animate-pulse", variantStyles[variant], className)}
      style={{ width: width, height: height }}
      {...props}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="border-border bg-card rounded-xl border p-6">
      <div className="mb-4 flex items-start justify-between">
        <div className="space-y-2">
          <Skeleton variant="rectangular" width="80px" height="24px" />
          <Skeleton variant="text" width="200px" />
          <Skeleton variant="text" width="150px" />
        </div>
      </div>
      <Skeleton variant="text" lines={3} className="mb-4" />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width="60px" height="24px" />
        <Skeleton variant="rectangular" width="60px" height="24px" />
        <Skeleton variant="rectangular" width="60px" height="24px" />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="flex items-center gap-12 py-28">
      <div className="flex-1 space-y-4">
        <Skeleton variant="text" width="150px" />
        <Skeleton variant="rectangular" width="400px" height="48px" />
        <Skeleton variant="text" width="300px" />
        <Skeleton variant="text" lines={3} />
        <div className="flex gap-3 pt-4">
          <Skeleton variant="rectangular" width="140px" height="40px" />
          <Skeleton variant="rectangular" width="140px" height="40px" />
        </div>
      </div>
      <div className="hidden md:block">
        <Skeleton variant="circular" width="300px" height="300px" />
      </div>
    </div>
  );
}
