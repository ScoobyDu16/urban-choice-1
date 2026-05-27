'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Category, Product } from '@/types';
import { siteConfig } from '@/data/site-config';
import { generateWhatsAppUrl } from '@/lib/utils';

interface CategoryCardWithCarouselProps {
  category: Category;
  products: Product[];
  priority?: boolean;
}

const BLUR_PLACEHOLDER =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAACAwEA/8QAHhAAAgIBBQEAAAAAAAAAAAAAAAECAxESMSH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoN8LK1OjW7T2ixI2bBPLsAAAAAAAAA/9k=';

export default function CategoryCardWithCarousel({
  category,
  products,
  priority = false,
}: CategoryCardWithCarouselProps) {
  const { business } = siteConfig;

  const displayProducts = products.slice(0, 3);
  // slides: [0] = category, [1..3] = products
  const totalSlides = 1 + displayProducts.length;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', update);
    emblaApi.on('reInit', update);
    return () => {
      emblaApi.off('select', update);
      emblaApi.off('reInit', update);
    };
  }, [emblaApi]);

  if (displayProducts.length === 0) return null;

  // WhatsApp message depends on active slide
  const whatsappMsg =
    currentIndex === 0
      ? `Hi, I would like to inquire about: ${category.name}`
      : `Hi, I would like to inquire about: ${displayProducts[currentIndex - 1]?.name ?? category.name}`;

  const whatsappLabel =
    currentIndex === 0
      ? `Inquire about ${category.name} on WhatsApp`
      : `Inquire about ${displayProducts[currentIndex - 1]?.name} on WhatsApp`;

  return (
    <div className="group/catcard border-border bg-card flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Combined carousel: category image first, then products */}
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {/* Slide 0 — Category image */}
            <div className="w-full flex-none">
              <Link
                href={`/categories/${category.slug}`}
                className="relative block aspect-[4/3] overflow-hidden bg-slate-100"
                aria-label={`Browse all ${category.name}`}
              >
                <Image
                  src={category.image.url}
                  alt={category.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={priority}
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 px-4 pb-4">
                  <h3 className="text-lg leading-tight font-extrabold text-white">
                    {category.name}
                  </h3>
                  <span
                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold"
                    style={{ color: 'hsl(var(--color-primary))' }}
                  >
                    View All <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Slides 1–3 — Products */}
            {displayProducts.map((product) => (
              <div key={product.id} className="w-full flex-none">
                <Link
                  href={`/products/${product.slug}`}
                  className="relative block aspect-[4/3] overflow-hidden bg-slate-100"
                  aria-label={`View ${product.name}`}
                >
                  {product.thumbnail.url ? (
                    <Image
                      src={product.thumbnail.url}
                      alt={product.thumbnail.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-slate-100">
                      <svg
                        className="h-8 w-8 text-slate-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                        />
                      </svg>
                      <span className="text-xs font-medium text-slate-400">Coming soon</span>
                    </div>
                  )}
                  {/* Category name badge — always visible on product slides */}
                  <div className="absolute top-0 right-0 left-0 px-3 pt-2.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {category.name}
                    </span>
                  </div>
                </Link>
                <Link
                  href={`/products/${product.slug}`}
                  className="block px-4 pt-3 pb-2 transition-opacity hover:opacity-80"
                >
                  <p className="line-clamp-1 text-sm leading-snug font-bold">{product.name}</p>
                  <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs leading-relaxed">
                    {product.shortDescription}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={scrollPrev}
          className="bg-card/80 absolute top-1/2 left-2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border opacity-0 shadow backdrop-blur-sm transition-all group-hover/catcard:opacity-100 hover:scale-110 hover:text-white"
          style={{ borderColor: 'hsl(var(--color-border))' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary))';
            e.currentTarget.style.borderColor = 'hsl(var(--color-primary))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--color-card) / 0.80)';
            e.currentTarget.style.borderColor = 'hsl(var(--color-border))';
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={scrollNext}
          className="bg-card/80 absolute top-1/2 right-2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border opacity-0 shadow backdrop-blur-sm transition-all group-hover/catcard:opacity-100 hover:scale-110 hover:text-white"
          style={{ borderColor: 'hsl(var(--color-border))' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary))';
            e.currentTarget.style.borderColor = 'hsl(var(--color-primary))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--color-card) / 0.80)';
            e.currentTarget.style.borderColor = 'hsl(var(--color-border))';
          }}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 pt-2 pb-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === currentIndex ? '20px' : '6px',
              backgroundColor:
                i === currentIndex ? 'hsl(var(--color-primary))' : 'hsl(var(--color-border))',
            }}
            aria-label={i === 0 ? `Go to category overview` : `Go to product ${i}`}
          />
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="border-border border-t px-4 py-3">
        <Button
          asChild
          size="sm"
          className="w-full gap-1.5 text-white transition-all hover:opacity-90"
          style={{ backgroundColor: '#25D366' }}
        >
          <a
            href={generateWhatsAppUrl(business.whatsapp, whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={whatsappLabel}
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Inquire Now
          </a>
        </Button>
      </div>
    </div>
  );
}
