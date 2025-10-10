import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StorytellingSection from "@/components/StorytellingSection";
import MissionCasesSection from "@/components/MissionCasesSection";
import TechnologySection from "@/components/TechnologySection";
import PlatformSection from "@/components/PlatformSection";
import ComparisonSection from "@/components/ComparisonSection";
import ROICalculator from "@/components/ROICalculator";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <StorytellingSection />
      <MissionCasesSection />
      <TechnologySection />
      <PlatformSection />
      <ComparisonSection />
      <ROICalculator />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default Index;
