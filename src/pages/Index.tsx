import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureHighlight from "@/components/FeatureHighlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import PromotionMechanics from "@/components/PromotionMechanics";
import Clients from "@/components/Clients";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <FeatureHighlight />
      <FeaturesGrid />
      <PromotionMechanics />
      <Clients />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default Index;
