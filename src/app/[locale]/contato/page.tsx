import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { ContactContent } from "@/features/contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Contact" : "Contato",
    description:
      locale === "en"
        ? "Contact Caio Enrique to discuss software development, automation, projects, and professional opportunities."
        : "Entre em contato com Caio Enrique para conversar sobre desenvolvimento de software, automação, projetos e oportunidades.",
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MarketingLayout>
      <ContactContent />
    </MarketingLayout>
  );
}
