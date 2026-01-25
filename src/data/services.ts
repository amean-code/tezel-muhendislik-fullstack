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
    slug: "yuruyen-merdiven-bant-modernizasyonu",
    icon: "upgrade",
    title: "Yürüyen Merdiven/Bant Modernizasyonu",
    description:
      "Mevcut yürüyen merdiven ve bant sistemlerinizi modern teknolojilerle yenileyin. Güvenlik, enerji verimliliği ve performans artışı sağlıyoruz.",
  },
  {
    slug: "yedek-parca-satisi",
    icon: "inventory_2",
    title: "Yürüyen Merdiven/Bant ve Asansör Yedek Parça Satışı",
    description:
      "Geniş stok ağı ile orijinal ve sertifikalı yedek parça temini. Asansör, yürüyen merdiven ve bant sistemleri için kritik bileşenler ve hızlı lojistik çözümleri.",
  },
  {
    slug: "enerji-taahhut-isleri",
    icon: "solar_power",
    title: "Enerji Taahhüt İşleri",
    description:
      "Güneş Enerji Santralleri (GES) ve Elektrikli Araç Şarj İstasyonları kurulumu. Yenilenebilir enerji çözümleri ve sürdürülebilir altyapı projeleri.",
  },
  {
    slug: "elektrik-elektronik-taahhut",
    icon: "smart_home",
    title: "Elektrik & Elektronik Taahhüt İşleri",
    description:
      "Villa elektrik, elektronik ve otomasyon projeleri. Akıllı ev sistemleri, KNX protokolü, güvenlik sistemleri ve enerji yönetimi çözümleri.",
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
