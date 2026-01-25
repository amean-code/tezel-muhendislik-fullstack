"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

/**
 * MaintenanceStandards komponenti - Standartlar ve güvenlik bölümü
 */
export default function MaintenanceStandards() {
  return (
    <AnimatedSection animationType="slideInRight" delay={0}>
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm border border-gray-200">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-accent text-3xl">security</span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary">
                  Standartlar ve Güvenlik
                </h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Tezel Mühendislik olarak tüm bakım süreçlerimizde uluslararası güvenlik normlarını
                esas alıyoruz. Can ve mal güvenliği, ödün vermediğimiz en temel prensibimizdir.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-sm flex items-center justify-center border border-gray-200">
                    <span className="font-bold text-primary">EN 81</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-primary">Asansör Standartları</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      TS EN 81-20/50 standartlarına tam uyumlu bakım prosedürleri.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-sm flex items-center justify-center border border-gray-200">
                    <span className="font-bold text-primary">EN 115</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-primary">Yürüyen Merdiven Standartları</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      TS EN 115 normlarına uygun periyodik kontrol ve risk analizi.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-sm flex items-center justify-center border border-gray-200">
                    <span className="material-symbols-outlined text-accent">badge</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-primary">Yetkili Personel</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Sertifikalı, eğitimli ve iş güvenliği donanımına sahip teknik kadro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative min-h-[400px]">
              <Image
                alt="Teknik personel çalışma anı"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkzSJcx8LphmXZYblHxZt7mlEx-rsL6TArrTBR99--qXLuDOdh8lic3fVb5S9pgxpNWJHdSMvrtON6qWQZlz-VykTDzBADYo04EZgPrng2iSFVCm-iUuQ6didKN17w3jQM6FWo_5EdSPJKvS39_ykqHdaMpdLSMUTZL5Yd59GJqmF2XL5kZdh9zgrtmZpww7grnMqEyaajFhzLCzgmvF0vXcyBXg-a1qeYVS2LVN8lFLM4Xuw82U5PjvAs6iFEIO5OTn446mD1aRA"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
}
