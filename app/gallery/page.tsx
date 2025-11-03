import React from 'react'
import ProductCatalog from '@/components/ProductCatalog'
import { generateSEOMetadata } from '@/lib/seo-helpers'

export const metadata = generateSEOMetadata({
  title: 'Product Catalog - Bahama Mama Texas Smoke Shop',
  description: 'Browse Bahama Mama\'s extensive product catalog featuring premium CBD, kratom, vapes, glass, and smoking accessories. Over 3,500 quality products from trusted brands.',
  keywords: [
    'smoke shop products Texas',
    'CBD catalog Texas',
    'kratom products',
    'vape catalog',
    'glass water pipes',
    'smoking accessories catalog',
    'premium smoke shop inventory'
  ],
  canonicalUrl: 'https://studio37.cc/gallery'
})

export default function ProductsPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 py-20 px-4 text-center text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Product Catalog
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed">
            Browse our extensive selection of premium CBD, kratom, vapes, glass, and smoking accessories.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
            <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
              3,500+ Products
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
              100+ Texas Locations
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
              Trusted Brands
            </span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <ProductCatalog />
      </div>
    </div>
  )
}
