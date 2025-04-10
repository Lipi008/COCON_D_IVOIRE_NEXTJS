"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ui/scroll-reveal";
import { Modal } from "./ui/modal";
import { ZoomIn, ZoomOut } from "lucide-react";

const ApartmentPlans = () => {
  const [activeTab, setActiveTab] = useState("deluxe");
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const plans = [
    {
      id: "connaissance_locale",
      title: "Connaissance locale",
      description:
        "Implantés en Côte d’Ivoire, nous maîtrisons les dynamiques du marché local.Cette proximité nous permet de vous proposer les meilleures opportunités adaptées à votre secteur géographique.",
      details: [
        { label: "Zone couverte", value: "Abidjan / Bassam / Yakro" },
        { label: "Partenaire locaux", value: "+50" },
        { label: "Etudes de Terrain", value: "Incluse" },
        { label: "Offres ciblée", value: "Selon profil" },
        { label: "Analyse marché", value: "À jour" },
      ],
      image: "/placeholder.svg?height=500&width=600",
    },
    {
      id: "Equipe_dédiée",
      title: "Equipe dédiée",
      description:
        "Nos experts immobiliers vous accompagnent à chaque étape de votre projet. Bénéficiez de conseils personnalisés, d’un accompagnement humain et d’un suivi rigoureux pour une expérience sans stress.",
      details: [
        { label: "Total Agents", value: "+5" },
        { label: "Disponibilité", value: "7j/7" },
        { label: "Réactivité", value: "Sous 24h" },
        { label: "Accompagnement", value: "Personnalisé" },
        { label: "Langue", value: "Français/Anglais" },
      ],
      image: "/placeholder.svg?height=500&width=600",
    },
    {
      id: " Ethique_Transparence",
      title: " Ethique & Transparence",
      description:
        "La confiance est au cœur de notre approche. Tous nos échanges, contrats et engagements sont basés sur la transparence, l’intégrité et le respect de nos clients.",
      details: [
        { label: "Contrats", value: "Clair & détaillés" },
        { label: "Suivi", value: "100 %" },
        { label: "Avis clients", value: "100 % transparents" },
        { label: "Valeurs", value: "Ethique" },
        { label: "Engagement", value: "Zero suprise" },
      ],
      image: "/placeholder.svg?height=500&width=600",
    },
    {
      id: "Service_complet",
      title: "Service complet",
      description:
        "Nous vous proposons un service clé en main : prospection, négociation, réhabilitation, gestion locative, et même accompagnement juridique. Vous êtes pris en charge de A à Z.",
      details: [
        { label: "Zone couverte", value: "Abidjan / Bassam / Yakro" },
        { label: "Partenaire locaux", value: "+50" },
        { label: "Etudes de Terrain", value: "Incluse" },
        { label: "Offres ciblée", value: "Selon profil" },
        { label: "Analyse marché", value: "À jour" },
      ],
      image: "/placeholder.svg?height=500&width=600",
    },
    {
      id: " Innovation_continue",
      description:
        "Implantés en Côte d’Ivoire, nous maîtrisons les dynamiques du marché local.Cette proximité nous permet de vous proposer les meilleures opportunités adaptées à votre secteur géographique.",
      details: [
        { label: "Zone couverte", value: "Abidjan / Bassam / Yakro" },
        { label: "Partenaire locaux", value: "+50" },
        { label: "Etudes de Terrain", value: "Incluse" },
        { label: "Offres ciblée", value: "Selon profil" },
        { label: "Analyse marché", value: "À jour" },
      ],
      image: "/placeholder.svg?height=500&width=600",
    },
  ];

  const activePlan = plans.find((plan) => plan.id === activeTab) || plans[1];

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  // Reset zoom level when modal closes
  useEffect(() => {
    if (!isZoomModalOpen) {
      setZoomLevel(1);
    }
  }, [isZoomModalOpen]);

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pourquoi nous choisirs
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center mb-12 space-x-4">
          {plans.map((plan) => (
            <button
              key={plan.id}
              className={`px-4 py-2 font-medium transition-colors duration-300 relative ${
                activeTab === plan.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
              onClick={() => setActiveTab(plan.id)}
            >
              {plan.title}
              {activeTab === plan.id && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <motion.div
              className="bg-primary text-white p-12 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-6">{activePlan.title}</h3>

              <p className="mb-8">{activePlan.description}</p>

              <div className="space-y-4">
                {activePlan.details.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center group hover:bg-white/10 p-2 rounded-md transition-colors duration-300"
                  >
                    <span>{item.label}</span>
                    <div className="flex-1 mx-4 border-b border-dashed border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white p-4 rounded-lg shadow-md relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePlan.id}
                  src={activePlan.image}
                  alt={`${activePlan.title} floor plan`}
                  className="w-full h-full object-contain cursor-zoom-in"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setIsZoomModalOpen(true)}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  className="bg-white rounded-full p-3 transform hover:scale-110 transition-transform duration-300"
                  onClick={() => setIsZoomModalOpen(true)}
                >
                  <ZoomIn className="h-6 w-6 text-primary" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Zoom Modal */}
      <Modal
        isOpen={isZoomModalOpen}
        onClose={() => setIsZoomModalOpen(false)}
        size="full"
      >
        <div className="relative h-full flex items-center justify-center">
          <div
            className="overflow-auto max-h-[80vh] max-w-[90vw]"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: "center center",
            }}
          >
            <img
              src={activePlan.image || "/placeholder.svg"}
              alt={`${activePlan.title} floor plan`}
              className="max-w-full h-auto"
            />
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.5}
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <button
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3}
            >
              <ZoomIn className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-md shadow-md">
            {Math.round(zoomLevel * 100)}%
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ApartmentPlans;
