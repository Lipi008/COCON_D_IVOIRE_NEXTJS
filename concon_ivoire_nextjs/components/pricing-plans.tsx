"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "./ui/scroll-reveal"
import { Check, X } from "lucide-react"

const PricingPlans = () => {
  const plans = [
    {
      name: "Essentiel",
      price: "1.5%",
      description: "du prix de vente final",
      features: [
        "Évaluation professionnelle",
        "Photos professionnelles",
        "Annonce sur notre site",
        "Accompagnement basique",
        "Gestion des visites",
      ],
      notIncluded: ["Visite virtuelle 3D", "Plan d'étage", "Marketing premium", "Négociation avancée"],
      isPopular: false,
    },
    {
      name: "Premium",
      price: "2.5%",
      description: "du prix de vente final",
      features: [
        "Évaluation professionnelle",
        "Photos professionnelles",
        "Annonce sur notre site",
        "Accompagnement personnalisé",
        "Gestion des visites",
        "Visite virtuelle 3D",
        "Plan d'étage",
        "Marketing sur réseaux sociaux",
      ],
      notIncluded: ["Home staging virtuel", "Vidéo par drone"],
      isPopular: true,
    },
    {
      name: "Luxe",
      price: "3.5%",
      description: "du prix de vente final",
      features: [
        "Évaluation professionnelle",
        "Photos professionnelles",
        "Annonce sur notre site",
        "Accompagnement VIP",
        "Gestion des visites",
        "Visite virtuelle 3D",
        "Plan d'étage",
        "Marketing premium",
        "Négociation avancée",
        "Home staging virtuel",
        "Vidéo par drone",
      ],
      notIncluded: [],
      isPopular: false,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card
                className={`border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full ${
                  plan.isPopular ? "relative" : ""
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 uppercase">
                    Populaire
                  </div>
                )}
                <CardHeader className={`p-6 ${plan.isPopular ? "bg-primary text-white" : "bg-gray-50"}`}>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm ml-1">{plan.description}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-400">
                        <X className="h-5 w-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    className={`w-full ${
                      plan.isPopular ? "bg-primary hover:bg-primary-dark" : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    Choisir ce Plan
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 bg-light p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Vous avez des besoins spécifiques?</h3>
          <p className="text-gray-600 text-center mb-6">
            Contactez-nous pour discuter d'un forfait personnalisé adapté à votre situation unique.
          </p>
          <div className="flex justify-center">
            <Button className="bg-primary hover:bg-primary-dark">Demander un Devis Personnalisé</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
