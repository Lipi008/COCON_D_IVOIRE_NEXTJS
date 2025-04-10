import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutHero from "@/components/about-hero";
import AboutValues from "@/components/about-values";
import StatsSection from "@/components/stats-section";
import TeamPreview from "@/components/team-preview";
import CtaSection from "@/components/cta-section";
import BuildingAmenities from "@/components/building-amenities";

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutValues />
      {/* <StatsSection /> */}
      {/* <BuildingAmenities /> */}
      <TeamPreview />
      <CtaSection />
      <Footer />
    </>
  );
}
