"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Shield,
  Rocket,
  Cpu,
  ArrowRight,
  Code2,
  Layers,
  Zap,
  Globe,
  Palette,
  Database,
  GitBranch,
} from "lucide-react";

const stack = [
  { name: "Next.js 16", role: "Framework", icon: Rocket, color: "#fff" },
  { name: "React 19", role: "UI Library", icon: Code2, color: "#61DAFB" },
  { name: "TypeScript", role: "Type Safety", icon: Code2, color: "#3178C6" },
  { name: "Tailwind CSS v4", role: "Styling", icon: Palette, color: "#06B6D4" },
  { name: "shadcn/ui", role: "Components", icon: Layers, color: "#818cf8" },
  { name: "Framer Motion", role: "Animations", icon: Zap, color: "#FF0055" },
  { name: "next-intl", role: "i18n", icon: Globe, color: "#818cf8" },
  { name: "Vercel", role: "Deploy", icon: Rocket, color: "#fff" },
];

const subPages = [
  {
    href: "/engineering/principles",
    icon: Shield,
    titlePt: "Princípios de Engenharia",
    titleEn: "Engineering Principles",
    descPt: "Princípios que sigo por experiência, não por modismo.",
    descEn: "Principles I follow from experience, not trend-chasing.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    href: "/engineering/how-i-build",
    icon: Rocket,
    titlePt: "Como Construo Software",
    titleEn: "How I Build Software",
    descPt: "Um passo a passo real do meu processo de engenharia.",
    descEn: "A real step-by-step of my engineering process.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    href: "/engineering/behind-architecture",
    icon: Cpu,
    titlePt: "Por trás da arquitetura",
    titleEn: "Behind the Architecture",
    descPt: "As tecnologias que uso, por que escolho cada uma e o que eu trocaria.",
    descEn: "The technologies I use, why I choose them, and the trade-offs behind each decision.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export function EngineeringContent() {
  const t = useTranslations();
  const isEn = t("nav.home") === "Home";

  return (
    <div className="relative mx-auto max-w-6xl px-6 py-20">
      {/* Page-specific background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="bg-primary/5 absolute -right-32 bottom-1/3 h-[400px] w-[400px] rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <Badge className="mb-4">{isEn ? "Engineering" : "Engenharia"}</Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          {t("engineering.title")}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          {t("engineering.subtitle")}
        </p>
      </motion.div>

      {/* Sub-pages */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {subPages.map((page, i) => (
            <motion.div
              key={page.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <ButtonLink href={page.href} className="h-full w-full" variant="outline">
                <Card className="hover:border-primary/40 hover:shadow-primary/5 h-full w-full transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-left">
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${page.bg}`}
                    >
                      <page.icon className={`h-6 w-6 ${page.color}`} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{isEn ? page.titleEn : page.titlePt}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {isEn ? page.descEn : page.descPt}
                    </p>
                    <span className="text-primary flex items-center gap-1 text-sm font-medium">
                      {isEn ? "Explore" : "Explorar"} <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </ButtonLink>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stack */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="mb-8 text-center text-2xl font-bold">{t("engineering.stack")}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stack.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="hover:border-primary/40 hover:shadow-primary/5 text-center transition-all hover:shadow-lg">
                <CardContent className="p-4">
                  <item.icon className="mx-auto mb-2 h-6 w-6" style={{ color: item.color }} />
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-muted-foreground text-xs">{item.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quality */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-border bg-card/50 rounded-2xl border p-8"
      >
        <h2 className="mb-6 text-center text-2xl font-bold">{t("engineering.quality")}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
              <Database className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="mb-1 font-semibold">{t("engineering.testing")}</h3>
            <p className="text-muted-foreground text-sm">Jest + Playwright + GitHub Actions</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
              <GitBranch className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="mb-1 font-semibold">{t("engineering.ci")}</h3>
            <p className="text-muted-foreground text-sm">Lint + Typecheck + Tests + Build</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
              <Shield className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="mb-1 font-semibold">{t("engineering.security")}</h3>
            <p className="text-muted-foreground text-sm">Headers + CSP + Env vars</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
