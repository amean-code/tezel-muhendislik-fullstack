"use client";

import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * ProductGrid komponenti - Ürün grid'i ve verileri
 */
interface ProductGridProps {
  filteredProducts?: typeof products;
}

export default function ProductGrid({ filteredProducts }: ProductGridProps = {}) {
  const displayProducts = filteredProducts || products;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {displayProducts.map((product, index) => (
        <AnimatedCard key={product.id} index={index}>
          <ProductCard product={product} />
        </AnimatedCard>
      ))}
    </div>
  );
}
