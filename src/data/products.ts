/**
 * Ürün verileri için TypeScript tipleri ve mock veriler
 */

export interface ProductSpec {
  parameter: string;
  value: string;
  unit: string;
}

export interface ProductThumbnail {
  image: string;
  alt: string;
}

export interface EngineeringAdvantage {
  title: string;
  description: string;
}

export interface ComparisonSpec {
  parameter: string;
  unit: string;
  version1: string;
  version2: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  thumbnails: ProductThumbnail[];
  features: string[];
  specs: ProductSpec[];
  inStock: boolean;
  price?: {
    min?: number;
    max?: number;
    currency: string;
  };
  engineeringAdvantages?: {
    title: string;
    description: string;
    advantages: EngineeringAdvantage[];
  };
  comparisonSpecs?: {
    title: string;
    version1Label: string;
    version2Label: string;
    specs: ComparisonSpec[];
    note?: string;
  };
}

/**
 * Tüm ürünlerin mock verileri
 */
export const products: Product[] = [
  {
    id: "1",
    slug: "tz-x5-dislisiz-motor",
    title: "TZ-X5 Dişlisiz Motor",
    category: "Motorlar",
    badge: "Yeni",
    description:
      "Yüksek performanslı, enerji verimli senkron motor teknolojisi. Modern binalar için ideal çözüm.",
    shortDescription: "Yüksek performanslı, enerji verimli senkron motor teknolojisi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4eigxFIQKyJgh5Td5pJ7a9exdLnibLO5QUTTtUa9tcDL1gddhDVgpcK7Q2EiJmMDq6_PoQQg6SuBzzgM4mid7SvTmp6jh_RpFGhqDzoRYXH2EI2alQ9BWup7pqJhdUOYdLYVk34HynSwxb-tOI9Vbszyf1MrOIfgr_8AZsXBgXUgbJAE-UfR0u_Z8-RirMKK8-IWIK-H_ghOymECv92G6qu4eDpuZI6YSN-LiYduh3ClFbWcxK92rKoPHsr7Xz8YChFdUfSkkgpk",
    imageAlt: "Endüstriyel elektrik motoru yakın çekim",
    thumbnails: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD4eigxFIQKyJgh5Td5pJ7a9exdLnibLO5QUTTtUa9tcDL1gddhDVgpcK7Q2EiJmMDq6_PoQQg6SuBzzgM4mid7SvTmp6jh_RpFGhqDzoRYXH2EI2alQ9BWup7pqJhdUOYdLYVk34HynSwxb-tOI9Vbszyf1MrOIfgr_8AZsXBgXUgbJAE-UfR0u_Z8-RirMKK8-IWIK-H_ghOymECv92G6qu4eDpuZI6YSN-LiYduh3ClFbWcxK92rKoPHsr7Xz8YChFdUfSkkgpk",
        alt: "TZ-X5 Motor Ön Görünüm",
      },
    ],
    features: [
      "ISO 9001:2015 Sertifikalı Üretim",
      "%35 enerji tasarrufu",
      "3 Yıl Garanti",
    ],
    specs: [
      { parameter: "Kapasite", value: "630", unit: "kg" },
      { parameter: "Hız", value: "1.6", unit: "m/s" },
      { parameter: "Güç", value: "4.5", unit: "kW" },
    ],
    inStock: true,
    engineeringAdvantages: {
      title: "Modern Motor Teknolojisi",
      description:
        "TZ-X5 Dişlisiz Motor, gelişmiş senkron teknoloji ile %35'e varan enerji tasarrufu sağlar. Kompakt tasarımı sayesinde küçük makine dairesi gereksinimlerine uyumludur.",
      advantages: [
        {
          title: "Yüksek Verimlilik",
          description: "Gelişmiş stator tasarımı ile %35'e varan enerji tasarrufu sağlar.",
        },
        {
          title: "Kompakt Tasarım",
          description: "Küçük makine dairesi gereksinimlerine uygun, yer tasarrufu sağlar.",
        },
        {
          title: "Sessiz Çalışma",
          description: "Düşük gürültü seviyesi ile konforlu kullanım imkanı sunar.",
        },
      ],
    },
    comparisonSpecs: {
      title: "Teknik Özellikler Tablosu",
      version1Label: "TZ-X5 Standart",
      version2Label: "TZ-X5 Premium",
      specs: [
        {
          parameter: "Kapasite",
          unit: "kg",
          version1: "630",
          version2: "800 - 1000",
        },
        {
          parameter: "Hız",
          unit: "m/s",
          version1: "1.0 - 1.6",
          version2: "1.6 - 2.0",
        },
        {
          parameter: "Güç",
          unit: "kW",
          version1: "4.5",
          version2: "5.5 - 7.5",
        },
        {
          parameter: "Besleme Voltajı",
          unit: "VAC",
          version1: "380 (3 Faz)",
          version2: "380 - 400 (3 Faz)",
        },
        {
          parameter: "Koruma Sınıfı",
          unit: "IP",
          version1: "IP41",
          version2: "IP54",
        },
      ],
      note: "* Özel projeler için farklı konfigürasyonlar mevcuttur.",
    },
  },
  {
    id: "2",
    slug: "pro-control-v3-pano",
    title: "Pro-Control V3 Pano",
    category: "Kumanda Panoları",
    description:
      "Entegre sürücülü, akıllı asansör kumanda panosu sistemi. Modern binalar için gelişmiş kontrol.",
    shortDescription: "Entegre sürücülü, akıllı asansör kumanda panosu sistemi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCboaMQayjXmx4qif-FOAZcoDgzlnLEIUc0IoJyYcedL6RGCiitvrxx-ECmFQix-_DM7XascE1teTaicntqR5WqpmeGZGihUmlcWHS5UACznnMBi7jL7e2h6N9TGDtbQeYc82ABxiNkqcTkBv_JHx5Qr9ooz84B49L2VSFQA9k3zOx0Fzn9ruMUw-BMlktDq2Yz4Oms3RnseBM28s2GpVRxEM3-JEao9hQVKFota8Ef8a2JQbwDxwCop5IU3b5z6kIlw7bKhfDBasU",
    imageAlt: "Endüstriyel kontrol paneli çeşitli butonlar ve anahtarlarla",
    thumbnails: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCboaMQayjXmx4qif-FOAZcoDgzlnLEIUc0IoJyYcedL6RGCiitvrxx-ECmFQix-_DM7XascE1teTaicntqR5WqpmeGZGihUmlcWHS5UACznnMBi7jL7e2h6N9TGDtbQeYc82ABxiNkqcTkBv_JHx5Qr9ooz84B49L2VSFQA9k3zOx0Fzn9ruMUw-BMlktDq2Yz4Oms3RnseBM28s2GpVRxEM3-JEao9hQVKFota8Ef8a2JQbwDxwCop5IU3b5z6kIlw7bKhfDBasU",
        alt: "Pro-Control V3 Pano Ön Görünüm",
      },
    ],
    features: [
      "CANbus Protokolü",
      "16 Durağa kadar destek",
      "Akıllı trafik yönetimi",
    ],
    specs: [
      { parameter: "Tip", value: "VVVF Sürücü", unit: "-" },
      { parameter: "Durak Sayısı", value: "Max 16", unit: "-" },
      { parameter: "Protokol", value: "CANbus", unit: "-" },
    ],
    inStock: true,
    engineeringAdvantages: {
      title: "Akıllı Kontrol ve Entegrasyon",
      description:
        "Pro-Control V3 Pano, gelişmiş CANbus protokolü ile tüm asansör bileşenlerini tek bir sistem altında toplar. Akıllı trafik yönetimi algoritması sayesinde bekleme sürelerini %30 oranında azaltır.",
      advantages: [
        {
          title: "Akıllı Trafik Yönetimi",
          description: "Gelişmiş algoritma ile bekleme sürelerini %30 oranında azaltır.",
        },
        {
          title: "Kolay Bakım",
          description: "Modüler yapı sayesinde hızlı ve kolay bakım imkanı sunar.",
        },
        {
          title: "Geniş Uyumluluk",
          description: "Tüm modern motor ve kapı sistemleri ile tam uyumlu çalışır.",
        },
      ],
    },
    comparisonSpecs: {
      title: "Teknik Özellikler Tablosu",
      version1Label: "Pro-Control V3 Standart",
      version2Label: "Pro-Control V3 Premium",
      specs: [
        {
          parameter: "Durak Sayısı",
          unit: "-",
          version1: "Max 8",
          version2: "Max 16",
        },
        {
          parameter: "Protokol",
          unit: "-",
          version1: "CANbus",
          version2: "CANbus, Modbus",
        },
        {
          parameter: "Besleme Voltajı",
          unit: "VAC",
          version1: "380 (3 Faz)",
          version2: "380 - 400 (3 Faz)",
        },
        {
          parameter: "Koruma Sınıfı",
          unit: "IP",
          version1: "IP20",
          version2: "IP54",
        },
      ],
      note: "* Özel projeler için farklı konfigürasyonlar mevcuttur.",
    },
  },
  {
    id: "3",
    slug: "otomatik-kapi-md-20",
    title: "Otomatik Kapı MD-20",
    category: "Kapı Sistemleri",
    description:
      "Sessiz çalışan, yüksek trafik uyumlu teleskopik kapı mekanizması. Modern binalar için ideal.",
    shortDescription: "Sessiz çalışan, yüksek trafik uyumlu teleskopik kapı mekanizması.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBK56Cb7TwZT4vjQGhsuRF_JssXyf8WZTuD_Pqn599su5HOmQ2IZGkSkK6xa7_ZskLTQitd4ESVRBt5P2oPfjCa9XVszRIVi9XtAbn52ZRvR9DqJv_lqd62nq1TuHgCaG1ZNdtmlvya7w6pyLEO0L8hm4i0L2wLNpUw-eMjOEn7g-gVME6rxXbPSas430atm4qiE8wyNwj77Qv3VSa0hjUkvBXj7KdSx3dtpQyPt0HUGYy2vOCvXHN8x6QzaD2DVZ3Bgogr9z4YiFc",
    imageAlt: "Modern asansör kapı mekanizması metalik",
    thumbnails: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBK56Cb7TwZT4vjQGhsuRF_JssXyf8WZTuD_Pqn599su5HOmQ2IZGkSkK6xa7_ZskLTQitd4ESVRBt5P2oPfjCa9XVszRIVi9XtAbn52ZRvR9DqJv_lqd62nq1TuHgCaG1ZNdtmlvya7w6pyLEO0L8hm4i0L2wLNpUw-eMjOEn7g-gVME6rxXbPSas430atm4qiE8wyNwj77Qv3VSa0hjUkvBXj7KdSx3dtpQyPt0HUGYy2vOCvXHN8x6QzaD2DVZ3Bgogr9z4YiFc",
        alt: "MD-20 Kapı Mekanizması",
      },
    ],
    features: [
      "Sessiz çalışma",
      "Yüksek trafik uyumu",
      "Paslanmaz çelik yapı",
    ],
    specs: [
      { parameter: "Genişlik", value: "800 - 1100", unit: "mm" },
      { parameter: "Açılma", value: "Merkezi / Teleskopik", unit: "-" },
      { parameter: "Materyal", value: "304 Paslanmaz", unit: "-" },
    ],
    inStock: true,
    engineeringAdvantages: {
      title: "Sessizlik ve Dayanıklılık",
      description:
        "MD-20 Otomatik Kapı sistemi, gelişmiş teleskopik mekanizma ile sessiz çalışma sağlar. Paslanmaz çelik yapısı sayesinde uzun ömürlü ve bakım gerektirmeyen bir çözüm sunar.",
      advantages: [
        {
          title: "Sessiz Çalışma",
          description: "Gelişmiş mekanizma ile düşük gürültü seviyesi sağlar.",
        },
        {
          title: "Yüksek Dayanıklılık",
          description: "Paslanmaz çelik yapı ile uzun ömürlü kullanım imkanı sunar.",
        },
        {
          title: "Kolay Montaj",
          description: "Modüler tasarım sayesinde hızlı ve kolay montaj sağlar.",
        },
      ],
    },
    comparisonSpecs: {
      title: "Teknik Özellikler Tablosu",
      version1Label: "MD-20 Standart",
      version2Label: "MD-20 Premium",
      specs: [
        {
          parameter: "Genişlik",
          unit: "mm",
          version1: "800 - 1000",
          version2: "1000 - 1100",
        },
        {
          parameter: "Açılma Tipi",
          unit: "-",
          version1: "Merkezi",
          version2: "Teleskopik",
        },
        {
          parameter: "Materyal",
          unit: "-",
          version1: "304 Paslanmaz",
          version2: "316 Paslanmaz",
        },
        {
          parameter: "Açılma Hızı",
          unit: "m/s",
          version1: "0.3 - 0.5",
          version2: "0.5 - 0.8",
        },
      ],
      note: "* Özel genişlik ve açılma tipi için teknik departmanımızla iletişime geçiniz.",
    },
  },
  {
    id: "4",
    slug: "fren-bloku-sg-100",
    title: "Fren Bloğu SG-100",
    category: "Güvenlik Komponentleri",
    description:
      "Çift yönlü kayma freni, yüksek güvenlik standartlarına uygun. EN 81-20/50 sertifikalı.",
    shortDescription: "Çift yönlü kayma freni, yüksek güvenlik standartlarına uygun.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fq0Bbm6PEME_XHxEH-fQpg-FXApN7AQtOcnhXRxQYECtqfs_N2xZ6l4UTkOo-VwlY4NfVmCT0Nhumo69R8AFXvw5DwkSmf2qpriar-IGK7_niW7H3BiYxfRiC6xU_Nj57QA948vm-nWKy9MjNR7j6GhmCu4NVfLhzBFf7Fd9yqherbRLBRakk_tX89fNTBcQcTdeVxRQ480ofY_VxMS1IHstaXvcNvoKyi2R20Xr7GPi-qTHj3DG7LfBalNRI3RwgrRRjLFJjCM",
    imageAlt: "Endüstriyel çelik güvenlik dişlisi mekanizması",
    thumbnails: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fq0Bbm6PEME_XHxEH-fQpg-FXApN7AQtOcnhXRxQYECtqfs_N2xZ6l4UTkOo-VwlY4NfVmCT0Nhumo69R8AFXvw5DwkSmf2qpriar-IGK7_niW7H3BiYxfRiC6xU_Nj57QA948vm-nWKy9MjNR7j6GhmCu4NVfLhzBFf7Fd9yqherbRLBRakk_tX89fNTBcQcTdeVxRQ480ofY_VxMS1IHstaXvcNvoKyi2R20Xr7GPi-qTHj3DG7LfBalNRI3RwgrRRjLFJjCM",
        alt: "SG-100 Fren Bloğu",
      },
    ],
    features: [
      "EN 81-20/50 Sertifikalı",
      "Çift yönlü koruma",
      "Yüksek güvenlik standartları",
    ],
    specs: [
      { parameter: "Nominal Hız", value: "2.5", unit: "m/s" },
      { parameter: "Kapasite", value: "Max 2500", unit: "kg" },
      { parameter: "Sertifika", value: "EN 81-20/50", unit: "-" },
    ],
    inStock: true,
  },
  {
    id: "5",
    slug: "kilavuz-ray-t90-b",
    title: "Kılavuz Ray T90/B",
    category: "Mekanik Komponentler",
    description:
      "Soğuk çekme asansör rayı, ISO 7465 standartlarında üretim. Yüksek kalite ve dayanıklılık.",
    shortDescription: "Soğuk çekme asansör rayı, ISO 7465 standartlarında üretim.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFRdZ3rdSniDGSa-zEmGuNPxmwsQFq_zQ_gM8L5xhuDMHDQ9rnBK4MdKVVqHbyC5gOxGEFyoKvQ8NT6O126NhVPl3wmmkYdqlhi083EAdIDrHlV92TPHBWWDV7sLcpiosvxBJ6TVSSZfcwhk7vYHvb-d1ZCb13pgkCk3Uchah3LhziWDRG-fKeq5FnABU0Qu1oeAY8u4cSGnifI8lfYHif77AmiRgTjFI_HkFOWANVhb_6PcV2lpbLRiosk-mTkKBSCDHGIahrxKQ",
    imageAlt: "Asansör kılavuz rayları çelik kirişler yakın çekim",
    thumbnails: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBFRdZ3rdSniDGSa-zEmGuNPxmwsQFq_zQ_gM8L5xhuDMHDQ9rnBK4MdKVVqHbyC5gOxGEFyoKvQ8NT6O126NhVPl3wmmkYdqlhi083EAdIDrHlV92TPHBWWDV7sLcpiosvxBJ6TVSSZfcwhk7vYHvb-d1ZCb13pgkCk3Uchah3LhziWDRG-fKeq5FnABU0Qu1oeAY8u4cSGnifI8lfYHif77AmiRgTjFI_HkFOWANVhb_6PcV2lpbLRiosk-mTkKBSCDHGIahrxKQ",
        alt: "T90/B Kılavuz Ray",
      },
    ],
    features: [
      "ISO 7465 Standartları",
      "Soğuk çekme üretim",
      "Yüksek dayanıklılık",
    ],
    specs: [
      { parameter: "Profil", value: "T90/B", unit: "-" },
      { parameter: "Uzunluk", value: "5000", unit: "mm" },
      { parameter: "Ağırlık", value: "12.3", unit: "kg/m" },
    ],
    inStock: true,
  },
  {
    id: "6",
    slug: "lcd-kat-gostergesi",
    title: "LCD Kat Göstergesi",
    category: "Elektronik Komponentler",
    description:
      "7 inç yüksek çözünürlüklü TFT ekran, programlanabilir arayüz. Modern ve kullanıcı dostu tasarım.",
    shortDescription: "7 inç yüksek çözünürlüklü TFT ekran, programlanabilir arayüz.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZv9bIkBOYSIHxXsgePZ-KlzAKhNvpTsEb-dMNXutz3Q01ViXHSZFz3Ah6Ujkz55o0Udp4Pxv7ZHAsao7bw8e_Mp17z4fLGteLwAJCHFBVp9Sm61t_2PY3T7iCfmafJ5lpkEaEOqWTvJa5Ao_nksmVwoHmZmIHlZ_wjjAAqlaV3soeY5hnjmw9nYIFtewYd86PoQfuYwWoxqHgH7_Qhe4h-Buvk1yOPnXOm6yYM5x34gl6Q6vJu4AYfJVOLe2tYc5pNOtuD2BumLI",
    imageAlt: "Modern dijital ekran paneli asansör kat göstergesi için",
    thumbnails: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAZv9bIkBOYSIHxXsgePZ-KlzAKhNvpTsEb-dMNXutz3Q01ViXHSZFz3Ah6Ujkz55o0Udp4Pxv7ZHAsao7bw8e_Mp17z4fLGteLwAJCHFBVp9Sm61t_2PY3T7iCfmafJ5lpkEaEOqWTvJa5Ao_nksmVwoHmZmIHlZ_wjjAAqlaV3soeY5hnjmw9nYIFtewYd86PoQfuYwWoxqHgH7_Qhe4h-Buvk1yOPnXOm6yYM5x34gl6Q6vJu4AYfJVOLe2tYc5pNOtuD2BumLI",
        alt: "LCD Kat Göstergesi",
      },
    ],
    features: [
      "7 inç TFT Ekran",
      "Programlanabilir arayüz",
      "Yüksek çözünürlük",
    ],
    specs: [
      { parameter: "Ekran Boyutu", value: '7.0"', unit: "-" },
      { parameter: "Çözünürlük", value: "800x480", unit: "-" },
      { parameter: "Montaj", value: "Sıva Altı / Üstü", unit: "-" },
    ],
    inStock: true,
  },
  {
    id: "7",
    slug: "tm-5000-agir-hizmet-motoru",
    title: "TM-5000 Asansör Çekiş Motoru",
    category: "Motorlar",
    badge: "Ağır Hizmet Serisi",
    description:
      "Yüksek trafikli ticari binalar, hastaneler ve kamu tesisleri için tasarlanmış, üstün tork kapasiteli dişlisiz senkron motor teknolojisi.",
    shortDescription:
      "Yüksek trafikli ticari binalar için üstün tork kapasiteli dişlisiz senkron motor.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Bdva2hrZYSQXi2_zngyA4g3tXEyuXwtwY7c9YQaQLMYW9kQB6ALyC5KrnDbyvPUIAKwo38EH42q6Xf-bg0xHzFoeRdrDkk4QdGlgxV6KxVLcF7uHfkack9Bh12697gUMYpXBujj9yVhpWL-D61gNbNJjSDR2IbVorPyoCFKMzR5jp_-o31T72iJVCNj2BGfU2Co_9fPV97_fxjr-MdTS8bap0Dx-NTRnRRij_7yoGAr53jOvGRLmrDC0enJe24JvsghQj2AdWw4",
    imageAlt: "TM-5000 ağır hizmet asansör motoru detaylı izometrik görünüm",
    thumbnails: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCHWSCYra9G0qiAHxJnMrGXhuvb61F5Mdz6ROIYssYB-HlgCDhTPjUBI4MXO5ntnsbaZjOoQesJX94Pz3xooiDWZnVEJF2vw1f99vk0Bo-nI2KJgS1GptqPSi_qpZiGcBYH1K3JMM4UPKUqn0sOhvPOsTw2Y5FT4ppdfAhIelTUo_ZofNUbnekaKDyKZfRwMknHy7HdabizKTOGJLKXXqnYXc5K-MQ5LMUYl5MkQh0wgud7HpTa5rkvVL-Fw2LnFsxPxQ9KYHVIFqo",
        alt: "Ön Görünüm",
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDWspE2bvhE0Gr02KSx_pvRrjum85IIT7-K8EbOdw4D6ViQ0FuB8KydACPvkSpcWUMGHu1ZzIUJbvqaJ6QrPfrvaQ9cBu25Us8xQyxgAVB_XYl8RwwYk_5LDlJoMimA1bHqnRqTx6pYgsWfP7cwffYf4sq9NAmUxkFURER_ltCBJ88erD-WrGn9L6PqAyjt852xCity94ULvLHy2HsCgFQQMEDykRsNqPTQOl4h3CGfpcsQ6u7TWuok9voobuJ5vLLEZ1-T2PJDq0s",
        alt: "Yan Görünüm",
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDiFE2v3nxagHAbQd1QU-SYHS8X5VVMFbnSCWsaZAaKRwpgifmfthCFxXAHXI7bEqt2OBimPg6-cJAVgMV1tK83Kaf7Sfg2QpGSthE4FlGBAr12u2sY-v5VPqckX1GdHfpFg-WEYNauP2R06_SawANWiEXnxjpn0us27xrOv2mnFBfSxDYUQ0DFQiSnUWUr_I8WLz7tdh-kuFQx77nYkTI4AeG5OgXi8h2FUbiqOV1gZ9SEhGDZHZCf8xMJciiV4l3MBi5XO9tK9V0",
        alt: "Teknik Çizim",
      },
    ],
    features: [
      "ISO 9001:2015 Sertifikalı Üretim",
      "%40'a varan enerji tasarrufu",
      "5 Yıl Mekanik Garanti",
    ],
    specs: [
      { parameter: "Nominal Yük Kapasitesi", value: "1200 - 2500", unit: "kg" },
      { parameter: "Nominal Hız", value: "1.0 - 4.0", unit: "m/s" },
      { parameter: "Askı Tipi", value: "2:1", unit: "-" },
      { parameter: "Kasnak Çapı", value: "520", unit: "mm" },
      { parameter: "Halat Sayısı x Çapı", value: "6 x 10 / 8 x 10", unit: "mm" },
      { parameter: "Statik Yük (Maks)", value: "8000", unit: "kg" },
      { parameter: "Motor Gücü", value: "18.5 - 32.0", unit: "kW" },
      { parameter: "Çalışma Gerilimi", value: "360 / 380", unit: "V" },
      { parameter: "Fren Voltajı", value: "110 / 200", unit: "VDC" },
      { parameter: "Koruma Sınıfı", value: "IP 41", unit: "-" },
    ],
    inStock: true,
    engineeringAdvantages: {
      title: "Endüstriyel Güç ve Hassasiyet",
      description:
        "TM-5000 Serisi, özellikle yüksek trafikli ticari binalar ve ağır yük gereksinimi olan endüstriyel tesisler için optimize edilmiştir. Patentli stator tasarımı sayesinde enerji verimliliğini %25 oranında artırırken, sessiz çalışma (< 55dB) özelliği ile konforu en üst düzeye taşır.",
      advantages: [
        {
          title: "Termal Stabilite",
          description: "Gelişmiş soğutma kanatçıkları sayesinde 24 saat kesintisiz çalışma döngüsü.",
        },
        {
          title: "Düşük Bakım Maliyeti",
          description: "Sızdırmaz rulman teknolojisi ve aşınmaya dayanıklı alaşım gövde.",
        },
        {
          title: "Kolay Entegrasyon",
          description: "Tüm modern inverter sistemleri ve VVVF sürücüler ile %100 uyumlu.",
        },
      ],
    },
    comparisonSpecs: {
      title: "Teknik Özellikler Tablosu",
      version1Label: "TM-5000 V1",
      version2Label: "TM-5000 V2 (Extended)",
      specs: [
        {
          parameter: "Kapasite (Taşıma)",
          unit: "kg",
          version1: "1000 - 1600",
          version2: "2000 - 2500",
        },
        {
          parameter: "Nominal Hız",
          unit: "m/s",
          version1: "1.0 - 1.6",
          version2: "1.6 - 2.5",
        },
        {
          parameter: "Besleme Voltajı",
          unit: "VAC",
          version1: "380 - 400 (3 Faz)",
          version2: "400 - 440 (3 Faz)",
        },
        {
          parameter: "Frekans",
          unit: "Hz",
          version1: "50 / 60",
          version2: "50 / 60",
        },
        {
          parameter: "Kasnak Çapı",
          unit: "mm",
          version1: "Ø 400",
          version2: "Ø 480",
        },
        {
          parameter: "Koruma Sınıfı",
          unit: "IP",
          version1: "IP44",
          version2: "IP54",
        },
        {
          parameter: "Yalıtım Sınıfı",
          unit: "-",
          version1: "Class F",
          version2: "Class F / H",
        },
        {
          parameter: "Standart Uyumluluğu",
          unit: "-",
          version1: "EN 81-20, EN 81-50",
          version2: "EN 81-20, EN 81-50, CE",
        },
      ],
      note: "* Özel projeler için farklı voltaj ve hız seçenekleri mevcuttur. Lütfen teknik departmanımızla iletişime geçiniz.",
    },
  },
];

/**
 * Slug'a göre ürün bulma fonksiyonu
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * Kategoriye göre ürünleri filtreleme fonksiyonu
 */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

/**
 * Tüm kategorileri getirme fonksiyonu
 */
export function getAllCategories(): string[] {
  return Array.from(new Set(products.map((product) => product.category)));
}

/**
 * Benzer ürünleri getirme fonksiyonu (aynı kategoriden, mevcut ürün hariç)
 */
export function getRelatedProducts(currentProductId: string, limit: number = 4): Product[] {
  const currentProduct = products.find((p) => p.id === currentProductId);
  if (!currentProduct) return [];

  return products
    .filter((p) => p.category === currentProduct.category && p.id !== currentProductId)
    .slice(0, limit);
}
