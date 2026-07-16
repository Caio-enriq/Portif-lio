import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { EngineeringHowIBuildContent } from "@/components/organisms/engineering-how-i-build-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "How I Build Software" : "Como Construo Software",
    description:
      locale === "en"
        ? "A practical look at Caio Enrique's software engineering process, from problem analysis to delivery."
        : "Uma visão prática do processo de engenharia de software de Caio Enrique, do problema à entrega.",
  };
}

export default async function HowIBuildPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MarketingLayout>
      <EngineeringHowIBuildContent />
    </MarketingLayout>
  );
}
