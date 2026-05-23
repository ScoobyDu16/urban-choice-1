import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Users,
  Building2,
  Package,
} from 'lucide-react';
import HeroCarousel from '@/components/sections/HeroCarousel';
import ProductsCarousel from '@/components/sections/ProductsCarousel';
import CategoryCard from '@/components/sections/CategoryCard';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import FaqAccordion from '@/components/sections/FaqAccordion';
import { Button } from '@/components/ui/button';
import { getActiveBanners } from '@/data/banners';
import { getFeaturedProducts } from '@/data/products';
import { getFeaturedCategories } from '@/data/categories';
import { getFeaturedTestimonials } from '@/data/testimonials';
import { faqs } from '@/data/faqs';
import { siteConfig } from '@/data/site-config';
import JsonLd from '@/components/seo/JsonLd';
import { generateFaqSchema, generateLocalBusinessSchema } from '@/lib/schema';

export const revalidate = 3600;

const features = [
  {
    icon: BadgeCheck,
    title: 'Trusted Brands',
    description: 'Jotun, Dulux, Grohe, RAK Ceramics, Legrand, Philips, Bosch & more.',
  },
  {
    icon: Truck,
    title: 'UAE-Wide Delivery',
    description: 'Fast delivery across Dubai, Sharjah, Abu Dhabi and all emirates.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: 'All products meet Dubai Municipality and UAE standards.',
  },
  {
    icon: PhoneCall,
    title: 'Expert Support',
    description: 'Our team responds to every inquiry within 2 business hours.',
  },
];

const stats = [
  { icon: Building2, value: '10+', label: 'Years in Business' },
  { icon: Users, value: '5,000+', label: 'Projects Completed' },
  { icon: Package, value: '500+', label: 'Products in Stock' },
  { icon: BadgeCheck, value: '20+', label: 'Premium Brands' },
];

