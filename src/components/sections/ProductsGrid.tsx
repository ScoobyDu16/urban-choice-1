'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import { useProductFilter } from '@/hooks/useProductFilter';
import type { Product } from '@/types';

interface ProductsGridProps {
  products: Product[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  category?: any; // retained for backwards compatibility — category page passes this
  initialSearchQuery?: string;
}

const PAGE_SIZE = 24;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function ProductsGrid({ products, initialSearchQuery = '' }: ProductsGridProps) {
  const { filteredProducts, searchQuery, setSearchQuery, sortBy, setSortBy } = useProductFilter(
    products,
    initialSearchQuery,
  );

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [filterResetKey, setFilterResetKey] = useState(0);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleSetSearchQuery = useCallback(
    (v: string) => {
      setSearchQuery(v);
      setVisibleCount(PAGE_SIZE);
    },
    [setSearchQuery],
  );

  // Clears the search query AND forces ProductFilter to remount so its
  // internal inputValue state reinitialises from the now-empty searchQuery prop.
  const handleClearSearch = useCallback(() => {
    handleSetSearchQuery('');
    setFilterResetKey((k) => k + 1);
  }, [handleSetSearchQuery]);
  const handleSetSortBy = useCallback(
    (v: Parameters<typeof setSortBy>[0]) => {
      setSortBy(v);
      setVisibleCount(PAGE_SIZE);
    },
    [setSortBy],
  );

  // IntersectionObserver — load next batch when sentinel enters viewport
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((prev) => prev + PAGE_SIZE);
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [filteredProducts]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <div className="space-y-6">
      <ProductFilter
        key={filterResetKey}
        searchQuery={searchQuery}
        setSearchQuery={handleSetSearchQuery}
        sortBy={sortBy}
        setSortBy={handleSetSortBy}
        totalProducts={filteredProducts.length}
      />

      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center">
          <p style={{ color: 'hsl(var(--color-muted-foreground))' }}>
            No products found{searchQuery ? ` for "${searchQuery}"` : ''}.
          </p>
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="mt-3 text-sm hover:underline"
              style={{ color: 'hsl(var(--color-primary))' }}
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {visibleProducts.map((product, index) => (
              <motion.div key={product.id} variants={item}>
                <ProductCard product={product} priority={index < 4} />
              </motion.div>
            ))}
          </motion.div>

          {/* Infinite scroll sentinel — only show spinner when more remain */}
          {hasMore && (
            <div ref={sentinelRef} className="flex flex-col items-center gap-3 py-8">
              <div
                className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200"
                style={{ borderTopColor: 'hsl(var(--color-primary))' }}
                aria-label="Loading more products"
              />
            </div>
          )}

          {/* Sentinel for when all products are shown — keeps observer alive */}
          {!hasMore && <div ref={sentinelRef} />}
        </>
      )}
    </div>
  );
}
