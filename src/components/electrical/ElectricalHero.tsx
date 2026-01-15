"use client";

import Image from "next/image";

/**
 * ElectricalHero komponenti - Elektrik ve kontrol sistemleri sayfası hero bölümü
 */
export default function ElectricalHero() {
  /**
   * Hizmet detayları bölümüne kaydırma fonksiyonu
   */
  const scrollToServiceDetails = () => {
    const serviceDetailsSection = document.getElementById("service-details-section");
    if (serviceDetailsSection) {
      serviceDetailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full h-[600px] bg-primary flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          alt="Endüstriyel elektrik panoları ve kontrol kartları"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkzSJcx8LphmXZYblHxZt7mlEx-rsL6TArrTBR99--qXLuDOdh8lic3fVb5S9pgxpNWJHdSMvrtON6qWQZlz-VykTDzBADYo04EZgPrng2iSFVCm-iUuQ6didKN17w3jQM6FWo_5EdSPJKvS39_ykqHdaMpdLSMUTZL5Yd59GJqmF2XL5kZdh9zgrtmZpww7grnMqEyaajFhzLCzgmvF0vXcyBXg-a1qeYVS2LVN8lFLM4Xuw82U5PjvAs6iFEIO5OTn446mD1aRA"
          fill
          className="object-cover opacity-60 grayscale"
          priority
        />
      </div>
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-6 items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/40 rounded-full mb-2 backdrop-blur-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-accent text-xs font-bold uppercase tracking-widest">
              Endüstriyel Çözümler
            </span>
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight">
            Elektrik & Kontrol Sistemleri
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light font-display max-w-2xl leading-relaxed">
            Asansör ve yürüyen merdiven sistemleri için güvenli, sürdürülebilir ve kontrol edilebilir
            çözümler.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToServiceDetails}
              className="px-8 py-4 bg-accent hover:bg-[#d97b20] text-white font-bold rounded-sm transition-colors shadow-lg flex items-center gap-2"
            >
              <span>Hizmet Detayları</span>
              <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
