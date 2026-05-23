export interface ProductImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductSEO {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

export interface ProductSchema {
  name: string;
  description: string;
  brand?: string;
  sku?: string;
  gtin?: string;
}

export type AvailabilityStatus = 'in_stock' | 'out_of_stock' | 'pre_order' | 'discontinued';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  images: ProductImage[];
  thumbnail: ProductImage;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  seo: ProductSEO;
  price?: number;
  priceUnit?: string;
  currency?: string;
  availability: AvailabilityStatus;
  featured: boolean;
  specifications: ProductSpecification[];
  faqs: ProductFAQ[];
  schema: ProductSchema;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: ProductImage;
  parentSlug?: string;
  subcategories?: SubCategory[];
  seo: ProductSEO;
  featured: boolean;
  productCount?: number;
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  role?: string;
  content: string;
  rating: number;
  avatar?: string;
  featured: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaUrl: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  image: ProductImage;
  mobileImage?: ProductImage;
  active: boolean;
}

export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  logo: string;
  favicon: string;
  url: string;
  email: string;
  phone: string;
  mobile?: string;
  whatsapp: string;
  address: {
    street: string;
    city: string;
    state?: string;
    postalCode?: string;
    postalBox?: string;
    country: string;
    countryCode: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
  googleMapsEmbedUrl?: string;
  googleMapsLink?: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    pinterest?: string;
  };
  businessHours: {
    days: string;
    hours: string;
  }[];
  founded: string;
}

export interface SiteConfig {
  business: BusinessInfo;
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    defaultKeywords: string[];
    defaultOgImage: string;
    twitterHandle?: string;
  };
  analytics: {
    ga4MeasurementId: string;
    gtmId: string;
    sentryDsn: string;
  };
  integrations: {
    googleMapsApiKey?: string;
    web3formsApiKey: string;
    googleAdsConversionId?: string;
    googleAdsConversionLabel?: string;
    googleSearchConsoleVerification?: string;
  };
  features: {
    darkMode: boolean;
    blog: boolean;
    pricing: boolean;
    reviews: boolean;
    inquiry: boolean;
    whatsapp: boolean;
    callToAction: boolean;
    /** Show the availability status (In Stock / Out of Stock) on product cards */
    showAvailability: boolean;
    /** Show the "View Details" CTA button on product cards */
    showViewDetailsCta: boolean;
  };
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface SearchResult {
  products: Product[];
  categories: Category[];
  total: number;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  basePath: string;
}
