"use client";

import Image from "next/image";

/**
 * MaintenanceHero komponenti - Bakım ve onarım sayfası hero bölümü
 */
export default function MaintenanceHero() {
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
          alt="Teknik ekip asansör kumanda panosu incelemesi"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8"
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
              7/24 Teknik Servis
            </span>
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight">
            Bakım & Onarım Hizmetleri
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light font-display max-w-2xl leading-relaxed">
            Asansör ve yürüyen merdiven sistemlerinde güvenli, kesintisiz ve planlı bakım çözümleri.
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
