"use client";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PropertyList from "@/components/property-list";
import PropertySearch from "@/components/property-search";
import type { PropertyFilters } from "@/lib/types/api-types";
export default function PropertiesPage() {
  const [searchFilters, setSearchFilters] = useState<PropertyFilters>({});
  return (
    <>
      <Header />

      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">Rechercher des propriétés</h1>

          {/* Filtres de recherche */}
          <PropertySearch
            className="mb-8"
            onSearch={(filters) => setSearchFilters(filters)}
          />

          {/* Résultats avec filtres */}
          <PropertyList filters={searchFilters} showPagination={true} />
        </div>
      </div>

      <Footer />
    </>
  );
}
