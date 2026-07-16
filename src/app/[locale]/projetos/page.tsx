import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { ProjectsContent } from "@/components/organisms/projects-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Projects" : "Projetos",
    description:
      locale === "en"
        ? "Engineering case studies by Caio Enrique, covering automation, analytics, full-stack platforms, and applied AI."
        : "Estudos de caso de engenharia por Caio Enrique, com automação, analytics, plataformas full-stack e IA aplicada.",
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MarketingLayout>
      <ProjectsContent />
    </MarketingLayout>
  );
}
