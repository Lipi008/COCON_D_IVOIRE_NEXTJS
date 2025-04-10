"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface ImageGalleryProps {
  images: string[]
  alt?: string
}

export const ImageGallery = ({ images, alt = "Image de galerie" }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
    if (e.key === "Escape") setIsFullscreen(false)
  }

  return (
    <div className="relative" onKeyDown={handleKeyDown} tabIndex={0}>
      <div
        className="relative overflow-hidden rounded-lg cursor-pointer"
        style={{ height: "400px" }}
        onClick={toggleFullscreen}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${alt} ${currentIndex + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative h-20 w-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden transition-all ${
              index === currentIndex ? "ring-2 ring-primary" : "opacity-70"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        onClick={(e) => {
          e.stopPropagation()
          prevImage()
        }}
        aria-label="Image précédente"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        onClick={(e) => {
          e.stopPropagation()
          nextImage()
        }}
        aria-label="Image suivante"
      >
        <ChevronRight size={20} />
      </button>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {isFullscreen && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full"
            >
              <button
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full"
                onClick={toggleFullscreen}
                aria-label="Fermer le plein écran"
              >
                <X size={24} />
              </button>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt={`${alt} ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              <button
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-3"
                onClick={prevImage}
                aria-label="Image précédente"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-3"
                onClick={nextImage}
                aria-label="Image suivante"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
