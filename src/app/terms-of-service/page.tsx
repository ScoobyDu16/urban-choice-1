import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms of Service',
  description: `Terms of Service for ${siteConfig.business.name}. Please read these terms carefully before using our website.`,
  canonicalPath: '/terms-of-service',
});

export default function TermsPage() {
  const { business } = siteConfig;
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Terms of Service', href: '/terms-of-service' }]} />
      <div className="prose prose-sm dark:prose-invert mt-8 max-w-none">
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground text-sm">Last updated: January 2025</p>
        <p>
          By accessing and using {business.url}, you accept and agree to be bound by these Terms of
          Service. If you do not agree, please do not use our website.
        </p>
        <h2>Use of Site</h2>
        <p>
          This website is provided for informational and catalogue purposes only. All product
          inquiries are subject to availability and confirmation by our team.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, images, logos, and design, is the property of{' '}
          {business.legalName} and protected by applicable copyright laws.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          {business.legalName} shall not be liable for any indirect, incidental, or consequential
          damages arising from use of this website or reliance on information contained herein.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Contact us at{' '}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </div>
    </div>
  );
}
