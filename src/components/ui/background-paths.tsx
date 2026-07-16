"use client";

import { motion } from "framer-motion";

function SVGPath({
  d,
  strokeWidth = 1,
  stroke = "currentColor",
  opacity = 0.15,
  delay = 0,
  duration = 20,
}: {
  d: string;
  strokeWidth?: number;
  stroke?: string;
  opacity?: number;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
      opacity={opacity}
      initial={{ pathLength: 0, pathOffset: 0 }}
      animate={{ pathLength: 1, pathOffset: 0 }}
      transition={{
        pathLength: {
          delay,
          duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 5,
        },
      }}
    />
  );
}

const PATHS = [
  {
    d: "M-100,200 C200,100 400,300 600,200 S1000,100 1200,200 S1600,300 1800,200",
    opacity: 0.08,
    duration: 25,
  },
  {
    d: "M-50,350 C250,250 450,450 700,350 S1100,250 1350,350 S1700,450 1900,350",
    opacity: 0.06,
    duration: 30,
    delay: 2,
  },
  {
    d: "M-200,500 C100,400 350,600 600,500 S950,400 1200,500 S1550,600 1800,500",
    opacity: 0.05,
    duration: 28,
    delay: 4,
  },
  {
    d: "M-150,150 C150,50 400,250 650,150 S1050,50 1300,150 S1650,250 1900,150",
    opacity: 0.07,
    duration: 22,
    delay: 1,
  },
  {
    d: "M-100,450 C200,350 500,550 750,450 S1150,350 1400,450 S1750,550 2000,450",
    opacity: 0.04,
    duration: 35,
    delay: 3,
  },
  {
    d: "M0,300 C300,200 500,400 800,300 S1200,200 1500,300 S1800,400 2100,300",
    opacity: 0.06,
    duration: 26,
    delay: 5,
  },
];

export function BackgroundPaths({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <svg
        className="absolute h-full w-full"
        viewBox="0 0 1920 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {PATHS.map((p, i) => (
          <SVGPath
            key={i}
            d={p.d}
            stroke="url(#path-gradient)"
            strokeWidth={1.5}
            opacity={p.opacity}
            delay={p.delay}
            duration={p.duration}
          />
        ))}
      </svg>
    </div>
  );
}
