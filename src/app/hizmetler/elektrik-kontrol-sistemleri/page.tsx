import type { Metadata } from "next";
import ElectricalHero from "@/components/electrical/ElectricalHero";
import ElectricalServices from "@/components/electrical/ElectricalServices";
import ElectricalApproach from "@/components/electrical/ElectricalApproach";
import ElectricalStandards from "@/components/electrical/ElectricalStandards";
import ElectricalCTA from "@/components/electrical/ElectricalCTA";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Elektrik & Kontrol Sistemleri - Tezel Mühendislik",
  description:
    "Asansör ve yürüyen merdiven sistemleri için güvenli, sürdürülebilir ve kontrol edilebilir elektrik ve otomasyon çözümleri.",
  keywords:
    "elektrik sistemleri, kontrol sistemleri, pano sistemleri, otomasyon, VVVF, PLC, Tezel Mühendislik",
  openGraph: {
    title: "Elektrik & Kontrol Sistemleri - Tezel Mühendislik",
    description: "Güvenli, sürdürülebilir ve kontrol edilebilir elektrik ve otomasyon çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Elektrik & Kontrol Sistemleri sayfası
 */
export default function ElectricalSystemsPage() {
  return (
    <>
      <AnimatedSection animationType="fadeIn" delay={0}>
        <ElectricalHero />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={100}>
        <ElectricalServices />
      </AnimatedSection>
      <AnimatedSection animationType="slideInLeft" delay={200}>
        <ElectricalApproach />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={300}>
        <ElectricalStandards />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={400}>
        <ElectricalCTA />
      </AnimatedSection>
    </>
  );
}
