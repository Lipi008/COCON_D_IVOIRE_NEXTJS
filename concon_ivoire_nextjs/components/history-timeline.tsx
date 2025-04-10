"use client"

import { ScrollReveal } from "./ui/scroll-reveal"

const HistoryTimeline = () => {
  const timelineEvents = [
    {
      year: "2005",
      title: "Fondation de Quarter",
      description:
        "Quarter est fondée par Sophie Martin avec une vision claire : créer une agence immobilière centrée sur le client et offrant un service exceptionnel.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2008",
      title: "Expansion à Lyon",
      description:
        "Après le succès de notre première agence à Paris, nous ouvrons un deuxième bureau à Lyon pour servir le marché en pleine croissance de la région Rhône-Alpes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2012",
      title: "Lancement de Quarter Luxe",
      description:
        "Nous créons une division spécialisée dans les propriétés de luxe pour répondre aux besoins spécifiques de notre clientèle haut de gamme.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2015",
      title: "Expansion sur la Côte d'Azur",
      description:
        "Quarter s'étend à la Côte d'Azur avec l'ouverture de bureaux à Nice et Cannes, renforçant notre présence dans le marché des propriétés de luxe.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2018",
      title: "Transformation Digitale",
      description:
        "Nous investissons massivement dans la technologie pour offrir une expérience client améliorée, avec des visites virtuelles et une plateforme en ligne innovante.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2020",
      title: "Lancement de Quarter International",
      description:
        "Quarter étend ses services à l'international, offrant des opportunités d'investissement immobilier dans les principales villes européennes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2023",
      title: "Aujourd'hui",
      description:
        "Quarter continue de croître et d'innover, avec plus de 200 agents dans 10 villes et un engagement inébranlable envers l'excellence et la satisfaction client.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 p-4">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#fff5f3] rounded-lg opacity-50"></div>
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-auto rounded-lg shadow-lg relative z-10"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-4 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 md:left-auto md:right-0 md:translate-x-1/2 -translate-x-1/2 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm z-10 hidden md:flex">
                    {index + 1}
                  </div>
                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <div className="text-primary font-bold text-2xl mb-2">{event.year}</div>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HistoryTimeline
