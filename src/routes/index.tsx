import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { ParallaxGrid } from "@/components/home/ParallaxGrid";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { Stats } from "@/components/home/Stats";
import { Services } from "@/components/home/Services";
import { WhyUs } from "@/components/home/WhyUs";
import { Card3DCarousel } from "@/components/home/Card3DCarousel";
import { FeatureTrio } from "@/components/home/FeatureTrio";
import { Process } from "@/components/home/Process";
import { PricingPreview } from "@/components/home/PricingPreview";
import { PortfolioMarquee } from "@/components/home/PortfolioMarquee";
import { CTABanner } from "@/components/home/CTABanner";
import { AboutIntro } from "@/components/home/AboutIntro";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactStrip } from "@/components/home/ContactStrip";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ParallaxGrid />
      <BrandMarquee />
      <Stats />
      <Services />
      <WhyUs />
      <Card3DCarousel />
      <FeatureTrio />
      <Process />
      <PricingPreview />
      <PortfolioMarquee />
      <CTABanner />
      <AboutIntro />
      <Testimonials />
      <ContactStrip />
    </>
  );
}
