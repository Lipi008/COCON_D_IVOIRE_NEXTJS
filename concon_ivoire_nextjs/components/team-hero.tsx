"use client"

import { motion } from "framer-motion"

const TeamHero = () => {
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
            Notre Équipe
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Des Experts Passionnés à Votre Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            Notre équipe de professionnels dévoués combine expertise locale, connaissance approfondie du marché et
            service personnalisé pour vous offrir une expérience immobilière exceptionnelle.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default TeamHero