export default function HomePage() {
  const banners = getActiveBanners();
  const featuredProducts = getFeaturedProducts(4);
  const featuredCategories = getFeaturedCategories(3);
  const testimonials = getFeaturedTestimonials();
  const topFaqs = faqs.slice(0, 6);

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} id="local-business-schema" />
      <JsonLd data={generateFaqSchema(topFaqs)} id="faq-schema" />

      {/* ── Hero Carousel ──────────────────────────────────────────────────── */}
      <HeroCarousel banners={banners} />

      {/* ── Features / Trust Bar ──────────────────────────────────────────── */}
      <section className="bg-card border-y" aria-label="Why choose us">
        <div className="container mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div
                  className="bg-primary/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'hsl(var(--color-primary) / 0.10)' }}
                >
                  <f.icon className="text-primary h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{f.title}</h3>
                  <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products Carousel ────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="featured-products-heading">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p
                className="mb-1 text-sm font-bold tracking-widest uppercase"
                style={{ color: 'hsl(var(--color-primary))' }}
              >
                Top Picks
              </p>
              <h2 id="featured-products-heading" className="text-3xl font-extrabold sm:text-4xl">
                Featured Products
              </h2>
            </div>
            <Link
              href="/products"
              className="text-foreground hover:text-primary hidden items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-3 sm:inline-flex"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ProductsCarousel products={featuredProducts} />

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{ color: 'hsl(var(--color-primary))' }}
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Categories ────────────────────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="categories-heading">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Section header — matches screenshot layout */}
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p
                className="mb-1 text-sm font-bold tracking-widest uppercase"
                style={{ color: 'hsl(var(--color-primary))' }}
              >
                Categories
              </p>
              <h2 id="categories-heading" className="text-3xl font-extrabold sm:text-4xl">
                Browse by Category
              </h2>
            </div>
            <Link
              href="/categories"
              className="text-foreground hover:text-primary hidden items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-3 sm:inline-flex"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} priority={i < 3} />
            ))}
          </div>

          {/* Mobile "View All" */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{ color: 'hsl(var(--color-primary))' }}
            >
              View All Categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats / About Banner ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20" aria-label="Company statistics">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Construction site overview"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="bg-primary/90 absolute inset-0"
            style={{ backgroundColor: 'hsl(var(--color-primary) / 0.90)' }}
          />
        </div>

        <div className="relative container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-4xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Carousel ─────────────────────────────────────────── */}
      {siteConfig.features.reviews && testimonials.length > 0 && (
        <section
          className="py-20"
          style={{ backgroundColor: 'hsl(var(--color-muted) / 0.30)' }}
          aria-labelledby="testimonials-heading"
        >
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p
                className="mb-1 text-sm font-bold tracking-widest uppercase"
                style={{ color: 'hsl(var(--color-primary))' }}
              >
                Testimonials
              </p>
              <h2 id="testimonials-heading" className="text-3xl font-extrabold sm:text-4xl">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground mt-3">
                Trusted by contractors, developers, and homeowners across the UAE.
              </p>
            </div>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* ── Why Urban Choice ─────────────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="why-us-heading">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <p
                className="mb-1 text-sm font-bold tracking-widest uppercase"
                style={{ color: 'hsl(var(--color-primary))' }}
              >
                About Us
              </p>
              <h2 id="why-us-heading" className="text-3xl font-extrabold sm:text-4xl">
                Your One-Stop Building Materials Supplier in Dubai
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                {siteConfig.business.description}
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Authorised dealer for Jotun, Dulux, Grohe, RAK Ceramics, Legrand, and more',
                  'Dubai Municipality compliant products across all categories',
                  'Expert team with deep knowledge of UAE construction requirements',
                  'Competitive pricing for bulk orders and ongoing projects',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <BadgeCheck className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="default"
                  className="text-white transition-all hover:scale-105 hover:opacity-90"
                  style={{ backgroundColor: 'hsl(var(--color-primary))' }}
                >
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-border hover:border-primary hover:text-primary transition-all"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1487875961445-47a00398c267?w=800&q=80"
                  alt="Urban Choice building materials showroom Dubai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div
                className="absolute -bottom-5 -left-5 rounded-xl p-5 text-white shadow-lg"
                style={{
                  backgroundColor: 'hsl(var(--color-primary))',
                  boxShadow: '0 10px 25px hsl(var(--color-primary) / 0.40)',
                }}
              >
                <p className="text-3xl font-extrabold">10+</p>
                <p className="text-sm font-medium text-white/90">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: 'hsl(var(--color-muted) / 0.30)' }}
        aria-labelledby="faq-home-heading"
      >
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-10 text-center">
            <p
              className="mb-1 text-sm font-bold tracking-widest uppercase"
              style={{ color: 'hsl(var(--color-primary))' }}
            >
              FAQ
            </p>
            <h2 id="faq-home-heading" className="text-3xl font-extrabold sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion faqs={topFaqs} />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{ color: 'hsl(var(--color-primary))' }}
            >
              View All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      {siteConfig.features.callToAction && (
        <section className="relative overflow-hidden py-24" aria-label="Call to action">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
              alt="Modern building construction"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/80" />
          </div>

          <div className="relative container mx-auto max-w-4xl px-4 text-center text-white">
            <span
              className="border-primary/40 bg-primary/15 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold backdrop-blur-sm"
              style={{
                backgroundColor: 'hsl(var(--color-primary) / 0.15)',
                borderColor: 'hsl(var(--color-primary) / 0.40)',
              }}
            >
              <span className="bg-primary h-2 w-2 rounded-full" />
              Ready to Start Your Project?
            </span>
            <h2 className="text-3xl leading-tight font-extrabold sm:text-5xl">
              Get the Best Building Materials
              <br />
              <span className="text-primary">Delivered to Your Site</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Browse our full catalogue of 500+ premium products or contact us for a custom project
              quote. Our team responds within 2 business hours.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="xl"
                className="text-white shadow-lg transition-all hover:scale-105 hover:opacity-90"
                style={{ backgroundColor: 'hsl(var(--color-primary))' }}
              >
                <Link href="/products">
                  Browse All Products <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/15"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
