import type { Metadata } from "next";
import EscalatorHero from "@/components/escalator/EscalatorHero";
import EscalatorServices from "@/components/escalator/EscalatorServices";
import EscalatorStandards from "@/components/escalator/EscalatorStandards";
import EscalatorProcess from "@/components/escalator/EscalatorProcess";
import EscalatorCTA from "@/components/escalator/EscalatorCTA";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Yürüyen Merdiven Sistemleri - Tezel Mühendislik",
  description:
    "Kurulum, revizyon ve bakım süreçlerinde güvenli ve sürdürülebilir yürüyen merdiven çözümleri. EN 115 standartlarına uygun teknik hizmetler.",
  keywords:
    "yürüyen merdiven, yürüyen merdiven kurulumu, yürüyen merdiven bakımı, yürüyen merdiven revizyonu, EN 115, Tezel Mühendislik",
  openGraph: {
    title: "Yürüyen Merdiven Sistemleri - Tezel Mühendislik",
    description: "Kurulum, revizyon ve bakım süreçlerinde güvenli ve sürdürülebilir çözümler.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Yürüyen Merdiven Sistemleri sayfası
 */
export default function EscalatorPage() {
  return (
    <>
      <AnimatedSection animationType="fadeIn" delay={0}>
        <EscalatorHero />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={100}>
        <EscalatorServices />
      </AnimatedSection>
      <AnimatedSection animationType="slideInRight" delay={200}>
        <EscalatorStandards />
      </AnimatedSection>
      <AnimatedSection animationType="scaleIn" delay={300}>
        <EscalatorProcess />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={400}>
        <EscalatorCTA />
      </AnimatedSection>
    </>
  );
}
