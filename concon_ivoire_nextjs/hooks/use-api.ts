"use client";

import { useState, useEffect, useCallback } from "react";
import { apiService } from "@/lib/api-service";
import type {
  ApiResponse,
  PropertyFilters,
  Pagination,
} from "@/lib/types/api-types";

/**
 * Hook générique pour consommer l'API
 */
// export function useApi<T>(fetchFunction: () => Promise<ApiResponse<T>>, dependencies: any[] = []) {
//   const [data, setData] = useState<T | null>(null)
//   const [isLoading, setIsLoading] = useState<boolean>(true)
//   const [error, setError] = useState<Error | null>(null)
//   const [isUsingMock, setIsUsingMock] = useState<boolean>(false)

//   const fetchData = useCallback(async () => {
//     setIsLoading(true)
//     setError(null)

//     try {
//       // Vérifier si l'API est disponible
//       const apiAvailable = await apiService.checkApiAvailability()
//       setIsUsingMock(!apiAvailable)

//       const response = await fetchFunction()

//       if (response.success) {
//         setData(response.data)
//       } else {
//         setError(new Error(response.message || "Une erreur est survenue"))
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err : new Error("Une erreur inconnue est survenue"))
//     } finally {
//       setIsLoading(false)
//     }
//   }, [fetchFunction])

//   useEffect(() => {
//     fetchData()
//   }, [...dependencies, fetchData])

//   return { data, isLoading, error, isUsingMock, refetch: fetchData }
// }

// export function useApi<T>(
//   fetchFunction: () => Promise<ApiResponse<T>>,
//   dependencies: any[] = []
// ) {
//   const [apiResponse, setApiResponse] = useState<ApiResponse<T> | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<Error | null>(null);
//   const [isUsingMock, setIsUsingMock] = useState<boolean>(false);

//   const fetchData = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const apiAvailable = await apiService.checkApiAvailability();
//       setIsUsingMock(!apiAvailable);

//       const response = await fetchFunction();

//       if (response.success) {
//         setApiResponse(response);
//         // console.log("success");
//       } else {
//         setError(new Error(response.message || "Une erreur est survenue"));
//         setApiResponse(null);
//       }
//     } catch (err) {
//       setError(
//         err instanceof Error
//           ? err
//           : new Error("Une erreur inconnue est survenue")
//       );
//       setApiResponse(null);
//     } finally {
//       // console.log("finally");
//       setIsLoading(false);
//     }
//   }, [fetchFunction]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData, ...dependencies]);

//   return {
//     data: apiResponse?.data || null,
//     pagination: apiResponse?.pagination,
//     isLoading,
//     error,
//     isUsingMock,
//     refetch: fetchData,
//   };
// }

export function useApi<T>(
  fetchFunction: () => Promise<ApiResponse<T>>,
  dependencies: any[] = []
) {
  const [apiResponse, setApiResponse] = useState<ApiResponse<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [isUsingMock, setIsUsingMock] = useState<boolean>(false);

  // Stabilise la fonction fetch
  const stableFetchFunction = useCallback(fetchFunction, dependencies);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Déplacez la vérification d'API ailleurs si possible
      // ou mettez en cache le résultat
      const apiAvailable = await apiService.checkApiAvailability();
      setIsUsingMock(!apiAvailable);

      const response = await stableFetchFunction();

      if (response.success) {
        setApiResponse(response);
      } else {
        setError(new Error(response.message || "Une erreur est survenue"));
        setApiResponse(null);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("Une erreur inconnue est survenue")
      );
      setApiResponse(null);
    } finally {
      setIsLoading(false);
    }
  }, [stableFetchFunction]); // Ne dépend que de la fonction stabilisée

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Dépendances déjà gérées dans stableFetchFunction

  return {
    data: apiResponse?.data || null,
    pagination: apiResponse?.pagination,
    isLoading,
    error,
    isUsingMock,
    refetch: fetchData,
  };
}

/**
 * Hook pour récupérer toutes les propriétés
 */
// export function useProperties(filters?: PropertyFilters) {
//   return useApi(
//     () => apiService.getProperties(filters),
//     [JSON.stringify(filters)]
//   );
// }

/**
 * Hook pour récupérer les propriétés correspondant aux filtres.
 * @param {PropertyFilters} filters Filtres de recherche.
 */
export function useProperties(filters?: PropertyFilters) {
  const fetchFunction = useCallback(() => {
    return apiService.getProperties(filters);
  }, [filters]);

  return useApi(fetchFunction, [filters]);
}

/**
 * Hook pour récupérer une propriété par son ID
 */
// export function useProperty(id: string | number) {
//   return useApi(() => apiService.getPropertyById(id), [id]);
// }
export function useProperty(id: string | number) {
  const fetchFunction = useCallback(() => apiService.getPropertyById(id), [id]);
  return useApi(fetchFunction, [id]);
}
/**
 * Hook pour récupérer tous les agents
 */
export function useAgents() {
  return useApi(() => apiService.getAgents(), []);
}

/**
 * Hook pour récupérer un agent par son ID
 */
export function useAgent(id: string | number) {
  return useApi(() => apiService.getAgentById(id), [id]);
}

/**
 * Hook pour récupérer les propriétés d'un agent
 */
export function useAgentProperties(agentId: string | number) {
  return useApi(() => apiService.getAgentProperties(agentId), [agentId]);
}

/**
 * Hook pour récupérer tous les témoignages
 */
export function useTestimonials() {
  return useApi(() => apiService.getTestimonials(), []);
}

/**
 * Hook pour récupérer tous les plans d'appartements
 */
export function useApartmentPlans() {
  return useApi(() => apiService.getApartmentPlans(), []);
}

/**
 * Hook pour récupérer tous les équipements
 */
export function useAmenities() {
  return useApi(() => apiService.getAmenities(), []);
}

/**
 * Hook pour récupérer toutes les statistiques
 */
export function useStats() {
  return useApi(() => apiService.getStats(), []);
}

/**
 * Hook pour récupérer tous les services
 */
export function useServices() {
  return useApi(() => apiService.getServices(), []);
}

/**
 * Hook pour rechercher des propriétés
 */
export function usePropertySearch(query: string) {
  return useApi(() => apiService.searchProperties(query), [query]);
}

/**
 * Hook pour récupérer les propriétés similaires
 */
// export function useSimilarProperties(propertyId: string | number) {
//   return useApi(
//     () => apiService.getSimilarProperties(propertyId),
//     [propertyId]
//   );
// }

export function useSimilarProperties(propertyId: string | number) {
  const fetchFunction = useCallback(
    () => apiService.getSimilarProperties(propertyId),
    [propertyId]
  );
  return useApi(fetchFunction, [propertyId]);
}

/**
 * Hook pour récupérer les propriétés en vedette
 */
export function useFeaturedProperties() {
  return useApi(() => apiService.getFeaturedProperties(), []);
}

/**
 * Hook pour récupérer les propriétés récentes
 */
export function useRecentProperties() {
  return useApi(() => apiService.getRecentProperties(), []);
}

/**
 * Hook pour récupérer les propriétés populaires
 */
export function usePopularProperties() {
  return useApi(() => apiService.getPopularProperties(), []);
}
