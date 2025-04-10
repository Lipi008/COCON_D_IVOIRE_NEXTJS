import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsGrid from "@/components/news-grid"
import NewsHero from "@/components/news-hero"

export default function NewsPage() {
  return (
    <>
      <Header />
      <NewsHero />
      <NewsGrid />
      <Footer />
    </>
  )
}
