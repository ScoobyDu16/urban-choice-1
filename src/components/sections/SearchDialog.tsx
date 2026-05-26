'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '@/hooks/useSearch';
import { trackSearch } from '@/lib/analytics';

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
    if (query.length > 1) trackSearch(query, results.total);
  }, [query, results.total]);

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
            className="relative z-10 mx-4 w-full max-w-2xl rounded-xl border shadow-2xl"
            style={{
              backgroundColor: 'hsl(var(--color-background))',
              color: 'hsl(var(--color-foreground))',
            }}
          >
            <div className="flex items-center gap-3 border-b px-4 py-3">
              <Search
                className="h-5 w-5 shrink-0"
                style={{ color: 'hsl(var(--color-muted-foreground))' }}
              />
              <input
                autoFocus
                placeholder="Search products, categories…"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="h-auto w-full bg-transparent px-3 py-2 text-base outline-none"
                style={{
                  color: 'hsl(var(--color-foreground))',
                }}
                aria-label="Search"
              />
              <button
                onClick={onClose}
                className="shrink-0 rounded p-1 transition-colors"
                style={{ color: 'hsl(var(--color-muted-foreground))' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(var(--color-foreground))')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'hsl(var(--color-muted-foreground))')
                }
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {query.length > 1 && (
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {results.total === 0 ? (
                  <p
                    className="py-8 text-center text-sm"
                    style={{ color: 'hsl(var(--color-muted-foreground))' }}
                  >
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                ) : (
                  <>
                    {results.categories.length > 0 && (
                      <div className="mb-2">
                        <p
                          className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase"
                          style={{ color: 'hsl(var(--color-muted-foreground))' }}
                        >
                          Categories
                        </p>
                        {results.categories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/categories/${cat.slug}`}
                            onClick={onClose}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
                            style={{ color: 'hsl(var(--color-foreground))' }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor = 'hsl(var(--color-accent))')
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor = 'transparent')
                            }
                          >
                            <div
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold"
                              style={{
                                backgroundColor: 'hsl(var(--color-primary) / 0.12)',
                                color: 'hsl(var(--color-primary))',
                              }}
                            >
                              {cat.name[0]}
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold">{cat.name}</p>
                              <p
                                className="truncate text-xs"
                                style={{ color: 'hsl(var(--color-muted-foreground))' }}
                              >
                                {cat.shortDescription}
                              </p>
                            </div>
                            <ArrowRight
                              className="ml-auto h-4 w-4 shrink-0"
                              style={{ color: 'hsl(var(--color-muted-foreground))' }}
                            />
                          </Link>
                        ))}
                      </div>
                    )}

                    {results.products.length > 0 && (
                      <div>
                        <p
                          className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase"
                          style={{ color: 'hsl(var(--color-muted-foreground))' }}
                        >
                          Products
                        </p>
                        {results.products.map((product) => (
                          <Link
                            key={product.id}
                            href={`/products?q=${encodeURIComponent(product.name)}`}
                            onClick={onClose}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
                            style={{ color: 'hsl(var(--color-foreground))' }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor = 'hsl(var(--color-accent))')
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor = 'transparent')
                            }
                          >
                            <div
                              className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md"
                              style={{ backgroundColor: 'hsl(var(--color-muted))' }}
                            >
                              <Image
                                src={product.thumbnail.url}
                                alt={product.thumbnail.alt}
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold">{product.name}</p>
                              <p
                                className="truncate text-xs"
                                style={{ color: 'hsl(var(--color-muted-foreground))' }}
                              >
                                {product.shortDescription}
                              </p>
                            </div>
                            <ArrowRight
                              className="ml-auto h-4 w-4 shrink-0"
                              style={{ color: 'hsl(var(--color-muted-foreground))' }}
                            />
                          </Link>
                        ))}
                      </div>
                    )}

                    <div className="mt-2 border-t pt-2">
                      <Link
                        href={`/products?q=${encodeURIComponent(query)}`}
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        style={{ color: 'hsl(var(--color-primary))' }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = 'hsl(var(--color-accent))')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = 'transparent')
                        }
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
              <div
                className="p-5 text-center text-sm"
                style={{ color: 'hsl(var(--color-muted-foreground))' }}
              >
                Start typing to search products and categories
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
