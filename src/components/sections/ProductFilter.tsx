'use client';

import React from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SORT_OPTIONS } from '@/constants';
import { siteConfig } from '@/data/site-config';
import type { Category } from '@/types';
import type { SortOption } from '@/hooks/useProductFilter';

interface ProductFilterProps {
  category?: Category;
  subcategory: string;
  setSubcategory: (v: string) => void;
  sortBy: SortOption;
  setSortBy: (v: SortOption) => void;
  availability: string;
  setAvailability: (v: string) => void;
  resetFilters: () => void;
  activeFiltersCount: number;
  totalProducts: number;
}

const selectStyle: React.CSSProperties = {
  backgroundColor: 'hsl(var(--color-background))',
  color: 'hsl(var(--color-foreground))',
};

export default function ProductFilter({
  category,
  subcategory,
  setSubcategory,
  sortBy,
  setSortBy,
  availability,
  setAvailability,
  resetFilters,
  activeFiltersCount,
  totalProducts,
}: ProductFilterProps) {
  const { showAvailability } = siteConfig.features;

  return (
    <div className="bg-card text-card-foreground flex flex-wrap items-center gap-3 rounded-xl border p-4">
      <div className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
        <SlidersHorizontal className="h-4 w-4" />
        <span>Filter & Sort</span>
        <span className="text-xs">({totalProducts} items)</span>
      </div>

      {/* Subcategory pills */}
      {category?.subcategories && category.subcategories.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSubcategory('all')}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all hover:scale-105 ${
              subcategory === 'all'
                ? 'text-white shadow-sm'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
            style={
              subcategory === 'all'
                ? { backgroundColor: 'hsl(var(--color-primary))', color: '#fff' }
                : {}
            }
          >
            All
          </button>
          {category.subcategories.map((sub) => (
            <button
              key={sub.slug}
              onClick={() => setSubcategory(sub.slug)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all hover:scale-105 ${
                subcategory === sub.slug
                  ? 'text-white shadow-sm'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              style={
                subcategory === sub.slug
                  ? { backgroundColor: 'hsl(var(--color-primary))', color: '#fff' }
                  : {}
              }
            >
              {sub.name}
            </button>
          ))}
        </div>
      )}

      <div className="ml-auto flex items-center gap-2">
        {/* Availability — only shown when showAvailability feature flag is on */}
        {showAvailability && (
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="hover:border-primary focus:ring-ring cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus:ring-2 focus:outline-none"
            style={selectStyle}
            aria-label="Filter by availability"
          >
            <option value="all" style={selectStyle}>
              All Availability
            </option>
            <option value="in_stock" style={selectStyle}>
              In Stock
            </option>
            <option value="pre_order" style={selectStyle}>
              Pre-Order
            </option>
          </select>
        )}

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="hover:border-primary focus:ring-ring cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus:ring-2 focus:outline-none"
          style={selectStyle}
          aria-label="Sort products"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} style={selectStyle}>
              {opt.label}
            </option>
          ))}
        </select>

        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="hover:text-destructive h-8 gap-1 text-xs"
          >
            <X className="h-3 w-3" />
            Clear ({activeFiltersCount})
          </Button>
        )}
      </div>
    </div>
  );
}
