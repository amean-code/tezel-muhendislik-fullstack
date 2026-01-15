import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFeature from "@/components/services/ServicesFeature";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Hizmetlerimiz - Tezel Mühendislik",
  description:
    "Yüksek mühendislik standartlarında asansör ve yürüyen merdiven çözümleri. Güvenlik, verimlilik ve sürdürülebilirlik odaklı teknik hizmetler.",
  keywords:
    "asansör hizmetleri, modernizasyon, periyodik bakım, mühendislik, yürüyen merdiven, yedek parça, test denetim, Tezel Mühendislik",
  openGraph: {
    title: "Hizmetlerimiz - Tezel Mühendislik",
    description: "Yüksek mühendislik standartlarında asansör ve yürüyen merdiven çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Hizmetler sayfası - Teknik hizmetler ve çözümler
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesFeature />
      <ProcessTimeline />
      <ServicesCTA />
    </>
  );
}
