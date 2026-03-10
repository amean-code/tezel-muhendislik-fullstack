import Link from "next/link";
import { serviceDetails } from "@/data/serviceDetails";

/**
 * Slug'dan hizmet detay sayfası URL'sine dönüştürür (route path ile slug birebir eşleşmeyebilir).
 */
function getServiceUrl(slug: string): string {
  const urlMap: Record<string, string> = {
    "asansor-modernizasyonu": "/hizmetler/asansor-modernizasyonu",
    "yuruyen-merdiven-bant-modernizasyonu": "/hizmetler/yuruyen-merdiven-bant-modernizasyonu",
    "yedek-parca-satisi": "/hizmetler/yedek-parca-satisi",
    "enerji-taahhut-isleri": "/hizmetler/enerji-taahhut",
    "elektrik-elektronik-taahhut": "/hizmetler/elektrik-elektronik-taahhut",
    "test-denetim": "/hizmetler/test-denetim",
  };
  return urlMap[slug] || `/hizmetler/${slug}`;
}

/**
 * ServicesGrid komponenti - Hizmet kartları grid'i (yalnızca başlık ve açıklama ile, görselsiz).
 */
export default function ServicesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary text-3xl font-display font-bold mb-4">
            Mühendislik Çözümleri
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Tezel Mühendislik olarak, projelendirmeden işletmeye almaya kadar tüm süreçlerde
            uluslararası standartlarda hizmet sunuyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service) => (
            <Link
              key={service.slug}
              href={getServiceUrl(service.slug)}
              className="bg-white border border-gray-200 overflow-hidden service-card-hover transition-all duration-300 group block"
            >
              <div className="h-1 w-full bg-primary/80 group-hover:bg-accent transition-colors duration-300" />
              <div className="p-8">
                <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
