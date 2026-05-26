'use client';

import React, { useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { SORT_OPTIONS } from '@/constants';
import type { SortOption } from '@/hooks/useProductFilter';

interface ProductFilterProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  sortBy: SortOption;
  setSortBy: (v: SortOption) => void;
  totalProducts: number;
}

const selectBaseStyle: React.CSSProperties = {
  backgroundColor: 'hsl(var(--color-background))',
  color: 'hsl(var(--color-foreground))',
};

export default function ProductFilter({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  totalProducts,
}: ProductFilterProps) {
  // Local value drives the visible input; debounced propagation updates the filter
  const [inputValue, setInputValue] = useState(searchQuery);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Always holds the latest value so the setTimeout callback is never stale
  const latestRef = useRef(searchQuery);

  const handleChange = (v: string) => {
    latestRef.current = v;
    setInputValue(v);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setSearchQuery(latestRef.current), 300);
  };

  const handleClear = () => {
    latestRef.current = '';
    setInputValue('');
    if (timerRef.current) clearTimeout(timerRef.current);
    setSearchQuery('');
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search input */}
      <div
        className="flex w-full min-w-0 items-center gap-2 rounded-lg border px-3 py-2.5 transition-all duration-150 sm:flex-1"
        style={{
          backgroundColor: 'hsl(var(--color-background))',
          borderColor: focused
            ? 'hsl(var(--color-primary))'
            : hovered
              ? 'hsl(var(--color-primary) / 0.5)'
              : 'hsl(var(--color-border))',
          boxShadow: focused ? '0 0 0 3px hsl(var(--color-primary) / 0.15)' : 'none',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Search
          className="h-4 w-4 shrink-0 transition-colors"
          style={{
            color: focused ? 'hsl(var(--color-primary))' : 'hsl(var(--color-muted-foreground))',
          }}
        />
        <input
          type="text"
          placeholder="Search products…"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent text-sm outline-none"
          style={{ color: 'hsl(var(--color-foreground))', boxShadow: 'none' }}
          aria-label="Search products"
        />
        {inputValue && (
          <button
            onClick={handleClear}
            aria-label="Clear search"
            className="shrink-0 transition-opacity hover:opacity-70"
          >
            <X className="h-3.5 w-3.5" style={{ color: 'hsl(var(--color-muted-foreground))' }} />
          </button>
        )}
      </div>

      {/* Sort dropdown */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as SortOption)}
        className="flex-1 cursor-pointer rounded-lg border px-3 py-2.5 text-sm font-medium transition-all outline-none sm:flex-none"
        style={selectBaseStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'hsl(var(--color-primary) / 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '';
        }}
        aria-label="Sort products"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value} style={selectBaseStyle}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Item count */}
      <span className="shrink-0 text-sm" style={{ color: 'hsl(var(--color-muted-foreground))' }}>
        {totalProducts} {totalProducts === 1 ? 'product' : 'products'}
      </span>
    </div>
  );
}
