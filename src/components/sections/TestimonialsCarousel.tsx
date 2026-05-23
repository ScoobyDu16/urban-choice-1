'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="min-w-[300px] flex-shrink-0 sm:min-w-[360px] lg:min-w-[calc(33.333%-16px)]"
            >
              <div className="border-border bg-card relative h-full rounded-2xl border p-7 shadow-sm transition-shadow hover:shadow-md">
                {/* Quote icon */}
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'hsl(var(--color-primary) / 0.10)' }}
                >
                  <Quote className="text-primary h-5 w-5" />
                </div>

                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < t.rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="mt-auto flex items-center gap-3">
                  <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    {(t.role || t.company) && (
                      <p className="text-muted-foreground text-xs">
                        {t.role}
                        {t.company ? ` · ${t.company}` : ''}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={scrollPrev}
          className="text-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 hover:text-white"
          style={{
            backgroundColor: 'hsl(var(--color-card))',
            borderColor: 'hsl(var(--color-border))',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary))';
            e.currentTarget.style.borderColor = 'hsl(var(--color-primary))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--color-card))';
            e.currentTarget.style.borderColor = 'hsl(var(--color-border))';
          }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex ? 'bg-primary w-6' : 'bg-border hover:bg-muted-foreground w-2'
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="text-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 hover:text-white"
          style={{
            backgroundColor: 'hsl(var(--color-card))',
            borderColor: 'hsl(var(--color-border))',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary))';
            e.currentTarget.style.borderColor = 'hsl(var(--color-primary))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--color-card))';
            e.currentTarget.style.borderColor = 'hsl(var(--color-border))';
          }}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
