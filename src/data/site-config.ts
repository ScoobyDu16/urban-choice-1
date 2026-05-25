import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  business: {
    name: 'Urban Choice Building Materials Trading',
    legalName: 'Urban Choice Building Materials Trading',
    tagline: 'Your Trusted Building Materials Partner in Dubai',
    description:
      'Urban Choice is a leading building materials supplier in Dubai, UAE. We supply high-quality construction materials across 10 categories — safety items, sanitary ware, hardware, electrical supplies, plumbing, building materials, fasteners, power tools, paints, and packaging materials. With years of experience in the industry, we have built a reputation for reliability, quality products, and exceptional customer service.',
    logo: '/images/logo.svg',
    favicon: '/favicon.ico',
    url: 'https://urbanchoicebmt.com',
    email: 'urbanchoicebmt@gmail.com',
    phone: '04 332 6885',
    mobile: '04 335 8298',
    whatsapp: '971545868790',
    address: {
      street: 'Dubai',
      city: 'Dubai',
      postalBox: 'P.O Box: 379719',
      country: 'United Arab Emirates',
      countryCode: 'AE',
    },
    coordinates: {
      lat: 25.2712150527143,
      lng: 55.29299325356788,
    },
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14431.92513334147!2d55.29299325356788!3d25.2712150527143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab43e34dd6e98fd3%3A0x59916d73e1db39e2!2sUrban%20Choice%20Building%20Materials%20Trading%20Co%20LLC!5e0!3m2!1sen!2sin!4v1779541239525!5m2!1sen!2sin',
    googleMapsLink:
      'https://www.google.com/maps/place/Urban+Choice+Building+Materials+Trading+Co+LLC/@25.2712150527143,55.29299325356788,15z',
    socialLinks: {
      facebook: 'https://facebook.com/urbanchoicebmt',
      instagram: 'https://instagram.com/urbanchoicebmt',
    },
    businessHours: [{ days: 'Monday – Saturday', hours: '8:30 AM – 6:00 PM' }],
    founded: '2015',
  },
  seo: {
    defaultTitle: 'Urban Choice Building Materials Trading – Dubai, UAE',
    titleTemplate: '%s | Urban Choice Building Materials',
    defaultDescription:
      'Urban Choice is a trusted building materials supplier in Dubai, UAE. We supply safety items, sanitary ware, hardware, electrical supplies, plumbing materials, building materials, fasteners, power tools, paints, and packaging materials.',
    defaultKeywords: [
      'building materials Dubai',
      'construction materials UAE',
      'safety items Dubai',
      'sanitary ware Dubai',
      'hardware tools Dubai',
      'electrical supplies UAE',
      'plumbing supplies UAE',
      'power tools Dubai',
      'urban choice Dubai',
    ],
    defaultOgImage: '/images/og-default.jpg',
  },
  analytics: {
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX',
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX',
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  },
  integrations: {
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    googleAdsConversionId: process.env.NEXT_PUBLIC_GADS_CONVERSION_ID,
    googleAdsConversionLabel: process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL,
    googleSearchConsoleVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  features: {
    darkMode: true,
    blog: false,
    pricing: false,
    reviews: true,
    inquiry: true,
    whatsapp: true,
    callToAction: true,
    showAvailability: false,
    showViewDetailsCta: false,
  },
};
