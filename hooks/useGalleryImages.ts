"use client"

import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import type { GalleryImage } from '@/lib/supabase'

export type GalleryQueryParams = {
  categories?: string[]
  featured?: boolean
  limit?: number
  orderBy?: keyof GalleryImage | string
  ascending?: boolean
  select?: string
}

// Demo-safe stub: return an empty array (no Supabase calls during demo)
async function fetchGalleryImages(_params: GalleryQueryParams = {}): Promise<GalleryImage[]> {
  // If you later wire up Supabase, replace this stub with a real query.
  return []
}

export function useGalleryImages(
  params: GalleryQueryParams = {},
  options?: Omit<UseQueryOptions<GalleryImage[], Error>, 'queryKey' | 'queryFn'>
) {
  const queryKey = ['gallery_images', params] as const
  return useQuery<GalleryImage[], Error>({
    queryKey,
    queryFn: () => fetchGalleryImages(params),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: 5 * 60 * 1000,
    ...options,
  })
}

export { fetchGalleryImages }
