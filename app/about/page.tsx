import React from "react"
import Image from "next/image"
import Link from "next/link"
import { generateSEOMetadata } from '@/lib/seo-helpers'
import BTSFeed from '@/components/BTSFeed'

export const metadata = generateSEOMetadata({
  title: 'About Bahama Mama - Texas\'s #1 Premier CBD & Smoke Shop',
  description: 'Discover Bahama Mama, Texas\'s leading smoke shop with 100+ locations. Offering 3,500+ premium CBD, kratom, vape, and smoking accessory products with expert service.',
  keywords: [
    'about Bahama Mama',
    'smoke shop Texas',
    'CBD store Texas locations',
    'kratom retailer Texas',
    'vape shop Houston Dallas Austin',
    'premium smoke shop'
  ],
  canonicalUrl: 'https://bahama-mama.com/about'
})

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1759639187/A4B03835-ED8B-4FBB-A27E-1F2EE6CA1A18_1_105_c_gstgil_e_gen_restore_e_improve_e_sharpen_l_image_upload_My_Brand_IMG_2115_mtuowt_c_scale_fl_relative_w_0.40_o_80_fl_layer_apply_g_south_x_0.03_y_0.04_yqgycj.jpg"
            alt="Bahama Mama store interior"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Bahama Mama</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover Texas's #1 premier CBD and alternative products retailer with 100+ locations 
            offering 3,500+ quality products and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Bahama Mama, we're committed to providing premium products, 
              expert guidance, and a welcoming environment for all our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every product is carefully selected and lab-tested to ensure 
                the highest quality and purity standards.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Our knowledgeable staff provides personalized recommendations 
                to help you find the perfect products for your needs.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We're proud to serve Texas communities with exceptional 
                service and a welcoming, judgment-free environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Bahama Mama Story</h2>
              <p className="text-lg text-gray-600">
                How we became Texas's #1 premier CBD and smoke shop
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Founded on Quality</h3>
                <p className="text-gray-700 mb-6">
                  Bahama Mama started with a simple mission: to provide Texans with access to 
                  premium CBD and alternative products in a professional, welcoming environment. 
                  Today, we operate 100+ locations across the state.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Unmatched Selection</h3>
                <p className="text-gray-700 mb-6">
                  With over 3,500 different products spanning CBD, kratom, vapes, hookahs, water pipes, 
                  and smoking accessories, we offer the most comprehensive selection in Texas. 
                  Our inventory includes top brands and exclusive products you won't find elsewhere.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>100+ Texas locations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>3,500+ premium products</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>#1 premier CBD retailer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Lab-tested, quality guaranteed</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Dynamic BTS Feed Component */}
                <BTSFeed />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Bahama Mama Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find your nearest location and discover why we're Texas's #1 choice for 
            premium CBD, kratom, vapes, and smoking accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find a Location
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}