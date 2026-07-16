import { cn } from "@/lib/utils";

interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "primary" | "purple" | "ocean" | "sunset" | "mesh";
}

const variantStyles = {
  primary: "from-primary/10 via-primary/5 to-transparent",
  purple: "from-purple-500/10 via-purple-500/5 to-transparent",
  ocean: "from-cyan-500/10 via-blue-500/5 to-transparent",
  sunset: "from-orange-500/10 via-red-500/5 to-transparent",
  mesh: "from-primary/5 via-purple-500/5 to-cyan-500/5",
};

export function Gradient({ children, variant = "primary", className, ...props }: GradientProps) {
  return (
    <div className={cn("bg-gradient-to-br", variantStyles[variant], className)} {...props}>
      {children}
    </div>
  );
}
