import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import HeritageSection from "@/components/about/HeritageSection";
import VisionMission from "@/components/about/VisionMission";
import ExpertiseAreas from "@/components/about/ExpertiseAreas";
import QualityStandards from "@/components/about/QualityStandards";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "Hakkımızda - Kurumsal Mühendislik Profili | Tezel Mühendislik",
  description:
    "Çeyrek asırlık mühendislik tecrübemizle, binaların kalbinde güvenliği ve verimliliği yeniden tanımlıyoruz. Uluslararası standartlarda dikey taşıma çözümleri.",
  keywords:
    "Tezel Mühendislik, hakkımızda, mühendislik, asansör sistemleri, kurumsal profil, vizyon, misyon",
  openGraph: {
    title: "Hakkımızda - Tezel Mühendislik",
    description: "Çeyrek asırlık mühendislik tecrübemizle güvenilir dikey taşıma çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Hakkımızda sayfası - Kurumsal profil ve mühendislik mirası
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HeritageSection />
      <VisionMission />
      <ExpertiseAreas />
      <QualityStandards />
      <AboutCTA />
    </>
  );
}
