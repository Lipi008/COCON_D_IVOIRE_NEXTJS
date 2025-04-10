import type { Property, Agent, Testimonial, ApartmentPlan, Amenity, Stat, Service } from "./types/api-types"

// Données mockées pour les propriétés
export const mockProperties: Property[] = [
  {
    id: 1,
    title: "Appartement de luxe",
    description:
      "Belle maison familiale spacieuse au cœur de Westbury. Récemment rénovée avec nouveaux parquets, nouvelle cuisine, nouvelle salle de bain, nouveau toit et nouvelles fenêtres.",
    location: "Paris, France",
    price: "450,000 €",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    beds: 3,
    baths: 2,
    area: "120 m²",
    status: "À VENDRE",
    yearBuilt: 2018,
    garage: 1,
    features: ["Balcon", "Ascenseur", "Sécurité 24/7", "Parking", "Vue dégagée"],
    agent: {
      id: 1,
      name: "Sophie Martin",
      email: "sophie.martin@quarter.com",
      phone: "+33 6 12 34 56 78",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 2,
    title: "Villa avec piscine",
    description:
      "Magnifique villa avec piscine et jardin paysager. Parfaite pour une famille à la recherche d'espace et de tranquillité.",
    location: "Nice, France",
    price: "850,000 €",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    beds: 5,
    baths: 3,
    area: "250 m²",
    status: "À VENDRE",
    yearBuilt: 2015,
    garage: 2,
    features: ["Piscine", "Jardin", "Terrasse", "Cuisine équipée", "Climatisation"],
    agent: {
      id: 2,
      name: "Jean Dupont",
      email: "jean.dupont@quarter.com",
      phone: "+33 6 98 76 54 32",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 3,
    title: "Studio moderne",
    description:
      "Studio moderne et lumineux, idéalement situé près des transports et commerces. Parfait pour un étudiant ou un jeune professionnel.",
    location: "Lyon, France",
    price: "1,200 €",
    period: "/mois",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    beds: 1,
    baths: 1,
    area: "45 m²",
    status: "À LOUER",
    yearBuilt: 2020,
    features: ["Meublé", "Internet haut débit", "Buanderie", "Proche transports"],
    agent: {
      id: 3,
      name: "Marie Leroy",
      email: "marie.leroy@quarter.com",
      phone: "+33 6 23 45 67 89",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 4,
    title: "Maison de campagne",
    description:
      "Charmante maison de campagne avec grand jardin et dépendances. Idéale pour les amoureux de la nature et du calme.",
    location: "Bordeaux, France",
    price: "320,000 €",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    beds: 4,
    baths: 2,
    area: "180 m²",
    status: "À VENDRE",
    yearBuilt: 1995,
    garage: 1,
    features: ["Jardin", "Cheminée", "Cave à vin", "Dépendances", "Terrain 2000m²"],
    agent: {
      id: 1,
      name: "Sophie Martin",
      email: "sophie.martin@quarter.com",
      phone: "+33 6 12 34 56 78",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 5,
    title: "Loft industriel",
    description:
      "Superbe loft industriel avec de grands volumes et beaucoup de caractère. Idéal pour les amateurs d'architecture contemporaine.",
    location: "Marseille, France",
    price: "1,800 €",
    period: "/mois",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    beds: 2,
    baths: 2,
    area: "110 m²",
    status: "À LOUER",
    yearBuilt: 2010,
    features: ["Hauteur sous plafond", "Verrière", "Cuisine ouverte", "Parking", "Sécurisé"],
    agent: {
      id: 2,
      name: "Jean Dupont",
      email: "jean.dupont@quarter.com",
      phone: "+33 6 98 76 54 32",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 6,
    title: "Penthouse vue mer",
    description:
      "Magnifique penthouse avec vue panoramique sur la mer. Prestations haut de gamme et terrasse spacieuse.",
    location: "Cannes, France",
    price: "1,200,000 €",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    beds: 4,
    baths: 3,
    area: "200 m²",
    status: "À VENDRE",
    yearBuilt: 2019,
    garage: 2,
    features: ["Vue mer", "Terrasse", "Jacuzzi", "Domotique", "Sécurité 24/7"],
    agent: {
      id: 3,
      name: "Marie Leroy",
      email: "marie.leroy@quarter.com",
      phone: "+33 6 23 45 67 89",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
]

// Données mockées pour les agents
export const mockAgents: Agent[] = [
  {
    id: 1,
    name: "Sophie Martin",
    email: "sophie.martin@quarter.com",
    phone: "+33 6 12 34 56 78",
    image: "/placeholder.svg?height=100&width=100",
    role: "Agent Senior",
    bio: "Sophie est spécialisée dans les propriétés de luxe et possède plus de 10 ans d'expérience dans l'immobilier parisien.",
    properties: 24,
    experience: 10,
    specialization: ["Propriétés de luxe", "Appartements parisiens", "Investissements"],
    socialMedia: {
      facebook: "https://facebook.com/sophiemartin",
      twitter: "https://twitter.com/sophiemartin",
      instagram: "https://instagram.com/sophiemartin",
      linkedin: "https://linkedin.com/in/sophiemartin",
    },
  },
  {
    id: 2,
    name: "Jean Dupont",
    email: "jean.dupont@quarter.com",
    phone: "+33 6 98 76 54 32",
    image: "/placeholder.svg?height=100&width=100",
    role: "Directeur des Ventes",
    bio: "Jean est expert en négociation et a aidé des centaines de clients à trouver leur maison idéale sur la Côte d'Azur.",
    properties: 36,
    experience: 15,
    specialization: ["Villas", "Propriétés côtières", "Résidences secondaires"],
    socialMedia: {
      facebook: "https://facebook.com/jeandupont",
      twitter: "https://twitter.com/jeandupont",
      instagram: "https://instagram.com/jeandupont",
      linkedin: "https://linkedin.com/in/jeandupont",
    },
  },
  {
    id: 3,
    name: "Marie Leroy",
    email: "marie.leroy@quarter.com",
    phone: "+33 6 23 45 67 89",
    image: "/placeholder.svg?height=100&width=100",
    role: "Spécialiste Locations",
    bio: "Marie est passionnée par l'aide aux jeunes professionnels et aux étudiants pour trouver le logement parfait.",
    properties: 18,
    experience: 5,
    specialization: ["Studios", "Locations meublées", "Logements étudiants"],
    socialMedia: {
      facebook: "https://facebook.com/marieleroy",
      twitter: "https://twitter.com/marieleroy",
      instagram: "https://instagram.com/marieleroy",
      linkedin: "https://linkedin.com/in/marieleroy",
    },
  },
]

// Données mockées pour les témoignages
export const mockTestimonials: Testimonial[] = [
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

// Données mockées pour les plans d'appartements
export const mockApartmentPlans: ApartmentPlan[] = [
  {
    id: "studio",
    title: "Le Studio",
    area: "1800 m²",
    bedroom: "120 m²",
    bathroom: "40 m²",
    lounge: "550 m²",
    balcony: "Autorisé",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    id: "deluxe",
    title: "Portion Deluxe",
    area: "2800 m²",
    bedroom: "150 m²",
    bathroom: "45 m²",
    lounge: "650 m²",
    balcony: "Autorisé",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    id: "penthouse",
    title: "Penthouse",
    area: "3200 m²",
    bedroom: "180 m²",
    bathroom: "60 m²",
    lounge: "750 m²",
    balcony: "Autorisé",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    id: "garden",
    title: "Jardin sur le Toit",
    area: "2400 m²",
    bedroom: "140 m²",
    bathroom: "50 m²",
    lounge: "600 m²",
    balcony: "Autorisé",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    id: "double",
    title: "Double Hauteur",
    area: "3000 m²",
    bedroom: "160 m²",
    bathroom: "55 m²",
    lounge: "700 m²",
    balcony: "Autorisé",
    image: "/placeholder.svg?height=500&width=600",
  },
]

// Données mockées pour les équipements
export const mockAmenities: Amenity[] = [
  {
    id: 1,
    title: "Espace de Stationnement",
    icon: "Car",
    description: "Espaces de stationnement sécurisés disponibles pour tous les résidents et leurs invités.",
  },
  {
    id: 2,
    title: "Piscine",
    icon: "Waves",
    description: "Profitez de notre piscine luxueuse avec espace détente et jacuzzi.",
  },
  {
    id: 3,
    title: "Sécurité Privée",
    icon: "Shield",
    description: "Personnel de sécurité 24/7 et systèmes de surveillance avancés.",
  },
  {
    id: 4,
    title: "Centre Médical",
    icon: "Stethoscope",
    description: "Installations médicales sur place pour les soins d'urgence et de routine.",
  },
  {
    id: 5,
    title: "Espace Bibliothèque",
    icon: "BookOpen",
    description: "Espaces de lecture tranquilles avec une vaste collection de livres.",
  },
  {
    id: 6,
    title: "Lits King Size",
    icon: "Bed",
    description: "Lits king-size confortables dans toutes les chambres principales.",
  },
  {
    id: 7,
    title: "Maisons Intelligentes",
    icon: "Home",
    description: "Technologie de maison intelligente intégrée pour plus de confort et d'efficacité.",
  },
  {
    id: 8,
    title: "Aire de Jeux pour Enfants",
    icon: "Gamepad2",
    description: "Aires de jeux dédiées pour les enfants de tous âges.",
  },
]

// Données mockées pour les statistiques
export const mockStats: Stat[] = [
  {
    id: 1,
    value: 560,
    suffix: "+",
    label: "Surface Totale m²",
    icon: "Map",
  },
  {
    id: 2,
    value: 197,
    suffix: "K+",
    label: "Appartements Vendus",
    icon: "Building",
  },
  {
    id: 3,
    value: 268,
    suffix: "+",
    label: "Constructions Totales",
    icon: "Construction",
  },
  {
    id: 4,
    value: 340,
    suffix: "+",
    label: "Chambres Apartio",
    icon: "Bed",
  },
]

// Données mockées pour les services
export const mockServices: Service[] = [
  {
    id: 1,
    title: "Acheter une propriété",
    description: "Trouvez la maison de vos rêves parmi notre large sélection de propriétés.",
    icon: "Home",
  },
  {
    id: 2,
    title: "Vendre une propriété",
    description: "Vendez votre propriété rapidement et au meilleur prix avec notre expertise.",
    icon: "Key",
  },
  {
    id: 3,
    title: "Louer une propriété",
    description: "Découvrez des options de location adaptées à vos besoins et à votre budget.",
    icon: "Search",
  },
  {
    id: 4,
    title: "Agents immobiliers",
    description: "Nos agents expérimentés vous accompagnent dans toutes vos démarches immobilières.",
    icon: "Users",
  },
]
