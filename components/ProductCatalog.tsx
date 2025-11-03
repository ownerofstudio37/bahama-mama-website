'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ShoppingBag, Info } from 'lucide-react'

interface Product {
  id: number
  title: string
  category: string
  description: string
  image: string
  featured?: boolean
  tags?: string[]
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Premium Glass Collection',
    category: 'glass',
    description: 'Handcrafted artistic glass pieces, from functional water pipes to decorative collectibles.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762198154/PANA4592.JPG_u3liza.jpg',
    featured: true,
    tags: ['water pipes', 'handcrafted', 'artistic']
  },
  {
    id: 2,
    title: 'Colorful Glass Displays',
    category: 'glass',
    description: 'Vibrant, eye-catching glass pieces in various colors and designs for every taste.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199444/PANA5281.JPG_yaainy.jpg',
    tags: ['colorful', 'display', 'variety']
  },
  {
    id: 3,
    title: 'Vape Devices & Mods',
    category: 'vapes',
    description: 'Latest vape devices, mods, and advanced systems for experienced users.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199448/PANA5593.JPG_efk8tg.jpg',
    featured: true,
    tags: ['mods', 'devices', 'advanced']
  },
  {
    id: 4,
    title: 'Disposable Vapes',
    category: 'vapes',
    description: 'Convenient disposable vapes in hundreds of flavors from top brands.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199444/PANA5465.JPG_fvkcsf.jpg',
    tags: ['disposable', 'flavors', 'convenient']
  },
  {
    id: 5,
    title: 'Premium CBD Products',
    category: 'cbd',
    description: 'Lab-tested CBD products including oils, edibles, topicals, and more.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199444/PANA5421.JPG_unmnos.jpg',
    featured: true,
    tags: ['lab-tested', 'oils', 'edibles']
  },
  {
    id: 6,
    title: 'Delta-8 Selection',
    category: 'cbd',
    description: 'High-quality Delta-8 products including gummies, vapes, and tinctures.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199444/PANA5314.JPG_dxkjit.jpg',
    tags: ['delta-8', 'gummies', 'tinctures']
  },
  {
    id: 7,
    title: 'Quality Kratom',
    category: 'kratom',
    description: 'Premium kratom strains and blends from trusted suppliers.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199448/PANA5655.JPG_dnjq94.jpg',
    tags: ['strains', 'premium', 'trusted']
  },
  {
    id: 8,
    title: 'Kratom Variety',
    category: 'kratom',
    description: 'Wide selection of kratom products in various forms and potencies.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199448/PANA5897.JPG_ykxxi6.jpg',
    tags: ['variety', 'potency', 'selection']
  },
  {
    id: 9,
    title: 'Hookah Accessories',
    category: 'hookah',
    description: 'Complete hookah setups, flavored tobacco, coals, and accessories.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199448/PANA5700.JPG_rwdiqr.jpg',
    tags: ['hookah', 'tobacco', 'coals']
  },
  {
    id: 10,
    title: 'Hookah Selection',
    category: 'hookah',
    description: 'Traditional and modern hookahs in various sizes and styles.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199448/PANA5709.JPG_d03u94.jpg',
    tags: ['traditional', 'modern', 'styles']
  },
  {
    id: 11,
    title: 'Smoking Accessories',
    category: 'accessories',
    description: 'Grinders, rolling papers, lighters, storage, and essential accessories.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199448/PANA5749.JPG_iufzjb.jpg',
    tags: ['grinders', 'papers', 'storage']
  },
  {
    id: 12,
    title: 'Premium Accessories',
    category: 'accessories',
    description: 'High-end smoking accessories and tools for discerning customers.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199448/PANA5795.JPG_wchnae.jpg',
    tags: ['premium', 'high-end', 'tools']
  },
  {
    id: 13,
    title: 'Store Display',
    category: 'featured',
    description: 'Premium retail environment with organized displays and wide selection.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199444/PANA5249.JPG_n5xdtm.jpg',
    tags: ['store', 'display', 'retail']
  },
  {
    id: 14,
    title: 'Featured Products',
    category: 'featured',
    description: 'Top-selling and featured items from across our product range.',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1762199444/PANA5352.JPG_tkssjg.jpg',
    featured: true,
    tags: ['bestsellers', 'featured', 'popular']
  }
]

const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: '🏪' },
  { id: 'featured', name: 'Featured', icon: '⭐' },
  { id: 'glass', name: 'Glass', icon: '💎' },
  { id: 'vapes', name: 'Vapes', icon: '💨' },
  { id: 'cbd', name: 'CBD & Delta-8', icon: '🌿' },
  { id: 'kratom', name: 'Kratom', icon: '🍃' },
  { id: 'hookah', name: 'Hookah', icon: '🔥' },
  { id: 'accessories', name: 'Accessories', icon: '🛠️' }
]

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === activeCategory)

  return (
    <>
      {/* Category Filters */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {CATEGORIES.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all shadow-sm flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-primary-300'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        <div className="text-center text-gray-600">
          <p className="text-sm">
            Showing <span className="font-semibold text-primary-600">{filteredProducts.length}</span> products
          </p>
        </div>
      </div>

      {/* Product Grid - Catalog Style */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              layout
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full shadow-lg text-xs font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </div>
                )}

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button 
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProduct(product)
                      }}
                    >
                      <Info className="h-5 w-5" />
                    </button>
                    <button className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors">
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded capitalize">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {product.description}
                </p>
                
                {/* Tags */}
                {product.tags && (
                  <div className="flex flex-wrap gap-1">
                    {product.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </motion.div>
      )}

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Product Image */}
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {selectedProduct.featured && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold flex items-center gap-2">
                      <Star className="h-4 w-4 fill-current" />
                      Featured Product
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded capitalize">
                      {selectedProduct.category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    {selectedProduct.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Tags */}
                  {selectedProduct.tags && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Features:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm capitalize">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Call to Action */}
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="bg-primary-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700">
                        <strong>Visit any of our 100+ Texas locations</strong> to see this product in person and speak with our knowledgeable staff.
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                        <ShoppingBag className="h-5 w-5" />
                        Visit Store
                      </button>
                      <button 
                        onClick={() => setSelectedProduct(null)}
                        className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
