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
  };
}

/**
 * İletişim bilgileri
 */
export const contactInfo: ContactInfo = {
  office: {
    title: "Merkez Ofis",
    address: "Endüstri Sanayi Bölgesi, 4. Cadde No: 12",
    addressLine2: "Levent, İstanbul, Türkiye",
  },
  phone: {
    number: "+90 (212) 555 0123",
    hours: "Hafta İçi: 09:00 - 18:00",
  },
  email: {
    primary: "info@tezelmuhendislik.com",
    sales: "satis@tezelmuhendislik.com",
  },
  emergency: {
    title: "Acil Durum Hattı",
    description: "Arıza ve acil müdahale gerektiren durumlar için 7/24 hizmetinizdeyiz.",
    phone: "+90 (212) 555 09 11",
  },
  whatsapp: {
    text: "WhatsApp ile İletişime Geç",
    url: "#",
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
