"use client";

import { useState, useEffect } from "react";
import { useProperties } from "@/hooks/use-api";
import type { PropertyFilters } from "@/lib/types/api-types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ApiStatusIndicator } from "@/components/ui/api-status-indicator";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize, MapPin, AlertCircle } from "lucide-react";
import { Console } from "console";
import { useMemo } from "react";

interface PropertyListProps {
  filters?: PropertyFilters;
  showFilters?: boolean;
  limit?: number;
  showPagination?: boolean;
  className?: string;
}

const DEFAULT_PAGINATION = {
  total: 0,
  page: 1,
  limit: 6,
  totalPages: 1,
};

export default function PropertyList({
  filters = {},
  showFilters = false,
  limit = 6,
  showPagination = false,
  className = "",
}: PropertyListProps) {
  // Gestion des filtres
  const [currentFilters, setCurrentFilters] = useState<PropertyFilters>({
    ...filters,
    limit,
    page: 1,
  });

  // const data_ = useProperties(currentFilters);
  // console.log(data_);
  // Récupération des données

  const memoizedFilters = useMemo(() => currentFilters, [currentFilters]);

  const {
    data,
    pagination = DEFAULT_PAGINATION,
    isLoading,
    error,
    isUsingMock,
    refetch,
  } = useProperties(memoizedFilters);

  // Effet pour mettre à jour les filtres
  useEffect(() => {
    setCurrentFilters((prev) => {
      const newFilters = {
        ...prev,
        ...filters,
        limit,
        page: 1, // Reset à la première page quand les filtres changent
      };

      // Évite les mises à jour inutiles
      return JSON.stringify(prev) === JSON.stringify(newFilters)
        ? prev
        : newFilters;
    });
  }, [filters, limit]);

  // Gestion du changement de page
  const handlePageChange = (page: number) => {
    setCurrentFilters((prev) => ({ ...prev, page }));
  };

  const properties = data ?? [];
  // États dérivés
  const showNoProperties = !isLoading && properties.length === 0;
  const displayPagination = showPagination && pagination.totalPages > 1;

  console.log("showNoProperties :", showNoProperties, "isLoading :", isLoading);
  // Composants réutilisables
  const renderLoadingSkeletons = () =>
    Array.from({ length: limit }).map((_, index) => (
      <Card key={`skeleton-${index}`} className="overflow-hidden">
        <div className="relative">
          <Skeleton className="h-64 w-full" />
        </div>
        <CardContent className="p-6">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-4" />
          <div className="flex justify-between">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </CardContent>
        <CardFooter className="border-t p-6 flex justify-between items-center">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-10 w-1/4" />
        </CardFooter>
      </Card>
    ));

  const renderPropertyCard = (property: (typeof properties)[0]) => (
    <Card
      key={property.id}
      className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative">
        <div className="relative h-64 w-full">
          <Image
            src={property.images[0] || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        <Badge className="absolute top-4 left-4 bg-primary-DEFAULT">
          {property.status}
        </Badge>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">
          {property.title}
        </h3>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="line-clamp-1">{property.location}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.beds} Chambres</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{property.baths} SdB</span>
          </div>
          <div className="flex items-center">
            <Maximize size={16} className="mr-1" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-t p-6 flex justify-between items-center">
        <span className="text-xl font-bold text-primary-DEFAULT">
          {/* property.price */}

          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "XOF", // Utilise "XOF" qui est le code ISO pour le franc CFA BCEAO
            maximumFractionDigits: 0,
          }).format(Number(property.price))}

          {property.period && (
            <span className="text-sm font-normal text-gray-500">
              /{property.period}
            </span>
          )}
        </span>
        <Link href={`/properties/${property.id}`} passHref>
          <Button
            variant="outline"
            className="hover:bg-primary-DEFAULT hover:text-white"
          >
            Détails
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );

  const renderNoProperties = () => (
    <div className="col-span-full text-center py-12">
      <div className="text-gray-400 mb-4">
        <AlertCircle className="h-12 w-12 mx-auto" />
      </div>
      <h3 className="text-xl font-medium mb-2">Aucune propriété trouvée</h3>
      <p className="text-gray-500">
        Essayez de modifier vos critères de recherche pour trouver des
        propriétés correspondantes.
      </p>
    </div>
  );

  const renderPagination = () => (
    <div className="flex justify-center mt-12">
      <div className="flex space-x-2">
        <Button
          variant="outline"
          className="w-10 h-10 p-0"
          onClick={() => handlePageChange(Math.max(1, pagination.page - 1))}
          disabled={pagination.page === 1}
        >
          &lt;
        </Button>

        {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
          let pageNum;
          if (pagination.totalPages <= 5) {
            pageNum = i + 1;
          } else if (pagination.page <= 3) {
            pageNum = i + 1;
          } else if (pagination.page >= pagination.totalPages - 2) {
            pageNum = pagination.totalPages - 4 + i;
          } else {
            pageNum = pagination.page - 2 + i;
          }

          return (
            <Button
              key={pageNum}
              variant="outline"
              className={`w-10 h-10 p-0 ${
                pageNum === pagination.page
                  ? "bg-primary-DEFAULT text-white"
                  : ""
              }`}
              onClick={() => handlePageChange(pageNum)}
            >
              {pageNum}
            </Button>
          );
        })}

        <Button
          variant="outline"
          className="w-10 h-10 p-0"
          onClick={() =>
            handlePageChange(
              Math.min(pagination.totalPages, pagination.page + 1)
            )
          }
          disabled={pagination.page === pagination.totalPages}
        >
          &gt;
        </Button>
      </div>
    </div>
  );

  return (
    <div className={className}>
      {/* En-tête */}
      <div className="flex justify-end mb-4">
        <ApiStatusIndicator showLabel />
        {/* <ApiStatusIndicator isUsingMock={isUsingMock} showLabel /> */}
      </div>

      {/* Message d'erreur */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>
            Une erreur est survenue lors du chargement des propriétés.{" "}
            <Button
              variant="link"
              className="h-auto p-0 text-red-700"
              onClick={() => refetch()}
            >
              Réessayer
            </Button>
          </span>
        </div>
      )}

      {/* Résumé des résultats */}
      {!isLoading && properties.length > 0 && (
        <div className="text-sm text-gray-500 mb-4">
          {pagination.total} propriété{pagination.total > 1 ? "s" : ""} trouvée
          {pagination.total > 1 ? "s" : ""}
          {isUsingMock && " (données mockées)"}
        </div>
      )}

      {/* Grille de propriétés */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? renderLoadingSkeletons()
          : showNoProperties
          ? renderNoProperties()
          : properties.map(renderPropertyCard)}
      </div>

      {/* Pagination */}
      {displayPagination && renderPagination()}
    </div>
  );
}
