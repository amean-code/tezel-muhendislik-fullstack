"use client";

import { contactInfo } from "@/data/contact";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * EmergencySection komponenti - Acil durum hattı bölümü
 */
export default function EmergencySection() {
  return (
    <section className="bg-[#F8F9FA] border-t border-gray-200 py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Acil Durum Kartı */}
          <AnimatedCard index={0}>
            <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="size-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
              <span className="material-symbols-outlined text-4xl">emergency_home</span>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-primary mb-1">{contactInfo.emergency.title}</h4>
              <p className="text-gray-500 text-sm mb-3">{contactInfo.emergency.description}</p>
              <a
                className="inline-flex items-center gap-2 text-red-600 font-black text-xl hover:text-red-700 transition-colors"
                href={`tel:${contactInfo.emergency.phone.replace(/\s/g, "")}`}
              >
                <span className="material-symbols-outlined">call</span>
                {contactInfo.emergency.phone}
                <br />
                {contactInfo.phone2.number}
              </a>
            </div>
            </div>
          </AnimatedCard>

          {/* Mühendislik Garantisi */}
          <AnimatedCard index={1}>
            <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold text-lg">
              <span className="material-symbols-outlined text-accent">verified_user</span>
              <span>Mühendislik Garantisi</span>
            </div>
            <p className="text-gray-600">
              Tezel Mühendislik olarak taleplerinize en geç 24 saat içerisinde teknik ekibimiz
              tarafından detaylı bir inceleme ile dönüş yapılmaktadır.
            </p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
