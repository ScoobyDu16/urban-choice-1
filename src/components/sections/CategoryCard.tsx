import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  priority?: boolean;
}

export default function CategoryCard({ category, priority = false }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group focus-visible:ring-ring relative block cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:outline-none"
      aria-label={`Browse ${category.name}`}
    >
      {/* Full-bleed image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image.url}
          alt={category.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAACAwEA/8QAHhAAAgIBBQEAAAAAAAAAAAAAAAECAxESMSH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoN8LK1OjW7T2ixI2bBPLsAAAAAAAAA/9k="
        />

        {/* Dark gradient overlay — stronger at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/70" />

        {/* "Popular" badge — top right, only for featured */}
        {category.featured && (
          <span
            className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow-md"
            style={{ backgroundColor: 'hsl(var(--color-primary))' }}
          >
            Popular
          </span>
        )}

        {/* Bottom content */}
        <div className="absolute right-0 bottom-0 left-0 p-5">
          <h3 className="text-xl leading-tight font-bold text-white">{category.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/75">
            {category.shortDescription}
          </p>

          {/* "View Products →" text link */}
          <span
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
            style={{ color: 'hsl(var(--color-primary))' }}
          >
            View Products
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
