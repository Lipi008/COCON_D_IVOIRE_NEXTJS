import { Bed, Bath, Square, Calendar } from "lucide-react"
import { ScrollReveal } from "./ui/scroll-reveal"

const PropertyDetails = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="mb-4">
                <span className="about-badge">À Propos</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Propriétés Vendues Aujourd'hui</h2>
              <p className="text-gray-600 mb-8">
                Houzez vous permet de concevoir des panneaux illimités et des formulaires personnalisés immobiliers pour
                capturer des prospects et garder une trace de toutes les informations
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-6 h-0.5 bg-primary mr-3"></span>
                  <span className="text-gray-600">Concerts de musique live à Luviana</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-0.5 bg-primary mr-3"></span>
                  <span className="text-gray-600">Notre tour en bateau de l'île secrète est juste pour vous</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-0.5 bg-primary mr-3"></span>
                  <span className="text-gray-600">Concerts de musique live à Luviana</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-0.5 bg-primary mr-3"></span>
                  <span className="text-gray-600">Concerts de musique live à Luviana</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center">
                  <Bed className="text-primary mr-2" size={20} />
                  <div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-gray-600 text-sm">Chambres</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="text-primary mr-2" size={20} />
                  <div>
                    <div className="text-2xl font-bold">2</div>
                    <div className="text-gray-600 text-sm">Salles de bain</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-primary mr-2" size={20} />
                  <div>
                    <div className="text-2xl font-bold">2</div>
                    <div className="text-gray-600 text-sm">Places de parking</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Square className="text-primary mr-2" size={20} />
                  <div>
                    <div className="text-2xl font-bold">3450</div>
                    <div className="text-gray-600 text-sm">mètres carrés</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Extérieur de la propriété"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Intérieur de la propriété"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Intérieur de la propriété"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-1 gap-4">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Intérieur moderne"
                className="w-full h-auto rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Design intérieur"
                  className="w-full h-auto rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Extérieur de la maison"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails
