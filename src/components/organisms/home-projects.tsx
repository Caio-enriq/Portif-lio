"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/molecules/project-card";
import { getFeaturedProjects } from "@/data/projects";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRight, FolderOpen, ExternalLink } from "lucide-react";

export function HomeProjects() {
  const t = useTranslations("home.projects");
  const featured = getFeaturedProjects();

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
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/projetos">
            <FolderOpen className="mr-2 h-4 w-4" />
            {t("viewAll")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            href="https://github.com/Caioe"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            GitHub
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
