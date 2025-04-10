"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "./ui/scroll-reveal"

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Acheteuse",
      image: "/placeholder.svg?height=100&width=100",
      comment:
        "J'ai trouvé la maison de mes rêves grâce à Quarter. Le processus a été simple et l'agent immobilier très professionnel. Je recommande vivement leurs services à tous ceux qui cherchent un nouveau chez-soi.",
      rating: 5,
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Vendeur",
      image: "/placeholder.svg?height=100&width=100",
      comment:
        "J'ai vendu ma propriété en un temps record et à un excellent prix. L'équipe de Quarter a été exceptionnelle du début à la fin. Leur expertise du marché local est inégalée.",
      rating: 5,
    },
    {
      id: 3,
      name: "Marie Leroy",
      role: "Locataire",
      image: "/placeholder.svg?height=100&width=100",
      comment:
        "Le processus de location était transparent et efficace. J'ai trouvé un appartement qui correspond parfaitement à mes attentes. L'équipe a été très réactive à toutes mes questions.",
      rating: 4,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="about-badge">Témoignages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Ce que disent nos clients</h2>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 text-primary opacity-20">
                        <Quote size={60} />
                      </div>
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < testimonials[currentIndex].rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 italic mb-6 text-lg">{testimonials[currentIndex].comment}</p>
                      <div>
                        <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                        <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevTestimonial}
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`rounded-full ${index === currentIndex ? "bg-primary text-white" : "bg-transparent"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Témoignage ${index + 1}`}
              >
                <span className="sr-only">Témoignage {index + 1}</span>
                <div className="h-2 w-2 rounded-full" />
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextTestimonial}
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
