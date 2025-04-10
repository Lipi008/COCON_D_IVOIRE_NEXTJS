"use client"

import { ScrollReveal } from "./ui/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, Lightbulb } from "lucide-react"

const AboutValues = () => {
  const values = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Passion",
      description:
        "Nous sommes passionnés par l'immobilier et nous nous engageons à fournir un service exceptionnel à chaque client.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Intégrité",
      description:
        "Nous agissons avec honnêteté et transparence dans toutes nos interactions, en plaçant toujours les intérêts de nos clients en premier.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Collaboration",
      description:
        "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et leur offrir des solutions personnalisées.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description:
        "Nous adoptons les dernières technologies et approches pour offrir une expérience immobilière moderne et efficace.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="about-badge">Nos Valeurs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Les Principes Qui Nous Guident</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#fff5f3] p-4 rounded-full mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutValues
