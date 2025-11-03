import { MetadataRoute } from 'next'
import { businessInfo } from '@/lib/seo-config'

const baseUrl = businessInfo.contact.website

// Priority levels for different content types
const PRIORITIES = {
  homepage: 1.0,
  mainPages: 0.9,
  servicePages: 0.8,
  contentPages: 0.7,
  blogPosts: 0.6,
} as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date()
  
  // Static routes - Main pages optimized for local SEO and user journey
  const routes: MetadataRoute.Sitemap = [
    // Homepage - Highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: PRIORITIES.homepage,
    },
    // Main service pages - High priority for conversions
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: PRIORITIES.mainPages,
    },
    // Individual service pages - High priority for local SEO
    {
      url: `${baseUrl}/services/wedding-photography`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: PRIORITIES.servicePages,
    },
    {
      url: `${baseUrl}/services/portrait-photography`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: PRIORITIES.servicePages,
    },
    {
      url: `${baseUrl}/services/event-photography`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: PRIORITIES.servicePages,
    },
    {
      url: `${baseUrl}/services/commercial-photography`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: PRIORITIES.servicePages,
    },
    {
      url: `${baseUrl}/book-a-session`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: PRIORITIES.mainPages,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: PRIORITIES.mainPages,
    },
    // Local SEO landing page
    {
      url: `${baseUrl}/local-photographer-pinehurst-tx`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: PRIORITIES.servicePages,
    },
    // Portfolio and content pages
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: PRIORITIES.servicePages,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: PRIORITIES.servicePages,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: PRIORITIES.servicePages,
    },
  ]
  
  // Demo mode: no dynamic content pages or blog posts
  return routes
}
