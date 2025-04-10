"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Plus, Minus, List, Map, Bed, Bath, Maximize } from "lucide-react"
import PropertySearch from "./property-search"

const PropertyMapView = () => {
  const [zoom, setZoom] = useState(12)
  const [viewMode, setViewMode] = useState<"map" | "split">("split")

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 1, 18))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 1, 8))
  }

  // Sample properties for the list view
  const properties = [
    {
      id: 1,
      title: "Appartement Moderne",
      price: "450,000 €",
      location: "Paris, France",
      image: "/placeholder.svg?height=200&width=300",
      beds: 2,
      baths: 1,
      area: "85 m²",
      status: "À VENDRE",
    },
    {
      id: 2,
      title: "Villa avec Piscine",
      price: "1,200,000 €",
      location: "Nice, France",
      image: "/placeholder.svg?height=200&width=300",
      beds: 4,
      baths: 3,
      area: "220 m²",
      status: "À VENDRE",
    },
    {
      id: 3,
      title: "Studio en Centre-Ville",
      price: "1,200 €/mois",
      location: "Lyon, France",
      image: "/placeholder.svg?height=200&width=300",
      beds: 1,
      baths: 1,
      area: "45 m²",
      status: "À LOUER",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Propriétés sur la Carte</h1>
          <div className="flex space-x-2">
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              className={viewMode === "map" ? "bg-primary text-white" : ""}
              onClick={() => setViewMode("map")}
            >
              <Map className="h-4 w-4 mr-2" /> Carte
            </Button>
            <Button
              variant={viewMode === "split" ? "default" : "outline"}
              className={viewMode === "split" ? "bg-primary text-white" : ""}
              onClick={() => setViewMode("split")}
            >
              <List className="h-4 w-4 mr-2" /> Vue Mixte
            </Button>
          </div>
        </div>

        <PropertySearch className="mb-6" compact={true} />

        <div className={`grid ${viewMode === "map" ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3"} gap-6`}>
          {viewMode === "split" && (
            <div className="lg:col-span-1 space-y-4 h-[calc(100vh-200px)] overflow-y-auto pr-2">
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <span className={property.status === "À LOUER" ? "badge-rent" : "badge-sale"}>
                          {property.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{property.title}</h3>
                      <p className="text-primary font-bold mb-2">{property.price}</p>
                      <div className="flex items-center text-gray-500 mb-3">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 border-t pt-3">
                        <div className="flex items-center">
                          <Bed size={14} className="mr-1" />
                          <span>{property.beds}</span>
                        </div>
                        <div className="flex items-center">
                          <Bath size={14} className="mr-1" />
                          <span>{property.baths}</span>
                        </div>
                        <div className="flex items-center">
                          <Maximize size={14} className="mr-1" />
                          <span>{property.area}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className={viewMode === "map" ? "col-span-1" : "lg:col-span-2"}>
            <div className="bg-gray-200 rounded-lg h-[calc(100vh-200px)] relative">
              {/* Placeholder for the map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">Carte interactive des propriétés</p>
                  <p className="text-gray-600">La carte sera chargée ici</p>
                </div>
              </div>

              {/* Map controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white hover:bg-gray-100"
                  onClick={handleZoomIn}
                  aria-label="Zoom in"
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white hover:bg-gray-100"
                  onClick={handleZoomOut}
                  aria-label="Zoom out"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>

              {/* Property markers (placeholders) */}
              <div className="absolute top-1/3 left-1/4">
                <div className="relative">
                  <MapPin className="h-8 w-8 text-primary" />
                  <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-primary">
                    3
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-2/3">
                <div className="relative">
                  <MapPin className="h-8 w-8 text-primary" />
                  <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-primary">
                    5
                  </div>
                </div>
              </div>
              <div className="absolute top-2/3 left-1/3">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyMapView
