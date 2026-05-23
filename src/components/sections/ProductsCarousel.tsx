'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/sections/ProductCard';
import type { Product } from '@/types';

interface ProductsCarouselProps {
  products: Product[];
}

export default function ProductsCarousel({ products }: ProductsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  });

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
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="min-w-[280px] flex-shrink-0 sm:min-w-[300px] lg:min-w-[calc(25%-18px)]"
            >
              <ProductCard product={product} priority={i < 2} />
            </div>
          ))}
        </div>
      </div>

      {/* Nav buttons */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="text-foreground absolute top-1/2 -left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg transition-all duration-200 hover:scale-110 hover:border-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
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
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="text-foreground absolute top-1/2 -right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg transition-all duration-200 hover:scale-110 hover:border-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
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
