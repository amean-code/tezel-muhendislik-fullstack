import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

/**
 * ProductCard komponenti - Ürün kartı gösterimi
 */
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded border border-gray-200 bg-white transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
        <Image
          alt={product.imageAlt}
          src={product.image}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {product.inStock && (
          <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-bold uppercase text-primary rounded-sm shadow-sm backdrop-blur-sm">
            Stokta
          </div>
        )}
        {product.badge && (
          <div className="absolute top-2 left-2 bg-accent px-2 py-1 text-xs font-bold uppercase text-white rounded-sm shadow-sm">
            {product.badge}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
          <Link href={`/urunler/${product.slug}`}>
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product.title}
          </Link>
        </h3>

        <div className="mt-2 text-sm text-gray-500">{product.shortDescription}</div>

        {/* Teknik Özellikler */}
        <div className="mt-4 space-y-2 border-t border-gray-200 pt-3">
          {product.specs.slice(0, 3).map((spec, index) => (
            <div key={index} className="flex justify-between text-xs">
              <span className="font-medium text-gray-500">{spec.parameter}:</span>
              <span className="font-semibold text-gray-700">
                {spec.value} {spec.unit}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-2 pt-2 relative z-10">
          <Link
            href={`/urunler/${product.slug}`}
            className="flex-1 rounded border border-primary bg-transparent py-2 text-xs font-semibold text-primary transition hover:bg-primary/5 text-center"
          >
            Ürün Detayları
          </Link>
          <button className="flex-1 rounded border border-transparent bg-accent py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#d97b20] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
            Teklif Al
          </button>
        </div>
      </div>
    </article>
  );
}
