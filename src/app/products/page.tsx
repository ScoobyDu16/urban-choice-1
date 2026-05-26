import React from 'react';
import type { Metadata } from 'next';
import { products } from '@/data/products';
import ProductsGrid from '@/components/sections/ProductsGrid';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { generatePageMetadata } from '@/lib/metadata';

export const revalidate = 3600;

export const metadata: Metadata = generatePageMetadata({
  title: 'All Products',
  description:
    'Browse our complete catalogue of 100+ building materials across safety items, sanitary ware, hardware, electrical supplies, plumbing, paints, power tools, fasteners, and packaging — all available in Dubai, UAE.',
  keywords: [
    'building materials Dubai',
    'construction supplies UAE',
    'hardware tools Dubai',
    'safety equipment UAE',
    'urban choice products',
  ],
  canonicalPath: '/products',
});

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const initialSearchQuery = q ?? '';

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Products', href: '/products' }]} />

      <div className="mt-4 mb-10">
        <p
          className="mb-1 text-sm font-bold tracking-widest uppercase"
          style={{ color: 'hsl(var(--color-primary))' }}
        >
          Catalogue
        </p>
        <h1 className="text-3xl font-extrabold sm:text-4xl">All Products</h1>
        <p className="text-muted-foreground mt-3">
          {products.length} products across {new Set(products.map((p) => p.category)).size}{' '}
          categories
        </p>
      </div>

      <ProductsGrid products={products} initialSearchQuery={initialSearchQuery} />
    </div>
  );
}
