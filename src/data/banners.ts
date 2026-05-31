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
      url: '/banners/building-materials-desktop-3.png',
      alt: 'Modern construction site with building materials in Dubai',
      width: 1600,
      height: 900,
    },
    mobileImage: {
      url: '/banners/building-materials-mobile-1.png',
      alt: 'Modern construction site with building materials in Dubai',
      width: 768,
      height: 900,
    },
    active: true,
  },
  {
    id: 'banner-002',
    title: 'Fasteners for Every Fix — Bolts, Screws & Anchors',
    subtitle:
      'Anchor bolts, hex bolts, self-drilling screws, chemical anchors, rivets, and more — a comprehensive range of fasteners for structural, mechanical, and fit-out applications across the UAE.',
    ctaText: 'Shop Fasteners',
    ctaUrl: '/categories/fasteners',
    secondaryCtaText: 'Get a Quote',
    secondaryCtaUrl: '/contact',
    image: {
      url: '/banners/fasteners-desktop.png',
      alt: 'Fasteners — bolts, screws, and anchors for construction in Dubai',
      width: 1600,
      height: 900,
    },
    mobileImage: {
      url: '/banners/fasteners-mobile.png',
      alt: 'Fasteners — bolts, screws, and anchors for construction',
      width: 768,
      height: 900,
    },
    active: true,
  },
  {
    id: 'banner-003',
    title: 'Complete Safety & PPE Supplies in Dubai',
    subtitle:
      'Helmets, harnesses, safety shoes, reflective vests, respirators, and more — quality personal protective equipment for construction sites and industrial workplaces across the UAE.',
    ctaText: 'View Safety Items',
    ctaUrl: '/categories/safety-items',
    secondaryCtaText: 'Get a Quote',
    secondaryCtaUrl: '/contact',
    image: {
      url: '/banners/safety-desktop.png',
      alt: 'Safety equipment and PPE for construction sites in Dubai',
      width: 1600,
      height: 900,
    },
    mobileImage: {
      url: '/banners/safety-mobile.png',
      alt: 'Safety equipment and PPE',
      width: 768,
      height: 900,
    },
    active: true,
  },
];

export const getActiveBanners = (): Banner[] => banners.filter((b) => b.active);

/** @deprecated Use getActiveBanners() for the carousel */
export const getActiveBanner = (): Banner | undefined => banners.find((b) => b.active);
