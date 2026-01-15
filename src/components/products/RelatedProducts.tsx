import Image from "next/image";
import Link from "next/link";

/**
 * RelatedProducts komponenti - Benzer ürünler
 */
interface RelatedProduct {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  href: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="border-t border-gray-200 pt-12 pb-24">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Benzer Ürünler</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.href}
            className="group block bg-white rounded border border-gray-200 hover:border-primary transition-all hover:shadow-lg"
          >
            <div className="aspect-[4/3] w-full bg-gray-100 relative overflow-hidden">
              <Image
                alt={product.imageAlt}
                src={product.image}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">{product.category}</p>
              <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                {product.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
