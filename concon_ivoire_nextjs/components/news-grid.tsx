"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "./ui/scroll-reveal"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const NewsGrid = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Les tendances du marché immobilier en 2023",
      excerpt:
        "Découvrez les principales tendances qui façonnent le marché immobilier cette année et comment elles pourraient affecter vos décisions d'achat ou de vente.",
      image: "/placeholder.svg?height=300&width=500",
      date: "15 juin 2023",
      author: "Sophie Martin",
      category: "Tendances",
    },
    {
      id: 2,
      title: "Comment préparer sa maison pour une vente rapide",
      excerpt:
        "Apprenez les astuces des professionnels pour mettre en valeur votre propriété et maximiser son potentiel de vente sur un marché compétitif.",
      image: "/placeholder.svg?height=300&width=500",
      date: "2 mai 2023",
      author: "Jean Dupont",
      category: "Conseils",
    },
    {
      id: 3,
      title: "Investir dans l'immobilier locatif : guide pour débutants",
      excerpt:
        "Tout ce que vous devez savoir avant de vous lancer dans l'investissement locatif, des aspects financiers aux considérations juridiques.",
      image: "/placeholder.svg?height=300&width=500",
      date: "18 avril 2023",
      author: "Marie Leroy",
      category: "Investissement",
    },
    {
      id: 4,
      title: "Les quartiers émergents à surveiller en 2023",
      excerpt:
        "Découvrez les zones urbaines en pleine transformation qui offrent d'excellentes opportunités d'investissement et un cadre de vie attractif.",
      image: "/placeholder.svg?height=300&width=500",
      date: "5 mars 2023",
      author: "Thomas Bernard",
      category: "Marchés",
    },
    {
      id: 5,
      title: "L'impact de la transition écologique sur l'immobilier",
      excerpt:
        "Comment les préoccupations environnementales transforment le secteur immobilier et créent de nouvelles opportunités pour les propriétaires et investisseurs.",
      image: "/placeholder.svg?height=300&width=500",
      date: "20 février 2023",
      author: "Julie Moreau",
      category: "Développement Durable",
    },
    {
      id: 6,
      title: "Financement immobilier : les options méconnues",
      excerpt:
        "Au-delà des prêts traditionnels, découvrez des solutions de financement alternatives qui pourraient vous aider à concrétiser votre projet immobilier.",
      image: "/placeholder.svg?height=300&width=500",
      date: "10 janvier 2023",
      author: "Pierre Dubois",
      category: "Financement",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.1}>
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{article.date}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-primary hover:underline font-medium"
                    >
                      Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-primary hover:bg-primary-dark">Voir Plus d'Articles</Button>
        </div>
      </div>
    </section>
  )
}

export default NewsGrid
