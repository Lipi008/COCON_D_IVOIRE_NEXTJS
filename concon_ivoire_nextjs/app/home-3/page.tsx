import Header from "@/components/header"
import TopBar from "@/components/top-bar"
import MapViewHero from "@/components/map-view-hero"
import PropertyList from "@/components/property-list"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function HomeMapViewPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      <MapViewHero />
      <div className="container-custom py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Propriétés à proximité</h2>
        <PropertyList limit={6} />
      </div>
      <CtaSection />
      <Footer />
    </main>
  )
}
