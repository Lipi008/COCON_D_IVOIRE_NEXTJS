import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const HomePageSelector = () => {
  const homePages = [
    { id: 1, name: "Home 01", image: "/placeholder.svg?height=300&width=400" },
    { id: 2, name: "Home 02", image: "/placeholder.svg?height=300&width=400" },
    { id: 3, name: "Home 03", image: "/placeholder.svg?height=300&width=400" },
    { id: 4, name: "Home 04", image: "/placeholder.svg?height=300&width=400" },
    { id: 5, name: "Home 05", image: "/placeholder.svg?height=300&width=400" },
    { id: 6, name: "Home 06", image: "/placeholder.svg?height=300&width=400" },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-4">
          <span className="text-primary-DEFAULT font-medium">// Demo //</span>
        </div>
        <h2 className="section-title">Home Pages</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePages.map((page) => (
            <Card key={page.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image src={page.image || "/placeholder.svg"} alt={page.name} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{page.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePageSelector
