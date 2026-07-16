"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Building2, Cpu, BrainCircuit, Database } from "lucide-react";

const specialties = [
  { icon: Building2, key: "platforms", color: "text-blue-400" },
  { icon: Cpu, key: "automation", color: "text-green-400" },
  { icon: BrainCircuit, key: "ai", color: "text-purple-400" },
  { icon: Database, key: "data", color: "text-amber-400" },
];

export function HomeSpecialties() {
  const t = useTranslations("home.specialties");

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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="group border-border bg-card hover:border-primary/40 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110">
                <item.icon className={`h-6 w-6 ${item.color}`} />
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
