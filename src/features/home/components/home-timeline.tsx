"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, Code2, Lightbulb, Rocket } from "lucide-react";

const timeline = [
  { year: "2018-2021", icon: Lightbulb, key: "pandemic" },
  { year: "2023-2024", icon: Briefcase, key: "bunge" },
  { year: "2025", icon: Code2, key: "study" },
  { year: "Mar/2026", icon: Rocket, key: "sosdocs" },
];

export function HomeTimeline() {
  const t = useTranslations("home.timeline");

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight">{t("title")}</h2>
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          <div className="from-primary/40 via-border absolute top-6 bottom-6 left-5 w-px bg-gradient-to-b to-transparent" />

          <div className="space-y-5">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ y: 12 }}
                whileInView={{ y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative grid grid-cols-[40px_1fr] gap-4"
              >
                <div className="border-border bg-card relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                  <item.icon className="text-primary h-4 w-4" />
                </div>

                <div className="border-border bg-card/80 hover:border-primary/35 rounded-lg border p-4 shadow-sm transition-colors">
                  <p className="text-primary mb-1 text-sm font-bold">{item.year}</p>
                  <p className="text-muted-foreground text-sm">{t(item.key)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
