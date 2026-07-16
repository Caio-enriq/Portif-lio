import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { EngineeringPrinciplesContent } from "@/components/organisms/engineering-principles-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Engineering Principles" : "Princípios de Engenharia",
    description:
      locale === "en"
        ? "Engineering principles Caio Enrique follows when designing, building, testing, and evolving software."
        : "Princípios que Caio Enrique segue para projetar, construir, testar e evoluir software.",
  };
}

export default async function PrinciplesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MarketingLayout>
      <EngineeringPrinciplesContent />
    </MarketingLayout>
  );
}
