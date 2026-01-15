import type { Metadata } from "next";
import RegulationsHero from "@/components/regulations/RegulationsHero";
import RegulationsList from "@/components/regulations/RegulationsList";
import RegulationsSidebar from "@/components/regulations/RegulationsSidebar";

export const metadata: Metadata = {
  title: "Yasal Yönetmelikler - Tezel Mühendislik",
  description:
    "Asansör işletme, bakım, periyodik kontrol yönetmelikleri ve uluslararası standartlar için güncel bilgi bankası.",
  keywords:
    "yasal yönetmelikler, mevzuat, asansör yönetmeliği, TS EN 81-20, periyodik kontrol, resmi gazete, standartlar",
  openGraph: {
    title: "Yasal Yönetmelikler - Tezel Mühendislik",
    description: "Asansör işletme, bakım, periyodik kontrol yönetmelikleri ve uluslararası standartlar.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Yasal Yönetmelikler sayfası - Mevzuat ve yönetmelikler kütüphanesi
 */
export default function RegulationsPage() {
  return (
    <>
      <RegulationsHero />
      <main className="flex-grow bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <RegulationsList />
            <RegulationsSidebar />
          </div>
        </div>
      </main>
    </>
  );
}
