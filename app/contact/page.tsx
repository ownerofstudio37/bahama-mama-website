import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import LocationFinder from '@/components/LocationFinder'
import { generateSEOMetadata } from '@/lib/seo-helpers'
import { businessInfo } from '@/lib/seo-config'

// Demo-safe: skip Supabase calls when env vars are missing
async function getSettings() {
  // For demo mode, return fallback settings without DB call
  return {
    contact_email: businessInfo.contact.email,
    contact_phone: businessInfo.contact.phone,
    business_address: businessInfo.address.fullAddress,
    social_facebook: '',
    social_instagram: '',
    social_twitter: ''
  }
}

export const metadata = generateSEOMetadata({
  title: 'Find a Store - Bahama Mama Locations Across Texas',
  description: `Find a Bahama Mama smoke shop near you. 100+ locations across Texas offering premium CBD, kratom, vapes, and smoking accessories. Call ${businessInfo.contact.phone} for more information.`,
  keywords: [
    'Bahama Mama locations',
    'smoke shop near me Texas',
    'CBD store locations Texas',
    'vape shop locations',
    'kratom store near me',
    'Texas smoke shop finder',
    'Bahama Mama store finder'
  ],
  canonicalUrl: 'https://studio37.cc/contact',
  pageType: 'contact'
})

export default async function ContactPage() {
  const settings = await getSettings()
  
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* True Full-Page Background Image, fixed and always behind content */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199444/PANA5249.JPG_n5xdtm.jpg"
          alt="Bahama Mama store interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 py-24 max-w-7xl w-full flex-1 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Find a Store Near You</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            100+ locations across Texas offering premium CBD, kratom, vapes, and smoking accessories
          </p>
        </div>

        {/* Location Finder */}
        <LocationFinder />

        {/* Contact Information Card */}
        <div className="mt-16 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Corporate Contact</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <div className="text-center">
              <div className="inline-flex w-16 h-16 bg-primary-100 rounded-full items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Email Us</h3>
              <a 
                href={`mailto:${businessInfo.contact.email}`} 
                className="text-primary-600 hover:text-primary-700 underline block"
              >
                {businessInfo.contact.email}
              </a>
              <p className="text-gray-600 mt-2 text-sm">
                General inquiries & support
              </p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="inline-flex w-16 h-16 bg-primary-100 rounded-full items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Call Us</h3>
              <a 
                href={`tel:${businessInfo.contact.phone}`} 
                className="text-primary-600 hover:text-primary-700 underline block"
              >
                {businessInfo.contact.phone}
              </a>
              <p className="text-gray-600 mt-2 text-sm">
                Mon-Fri, 9AM-6PM CST
              </p>
            </div>

            {/* Headquarters */}
            <div className="text-center">
              <div className="inline-flex w-16 h-16 bg-primary-100 rounded-full items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Headquarters</h3>
              <p className="text-gray-700">
                {businessInfo.address.fullAddress}
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                Corporate offices
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What products do you carry?</h3>
              <p className="text-gray-600">
                We carry over 3,500 premium products including CBD, kratom, disposable vapes, mods, e-liquids, premium glass, water pipes, hookahs, smoking accessories, and much more. If we don't have it, we can usually get it!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do you offer online ordering?</h3>
              <p className="text-gray-600">
                Currently, we focus on our in-store experience to ensure quality service and product education. Visit any of our 100+ Texas locations for the best selection and expert advice from our knowledgeable staff.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What are your store hours?</h3>
              <p className="text-gray-600">
                Most locations are open 7 days a week with extended hours. Contact your nearest Bahama Mama location for specific hours, as they may vary by store.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do you test your CBD and kratom products?</h3>
              <p className="text-gray-600">
                Yes! We only carry lab-tested products from trusted brands. Quality and safety are our top priorities. Our staff can show you test results and help you choose products that meet your needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do you have a rewards or loyalty program?</h3>
              <p className="text-gray-600">
                Yes! Ask in-store about our customer rewards program. We value our loyal customers and offer special promotions, discounts, and exclusive deals for members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
