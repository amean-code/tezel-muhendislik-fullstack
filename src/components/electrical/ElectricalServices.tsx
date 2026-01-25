"use client";

import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * ElectricalServices komponenti - Elektrik ve kontrol sistemleri hizmet kartları
 */
export default function ElectricalServices() {
  const services = [
    {
      icon: "settings_power",
      title: "Pano Sistemleri",
      description:
        "Asansör ve yürüyen merdivenler için özel tasarım kumanda panoları. Frekans invertörleri (VVVF), PLC entegrasyonu ve EMC uyumlu kablolama ile maksimum performans.",
    },
    {
      icon: "memory",
      title: "Otomasyon & Kontrol Çözümleri",
      description:
        "Akıllı mikroişlemci tabanlı yönetim sistemleri. Uzaktan izleme, hata teşhis modülleri ve adaptif trafik algoritmaları ile kesintisiz ve verimli operasyon.",
    },
    {
      icon: "electrical_services",
      title: "Elektrik Altyapı Bakımı",
      description:
        "Tüm elektrik tesisatının periyodik kontrolü, termal kamera ile risk analizi ve güvenlik devrelerinin test edilmesi. Arıza önleyici proaktif bakım protokolleri.",
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
            Elektrik & Kontrol Çözümleri
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Modern teknolojilerle donatılmış elektrik ve otomasyon altyapı hizmetleri.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-gray-400 transition-all duration-300 group shadow-sm h-full">
              <div className="mb-6 inline-flex items-center justify-center p-4 bg-gray-50 border border-gray-100 rounded-sm">
                <span className="material-symbols-outlined text-primary text-[40px]">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
