import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DecentralizationSection from "@/components/DecentralizationSection";
import RegulatorySection from "@/components/RegulatorySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionSection />
      <DecentralizationSection />
      <RegulatorySection />
      <HowItWorksSection />
      <TrustBadges />
      <Footer />
    </div>
  );
}
