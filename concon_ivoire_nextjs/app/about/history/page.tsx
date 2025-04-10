import Header from "@/components/header"
import Footer from "@/components/footer"
import HistoryHero from "@/components/history-hero"
import HistoryTimeline from "@/components/history-timeline"
import CtaSection from "@/components/cta-section"

export default function HistoryPage() {
  return (
    <>
      <Header />
      <HistoryHero />
      <HistoryTimeline />
      <CtaSection />
      <Footer />
    </>
  )
}
