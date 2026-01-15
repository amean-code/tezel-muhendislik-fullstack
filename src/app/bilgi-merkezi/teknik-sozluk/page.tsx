"use client";

import { useState, useMemo } from "react";
import TechnicalDictionaryHero from "@/components/knowledge/TechnicalDictionaryHero";
import AlphabetFilter from "@/components/knowledge/AlphabetFilter";
import TermsList from "@/components/knowledge/TermsList";
import TechnicalDictionarySidebar from "@/components/knowledge/TechnicalDictionarySidebar";
import {
  technicalTerms,
  getTermsByLetter,
  getLetterCounts,
  searchTerms,
} from "@/data/technicalTerms";

/**
 * Teknik Sözlük sayfası - Asansör ve yürüyen merdiven teknik terimleri
 */
export default function TechnicalDictionaryPage() {
  const [selectedLetter, setSelectedLetter] = useState<string | null>("#");
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Filtrelenmiş terimleri hesaplar
   */
  const filteredTerms = useMemo(() => {
    if (searchQuery.trim()) {
      return searchTerms(searchQuery);
    }
    if (selectedLetter === "#") {
      return technicalTerms; // Tüm terimleri göster
    }
    if (selectedLetter) {
      return getTermsByLetter(selectedLetter);
    }
    return technicalTerms;
  }, [selectedLetter, searchQuery]);

  /**
   * Harf sayılarını hesaplar
   */
  const letterCounts = useMemo(() => getLetterCounts(), []);

  /**
   * Arama fonksiyonu
   */
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedLetter(null); // Arama yapıldığında harf filtresini temizle
  };

  /**
   * Harf seçimi fonksiyonu
   */
  const handleLetterSelect = (letter: string | null) => {
    setSelectedLetter(letter);
    setSearchQuery(""); // Harf seçildiğinde arama sorgusunu temizle
  };

  return (
    <>
      <TechnicalDictionaryHero onSearch={handleSearch} />
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <AlphabetFilter
            selectedLetter={selectedLetter}
            onLetterSelect={handleLetterSelect}
            letterCounts={letterCounts}
          />
          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            <div className="flex-1 min-w-0">
              <TermsList terms={filteredTerms} />
            </div>
            <TechnicalDictionarySidebar />
          </div>
        </div>
      </section>
    </>
  );
}
