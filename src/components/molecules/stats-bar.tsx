"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FolderOpen, Play, Globe, BookOpen, Code2, Zap } from "lucide-react";

const statKeys = [
  { icon: FolderOpen, value: "5+", key: "projects", color: "text-blue-500" },
  { icon: Play, value: "3", key: "demos", color: "text-green-500" },
  { icon: Globe, value: "4º", key: "semester", color: "text-purple-500" },
  { icon: BookOpen, value: "12.5k+", key: "lines", color: "text-amber-500" },
  { icon: Code2, value: "6+", key: "techs", color: "text-cyan-500" },
  { icon: Zap, value: "2", key: "llms", color: "text-pink-500" },
];

export function StatsBar() {
  const t = useTranslations("stats");

  return (
    <section className="border-border bg-card/50 relative border-y backdrop-blur-sm">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-3 md:grid-cols-6">
        {statKeys.map((stat, i) => (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div
              className={`bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg`}
            >
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-muted-foreground text-[10px] leading-tight">{t(stat.key)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
