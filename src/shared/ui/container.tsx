import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeStyles = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export function Container({ children, size = "md", className, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto px-6", sizeStyles[size], className)} {...props}>
      {children}
    </div>
  );
}
