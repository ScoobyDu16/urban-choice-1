import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Testimonial } from '@/types';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-6">
        <Quote className="text-primary/30 mb-4 h-8 w-8" aria-hidden="true" />
        <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
          {testimonial.content}
        </p>

        <div className="mt-6 flex items-center gap-3 border-t pt-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
            style={{
              backgroundColor: 'hsl(var(--color-primary) / 0.10)',
              color: 'hsl(var(--color-primary))',
            }}
          >
            {testimonial.name[0]}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-tight font-semibold">{testimonial.name}</p>
            {(testimonial.role || testimonial.company) && (
              <p className="text-muted-foreground truncate text-xs">
                {[testimonial.role, testimonial.company].filter(Boolean).join(' · ')}
              </p>
            )}
          </div>
          <div className="flex gap-0.5" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-4 w-4',
                  i < testimonial.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-muted text-muted',
                )}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
