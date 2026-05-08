import { FaqSection } from "./landing/FaqSection";
import { FeatureGrid } from "./landing/FeatureGrid";
import { FooterCta } from "./landing/FooterCta";
import { Hero } from "./landing/Hero";

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col items-center overflow-hidden pt-10 sm:pt-16">
      <Hero />
      <FeatureGrid />
      <FaqSection />
      <FooterCta />
    </main>
  );
}
