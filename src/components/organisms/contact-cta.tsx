"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Rocket } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export function ContactCTA() {
  const t = useTranslations("contact");

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-border from-card via-card to-primary/5 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-8 text-center md:p-12"
        >
          <div className="bg-primary/10 pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Rocket className="text-primary h-5 w-5" />
              <span className="text-primary text-sm font-medium">{t("ctaTag")}</span>
            </div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight">{t("title")}</h2>
            <p className="text-muted-foreground mb-8">{t("availabilityValue")}</p>

            <div className="text-muted-foreground mb-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="text-primary h-4 w-4" />
                {t("location")}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="text-primary h-4 w-4" />
                caio.desenvolvedor2416@gmail.com
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/contato" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                {t("send")}
              </ButtonLink>
              <ButtonLink href="/curriculo" variant="outline" size="lg">
                {t("resumeLabel")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
