import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { ResumeContent } from "@/components/organisms/resume-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "CV" : "Currículo",
    description:
      locale === "en"
        ? "Professional CV of Caio Enrique, software developer focused on backend, automation, applied AI, and enterprise systems."
        : "Currículo profissional de Caio Enrique, desenvolvedor de software com foco em backend, automação, IA aplicada e sistemas corporativos.",
  };
}

export default async function ResumePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MarketingLayout>
      <ResumeContent />
    </MarketingLayout>
  );
}
