import type {
  Property,
  Agent,
  Testimonial,
  ApartmentPlan,
  Amenity,
  Stat,
  Service,
  ApiResponse,
  PropertyFilters,
} from "./types/api-types"
import {
  mockProperties,
  mockAgents,
  mockTestimonials,
  mockApartmentPlans,
  mockAmenities,
  mockStats,
  mockServices,
} from "./mock-data"

// Configuration de l'API
const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.quarter-realestate.com/api",
  TIMEOUT: 10000, // 10 secondes
  USE_MOCKS: process.env.NEXT_PUBLIC_USE_MOCKS === "true",
}

/**
 * Service pour consommer l'API de Quarter Real Estate
 */
class ApiService {
  private apiUrl: string
  private useMocks: boolean
  private apiAvailable = true

  constructor() {
    this.apiUrl = API_CONFIG.BASE_URL
    this.useMocks = API_CONFIG.USE_MOCKS
  }

  /**
   * Méthode générique pour faire des requêtes à l'API
   */
  private async fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    // Si on est configuré pour utiliser les mocks ou si l'API n'est pas disponible
    if (this.useMocks || !this.apiAvailable) {
      return this.getMockData<T>(endpoint)
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT)

    try {
      const response = await fetch(`${this.apiUrl}${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        // Si l'API retourne une erreur, on bascule sur les mocks
        console.warn(`API error: ${response.status} ${response.statusText}`)
        this.apiAvailable = false
        return this.getMockData<T>(endpoint)
      }

      const data = await response.json()
      return data
    } catch (error) {
      clearTimeout(timeoutId)
      console.error("API fetch error:", error)

      // En cas d'erreur, on bascule sur les mocks
      this.apiAvailable = false
      return this.getMockData<T>(endpoint)
    }
  }

  /**
   * Récupère les données mockées en fonction de l'endpoint
   */
  private getMockData<T>(endpoint: string): Promise<ApiResponse<T>> {
    console.info(`Using mock data for endpoint: ${endpoint}`)

    // Analyse de l'endpoint pour déterminer quelles données mockées retourner
    if (endpoint.startsWith("/properties")) {
      const id = endpoint.match(/\/properties\/(\d+)/)?.[1]
      if (id) {
        const property = mockProperties.find((p) => p.id.toString() === id)
        return Promise.resolve({
          success: true,
          data: property as unknown as T,
        })
      }

      // Gestion des filtres si présents dans l'URL
      const url = new URL(`http://localhost${endpoint}`)
      const filters: PropertyFilters = {}

      for (const [key, value] of url.searchParams.entries()) {
        filters[key as keyof PropertyFilters] = value
      }

      let filteredProperties = [...mockProperties]

      // Appliquer les filtres
      if (filters.status) {
        filteredProperties = filteredProperties.filter((p) => p.status.toLowerCase() === filters.status?.toLowerCase())
      }

      if (filters.location) {
        filteredProperties = filteredProperties.filter((p) =>
          p.location.toLowerCase().includes(filters.location?.toLowerCase() || ""),
        )
      }

      if (filters.beds) {
        filteredProperties = filteredProperties.filter((p) => p.beds >= Number(filters.beds))
      }

      // Pagination
      const page = Number(filters.page) || 1
      const limit = Number(filters.limit) || 10
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const paginatedProperties = filteredProperties.slice(startIndex, endIndex)

      return Promise.resolve({
        success: true,
        data: paginatedProperties as unknown as T,
        pagination: {
          total: filteredProperties.length,
          page,
          limit,
          totalPages: Math.ceil(filteredProperties.length / limit),
        },
      })
    }

    if (endpoint.startsWith("/agents")) {
      const id = endpoint.match(/\/agents\/(\d+)/)?.[1]
      if (id) {
        const agent = mockAgents.find((a) => a.id.toString() === id)
        return Promise.resolve({
          success: true,
          data: agent as unknown as T,
        })
      }
      return Promise.resolve({
        success: true,
        data: mockAgents as unknown as T,
      })
    }

    if (endpoint.startsWith("/testimonials")) {
      return Promise.resolve({
        success: true,
        data: mockTestimonials as unknown as T,
      })
    }

    if (endpoint.startsWith("/apartment-plans")) {
      return Promise.resolve({
        success: true,
        data: mockApartmentPlans as unknown as T,
      })
    }

    if (endpoint.startsWith("/amenities")) {
      return Promise.resolve({
        success: true,
        data: mockAmenities as unknown as T,
      })
    }

    if (endpoint.startsWith("/stats")) {
      return Promise.resolve({
        success: true,
        data: mockStats as unknown as T,
      })
    }

    if (endpoint.startsWith("/services")) {
      return Promise.resolve({
        success: true,
        data: mockServices as unknown as T,
      })
    }

    // Si l'endpoint n'est pas reconnu, on retourne une erreur
    return Promise.resolve({
      success: false,
      data: [] as unknown as T,
      message: "Endpoint not found in mock data",
    })
  }

