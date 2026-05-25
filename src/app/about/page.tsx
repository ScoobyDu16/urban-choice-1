import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Users, Building2, BadgeCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Breadcrumb from '@/components/layout/Breadcrumb';
import TestimonialCard from '@/components/sections/TestimonialCard';
import { getFeaturedTestimonials, hasTestimonials } from '@/data/testimonials';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { generateWhatsAppUrl } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us',
  description:
    'Learn about Urban Choice Building Materials Trading — your trusted supplier of safety items, sanitary ware, hardware, electrical supplies, plumbing materials, power tools, paints, fasteners, building materials, and packaging in Dubai, UAE.',
  keywords: [
    'about urban choice Dubai',
    'building materials supplier Dubai',
    'UAE construction supplier',
  ],
  canonicalPath: '/about',
});

const stats = [
  { icon: Building2, value: '10+', label: 'Years in Business' },
  { icon: Users, value: '5,000+', label: 'Projects Completed' },
  { icon: Award, value: '20+', label: 'Premium Brands' },
  { icon: BadgeCheck, value: '100+', label: 'Products in Stock' },
];

const values = [
  {
    title: 'Quality Assured',
    description:
      'Every product we stock is sourced from established, reputable manufacturers. We only supply what we would specify on our own projects.',
  },
  {
    title: 'UAE-Compliant',
    description:
      'All building materials we supply comply with Dubai Municipality regulations and applicable UAE/GCC standards, giving you total peace of mind.',
  },
  {
    title: 'Expert Team',
    description:
      'Our team has deep knowledge of UAE construction requirements — from paint specifications for hot climates to plumbing standards for high-rise buildings.',
  },
  {
    title: 'Reliable Supply',
    description:
      'We maintain strong stock levels and relationships with leading distributors, ensuring consistent supply even for large-scale, time-critical projects.',
  },
];

export default function AboutPage() {
  const testimonials = getFeaturedTestimonials().slice(0, 3);
  const { business } = siteConfig;

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden py-24 text-white"
        style={{ background: 'linear-gradient(135deg, hsl(215 50% 8%) 0%, hsl(215 45% 14%) 100%)' }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Building materials and construction site"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
        </div>
        {/* Orange accent line */}
        <div className="bg-primary absolute top-0 left-0 h-1 w-full" />

        <div className="relative container mx-auto max-w-7xl px-4">
          <Breadcrumb items={[{ label: 'About', href: '/about' }]} light />
          <div className="mt-4 max-w-3xl">
            <p className="text-primary mb-3 text-sm font-bold tracking-widest uppercase">
              About Urban Choice
            </p>
            <h1 className="text-4xl leading-tight font-extrabold sm:text-5xl">
              Dubai&apos;s Trusted Building Materials Partner
            </h1>
            <div className="bg-primary mt-4 h-1 w-16 rounded-full" />
            <p className="mt-6 text-xl leading-relaxed text-slate-300">
              Founded in {business.founded}, Urban Choice Building Materials Trading has grown to
              become one of Dubai&apos;s most reliable suppliers of construction and fit-out
              materials — serving contractors, developers, and homeowners across the UAE.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl space-y-24 px-4 py-16">
        {/* ── Stats ────────────────────────────────────────────────────── */}
        <section aria-label="Company statistics">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl border p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'hsl(var(--color-primary) / 0.10)' }}
                >
                  <stat.icon className="text-primary h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-foreground text-3xl font-extrabold">{stat.value}</p>
                <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Story ────────────────────────────────────────────────────── */}
        <section aria-labelledby="story-heading">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p
                className="mb-1 text-sm font-bold tracking-widest uppercase"
                style={{ color: 'hsl(var(--color-primary))' }}
              >
                Our Story
              </p>
              <h2 id="story-heading" className="text-3xl font-extrabold">
                Built on Trust, Powered by Expertise
              </h2>
              <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
                <p>
                  Urban Choice was founded in {business.founded} with a clear mission: to give UAE
                  contractors, developers, and homeowners access to premium-quality building
                  materials at competitive prices, backed by expert advice and reliable supply.
                </p>
                <p>
                  Over the years, we have built an extensive catalogue spanning 10 product
                  categories — safety items, sanitary ware, hardware, electrical supplies, plumbing
                  materials, building materials, fasteners, power tools, paints &amp; paint tools,
                  and packaging materials — covering every stage of a construction or fit-out
                  project.
                </p>
                <p>
                  Today, Urban Choice is a trusted name on construction sites across Dubai, Sharjah,
                  and Abu Dhabi. Our team combines deep technical knowledge of UAE building
                  standards with the kind of hands-on, personalised service that large distributors
                  simply cannot match.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1487875961445-47a00398c267?w=800&q=80"
                  alt="Urban Choice building materials showroom and warehouse Dubai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Orange accent card */}
              <div
                className="absolute -right-5 -bottom-5 rounded-2xl p-5 text-white shadow-xl"
                style={{
                  backgroundColor: 'hsl(var(--color-primary))',
                  boxShadow: '0 20px 40px hsl(var(--color-primary) / 0.35)',
                }}
              >
                <p className="text-3xl font-extrabold">{business.founded}</p>
                <p className="text-sm font-medium text-white/90">Est. in Dubai, UAE</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ───────────────────────────────────────────────────── */}
        <section aria-labelledby="values-heading">
          <div className="mb-12 text-center">
            <p
              className="mb-1 text-sm font-bold tracking-widest uppercase"
              style={{ color: 'hsl(var(--color-primary))' }}
            >
              What We Stand For
            </p>
            <h2 id="values-heading" className="text-3xl font-extrabold">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="bg-primary mb-3 h-1 w-8 rounded-full" />
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        {hasTestimonials() && testimonials.length > 0 && (
          <section aria-labelledby="about-testimonials-heading">
            <div className="mb-12 text-center">
              <p
                className="mb-1 text-sm font-bold tracking-widest uppercase"
                style={{ color: 'hsl(var(--color-primary))' }}
              >
                Testimonials
              </p>
              <h2 id="about-testimonials-heading" className="text-3xl font-extrabold">
                Trusted Across the UAE
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden rounded-3xl p-12 text-center text-white"
          style={{ backgroundColor: 'hsl(var(--color-primary))' }}
        >
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 rounded-3xl opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative">
            <h2 className="text-3xl font-extrabold">Ready to Start Your Project?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Browse our full catalogue of 100+ products across 10 categories, or contact us for a
              custom project quote. We respond within 2 business hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="xl" variant="secondary">
                <Link href="/products">
                  Browse Products <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/15"
              >
                <a
                  href={generateWhatsAppUrl(
                    business.whatsapp,
                    'Hi, I would like to discuss a building materials project.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
