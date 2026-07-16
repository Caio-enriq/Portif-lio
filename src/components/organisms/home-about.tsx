"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import {
  ArrowRight,
  Bot,
  Braces,
  Code2,
  Database,
  FileCode2,
  LineChart,
  Server,
  Terminal,
  User,
} from "lucide-react";

const skillTags = [
  { icon: Code2, name: "Python" },
  { icon: FileCode2, name: "Apps Script" },
  { icon: Braces, name: "React" },
  { icon: Server, name: "Node.js" },
  { icon: Database, name: "SQL" },
  { icon: Bot, name: "APIs + IA" },
  { icon: LineChart, name: "Power BI" },
  { icon: Terminal, name: "Linux" },
];

export function HomeAbout() {
  const t = useTranslations("home.about");

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight">{t("title")}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto mt-8 max-w-3xl text-center"
        >
          <h3 className="text-primary mb-4 text-lg font-semibold">{t("tagline")}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{t("desc1")}</p>
          <p className="text-muted-foreground mb-6 leading-relaxed">{t("desc2")}</p>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {skillTags.map((skill) => (
              <span
                key={skill.name}
                className="border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-colors"
              >
                <skill.icon className="text-primary h-3.5 w-3.5" />
                {skill.name}
              </span>
            ))}
          </div>

          <ButtonLink href="/sobre" variant="outline">
            <User className="mr-2 h-4 w-4" />
            {t("cta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
