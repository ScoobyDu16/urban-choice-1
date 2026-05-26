import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, categories } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ProductsGrid from '@/components/sections/ProductsGrid';
import JsonLd from '@/components/seo/JsonLd';
import { generateCategorySchema, generateBreadcrumbSchema } from '@/lib/schema';
import { generatePageMetadata } from '@/lib/metadata';
import CategoryViewTracker from '@/components/sections/CategoryViewTracker';

export const revalidate = 3600;

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return generatePageMetadata({
    title: category.seo.title,
    description: category.seo.description,
    keywords: category.seo.keywords,
    canonicalPath: `/categories/${category.slug}`,
    ogImage: category.image.url,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.slug);

  const breadcrumbItems = [
    { label: 'Categories', href: '/categories' },
    { label: category.name, href: `/categories/${category.slug}` },
  ];

  return (
    <>
      <CategoryViewTracker categoryId={category.id} categoryName={category.name} />
      <JsonLd data={generateCategorySchema(category)} id="category-schema" />
      <JsonLd
        data={generateBreadcrumbSchema([{ label: 'Home', href: '/' }, ...breadcrumbItems])}
        id="breadcrumb-schema"
      />

      {/* Category Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.image.url}
            alt={category.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/40" />
          <div className="bg-primary absolute top-0 left-0 h-1 w-full" />
        </div>
        <div className="relative container mx-auto max-w-7xl px-4 py-20">
          <Breadcrumb items={breadcrumbItems} light />
          <div className="mt-4 max-w-2xl">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{category.name}</h1>
            <div className="bg-primary mt-3 h-1 w-12 rounded-full" />
            <p className="mt-4 text-lg text-slate-300">{category.description}</p>
            {category.subcategories && (
              <div className="mt-6 flex flex-wrap gap-2">
                {category.subcategories.map((sub) => (
                  <span
                    key={sub.id}
                    className="rounded-full px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.18)',
                      border: '1px solid rgba(255,255,255,0.25)',
                    }}
                  >
                    {sub.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-10">
        {categoryProducts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No products found in this category yet.</p>
          </div>
        ) : (
          <ProductsGrid products={categoryProducts} category={category} />
        )}
      </div>
    </>
  );
}
