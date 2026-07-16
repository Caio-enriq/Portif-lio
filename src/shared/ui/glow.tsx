"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowProps {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "purple" | "green" | "amber";
  intensity?: "sm" | "md" | "lg";
  hover?: boolean;
}

const colorMap = {
  primary: "from-primary/20 via-primary/5 to-transparent",
  purple: "from-purple-500/20 via-purple-500/5 to-transparent",
  green: "from-green-500/20 via-green-500/5 to-transparent",
  amber: "from-amber-500/20 via-amber-500/5 to-transparent",
};

const intensityMap = {
  sm: "blur-xl",
  md: "blur-2xl",
  lg: "blur-3xl",
};

export function Glow({
  children,
  className,
  color = "primary",
  intensity = "md",
  hover = false,
}: GlowProps) {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        className={cn(
          "pointer-events-none absolute -inset-4 rounded-2xl bg-gradient-to-r opacity-0",
          colorMap[color],
          intensityMap[intensity],
          hover && "group-hover:opacity-100",
          !hover && "opacity-100"
        )}
        animate={!hover ? { opacity: [0.5, 1, 0.5] } : undefined}
        transition={!hover ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
