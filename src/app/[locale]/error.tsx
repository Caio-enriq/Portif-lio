"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="bg-destructive/10 flex h-24 w-24 items-center justify-center rounded-full">
            <AlertTriangle className="text-destructive h-10 w-10" />
          </div>
        </div>

        <h1 className="mb-3 text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground mb-8">{t("description")}</p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button onClick={reset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            {t("retry")}
          </Button>
          <ButtonLink href="/" variant="outline">
            <Home className="mr-2 h-4 w-4" />
            {t("home")}
          </ButtonLink>
        </div>
      </motion.div>
    </div>
  );
}
