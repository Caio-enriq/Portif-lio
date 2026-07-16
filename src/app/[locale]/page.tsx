import { setRequestLocale } from "next-intl/server";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { HeroSection } from "@/components/organisms/hero-section";
import { StatsBar } from "@/components/molecules/stats-bar";
import { HomePositioning } from "@/components/organisms/home-positioning";
import { HomeAbout } from "@/components/organisms/home-about";
import { HomeSpecialties } from "@/components/organisms/home-specialties";
import { HomePhilosophy } from "@/components/organisms/home-philosophy";
import { HomeFeaturedProject } from "@/components/organisms/home-featured-project";
import { HomeDifferentials } from "@/components/organisms/home-differentials";
import { HomeTimeline } from "@/components/organisms/home-timeline";
import { ContactCTA } from "@/components/organisms/contact-cta";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MarketingLayout>
      <HeroSection />
      <StatsBar />
      <HomePositioning />
      <HomeAbout />
      <HomeSpecialties />
      <HomePhilosophy />
      <HomeFeaturedProject />
      <HomeDifferentials />
      <HomeTimeline />
      <ContactCTA />
    </MarketingLayout>
  );
}
