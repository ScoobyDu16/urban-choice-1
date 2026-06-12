import type { SiteConfig } from '@/types';

/* ── Social link visibility toggles ──────────────────────────────────────────
   Set to true to show the platform in the footer / header.
   Set to false to hide it entirely.
   ────────────────────────────────────────────────────────────────────────── */
const SHOW_FACEBOOK = false;
const SHOW_INSTAGRAM = false;

export const siteConfig: SiteConfig = {
  business: {
    name: 'Urban Choice Building Materials Trading',
    legalName: 'Urban Choice Building Materials Trading',
    tagline: 'Your Trusted Building Materials Partner in Dubai',
    description:
      'Urban Choice is a leading building materials supplier in Dubai, UAE. We supply high-quality construction materials across a wide range of categories — safety items, sanitary ware, hardware, electrical supplies, plumbing, building materials, fasteners, power tools, paints, and packaging materials. We have built a reputation for reliability, quality products, and exceptional customer service.',
    logo: '/images/logo.svg',
    favicon: '/favicon.ico',
    url: 'https://www.urbanchoice.ae',
    email: 'urbanchoicebmt@gmail.com',
    phone: '04 332 6885',
    phone2: '04 335 8298',
    mobile: '+971 54 586 8790',
    whatsapp: '971545868790',
    address: {
      street: 'Saeed Bin Thani Building, 76 31D St, Naif, Deira',
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
      facebook: SHOW_FACEBOOK ? 'https://facebook.com/urbanchoicebmt' : undefined,
      instagram: SHOW_INSTAGRAM ? 'https://instagram.com/urbanchoicebmt' : undefined,
    },
    businessHours: [{ days: 'Monday – Saturday', hours: '8:30 AM – 6:00 PM' }],
    founded: '2024',
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
    defaultOgImage: '/images/og-default.png',
  },
  analytics: {
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX',
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX',
  },
  integrations: {
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
