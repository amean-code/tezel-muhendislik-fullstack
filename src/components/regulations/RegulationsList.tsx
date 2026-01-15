"use client";

import { useState } from "react";
import RegulationCard from "./RegulationCard";

/**
 * Yönetmelik veri tipi
 */
export interface Regulation {
  id: string;
  title: string;
  description: string;
  status: "active" | "archived";
  statusLabel: string;
  type: "official" | "standard";
  typeLabel: string;
  effectiveDate: string;
  documentNumber?: string;
  revisionDate?: string;
  icon: string;
  borderColor: string;
}

/**
 * Yönetmelik verileri
 */
const regulations: Regulation[] = [
  {
    id: "1",
    title: "Asansör İşletme ve Bakım Yönetmeliği",
    description:
      "Asansörlerin güvenli bir şekilde kullanımını sağlamak amacıyla düzenli bakım, onarım ve kontrol süreçlerini belirleyen temel yönetmelik.",
    status: "active",
    statusLabel: "Yürürlükte",
    type: "official",
    typeLabel: "Resmi Gazete",
    effectiveDate: "06.04.2019",
    documentNumber: "30737",
    icon: "policy",
    borderColor: "bg-green-500",
  },
  {
    id: "2",
    title: "TS EN 81-20 Asansör Standartları",
    description:
      "İnsan ve yük taşıma amaçlı asansörlerin yapımı ve montajı için güvenlik kuralları. Bölüm 20: İnsan ve yük asansörleri.",
    status: "active",
    statusLabel: "Yürürlükte",
    type: "standard",
    typeLabel: "AB Standardı",
    effectiveDate: "01.09.2017",
    revisionDate: "2020",
    icon: "engineering",
    borderColor: "bg-blue-500",
  },
  {
    id: "3",
    title: "Asansör Periyodik Kontrol Yönetmeliği",
    description:
      "Asansörlerin tescili, yıllık kontrolleri, takip kontrolleri ve bina sorumlusunun yükümlülüklerine dair esaslar.",
    status: "active",
    statusLabel: "Yürürlükte",
    type: "official",
    typeLabel: "Resmi Gazete",
    effectiveDate: "04.05.2018",
    documentNumber: "30411",
    icon: "description",
    borderColor: "bg-green-500",
  },
  {
    id: "4",
    title: "Eski Asansör Yönetmeliği (2014/33/AB)",
    description:
      "6/4/2019 tarihli yeni yönetmelik öncesi geçerli olan düzenleme. Arşiv amaçlı listelenmektedir.",
    status: "archived",
    statusLabel: "Mülga (Eski)",
    type: "official",
    typeLabel: "Resmi Gazete",
    effectiveDate: "06.04.2019",
    documentNumber: "29757",
    icon: "history_edu",
    borderColor: "bg-gray-300",
  },
  {
    id: "5",
    title: "TS EN 81-50 Hesaplamalar ve Testler",
    description:
      "Asansör bileşenlerinin tasarım kuralları, hesaplamaları ve test yöntemleri için güvenlik standartları.",
    status: "active",
    statusLabel: "Yürürlükte",
    type: "standard",
    typeLabel: "AB Standardı",
    effectiveDate: "2015",
    revisionDate: "2021",
    icon: "safety_check",
    borderColor: "bg-blue-500",
  },
];

/**
 * RegulationsList komponenti - Yönetmelik listesi ve filtreleme
 */
export default function RegulationsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");

  /**
   * Yönetmelikleri filtreleme ve sıralama fonksiyonu
   */
  const filteredAndSortedRegulations = regulations
    .filter((regulation) => {
      if (!searchQuery) return true;
      return (
        regulation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        regulation.documentNumber?.includes(searchQuery) ||
        regulation.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortBy === "date-desc") {
        return new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime();
      } else if (sortBy === "alphabetical") {
        return a.title.localeCompare(b.title, "tr");
      }
      return 0;
    });

  return (
    <div className="flex-1 min-w-0">
      {/* Filtreleme ve Sıralama */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <input
            className="w-full bg-white border border-gray-300 text-sm rounded-lg px-4 py-2.5 pl-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="Yönetmelik adı veya numarası ile ara..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500 text-[20px]">
            filter_list
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Sıralama:</span>
          <select
            className="bg-transparent border-none font-medium text-primary focus:ring-0 cursor-pointer pr-8"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date-desc">Yürürlük Tarihi (Yeni-Eski)</option>
            <option value="alphabetical">Alfabetik (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Yönetmelik Listesi */}
      <div className="space-y-4">
        {filteredAndSortedRegulations.map((regulation) => (
          <RegulationCard key={regulation.id} regulation={regulation} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav aria-label="Pagination" className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 transition-colors">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
