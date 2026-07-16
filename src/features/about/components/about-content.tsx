"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resume";
import { GitHubActivity } from "@/features/about/components/github-activity";
import { LocationGlobe } from "@/features/about/components/location-globe";
import { ResumeDownloadModal } from "@/components/molecules/resume-download-modal";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Globe,
  Target,
  MessageCircle,
  Users,
  LayoutList,
  Lightbulb,
  Zap,
  Brain,
  Award,
  AlertTriangle,
  Layers,
  BarChart3,
} from "lucide-react";

const softSkills = [
  { icon: MessageCircle, key: "communication" },
  { icon: Users, key: "teamwork" },
  { icon: LayoutList, key: "organization" },
  { icon: Lightbulb, key: "problemSolving" },
  { icon: Zap, key: "fastLearner" },
  { icon: Brain, key: "analytical" },
];

const journeyActs = [
  {
    icon: AlertTriangle,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    titlePt: "Ato 1: Entender o problema",
    titleEn: "Act 1: Understanding the problem",
    descPt:
      "Na Bunge (2023-2024), vi como dados bem processados transformam decisões. Entendi que o valor não está no código — está no problema que ele resolve.",
    descEn:
      "At Bunge (2023-2024), I saw how well-processed data transforms decisions. I understood that value isn't in the code — it's in the problem it solves.",
  },
  {
    icon: Layers,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    titlePt: "Ato 2: Construir soluções reais",
    titleEn: "Act 2: Building real solutions",
    descPt:
      "Desde março de 2026, na SOSdocs/SERPRO, desenvolvo soluções que automatizam processos que antes levavam horas. Cada linha de código tem um motivo mensurável.",
    descEn:
      "Since March 2026, at SOSdocs/SERPRO, I have been building solutions that automate processes that used to take hours. Every line of code has a measurable reason.",
  },
  {
    icon: BarChart3,
    color: "text-green-400",
    bg: "bg-green-400/10",
    titlePt: "Ato 3: Pensar em sistemas",
    titleEn: "Act 3: Thinking in systems",
    descPt:
      "Não penso em apps isolados, penso em sistemas. Cada decisão de arquitetura precisa ter intenção, cada trade-off precisa ser entendido e cada resultado precisa ser medido.",
    descEn:
      "I don't think in isolated apps; I think in systems. Every architecture decision needs intent, every trade-off needs to be understood, and every result needs to be measured.",
  },
];

export function AboutContent() {
  const t = useTranslations("about");
  const locale = useLocale();
  const data = resumeData[locale as "pt" | "en"];
  const isEn = locale === "en";

  return (
    <div className="relative mx-auto max-w-6xl px-6 py-20">
      {/* Page-specific background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-success/5 absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Hero Banner with Photo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-success/20 from-success-muted via-background to-primary/5 mb-12 rounded-xl border bg-gradient-to-r p-8"
      >
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="border-primary/30 shadow-primary/10 relative h-48 w-48 shrink-0 overflow-hidden rounded-xl border-4 shadow-xl">
            <Image
              src="/images/profile.jpg"
              alt="Caio Enrique"
              fill
              sizes="192px"
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-success mb-2 text-sm font-semibold tracking-wider uppercase">
              {t("banner")}
            </p>
            <h1 className="mb-3 text-4xl font-bold tracking-tight">{t("title")}</h1>
            <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
          </div>
        </div>
      </motion.div>

      {/* Location & Goal — interactive 3D globe */}
      <LocationGlobe isEn={isEn} />

      {/* Journey - 3 Acts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="mb-8 text-center text-2xl font-bold">
          {isEn ? "My journey" : "Minha trajetória"}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {journeyActs.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-border bg-card/50 hover:border-primary/50 hover:shadow-primary/5 h-full backdrop-blur-sm transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${act.bg}`}
                  >
                    <act.icon className={`h-6 w-6 ${act.color}`} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold">{isEn ? act.titleEn : act.titlePt}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {isEn ? act.descEn : act.descPt}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Two Column Layout */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column - Story & Info */}
        <div className="space-y-8 lg:col-span-2">
          {/* Story */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
                  <Target className="text-primary h-5 w-5" />
                  {isEn ? "My story" : "Minha história"}
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">{t("story1")}</p>
                  <p className="leading-relaxed">{t("story2")}</p>
                  <p className="leading-relaxed">{t("story3")}</p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Experience Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Briefcase className="text-primary h-5 w-5" />
              {t("experience")}
            </h2>
            <div className="relative space-y-6 pl-8">
              <div className="from-primary via-primary/50 absolute top-0 bottom-0 left-3 w-0.5 bg-gradient-to-b to-transparent" />
              {data.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative"
                >
                  <div className="border-primary bg-background absolute top-1 -left-5 h-3 w-3 rounded-full border-2" />
                  <Card className="border-border bg-card/50 hover:border-primary/50 hover:shadow-primary/5 backdrop-blur-sm transition-all hover:shadow-lg">
                    <CardContent className="p-5">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{exp.period}</Badge>
                        <span className="font-semibold">{exp.role}</span>
                      </div>
                      <p className="text-primary mb-3 text-sm">{exp.company}</p>
                      <ul className="mb-3 space-y-1.5">
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
                      {exp.techStack && (
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column - Skills & Info */}
        <div className="space-y-6">
          {/* Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="border-border from-card to-primary-muted/20 bg-gradient-to-br">
              <CardContent className="p-5">
                <h3 className="mb-4 font-bold">{t("identity")}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary h-4 w-4" />
                    <span>{data.contact.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary h-4 w-4" />
                    <span className="truncate">{data.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary h-4 w-4" />
                    <span>{data.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-primary h-4 w-4" />
                    <span>PT, EN (B2+), ES</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
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
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-muted-foreground text-xs">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="border-border bg-card/50">
              <CardContent className="p-5">
                <h3 className="mb-4 flex items-center gap-2 font-bold">
                  <Users className="text-primary h-4 w-4" />
                  {t("softSkills")}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {softSkills.map((skill) => (
                    <div
                      key={skill.key}
                      className="bg-muted/50 hover:bg-primary/10 flex items-center gap-2 rounded-lg p-2.5 transition-colors"
                    >
                      <skill.icon className="text-primary h-4 w-4" />
                      <span className="text-xs font-medium">{t(skill.key)}</span>
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
            transition={{ delay: 0.5, duration: 0.5 }}
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

          {/* Download CV */}
          <ResumeDownloadModal
            label={t("downloadCv")}
            variant="default"
            size="lg"
            className="w-full"
          />

          {/* GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="border-border bg-card/50">
              <CardContent className="p-5">
                <h3 className="mb-4 flex items-center gap-2 font-bold">
                  <Globe className="text-primary h-4 w-4" />
                  {isEn ? "Recent Activity" : "Atividade Recente"}
                </h3>
                <GitHubActivity />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
