"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/data/products";

interface ProductEditModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
}

/**
 * Ürün düzenleme modal komponenti
 */
export default function ProductEditModal({
  product,
  isOpen,
  onClose,
  onSave,
}: ProductEditModalProps) {
  const [formData, setFormData] = useState<Partial<Product>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  /**
   * Form gönderme fonksiyonu
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/api/admin/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { product: updatedProduct } = await response.json();
        onSave(updatedProduct);
        onClose();
      } else {
        const data = await response.json();
        alert(data.error || "Ürün güncellenirken bir hata oluştu");
      }
    } catch (error) {
      console.error("Update product error:", error);
      alert("Ürün güncellenirken bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Input değişikliklerini yönetir
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-border-color px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">Ürün Düzenle</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Temel Bilgiler */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Ürün Adı *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Slug *
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Kategori *
              </label>
              <input
                type="text"
                name="category"
                value={formData.category || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Badge
              </label>
              <input
                type="text"
                name="badge"
                value={formData.badge || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Görsel URL *
            </label>
            <input
              type="url"
              name="image"
              value={formData.image || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Görsel Alt Metni
            </label>
            <input
              type="text"
              name="imageAlt"
              value={formData.imageAlt || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Açıklama *
            </label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Kısa Açıklama
            </label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription || ""}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="inStock"
              id="inStock"
              checked={formData.inStock || false}
              onChange={handleChange}
              className="size-4"
            />
            <label htmlFor="inStock" className="text-sm font-medium text-gray-700">
              Stokta
            </label>
          </div>

          <div className="sticky bottom-0 bg-white border-t border-border-color pt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-border-color rounded text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-brand-orange hover:bg-[#d9791c] text-white rounded text-sm font-bold transition-colors disabled:opacity-50"
            >
              {loading ? "Kaydediliyor..." : "Kaydet"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
