import type { Metadata } from "next";
import { getServiceDetailBySlug } from "@/data/serviceDetails";
import ServiceHero from "@/components/services/ServiceHero";
import WhySection from "@/components/services/WhySection";
import ServiceScope from "@/components/services/ServiceScope";
import BeforeAfter from "@/components/services/BeforeAfter";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceDetailCTA from "@/components/services/ServiceDetailCTA";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Yedek Parça Satışı - Tezel Mühendislik",
  description:
    "Asansör, yürüyen merdiven ve bant sistemleri için orijinal veya uyumlu, sertifikalı yedek parça temini. Hızlı lojistik çözümleri.",
  keywords:
    "yedek parça, asansör yedek parça, yürüyen merdiven yedek parça, orijinal parça, Tezel Mühendislik",
  openGraph: {
    title: "Yedek Parça Satışı - Tezel Mühendislik",
    description: "Geniş stok ağı ile hızlı ve güvenilir yedek parça temini.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Yedek Parça Satışı sayfası
 */
export default function SparePartsPage() {
  const serviceDetail = getServiceDetailBySlug("yedek-parca-satisi");

  if (!serviceDetail) {
    return null;
  }

  return (
    <>
      <AnimatedSection animationType="fadeIn" delay={0}>
        <ServiceHero
          badge={serviceDetail.badge}
          title={serviceDetail.title}
          description={serviceDetail.description}
          image={serviceDetail.heroImage}
          imageAlt={serviceDetail.heroImageAlt}
          ctaText={serviceDetail.cta.primaryButton}
        />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={100}>
        <WhySection
          badge="Hizmet Kapsamı"
          title={serviceDetail.whyTitle}
          subtitle={serviceDetail.whySubtitle}
          cards={serviceDetail.whyCards}
        />
      </AnimatedSection>
      <AnimatedSection animationType="slideInLeft" delay={200}>
        <ServiceScope
          badge={serviceDetail.scope.badge}
          title={serviceDetail.scope.title}
          description={serviceDetail.scope.description}
          items={serviceDetail.scope.items}
          image={serviceDetail.scope.image}
          imageAlt={serviceDetail.scope.imageAlt}
          note={serviceDetail.scope.note}
        />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={300}>
        <BeforeAfter
          title={serviceDetail.beforeAfter.title}
          subtitle={serviceDetail.beforeAfter.subtitle}
          items={serviceDetail.beforeAfter.items}
        />
      </AnimatedSection>
      <AnimatedSection animationType="scaleIn" delay={400}>
        <ServiceProcess
          badge="Süreç Yönetimi"
          title={serviceDetail.process.title}
          subtitle={serviceDetail.process.subtitle}
          steps={serviceDetail.process.steps}
        />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={500}>
        <ServiceDetailCTA
          title={serviceDetail.cta.title}
          description={serviceDetail.cta.description}
          primaryButton={serviceDetail.cta.primaryButton}
          secondaryButton={serviceDetail.cta.secondaryButton}
        />
      </AnimatedSection>
    </>
  );
}
