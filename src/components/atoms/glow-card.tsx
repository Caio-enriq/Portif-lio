"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group border-border bg-card hover:border-accent/40 relative overflow-hidden rounded-xl border transition-colors",
        className
      )}
    >
      {/* Glow effect */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity group-hover:opacity-100">
        <div className="from-primary/10 to-primary/10 absolute inset-0 bg-gradient-to-r via-transparent blur-xl" />
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}
