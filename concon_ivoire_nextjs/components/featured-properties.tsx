"use client"

import { useFeaturedProperties } from "@/hooks/use-api"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ApiStatusIndicator } from "@/components/ui/api-status-indicator"
import Link from "next/link"
import { Bed, Bath, Maximize, MapPin, Heart, Share2, Eye, AlertCircle, Camera } from "lucide-react"
import { useState } from "react"
import { Modal } from "./ui/modal"
import { ImageGallery } from "./ui/image-gallery"

export default function FeaturedProperties() {
  const { data, isLoading, error, isUsingMock } = useFeaturedProperties()
  const [selectedProperty, setSelectedProperty] = useState<any>(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const openQuickView = (property: any) => {
    setSelectedProperty(property)
    setIsQuickViewOpen(true)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Propriétés en Vedette</h2>
          <ApiStatusIndicator showLabel />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>Une erreur est survenue lors du chargement des propriétés. {error.message}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            // Squelettes de chargement
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={`skeleton-${index}`} className="overflow-hidden">
                <div className="relative">
                  <Skeleton className="h-64 w-full" />
                </div>
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6 flex justify-between items-center">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-10 w-1/4" />
                </CardFooter>
              </Card>
            ))
          ) : data?.data && data.data.length > 0 ? (
            data.data.map((property) => (
              <Card key={property.id} className="property-card group">
                <div className="relative overflow-hidden">
                  <img
                    src={property.images[0] || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={property.status === "À LOUER" ? "badge-rent" : "badge-sale"}>
                      {property.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-white" />
                    <span className="text-white text-sm">{property.location}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
                    <Camera className="h-4 w-4 text-gray-600" />
                  </div>

                  {/* Quick actions overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <button className="bg-white rounded-full p-3" onClick={() => openQuickView(property)}>
                        <Eye className="h-5 w-5 text-primary" />
                      </button>
                      <button
                        className="bg-white rounded-full p-3"
                        onClick={() => toggleFavorite(property.id as number)}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            favorites.includes(property.id as number) ? "text-red-500 fill-red-500" : "text-primary"
                          }`}
                        />
                      </button>
                      <button className="bg-white rounded-full p-3">
                        <Share2 className="h-5 w-5 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-primary font-bold text-xl mb-4">
                    {property.price}
                    <span className="text-gray-500 text-sm font-normal">{property.period}</span>
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{property.description}</p>

                  <div className="flex justify-between border-t border-gray-200 pt-4">
                    <div className="property-info">
                      <Bed className="property-info-icon" size={16} />
                      <span>{property.beds} Chambres</span>
                    </div>
                    <div className="property-info">
                      <Bath className="property-info-icon" size={16} />
                      <span>{property.baths} Salles de bain</span>
                    </div>
                    <div className="property-info">
                      <Maximize className="property-info-icon" size={16} />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="border-t p-6 flex justify-between items-center">
                  <div className="flex items-center">
                    {property.agent && (
                      <>
                        <img
                          src={property.agent.image || "/placeholder.svg"}
                          alt={property.agent.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <span className="font-medium">{property.agent.name}</span>
                      </>
                    )}
                  </div>
                  <Link href={`/properties/${property.id}`}>
                    <Button variant="outline" className="hover:bg-primary-DEFAULT hover:text-white">
                      Détails
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <AlertCircle className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-2">Aucune propriété en vedette</h3>
              <p className="text-gray-500">Aucune propriété en vedette n'est disponible pour le moment.</p>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/properties">
            <Button className="bg-primary-DEFAULT hover:bg-primary-dark">Voir Toutes les Propriétés</Button>
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal isOpen={isQuickViewOpen} onClose={() => setIsQuickViewOpen(false)} size="xl">
        {selectedProperty && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ImageGallery images={selectedProperty.images} alt={selectedProperty.title} />
            </div>
            <div>
              <div className="mb-2">
                <span className={selectedProperty.status === "À LOUER" ? "badge-rent" : "badge-sale"}>
                  {selectedProperty.status}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">{selectedProperty.title}</h2>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin size={16} className="mr-1" />
                <span>{selectedProperty.location}</span>
              </div>
              <p className="text-primary font-bold text-2xl mb-4">
                {selectedProperty.price}
                <span className="text-gray-500 text-sm font-normal">{selectedProperty.period}</span>
              </p>
              <p className="text-gray-600 mb-6">{selectedProperty.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <Bed className="mx-auto mb-1 text-primary" size={20} />
                  <span className="block text-sm text-gray-500">Chambres</span>
                  <span className="font-bold">{selectedProperty.beds}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <Bath className="mx-auto mb-1 text-primary" size={20} />
                  <span className="block text-sm text-gray-500">Salles de bain</span>
                  <span className="font-bold">{selectedProperty.baths}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <Maximize className="mx-auto mb-1 text-primary" size={20} />
                  <span className="block text-sm text-gray-500">Surface</span>
                  <span className="font-bold">{selectedProperty.area}</span>
                </div>
              </div>

              {selectedProperty.agent && (
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="font-bold mb-3">Information sur l'Agent</h3>
                  <div className="flex items-center">
                    <img
                      src={selectedProperty.agent.image || "/placeholder.svg"}
                      alt={selectedProperty.agent.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium">{selectedProperty.agent.name}</p>
                      <p className="text-gray-500 text-sm">{selectedProperty.agent.phone}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                <Link href={`/properties/${selectedProperty.id}`}>
                  <Button
                    className="bg-primary-DEFAULT hover:bg-primary-dark flex-1"
                    onClick={() => setIsQuickViewOpen(false)}
                  >
                    Voir les Détails
                  </Button>
                </Link>
                <Button variant="outline" className="flex-1" onClick={() => toggleFavorite(selectedProperty.id)}>
                  {favorites.includes(selectedProperty.id) ? (
                    <>
                      <Heart className="mr-2 h-4 w-4 text-red-500 fill-red-500" /> Sauvegardé
                    </>
                  ) : (
                    <>
                      <Heart className="mr-2 h-4 w-4" /> Sauvegarder
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
