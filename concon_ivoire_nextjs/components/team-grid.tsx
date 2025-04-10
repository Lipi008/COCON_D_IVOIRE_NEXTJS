"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "./ui/scroll-reveal"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

const TeamGrid = () => {
  const teamMembers = [
    {
      name: "Sophie Martin",
      role: "Directrice Générale",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Plus de 15 ans d'expérience dans l'immobilier de luxe. Spécialiste des propriétés d'exception.",
      contact: {
        email: "sophie.martin@quarter.com",
        phone: "+33 6 12 34 56 78",
      },
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
      bio: "Expert en négociation avec plus de 10 ans d'expérience. Spécialiste du marché parisien.",
      contact: {
        email: "jean.dupont@quarter.com",
        phone: "+33 6 23 45 67 89",
      },
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
      bio: "Spécialiste du marketing digital avec une passion pour l'immobilier et la communication visuelle.",
      contact: {
        email: "marie.leroy@quarter.com",
        phone: "+33 6 34 56 78 90",
      },
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Thomas Bernard",
      role: "Agent Immobilier Senior",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Spécialiste des propriétés de luxe sur la Côte d'Azur avec plus de 8 ans d'expérience.",
      contact: {
        email: "thomas.bernard@quarter.com",
        phone: "+33 6 45 67 89 01",
      },
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Julie Moreau",
      role: "Conseillère Immobilière",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Passionnée par l'accompagnement des clients dans leur recherche du bien idéal.",
      contact: {
        email: "julie.moreau@quarter.com",
        phone: "+33 6 56 78 90 12",
      },
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Pierre Dubois",
      role: "Expert Financier",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Conseiller en financement immobilier avec une expertise en prêts et investissements.",
      contact: {
        email: "pierre.dubois@quarter.com",
        phone: "+33 6 67 89 01 23",
      },
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Camille Petit",
      role: "Architecte d'Intérieur",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Créatrice d'espaces de vie uniques et fonctionnels adaptés aux besoins de chaque client.",
      contact: {
        email: "camille.petit@quarter.com",
        phone: "+33 6 78 90 12 34",
      },
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Lucas Martin",
      role: "Photographe Immobilier",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Spécialiste de la photographie immobilière et de la mise en valeur des propriétés.",
      contact: {
        email: "lucas.martin@quarter.com",
        phone: "+33 6 89 01 23 45",
      },
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
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
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        <span>{member.contact.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <span>{member.contact.phone}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamGrid
