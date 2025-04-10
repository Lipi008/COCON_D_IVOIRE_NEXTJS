"use client"

import { useAgents } from "@/hooks/use-api"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ApiStatusIndicator } from "@/components/ui/api-status-indicator"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, AlertCircle } from "lucide-react"

export default function AgentList() {
  const { data, isLoading, error, isUsingMock } = useAgents()

  return (
    <div>
      <div className="flex justify-end mb-4">
        <ApiStatusIndicator showLabel />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>Une erreur est survenue lors du chargement des agents. {error.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          // Squelettes de chargement
          Array.from({ length: 3 }).map((_, index) => (
            <Card key={`skeleton-${index}`} className="overflow-hidden">
              <CardContent className="p-0">
                <Skeleton className="h-64 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-1/3 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : data?.data && data.data.length > 0 ? (
          data.data.map((agent) => (
            <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-64 w-full bg-gray-100">
                  <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{agent.name}</h3>
                    <p className="text-sm opacity-90">{agent.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Phone size={16} className="mr-2 text-primary-DEFAULT" />
                      <span>{agent.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail size={16} className="mr-2 text-primary-DEFAULT" />
                      <span>{agent.email}</span>
                    </div>
                  </div>

                  {agent.bio && <p className="text-gray-600 mb-4 line-clamp-2">{agent.bio}</p>}

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {agent.socialMedia?.facebook && (
                        <a
                          href={agent.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary-DEFAULT hover:text-white transition-colors"
                        >
                          <Facebook size={16} />
                        </a>
                      )}
                      {agent.socialMedia?.twitter && (
                        <a
                          href={agent.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary-DEFAULT hover:text-white transition-colors"
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                      {agent.socialMedia?.instagram && (
                        <a
                          href={agent.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary-DEFAULT hover:text-white transition-colors"
                        >
                          <Instagram size={16} />
                        </a>
                      )}
                      {agent.socialMedia?.linkedin && (
                        <a
                          href={agent.socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary-DEFAULT hover:text-white transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>

                    <Link href={`/agents/${agent.id}`}>
                      <Button variant="outline" className="hover:bg-primary-DEFAULT hover:text-white">
                        Voir Profil
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-gray-400 mb-4">
              <AlertCircle className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-medium mb-2">Aucun agent trouvé</h3>
            <p className="text-gray-500">Aucun agent immobilier n'est disponible pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}
