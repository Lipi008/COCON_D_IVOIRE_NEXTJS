// Types pour les propriétés
export interface Property {
  id: string | number
  title: string
  description: string
  price: string
  period?: string // "/Month" pour les locations
  location: string
  images: string[]
  beds: number
  baths: number
  area: string
  status: "À VENDRE" | "À LOUER" | "VENDU"
  yearBuilt?: number
  garage?: number
  features?: string[]
  agent?: Agent
}

// Types pour les agents immobiliers
export interface Agent {
  id: string | number
  name: string
  email: string
  phone: string
  image: string
  role?: string
  bio?: string
  properties?: number // Nombre de propriétés gérées
  experience?: number // Années d'expérience
  specialization?: string[]
  socialMedia?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

// Types pour les témoignages
export interface Testimonial {
  id: string | number
  name: string
  role: string
  image: string
  comment: string
  rating: number
}

// Types pour les plans d'appartements
export interface ApartmentPlan {
  id: string
  title: string
  area: string
  bedroom: string
  bathroom: string
  lounge: string
  balcony: string
  image: string
}

// Types pour les équipements
export interface Amenity {
  id: string | number
  title: string
  icon: string // Nom de l'icône Lucide
  description: string
}

// Types pour les statistiques
export interface Stat {
  id: string | number
  value: number
  suffix: string
  label: string
  icon: string // Nom de l'icône ou SVG path
}

// Types pour les services
export interface Service {
  id: string | number
  title: string
  description: string
  icon: string // Nom de l'icône Lucide
}

// Types pour les réponses API
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  pagination?: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

// Types pour les paramètres de filtrage
export interface PropertyFilters {
  status?: string
  type?: string
  location?: string
  minPrice?: number
  maxPrice?: number
  beds?: number
  baths?: number
  minArea?: number
  maxArea?: number
  features?: string[]
  page?: number
  limit?: number
  sort?: string
}
