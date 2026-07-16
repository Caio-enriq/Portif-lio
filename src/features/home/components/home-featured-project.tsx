"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ExternalLink, GitBranch, Rocket } from "lucide-react";
import { projects } from "@/data/projects";

export function HomeFeaturedProject() {
  const t = useTranslations("home.featured");
  const locale = useLocale();
  const project = projects.find((p) => p.slug === "enterprise-dashboard");

  if (!project) return null;

  return (
    <section className="border-border bg-card/30 border-y py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight">{t("title")}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="group border-border bg-card overflow-hidden rounded-xl border shadow-[0_20px_70px_rgba(0,0,0,0.12)]"
        >
          <div className="grid gap-0 md:grid-cols-2">
            <div className="bg-muted relative min-h-[260px] overflow-hidden md:min-h-[420px]">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt ?? project.title}
                  fill
                  loading="eager"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Rocket className="text-primary/40 mx-auto mb-3 h-12 w-12" />
                    <p className="text-muted-foreground text-sm">{project.title}</p>
                  </div>
                </div>
              )}
              <div className="from-background/30 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-8">
              <Badge className="mb-3 w-fit">{project.category}</Badge>
              <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
              <p className="text-muted-foreground mb-2 text-sm">{project.subtitle}</p>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {locale === "en" ? project.descriptionEn : project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 5).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <ButtonLink
                    href={project.demoUrl}
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Rocket className="mr-2 h-4 w-4" />
                    {t("liveDemo")}
                  </ButtonLink>
                )}
                {project.repoUrl && (
                  <ButtonLink
                    href={project.repoUrl}
                    variant="outline"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitBranch className="mr-2 h-4 w-4" />
                    GitHub
                  </ButtonLink>
                )}
                <ButtonLink href="/projetos" variant="ghost" size="sm">
                  {t("viewAll")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
