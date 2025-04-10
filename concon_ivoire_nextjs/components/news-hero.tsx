"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const NewsHero = ({ listView = false }: { listView?: boolean }) => {
  return (
    <div className="relative bg-light py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="about-badge"
          >
            Actualités Immobilières
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            {listView ? "Liste des Actualités" : "Actualités et Tendances"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            Découvrez les dernières nouvelles, tendances et conseils du marché immobilier pour rester informé et prendre
            les meilleures décisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex max-w-md mx-auto"
          >
            <Input
              type="text"
              placeholder="Rechercher des articles..."
              className="rounded-r-none focus-visible:ring-primary"
            />
            <Button className="rounded-l-none bg-primary hover:bg-primary-dark">
              <Search className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NewsHero
