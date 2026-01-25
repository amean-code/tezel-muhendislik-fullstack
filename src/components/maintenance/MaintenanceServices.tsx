"use client";

import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * MaintenanceServices komponenti - Bakım hizmet kapsamı kartları
 */
export default function MaintenanceServices() {
  const services = [
    {
      icon: "calendar_month",
      title: "Periyodik Bakım",
      items: [
        "Yasal mevzuata uygun aylık kontroller",
        "Sistem yağlama ve temizlik işlemleri",
        "Halat ve makara grubu testleri",
        "Güvenlik devreleri doğrulama",
      ],
    },
    {
      icon: "build_circle",
      title: "Arıza Müdahalesi",
      items: [
        "7/24 acil servis ve teknik destek",
        "Ortalama 60 dakika içinde müdahale",
        "Mobil araç stoklu yedek parça",
        "Arıza kayıt ve takip sistemi",
      ],
    },
    {
      icon: "health_and_safety",
      title: "Önleyici Bakım",
      items: [
        "Kestirimci bakım analizleri",
        "Termal kamera ile pano kontrolleri",
        "Vibrasyon analizi ve raporlama",
        "Olası arızaların önceden tespiti",
      ],
    },
  ];

  return (
    <section id="service-details-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
            Hizmet Kapsamı
          </h2>
          <h2 className="text-primary text-3xl md:text-4xl font-display font-bold mb-4">
            Bakım Hizmetleri
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Tesisinizdeki dikey ulaşım sistemleri için profesyonel mühendislik yaklaşımları.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm hover:border-accent/50 transition-colors group h-full">
              <div className="mb-6 inline-flex items-center justify-center p-4 bg-white shadow-sm rounded-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-[40px]">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4">{service.title}</h3>
              <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside marker:text-accent">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
