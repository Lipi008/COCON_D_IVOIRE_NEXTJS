import Header from "@/components/header"
import TopBar from "@/components/top-bar"
import HeroSection from "@/components/hero-section-modern"
import MainFocus from "@/components/main-focus"
import FeaturedProperties from "@/components/featured-properties"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function HomeModernPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      <HeroSection />
      <MainFocus />
      <FeaturedProperties />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
