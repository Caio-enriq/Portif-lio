import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { EngineeringBehindArchitectureContent } from "@/components/organisms/engineering-behind-architecture-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Behind the Architecture" : "Por trás da arquitetura",
    description:
      locale === "en"
        ? "The technologies Caio Enrique uses, why he chooses them, and the trade-offs behind each decision."
        : "As tecnologias que Caio Enrique usa, por que escolhe cada uma e os trade-offs por trás das decisões.",
  };
}

export default async function BehindArchitecturePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MarketingLayout>
      <EngineeringBehindArchitectureContent />
    </MarketingLayout>
  );
}
