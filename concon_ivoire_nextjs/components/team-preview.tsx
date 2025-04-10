"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "./ui/scroll-reveal"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const TeamPreview = () => {
  const teamMembers = [
    {
      name: "Sophie Martin",
      role: "Directrice Générale",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Jean Dupont",
      role: "Directeur des Ventes",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Marie Leroy",
      role: "Responsable Marketing",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="about-badge">Notre Équipe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Rencontrez Nos Experts</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Notre équipe de professionnels passionnés est dédiée à vous aider à trouver la propriété parfaite ou à
            vendre votre bien au meilleur prix.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="flex space-x-3">
                        <a
                          href={member.social.facebook}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          <Facebook size={16} />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          <Twitter size={16} />
                        </a>
                        <a
                          href={member.social.instagram}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          <Instagram size={16} />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          <Linkedin size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Link href="/about/team">
            <Button className="bg-primary hover:bg-primary-dark">Voir Toute l'Équipe</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TeamPreview
