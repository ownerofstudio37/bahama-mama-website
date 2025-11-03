'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Package, Briefcase, TrendingUp } from 'lucide-react'

const commercialHighlights = [
  {
    id: 1,
    title: 'Premium CBD Oil',
    description: 'Full spectrum CBD tincture from top-tier brands',
    src: 'https://images.unsplash.com/photo-1556228724-4e447ef95b5d?w=900&fit=crop',
    category: 'cbd'
  },
  {
    id: 2,
    title: 'Disposables & Mods',
    description: 'Latest vape devices and disposable vapes in all flavors',
    src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a9?w=900&fit=crop',
    category: 'vapes'
  },
  {
    id: 3,
    title: 'Kratom Selection',
    description: 'Quality-sourced kratom in multiple strains and forms',
    src: 'https://images.unsplash.com/photo-1585238342028-4bbc4a91b14c?w=900&fit=crop',
    category: 'kratom'
  },
  {
    id: 4,
    title: 'Hookah Essentials',
    description: 'Bowls, hoses, coals, and premium shisha flavors',
    src: 'https://images.unsplash.com/photo-1600959907703-6295e634e32e?w=900&fit=crop',
    category: 'hookah'
  },
  {
    id: 5,
    title: 'Glass Water Pipe',
    description: 'Handcrafted borosilicate glass with premium finish',
    src: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762198154/PANA4592.JPG_u3liza.jpg',
    category: 'accessories'
  },
  {
    id: 6,
    title: 'Delta-8 Gummies',
    description: 'Popular edibles in assorted strengths and flavors',
    src: 'https://images.unsplash.com/photo-1615486363955-c5d3590ed4f5?w=900&fit=crop',
    category: 'edibles'
  }
]

const commercialStats = [
  { icon: Building2, label: 'Texas Locations', value: '100+' },
  { icon: Package, label: 'Products Available', value: '3,500+' },
  { icon: TrendingUp, label: 'Top Brands', value: '50+' }
]

export default function CommercialHighlightGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Slideshow functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % commercialHighlights.length)
    }, 4000) // Change image every 4 seconds

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Products
              <span className="block text-amber-600">Premium Selection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore a curated selection of high-end products from CBD and kratom to vapes, hookahs, 
              and premium smoking accessories.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          >
            {commercialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-amber-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Main Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-full">
                {commercialHighlights.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      priority={index === 0}
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg text-gray-200 mb-4">{image.description}</p>
                      <span className="inline-block px-4 py-2 bg-amber-600 rounded-full text-sm font-medium capitalize">
                        {image.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slideshow Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {commercialHighlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-amber-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {commercialHighlights.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-gray-800 aspect-[4/5] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading={index < 3 ? "eager" : "lazy"}
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                <p className="text-sm text-gray-200 mb-3">{image.description}</p>
                <span className="inline-block px-3 py-1 bg-amber-600 rounded-full text-xs font-medium capitalize">
                  {image.category}
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800 capitalize">
                  {image.category}
                </span>
              </div>

              {/* Business Icon Overlay */}
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 bg-amber-600/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
              {[
            { icon: Package, title: 'CBD & Wellness', desc: 'Oils, tinctures, topicals, and pet CBD' },
            { icon: Building2, title: 'Vapes & Devices', desc: 'Disposables, mods, and e-liquids' },
            { icon: TrendingUp, title: 'Kratom & Edibles', desc: 'Multiple strains and gummy options' },
            { icon: Briefcase, title: 'Accessories', desc: 'Glass, hookah, papers, and more' }
          ].map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                <service.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Ready to Explore Our Products?
            </h3>
            <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
              Visit your nearest Bahama Mama location to browse premium CBD, kratom, vapes, 
              hookahs, glass, and smoking accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/services" 
                className="btn-primary inline-flex items-center"
              >
                Browse Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="btn-secondary inline-flex items-center"
              >
                Find a Location
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}