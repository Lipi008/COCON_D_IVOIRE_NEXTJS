import { type NextRequest, NextResponse } from "next/server"
import {
  mockProperties,
  mockAgents,
  mockTestimonials,
  mockApartmentPlans,
  mockAmenities,
  mockStats,
  mockServices,
} from "@/lib/mock-data"

/**
 * Cette API de démonstration simule une API réelle pour tester le service API
 * Elle n'est utilisée que pour les démonstrations et les tests
 */

export async function GET(request: NextRequest) {
  // Simuler un délai de réseau aléatoire entre 200ms et 1000ms
  const delay = Math.floor(Math.random() * 800) + 200
  await new Promise((resolve) => setTimeout(resolve, delay))

  // Récupérer le chemin de l'URL
  const { pathname, searchParams } = new URL(request.url)
  const path = pathname.replace("/api/mock-api", "")

  // Simuler une erreur aléatoire dans 10% des cas
  if (Math.random() < 0.1 && !searchParams.has("noerror")) {
    return NextResponse.json({ success: false, message: "Erreur simulée du serveur" }, { status: 500 })
  }

  // Gérer les différentes routes
  if (path === "/health") {
    return NextResponse.json({ status: "ok", message: "API mock disponible" })
  }

  if (path.startsWith("/properties")) {
    const id = path.match(/\/properties\/(\d+)/)?.[1]

    if (id) {
      const property = mockProperties.find((p) => p.id.toString() === id)

      if (property) {
        return NextResponse.json({ success: true, data: property })
      } else {
        return NextResponse.json({ success: false, message: "Propriété non trouvée" }, { status: 404 })
      }
    }

    if (path === "/properties/featured") {
      return NextResponse.json({
        success: true,
        data: mockProperties.slice(0, 3),
      })
    }

    if (path === "/properties/recent") {
      return NextResponse.json({
        success: true,
        data: [...mockProperties].sort(() => Math.random() - 0.5).slice(0, 4),
      })
    }

    if (path === "/properties/popular") {
      return NextResponse.json({
        success: true,
        data: [...mockProperties].sort(() => Math.random() - 0.5).slice(0, 4),
      })
    }

    if (path.startsWith("/properties/search")) {
      const query = searchParams.get("q")?.toLowerCase() || ""
      const filteredProperties = mockProperties.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query),
      )

      return NextResponse.json({
        success: true,
        data: filteredProperties,
      })
    }

    // Gestion des filtres
    let filteredProperties = [...mockProperties]

    if (searchParams.has("status")) {
      const status = searchParams.get("status")
      if (status !== "all") {
        filteredProperties = filteredProperties.filter((p) => p.status.toLowerCase() === status?.toLowerCase())
      }
    }

    if (searchParams.has("location")) {
      const location = searchParams.get("location")
      filteredProperties = filteredProperties.filter((p) =>
        p.location.toLowerCase().includes(location?.toLowerCase() || ""),
      )
    }

    if (searchParams.has("beds")) {
      const beds = Number.parseInt(searchParams.get("beds") || "0")
      filteredProperties = filteredProperties.filter((p) => p.beds >= beds)
    }

    // Pagination
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedProperties = filteredProperties.slice(startIndex, endIndex)

    return NextResponse.json({
      success: true,
      data: paginatedProperties,
      pagination: {
        total: filteredProperties.length,
        page,
        limit,
        totalPages: Math.ceil(filteredProperties.length / limit),
      },
    })
  }

  if (path.startsWith("/agents")) {
    const id = path.match(/\/agents\/(\d+)/)?.[1]

    if (id) {
      const agent = mockAgents.find((a) => a.id.toString() === id)

      if (agent) {
        return NextResponse.json({ success: true, data: agent })
      } else {
        return NextResponse.json({ success: false, message: "Agent non trouvé" }, { status: 404 })
      }
    }

    if (path.match(/\/agents\/\d+\/properties/)) {
      const agentId = path.match(/\/agents\/(\d+)\/properties/)?.[1]
      const agentProperties = mockProperties.filter((p) => p.agent?.id.toString() === agentId)

      return NextResponse.json({
        success: true,
        data: agentProperties,
      })
    }

    return NextResponse.json({
      success: true,
      data: mockAgents,
    })
  }

  if (path === "/testimonials") {
    return NextResponse.json({
      success: true,
      data: mockTestimonials,
    })
  }

  if (path === "/apartment-plans") {
    return NextResponse.json({
      success: true,
      data: mockApartmentPlans,
    })
  }

  if (path === "/amenities") {
    return NextResponse.json({
      success: true,
      data: mockAmenities,
    })
  }

  if (path === "/stats") {
    return NextResponse.json({
      success: true,
      data: mockStats,
    })
  }

  if (path === "/services") {
    return NextResponse.json({
      success: true,
      data: mockServices,
    })
  }

  // Route par défaut si aucune correspondance
  return NextResponse.json({ success: false, message: "Endpoint non trouvé" }, { status: 404 })
}

export async function POST(request: NextRequest) {
  // Simuler un délai de réseau
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Pour les besoins de la démo, on renvoie simplement une réponse de succès
  return NextResponse.json({
    success: true,
    message: "Opération POST simulée avec succès",
  })
}
