import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { AboutContent } from "@/components/organisms/about-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "About" : "Sobre",
    description:
      locale === "en"
        ? "Learn more about Caio Enrique, a software developer focused on backend, automation, applied AI, and international growth."
        : "Conheça Caio Enrique, desenvolvedor de software com foco em backend, automação, IA aplicada e carreira internacional.",
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MarketingLayout>
      <AboutContent />
    </MarketingLayout>
  );
}
