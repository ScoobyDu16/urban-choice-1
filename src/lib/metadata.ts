import type { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';
import { absoluteUrl } from './utils';

const { seo, business } = siteConfig;

export function generateBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(business.url),
    title: { default: seo.defaultTitle, template: seo.titleTemplate },
    description: seo.defaultDescription,
    keywords: seo.defaultKeywords,
    authors: [{ name: business.name, url: business.url }],
    creator: business.name,
    publisher: business.name,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: business.url,
      siteName: business.name,
      title: seo.defaultTitle,
      description: seo.defaultDescription,
      images: [
        { url: absoluteUrl(seo.defaultOgImage), width: 1200, height: 630, alt: business.name },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: seo.twitterHandle,
      creator: seo.twitterHandle,
      title: seo.defaultTitle,
      description: seo.defaultDescription,
      images: [absoluteUrl(seo.defaultOgImage)],
    },
    verification: {
      google: siteConfig.integrations.googleSearchConsoleVerification,
    },
    alternates: { canonical: business.url },
  };
}

interface PageMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage,
  ogType = 'website',
  noindex = false,
}: PageMetadataOptions): Metadata {
  const canonical = canonicalPath ? absoluteUrl(canonicalPath) : undefined;
  const image = ogImage ? absoluteUrl(ogImage) : absoluteUrl(seo.defaultOgImage);

  return {
    title,
    description,
    keywords: keywords || seo.defaultKeywords,
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      type: ogType === 'product' ? 'website' : (ogType as 'website' | 'article'),
      title,
      description,
      url: canonical,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
