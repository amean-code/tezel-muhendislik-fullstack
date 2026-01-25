"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { categoryLabels } from "@/data/projects";

interface ProjectCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
}

/**
 * Yeni proje ekleme modal komponenti
 */
export default function ProjectCreateModal({
  isOpen,
  onClose,
  onSave,
}: ProjectCreateModalProps) {
  const [formData, setFormData] = useState<Partial<Project>>({
    category: "elevator-systems",
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  /**
   * Form gönderme fonksiyonu
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { project: newProject } = await response.json();
        onSave(newProject);
        onClose();
        // Formu sıfırla
        setFormData({
          category: "elevator-systems",
        });
      } else {
        const data = await response.json();
        alert(data.error || "Proje oluşturulurken bir hata oluştu");
      }
    } catch (error) {
      console.error("Create project error:", error);
      alert("Proje oluşturulurken bir hata oluştu");
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const categories = Object.entries(categoryLabels).filter(
    ([key]) => key !== "all"
  ) as [ProjectCategory, string][];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-border-color px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">Yeni Proje Ekle</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Proje Adı *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              placeholder="Örn: AVM Yürüyen Merdiven Revizyonu"
              className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Kategori *
            </label>
            <select
              name="category"
              value={formData.category || "elevator-systems"}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              required
            >
              {categories.map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Konum *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location || ""}
              onChange={handleChange}
              placeholder="Örn: Mall of İstanbul, Başakşehir"
              className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Ekipman *
            </label>
            <input
              type="text"
              name="equipment"
              value={formData.equipment || ""}
              onChange={handleChange}
              placeholder="Örn: Kone TravelMaster 110"
              className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
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
              placeholder="Görsel için açıklayıcı metin"
              className="w-full px-4 py-2 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary"
            />
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
              {loading ? "Oluşturuluyor..." : "Projeyi Oluştur"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
