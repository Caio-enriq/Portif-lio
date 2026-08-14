"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

const categoryColors: Record<string, string> = {
  frontend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  backend: "bg-green-500/10 text-green-400 border-green-500/20",
  fullstack: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  automation: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  data: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

const categoryLabels: Record<string, { pt: string; en: string }> = {
  frontend: { pt: "Frontend", en: "Frontend" },
  backend: { pt: "Backend", en: "Backend" },
  fullstack: { pt: "Full-stack", en: "Full-stack" },
  automation: { pt: "Automação", en: "Automation" },
  data: { pt: "Analytics", en: "Analytics" },
};

export function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  const t = useTranslations();
  const isEn = t("nav.home") === "Home";
  const categoryLabel = isEn
    ? (categoryLabels[project.category]?.en ?? project.category)
    : (categoryLabels[project.category]?.pt ?? project.category);

  return (
    <Link href={`/projetos/${project.slug}`} className="block">
      <Card
        className={cn(
          "group border-border bg-card hover:border-accent/40 shimmer-sweep relative overflow-hidden transition-all hover:shadow-[0_0_30px_rgb(var(--glow-rgb)/0.08)]",
          className
        )}
      >
        {project.imageUrl && (
          <div className="bg-muted relative aspect-[16/9] overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.imageAlt ?? project.title}
              fill
              loading={priority ? "eager" : "lazy"}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="from-card/70 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          </div>
        )}
        <CardContent className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <Badge
                variant="secondary"
                className={cn("mb-2 border text-xs", categoryColors[project.category])}
              >
                {categoryLabel}
              </Badge>
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{project.subtitle}</p>
            </div>
            <ArrowUpRight className="text-muted-foreground group-hover:text-accent h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
            {isEn ? (project.descriptionEn ?? project.description) : project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.techStack.length - 5}
              </Badge>
            )}
          </div>

          <div className="flex gap-2">
            {project.repoUrl && (
              <span
                className="border-border text-muted-foreground hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <GitBranch className="h-3.5 w-3.5" />
                Repo
              </span>
            )}
            {project.demoUrl && (
              <span
                className="border-border text-muted-foreground hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Demo
              </span>
            )}
            <span className="bg-primary/10 text-primary hover:bg-primary/20 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors">
              {t("projects.viewDetails")}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
