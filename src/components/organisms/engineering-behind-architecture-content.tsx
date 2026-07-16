"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowLeft } from "lucide-react";

const techKeys = ["python", "nodejs", "nextjs", "react", "postgresql", "docker", "fastapi"];

export function EngineeringBehindArchitectureContent() {
  const t = useTranslations("engineering.behindArchitecture");
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <div className="relative mx-auto max-w-4xl px-6 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-3xl" />
        <div className="bg-primary/5 absolute -right-32 bottom-1/3 h-[400px] w-[400px] rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <ButtonLink href="/engineering" variant="ghost" size="sm" className="mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          {isEn ? "Engineering" : "Engenharia"}
        </ButtonLink>
        <Badge className="mb-4">Stack</Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t("title")}</h1>
        <p className="text-muted-foreground max-w-2xl text-lg">{t("subtitle")}</p>
      </motion.div>

      <div className="space-y-6">
        {techKeys.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="hover:border-primary/40 hover:shadow-primary/5 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold">{t(`technologies.${key}.name`)}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-primary mb-1 text-xs font-semibold tracking-wider uppercase">
                      {isEn ? "Why I use it" : "Por que uso"}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`technologies.${key}.why`)}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold tracking-wider text-amber-400 uppercase">
                      Trade-off
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`technologies.${key}.tradeoff`)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
