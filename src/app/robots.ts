import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.business.url;
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
