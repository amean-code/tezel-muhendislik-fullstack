import type { Metadata } from "next";
import MaintenanceHero from "@/components/maintenance/MaintenanceHero";
import MaintenanceServices from "@/components/maintenance/MaintenanceServices";
import MaintenanceProcess from "@/components/maintenance/MaintenanceProcess";
import MaintenanceStandards from "@/components/maintenance/MaintenanceStandards";
import MaintenanceCTA from "@/components/maintenance/MaintenanceCTA";

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
      <MaintenanceHero />
      <MaintenanceServices />
      <MaintenanceProcess />
      <MaintenanceStandards />
      <MaintenanceCTA />
    </>
  );
}
