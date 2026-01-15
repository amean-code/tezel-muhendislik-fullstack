import type { Metadata } from "next";
import { getServiceDetailBySlug } from "@/data/serviceDetails";
import ServiceHero from "@/components/services/ServiceHero";
import WhySection from "@/components/services/WhySection";
import ServiceScope from "@/components/services/ServiceScope";
import BeforeAfter from "@/components/services/BeforeAfter";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceDetailCTA from "@/components/services/ServiceDetailCTA";

export const metadata: Metadata = {
  title: "Asansör Modernizasyonu - Tezel Mühendislik",
  description:
    "Güvenlik, enerji verimliliği ve performans odaklı revizyon çözümleri ile binanızın değerini artırın.",
  keywords:
    "asansör modernizasyonu, asansör revizyonu, asansör yenileme, EN 81-80, Tezel Mühendislik",
  openGraph: {
    title: "Asansör Modernizasyonu - Tezel Mühendislik",
    description: "Güvenlik, enerji verimliliği ve performans odaklı revizyon çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Asansör Modernizasyonu sayfası
 */
export default function ModernizationPage() {
  const serviceDetail = getServiceDetailBySlug("asansor-modernizasyonu");

  if (!serviceDetail) {
    return null;
  }

  return (
    <>
      <ServiceHero
        badge={serviceDetail.badge}
        title={serviceDetail.title}
        description={serviceDetail.description}
        image={serviceDetail.heroImage}
        imageAlt={serviceDetail.heroImageAlt}
        ctaText={serviceDetail.cta.primaryButton}
      />
      <WhySection
        badge="Hizmet Kapsamı"
        title={serviceDetail.whyTitle}
        subtitle={serviceDetail.whySubtitle}
        cards={serviceDetail.whyCards}
      />
      <ServiceScope
        badge={serviceDetail.scope.badge}
        title={serviceDetail.scope.title}
        description={serviceDetail.scope.description}
        items={serviceDetail.scope.items}
        image={serviceDetail.scope.image}
        imageAlt={serviceDetail.scope.imageAlt}
        note={serviceDetail.scope.note}
      />
      <BeforeAfter
        title={serviceDetail.beforeAfter.title}
        subtitle={serviceDetail.beforeAfter.subtitle}
        items={serviceDetail.beforeAfter.items}
      />
      <ServiceProcess
        badge="Süreç Yönetimi"
        title={serviceDetail.process.title}
        subtitle={serviceDetail.process.subtitle}
        steps={serviceDetail.process.steps}
      />
      <ServiceDetailCTA
        title={serviceDetail.cta.title}
        description={serviceDetail.cta.description}
        primaryButton={serviceDetail.cta.primaryButton}
        secondaryButton={serviceDetail.cta.secondaryButton}
      />
    </>
  );
}
