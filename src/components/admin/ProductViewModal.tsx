"use client";

import type { Product } from "@/data/products";

interface ProductViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Ürün görüntüleme modal komponenti
 */
export default function ProductViewModal({
  product,
  isOpen,
  onClose,
}: ProductViewModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-border-color px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">{product.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Görsel */}
          <div className="flex gap-6">
            <div className="w-64 h-64 bg-gray-100 rounded border border-border-color p-2 shrink-0">
              <div
                className="w-full h-full bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase mb-1">
                  Kategori
                </h3>
                <p className="text-lg font-semibold text-primary">
                  {product.category}
                </p>
              </div>
              {product.badge && (
                <div>
                  <span className="px-3 py-1 bg-brand-orange text-white text-sm font-bold rounded">
                    {product.badge}
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase mb-1">
                  Stok Durumu
                </h3>
                <p className={`text-sm font-semibold ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? "Stokta" : "Stok Dışı"}
                </p>
              </div>
              {product.slug && (
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase mb-1">
                    Slug
                  </h3>
                  <p className="text-sm text-gray-600">{product.slug}</p>
                </div>
              )}
            </div>
          </div>

          {/* Açıklama */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">
              Açıklama
            </h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {product.shortDescription && (
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">
                Kısa Açıklama
              </h3>
              <p className="text-gray-700">{product.shortDescription}</p>
            </div>
          )}

          {/* Özellikler */}
          {product.features && product.features.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">
                Özellikler
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Teknik Özellikler */}
          {product.specs && product.specs.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">
                Teknik Özellikler
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="border border-border-color p-3 rounded">
                    <div className="text-xs text-gray-500 uppercase mb-1">
                      {spec.parameter}
                    </div>
                    <div className="text-lg font-semibold text-primary">
                      {spec.value} {spec.unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fiyat */}
          {product.price && (
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">
                Fiyat
              </h3>
              <p className="text-lg font-semibold text-primary">
                {product.price.min && product.price.max
                  ? `${product.price.min} - ${product.price.max} ${product.price.currency}`
                  : product.price.min
                  ? `${product.price.min} ${product.price.currency}`
                  : product.price.max
                  ? `${product.price.max} ${product.price.currency}`
                  : "Fiyat bilgisi yok"}
              </p>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-border-color px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-border-color rounded text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
