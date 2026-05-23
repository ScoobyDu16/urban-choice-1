'use client';

import { useState, useMemo, useCallback } from 'react';
import { searchProducts } from '@/data/products';
import { categories } from '@/data/categories';
import type { SearchResult } from '@/types';
import { trackSearch } from '@/lib/analytics';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results: SearchResult = useMemo(() => {
    if (!query.trim()) return { products: [], categories: [], total: 0 };

    const q = query.toLowerCase().trim();
    const matchedProducts = searchProducts(query);
    const matchedCategories = categories.filter(
      (c) => c.name.toLowerCase().includes(q) || c.shortDescription.toLowerCase().includes(q),
    );

    return {
      products: matchedProducts.slice(0, 5),
      categories: matchedCategories.slice(0, 3),
      total: matchedProducts.length + matchedCategories.length,
    };
  }, [query]);

  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value);
      if (value.trim().length > 2) {
        trackSearch(value, results.total);
      }
    },
    [results.total],
  );

  const clearSearch = useCallback(() => {
    setQuery('');
    setIsOpen(false);
  }, []);

  return { query, results, isOpen, setIsOpen, handleSearch, clearSearch };
}
