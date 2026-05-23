import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: `Privacy Policy for ${siteConfig.business.name}. Learn how we collect, use, and protect your personal information.`,
  canonicalPath: '/privacy-policy',
  noindex: false,
});

export default function PrivacyPolicyPage() {
  const { business } = siteConfig;
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
      <div className="prose prose-sm dark:prose-invert mt-8 max-w-none">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground text-sm">Last updated: January 2025</p>
        <p>
          {business.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates{' '}
          {business.url}. This page informs you of our policies regarding the collection, use, and
          disclosure of personal data when you use our service.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly (name, email, phone via inquiry forms), usage
          data via analytics tools, and technical data like cookies and log files.
        </p>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries</li>
          <li>To improve our website and services</li>
          <li>To send you relevant updates (with your consent)</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h2>Google Analytics & Advertising</h2>
        <p>
          We use Google Analytics 4 and Google Tag Manager to understand how visitors use our site.
          This data is anonymised and aggregated. We may also use Google Ads for remarketing
          purposes. You can opt out at{' '}
          <a href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</a>.
        </p>
        <h2>Contact Us</h2>
        <p>
          For privacy questions, email us at{' '}
          <a href={`mailto:${business.email}`}>{business.email}</a> or write to{' '}
          {business.address.city}, {business.address.country}
          {business.address.postalBox ? ` (${business.address.postalBox})` : ''}.
        </p>
      </div>
    </div>
  );
}
