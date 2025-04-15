"use client";

import { useProperty, useSimilarProperties } from "@/hooks/use-api";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { ApiStatusIndicator } from "@/components/ui/api-status-indicator";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Share2,
  Heart,
  Home,
  Info,
  FileText,
  Map,
  AlertCircle,
} from "lucide-react";
import { useState, use } from "react";

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: property, pagination, isLoading, error } = useProperty(id);
  const { data: similarProperties_ } = useSimilarProperties(id);
  const [isFavorite, setIsFavorite] = useState(false);

  // const property = propertyData?.data
  const similarProperties = similarProperties_ || [];

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Header />

      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          {/* Indicateur de source des données */}
          <div className="flex justify-end mb-4">
            <ApiStatusIndicator showLabel />
          </div>

          {error && (
            /*************  ✨ Windsurf Command 🌟  *************/
            // Affiche un message d'erreur si une erreur est survenue lors du chargement
            // de la propriété
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>
                Une erreur est survenue lors du chargement de la propriété.{" "}
                {error.message}
              </span>
            </div>
          )}

          {isLoading ? (
            // Squelette de chargement
            // Affiche un squelette de chargement jusqu'à ce que les données soient chargées
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  // Titre de la propriété
                  <Skeleton className="h-8 w-64 mb-2" />
                  // Adresse de la propriété
                  <Skeleton className="h-4 w-40" />
                </div>
                /******* c7063b28-1658-41e6-a748-5169b5585071 *******/
                <div>
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-6 w-20" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Skeleton className="h-[400px] rounded-lg" />
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-[190px] rounded-lg" />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-32 ml-auto" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Skeleton className="h-12 w-full mb-6" />
                  <Skeleton className="h-64 w-full mb-6" />
                  <Skeleton className="h-64 w-full" />
                </div>
                <div>
                  <Skeleton className="h-64 w-full mb-6" />
                  <Skeleton className="h-64 w-full" />
                </div>
              </div>
            </div>
          ) : property ? (
            <>
              {/* En-tête de la propriété */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-3xl font-bold text-primary-DEFAULT mb-2">
                    {property.price}
                  </div>
                  <Badge className="bg-primary-DEFAULT">
                    {property.status}
                  </Badge>
                </div>
              </div>

              {/* Galerie d'images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={property.images[0] || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {property.images.slice(1, 5).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-[190px] rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${property.title} - Image ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Button variant="outline" className="flex items-center">
                  <Share2 className="mr-2 h-4 w-4" /> Partager
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center"
                  onClick={toggleFavorite}
                >
                  <Heart
                    className={`mr-2 h-4 w-4 ${
                      isFavorite ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                  {isFavorite ? "Sauvegardé" : "Ajouter aux favoris"}
                </Button>
                <Button className="bg-primary-DEFAULT hover:bg-primary-dark ml-auto">
                  Contacter l'agent
                </Button>
              </div>

              {/* Contenu principal */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Informations principales */}
                <div className="lg:col-span-2">
                  <Tabs defaultValue="details">
                    <TabsList className="mb-6">
                      <TabsTrigger
                        value="details"
                        className="flex items-center"
                      >
                        <Home className="mr-2 h-4 w-4" /> Détails
                      </TabsTrigger>
                      <TabsTrigger
                        value="features"
                        className="flex items-center"
                      >
                        <Info className="mr-2 h-4 w-4" /> Caractéristiques
                      </TabsTrigger>
                      <TabsTrigger
                        value="documents"
                        className="flex items-center"
                      >
                        <FileText className="mr-2 h-4 w-4" /> Documents
                      </TabsTrigger>
                      <TabsTrigger value="map" className="flex items-center">
                        <Map className="mr-2 h-4 w-4" /> Carte
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="details" className="space-y-6">
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">
                            Description
                          </h2>
                          <p className="text-gray-600 mb-6">
                            {property.description}
                          </p>

                          <h3 className="text-lg font-semibold mb-3">
                            Détails de la propriété
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex items-center">
                              <Bed
                                size={20}
                                className="mr-2 text-primary-DEFAULT"
                              />
                              <div>
                                <p className="text-sm text-gray-500">
                                  Chambres
                                </p>
                                <p className="font-medium">{property.beds}</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Bath
                                size={20}
                                className="mr-2 text-primary-DEFAULT"
                              />
                              <div>
                                <p className="text-sm text-gray-500">
                                  Salles de bain
                                </p>
                                <p className="font-medium">{property.baths}</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Maximize
                                size={20}
                                className="mr-2 text-primary-DEFAULT"
                              />
                              <div>
                                <p className="text-sm text-gray-500">Surface</p>
                                <p className="font-medium">{property.area}</p>
                              </div>
                            </div>
                            {property.yearBuilt && (
                              <div className="flex items-center">
                                <Calendar
                                  size={20}
                                  className="mr-2 text-primary-DEFAULT"
                                />
                                <div>
                                  <p className="text-sm text-gray-500">
                                    Année de construction
                                  </p>
                                  <p className="font-medium">
                                    {property.yearBuilt}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="features">
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">
                            Caractéristiques
                          </h2>
                          {property.features && property.features.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {property.features.map((feature, index) => (
                                <div key={index} className="flex items-center">
                                  <div className="h-2 w-2 rounded-full bg-primary-DEFAULT mr-2"></div>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-600">
                              Aucune caractéristique spécifique n'est disponible
                              pour cette propriété.
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="documents">
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">
                            Documents
                          </h2>
                          <p className="text-gray-600">
                            Contactez l'agent pour obtenir les documents
                            relatifs à cette propriété.
                          </p>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="map">
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">
                            Localisation
                          </h2>
                          <div className="relative h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-gray-600">
                              Carte non disponible en prévisualisation
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Sidebar */}
                <div>
                  {/* Agent */}
                  {property.agent && (
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-4">
                          Agent immobilier
                        </h2>
                        <div className="flex items-center mb-4">
                          <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                            <Image
                              src={property.agent.image || "/placeholder.svg"}
                              alt={property.agent.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">
                              {property.agent.name}
                            </h3>
                            <p className="text-gray-500 text-sm">
                              Agent immobilier
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center text-gray-600">
                            <Phone
                              size={18}
                              className="mr-2 text-primary-DEFAULT"
                            />
                            <span>{property.agent.phone}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Mail
                              size={18}
                              className="mr-2 text-primary-DEFAULT"
                            />
                            <span>{property.agent.email}</span>
                          </div>
                        </div>

                        <div className="mt-6">
                          <Button className="w-full bg-primary-DEFAULT hover:bg-primary-dark">
                            Contacter l'agent
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Propriétés similaires */}
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">
                        Propriétés similaires
                      </h2>
                      {similarProperties.length > 0 ? (
                        <div className="space-y-4">
                          {similarProperties
                            .slice(0, 3)
                            .map((similarProperty) => (
                              <Link
                                href={`/properties/${similarProperty.id}`}
                                key={similarProperty.id}
                              >
                                <div className="flex hover:bg-gray-50 p-2 rounded-md transition-colors">
                                  <div className="relative h-20 w-20 rounded-md overflow-hidden mr-3">
                                    <Image
                                      src={
                                        similarProperty.images[0] ||
                                        "/placeholder.svg"
                                      }
                                      alt={similarProperty.title}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-sm">
                                      {similarProperty.title}
                                    </h3>
                                    <p className="text-primary-DEFAULT font-semibold text-sm">
                                      {similarProperty.price}
                                    </p>
                                    <div className="flex items-center text-xs text-gray-500">
                                      <Bed size={12} className="mr-1" />
                                      <span className="mr-2">
                                        {similarProperty.beds}
                                      </span>
                                      <Bath size={12} className="mr-1" />
                                      <span className="mr-2">
                                        {similarProperty.baths}
                                      </span>
                                      <Maximize size={12} className="mr-1" />
                                      <span>{similarProperty.area}</span>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">
                          Aucune propriété similaire n'est disponible pour le
                          moment.
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <AlertCircle className="h-16 w-16 mx-auto" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Propriété non trouvée</h2>
              <p className="text-gray-600 mb-8">
                La propriété que vous recherchez n'existe pas ou a été
                supprimée.
              </p>
              <Link href="/properties">
                <Button className="bg-primary-DEFAULT hover:bg-primary-dark">
                  Voir toutes les propriétés
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
