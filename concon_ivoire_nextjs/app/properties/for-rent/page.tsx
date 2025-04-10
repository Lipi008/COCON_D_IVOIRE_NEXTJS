import Header from "@/components/header"
import Footer from "@/components/footer"
import PropertyList from "@/components/property-list"
import PropertySearch from "@/components/property-search"

export default function PropertiesForRentPage() {
  return (
    <>
      <Header />

      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">Propriétés à Louer</h1>

          {/* Filtres de recherche */}
          <PropertySearch className="mb-8" />

          {/* Résultats */}
          <PropertyList filters={{ status: "À LOUER" }} showPagination={true} />
        </div>
      </div>

      <Footer />
    </>
  )
}
