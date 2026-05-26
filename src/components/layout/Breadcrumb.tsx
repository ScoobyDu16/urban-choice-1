import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbItem } from '@/types';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Use light (white) colours for dark/image backgrounds */
  light?: boolean;
}

export default function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];
  const schema = generateBreadcrumbSchema(allItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol
          className="flex flex-wrap items-center gap-1 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li
                key={item.href}
                className="flex items-center gap-1"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 transition-colors',
                      light
                        ? 'text-white/60 hover:text-white hover:underline'
                        : 'text-muted-foreground hover:text-foreground hover:underline',
                    )}
                    itemProp="item"
                    aria-label="Home"
                  >
                    <Home className="h-3.5 w-3.5" />
                    <span itemProp="name" className="sr-only">
                      {item.label}
                    </span>
                  </Link>
                ) : isLast ? (
                  <span
                    itemProp="name"
                    className={cn('font-medium', light ? 'text-white' : 'text-foreground')}
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'transition-colors',
                      light
                        ? 'text-white/60 hover:text-white hover:underline'
                        : 'text-muted-foreground hover:text-foreground hover:underline',
                    )}
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight
                    className={cn('h-3.5 w-3.5', light ? 'text-white/40' : 'text-muted-foreground')}
                    aria-hidden="true"
                  />
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
