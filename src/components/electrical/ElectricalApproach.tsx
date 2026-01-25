"use client";

import Image from "next/image";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * ElectricalApproach komponenti - Teknik yaklaşım ve mühendislik standartları bölümü
 */
export default function ElectricalApproach() {
  const features = [
    {
      icon: "check_circle",
      title: "Standartlara Uygun Mühendislik",
      description:
        "EN 81-20/50 ve yerel yönetmeliklere tam uyumlu elektrik şeması tasarımı ve pano imalatı.",
    },
    {
      icon: "shield",
      title: "Güvenlik Odaklı Tasarım",
      description:
        "Kaçak akım koruma, faz sırası kontrolü ve acil durdurma devrelerinde yedekli güvenlik mimarisi.",
    },
    {
      icon: "description",
      title: "Teknik Dokümantasyon",
      description:
        "Her proje için detaylı kablolama şemaları, malzeme listeleri ve bakım kılavuzlarının eksiksiz teslimi.",
    },
    {
      icon: "bolt",
      title: "Test ve Devreye Alma",
      description:
        "Yüksek gerilim testleri, fonksiyonel kontroller ve yük altında performans doğrulama süreçleri.",
    },
  ];

  return (
    <section className="bg-background-light py-24 border-y border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
              Mühendislik Standartları
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-6">
              Elektrik Sistemlerinde Teknik Yaklaşımımız
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Elektriksel güvenlik, sinyal kararlılığı ve sistem ömrünü maksimize eden mühendislik
              prensiplerini uyguluyoruz.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <AnimatedCard key={index} index={index}>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent mt-1">
                      {feature.icon}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-primary text-lg">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </li>
                </AnimatedCard>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-sm border border-primary/20"></div>
            <Image
              alt="Sistem kablolama ve teknik detaylar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8"
              fill
              className="relative w-full h-full object-cover rounded-sm shadow-xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
