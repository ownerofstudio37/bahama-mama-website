'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Clock, Navigation, Search } from 'lucide-react'
import { motion } from 'framer-motion'

interface Location {
  id: number
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  hours: string
  region: string
}

// Sample locations - in production this would come from a database
const SAMPLE_LOCATIONS: Location[] = [
  {
    id: 1,
    name: 'Bahama Mama - Houston Downtown',
    address: '123 Main Street',
    city: 'Houston',
    state: 'TX',
    zip: '77002',
    phone: '(713) 555-0100',
    hours: 'Mon-Sun: 9AM-10PM',
    region: 'Houston'
  },
  {
    id: 2,
    name: 'Bahama Mama - Dallas',
    address: '456 Commerce Ave',
    city: 'Dallas',
    state: 'TX',
    zip: '75201',
    phone: '(214) 555-0200',
    hours: 'Mon-Sun: 10AM-9PM',
    region: 'Dallas'
  },
  {
    id: 3,
    name: 'Bahama Mama - Austin',
    address: '789 Congress Ave',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    phone: '(512) 555-0300',
    hours: 'Mon-Sun: 9AM-11PM',
    region: 'Austin'
  },
  {
    id: 4,
    name: 'Bahama Mama - San Antonio',
    address: '321 River Walk',
    city: 'San Antonio',
    state: 'TX',
    zip: '78205',
    phone: '(210) 555-0400',
    hours: 'Mon-Sun: 10AM-10PM',
    region: 'San Antonio'
  },
  {
    id: 5,
    name: 'Bahama Mama - Fort Worth',
    address: '654 Sundance Square',
    city: 'Fort Worth',
    state: 'TX',
    zip: '76102',
    phone: '(817) 555-0500',
    hours: 'Mon-Sun: 9AM-9PM',
    region: 'Fort Worth'
  },
  {
    id: 6,
    name: 'Bahama Mama - The Woodlands',
    address: '987 Market Street',
    city: 'The Woodlands',
    state: 'TX',
    zip: '77380',
    phone: '(281) 555-0600',
    hours: 'Mon-Sun: 10AM-10PM',
    region: 'Houston'
  }
]

const REGIONS = ['All Regions', 'Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth']

export default function LocationFinder() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('All Regions')

  const filteredLocations = SAMPLE_LOCATIONS.filter(location => {
    const matchesSearch = 
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.zip.includes(searchQuery)
    
    const matchesRegion = selectedRegion === 'All Regions' || location.region === selectedRegion

    return matchesSearch && matchesRegion
  })

  return (
    <div>
      {/* Search and Filter Bar */}
      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by city, address, or zip code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            />
          </div>

          {/* Region Filter */}
          <div className="md:w-64">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
            >
              {REGIONS.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Found <span className="font-semibold text-primary-600">{filteredLocations.length}</span> locations
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
      </div>

      {/* Location Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLocations.map((location, index) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-4 text-white">
              <h3 className="font-bold text-lg mb-1">{location.city}</h3>
              <p className="text-sm text-primary-100">{location.region} Area</p>
            </div>

            <div className="p-6 space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">{location.address}</p>
                  <p className="text-sm text-gray-600">
                    {location.city}, {location.state} {location.zip}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <a 
                  href={`tel:${location.phone.replace(/\D/g, '')}`}
                  className="text-gray-900 hover:text-primary-600 transition-colors font-medium"
                >
                  {location.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <p className="text-gray-700">{location.hours}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address + ' ' + location.city + ' ' + location.state)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
                <a
                  href={`tel:${location.phone.replace(/\D/g, '')}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  Call
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredLocations.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No locations found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Store Count Banner */}
      <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg p-8 text-center text-white">
        <h3 className="text-3xl font-bold mb-2">100+ Locations Across Texas</h3>
        <p className="text-lg text-primary-100">
          Find a Bahama Mama store near you for premium CBD, kratom, vapes, and smoking accessories
        </p>
      </div>
    </div>
  )
}
