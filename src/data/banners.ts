import type { Banner } from '@/types';

export const banners: Banner[] = [
  {
    id: 'banner-001',
    title: 'Your Trusted Building Materials Partner in Dubai',
    subtitle:
      'Safety items, sanitary ware, hardware, electrical supplies, plumbing, building materials, fasteners, power tools, paints, and packaging — all under one roof. Serving contractors and developers across the UAE.',
    ctaText: 'Explore Products',
    ctaUrl: '/products',
    secondaryCtaText: 'Chat on WhatsApp',
    secondaryCtaUrl: '/contact',
    image: {
      url: '/banners/warehouse-site.png',
      alt: 'Modern construction site with building materials in Dubai',
      width: 1600,
      height: 900,
    },
    mobileImage: {
      url: '/banners/warehouse-site.png',
      alt: 'Modern construction site with building materials in Dubai',
      width: 768,
      height: 900,
    },
    active: true,
  },
  {
    id: 'banner-002',
    title: 'Complete Safety & PPE Supplies in Dubai',
    subtitle:
      'Helmets, harnesses, safety shoes, reflective vests, respirators, and more — quality personal protective equipment for construction sites and industrial workplaces across the UAE.',
    ctaText: 'View Safety Items',
    ctaUrl: '/categories/safety-items',
    secondaryCtaText: 'Get a Quote',
    secondaryCtaUrl: '/contact',
    image: {
      url: '/banners/safety-equipment.png',
      alt: 'Safety equipment and PPE for construction sites in Dubai',
      width: 1600,
      height: 900,
    },
    mobileImage: {
      url: '/banners/safety-equipment.png',
      alt: 'Safety equipment and PPE',
      width: 768,
      height: 900,
    },
    active: true,
  },
  {
    id: 'banner-003',
    title: 'Paints, Tools & Coatings for Every Surface',
    subtitle:
      'Emulsion paints, enamel paints, waterproof coatings, primers, rollers, brushes, and spray machines — everything you need for a professional finish on any project.',
    ctaText: 'Shop Paints & Tools',
    ctaUrl: '/categories/paints-paint-tools',
    secondaryCtaText: 'Contact Us',
    secondaryCtaUrl: '/contact',
    image: {
      url: '/banners/paint-cans.png',
      alt: 'Paint cans and brushes for interior and exterior painting in Dubai',
      width: 1600,
      height: 900,
    },
    mobileImage: {
      url: '/banners/paint-cans.png',
      alt: 'Premium interior and exterior paints',
      width: 768,
      height: 900,
    },
    active: true,
  },
];

export const getActiveBanners = (): Banner[] => banners.filter((b) => b.active);

/** @deprecated Use getActiveBanners() for the carousel */
export const getActiveBanner = (): Banner | undefined => banners.find((b) => b.active);
