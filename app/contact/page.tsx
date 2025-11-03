import React from 'react'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import Image from 'next/image'
import LeadCaptureForm from '@/components/LeadCaptureForm'
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
  title: 'Contact Bahama Mama - Premium Smoke Shop in Texas',
  description: `Contact Bahama Mama for premium CBD, kratom, vapes, and smoking accessories. Located at ${businessInfo.address.fullAddress}. Call ${businessInfo.contact.phone} or email ${businessInfo.contact.email} for product inquiries.`,
  keywords: [
    'contact Bahama Mama',
    'smoke shop Texas',
    'CBD retailer contact',
    'vape shop inquiries',
    'kratom store Texas',
    'smoking accessories contact',
    'Texas smoke shop location'
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
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="container mx-auto px-4 py-24 max-w-3xl w-full flex-1 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
        <p className="text-xl text-gray-200 mb-8">
          Get in touch with our team for product inquiries, store locations, or any questions about our premium selection.
        </p>
        {/* Contact Form and Information */}
        <section className="py-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
              <LeadCaptureForm />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">Email</h3>
                    <a href={`mailto:${businessInfo.contact.email}`} className="text-primary-400 hover:text-primary-300 underline">
                      {businessInfo.contact.email}
                    </a>
                    <p className="text-gray-200 mt-1">
                      We respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">Phone</h3>
                    <a href={`tel:${businessInfo.contact.phone}`} className="text-primary-400 hover:text-primary-300 underline">
                      {businessInfo.contact.phone}
                    </a>
                    <p className="text-gray-200 mt-1">
                      Available Monday-Friday, 9AM-6PM CST
                    </p>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">Store Location</h3>
                    <p className="text-gray-200">
                      {businessInfo.address.fullAddress}
                    </p>
                    <p className="text-gray-200 mt-1">
                      One of 100+ locations serving Texas
                    </p>
                    <p className="text-gray-200 mt-1">
                      Open 7 days a week - Walk-ins welcome!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
