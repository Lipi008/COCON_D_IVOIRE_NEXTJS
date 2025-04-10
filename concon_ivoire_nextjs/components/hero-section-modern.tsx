"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import PropertySearch from "./property-search"

const HeroSection = () => {
  const [searchParams, setSearchParams] = useState({
    location: "Tous les lieux",
    status: "Tous les statuts",
    type: "Tous les types",
  })

  return (
    <div className="relative bg-light py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-4">
              <motion.span
                className="text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Design Moderne
              </motion.span>
            </div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Découvrez Votre Espace de Vie Idéal
            </motion.h1>
            <motion.p
              className="text-gray-600 mb-8 border-l-4 border-primary pl-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Notre sélection de propriétés modernes combine esthétique contemporaine et fonctionnalité pour un style de
              vie exceptionnel.
            </motion.p>
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded">
                  Explorer les Propriétés
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-lg"></div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Modern house"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <PropertySearch compact={true} />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
