import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: HeadingLevel;
  variant?: "display" | "title" | "subtitle" | "section" | "card";
  gradient?: boolean;
  centered?: boolean;
}

const variantStyles = {
  display: "text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl",
  title: "text-4xl font-bold tracking-tight sm:text-5xl",
  subtitle: "text-xl font-semibold text-primary",
  section: "text-3xl font-bold tracking-tight",
  card: "text-lg font-semibold tracking-tight",
};

export function Heading({
  children,
  as: Tag = "h2",
  variant = "section",
  gradient = false,
  centered = false,
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        variantStyles[variant],
        gradient &&
          "from-primary to-primary/70 bg-gradient-to-r via-purple-400 bg-clip-text text-transparent",
        centered && "text-center",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
