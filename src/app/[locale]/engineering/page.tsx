import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { EngineeringContent } from "@/features/engineering";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Engineering" : "Engenharia",
    description:
      locale === "en"
        ? "How Caio Enrique thinks about architecture, technical decisions, quality, and software delivery."
        : "Como Caio Enrique pensa arquitetura, decisões técnicas, qualidade e entrega de software.",
  };
}

export default async function EngineeringPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MarketingLayout>
      <EngineeringContent />
    </MarketingLayout>
  );
}
