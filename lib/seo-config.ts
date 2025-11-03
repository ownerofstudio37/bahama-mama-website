// Local Business SEO Configuration
export const businessInfo = {
  name: 'Bahama Mama',
  legalName: 'Bahama Mama',
  description: 'Premier CBD and alternative products retailer in Texas. Offering over 3,500 different products including CBD, kratom, vapes, and smoking accessories.',
  address: {
    streetAddress: '[ADDRESS TO BE PROVIDED]',
    addressLocality: '[CITY TO BE PROVIDED]',
    addressRegion: 'TX',
    postalCode: '[ZIP TO BE PROVIDED]',
    addressCountry: 'US',
    fullAddress: '[FULL ADDRESS TO BE PROVIDED]'
  },
  contact: {
    phone: '[PHONE TO BE PROVIDED]',
    email: '[EMAIL TO BE PROVIDED]',
    website: 'https://bahama-mama.com'
  },
  geo: {
    latitude: 30.1647,  // Approximate coordinates for Pinehurst, TX
    longitude: -95.4677
  },
  serviceAreas: [
    'Houston',
    'Dallas', 
    'Austin',
    'Montrose',
    'Texas'
  ],
  services: [
    'CBD Products',
    'CBD Pet Products', 
    'Vapes and Disposable Vapes',
    'Vape Mods and Devices',
    'Kratom Products',
    'Hookah Products',
    'Water Pipes',
    'Smoking Accessories'
  ],
  socialMedia: {
    facebook: 'https://www.facebook.com/Bahamamontrose',
    instagram: 'https://www.instagram.com/bahama.mama.montrose',
    twitter: 'https://www.tiktok.com/@bahamamamamontrose'
  },
  businessHours: {
    monday: '9:00-18:00',
    tuesday: '9:00-18:00',
    wednesday: '9:00-18:00',
    thursday: '9:00-18:00',
    friday: '9:00-18:00',
    saturday: '10:00-16:00',
    sunday: 'Closed'
  }
}

// Generate structured data for local business
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': businessInfo.contact.website,
    name: businessInfo.legalName,
    alternateName: businessInfo.name,
    description: businessInfo.description,
    url: businessInfo.contact.website,
    telephone: businessInfo.contact.phone,
    email: businessInfo.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude
    },
    areaServed: businessInfo.serviceAreas.map(area => ({
      '@type': 'City',
      name: area
    })),
    serviceType: businessInfo.services,
    openingHours: Object.entries(businessInfo.businessHours).map(([day, hours]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
      opens: hours === 'Closed' ? null : hours.split('-')[0],
      closes: hours === 'Closed' ? null : hours.split('-')[1]
    })).filter(hours => hours.opens),
    sameAs: Object.values(businessInfo.socialMedia),
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Check, PayPal',
    currenciesAccepted: 'USD'
  }
}

// Generate service-specific structured data
export function generateServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: businessInfo.legalName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessInfo.address.streetAddress,
        addressLocality: businessInfo.address.addressLocality,
        addressRegion: businessInfo.address.addressRegion,
        postalCode: businessInfo.address.postalCode,
        addressCountry: businessInfo.address.addressCountry
      },
      telephone: businessInfo.contact.phone,
      url: businessInfo.contact.website
    },
    areaServed: businessInfo.serviceAreas
  }
}