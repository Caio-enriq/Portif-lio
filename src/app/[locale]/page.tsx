import { setRequestLocale } from "next-intl/server";
import { MarketingLayout } from "@/components/templates/marketing-layout";
import { StatsBar } from "@/components/molecules/stats-bar";
import {
  ContactCTA,
  HeroSection,
  HomeAbout,
  HomeDifferentials,
  HomeFeaturedProject,
  HomePhilosophy,
  HomePositioning,
  HomeSpecialties,
  HomeTimeline,
} from "@/features/home";

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
