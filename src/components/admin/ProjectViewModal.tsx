"use client";

import type { Project } from "@/data/projects";
import { categoryLabels } from "@/data/projects";

interface ProjectViewModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Proje görüntüleme modal komponenti
 */
export default function ProjectViewModal({
  project,
  isOpen,
  onClose,
}: ProjectViewModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-border-color px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Görsel */}
          <div className="w-full h-64 bg-gray-100 rounded border border-border-color p-2">
            <div
              className="w-full h-full bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url('${project.image}')` }}
            />
          </div>

          {/* Bilgiler */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-1">
                Kategori
              </h3>
              <p className="text-lg font-semibold text-primary">
                {categoryLabels[project.category]}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-1">
                Konum
              </h3>
              <p className="text-lg font-semibold text-primary">
                {project.location}
              </p>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-1">
                Ekipman
              </h3>
              <p className="text-lg font-semibold text-primary">
                {project.equipment}
              </p>
            </div>
          </div>
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
