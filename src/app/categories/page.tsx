import React from 'react';
import type { Metadata } from 'next';
import { categories } from '@/data/categories';
import CategoryCard from '@/components/sections/CategoryCard';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { generatePageMetadata } from '@/lib/metadata';

export const revalidate = 3600;

export const metadata: Metadata = generatePageMetadata({
  title: 'Product Categories',
  description:
    'Browse all product categories at Urban Choice. Shop home & living, kitchen, office, health & wellness, outdoor, and tech products.',
  keywords: [
    'product categories',
    'home products',
    'office products',
    'kitchen products',
    'wellness products',
  ],
  canonicalPath: '/categories',
});

export default function CategoriesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: 'Categories', href: '/categories' }]} />

      <div className="mt-4 mb-10">
        <p
          className="mb-1 text-sm font-bold tracking-widest uppercase"
          style={{ color: 'hsl(var(--color-primary))' }}
        >
          Browse
        </p>
        <h1 className="text-3xl font-extrabold sm:text-4xl">Product Categories</h1>
        <p className="text-muted-foreground mt-3">
          Browse {categories.length} categories to find exactly what you&apos;re looking for.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} category={cat} priority={i < 3} />
        ))}
      </div>
    </div>
  );
}
