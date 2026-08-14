"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ButtonLink } from "@/components/ui/button-link";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { ArrowRight } from "lucide-react";
import { HeroOrbit } from "@/components/molecules/hero-orbit";
import { ResumeDownloadModal } from "@/components/molecules/resume-download-modal";
import { DURATION, EASE_OUT, fadeUp, stagger } from "@/lib/motion";

export function HeroSection() {
  const t = useTranslations("hero");
  const { resolvedTheme, systemTheme } = useTheme();
  // Fall back to `systemTheme` so the very first client render already picks
  // the right shader palette instead of flashing dark-then-light.
  const isLight = (resolvedTheme ?? systemTheme) === "light";

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden py-10 md:py-12">
      {/* Fades the shader + glow to transparent before the section edge so the
          colored area dissolves into the page background instead of ending in
          a visible hard rectangle. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 82%, transparent 100%)",
        }}
      >
        <WebGLShader opacity={0.12} light={isLight} />
        <div className="bg-primary/5 absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial="hidden" animate="visible" transition={stagger()}>
            <motion.p
              variants={fadeUp}
              className="text-primary/80 mb-3 font-mono text-xs font-semibold tracking-[0.2em] uppercase"
            >
              {t("kicker")}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="from-primary to-primary/70 bg-gradient-to-r via-purple-400 bg-clip-text text-transparent">
                {t("nameLine")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mb-4 text-lg font-medium md:text-xl"
            >
              {t("positioning")}
            </motion.p>
            <motion.p variants={fadeUp} className="text-primary/80 mb-8 font-mono text-sm">
              {t("tagline")}
            </motion.p>

            <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-3">
              <ButtonLink href="/projetos" size="lg">
                {t("cta.projects")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ResumeDownloadModal label={t("cta.resume")} variant="outline" size="lg" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="text-muted-foreground grid max-w-lg grid-cols-3 gap-3 text-xs"
            >
              <div className="border-primary/40 border-l pl-3">
                <span className="text-foreground block font-mono text-sm font-semibold">
                  12.5k+
                </span>
                {t("proof.lines")}
              </div>
              <div className="border-success/40 border-l pl-3">
                <span className="text-foreground block font-mono text-sm font-semibold">
                  SERPRO
                </span>
                {t("proof.platform")}
              </div>
              <div className="border-warning/40 border-l pl-3">
                <span className="text-foreground block font-mono text-sm font-semibold">PT/EN</span>
                {t("proof.global")}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, duration: DURATION.slow, ease: EASE_OUT }}
            className="flex items-center justify-center"
          >
            <HeroOrbit />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
