import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { ProjectDetailContent } from "@/features/projects";
import { getProjectBySlug, projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: locale === "en" ? "Project not found" : "Projeto não encontrado" };
  return {
    title: project.title,
    description:
      locale === "en" ? (project.descriptionEn ?? project.description) : project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <MarketingLayout>
      <ProjectDetailContent project={project} />
    </MarketingLayout>
  );
}
