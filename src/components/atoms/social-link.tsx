import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

export function SocialLink({ href, label, icon, className }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "border-border bg-card text-muted-foreground hover:border-accent hover:text-accent flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:shadow-[0_0_20px_rgb(var(--glow-rgb)/0.15)]",
        className
      )}
    >
      {icon}
    </Link>
  );
}
