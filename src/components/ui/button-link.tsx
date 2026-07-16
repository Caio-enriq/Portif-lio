import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  target,
  rel,
  variant,
  size,
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </Link>
  );
}
