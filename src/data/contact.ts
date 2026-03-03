/**
 * İletişim bilgileri için TypeScript tipleri ve veriler
 */

export interface ContactInfo {
  office: {
    title: string;
    address: string;
    addressLine2?: string;
  };
  phone: {
    number: string;
    hours?: string;
  };
  email: {
    primary: string;
    sales?: string;
  };
  emergency: {
    title: string;
    description: string;
    phone: string;
  };
  whatsapp: {
    text: string;
    url?: string;
    number: string; // WhatsApp için ülke kodu ile birlikte (başında + olmadan)
  };
  phone2: {
    number: string;
    hours?: string;
  };
}

/**
 * İletişim bilgileri
 */
export const contactInfo: ContactInfo = {
  office: {
    title: "Merkez Ofis & Depo",
    address: "Atatürk Mah. 22052 Sk. No:19",
    addressLine2: "Aksu/Antalya",
  },
  phone: {
    number: "0532 780 54 34",
    hours: "Hafta İçi: 09:00 - 18:00",
  },
  email: {
    primary: "info@tezelmuhendislik.com.tr",
    sales: "satis@tezelmuhendislik.com.tr",
  },
  emergency: {
    title: "Acil Durum Hattı",
    description: "Arıza ve acil müdahale gerektiren durumlar için 7/24 hizmetinizdeyiz.",
    phone: "0532 780 54 34",
  },
  whatsapp: {
    text: "WhatsApp ile İletişime Geç",
    url: "#",
    number: "905327805434", // WhatsApp için ülke kodu ile birlikte (başında + olmadan)
  },
  phone2: {
    number: "0534 362 85 34",
    hours: "Hafta İçi: 09:00 - 18:00",
  },
};

/**
 * Hizmet/Ürün türleri (form için)
 */
export const serviceTypes = [
  { value: "elevator-systems", label: "Asansör Sistemleri" },
  { value: "escalator-systems", label: "Yürüyen Merdiven" },
  { value: "modernization", label: "Modernizasyon" },
  { value: "maintenance", label: "Bakım ve Servis" },
  { value: "components", label: "Yedek Parça" },
];
