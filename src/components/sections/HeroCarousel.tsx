'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Banner } from '@/types';
import { siteConfig } from '@/data/site-config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { trackCtaClick, trackWhatsAppClick } from '@/lib/analytics';

interface HeroCarouselProps {
  banners: Banner[];
}

export default function HeroCarousel({ banners }: HeroCarouselProps) {
  const { business } = siteConfig;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  if (!banners.length) return null;

  return (
    <section className="relative overflow-hidden" aria-label="Hero banner">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {banners.map((banner, index) => (
            <div key={banner.id} className="relative min-w-full">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={banner.image.url}
                  alt={banner.image.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                {/* Dark overlay with orange-tinted gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative container mx-auto max-w-7xl px-4 py-28 lg:py-40">
                <div className="max-w-2xl">
                  <motion.div
                    key={`content-${banner.id}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >
                    {/* Accent badge */}
                    <span
                      className="border-primary/40 bg-primary/15 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm"
                      style={{
                        backgroundColor: 'hsl(var(--color-primary) / 0.15)',
                        borderColor: 'hsl(var(--color-primary) / 0.40)',
                      }}
                    >
                      <span
                        className="h-2 w-2 animate-pulse rounded-full"
                        style={{ backgroundColor: 'hsl(var(--color-primary))' }}
                      />
                      Dubai&apos;s Trusted Building Materials Supplier
                    </span>

                    <h1 className="text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
                      {banner.title}
                    </h1>

                    {/* Orange accent underline */}
                    <div className="bg-primary mt-4 h-1 w-20 rounded-full" />

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                      {banner.subtitle}
                    </p>
                  </motion.div>

                  <motion.div
                    key={`cta-${banner.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    className="mt-10 flex flex-wrap gap-4"
                  >
                    <Button
                      asChild
                      size="xl"
                      className="bg-primary shadow-primary/30 text-white shadow-lg transition-all hover:scale-105 hover:opacity-90"
                      onClick={() => trackCtaClick(banner.ctaText, banner.ctaUrl)}
                    >
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
                        onClick={() => trackWhatsAppClick('hero-carousel')}
                      >
                        <a
                          href={generateWhatsAppUrl(
                            business.whatsapp,
                            'Hi, I would like to inquire about your building materials.',
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
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="hover:border-primary group absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white backdrop-blur-sm transition-all hover:scale-110"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary))')
            }
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="hover:border-primary absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white backdrop-blur-sm transition-all hover:scale-110"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary))')
            }
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? 'bg-primary w-8' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
