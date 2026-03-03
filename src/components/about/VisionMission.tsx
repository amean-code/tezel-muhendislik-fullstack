"use client";

import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * VisionMission komponenti - Vizyon ve Misyon bölümü
 */
export default function VisionMission() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard index={0}>
            <div className="bg-white p-12 shadow-sm border-t-4 border-primary h-full">
            <h4 className="text-primary text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">visibility</span>
              Vizyon
            </h4>
            <p className="text-gray-600 leading-relaxed text-lg">
              Yatay ve dikey taşıma teknolojilerinde küresel standartları belirleyen, yenilikçi ve sürdürülebilir
              mühendislik çözümleriyle sektörde öncü, dijitalleşen bina sistemlerinde vazgeçilmez bir teknoloji
              ortağı olmak.
            </p>
            </div>
          </AnimatedCard>
          <AnimatedCard index={1}>
            <div className="bg-white p-12 shadow-sm border-t-4 border-accent h-full">
            <h4 className="text-primary text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">rocket_launch</span>
              Misyon
            </h4>
            <p className="text-gray-600 leading-relaxed text-lg">
              Can ve mal güvenliğini en üst düzeyde tutarak, ileri mühendislik disipliniyle yüksek kaliteli,
              verimli ve güvenilir yatay ve dikey taşıma sistemleri tasarlamak, kurmak ve sürdürülebilirliğini sağlamak.
            </p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
