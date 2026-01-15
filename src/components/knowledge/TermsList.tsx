"use client";

import { TechnicalTerm } from "@/data/technicalTerms";
import TermCard from "./TermCard";

/**
 * TermsList komponenti - Filtrelenmiş terimleri harflere göre gruplayarak gösterir
 */
export default function TermsList({ terms }: { terms: TechnicalTerm[] }) {
  /**
   * Terimleri harfe göre gruplar
   */
  const groupedByLetter = terms.reduce((acc, term) => {
    const letter = term.firstLetter;
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, TechnicalTerm[]>);

  /**
   * Harfleri alfabetik sıraya göre sıralar
   */
  const sortedLetters = Object.keys(groupedByLetter).sort();

  if (terms.length === 0) {
    return (
      <div className="text-center py-12">
        <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">search_off</span>
        <p className="text-gray-500 text-lg">Aradığınız terim bulunamadı.</p>
        <p className="text-gray-400 text-sm mt-2">Farklı bir arama terimi deneyin.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {sortedLetters.map((letter) => (
        <div key={letter} className="mb-12">
          <div className="flex items-center gap-4 mb-6 pb-2 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-primary">{letter}</h2>
            <span className="text-sm text-gray-500 font-medium bg-gray-50 px-2 py-1 rounded">
              {groupedByLetter[letter].length} terim
            </span>
          </div>
          <div className="space-y-6">
            {groupedByLetter[letter].map((term) => (
              <TermCard key={term.id} term={term} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
