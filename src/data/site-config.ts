import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  business: {
    name: 'Urban Choice Building Materials Trading',
    legalName: 'Urban Choice Building Materials Trading',
    tagline: 'Your Trusted Building Materials Partner in Dubai',
    description:
      'Urban Choice is a leading building materials supplier in Dubai, UAE. We specialize in providing high-quality construction materials including paint, sanitary ware, electrical items, hardware tools, plumbing supplies, and tiles. With years of experience in the industry, we have built a reputation for reliability, quality products, and exceptional customer service.',
    logo: '/images/logo.svg',
    favicon: '/favicon.ico',
    url: 'https://urbanchoicebmt.com',
    // email: 'urbanchoicebmt@gmail.com',
    email: 'sandhuamar07@gmail.com',
    phone: '04 335 8298',
    mobile: '+971 54 586 8790',
    whatsapp: '971545868790',
    address: {
      street: 'Dubai',
      city: 'Dubai',
      postalBox: 'P.O Box: 379719',
      country: 'United Arab Emirates',
      countryCode: 'AE',
    },
    coordinates: {
      lat: 25.2048,
      lng: 55.2708,
    },
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=Urban+Choice+Building+Materials+Trading+Dubai+UAE&output=embed&z=15',
    googleMapsLink:
      'https://www.google.com/maps/search/?api=1&query=Urban+Choice+Building+Materials+Trading+Dubai+UAE',
    socialLinks: {
      facebook: 'https://facebook.com/urbanchoicebmt',
      instagram: 'https://instagram.com/urbanchoicebmt',
    },
    businessHours: [
      { days: 'Saturday – Thursday', hours: '9:00 AM – 9:00 PM' },
      { days: 'Friday', hours: '2:00 PM – 9:00 PM' },
    ],
    founded: '2015',
  },
  seo: {
    defaultTitle: 'Urban Choice Building Materials Trading – Dubai, UAE',
    titleTemplate: '%s | Urban Choice Building Materials',
    defaultDescription:
      'Urban Choice is a trusted building materials supplier in Dubai, UAE. We supply paint, sanitary ware, electrical items, hardware tools, plumbing supplies, and tiles.',
    defaultKeywords: [
      'building materials Dubai',
      'construction materials UAE',
      'paint supplier Dubai',
      'sanitary ware Dubai',
      'tiles Dubai',
      'hardware tools Dubai',
      'plumbing supplies UAE',
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
    web3formsApiKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY',
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
