"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowLeft } from "lucide-react";

const principles = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12"];

export function EngineeringPrinciplesContent() {
  const t = useTranslations("engineering.principles");
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <div className="relative mx-auto max-w-4xl px-6 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
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
        <Badge className="mb-4">{isEn ? "Principles" : "Princípios"}</Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t("title")}</h1>
        <p className="text-muted-foreground max-w-2xl text-lg">{t("subtitle")}</p>
      </motion.div>

      <div className="space-y-6">
        {principles.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="hover:border-primary/40 hover:shadow-primary/5 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">{t(`${key}.title`)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`${key}.desc`)}
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
