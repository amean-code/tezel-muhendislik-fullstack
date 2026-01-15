import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import EmergencySection from "@/components/contact/EmergencySection";

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
      <ContactHero />
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <EmergencySection />
    </>
  );
}
