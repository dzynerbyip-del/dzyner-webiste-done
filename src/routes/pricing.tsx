import { createFileRoute } from "@tanstack/react-router";
import { PricingPreview } from "@/components/home/PricingPreview";
import { CTABanner } from "@/components/home/CTABanner";
import { PickTheWayHero } from "@/components/pricing/PickTheWayHero";
import { ProjectEstimator } from "@/components/pricing/ProjectEstimator";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DZYNER" },
      { name: "description", content: "Pay-per-project, subscription, or hourly hire. Estimate your project cost in seconds." },
      { property: "og:title", content: "Pricing — DZYNER" },
      { property: "og:description", content: "Choose the model that fits. Estimate your project cost in seconds." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: () => (
    <div>
      <PickTheWayHero />
      <ProjectEstimator />
      <PricingPreview />
      <CTABanner />
    </div>
  ),
});
