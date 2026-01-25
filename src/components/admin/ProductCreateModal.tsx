"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

interface ProductCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
}

/**
 * Yeni ürün ekleme modal komponenti
 */
export default function ProductCreateModal({
  isOpen,
  onClose,
  onSave,
}: ProductCreateModalProps) {
  const [formData, setFormData] = useState<Partial<Product>>({
    inStock: true,
    features: [],
    specs: [],
    thumbnails: [],
  });
  const [loading, setLoading] = useState(false);
  const [featureInput, setFeatureInput] = useState("");
  const [specInput, setSpecInput] = useState({
    parameter: "",
    value: "",
    unit: "",
  });

  if (!isOpen) return null;

  /**
   * Form gönderme fonksiyonu
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { product: newProduct } = await response.json();
        onSave(newProduct);
        onClose();
        // Formu sıfırla
        setFormData({
          inStock: true,
          features: [],
          specs: [],
          thumbnails: [],
        });
        setFeatureInput("");
        setSpecInput({ parameter: "", value: "", unit: "" });
      } else {
        const data = await response.json();
        alert(data.error || "Ürün oluşturulurken bir hata oluştu");
      }
    } catch (error) {
      console.error("Create product error:", error);
      alert("Ürün oluşturulurken bir hata oluştu");
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

  /**
   * Özellik ekleme fonksiyonu
   */
  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        features: [...(prev.features || []), featureInput.trim()],
      }));
      setFeatureInput("");
    }
  };

  /**
   * Özellik silme fonksiyonu
   */
  const handleRemoveFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features?.filter((_, i) => i !== index) || [],
    }));
  };

  /**
   * Teknik özellik ekleme fonksiyonu
   */
  const handleAddSpec = () => {
    if (specInput.parameter.trim() && specInput.value.trim()) {
      setFormData((prev) => ({
        ...prev,
        specs: [
          ...(prev.specs || []),
          {
            parameter: specInput.parameter.trim(),
            value: specInput.value.trim(),
            unit: specInput.unit.trim(),
          },
        ],
      }));
      setSpecInput({ parameter: "", value: "", unit: "" });
    }
  };

  /**
   * Teknik özellik silme fonksiyonu
   */
  const handleRemoveSpec = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      specs: prev.specs?.filter((_, i) => i !== index) || [],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-border-color px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">Yeni Ürün Ekle</h2>
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
                placeholder="urun-adi-slug"
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
                placeholder="Motorlar, Panolar, vb."
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
                placeholder="Yeni, Özel, vb."
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
              placeholder="https://..."
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

          {/* Özellikler */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Özellikler
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddFeature();
                  }
                }}
                placeholder="Özellik ekle..."
                className="flex-1 px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-4 py-2 bg-primary text-white rounded text-sm font-bold hover:bg-[#071d28] transition-colors"
              >
                Ekle
              </button>
            </div>
            {formData.features && formData.features.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded text-sm"
                  >
                    {feature}
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(idx)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        close
                      </span>
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Teknik Özellikler */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Teknik Özellikler
            </label>
            <div className="grid grid-cols-3 gap-2 mb-2">
              <input
                type="text"
                value={specInput.parameter}
                onChange={(e) =>
                  setSpecInput({ ...specInput, parameter: e.target.value })
                }
                placeholder="Parametre (örn: Kapasite)"
                className="px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              />
              <input
                type="text"
                value={specInput.value}
                onChange={(e) =>
                  setSpecInput({ ...specInput, value: e.target.value })
                }
                placeholder="Değer (örn: 630)"
                className="px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={specInput.unit}
                  onChange={(e) =>
                    setSpecInput({ ...specInput, unit: e.target.value })
                  }
                  placeholder="Birim (örn: kg)"
                  className="flex-1 px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
                />
                <button
                  type="button"
                  onClick={handleAddSpec}
                  className="px-4 py-2 bg-primary text-white rounded text-sm font-bold hover:bg-[#071d28] transition-colors"
                >
                  Ekle
                </button>
              </div>
            </div>
            {formData.specs && formData.specs.length > 0 && (
              <div className="space-y-2">
                {formData.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded border border-border-color"
                  >
                    <div className="flex gap-4">
                      <span className="font-semibold">{spec.parameter}:</span>
                      <span>
                        {spec.value} {spec.unit}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveSpec(idx)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        delete
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Fiyat Bilgisi */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Min Fiyat
              </label>
              <input
                type="number"
                value={formData.price?.min || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    price: {
                      ...prev.price,
                      min: e.target.value ? parseFloat(e.target.value) : undefined,
                      currency: prev.price?.currency || "TL",
                    },
                  }))
                }
                className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Max Fiyat
              </label>
              <input
                type="number"
                value={formData.price?.max || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    price: {
                      ...prev.price,
                      max: e.target.value ? parseFloat(e.target.value) : undefined,
                      currency: prev.price?.currency || "TL",
                    },
                  }))
                }
                className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Para Birimi
              </label>
              <input
                type="text"
                value={formData.price?.currency || "TL"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    price: {
                      ...prev.price,
                      currency: e.target.value,
                    },
                  }))
                }
                className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
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
              {loading ? "Oluşturuluyor..." : "Ürünü Oluştur"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
