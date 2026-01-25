import type { Metadata } from "next";
import MaintenanceHero from "@/components/maintenance/MaintenanceHero";
import MaintenanceServices from "@/components/maintenance/MaintenanceServices";
import MaintenanceProcess from "@/components/maintenance/MaintenanceProcess";
import MaintenanceStandards from "@/components/maintenance/MaintenanceStandards";
import MaintenanceCTA from "@/components/maintenance/MaintenanceCTA";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Bakım & Onarım Hizmetleri - Tezel Mühendislik",
  description:
    "Asansör ve yürüyen merdiven sistemlerinde güvenli, kesintisiz ve planlı bakım çözümleri. 7/24 teknik servis ve acil müdahale.",
  keywords:
    "bakım onarım, periyodik bakım, asansör bakımı, teknik servis, arıza müdahalesi, Tezel Mühendislik",
  openGraph: {
    title: "Bakım & Onarım Hizmetleri - Tezel Mühendislik",
    description: "Asansör ve yürüyen merdiven sistemlerinde güvenli, kesintisiz ve planlı bakım çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Bakım & Onarım Hizmetleri sayfası
 */
export default function MaintenancePage() {
  return (
    <>
      <AnimatedSection animationType="fadeIn" delay={0}>
        <MaintenanceHero />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={100}>
        <MaintenanceServices />
      </AnimatedSection>
      <AnimatedSection animationType="scaleIn" delay={200}>
        <MaintenanceProcess />
      </AnimatedSection>
      <AnimatedSection animationType="slideInRight" delay={300}>
        <MaintenanceStandards />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={400}>
        <MaintenanceCTA />
      </AnimatedSection>
    </>
  );
}
