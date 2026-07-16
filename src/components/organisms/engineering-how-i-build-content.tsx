"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowLeft } from "lucide-react";

const steps = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"];

export function EngineeringHowIBuildContent() {
  const t = useTranslations("engineering.howIBuild");
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <div className="relative mx-auto max-w-4xl px-6 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />
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
        <Badge className="mb-4">{isEn ? "Process" : "Processo"}</Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t("title")}</h1>
        <p className="text-muted-foreground max-w-2xl text-lg">{t("subtitle")}</p>
      </motion.div>

      <div className="relative">
        <div className="from-primary/50 via-primary/20 absolute top-0 left-6 h-full w-px bg-gradient-to-b to-transparent" />

        <div className="space-y-8">
          {steps.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className="relative pl-16"
            >
              <div className="border-border bg-background absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-full border-2">
                <span className="text-primary text-sm font-bold">{i + 1}</span>
              </div>
              <Card className="hover:border-primary/40 hover:shadow-primary/5 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold">{t(`steps.${key}.title`)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`steps.${key}.desc`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
