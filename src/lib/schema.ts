import type { Product, Category, BreadcrumbItem } from '@/types';
import { siteConfig } from '@/data/site-config';
import { absoluteUrl } from './utils';

const { business } = siteConfig;

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    logo: absoluteUrl(business.logo),
    description: business.description,
    email: business.email,
    telephone: business.phone,
    foundingDate: business.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      ...(business.address.state ? { addressRegion: business.address.state } : {}),
      ...(business.address.postalCode ? { postalCode: business.address.postalCode } : {}),
      addressCountry: business.address.countryCode,
    },
    sameAs: Object.values(business.socialLinks).filter(Boolean),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    image: absoluteUrl(siteConfig.seo.defaultOgImage),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      ...(business.address.state ? { addressRegion: business.address.state } : {}),
      ...(business.address.postalCode ? { postalCode: business.address.postalCode } : {}),
      addressCountry: business.address.countryCode,
    },
    geo: business.coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: business.coordinates.lat,
          longitude: business.coordinates.lng,
        }
      : undefined,
    openingHoursSpecification: business.businessHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.hours.split('–')[0]?.trim(),
      closes: h.hours.split('–')[1]?.trim(),
    })),
  };
}

export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.schema?.name ?? product.name,
    description: product.schema?.description ?? product.shortDescription,
    image: product.images.map((i) => i.url),
    sku: product.schema?.sku,
    brand: {
      '@type': 'Brand',
      name: product.schema?.brand || business.name,
    },
    offers: {
      '@type': 'Offer',
      availability:
        product.availability === 'in_stock'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      price: product.price ?? undefined,
      priceCurrency: product.currency || 'USD',
      seller: { '@type': 'Organization', name: business.name },
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateCategorySchema(category: Category) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    url: absoluteUrl(`/categories/${category.slug}`),
    image: category.image.url,
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: business.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${business.url}/products?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
