"use client"

import { useState, useEffect } from "react"
import { apiService } from "@/lib/api-service"
import { Wifi, WifiOff, AlertCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ApiStatusIndicatorProps {
  className?: string
  showLabel?: boolean
}

export function ApiStatusIndicator({ className = "", showLabel = false }: ApiStatusIndicatorProps) {
  const [apiAvailable, setApiAvailable] = useState<boolean | null>(null)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const checkApi = async () => {
      setIsChecking(true)
      try {
        const available = await apiService.checkApiAvailability()
        setApiAvailable(available)
      } catch (error) {
        setApiAvailable(false)
        console.error("Error checking API status:", error)
      } finally {
        setIsChecking(false)
      }
    }

    checkApi()

    // Vérifier périodiquement l'état de l'API
    const interval = setInterval(checkApi, 60000) // Vérifier toutes les minutes

    return () => clearInterval(interval)
  }, [])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`flex items-center ${className}`}>
            {isChecking ? (
              <AlertCircle className="h-4 w-4 text-yellow-500 animate-pulse" />
            ) : apiAvailable ? (
              <Wifi className="h-4 w-4 text-green-500" />
            ) : (
              <WifiOff className="h-4 w-4 text-red-500" />
            )}

            {showLabel && (
              <span className={`ml-2 text-sm ${apiAvailable ? "text-green-500" : "text-red-500"}`}>
                {isChecking
                  ? "Vérification de l'API..."
                  : apiAvailable
                    ? "API connectée"
                    : "Utilisation des données locales"}
              </span>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {isChecking
            ? "Vérification de la connexion à l'API..."
            : apiAvailable
              ? "Connecté à l'API - Données en temps réel"
              : "API non disponible - Utilisation des données mockées"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
