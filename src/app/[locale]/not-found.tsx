"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function LocaleNotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="bg-primary/10 flex h-24 w-24 items-center justify-center rounded-full">
              <span className="text-primary text-5xl font-bold">404</span>
            </div>
            <div className="bg-destructive/10 absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full">
              <Search className="text-destructive h-4 w-4" />
            </div>
          </div>
        </div>

        <h1 className="mb-3 text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground mb-8">{t("description")}</p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/">
            <Home className="mr-2 h-4 w-4" />
            {t("home")}
          </ButtonLink>
          <ButtonLink href="/" variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("back")}
          </ButtonLink>
        </div>
      </motion.div>
    </div>
  );
}
