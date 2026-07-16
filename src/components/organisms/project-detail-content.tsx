"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  CheckCircle,
  Wrench,
  Lightbulb,
  Rocket,
  Target,
  AlertTriangle,
  Layers,
  BarChart3,
  Brain,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import type { Project } from "@/types";
import { ButtonLink } from "@/components/ui/button-link";

const categoryColors: Record<string, string> = {
  frontend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  backend: "bg-green-500/10 text-green-400 border-green-500/20",
  fullstack: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  automation: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  data: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

interface ProjectDetailContentProps {
  project: Project;
}

const categoryLabels: Record<string, { pt: string; en: string }> = {
  frontend: { pt: "Frontend", en: "Frontend" },
  backend: { pt: "Backend", en: "Backend" },
  fullstack: { pt: "Full-stack", en: "Full-stack" },
  automation: { pt: "Automação", en: "Automation" },
  data: { pt: "Analytics", en: "Analytics" },
};

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const t = useTranslations();
  const locale = useLocale();
  const isEn = locale === "en";
  const categoryLabel = isEn
    ? (categoryLabels[project.category]?.en ?? project.category)
    : (categoryLabels[project.category]?.pt ?? project.category);

  const getLocalized = (pt?: string, en?: string) => (isEn ? (en ?? pt) : pt);
  const getLocalizedArray = (pt?: string[], en?: string[]) =>
    isEn ? (en ?? pt ?? []) : (pt ?? []);

  const arquitetura = getLocalizedArray(project.arquitetura, project.arquiteturaEn);
  const decisoes = project.decisoes ?? [];
  const tradeoffs = project.tradeoffs ?? [];
  const comoPensei = getLocalizedArray(project.comoPensei, project.comoPenseiEn);
  const licoes = getLocalizedArray(project.licoes, project.licoesEn);
  const fariaDiferente = getLocalizedArray(project.fariaDiferente, project.fariaDiferenteEn);
  const proximosPassos = getLocalizedArray(project.proximosPassos, project.proximosPassosEn);
  const features = getLocalizedArray(project.features, project.featuresEn);

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <ButtonLink href="/projetos" variant="ghost" size="sm" className="mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          {t("projects.back")}
        </ButtonLink>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Badge className={`mb-3 border ${categoryColors[project.category]}`}>
              {categoryLabel}
            </Badge>
            <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">{project.title}</h1>
            <p className="text-muted-foreground text-lg">{project.subtitle}</p>
            {project.year && <p className="text-muted-foreground mt-1 text-sm">{project.year}</p>}
          </div>

          <div className="flex gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-muted-foreground hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors"
              >
                <GitBranch className="h-4 w-4" />
                Repo
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-muted-foreground hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* The Problem */}
      {(project.problema || project.why) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
            {t("projects.problem")}
          </h3>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                {getLocalized(project.problema, project.problemaEn) ||
                  getLocalized(project.why, project.whyEn)}
              </p>
            </CardContent>
          </Card>
        </motion.section>
      )}

      {/* Context */}
      {project.contexto && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Layers className="h-5 w-5 text-blue-400" />
            {t("projects.context")}
          </h3>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                {getLocalized(project.contexto, project.contextoEn)}
              </p>
            </CardContent>
          </Card>
        </motion.section>
      )}

      {/* Architecture */}
      {arquitetura.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Rocket className="text-primary h-5 w-5" />
            {t("projects.architecture")}
          </h3>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {arquitetura.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
                    className="text-muted-foreground flex items-start gap-3 text-sm"
                  >
                    <span className="bg-primary/10 text-primary mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
      )}

      {/* Engineering Decisions */}
      {decisoes.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Brain className="h-5 w-5 text-purple-400" />
            {t("projects.decisions")}
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {decisoes.map((dec, i) => (
              <Card key={i} className="border-border bg-card">
                <CardContent className="p-5">
                  <h4 className="mb-2 font-semibold">{isEn ? dec.titleEn : dec.title}</h4>
                  <p className="text-muted-foreground text-sm">{isEn ? dec.descEn : dec.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>
      )}

      {/* Trade-offs */}
      {tradeoffs.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <RefreshCw className="h-5 w-5 text-amber-400" />
            {t("projects.tradeoffs")}
          </h3>
          <div className="space-y-3">
            {tradeoffs.map((to, i) => (
              <Card key={i} className="border-border bg-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{isEn ? to.escolhaEn : to.escolha}</p>
                      <p className="text-muted-foreground text-xs">
                        → {isEn ? to.resultadoEn : to.resultado}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>
      )}

      {/* How I Thought */}
      {comoPensei.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Lightbulb className="h-5 w-5 text-amber-400" />
            {t("projects.howIThought")}
          </h3>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {comoPensei.map((step, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-3 text-sm">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-[10px] font-bold text-amber-400">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
      )}

      {/* Results */}
      {features.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <CheckCircle className="h-5 w-5 text-green-500" />
            {t("projects.results")}
          </h3>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-3 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
      )}

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="mb-10"
      >
        <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Wrench className="text-primary h-5 w-5" />
          {t("projects.tech")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </motion.section>

      {/* Lessons Learned */}
      {licoes.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <BarChart3 className="h-5 w-5 text-blue-400" />
            {t("projects.whatIDLearned")}
          </h3>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <ul className="space-y-2">
                {licoes.map((l, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    {l}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
      )}

      {/* What I'd Do Different */}
      {fariaDiferente.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <RefreshCw className="h-5 w-5 text-amber-400" />
            {t("projects.whatIDChange")}
          </h3>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <ul className="space-y-2">
                {fariaDiferente.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
      )}

      {/* Next Steps */}
      {proximosPassos.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Target className="h-5 w-5 text-green-400" />
            {t("projects.nextSteps")}
          </h3>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <ul className="space-y-2">
                {proximosPassos.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
      )}

      {/* Impact */}
      {(project.impact || project.impactEn) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mt-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Target className="h-5 w-5 text-green-500" />
            {t("projects.impact")}
          </h3>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                {getLocalized(project.impact, project.impactEn)}
              </p>
            </CardContent>
          </Card>
        </motion.section>
      )}
    </div>
  );
}
