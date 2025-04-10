"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { PropertyFilters } from "@/lib/types/api-types"
import { Search, Filter } from "lucide-react"

interface PropertySearchProps {
  onSearch?: (filters: PropertyFilters) => void
  className?: string
  compact?: boolean
}

export default function PropertySearch({ onSearch, className = "", compact = false }: PropertySearchProps) {
  const router = useRouter()
  const [filters, setFilters] = useState<PropertyFilters>({
    status: "all",
    type: "all",
    location: "",
    maxPrice: undefined,
    beds: undefined,
  })

  const handleFilterChange = (key: keyof PropertyFilters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSearch = () => {
    // Si un callback onSearch est fourni, l'utiliser
    if (onSearch) {
      onSearch(filters)
      return
    }

    // Sinon, naviguer vers la page de recherche avec les filtres
    const queryParams = new URLSearchParams()

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "all" && value !== "") {
        queryParams.append(key, value.toString())
      }
    })

    router.push(`/properties?${queryParams.toString()}`)
  }

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <div className={`grid grid-cols-1 ${compact ? "md:grid-cols-3" : "md:grid-cols-3 lg:grid-cols-5"} gap-4 mb-4`}>
        <div>
          <label className="block text-sm font-medium mb-1">Type de bien</label>
          <Select defaultValue="all" onValueChange={(value) => handleFilterChange("type", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Tous les types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="apartment">Appartement</SelectItem>
              <SelectItem value="house">Maison</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Statut</label>
          <Select defaultValue="all" onValueChange={(value) => handleFilterChange("status", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Tous les statuts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="À VENDRE">À vendre</SelectItem>
              <SelectItem value="À LOUER">À louer</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Localisation</label>
          <Input placeholder="Ville, région..." onChange={(e) => handleFilterChange("location", e.target.value)} />
        </div>

        {!compact && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Prix max</label>
              <Select defaultValue="1000000" onValueChange={(value) => handleFilterChange("maxPrice", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Prix maximum" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100000">100 000 €</SelectItem>
                  <SelectItem value="300000">300 000 €</SelectItem>
                  <SelectItem value="500000">500 000 €</SelectItem>
                  <SelectItem value="1000000">1 000 000 €</SelectItem>
                  <SelectItem value="2000000">2 000 000 €</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Chambres</label>
              <Select
                defaultValue="any"
                onValueChange={(value) =>
                  handleFilterChange("beds", value === "any" ? undefined : Number.parseInt(value))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Nombre de chambres" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Peu importe</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-end">
        {!compact && (
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" /> Plus de filtres
          </Button>
        )}
        <Button className="bg-primary-DEFAULT hover:bg-primary-dark" onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" /> Rechercher
        </Button>
      </div>
    </div>
  )
}
