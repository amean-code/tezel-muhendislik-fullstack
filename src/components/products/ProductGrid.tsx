import ProductCard from "./ProductCard";
import { products } from "@/data/products";

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
      {displayProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
