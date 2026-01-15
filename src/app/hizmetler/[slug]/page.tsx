import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { getServiceBySlug as getServiceListBySlug } from "@/data/services";
import { getServiceDetailBySlug, type ServiceData } from "@/data/serviceDetails";
import ServiceHero from "@/components/services/ServiceHero";
import WhySection from "@/components/services/WhySection";
import ServiceScope from "@/components/services/ServiceScope";
import BeforeAfter from "@/components/services/BeforeAfter";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceDetailCTA from "@/components/services/ServiceDetailCTA";

/**
 * Statik sayfa oluşturma için slug'ları belirle
 */
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * Hizmet detay sayfası için metadata
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const serviceList = getServiceListBySlug(slug);
  const serviceDetail = getServiceDetailBySlug(slug);

  if (!serviceList) {
    return {
      title: "Hizmet Bulunamadı - Tezel Mühendislik",
    };
  }

  const title = serviceDetail?.title || serviceList.title;
  const description = serviceDetail?.description || serviceList.description;

  return {
    title: `${title} - Tezel Mühendislik`,
    description: description,
    keywords: `${title}, hizmetler, Tezel Mühendislik`,
    openGraph: {
      title: `${title} - Tezel Mühendislik`,
      description: description,
      type: "website",
      locale: "tr_TR",
    },
  };
}

/**
 * Hizmet detay sayfası
 */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceList = getServiceListBySlug(slug);
  const serviceDetail = getServiceDetailBySlug(slug);

  if (!serviceList) {
    notFound();
  }

  // Detaylı veri varsa tam sayfayı göster
  if (serviceDetail) {
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

  // Detaylı veri yoksa temel sayfa göster
  return (
    <>
      <ServiceHero
        title={serviceList.title}
        description={serviceList.description}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8"
        imageAlt={`${serviceList.title} hizmeti`}
        ctaText="Teklif Talep Et"
      />
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-primary text-3xl font-display font-bold mb-4">{serviceList.title}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">{serviceList.description}</p>
          </div>
          <div className="flex justify-center mt-12">
            <button className="h-14 px-10 bg-accent hover:bg-[#d97b20] text-white text-lg font-bold transition-colors shadow-lg">
              Teklif Talep Et
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
