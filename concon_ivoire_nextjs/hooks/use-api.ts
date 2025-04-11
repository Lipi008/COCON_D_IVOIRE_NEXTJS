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

export function useApi<T>(
  fetchFunction: () => Promise<ApiResponse<T>>,
  dependencies: any[] = []
) {
  const [apiResponse, setApiResponse] = useState<ApiResponse<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [isUsingMock, setIsUsingMock] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const apiAvailable = await apiService.checkApiAvailability();
      setIsUsingMock(!apiAvailable);

      const response = await fetchFunction();

      if (response.success) {
        setApiResponse(response);
        console.log("success");
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
      console.log("finally");
      setIsLoading(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...dependencies]);

  return {
    data: apiResponse?.data || null,
    pagination: apiResponse?.pagination,
    isLoading,
    error,
    isUsingMock,
    refetch: fetchData,
  };
}

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
//         setIsLoading(false);
//         console.log("success");
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
//       console.log("fynally");
//       setIsLoading(false);
//     }
//   }, [fetchFunction]);

//   useEffect(() => {
//     fetchData();
//   }, [...dependencies, fetchData]);

//   return {
//     data: apiResponse?.data || null,
//     pagination: apiResponse?.pagination,
//     isLoading,
//     error,
//     isUsingMock,
//     refetch: fetchData,
//   };
// }

// export function useApi<T>(
//   fetchFunction: () => Promise<ApiResponse<T>>,
//   dependencies: any[] = []
// ) {
//   const [state, setState] = useState<{
//     data: T | null;
//     pagination?: Pagination;
//     isLoading: boolean;
//     error: Error | null;
//     isUsingMock: boolean;
//   }>({
//     data: null,
//     isLoading: true,
//     error: null,
//     isUsingMock: false,
//   });

//   // Mémoïsation stable de la fonction fetch
//   const stableFetchFunction = useCallback(fetchFunction, dependencies);

//   const fetchData = useCallback(async () => {
//     // Annule les appels si déjà en chargement
//     if (state.isLoading) return;

//     setState((prev) => ({ ...prev, isLoading: true, error: null }));

//     try {
//       const [apiAvailable, response] = await Promise.all([
//         apiService.checkApiAvailability(),
//         stableFetchFunction(),
//       ]);

//       if (!response.success) {
//         throw new Error(response.message || "Request failed");
//       }

//       setState({
//         data: response.data,
//         pagination: response.pagination,
//         isLoading: false,
//         error: null,
//         isUsingMock: !apiAvailable,
//       });
//     } catch (err) {
//       setState((prev) => ({
//         ...prev,
//         isLoading: false,
//         error: err instanceof Error ? err : new Error("Unknown error"),
//       }));
//     }
//   }, [stableFetchFunction, state.isLoading]);

//   // Contrôle strict des exécutions
//   useEffect(() => {
//     const controller = new AbortController();

//     fetchData();

//     return () => controller.abort();
//   }, [fetchData]); // Seulement fetchData comme dépendance

//   return {
//     ...state,
//     refetch: fetchData,
//   };
// }

/**
 * Hook pour récupérer toutes les propriétés
 */
// export function useProperties(filters?: PropertyFilters) {
//   return useApi(
//     () => apiService.getProperties(filters),
//     [JSON.stringify(filters)]
//   );
// }

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Hook pour récupérer les propriétés correspondant aux filtres.
 * @param {PropertyFilters} filters Filtres de recherche.

/*******  120637c0-fae4-428d-bed7-769f16ae873c  *******/
export function useProperties(filters?: PropertyFilters) {
  const fetchFunction = useCallback(() => {
    return apiService.getProperties(filters);
  }, [filters]);

  return useApi(fetchFunction, [filters]);
}

/**
 * Hook pour récupérer une propriété par son ID
 */
export function useProperty(id: string | number) {
  return useApi(() => apiService.getPropertyById(id), [id]);
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
export function useSimilarProperties(propertyId: string | number) {
  return useApi(
    () => apiService.getSimilarProperties(propertyId),
    [propertyId]
  );
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
