import { Card, CardContent } from "@/components/ui/card"
import { Home, Key, Search, Users } from "lucide-react"
import { ScrollReveal } from "./ui/scroll-reveal"

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Acheter une propriété",
      description: "Trouvez la maison de vos rêves parmi notre large sélection de propriétés.",
      icon: <Home className="h-12 w-12 text-primary-DEFAULT" />,
    },
    {
      id: 2,
      title: "Vendre une propriété",
      description: "Vendez votre propriété rapidement et au meilleur prix avec notre expertise.",
      icon: <Key className="h-12 w-12 text-primary-DEFAULT" />,
    },
    {
      id: 3,
      title: "Louer une propriété",
      description: "Découvrez des options de location adaptées à vos besoins et à votre budget.",
      icon: <Search className="h-12 w-12 text-primary-DEFAULT" />,
    },
    {
      id: 4,
      title: "Agents immobiliers",
      description: "Nos agents expérimentés vous accompagnent dans toutes vos démarches immobilières.",
      icon: <Users className="h-12 w-12 text-primary-DEFAULT" />,
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="section-title">Nos Services</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <Card
                key={service.id}
                className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
