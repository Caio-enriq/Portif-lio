"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function HomeDifferentials() {
  const t = useTranslations("home.differentials");

  const points = [t("points.0"), t("points.1"), t("points.2"), t("points.3")];

  return (
    <section className="border-border bg-card/30 border-y py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight">{t("title")}</h2>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-4">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="border-border bg-card hover:border-primary/40 flex items-start gap-3 rounded-xl border p-4 transition-all"
            >
              <div className="bg-primary/10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                <Check className="text-primary h-3 w-3" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
