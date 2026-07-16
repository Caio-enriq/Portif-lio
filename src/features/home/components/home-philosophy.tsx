"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AlertTriangle, Layers, BarChart3 } from "lucide-react";

const philosophyItems = [
  { icon: AlertTriangle, key: "problem", color: "text-amber-400" },
  { icon: Layers, key: "architecture", color: "text-blue-400" },
  { icon: BarChart3, key: "result", color: "text-green-400" },
];

export function HomePhilosophy() {
  const t = useTranslations("home.philosophy");

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {philosophyItems.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              viewport={{ once: true }}
              className="border-border bg-card hover:border-primary/40 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <h3 className="mb-2 text-base font-semibold">{t(`${item.key}.title`)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`${item.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
