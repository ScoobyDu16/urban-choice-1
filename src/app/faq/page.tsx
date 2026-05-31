import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import FaqAccordion from '@/components/sections/FaqAccordion';
import { faqs } from '@/data/faqs';
import { generatePageMetadata } from '@/lib/metadata';
import { generateFaqSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about Urban Choice products, ordering, shipping, returns, and more.',
  keywords: ['FAQ', 'frequently asked questions', 'help', 'ordering', 'shipping', 'returns'],
  canonicalPath: '/faq',
});

const grouped = faqs.reduce<Record<string, typeof faqs>>((acc, faq) => {
  const key = faq.category || 'general';
  acc[key] = acc[key] || [];
  acc[key].push(faq);
  return acc;
}, {});

const categoryLabels: Record<string, string> = {
  ordering: 'Ordering',
  pricing: 'Pricing & Wholesale',
  delivery: 'Delivery',
  shipping: 'Shipping & Delivery',
  returns: 'Returns & Exchanges',
  products: 'Products',
  services: 'Services',
  general: 'General',
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={generateFaqSchema(faqs)} id="faq-page-schema" />

      <div className="container mx-auto max-w-3xl px-4 py-8">
        <Breadcrumb items={[{ label: 'FAQ', href: '/faq' }]} />

        <div className="mt-4 mb-10">
          <p
            className="mb-1 text-sm font-bold tracking-widest uppercase"
            style={{ color: 'hsl(var(--color-primary))' }}
          >
            FAQ
          </p>
          <h1 className="text-3xl font-extrabold sm:text-4xl">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mt-3">
            Can&apos;t find your answer?{' '}
            <a href="/contact" className="text-primary hover:underline">
              Contact our team
            </a>{' '}
            and we&apos;ll help right away.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(grouped).map(([category, items]) => (
            <section key={category} aria-labelledby={`faq-${category}`}>
              <h2 id={`faq-${category}`} className="mb-4 border-b pb-2 text-xl font-bold">
                {categoryLabels[category] || category}
              </h2>
              <FaqAccordion faqs={items} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
