import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceDetailCTA from "@/components/services/ServiceDetailCTA";

export const metadata: Metadata = {
  title: "Asansör Bileşenleri - Tezel Mühendislik",
  description: "Yüksek kaliteli asansör bileşenleri ve yedek parçalar. Motorlar, kumanda panoları, kapı sistemleri ve güvenlik komponentleri. ISO standartlarında üretim.",
  keywords: "asansör bileşenleri, asansör motoru, kumanda panosu, kapı sistemi, güvenlik komponentleri, yedek parça, Tezel Mühendislik",
  openGraph: {
    title: "Asansör Bileşenleri - Tezel Mühendislik",
    description: "Yüksek kaliteli asansör bileşenleri ve yedek parçalar.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Ürünler sayfası - Asansör bileşenleri kataloğu
 */
export default function ProductsPage() {
  return (
    <AnimatedSection animationType="fadeInUp" delay={0}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 gap-8 px-4 sm:px-6 lg:px-8 py-8">
        {/* Ana İçerik - İki büyük görsel alanı */}
        <div className="flex-1">
          <AnimatedSection animationType="fadeInUp" delay={200}>
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
                Asansör ve Yürüyen Merdiven/Bant Yedek Parçaları
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Asansör ve yürüyen merdiven/bant sistemleriniz için geniş yedek parça çözümlerimizi keşfedin. Detaylı bilgi için iletişime geçiniz.
                
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fadeInUp" delay={300}>
            <div className="grid gap-8">
              <button
                type="button"
                className="group relative block h-[600px] sm:h-[320px] md:h-[560px] overflow-hidden rounded-xl border border-gray-200 bg-black/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Image
                  src="/yedek-parca/yedek-parca-asansor-yuruyen-merdiven.jpeg"
                  alt="Yürüyen merdiven ve bant sistemleri yedek parçaları"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </div>
          </AnimatedSection>
          <br />
          {/* Not: Görseller tıklandığında yalnızca büyütmek için gelecekte bir lightbox/modal eklenebilir. Şu an yönlendirme yok. */}
          <AnimatedSection animationType="fadeInUp" delay={500}>
          <ServiceDetailCTA
          title="Asansör ve Yürüyen Merdiven/Bant Yedek Parçaları"
          description="Asansör ve yürüyen merdiven/bant sistemleriniz için geniş yedek parça çözümlerimizi keşfedin. Detaylı bilgi için iletişime geçiniz."
          primaryButton="İletişime Geç"
          secondaryButton="Teklif Talep Et"
          />
        </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
}
