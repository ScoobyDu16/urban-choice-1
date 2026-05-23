import type { Banner } from '@/types';

export const banners: Banner[] = [
  {
    id: 'banner-001',
    title: 'Your Trusted Building Materials Partner in Dubai',
    subtitle:
      'Premium paints, tiles, sanitary ware, electrical items, plumbing supplies, and hardware tools — all under one roof. Serving contractors and developers across the UAE.',
    ctaText: 'Explore Products',
    ctaUrl: '/products',
    secondaryCtaText: 'Chat on WhatsApp',
    secondaryCtaUrl: '/contact',
    image: {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85',
      alt: 'Modern construction site with building materials in Dubai',
      width: 1600,
      height: 900,
    },
    mobileImage: {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=768&q=80',
      alt: 'Modern construction site with building materials in Dubai',
      width: 768,
      height: 900,
    },
    active: true,
  },
  {
    id: 'banner-002',
    title: 'Premium Tiles & Flooring for Every Project',
    subtitle:
      'From classic ceramics to large-format porcelain slabs and natural stone — discover hundreds of tile designs for residential and commercial spaces across Dubai.',
    ctaText: 'View Tiles',
    ctaUrl: '/categories/tiles-flooring',
    secondaryCtaText: 'Get a Quote',
    secondaryCtaUrl: '/contact',
    image: {
      url: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=1600&q=85',
      alt: 'Premium porcelain tiles and flooring in a modern Dubai interior',
      width: 1600,
      height: 900,
    },
    mobileImage: {
      url: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=768&q=80',
      alt: 'Premium tiles and flooring',
      width: 768,
      height: 900,
    },
    active: true,
  },
  {
    id: 'banner-003',
    title: 'Top Paint Brands. Expert Advice.',
    subtitle:
      'Jotun, Dulux, Sigma, and more — we stock the full range of interior and exterior paints engineered for the UAE climate. Custom colour mixing available in-store.',
    ctaText: 'Shop Paints',
    ctaUrl: '/categories/paint-finishes',
    secondaryCtaText: 'Contact Us',
    secondaryCtaUrl: '/contact',
    image: {
      url: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1600&q=85',
      alt: 'Paint cans and brushes for interior and exterior painting in Dubai',
      width: 1600,
      height: 900,
    },
    mobileImage: {
      url: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=768&q=80',
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
