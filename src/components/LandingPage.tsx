import { FaqSection } from "./landing/FaqSection";
import { FeatureGrid } from "./landing/FeatureGrid";
import { FooterCta } from "./landing/FooterCta";
import { Hero } from "./landing/Hero";
import { PrivacySection } from "./landing/PrivacySection";
import { SoundCloudSection } from "./landing/SoundCloudSection";
import { Spotlights } from "./landing/Spotlights";
import { WorksWith } from "./landing/WorksWith";

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col items-center overflow-hidden pt-6 sm:pt-16">
      <Hero />
      <FeatureGrid />
      <Spotlights />
      <SoundCloudSection />
      <WorksWith />
      <PrivacySection />
      <FaqSection />
      <FooterCta />
    </main>
  );
}
