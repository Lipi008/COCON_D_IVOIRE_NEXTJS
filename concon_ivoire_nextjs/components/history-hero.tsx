"use client"

import { motion } from "framer-motion"

const HistoryHero = () => {
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
            Notre Histoire
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            L'Évolution de Quarter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            Depuis notre création en 2005, nous avons connu une croissance remarquable pour devenir l'une des agences
            immobilières les plus respectées en France. Découvrez notre parcours et les étapes clés de notre
            développement.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default HistoryHero
