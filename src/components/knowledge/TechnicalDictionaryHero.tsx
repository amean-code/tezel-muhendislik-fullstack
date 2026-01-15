"use client";

import { useState } from "react";

/**
 * TechnicalDictionaryHero komponenti - Teknik sözlük sayfası hero bölümü
 * Arama kutusu ve başlık içerir
 */
export default function TechnicalDictionaryHero({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Arama formunu gönderir
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-sm">menu_book</span> Bilgi Bankası
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-6">
            Asansör ve Yürüyen Merdiven Teknik Sözlüğü
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Sektörde kullanılan teknik terimler, standart tanımları ve mühendislik jargonlarına dair
            kapsamlı referans kaynağı.
          </p>
        </div>
        <div className="max-w-2xl mx-auto relative group">
          <form onSubmit={handleSubmit} className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 text-2xl">search</span>
            </div>
            <input
              className="block w-full pl-12 pr-32 py-4 border-2 border-transparent bg-white rounded-xl text-lg shadow-lg placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-0 transition-all"
              placeholder="Terim ara (Örn: VVVF, Paraşüt Fren)..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-2 right-2">
              <button
                type="submit"
                className="h-full px-6 bg-primary text-white font-bold rounded-lg hover:bg-[#0f2550] transition-colors shadow-md"
              >
                Bul
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
