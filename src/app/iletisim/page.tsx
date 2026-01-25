import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import EmergencySection from "@/components/contact/EmergencySection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "İletişim ve Teklif Formu - Tezel Mühendislik",
  description:
    "Endüstriyel asansör ve yürüyen merdiven çözümlerimiz için teknik ekibimizle iletişime geçin veya projeniz için detaylı teklif alın.",
  keywords:
    "iletişim, teklif, asansör, yürüyen merdiven, teknik destek, Tezel Mühendislik, mühendislik hizmetleri",
  openGraph: {
    title: "İletişim ve Teklif Formu - Tezel Mühendislik",
    description: "Teknik ekibimizle iletişime geçin veya projeniz için detaylı teklif alın.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * İletişim sayfası - Teklif talep formu ve iletişim bilgileri
 */
export default function ContactPage() {
  return (
    <>
      <AnimatedSection animationType="fadeIn" delay={0}>
        <ContactHero />
      </AnimatedSection>
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection animationType="slideInLeft" delay={100}>
              <ContactInfo />
            </AnimatedSection>
            <AnimatedSection animationType="slideInRight" delay={200}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <AnimatedSection animationType="fadeInUp" delay={300}>
        <EmergencySection />
      </AnimatedSection>
    </>
  );
}
