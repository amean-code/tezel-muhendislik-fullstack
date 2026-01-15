"use client";

import Link from "next/link";

/**
 * ProductPageHeading komponenti - Ürün detay sayfası başlık ve aksiyon butonları
 */
interface ProductPageHeadingProps {
  title: string;
  description: string;
}

export default function ProductPageHeading({ title, description }: ProductPageHeadingProps) {
  /**
   * Teklif talep et butonuna tıklama işleyicisi
   */
  const handleRequestQuote = () => {
    window.location.href = "/iletisim";
  };

  /**
   * PDF katalog indirme işleyicisi
   */
  const handleDownloadCatalog = () => {
    // PDF indirme işlemi burada yapılacak
    console.log("Katalog indiriliyor...");
  };

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-gray-200 pb-8">
      <div className="max-w-3xl">
        <h1 className="text-primary text-4xl font-black leading-tight tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-gray-600 text-lg font-normal">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-3 min-w-[200px]">
        <button
          onClick={handleRequestQuote}
          className="w-full bg-primary hover:bg-accent text-white px-8 py-4 font-bold text-base shadow-sm transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">request_quote</span>
          TEKLİF TALEP ET
        </button>
        <button
          onClick={handleDownloadCatalog}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 font-bold text-sm transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">download</span>
          Teknik Katalog (PDF)
        </button>
      </div>
    </div>
  );
}
