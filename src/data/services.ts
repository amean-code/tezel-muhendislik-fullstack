import { serviceDetails } from "@/data/serviceDetails";

/**
 * Hizmet verileri için TypeScript tipleri (liste görünümü).
 */
export interface Service {
  slug: string;
  icon: string;
  title: string;
  description: string;
}

/** Hizmet slug'ına göre ikon eşlemesi. */
const slugToIcon: Record<string, string> = {
  "asansor-modernizasyonu": "upgrade",
  "yuruyen-merdiven-bant-modernizasyonu": "upgrade",
  "yedek-parca-satisi": "inventory_2",
  "enerji-taahhut-isleri": "solar_power",
  "elektrik-elektronik-taahhut": "electric_bolt",
  "test-denetim": "fact_check",
};

/**
 * Tüm hizmetlerin listesi (detay sayfalarındaki başlık ve açıklama ile senkron).
 */
export const services: Service[] = serviceDetails.map((s) => ({
  slug: s.slug,
  icon: slugToIcon[s.slug] ?? "handyman",
  title: s.title,
  description: s.description,
}));

/**
 * Slug'a göre hizmet bulma fonksiyonu
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
