"use client";

/**
 * AlphabetFilter komponenti - Alfabetik filtreleme butonları
 * Türkçe alfabeye göre harf butonları gösterir
 */
export default function AlphabetFilter({
  selectedLetter,
  onLetterSelect,
  letterCounts,
}: {
  selectedLetter: string | null;
  onLetterSelect: (letter: string | null) => void;
  letterCounts: Record<string, number>;
}) {
  /**
   * Türkçe alfabe harfleri
   */
  const turkishAlphabet = [
    "#",
    "A",
    "B",
    "C",
    "Ç",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "İ",
    "K",
    "L",
    "M",
    "N",
    "O",
    "Ö",
    "P",
    "R",
    "S",
    "Ş",
    "T",
    "U",
    "Ü",
    "V",
    "Y",
    "Z",
  ];

  return (
    <div className="max-w-4xl mx-auto mt-12 overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex justify-center min-w-max gap-1 md:gap-2">
        {turkishAlphabet.map((letter) => {
          const hasTerms = letter === "#" || letterCounts[letter] > 0;
          const isSelected = selectedLetter === letter;

          if (!hasTerms && letter !== "#") {
            return (
              <span
                key={letter}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-gray-400"
              >
                {letter}
              </span>
            );
          }

          return (
            <button
              key={letter}
              onClick={() => {
                if (letter === "#") {
                  // "#" butonu her zaman aktif kalmalı
                  onLetterSelect("#");
                } else {
                  // Diğer harfler için toggle mantığı
                  onLetterSelect(isSelected ? null : letter);
                }
              }}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-medium border transition-all ${
                isSelected
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-gray-600 hover:bg-primary hover:text-white border-gray-200 hover:border-primary"
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
