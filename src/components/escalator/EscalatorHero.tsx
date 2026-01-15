"use client";

import Image from "next/image";

/**
 * EscalatorHero komponenti - Yürüyen merdiven sayfası hero bölümü
 */
export default function EscalatorHero() {
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
          alt="Modern metro istasyonu yürüyen merdiven mekanik detayları"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpA4dqBmp79ZNsj1yQ8QAbwDty5_EDhk06PpinBsNm79K7fw2d8g-auPEI8iCufYyMB-Hk3TNl8ZHiI3-8tBXia1hTSPsI4NHO4AVvYvpNdqowUAJPmGDOaHYuvLgmVUYjkOuwAglORBrrgC-j-PTtYG1BW0GUQIrMgAhBxQWeqF0v0D-zGsxqgG_zUDUoVJgxSsZQ0wrD-QP5db_Np1tFDuh7k0DVmSp6n5QzCvMJs7E1j6FGlDiKXxdt9dUF1U9HYLDHOtKEgbA"
          fill
          className="object-cover opacity-60 grayscale"
          priority
        />
      </div>
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-6 items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/40 backdrop-blur-sm mb-2">
            <span className="w-2 h-2 bg-accent animate-pulse"></span>
            <span className="text-accent text-xs font-bold uppercase tracking-widest">
              Endüstriyel Standartlar
            </span>
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight">
            Yürüyen Merdiven Sistemleri
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light font-display max-w-2xl leading-relaxed">
            Kurulum, revizyon ve bakım süreçlerinde güvenli ve sürdürülebilir çözümler.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToServiceDetails}
              className="px-8 py-4 bg-accent hover:bg-[#d97b20] text-white font-bold transition-colors shadow-lg flex items-center gap-2"
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
