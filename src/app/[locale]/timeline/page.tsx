import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { TimelineContent } from "@/features/timeline";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Journey" : "Trajetória",
    description:
      locale === "en"
        ? "Caio Enrique's journey in technology, from early curiosity to real software development work."
        : "A trajetória de Caio Enrique na tecnologia, da curiosidade inicial ao desenvolvimento de soluções reais.",
  };
}

export default async function TimelinePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MarketingLayout>
      <TimelineContent />
    </MarketingLayout>
  );
}