  /**
   * Vérifie si l'API est disponible
   */
  public async checkApiAvailability(): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiUrl}/health`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(5000), // 5 secondes max
      })

      this.apiAvailable = response.ok
      return this.apiAvailable
    } catch (error) {
      console.warn("API health check failed:", error)
      this.apiAvailable = false
      return false
    }
  }

  /**
   * Récupère toutes les propriétés avec filtres optionnels
   */
  public async getProperties(filters?: PropertyFilters): Promise<ApiResponse<Property[]>> {
    let endpoint = "/properties"

    if (filters) {
      const queryParams = new URLSearchParams()

      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, value.toString())
        }
      })

      if (queryParams.toString()) {
        endpoint += `?${queryParams.toString()}`
      }
    }

    return this.fetchApi<Property[]>(endpoint)
  }

  /**
   * Récupère une propriété par son ID
   */
  public async getPropertyById(id: string | number): Promise<ApiResponse<Property>> {
    return this.fetchApi<Property>(`/properties/${id}`)
  }

  /**
   * Récupère tous les agents
   */
  public async getAgents(): Promise<ApiResponse<Agent[]>> {
    return this.fetchApi<Agent[]>("/agents")
  }

  /**
   * Récupère un agent par son ID
   */
  public async getAgentById(id: string | number): Promise<ApiResponse<Agent>> {
    return this.fetchApi<Agent>(`/agents/${id}`)
  }

  /**
   * Récupère les propriétés gérées par un agent
   */
  public async getAgentProperties(agentId: string | number): Promise<ApiResponse<Property[]>> {
    return this.fetchApi<Property[]>(`/agents/${agentId}/properties`)
  }

  /**
   * Récupère tous les témoignages
   */
  public async getTestimonials(): Promise<ApiResponse<Testimonial[]>> {
    return this.fetchApi<Testimonial[]>("/testimonials")
  }

  /**
   * Récupère tous les plans d'appartements
   */
  public async getApartmentPlans(): Promise<ApiResponse<ApartmentPlan[]>> {
    return this.fetchApi<ApartmentPlan[]>("/apartment-plans")
  }

  /**
   * Récupère tous les équipements
   */
  public async getAmenities(): Promise<ApiResponse<Amenity[]>> {
    return this.fetchApi<Amenity[]>("/amenities")
  }

  /**
   * Récupère toutes les statistiques
   */
  public async getStats(): Promise<ApiResponse<Stat[]>> {
    return this.fetchApi<Stat[]>("/stats")
  }

  /**
   * Récupère tous les services
   */
  public async getServices(): Promise<ApiResponse<Service[]>> {
    return this.fetchApi<Service[]>("/services")
  }

  /**
   * Recherche de propriétés
   */
  public async searchProperties(query: string): Promise<ApiResponse<Property[]>> {
    return this.fetchApi<Property[]>(`/properties/search?q=${encodeURIComponent(query)}`)
  }

  /**
   * Récupère les propriétés similaires à une propriété donnée
   */
  public async getSimilarProperties(propertyId: string | number): Promise<ApiResponse<Property[]>> {
    return this.fetchApi<Property[]>(`/properties/${propertyId}/similar`)
  }

  /**
   * Réc  {
    return this.fetchApi<Property[]>(`/properties/${propertyId}/similar`);
  }

  /**
   * Récupère les propriétés en vedette
   */
  public async getFeaturedProperties(): Promise<ApiResponse<Property[]>> {
    return this.fetchApi<Property[]>("/properties/featured")
  }

  /**
   * Récupère les propriétés récemment ajoutées
   */
  public async getRecentProperties(): Promise<ApiResponse<Property[]>> {
    return this.fetchApi<Property[]>("/properties/recent")
  }

  /**
   * Récupère les propriétés les plus populaires
   */
  public async getPopularProperties(): Promise<ApiResponse<Property[]>> {
    return this.fetchApi<Property[]>("/properties/popular")
  }
}

// Exporter une instance singleton du service
export const apiService = new ApiService()
