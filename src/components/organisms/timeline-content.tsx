"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Briefcase, Code2, Compass, GraduationCap, Lightbulb, Plane } from "lucide-react";

const timelineEvents = [
  {
    periodPt: "2018 - início de 2021",
    periodEn: "2018 - early 2021",
    phase: "pandemic",
    icon: Lightbulb,
    color: "text-amber-400",
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    tagsPt: ["Curiosidade", "Python", "Lógica"],
    tagsEn: ["Curiosity", "Python", "Logic"],
  },
  {
    periodPt: "Pós-ensino médio",
    periodEn: "After high school",
    phase: "decision",
    icon: Compass,
    color: "text-blue-400",
    accent: "#38bdf8",
    accentRgb: "56, 189, 248",
    tagsPt: ["Escolha", "TI", "Software"],
    tagsEn: ["Decision", "IT", "Software"],
  },
  {
    periodPt: "Primeira faculdade",
    periodEn: "First college path",
    phase: "firstCollege",
    icon: GraduationCap,
    color: "text-violet-400",
    accent: "#8b5cf6",
    accentRgb: "139, 92, 246",
    tagsPt: ["Engenharia de Software", "Ajuste de rota"],
    tagsEn: ["Software Engineering", "Course correction"],
  },
  {
    periodPt: "2023 - 2024",
    periodEn: "2023 - 2024",
    phase: "bunge",
    icon: Briefcase,
    color: "text-emerald-400",
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    tagsPt: ["Bunge", "Corporativo", "Organização"],
    tagsEn: ["Bunge", "Corporate", "Organization"],
  },
  {
    periodPt: "2025",
    periodEn: "2025",
    phase: "deepStudy",
    icon: BookOpen,
    color: "text-cyan-400",
    accent: "#06b6d4",
    accentRgb: "6, 182, 212",
    tagsPt: ["React", "Next.js", "APIs", "Docker"],
    tagsEn: ["React", "Next.js", "APIs", "Docker"],
  },
  {
    periodPt: "Mar/2026",
    periodEn: "Mar 2026",
    phase: "sosdocs",
    icon: Code2,
    color: "text-primary",
    accent: "#818cf8",
    accentRgb: "129, 140, 248",
    tagsPt: ["SOSdocs", "Dashboards", "Integrações"],
    tagsEn: ["SOSdocs", "Dashboards", "Integrations"],
  },
  {
    periodPt: "Próximos passos",
    periodEn: "Next steps",
    phase: "international",
    icon: Plane,
    color: "text-rose-400",
    accent: "#fb7185",
    accentRgb: "251, 113, 133",
    tagsPt: ["Irlanda", "Backend", "IA"],
    tagsEn: ["Ireland", "Backend", "AI"],
  },
];

export function TimelineContent() {
  const t = useTranslations("timeline");
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/8 absolute top-10 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="absolute top-[22%] -left-28 h-[420px] w-[420px] rounded-full bg-amber-500/8 blur-3xl" />
        <div className="absolute -right-28 bottom-[18%] h-[420px] w-[420px] rounded-full bg-cyan-500/7 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <Badge className="mb-4">{t("title")}</Badge>
        <h1 className="mx-auto mb-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          {t("subtitle")}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
          {t("future")}
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-3xl">
        <div className="via-primary/35 absolute top-8 bottom-8 left-6 w-px bg-gradient-to-b from-amber-400/40 to-rose-400/20" />
        <div className="absolute top-8 bottom-8 left-6 w-px bg-gradient-to-b from-transparent via-white/45 to-transparent opacity-40 blur-[2px]" />
        {timelineEvents.map((event, index) => (
          <motion.article
            key={event.phase}
            initial={{ y: 18 }}
            whileInView={{ y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative mb-5 grid grid-cols-[48px_1fr] gap-5 last:mb-0"
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center overflow-visible">
              <div
                aria-hidden
                className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
                style={{
                  background: `radial-gradient(circle, rgba(${event.accentRgb},0.24) 0%, rgba(${event.accentRgb},0.08) 44%, transparent 72%)`,
                }}
              />
              <div
                aria-hidden
                className="absolute top-1/2 left-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                style={{ borderColor: `rgba(${event.accentRgb},0.22)` }}
              />
              <div
                className="bg-background/95 relative flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur"
                style={{
                  borderColor: `rgba(${event.accentRgb},0.38)`,
                  boxShadow: `0 0 28px rgba(${event.accentRgb},0.22), inset 0 0 18px rgba(${event.accentRgb},0.05)`,
                }}
              >
                <event.icon className={`h-5 w-5 ${event.color}`} />
              </div>
            </div>

            <div
              className="group bg-card/75 relative overflow-hidden rounded-xl border p-5 shadow-sm shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                borderColor: `rgba(${event.accentRgb},0.18)`,
                boxShadow: `0 18px 55px rgba(0,0,0,0.12), 0 0 0 1px rgba(${event.accentRgb},0.03)`,
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 0% 0%, rgba(${event.accentRgb},0.16), transparent 42%)`,
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 bottom-0 left-0 w-1"
                style={{
                  background: `linear-gradient(to bottom, transparent, ${event.accent}, transparent)`,
                  opacity: 0.72,
                }}
              />
              <TimelineCard event={event} t={t} isEn={isEn} />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function TimelineCard({
  event,
  t,
  isEn,
}: {
  event: (typeof timelineEvents)[number];
  t: ReturnType<typeof useTranslations<"timeline">>;
  isEn: boolean;
}) {
  const period = isEn ? event.periodEn : event.periodPt;
  const tags = isEn ? event.tagsEn : event.tagsPt;

  return (
    <>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="text-xs">
          {period}
        </Badge>
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight">{t(`phases.${event.phase}`)}</h3>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {t(`phases.${event.phase}Desc`)}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
    </>
  );
}
