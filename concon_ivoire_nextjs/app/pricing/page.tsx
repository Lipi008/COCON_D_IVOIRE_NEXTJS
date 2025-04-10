import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingHero from "@/components/pricing-hero"
import PricingPlans from "@/components/pricing-plans"
import CtaSection from "@/components/cta-section"

export default function PricingPage() {
  return (
    <>
      <Header />
      <PricingHero />
      <PricingPlans />
      <CtaSection />
      <Footer />
    </>
  )
}
