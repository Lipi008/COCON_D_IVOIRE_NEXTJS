import Header from "@/components/header";
import TopBar from "@/components/top-bar";
import HeroSection from "@/components/hero-section";
import MainFocus from "@/components/main-focus";
import StatsSection from "@/components/stats-section";
import AboutSection from "@/components/about-section";
import PropertyDetails from "@/components/property-details";
import FeaturedListings from "@/components/featured-listings";
import BuildingAmenities from "@/components/building-amenities";
import ApartmentPlans from "@/components/apartment-plans";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      <HeroSection />
      <AboutSection />
      <MainFocus />
      <StatsSection />
      <PropertyDetails />
      <FeaturedListings />
      {/* <BuildingAmenities /> */}
      <ApartmentPlans />
      <CtaSection />
      <Footer />
    </main>
  );
}
