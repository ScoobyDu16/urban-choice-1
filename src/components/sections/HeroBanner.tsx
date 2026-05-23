'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Banner } from '@/types';
import { siteConfig } from '@/data/site-config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { trackCtaClick, trackWhatsAppClick } from '@/lib/analytics';

interface HeroBannerProps {
  banner: Banner;
}

export default function HeroBanner({ banner }: HeroBannerProps) {
  const { business } = siteConfig;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700 text-white"
      aria-label="Hero banner"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={banner.image.url}
          alt={banner.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEA/8QAIBAAAgIBBQEBAAAAAAAAAAAAAQIDBAUSERMhMf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCyq9bqJm9bJn3GQyIb8sRPy3m0MFKq3gWg0sQFZA5WIIYjsVKyCp8c7iBT3D3kUGmZfuImLh+s7ULRyT2L00iOhLFWfoDzk7JJJJJJJP/Z"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 py-24 lg:py-36">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
              style={{
                backgroundColor: 'hsl(var(--color-primary) / 0.20)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'hsl(var(--color-primary) / 0.30)',
                color: 'hsl(var(--color-primary-foreground))',
              }}
            >
              Trusted by 10,000+ customers
            </span>
            <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              {banner.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              {banner.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="xl" onClick={() => trackCtaClick(banner.ctaText, banner.ctaUrl)}>
              <Link href={banner.ctaUrl}>
                {banner.ctaText}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            {siteConfig.features.whatsapp && (
              <Button
                asChild
                variant="whatsapp"
                size="xl"
                onClick={() => trackWhatsAppClick('hero-banner')}
              >
                <a
                  href={generateWhatsAppUrl(
                    business.whatsapp,
                    'Hi, I would like to inquire about your products.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
