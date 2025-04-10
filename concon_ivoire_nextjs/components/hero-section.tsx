"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Modal } from "./ui/modal";
import { VideoPlayer } from "./ui/video-player";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({
    location: "Tous les lieux",
    status: "Tous les statuts",
    type: "Tous les types",
  });

  const handleSearchChange = (field: string, value: string) => {
    setSearchParams((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    console.log("Searching with params:", searchParams);
    // Here you would typically navigate to search results page
  };

  return (
    <div className="relative bg-light py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <motion.span
                className="text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Agence Immobilière
              </motion.span>
            </div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Votre Nouveau Chez-Vous Commence Ici
            </motion.h1>
            <motion.p
              className="text-gray-600 mb-8 border-l-4 border-gray-300 pl-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Un logement pensé pour vous, un foyer où votre famille pourra
              s’épanouir pleinement..
            </motion.p>
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded">
                  Faire une Demande
                </Button>
              </motion.div>
              {/* <motion.div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md ml-4 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onClick={() => setIsVideoModalOpen(true)}
              >
                <div className="text-primary">
                  <Play className="h-6 w-6" />
                </div>
              </motion.div> */}
            </div>
          </motion.div>
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/images/modern-house.jpg"
              alt="Modern house"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-12 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Choisir la Zone
              </label>
              <div className="relative">
                <select
                  className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchParams.location}
                  onChange={(e) =>
                    handleSearchChange("location", e.target.value)
                  }
                >
                  <option>Tous les lieux</option>
                  <option>Paris</option>
                  <option>Lyon</option>
                  <option>Marseille</option>
                  <option>Bordeaux</option>
                  <option>Nice</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Statut du Bien
              </label>
              <div className="relative">
                <select
                  className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchParams.status}
                  onChange={(e) => handleSearchChange("status", e.target.value)}
                >
                  <option>Tous les statuts</option>
                  <option>À vendre</option>
                  <option>À louer</option>
                  <option>Vendu</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Type de Bien
              </label>
              <div className="relative">
                <select
                  className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchParams.type}
                  onChange={(e) => handleSearchChange("type", e.target.value)}
                >
                  <option>Tous les types</option>
                  <option>Appartement</option>
                  <option>Maison</option>
                  <option>Villa</option>
                  <option>Bureau</option>
                  <option>Commercial</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded flex items-center"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-4 w-4" /> RECHERCHER
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {/* <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        size="xl"
      >
        <VideoPlayer
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          poster="/placeholder.svg?height=600&width=600"
          controls={true}
          autoPlay={true}
        />
      </Modal> */}
    </div>
  );
};

export default HeroSection;
