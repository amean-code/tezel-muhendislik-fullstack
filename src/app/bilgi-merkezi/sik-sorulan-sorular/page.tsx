import type { Metadata } from "next";
import FAQHero from "@/components/faq/FAQHero";
import FAQList from "@/components/faq/FAQList";
import FAQSidebar from "@/components/faq/FAQSidebar";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular - Tezel Mühendislik",
  description:
    "Teknik süreçler, modernizasyon, bakım periyotları ve yasal mevzuatlar hakkında merak ettiğiniz tüm soruların mühendislik onaylı cevapları.",
  keywords:
    "sık sorulan sorular, FAQ, asansör bakımı, modernizasyon, mevzuat, teknik sorular, Tezel Mühendislik",
  openGraph: {
    title: "Sık Sorulan Sorular - Tezel Mühendislik",
    description: "Asansör ve yürüyen merdiven sistemleri hakkında sık sorulan sorular ve cevapları.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Sık Sorulan Sorular sayfası - FAQ listesi ve soru sorma formu
 */
export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <main className="flex-grow bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <FAQList />
            <FAQSidebar />
          </div>
        </div>
      </main>
    </>
  );
}
