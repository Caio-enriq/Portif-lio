"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HomePositioning() {
  const t = useTranslations("home.positioning");

  const steps = [t("line1"), t("line2"), t("line3"), t("line4")];

  return (
    <section className="py-20">
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

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="border-border bg-card hover:border-primary/40 hover:shadow-primary/5 rounded-xl border px-5 py-3 text-center transition-all hover:shadow-lg">
                <p className="text-sm font-medium">{step}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="text-primary hidden h-4 w-4 sm:block" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-muted-foreground mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed"
        >
          {t("desc")}
        </motion.p>
      </div>
    </section>
  );
}
