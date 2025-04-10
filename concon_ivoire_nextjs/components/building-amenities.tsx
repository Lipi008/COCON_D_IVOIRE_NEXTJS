"use client"

import { ArrowRight, Car, Waves, Shield, Stethoscope, BookOpen, Bed, Home, Gamepad2 } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "./ui/scroll-reveal"

const BuildingAmenities = () => {
  const amenities = [
    {
      id: 1,
      title: "Espace de Stationnement",
      icon: <Car className="text-primary" />,
      description: "Espaces de stationnement sécurisés disponibles pour tous les résidents et leurs invités.",
    },
    {
      id: 2,
      title: "Piscine",
      icon: <Waves className="text-primary" />,
      description: "Profitez de notre piscine luxueuse avec espace détente et jacuzzi.",
    },
    {
      id: 3,
      title: "Sécurité Privée",
      icon: <Shield className="text-primary" />,
      description: "Personnel de sécurité 24/7 et systèmes de surveillance avancés.",
    },
    {
      id: 4,
      title: "Centre Médical",
      icon: <Stethoscope className="text-primary" />,
      description: "Installations médicales sur place pour les soins d'urgence et de routine.",
    },
    {
      id: 5,
      title: "Espace Bibliothèque",
      icon: <BookOpen className="text-primary" />,
      description: "Espaces de lecture tranquilles avec une vaste collection de livres.",
    },
    {
      id: 6,
      title: "Lits King Size",
      icon: <Bed className="text-primary" />,
      description: "Lits king-size confortables dans toutes les chambres principales.",
    },
    {
      id: 7,
      title: "Maisons Intelligentes",
      icon: <Home className="text-primary" />,
      description: "Technologie de maison intelligente intégrée pour plus de confort et d'efficacité.",
    },
    {
      id: 8,
      title: "Aire de Jeux pour Enfants",
      icon: <Gamepad2 className="text-primary" />,
      description: "Aires de jeux dédiées pour les enfants de tous âges.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="about-badge">Nos Équipements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Équipements du Bâtiment</h2>
        </ScrollReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {amenities.map((amenity) => (
            <motion.div key={amenity.id} variants={item} className="amenity-card group">
              <div className="amenity-icon group-hover:bg-primary transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">{amenity.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {amenity.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{amenity.description}</p>
              <div className="mt-auto">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-gray-400 group-hover:text-primary transition-colors duration-300"
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BuildingAmenities
