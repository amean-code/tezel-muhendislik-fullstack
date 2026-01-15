"use client";

import { useState } from "react";
import { faqs, categoryLabels, type FAQCategory } from "@/data/faqs";

/**
 * FAQList komponenti - Sık sorulan soruları accordion formatında gösterir
 */
export default function FAQList() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>("all");
  const [openFAQ, setOpenFAQ] = useState<string | null>(faqs[0]?.id || null);

  /**
   * Seçili kategoriye göre FAQ'ları filtreler
   */
  const filteredFAQs = faqs.filter(
    (faq) => selectedCategory === "all" || faq.category === selectedCategory
  );

  /**
   * FAQ açma/kapama fonksiyonu
   */
  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="flex-1 min-w-0">
      {/* Kategori Filtreleri */}
      <div className="mb-8 flex flex-wrap gap-2">
        {(Object.keys(categoryLabels) as FAQCategory[]).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-primary text-white shadow-sm ring-1 ring-primary"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-primary"
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      {/* FAQ Listesi */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => {
          const isOpen = openFAQ === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 cursor-pointer select-none bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 min-w-[24px]">
                    <span className="material-symbols-outlined text-primary">help</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary font-display">{faq.question}</h3>
                </div>
                <span
                  className={`material-symbols-outlined text-gray-500 transition-transform flex-shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-2 ml-10 border-t border-gray-100 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>{faq.answer}</p>
                  {faq.tags && faq.tags.length > 0 && (
                    <div className="mt-4 flex gap-2">
                      {faq.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
