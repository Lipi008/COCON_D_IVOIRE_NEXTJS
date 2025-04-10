import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsList from "@/components/news-list"
import NewsHero from "@/components/news-hero"

export default function NewsListPage() {
  return (
    <>
      <Header />
      <NewsHero listView={true} />
      <NewsList />
      <Footer />
    </>
  )
}
