import type { Metadata } from "next";
import EscalatorHero from "@/components/escalator/EscalatorHero";
import EscalatorServices from "@/components/escalator/EscalatorServices";
import EscalatorStandards from "@/components/escalator/EscalatorStandards";
import EscalatorProcess from "@/components/escalator/EscalatorProcess";
import EscalatorCTA from "@/components/escalator/EscalatorCTA";

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
      <EscalatorHero />
      <EscalatorServices />
      <EscalatorStandards />
      <EscalatorProcess />
      <EscalatorCTA />
    </>
  );
}
