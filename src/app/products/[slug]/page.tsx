import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone, Package, ChevronRight } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, getProductSlugs } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import { siteConfig } from '@/data/site-config';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ProductCard from '@/components/sections/ProductCard';
import FaqAccordion from '@/components/sections/FaqAccordion';
import InquiryForm from '@/components/sections/InquiryForm';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import JsonLd from '@/components/seo/JsonLd';
import { generateProductSchema, generateBreadcrumbSchema, generateFaqSchema } from '@/lib/schema';
import { generatePageMetadata } from '@/lib/metadata';
import { generateWhatsAppUrl, generateTelUrl } from '@/lib/utils';
import { AVAILABILITY_LABELS, AVAILABILITY_COLORS } from '@/constants';
import { cn } from '@/lib/utils';

export const revalidate = 3600;

export async function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return generatePageMetadata({
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    canonicalPath: `/products/${product.slug}`,
    ogImage: product.images[0]?.url,
    ogType: 'product',
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const relatedProducts = getRelatedProducts(product, 4);
  const { business } = siteConfig;

  const breadcrumbItems = [
    { label: 'Products', href: '/products' },
    ...(category ? [{ label: category.name, href: `/categories/${category.slug}` }] : []),
    { label: product.name, href: `/products/${product.slug}` },
  ];

  const availLabel = AVAILABILITY_LABELS[product.availability] || product.availability;
  const availColor = AVAILABILITY_COLORS[product.availability] || '';

  const schemas = [
    generateProductSchema(product),
    generateBreadcrumbSchema([{ label: 'Home', href: '/' }, ...breadcrumbItems]),
    ...(product.faqs && product.faqs.length > 0 ? [generateFaqSchema(product.faqs)] : []),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <JsonLd key={i} data={schema} id={`product-schema-${i}`} />
      ))}

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <Breadcrumb items={breadcrumbItems.slice(0, -1)} />

        <div className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Images */}
          <div className="space-y-4">
            <div className="bg-muted relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={product.images[0]?.url || product.thumbnail.url}
                alt={product.images[0]?.alt || product.thumbnail.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {product.featured && (
                <span
                  className="absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-semibold text-white shadow-md"
                  style={{ backgroundColor: 'hsl(var(--color-primary))' }}
                >
                  ★ Featured
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    className="bg-muted relative aspect-square overflow-hidden rounded-lg"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            {/* Category */}
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="text-muted-foreground hover:text-primary flex w-fit items-center gap-1 text-sm"
              >
                {category.name}
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            )}

            <div>
              <h1 className="text-3xl leading-tight font-bold">{product.name}</h1>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Availability */}
            {siteConfig.features.showAvailability && (
              <div className="flex items-center gap-3">
                <Package className="text-muted-foreground h-4 w-4" />
                <span className={cn('font-medium', availColor)}>{availLabel}</span>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {(product.tags ?? []).map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            {siteConfig.features.inquiry && (
              <div className="bg-card space-y-4 rounded-xl border p-6">
                <h2 className="font-semibold">Interested in this product?</h2>
                <p className="text-muted-foreground text-sm">
                  Get in touch for pricing, bulk orders, or custom requirements.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="whatsapp" className="flex-1">
                    <a
                      href={generateWhatsAppUrl(
                        business.whatsapp,
                        `Hi, I'm interested in: ${product.name}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Inquiry
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={generateTelUrl(business.phone)}>
                      <Phone className="h-4 w-4" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Description & Specs */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            {/* Description */}
            <section aria-labelledby="description-heading">
              <h2 id="description-heading" className="mb-4 text-2xl font-bold">
                Product Description
              </h2>
              <div className="prose prose-sm text-muted-foreground max-w-none">
                {(product.fullDescription ?? '').split('\n\n').map((para, i) => (
                  <p key={i} className="mb-4 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Specifications */}
            {(product.specifications ?? []).length > 0 && (
              <section aria-labelledby="specs-heading">
                <h2 id="specs-heading" className="mb-4 text-2xl font-bold">
                  Specifications
                </h2>
                <div className="overflow-hidden rounded-xl border">
                  <table className="w-full text-sm" aria-label="Product specifications">
                    <tbody>
                      {(product.specifications ?? []).map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                          <td className="w-2/5 px-4 py-3 font-medium">{spec.label}</td>
                          <td className="text-muted-foreground px-4 py-3">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Product FAQs */}
            {(product.faqs ?? []).length > 0 && (
              <section aria-labelledby="product-faq-heading">
                <h2 id="product-faq-heading" className="mb-4 text-2xl font-bold">
                  Questions & Answers
                </h2>
                <FaqAccordion faqs={product.faqs ?? []} />
              </section>
            )}
          </div>

          {/* Inquiry Sidebar */}
          {siteConfig.features.inquiry && (
            <aside className="lg:col-span-1">
              <div className="bg-card sticky top-24 rounded-xl border p-6">
                <h2 className="mb-1 text-lg font-bold">Send an Inquiry</h2>
                <p className="text-muted-foreground mb-6 text-sm">
                  We respond within 2 business hours.
                </p>
                <InquiryForm productName={product.name} />
              </div>
            </aside>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20" aria-labelledby="related-heading">
            <h2 id="related-heading" className="mb-8 text-2xl font-bold">
              Related Products
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
