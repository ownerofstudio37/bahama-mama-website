import React from 'react'
import { notFound } from 'next/navigation'

const isValidSlug = (s: string) => /^[a-z0-9-]{1,64}$/.test(s)

// Generate metadata dynamically based on page content
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Demo mode: no database, return 404 metadata
  if (!isValidSlug(params.slug)) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found'
    }
  }
  
  return {
    title: 'Page Not Found',
    description: 'The requested page could not be found'
  }
}

// Renamed function to avoid naming conflict with the imported ContentPage type
export default async function DynamicPage({ params }: { params: { slug: string } }) {
  // Demo mode: no dynamic pages available
  if (!isValidSlug(params.slug)) {
    notFound()
  }
  
  // All dynamic pages return not found in demo mode
  notFound()
}

