/**
 * Hizmet verileri için TypeScript tipleri ve mock veriler
 */

export interface Service {
  slug: string;
  icon: string;
  title: string;
  description: string;
}

/**
 * Tüm hizmetlerin listesi
 */
export const services: Service[] = [
  {
    slug: "asansor-modernizasyonu",
    icon: "upgrade",
    title: "Asansör Modernizasyonu",
    description:
      "Mevcut sistemlerin verimliliğini, güvenliğini ve konforunu artırmak için kapsamlı modernizasyon paketleri sunuyoruz. Enerji tasarrufu odaklı revizyonlar.",
  },
  {
    slug: "periyodik-bakim",
    icon: "build_circle",
    title: "Periyodik Bakım",
    description:
      "EN 13015 standartlarına uygun, önleyici ve kestirimci bakım hizmetleri. 7/24 teknik destek ve arıza müdahale garantisi ile kesintisiz işletim.",
  },
  {
    slug: "proje-muhendislik",
    icon: "engineering",
    title: "Proje & Mühendislik",
    description:
      "Trafik analizi, kuyu rölöve çalışmaları ve avan proje çizimleri. Binaların ihtiyacına özel, optimum trafik akışı sağlayan sistem tasarımları.",
  },
  {
    slug: "yuruyen-merdiven-sistemleri",
    icon: "escalator",
    title: "Yürüyen Merdiven Sistemleri",
    description:
      "Ticari merkezler ve toplu taşıma alanları için ağır hizmet tipi yürüyen merdiven ve bant kurulumu. Güvenlik sensörleri ve otomasyon entegrasyonu.",
  },
  {
    slug: "yedek-parca-tedarigi",
    icon: "settings_suggest",
    title: "Yedek Parça Tedariği",
    description:
      "Geniş stok ağı ile orijinal ve sertifikalı yedek parça temini. Kritik bileşenler için hızlı lojistik çözümleri ve montaj desteği.",
  },
  {
    slug: "test-denetim",
    icon: "fact_check",
    title: "Test & Denetim",
    description:
      "Periyodik fenni muayene hazırlığı, yeşil etiket uyumluluk denetimleri ve yük testleri. Bağımsız mühendislik raporlaması.",
  },
];

/**
 * Slug'a göre hizmet bulma fonksiyonu
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
