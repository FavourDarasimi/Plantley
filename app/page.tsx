import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { SupportedCropsSection } from "@/components/sections/SupportedCropsSection";
import { WhyPlantleySection } from "@/components/sections/WhyPlantleySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ResultsDialog } from "@/components/results/ResultsDialog";

export default function Home() {
  return (
    <main className="pt-14 max-w-7xl mx-auto">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <ResultsDialog />
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="supported-crops">
        <SupportedCropsSection />
      </div>
      <div id="why-plantley">
        <WhyPlantleySection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}
