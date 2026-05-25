import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ProductsCarousel from '@/components/sections/ProductsCarousel';
import type { Category, Product } from '@/types';

interface HomeCategoryRowProps {
  category: Category;
  products: Product[];
}

export default function HomeCategoryRow({ category, products }: HomeCategoryRowProps) {
  if (products.length === 0) return null;

  return (
    <div className="border-border bg-card overflow-hidden rounded-2xl border shadow-sm">
      {/* Category header */}
      <div className="relative h-36 overflow-hidden sm:h-44">
        <Image
          src={category.image.url}
          alt={category.image.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAACAwEA/8QAHhAAAgIBBQEAAAAAAAAAAAAAAAECAxESMSH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoN8LK1OjW7T2ixI2bBPLsAAAAAAAAA/9k="
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-between px-6">
          <div>
            <span
              className="mb-1 inline-block text-xs font-bold tracking-widest uppercase"
              style={{ color: 'hsl(var(--color-primary))' }}
            >
              Popular Category
            </span>
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{category.name}</h3>
            <p className="mt-1 line-clamp-1 text-sm text-white/70">{category.shortDescription}</p>
          </div>
          <Link
            href={`/categories/${category.slug}`}
            className="hidden shrink-0 items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:gap-3 hover:bg-white/20 sm:inline-flex"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Product carousel */}
      <div className="px-6 py-5">
        <ProductsCarousel products={products} />
      </div>

      {/* Mobile "View All" */}
      <div className="border-border border-t px-6 py-3 sm:hidden">
        <Link
          href={`/categories/${category.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-3"
          style={{ color: 'hsl(var(--color-primary))' }}
        >
          View All {category.name} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
