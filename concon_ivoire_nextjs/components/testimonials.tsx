import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star } from "lucide-react"
import { ScrollReveal } from "./ui/scroll-reveal"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Acheteuse",
      image: "/placeholder.svg?height=100&width=100",
      comment:
        "J'ai trouvé la maison de mes rêves grâce à Quarter. Le processus a été simple et l'agent immobilier très professionnel.",
      rating: 5,
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Vendeur",
      image: "/placeholder.svg?height=100&width=100",
      comment:
        "J'ai vendu ma propriété en un temps record et à un excellent prix. Je recommande vivement leurs services.",
      rating: 5,
    },
    {
      id: 3,
      name: "Marie Leroy",
      role: "Locataire",
      image: "/placeholder.svg?height=100&width=100",
      comment:
        "Le processus de location était transparent et efficace. J'ai trouvé un appartement qui correspond parfaitement à mes attentes.",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="section-title">Ce que disent nos clients</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>

                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                      />
                    ))}
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

export default Testimonials
