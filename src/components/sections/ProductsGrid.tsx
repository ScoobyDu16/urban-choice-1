'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import { useProductFilter } from '@/hooks/useProductFilter';
import type { Product, Category } from '@/types';

interface ProductsGridProps {
  products: Product[];
  category?: Category;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function ProductsGrid({ products, category }: ProductsGridProps) {
  const {
    filteredProducts,
    subcategory,
    setSubcategory,
    sortBy,
    setSortBy,
    availability,
    setAvailability,
    resetFilters,
    activeFiltersCount,
  } = useProductFilter(products);

  return (
    <div className="space-y-6">
      <ProductFilter
        category={category}
        subcategory={subcategory}
        setSubcategory={setSubcategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        availability={availability}
        setAvailability={setAvailability}
        resetFilters={resetFilters}
        activeFiltersCount={activeFiltersCount}
        totalProducts={filteredProducts.length}
      />

      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted-foreground">No products match the selected filters.</p>
          <button onClick={resetFilters} className="text-primary mt-3 text-sm hover:underline">
            Clear all filters
          </button>
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.map((product, index) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} priority={index < 4} noLink />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
