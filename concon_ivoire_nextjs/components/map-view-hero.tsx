"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Plus, Minus } from "lucide-react"
import PropertySearch from "./property-search"

const MapViewHero = () => {
  const [zoom, setZoom] = useState(12)

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 1, 18))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 1, 8))
  }

  return (
    <div className="relative bg-light">
      <div className="h-[600px] bg-gray-200 relative">
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

        {/* Search overlay */}
        <div className="absolute top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-10">
          <div className="bg-white p-4 rounded-lg shadow-md md:w-[600px]">
            <PropertySearch compact={true} />
          </div>
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
  )
}

export default MapViewHero
