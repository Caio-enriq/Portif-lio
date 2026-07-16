"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SkillTag } from "@/components/atoms/skill-tag";
import { resumeData } from "@/data/resume";
import {
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Target,
  FileText,
  CheckCircle,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { ResumeDownloadModal } from "@/components/molecules/resume-download-modal";

const problemsSolved = [
  {
    pt: "Automação de ciclo de vida documental (12.500+ linhas)",
    en: "Document lifecycle automation (12,500+ lines)",
  },
  {
    pt: "Plataforma B2B com backend dual-stack (Python + Node.js)",
    en: "B2B platform with a dual-stack backend (Python + Node.js)",
  },
  {
    pt: "Integração de IA para validação documental",
    en: "AI integration for document validation",
  },
  {
    pt: "Dashboards analíticos com processamento de dados",
    en: "Analytics dashboards backed by data processing",
  },
  {
    pt: "Automação de fluxos entre sistemas corporativos",
    en: "Workflow automation across enterprise systems",
  },
];

export function ResumeContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const t = useTranslations("resume");
  const navT = useTranslations("nav");
  const data = resumeData[isEn ? "en" : "pt"];

  return (
    <div className="relative mx-auto max-w-5xl px-6 py-20">
      {/* Page-specific background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-32 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="bg-primary/5 absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, currentColor 39px, currentColor 40px)`,
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
              <FileText className="text-primary h-6 w-6" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
              <p className="text-muted-foreground">Caio Enrique Inácio de Almeida</p>
            </div>
          </div>
          <div className="flex gap-2">
            <ButtonLink href="/" variant="outline" size="sm">
              {navT("home")}
            </ButtonLink>
            <ResumeDownloadModal label={t("download")} size="sm" variant="default" />
          </div>
        </div>
      </motion.div>

      {/* Resume Layout */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-8 lg:col-span-2">
          {/* Objective */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border from-card to-primary-muted/10 bg-gradient-to-br">
              <CardContent className="p-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <Target className="text-primary h-5 w-5" />
                  {t("objective")}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{data.objective}</p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Problems Solved */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border bg-card/50">
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  {t("problemsSolved")}
                </h3>
                <ul className="space-y-3">
                  {problemsSolved.map((problem, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      className="text-muted-foreground flex items-start gap-3 text-sm"
                    >
                      <span className="bg-primary/10 text-primary mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold">
                        {i + 1}
                      </span>
                      {isEn ? problem.en : problem.pt}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <Briefcase className="text-primary h-5 w-5" />
              {t("experience")}
            </h3>
            <div className="relative space-y-6 pl-6">
              <div className="from-primary via-primary/50 absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b to-transparent" />
              {data.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative"
                >
                  <div className="border-primary bg-background absolute top-2 -left-7 h-3 w-3 rounded-full border-2" />
                  <Card className="border-border bg-card/50 hover:border-primary/50 hover:shadow-primary/5 transition-all hover:shadow-lg">
                    <CardContent className="p-5">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge>{exp.period}</Badge>
                        <span className="font-semibold">{exp.role}</span>
                      </div>
                      <p className="text-primary mb-3 text-sm">{exp.company}</p>
                      <ul className="mb-4 space-y-1.5">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2 text-sm"
                          >
                            <span className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="border-border bg-card/50">
              <CardContent className="p-5">
                <h3 className="mb-4 flex items-center gap-2 font-bold">
                  <GraduationCap className="text-primary h-4 w-4" />
                  {t("education")}
                </h3>
                <div className="space-y-3">
                  {data.education.map((edu) => (
                    <div key={edu.id} className="bg-muted/50 rounded-lg p-3">
                      <Badge className="mb-2 text-xs">{edu.period}</Badge>
                      <p className="text-sm font-medium">{edu.degree}</p>
                      <p className="text-muted-foreground text-xs">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="border-border bg-card/50">
              <CardContent className="p-5">
                <h3 className="mb-4 flex items-center gap-2 font-bold">
                  <Code2 className="text-primary h-4 w-4" />
                  {t("skills")}
                </h3>
                <div className="space-y-4">
                  {data.skillGroups.map((group) => (
                    <div key={group.title}>
                      <h4 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
                        {group.title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <SkillTag key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="border-border bg-card/50">
              <CardContent className="p-5">
                <h3 className="mb-4 flex items-center gap-2 font-bold">
                  <Award className="text-primary h-4 w-4" />
                  {t("certifications")}
                </h3>
                <ul className="space-y-2">
                  {data.certifications.map((cert, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2 text-xs">
                      <span className="bg-primary mt-1 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card className="border-border from-card to-primary-muted/10 bg-gradient-to-br">
              <CardContent className="p-5">
                <h3 className="mb-4 font-bold">{t("languages")}</h3>
                <div className="space-y-2">
                  {data.languages.map((language) => (
                    <div key={language.lang} className="flex justify-between gap-3 text-sm">
                      <span>{language.lang}</span>
                      <Badge
                        variant={
                          language.level.includes("Basic") || language.level.includes("Básico")
                            ? "outline"
                            : "secondary"
                        }
                      >
                        {language.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
