'use client';

import { useState, useMemo, useCallback } from 'react';
import type { Product } from '@/types';

export type SortOption = 'featured' | 'name-asc' | 'name-desc' | 'newest';

export function useProductFilter(initialProducts: Product[], initialSearchQuery = '') {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [subcategory, setSubcategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [availability, setAvailability] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    let filtered = [...initialProducts];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    if (subcategory !== 'all') {
      filtered = filtered.filter((p) => p.subcategory === subcategory);
    }

    if (availability !== 'all') {
      filtered = filtered.filter((p) => p.availability === availability);
    }

    switch (sortBy) {
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    return filtered;
  }, [initialProducts, searchQuery, subcategory, sortBy, availability]);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSubcategory('all');
    setSortBy('featured');
    setAvailability('all');
  }, []);

  return {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    subcategory,
    setSubcategory,
    sortBy,
    setSortBy,
    availability,
    setAvailability,
    resetFilters,
    activeFiltersCount: [
      searchQuery.trim() !== '',
      subcategory !== 'all',
      availability !== 'all',
      sortBy !== 'featured',
    ].filter(Boolean).length,
  };
}
