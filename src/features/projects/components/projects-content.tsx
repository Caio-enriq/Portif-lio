"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "@/components/molecules/project-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { fadeUp, revealOnView } from "@/lib/motion";
import { ExternalLink, Star, Filter } from "lucide-react";

const categories = [
  { key: "all", pt: "Todos", en: "All", icon: Filter },
  { key: "fullstack", pt: "Full-stack", en: "Full-stack", icon: null },
  { key: "frontend", pt: "Frontend", en: "Frontend", icon: null },
  { key: "data", pt: "Analytics", en: "Analytics", icon: null },
  { key: "automation", pt: "Automação", en: "Automation", icon: null },
] as const;

export function ProjectsContent() {
  const [active, setActive] = useState<string>("all");
  const t = useTranslations();
  const isEn = t("nav.home") === "Home";

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="relative mx-auto max-w-6xl px-6 py-20">
      {/* Page-specific background — soft aurora wash, faded at the edges so it
          dissolves into the page instead of ending in a hard rectangle. */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      >
        <div className="aurora-blob absolute top-1/4 -left-32 h-[500px] w-[500px] animate-[aurora-drift_22s_ease-in-out_infinite] bg-purple-500/8" />
        <div className="aurora-blob bg-primary/8 absolute -right-32 bottom-1/4 h-[400px] w-[400px] animate-[aurora-drift-2_26s_ease-in-out_infinite]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      {/* Hero Header */}
      <motion.div {...revealOnView} variants={fadeUp} className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <Star className="text-primary h-5 w-5" />
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            {t("projects.portfolioLabel")}
          </span>
        </div>
        <h1 className="text-gradient mb-4 text-4xl font-bold tracking-tight">
          {t("projects.title")}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">{t("projects.subtitle")}</p>
      </motion.div>

      {/* Featured Projects Banner */}
      {featured.length > 0 && (
        <motion.div {...revealOnView} variants={fadeUp} className="mb-12">
          <Card
            variant="glass"
            className="border-primary/20 from-primary-muted/30 via-background to-background gap-0 bg-gradient-to-br"
          >
            <CardContent className="p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <Star className="text-primary h-4 w-4" />
                {t("projects.featured")}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {featured.slice(0, 2).map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  >
                    <ProjectCard project={project} priority={i < 2} />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8 flex flex-wrap gap-2"
      >
        {categories.map((cat) => (
          <Button
            key={cat.key}
            variant={active === cat.key ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(cat.key)}
            className={cn(
              "gap-2 transition-all",
              active === cat.key && "shadow-primary/20 pointer-events-none shadow-md"
            )}
          >
            {cat.icon && <cat.icon className="h-4 w-4" />}
            {isEn ? cat.en : cat.pt}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className={cn(i === 0 && "md:col-span-2 lg:col-span-1")}
          >
            <ProjectCard project={project} priority={i < 3} />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-center">
          <p className="text-muted-foreground">{t("projects.empty")}</p>
        </motion.div>
      )}

      {/* GitHub CTA */}
      <motion.div {...revealOnView} variants={fadeUp} className="mt-16">
        <Card variant="glass" className="text-center">
          <CardContent className="p-8">
            <h3 className="mb-2 text-xl font-bold">{t("projects.githubTitle")}</h3>
            <p className="text-muted-foreground mb-6">{t("projects.githubDesc")}</p>
            <a
              href="https://github.com/Caio-enriq"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "gradient", size: "lg" }))}
            >
              <ExternalLink className="h-4 w-4" />
              {t("projects.viewAll")}
            </a>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
