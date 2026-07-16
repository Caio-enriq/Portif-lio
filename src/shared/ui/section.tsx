import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "muted" | "accent" | "gradient";
  spacing?: "sm" | "md" | "lg" | "xl";
  as?: "section" | "div" | "article";
}

const variantStyles = {
  default: "",
  muted: "bg-muted/50",
  accent: "bg-primary/5",
  gradient: "bg-gradient-to-br from-primary/5 via-background to-purple-500/5",
};

const spacingStyles = {
  sm: "py-12",
  md: "py-20",
  lg: "py-28",
  xl: "py-36",
};

export function Section({
  children,
  variant = "default",
  spacing = "md",
  as: Tag = "section",
  className,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn(variantStyles[variant], spacingStyles[spacing], className)} {...props}>
      {children}
    </Tag>
  );
}
