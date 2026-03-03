"use client";

import Image from "next/image";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * HeritageSection komponenti - Mühendislik mirasımız bölümü
 */
export default function HeritageSection() {
  const features = [
    "Uluslararası Mühendislik Standartları",
    "Yerli Üretim Gücü",
    "7/24 Teknik Servis Altyapısı",
    "Sürdürülebilir Teknoloji Odaklılık",
  ];

  return (
    <section className="py-24 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
            Mühendislik Mirasımız
          </h2>
          <h3 className="text-primary text-3xl font-bold mb-8">
            Endüstriyel Disiplinle Şekillenen Bir Geçmiş
          </h3>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Tezel Mühendislik, kuruluşundan bu yana asansör ve yürüyen merdiven sistemlerinde mühendislik
              odaklı bir yaklaşımı benimsemiştir. Teknik yeterliliğimiz ve çözüm odaklı yapımızla, Türkiye
              genelinde prestijli projelerin yatay ve dikey taşıma sistemlerini üstlendik.
            </p>
            <p>
              Sadece bir elektromekanik sağlayıcı değil, aynı zamanda projenin planlama aşamasından işletme
              sürecine kadar stratejik bir mühendislik partneri olarak konumlanıyoruz.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <AnimatedCard key={index} index={index}>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent">check_circle</span>
                    <span className="text-primary font-semibold text-sm">{feature}</span>
                  </li>
                </AnimatedCard>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3]">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-accent z-10"></div>
            <Image
              alt="Asansör komponentleri teknik görünüm"
              src="/test-denetim/yuruyen-merdiven-asansor-test-bakim.jpg"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
