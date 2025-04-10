"use client";

import { useState } from "react";
import {
  MapPin,
  Camera,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import { Modal } from "./ui/modal";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "./ui/image-gallery";
import { ScrollReveal } from "./ui/scroll-reveal";

const FeaturedListings = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const properties = [
    {
      id: 1,
      title: "Nouvel Appartement Belle Vue",
      price: "$34,900",
      period: "/Month",
      location: "Jardins de Belmont, Paris",
      beds: 3,
      baths: 2,
      area: "3450 square Ft",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      status: "À LOUER",
      description:
        "Belle maison familiale spacieuse au cœur de Westbury. Récemment rénovée avec nouveaux parquets, nouvelle cuisine, nouvelle salle de bain, nouveau toit et nouvelles fenêtres.",
      agent: {
        name: "William Seklo",
        image: "/placeholder.svg?height=50&width=50",
        phone: "+1 (123) 456-7890",
        email: "william@example.com",
      },
    },
    {
      id: 2,
      title: "Appartements Modernes",
      price: "$34,900",
      period: "/Month",
      location: "Jardins de Belmont, Paris",
      beds: 3,
      baths: 2,
      area: "3450 square Ft",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      status: "À VENDRE",
      description:
        "Belle maison familiale spacieuse au cœur de Westbury. Récemment rénovée avec nouveaux parquets, nouvelle cuisine, nouvelle salle de bain, nouveau toit et nouvelles fenêtres.",
      agent: {
        name: "William Seklo",
        image: "/placeholder.svg?height=50&width=50",
        phone: "+1 (123) 456-7890",
        email: "william@example.com",
      },
    },
    {
      id: 3,
      title: "Appartement Confortable",
      price: "$34,900",
      period: "/Month",
      location: "Jardins de Belmont, Paris",
      beds: 3,
      baths: 2,
      area: "3450 square Ft",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      status: "À LOUER",
      description:
        "Belle maison familiale spacieuse au cœur de Westbury. Récemment rénovée avec nouveaux parquets, nouvelle cuisine, nouvelle salle de bain, nouveau toit et nouvelles fenêtres.",
      agent: {
        name: "William Seklo",
        image: "/placeholder.svg?height=50&width=50",
        phone: "+1 (123) 456-7890",
        email: "william@example.com",
      },
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const openQuickView = (property: any) => {
    setSelectedProperty(property);
    setIsQuickViewOpen(true);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Propriétés en Vedette
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <ScrollReveal key={property.id} delay={index * 0.1} direction="up">
              <motion.div
                className="property-card group"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.images[0] || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className={
                        property.status === "À LOUER"
                          ? "badge-rent"
                          : "badge-sale"
                      }
                    >
                      {property.status}
                    </motion.span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-white" />
                    <span className="text-white text-sm">
                      {property.location}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
                    <Camera className="h-4 w-4 text-gray-600" />
                  </div>

                  {/* Quick actions overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white rounded-full p-3"
                        onClick={() => openQuickView(property)}
                      >
                        <Eye className="h-5 w-5 text-primary" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white rounded-full p-3"
                        onClick={() => toggleFavorite(property.id)}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            favorites.includes(property.id)
                              ? "text-red-500 fill-red-500"
                              : "text-primary"
                          }`}
                        />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white rounded-full p-3"
                      >
                        <Share2 className="h-5 w-5 text-primary" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-primary font-bold text-xl mb-4">
                    {property.price}
                    <span className="text-gray-500 text-sm font-normal">
                      {property.period}
                    </span>
                  </p>
                  <p className="text-gray-600 mb-4">{property.description}</p>

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
                      <Square className="property-info-icon" size={16} />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    {/* <div className="flex items-center">
                      <img
                        src={property.agent.image || "/placeholder.svg"}
                        alt={property.agent.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <span className="font-medium">{property.agent.name}</span>
                    </div> */}
                    {/* <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-primary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8h16M4 16h16"
                          />
                        </svg>
                      </button>
                      <button
                        className={`text-gray-500 hover:text-primary transition-colors ${
                          favorites.includes(property.id) ? "text-red-500" : ""
                        }`}
                        onClick={() => toggleFavorite(property.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill={
                            favorites.includes(property.id)
                              ? "currentColor"
                              : "none"
                          }
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-primary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </button>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-primary hover:bg-primary-dark">
            Voir Toutes les Propriétés
          </Button>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        size="xl"
      >
        {selectedProperty && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ImageGallery
                images={selectedProperty.images}
                alt={selectedProperty.title}
              />
            </div>
            <div>
              <div className="mb-2">
                <span
                  className={
                    selectedProperty.status === "À LOUER"
                      ? "badge-rent"
                      : "badge-sale"
                  }
                >
                  {selectedProperty.status}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {selectedProperty.title}
              </h2>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin size={16} className="mr-1" />
                <span>{selectedProperty.location}</span>
              </div>
              <p className="text-primary font-bold text-2xl mb-4">
                {selectedProperty.price}
                <span className="text-gray-500 text-sm font-normal">
                  {selectedProperty.period}
                </span>
              </p>
              <p className="text-gray-600 mb-6">
                {selectedProperty.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <Bed className="mx-auto mb-1 text-primary" size={20} />
                  <span className="block text-sm text-gray-500">Chambres</span>
                  <span className="font-bold">{selectedProperty.beds}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <Bath className="mx-auto mb-1 text-primary" size={20} />
                  <span className="block text-sm text-gray-500">
                    Salles de bain
                  </span>
                  <span className="font-bold">{selectedProperty.baths}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <Square className="mx-auto mb-1 text-primary" size={20} />
                  <span className="block text-sm text-gray-500">Surface</span>
                  <span className="font-bold">{selectedProperty.area}</span>
                </div>
              </div>

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
                    <p className="text-gray-500 text-sm">
                      {selectedProperty.agent.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  className="bg-primary hover:bg-primary-dark flex-1"
                  onClick={() => setIsQuickViewOpen(false)}
                >
                  Voir les Détails
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => toggleFavorite(selectedProperty.id)}
                >
                  {favorites.includes(selectedProperty.id) ? (
                    <>
                      <Heart className="mr-2 h-4 w-4 text-red-500 fill-red-500" />{" "}
                      Sauvegardé
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
  );
};

export default FeaturedListings;
