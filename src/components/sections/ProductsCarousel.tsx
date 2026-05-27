'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/sections/ProductCard';
import type { Product } from '@/types';

interface ProductsCarouselProps {
  products: Product[];
  /** Auto-advances slides indefinitely when true */
  autoplay?: boolean;
  /** Delay between auto-advances in ms (default 3500) */
  autoplayDelay?: number;
  /** Pass noLink to every ProductCard */
  noLink?: boolean;
}

export default function ProductsCarousel({
  products,
  autoplay = false,
  autoplayDelay = 3500,
  noLink = false,
}: ProductsCarouselProps) {
  const plugins = autoplay
    ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: autoplay, align: 'start', slidesToScroll: 1 },
    plugins,
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on('select', update);
    emblaApi.on('reInit', update);
    update();
    return () => {
      emblaApi.off('select', update);
      emblaApi.off('reInit', update);
    };
  }, [emblaApi]);

  return (
    <div className="group/prodcarousel relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="w-[260px] flex-none sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <ProductCard product={product} priority={i < 2} noLink={noLink} />
            </div>
          ))}
          {/* Spacer slide — prevents the last→first gap in loop mode */}
          {autoplay && <div className="w-6 flex-none" aria-hidden="true" />}
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={scrollPrev}
        disabled={!autoplay && !canScrollPrev}
        className="text-foreground absolute top-1/2 -left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border opacity-0 shadow-lg transition-all duration-200 group-hover/prodcarousel:opacity-100 hover:scale-110 hover:border-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        style={{
          backgroundColor: 'hsl(var(--color-card))',
          borderColor: 'hsl(var(--color-border))',
        }}
        onMouseEnter={(e) => {
          if (!e.currentTarget.disabled) {
            e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary))';
            e.currentTarget.style.borderColor = 'hsl(var(--color-primary))';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(var(--color-card))';
          e.currentTarget.style.borderColor = 'hsl(var(--color-border))';
        }}
        aria-label="Previous products"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Next button */}
      <button
        onClick={scrollNext}
        disabled={!autoplay && !canScrollNext}
        className="text-foreground absolute top-1/2 -right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border opacity-0 shadow-lg transition-all duration-200 group-hover/prodcarousel:opacity-100 hover:scale-110 hover:border-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        style={{
          backgroundColor: 'hsl(var(--color-card))',
          borderColor: 'hsl(var(--color-border))',
        }}
        onMouseEnter={(e) => {
          if (!e.currentTarget.disabled) {
            e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary))';
            e.currentTarget.style.borderColor = 'hsl(var(--color-primary))';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(var(--color-card))';
          e.currentTarget.style.borderColor = 'hsl(var(--color-border))';
        }}
        aria-label="Next products"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
