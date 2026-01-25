"use client";

import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * ExpertiseAreas komponenti - Uzmanlık alanları bölümü
 */
interface ExpertiseArea {
  icon: string;
  title: string;
  description: string;
}

export default function ExpertiseAreas() {
  const areas: ExpertiseArea[] = [
    {
      icon: "elevator",
      title: "Asansör Sistemleri",
      description:
        "Yüksek katlı binalar için yüksek hızlı yolcu ve ağır sanayi tipi yük asansörleri mühendisliği.",
    },
    {
      icon: "upgrade",
      title: "Modernizasyon",
      description:
        "Mevcut sistemlerin güvenlik, enerji tasarrufu ve estetik açıdan en son teknolojiye yükseltilmesi.",
    },
    {
      icon: "escalator",
      title: "Yürüyen Merdivenler",
      description:
        "AVM, metro ve kamusal alanlar için ağır hizmet tipi, kesintisiz taşıma sistemleri kurulumu.",
    },
    {
      icon: "build_circle",
      title: "Bakım",
      description:
        "Periyodik teknik kontroller ve kestirimci bakım modelleriyle maksimum çalışma süresi garantisi.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
            Uzmanlık Alanlarımız
          </h2>
          <h3 className="text-primary text-4xl font-bold">Teknik Mühendislik Çözümleri</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="flex flex-col items-center text-center group">
              <div className="size-20 bg-gray-50 flex items-center justify-center text-gray-800 mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined text-4xl">{area.icon}</span>
              </div>
              <h5 className="text-primary text-xl font-bold mb-3">{area.title}</h5>
              <p className="text-gray-500 text-sm leading-relaxed px-4">{area.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
