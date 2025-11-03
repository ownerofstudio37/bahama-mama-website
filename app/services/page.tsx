import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Services from '@/components/Services'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { generateSEOMetadata } from '@/lib/seo-helpers'
import { generateServiceSchema } from '@/lib/seo-config'

export const metadata = generateSEOMetadata({
  title: 'Premium Products - Bahama Mama Texas Smoke Shop',
  description: 'Bahama Mama offers premium CBD, kratom, vapes, and smoking accessories across 100+ Texas locations. Over 3,500 quality products from trusted brands.',
  keywords: [
    'CBD products Texas',
    'kratom store Texas',
    'vape shop Texas',
    'smoking accessories',
    'premium glass Texas',
    'water pipes Texas',
    'hookah supplies',
    'disposable vapes Texas'
  ],
  canonicalUrl: 'https://studio37.cc/services',
  pageType: 'service'
})

export default function ServicesPage() {
  const serviceSchema = generateServiceSchema(
    'Premium Smoke Shop Products',
    'Premium CBD, kratom, vapes, and smoking accessories across 100+ Texas locations with over 3,500 quality products.'
  )

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

  {/* Hero Section */}
  <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199444/PANA5465.JPG_fvkcsf.jpg" 
            alt="Bahama Mama product showcase"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Products Across Texas</h1>
            <p className="text-xl text-gray-200 mb-8">
              Over 3,500 quality products including CBD, kratom, vapes, and smoking accessories at 100+ locations statewide.
            </p>
            <Link 
              href="#services" 
              className="btn-primary inline-flex items-center text-lg px-6 py-3"
            >
              Browse Our Selection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Services Component */}
            {/* Main Services Component */}
      <div id="services" className="py-16">
        <Services />
      </div>

      {/* Individual Service Pages Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our extensive selection of premium products across all major categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Premium CBD</h3>
                <p className="text-gray-600 mb-4">Lab-tested CBD products from trusted brands</p>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-3xl">🍃</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Kratom</h3>
                <p className="text-gray-600 mb-4">Premium kratom strains and blends</p>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-3xl">💨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Vapes & Disposables</h3>
                <p className="text-gray-600 mb-4">Latest devices and premium e-liquid flavors</p>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Smoking Accessories</h3>
                <p className="text-gray-600 mb-4">Premium glass, water pipes, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Shopping Experience</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-600">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Visit Any Location</h3>
                    <p className="text-gray-600">
                      Walk into any of our 100+ Texas locations and browse our extensive selection of over 3,500 products.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-600">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">
                      Our knowledgeable staff can answer questions, provide recommendations, and help you find exactly what you need.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-600">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      All our products are sourced from trusted brands and undergo quality testing to ensure safety and effectiveness.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-600">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Fair Pricing</h3>
                    <p className="text-gray-600">
                      We offer competitive pricing on all products, with special promotions and loyalty rewards for regular customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Bahama Mama</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">100+ Locations Statewide</h3>
                    <p className="text-gray-600">Find a Bahama Mama near you with convenient locations across Texas.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">3,500+ Premium Products</h3>
                    <p className="text-gray-600">From CBD to kratom, vapes to glass - we have the largest selection in Texas.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Trusted Brands Only</h3>
                    <p className="text-gray-600">We partner with the industry's most reputable manufacturers and suppliers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Knowledgeable Staff</h3>
                    <p className="text-gray-600">Our team stays updated on products and regulations to serve you better.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Quality Tested</h3>
                    <p className="text-gray-600">Lab-tested CBD and kratom products with certificates of analysis available.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Customer First</h3>
                    <p className="text-gray-600">Your satisfaction is our priority with hassle-free returns and exchanges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find a Location Near You</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Visit any of our 100+ Texas locations to browse our full selection and speak with our knowledgeable staff.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium inline-flex items-center text-lg"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
