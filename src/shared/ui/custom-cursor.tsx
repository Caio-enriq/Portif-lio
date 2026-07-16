"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CustomCursorProps {
  className?: string;
}

export function CustomCursor({ className }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      trail.style.transform = `translate(${trailX - 16}px, ${trailY - 16}px)`;
      requestAnimationFrame(animateTrail);
    };

    document.addEventListener("mousemove", handleMouseMove);
    const animationId = requestAnimationFrame(animateTrail);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={cn(
          "bg-primary pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full mix-blend-difference transition-[width,height] duration-200",
          className
        )}
      />
      <div
        ref={trailRef}
        className={cn(
          "border-primary/40 pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full border mix-blend-difference transition-[width,height,border-color] duration-300",
          className
        )}
      />
    </>
  );
}
