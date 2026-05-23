'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '@/hooks/useSearch';
import { Input } from '@/components/ui/input';

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const { query, results, handleSearch, clearSearch } = useSearch();

  useEffect(() => {
    if (!open) clearSearch();
  }, [open, clearSearch]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="bg-background relative z-10 mx-4 w-full max-w-2xl rounded-xl border shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b p-4">
              <Search className="text-muted-foreground h-5 w-5 shrink-0" />
              <Input
                autoFocus
                placeholder="Search products, categories…"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="h-auto border-0 p-0 text-base shadow-none focus-visible:ring-0"
                aria-label="Search"
              />
              <button
                onClick={onClose}
                className="hover:bg-accent shrink-0 rounded p-1"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {query.length > 1 && (
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {results.total === 0 ? (
                  <p className="text-muted-foreground py-8 text-center text-sm">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                ) : (
                  <>
                    {results.categories.length > 0 && (
                      <div className="mb-2">
                        <p className="text-muted-foreground px-3 py-1.5 text-xs font-semibold tracking-wider uppercase">
                          Categories
                        </p>
                        {results.categories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/categories/${cat.slug}`}
                            onClick={onClose}
                            className="hover:bg-accent flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
                          >
                            <div
                              className="flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold"
                              style={{
                                backgroundColor: 'hsl(var(--color-primary) / 0.10)',
                                color: 'hsl(var(--color-primary))',
                              }}
                            >
                              {cat.name[0]}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{cat.name}</p>
                              <p className="text-muted-foreground text-xs">
                                {cat.shortDescription}
                              </p>
                            </div>
                            <ArrowRight className="text-muted-foreground ml-auto h-4 w-4" />
                          </Link>
                        ))}
                      </div>
                    )}

                    {results.products.length > 0 && (
                      <div>
                        <p className="text-muted-foreground px-3 py-1.5 text-xs font-semibold tracking-wider uppercase">
                          Products
                        </p>
                        {results.products.map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            onClick={onClose}
                            className="hover:bg-accent flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
                          >
                            <div className="bg-muted relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
                              <Image
                                src={product.thumbnail.url}
                                alt={product.thumbnail.alt}
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium">{product.name}</p>
                              <p className="text-muted-foreground truncate text-xs">
                                {product.shortDescription}
                              </p>
                            </div>
                            <ArrowRight className="text-muted-foreground ml-auto h-4 w-4 shrink-0" />
                          </Link>
                        ))}
                      </div>
                    )}

                    <div className="mt-2 border-t pt-2">
                      <Link
                        href={`/products?q=${encodeURIComponent(query)}`}
                        onClick={onClose}
                        className="text-primary hover:bg-accent flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                      >
                        View all results for &ldquo;{query}&rdquo;
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            )}

            {!query && (
              <div className="text-muted-foreground p-4 text-center text-sm">
                Start typing to search products and categories
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
