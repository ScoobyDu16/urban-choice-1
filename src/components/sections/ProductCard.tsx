import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';
import { siteConfig } from '@/data/site-config';
import { AVAILABILITY_LABELS, AVAILABILITY_COLORS } from '@/constants';
import { generateWhatsAppUrl } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  /** When true, removes all navigation links (used on the /products page) */
  noLink?: boolean;
}

export default function ProductCard({
  product,
  priority = false,
  noLink = false,
}: ProductCardProps) {
  const { showAvailability, showViewDetailsCta } = siteConfig.features;
  const { business } = siteConfig;

  const availLabel = AVAILABILITY_LABELS[product.availability] || product.availability;
  const availColor = AVAILABILITY_COLORS[product.availability] || '';

  const whatsappMsg = `Hi, I would like to inquire about: ${product.name}`;

  const imageContent = (
    <>
      {product.thumbnail.url ? (
        <Image
          src={product.thumbnail.url}
          alt={product.thumbnail.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={priority}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAACAwEA/8QAHhAAAgIBBQEAAAAAAAAAAAAAAAECAxESMSH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoN8LK1OjW7T2ixI2bBPLsAAAAAAAAA/9k="
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-100">
          <svg
            className="h-10 w-10 text-slate-300"
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
          <span className="text-xs font-medium text-slate-400">Image coming soon</span>
        </div>
      )}
      {product.featured && (
        <span
          className="absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-xs font-bold text-white shadow-md"
          style={{ backgroundColor: 'hsl(var(--color-primary))' }}
        >
          ★ Featured
        </span>
      )}
      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: 'hsl(var(--color-primary) / 0.10)' }}
      />
    </>
  );

  return (
    <div
      className="group border-border bg-card flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ ['--tw-shadow-color' as string]: 'hsl(var(--color-primary) / 0.15)' }}
    >
      {/* Image */}
      {noLink ? (
        <div className="relative block aspect-4/3 overflow-hidden bg-slate-100">{imageContent}</div>
      ) : (
        <Link
          href={`/products/${product.slug}`}
          className="relative block aspect-4/3 overflow-hidden bg-slate-100"
          tabIndex={-1}
          aria-hidden="true"
        >
          {imageContent}
        </Link>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category chip */}
        <span
          className="mb-2 inline-flex items-center self-start rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
          style={{
            backgroundColor: 'hsl(var(--color-primary) / 0.10)',
            color: 'hsl(var(--color-primary))',
          }}
        >
          {product.category.replace(/-/g, ' ')}
        </span>

        {/* Product name */}
        {noLink ? (
          <h3 className="line-clamp-2 text-base leading-snug font-bold">{product.name}</h3>
        ) : (
          <Link href={`/products/${product.slug}`}>
            <h3 className="hover:text-primary line-clamp-2 text-base leading-snug font-bold transition-colors">
              {product.name}
            </h3>
          </Link>
        )}

        {/* Short description */}
        <p className="text-muted-foreground mt-2 line-clamp-2 flex-1 text-sm">
          {product.shortDescription}
        </p>

        {/* Availability */}
        {showAvailability && (
          <span className={cn('mt-3 text-xs font-semibold', availColor)}>{availLabel}</span>
        )}

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          {showViewDetailsCta && !noLink && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary flex-1 hover:text-white"
            >
              <Link
                href={`/products/${product.slug}`}
                aria-label={`View details for ${product.name}`}
              >
                Details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          )}
          <Button
            asChild
            size="sm"
            className={cn(
              'gap-1.5 text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:opacity-90',
              showViewDetailsCta && !noLink ? 'flex-1' : 'w-full',
            )}
            style={{ backgroundColor: 'hsl(var(--color-primary))' }}
          >
            <a
              href={generateWhatsAppUrl(business.whatsapp, whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Inquire about ${product.name} on WhatsApp`}
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Inquire Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
