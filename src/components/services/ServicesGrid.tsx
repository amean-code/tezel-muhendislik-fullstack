import Link from "next/link";
import { services } from "@/data/services";

/**
 * Slug'dan sayfa URL'sine dönüştürme fonksiyonu
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
  return urlMap[slug] || "/hizmetler";
}

/**
 * ServicesGrid komponenti - Hizmet kartları grid'i
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
          {services.map((service) => (
            <Link
              key={service.slug}
              href={getServiceUrl(service.slug)}
              className="bg-white border border-gray-200 p-8 service-card-hover transition-all duration-300 group block"
            >
              <div className="mb-6 inline-flex items-center justify-center p-3 bg-gray-50">
                <span className="material-symbols-outlined text-primary text-[32px]">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
