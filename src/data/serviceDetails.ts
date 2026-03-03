/**
 * Hizmet detay verileri için TypeScript tipleri ve mock veriler
 */

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  badge?: string;
  heroImage: string;
  heroImageAlt: string;
  whyTitle: string;
  whySubtitle?: string;
  whyCards: Array<{
    icon: string;
    title: string;
    description: string;
    strongText?: string;
  }>;
  scope: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
      borderColor?: "primary" | "accent";
    }>;
    image: string;
    imageAlt: string;
    imageFit?: "cover" | "contain";
    note?: {
      label: string;
      text: string;
    };
  };
  beforeAfter: {
    title: string;
    subtitle?: string;
    items: Array<{
      label: string;
      labelColor: "red" | "green";
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    }>;
  };
  process: {
    title: string;
    subtitle?: string;
    steps: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton?: string;
  };
}

/**
 * Tüm hizmet detay verileri
 */
export const serviceDetails: ServiceData[] = [
  {
    slug: "asansor-modernizasyonu",
    title: "Asansör Modernizasyonu: Mevcut Sistemlerinizi Geleceğe Taşıyın",
    description:
      "Güvenlik, enerji verimliliği ve performans odaklı revizyon çözümleri ile binanızın değerini artırın.",
    badge: "Revizyon & Dönüşüm",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8",
    heroImageAlt: "Endüstriyel asansör modernizasyon detayları",
    whyTitle: "Neden Modernizasyon?",
    whySubtitle: "Eski asansörlerinizi yenilemek sadece estetik bir tercih değil, güvenlik ve verimlilik zorunluluğudur.",
    whyCards: [
      {
        icon: "security",
        title: "Güvenlik Artırımı",
        description:
          "Asansörlerinizi en son standartlara tam uyumlu hale getirerek kaza risklerini minimize ediyoruz.",
        strongText: "en son standartlara",
      },
      {
        icon: "eco",
        title: "Enerji Tasarrufu",
        description:
          "Eski verimsiz motor gruplarını, yeni nesil VVVF sürücülü ve dişlisiz (gearless) makinelerle değiştirerek %40'a varan enerji verimliliği sağlıyoruz. Bekleme modunda minimum tüketim.",
        strongText: "%40'a varan",
      },
      {
        icon: "hotel_class",
        title: "Konfor ve Estetik",
        description:
          "Sessiz sürüş teknolojisi ile gürültüyü önlüyor, modern paslanmaz çelik kabin kaplamaları ve LED aydınlatma tasarımları ile binanıza prestij katıyoruz.",
      },
    ],
    scope: {
      badge: "Kapsamlı Revizyon",
      title: "Modernizasyon Kapsamı",
      description:
        "Tezel Mühendislik olarak asansör modernizasyonunu parça değişiminin ötesinde, komple bir sistem iyileştirmesi olarak ele alıyoruz.",
      items: [
        {
          icon: "developer_board",
          title: "Kumanda Sistemi Revizyonu",
          description: "Mikroişlemci tabanlı panolar ve VVVF sürücü entegrasyonu ile hassas duruş.",
          borderColor: "primary",
        },
        {
          icon: "settings",
          title: "Tahrik Sistemlerinin Yenilenmesi",
          description: "Dişlili ve dişlisiz yeni nesil motorlar.",
          borderColor: "accent",
        },
        {
          icon: "elevator",
          title: "Kabin Yenileme",
          description: "Anti-vandal butonlar, dekoratif paslanmaz kaplama, zemin ve tavan yenileme.",
          borderColor: "accent",
        },
        {
          icon: "sensors",
          title: "Güvenlik Güncellemesi",
          description: "Hız regülatörü, fren blokları, kumanda panloları, iç güvenlik kapısı, fotosel, kuyu dibi tamponların yenilenmesi vb.",
          borderColor: "primary",
        },
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkzSJcx8LphmXZYblHxZt7mlEx-rsL6TArrTBR99--qXLuDOdh8lic3fVb5S9pgxpNWJHdSMvrtON6qWQZlz-VykTDzBADYo04EZgPrng2iSFVCm-iUuQ6didKN17w3jQM6FWo_5EdSPJKvS39_ykqHdaMpdLSMUTZL5Yd59GJqmF2XL5kZdh9zgrtmZpww7grnMqEyaajFhzLCzgmvF0vXcyBXg-a1qeYVS2LVN8lFLM4Xuw82U5PjvAs6iFEIO5OTn446mD1aRA",
      imageAlt: "Teknik revizyon süreci ve modernizasyon uygulaması",
      note: {
        label: "Mühendislik Notu",
        text: "Her modernizasyon projesi, binanın özelliklerine ve isteklerinize göre özel olarak tasarlanır.",
      },
    },
    beforeAfter: {
      title: "Önce / Sonra Değişimi",
      subtitle: "Eski teknolojiden modern mühendisliğe geçişin görsel kanıtı.",
      items: [
        {
          label: "Eski Sistem",
          labelColor: "red",
          title: "Yıpranmış ve Riskli",
          description:
            "Gürültülü röleli pano, yüksek enerji tüketimi ve sık arıza yapan elektronik vemekanik parçalar.",
          image:
            "/hizmetler/eski-asansor-panosu.jpg",
          imageAlt: "Eski asansör sistemi ve yıpranmış parçalar",
        },
        {
          label: "Modernize Edilmiş",
          labelColor: "green",
          title: "Estetik ve Güvenli",
          description:
            "Paslanmaz çelik kabin, LED aydınlatma, dijital göstergeler, enerji tasarruflu ve hız kontrollü kumando panoları, yeni nesil motorlar ile sessiz çalışma.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDvJJ8xNPAPaZ6KMlDytTMyOv27UqwZKqHA8lge2yE9WApziochSTQ3rgSSDnCrXSTLIFCG3RTZvatOFQ2bhQAnenp_wAEwFLGvKm9FgShmMtphT3JWi-Y_fPUMIdKR8uaJ-FbqmMlmKpB1EfQItUed_RK1ROvqFJNy6R7f14h6y4BGSv1U_j3qivL8eivA2CsNjV6eQlilVihu7XLdKqyrMfmo2UpWccz0gSpKbbVSI0CrGfGs1N4No0yFdqFcDGhr7Xf-Rk8K7A4",
          imageAlt: "Modern paslanmaz çelik asansör kabini",
        },
      ],
    },
    process: {
      title: "Teknik Analiz Süreci",
      subtitle: "Adım adım güvenli modernizasyon yol haritası.",
      steps: [
        {
          icon: "content_paste_search",
          title: "1. Kuyu İncelemesi",
          description: "Mevcut kuyu ölçüleri, raylar ve karşı ağırlık sisteminin detaylı saha analizi.",
        },
        {
          icon: "engineering",
          title: "2. Mühendislik Raporu",
          description: "İhtiyaç listesinin belirlenmesi, trafik hesabı ve teknik projenin çizimi.",
        },
        {
          icon: "inventory_2",
          title: "3. Parça Tedariği",
          description: "Proje speclerine uygun, sertifikalı ve orijinal yedek parçaların temini.",
        },
        {
          icon: "build_circle",
          title: "4. Montaj & Test",
          description: "Uzman ekiplerce kurulum, güvenlik testleri ve uygun etiket alımı.",
        },
      ],
    },
    cta: {
      title: "Asansörünüzü Yenilemeye Hazır Mısınız?",
      description:
        "Uzman teknik ekiplerimizle binanızın değerini artırın, güvenliği ve konforu en üst düzeye çıkarın. Hemen iletişime geçin, yerinde ücretsiz analiz yapalım.",
      primaryButton: "Modernizasyon Teklifi Al",
      secondaryButton: "Ücretsiz Keşif Randevusu Oluştur",
    },
  },
  {
    slug: "yuruyen-merdiven-bant-modernizasyonu",
    title: "Yürüyen Merdiven/Bant Modernizasyonu: Güvenlik ve Verimlilik Artışı",
    description:
      "Mevcut yürüyen merdiven ve bant sistemlerinizi modern teknolojilerle yenileyin. Güvenlik standartlarına uyum, enerji tasarrufu ve performans artışı.",
    badge: "Modernizasyon",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZTuX8o6R-NIPOB9lgbGt3Y9VuxCSV8tGfsHsGw2D16sgP8xTExugMEZu46_nn4DnlKHsjovNMHHTMvkQAr_8osecEIHNNlOaTiCrk500Tjcs8vQ4MbNAt6JLBOCK8iKs1whCHrET1Mx0m2gwTux5jQyJbT_PMvHDgCrBswoGNnkIIRLjhnWDm0pQU4PuNeMopKa_WdS69178oGKI3V8wRjY0p48wjHEmTX9pYqqHStLyCtK490t87_JqoQtfviHmRyOhh1s4Bw5U",
    heroImageAlt: "Yürüyen merdiven modernizasyon çalışması",
    whyTitle: "Neden Modernizasyon?",
    whySubtitle: "Eski yürüyen merdiven ve bant sistemlerinizi yenilemek güvenlik, verimlilik ve konfor sağlar.",
    whyCards: [
      {
        icon: "security",
        title: "Güvenlik Artırımı",
        description:
          "EN 115 standartlarına tam uyumlu güvenlik sistemleri. Aşırı hız koruması, tırabzan hızı izleme ve basamak hasar tespiti ile kaza risklerini minimize ediyoruz.",
        strongText: "EN 115",
      },
      {
        icon: "eco",
        title: "Enerji Tasarrufu",
        description:
          "LED aydınlatma, hız kontrol sistemleri ve verimli motor teknolojileri ile %30'a varan enerji tasarrufu sağlıyoruz.",
        strongText: "%30'a varan",
      },
      {
        icon: "speed",
        title: "Performans Artışı",
        description:
          "Modern sürücü sistemleri ve kontrol panelleri ile daha sessiz, daha hızlı ve daha güvenilir çalışma.",
      },
    ],
    scope: {
      badge: "Kapsamlı Revizyon",
      title: "Modernizasyon Kapsamı",
      description:
        "Yürüyen merdiven ve bant sistemlerinizi komple yenileme veya kademeli modernizasyon seçenekleri sunuyoruz.",
      items: [
        {
          icon: "developer_board",
          title: "Kontrol Sistemi Yenileme",
          description: "Mikroişlemci tabanlı kontrol panelleri ve modern sürücü sistemleri.",
          borderColor: "primary",
        },
        {
          icon: "escalator_warning",
          title: "Güvenlik Sistemleri",
          description: "Aşırı hız koruması, tırabzan hızı izleme ve basamak hasar tespiti.",
          borderColor: "accent",
        },
        {
          icon: "light_mode",
          title: "LED Aydınlatma",
          description: "Entegre LED aydınlatmalı etek sacları ve enerji tasarruflu aydınlatma sistemleri.",
          borderColor: "accent",
        },
        {
          icon: "build",
          title: "Mekanik Yenileme",
          description: "El bantları, basamaklar, basamak milleri, basamak makaraları, basamak zinciri, el bandı ve motor tahrik zincirleri, etek sacı ve fırçalarının yenilenmesi, mekanik swicthler, gergi ve baskı makaraları, el bandı dönüş rulmanları vb.",
          borderColor: "primary",
        },
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDZTuX8o6R-NIPOB9lgbGt3Y9VuxCSV8tGfsHsGw2D16sgP8xTExugMEZu46_nn4DnlKHsjovNMHHTMvkQAr_8osecEIHNNlOaTiCrk500Tjcs8vQ4MbNAt6JLBOCK8iKs1whCHrET1Mx0m2gwTux5jQyJbT_PMvHDgCrBswoGNnkIIRLjhnWDm0pQU4PuNeMopKa_WdS69178oGKI3V8wRjY0p48wjHEmTX9pYqqHStLyCtK490t87_JqoQtfviHmRyOhh1s4Bw5U",
      imageAlt: "Yürüyen merdiven modernizasyon süreci",
    },
    beforeAfter: {
      title: "Önce / Sonra Değişimi",
      subtitle: "Eski teknolojiden modern mühendisliğe geçiş.",
      items: [
        {
          label: "Eski Sistem",
          labelColor: "red",
          title: "Yıpranmış ve Riskli",
          description:
            "Eski kontrol sistemleri, yüksek enerji tüketimi ve sık arıza yapan mekanik ve elektronik parçalar.",
          image:
            "/yedek-parca/yedek-parca-yuruyen-merdiven-arıza.jpg",
          imageAlt: "Eski yürüyen merdiven sistemi",
        },
        {
          label: "Modernize Edilmiş",
          labelColor: "green",
          title: "Modern ve Güvenli",
          description:
            "Modern kontrol sistemleri, güvenlik switch ve sensörleri, modern tahrik sistemleri ile sessiz çalışma ve  LED aydınlatma sistemleri.",
          image:
            "/hizmetler/yuruyen-merdiven-yeni.jpg",
          imageAlt: "Modernize edilmiş yürüyen merdiven",
        },
      ],
    },
    process: {
      title: "Modernizasyon Süreci",
      subtitle: "Adım adım güvenli modernizasyon yol haritası.",
      steps: [
        {
          icon: "content_paste_search",
          title: "1. Sistem İncelemesi",
          description: "Mevcut sistemin detaylı saha analizi ve ölçümleri.",
        },
        {
          icon: "engineering",
          title: "2. Mühendislik Raporu",
          description: "İhtiyaç listesinin belirlenmesi ve teknik projenin çizimi.",
        },
        {
          icon: "inventory_2",
          title: "3. Parça Tedariği",
          description: "Proje speclerine uygun, sertifikalı yedek parçaların temini.",
        },
        {
          icon: "build_circle",
          title: "4. Montaj & Test",
          description: "Uzman ekiplerce kurulum, güvenlik testleri ve sertifikasyon.",
        },
      ],
    },
    cta: {
      title: "Yürüyen Merdiven/Bant Sistemlerinizi Yenilemeye Hazır Mısınız?",
      description:
        "Uzman mühendislerimizle sistemlerinizin güvenliğini ve verimliliğini artırın. Hemen iletişime geçin, yerinde ücretsiz analiz yapalım.",
      primaryButton: "Modernizasyon Teklifi Al",
      secondaryButton: "Ücretsiz Keşif Randevusu Oluştur",
    },
  },
  {
    slug: "yedek-parca-satisi",
    title: "Yedek Parça Satışı: Geniş Stok Ağı ile Hızlı Çözümler",
    description:
      "Asansör, yürüyen merdiven ve bant sistemleri için orijinal veya uyumlu, sertifikalı yedek parça temini. Kritik bileşenler için hızlı lojistik çözümleri.",
    badge: "Yedek Parça",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fq0Bbm6PEME_XHxEH-fQpg-FXApN7AQtOcnhXRxQYECtqfs_N2xZ6l4UTkOo-VwlY4NfVmCT0Nhumo69R8AFXvw5DwkSmf2qpriar-IGK7_niW7H3BiYxfRiC6xU_Nj57QA948vm-nWKy9MjNR7j6GhmCu4NVfLhzBFf7Fd9yqherbRLBRakk_tX89fNTBcQcTdeVxRQ480ofY_VxMS1IHstaXvcNvoKyi2R20Xr7GPi-qTHj3DG7LfBalNRI3RwgrRRjLFJjCM",
    heroImageAlt: "Yedek parça stok ve tedarik hizmetleri",
    whyTitle: "Neden Biz?",
    whySubtitle: "Geniş stok ağı ve hızlı lojistik ile kesintisiz işletim sağlıyoruz.",
    whyCards: [
      {
        icon: "inventory_2",
        title: "Geniş Stok Ağı",
        description:
          "Asansör, yürüyen merdiven ve bant sistemleri için binlerce farklı yedek parça stokumuzda mevcut. Kritik bileşenler için hızlı erişim.",
        strongText: "Binlerce parça",
      },
      {
        icon: "verified",
        title: "Orijinal veya Uyumlu, Sertifikalı",
        description:
          "Tüm yedek parçalarımız orijinal üretici sertifikalı ve EN standartlarına uyumludur. Güvenli ve güvenilir çözümler.",
        strongText: "EN standartları",
      },
      {
        icon: "local_shipping",
        title: "Hızlı Lojistik",
        description:
          "Acil durumlar için hızlı teslimat garantisi. Türkiye genelinde hızlı ve güvenli kargo hizmeti.",
        strongText: "hızlı teslimat",
      },
    ],
    scope: {
      badge: "Parça Kategorileri",
      title: "Yedek Parça Kapsamı",
      description:
        "Asansör, yürüyen merdiven ve bant sistemleri için tüm kritik bileşenler.",
      items: [
        {
          icon: "elevator",
          title: "Asansör Parçaları",
          description: "Makina-motor, flexible kablo, taşıyıcı çelik halat, fren süspansiyon blokları, otomatik kapı mekanizmaları, kumanda panoları, butonlar, elektrik panoları, hız regülatörleri, encoderlar, kuyu dipi tamponları, manyetik şalterler, switch sensör takımları ve daha fazlası.",
          borderColor: "primary",
        },
        {
          icon: "escalator",
          title: "Yürüyen Merdiven Parçaları",
          description: "Basamak, çalıştırma anahtar takımları, el bantları, kumanda panosu, etek sacı fırçası, hız kontrol sürücüleri, güvenlik sensörler ve switchleri, tarak çeşitleri, en bandı dönüş rulmanları, gergi makaraları, basamak makaraları, fren bobini, makina-motor, basamak çıtaları, basamak zinciri çeşitleri, basamak milleri ve daha fazlası.",
          borderColor: "accent",
        },
        {
          icon: "straighten",
          title: "Yürüyen Bant Parçaları",
          description: "Palet, çalıştırma anahtar takımları, el bantları, kumanda panosu, etek sacı fırçası, hız kontrol sürücüleri, güvenlik sensörler ve switchleri, tarak çeşitleri, en bandı dönüş rulmanları, gergi makaraları, basamak makaraları, fren bobini, makina-motor, basamak çıtaları, basamak zinciri çeşitleri, basamak milleri ve daha fazlası.",
          borderColor: "accent",
        },
        {
          icon: "settings",
          title: "Elektrik & Elektronik",
          description: "Kontaktör, röle, sensör, LCD gösterge, encoderlar, buton ve kontrol kartları.",
          borderColor: "primary",
        },
      ],
      image:
        "/yedek-parca/yürüyen-merdiven-yedek-parça.jpg",
      imageAlt: "Yedek parça stok ve katalog",
    },
    beforeAfter: {
      title: "Hizmet Öncesi / Sonrası",
      subtitle: "Hızlı yedek parça temini ile kesintisiz işletim.",
      items: [
        {
          label: "Parça Bekleme",
          labelColor: "red",
          title: "Uzun Bekleme Süreleri",
          description:
            "Parça bulunamaması, uzun tedarik süreleri ve sistem kesintileri.",
          image:
            "/yedek-parca/yedek-parca-eski-parca-bekleme-1.jpg",
          imageAlt: "Parça bekleyen sistem",
        },
        {
          label: "Hızlı Çözüm",
          labelColor: "green",
          title: "Kesintisiz İşletim",
          description:
            "Geniş stok ağı, hızlı lojistik ve montaj desteği ile hızlı çözüm.",
          image:
            "/yedek-parca/yedek-parca-asansor-yuruyen-merdiven.jpeg",
          imageAlt: "Hızlı yedek parça teslimatı",
        },
      ],
    },
    process: {
      title: "Sipariş Süreci",
      subtitle: "Hızlı ve güvenilir yedek parça temini adımları.",
      steps: [
        {
          icon: "search",
          title: "1. Parça Tespiti",
          description: "Sistem marka/model bilgisi ve parça kodunun belirlenmesi.",
        },
        {
          icon: "inventory_2",
          title: "2. Stok Kontrolü",
          description: "Geniş stok ağımızdan parça durumunun kontrol edilmesi.",
        },
        {
          icon: "local_shipping",
          title: "3. Hızlı Teslimat",
          description: "Acil durumlar için 24 saat içinde teslimat garantisi.",
        },
        {
          icon: "build",
          title: "4. Montaj Desteği",
          description: "İsteğe bağlı montaj ve teknik destek hizmeti.",
        },
      ],
    },
    cta: {
      title: "Yedek Parça İhtiyacınız mı Var?",
      description:
        "Geniş stok ağımız ve hızlı lojistik hizmetimizle sistemlerinizin kesintisiz çalışmasını sağlayın. Hemen iletişime geçin.",
      primaryButton: "Parça Sorgula",
      secondaryButton: "Katalog İncele",
    },
  },
  {
    slug: "enerji-taahhut-isleri",
    title: "Enerji Taahhüt: GES ve Araç Şarj İstasyonları",
    description:
      "Güneş Enerji Santralleri (GES) ve Elektrikli Araç Şarj İstasyonları kurulumu. Yenilenebilir enerji çözümleri ve sürdürülebilir altyapı projeleri.",
    badge: "Enerji Çözümleri",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3UgPe3Q8ObjDieUbjRL9iL_BRWcySD0ObhZL1jPAG5WCc3IJRze2jIBmrgEfWnBbzpvd2a8iicrkMZNrP356Zdn2Lx8oIJvuWx4XwHFXacYMO-PlHbfXNfg7bk80kB4G-B3gAqx6kAXFZWEx76T2tNckfPTMVIgWt5a4Lvxlv9rRIH0a7XgeJtfzBmdRRiY8dqTGWZ06QeZt3VeCvO-xRVD8b9HGe_2JgIaedRo7V6IU6HZ-5BwT3VVwySMU_SDMX5zOq00jA-j0",
    heroImageAlt: "Güneş enerji santrali ve şarj istasyonu projeleri",
    whyTitle: "Neden Yenilenebilir Enerji?",
    whySubtitle: "Sürdürülebilir gelecek için temiz enerji çözümleri sunuyoruz.",
    whyCards: [
      {
        icon: "solar_power",
        title: "Güneş Enerji Santralleri",
        description:
          "Yüksek verimli panel, inverter teknolojileri ve profesyonel kurulum hizmeti.",
        strongText: "verimli panel, inverter",
      },
      {
        icon: "ev_station",
        title: "Elektrikli Araç Şarj İstasyonları",
        description:
          "Elektrikli şarj istasyonları kurulumu. Akıllı yönetim sistemleri ve uzaktan izleme imkanı.",
        strongText: "elektrikli şarj",
      },
      {
        icon: "trending_up",
        title: "Enerji Tasarrufu",
        description:
          "Kendi enerjinizi üretin, elektrik faturalarınızı düşürün. Çevre dostu ve sürdürülebilir çözümler.",
      },
    ],
    scope: {
      badge: "Hizmet Kapsamı",
      title: "Enerji Taahhüt",
      description:
        "GES ve şarj istasyonu projelerinde kapsamlı mühendislik ve kurulum hizmetleri.",
      items: [
        {
          icon: "solar_power",
          title: "GES Kurulumu",
          description: "Proje tasarımı, panel montajı, inverter kurulumu ve şebeke/batarya bağlantısı.",
          borderColor: "primary",
        },
        {
          icon: "ev_station",
          title: "Şarj İstasyonları",
          description: "AC/DC şarj istasyonları, altyapı hazırlığı ve akıllı yönetim sistemleri.",
          borderColor: "accent",
        },
        {
          icon: "engineering",
          title: "Mühendislik Hizmetleri",
          description: "Proje tasarımı, ruhsat işlemleri, teknik çizimler ve danışmanlık.",
          borderColor: "accent",
        },
        {
          icon: "verified",
          title: "Bakım & Servis",
          description: "Periyodik bakım, performans izleme ve teknik destek hizmetleri.",
          borderColor: "primary",
        },
      ],
      image:
        "/enerji-taahhut/GES-gunes-panel-sistemleri-1.jpg",
      imageAlt: "GES ve şarj istasyonu kurulum projesi, güneş paneli, inverter, şebeke/batarya bağlantısı",
    },
    beforeAfter: {
      title: "Proje Öncesi / Sonrası",
      subtitle: "Yenilenebilir enerji dönüşümü.",
      items: [
        {
          label: "Geleneksel Enerji",
          labelColor: "red",
          title: "Yüksek Maliyet",
          description:
            "Yüksek elektrik faturaları, fosil yakıt bağımlılığı ve çevresel etki.",
          image:
            "/enerji-taahhut/fazla-gelen-elektrik-faturasi.jpg",
          imageAlt: "Geleneksel enerji sistemi, yüksek elektrik faturaları, fosil yakıt bağımlılığı ve çevresel etki",
        },
        {
          label: "Yenilenebilir Enerji",
          labelColor: "green",
          title: "Sürdürülebilir Çözüm",
          description:
            "Kendi enerjinizi üretin, düşük maliyet ve çevre dostu sistemler.",
          image:
            "/enerji-taahhut/yenilenebilir-enerji-sistemleri-1.jpg",
          imageAlt: "GES kurulumu tamamlanmış proje, güneş paneli, inverter, şebeke/batarya bağlantısı",
        },
      ],
    },
    process: {
      title: "Proje Süreci",
      subtitle: "GES kurulum adımları.",
      steps: [
        {
          icon: "search",
          title: "1. Saha Analizi",
          description: "Güneşlenme analizi, arazi ölçümü ve teknik fizibilite çalışması.",
        },
        {
          icon: "engineering",
          title: "2. Proje Tasarımı",
          description: "Mühendislik çizimleri, ruhsat işlemleri ve malzeme seçimi.",
        },
        {
          icon: "build",
          title: "3. Kurulum",
          description: "Panel montajı, inverter kurulumu, şebeke bağlantısı ve test.",
        },
        {
          icon: "verified",
          title: "4. Devreye Alma",
          description: "Sistem testleri, şebeke bağlantısı ve devlet onay süreçleri.",
        },
      ],
    },
    cta: {
      title: "Yenilenebilir Enerji Projenize Başlamaya Hazır Mısınız?",
      description:
        "GES ve şarj istasyonu kurulumunda uzman ekibimizle sürdürülebilir geleceğinizi inşa edin. Hemen iletişime geçin.",
      primaryButton: "Proje Teklifi Al",
      secondaryButton: "Ücretsiz Keşif Randevusu",
    },
  },
  {
    slug: "elektrik-elektronik-taahhut",
    title: "Elektrik & Elektronik Taahhüt İşleri: Villa Projeleri ve Akıllı Ev Sistemleri",
    description:
      "Villa elektrik, elektronik ve otomasyon projeleri. Akıllı ev sistemleri, KNX protokolü, güvenlik sistemleri ve enerji yönetimi çözümleri.",
    badge: "Akıllı Sistemler",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZv9bIkBOYSIHxXsgePZ-KlzAKhNvpTsEb-dMNXutz3Q01ViXHSZFz3Ah6Ujkz55o0Udp4Pxv7ZHAsao7bw8e_Mp17z4fLGteLwAJCHFBVp9Sm61t_2PY3T7iCfmafJ5lpkEaEOqWTvJa5Ao_nksmVwoHmZmIHlZ_wjjAAqlaV3soeY5hnjmw9nYIFtewYd86PoQfuYwWoxqHgH7_Qhe4h-Buvk1yOPnXOm6yYM5x34gl6Q6vJu4AYfJVOLe2tYc5pNOtuD2BumLI",
    heroImageAlt: "Villa elektrik ve akıllı ev sistemleri projesi",
    whyTitle: "Neden Akıllı Sistemler?",
    whySubtitle: "Konfor, güvenlik ve enerji tasarrufu için modern çözümler.",
    whyCards: [
      {
        icon: "smart_home",
        title: "Akıllı Ev Sistemleri",
        description:
          "KNX protokolü, Home Assistant teknolojileri ile tam otomasyon. Sesli komut, uzaktan erişim ve senaryo yönetimi.",
        strongText: "KNX protokolü",
      },
      {
        icon: "eco",
        title: "Enerji Tasarrufu",
        description:
          "Akıllı aydınlatma, iklimlendirme kontrolü ve enerji yönetimi ile %35-40 oranında enerji tasarrufu sağlıyoruz.",
        strongText: "%35-40",
      },
      {
        icon: "security",
        title: "Güvenlik Sistemleri",
        description:
          "IP kamera sistemleri, hareket sensörleri, alarm sistemleri ve uzaktan izleme imkanı.",
      },
    ],
    scope: {
      badge: "Hizmet Kapsamı",
      title: "Elektrik & Elektronik Taahhüt",
      description:
        "Villa projelerinde kapsamlı elektrik, elektronik ve otomasyon çözümleri. Akıllı ev sistemleri, KNX protokolü, güvenlik sistemleri ve enerji yönetimi çözümleri.",
      items: [
        {
          icon: "electrical_services",
          title: "Elektrik Tesisatı",
          description: "Güç dağıtımı, aydınlatma tesisatı, topraklama ve güvenlik sistemleri.",
          borderColor: "primary",
        },
        {
          icon: "smart_home",
          title: "Akıllı Ev Sistemleri",
          description: "KNX protokolleri ile aydınlatma, iklimlendirme ve güvenlik otomasyonu.",
          borderColor: "accent",
        },
        {
          icon: "videocam",
          title: "Güvenlik Sistemleri",
          description: "IP kamera, hareket sensörü, alarm sistemi ve uzaktan izleme çözümleri.",
          borderColor: "accent",
        },
        {
          icon: "yard",
          title: "Bahçe Otomasyonu",
          description: "Sulama sistemi, dış aydınlatma, kapı otomasyonu ve güvenlik aydınlatması.",
          borderColor: "primary",
        },
      ],
      image:
        "/enerji-elektrik/akilli-ev-sistemleri.jpg",
      imageAlt: "Villa akıllı ev sistemleri, KNX protokolü, Home Assistant teknolojileri ile tam otomasyon. Sesli komut, uzaktan erişim ve senaryo yönetimi.",
      imageFit: "contain",
    },
    beforeAfter: {
      title: "Geleneksel / Akıllı Sistem",
      subtitle: "Modern otomasyon dönüşümü.",
      items: [
        {
          label: "Geleneksel Sistem",
          labelColor: "red",
          title: "Manuel Kontrol",
          description:
            "",
          image:
            "/enerji-elektrik/anahtar-ile-kapi-acilis.avif",
          imageAlt: "Geleneksel kapi acma ve kapi kilitleme",
        },
        {
          label: "Akıllı Sistem",
          labelColor: "green",
          title: "Tam Otomasyon",
          description:
            "Sesli komut, uzaktan erişim, enerji tasarrufu ve güvenlik alarmı.",
          image:
            "/enerji-elektrik/akilli-ev-sistemi.jpg",
          imageAlt: "Akıllı ev sistemi, sesli komut, uzaktan erişim, enerji tasarrufu ve güvenlik alarmı",
        },
      ],
    },
    process: {
      title: "Proje Süreci",
      subtitle: "Villa elektrik ve otomasyon projesi adımları.",
      steps: [
        {
          icon: "search",
          title: "1. İhtiyaç Analizi",
          description: "Müşteri ihtiyaçlarının belirlenmesi, mekan analizi ve sistem tasarımı.",
        },
        {
          icon: "engineering",
          title: "2. Proje Tasarımı",
          description: "Teknik çizimler, malzeme listesi ve kurulum planlaması.",
        },
        {
          icon: "build",
          title: "3. Kurulum",
          description: "Elektrik tesisatı, akıllı sistem kurulumu ve entegrasyon.",
        },
        {
          icon: "settings",
          title: "4. Programlama & Test",
          description: "Sistem programlama, senaryo oluşturma ve kapsamlı test.",
        },
      ],
    },
    cta: {
      title: "Villa Projeniz İçin Akıllı Sistemler Kurmaya Hazır Mısınız?",
      description:
        "Uzman ekibimizle konfor, güvenlik ve enerji tasarrufu sağlayan akıllı ev sistemleri kuruyoruz. Hemen iletişime geçin.",
      primaryButton: "Proje Teklifi Al",
      secondaryButton: "Ücretsiz Keşif Randevusu",
    },
  },
  {
    slug: "test-denetim",
    title: "Test & Denetim: Güvenlik ve Uyumluluk Kontrolleri",
    description:
      "Periyodik fenni muayene hazırlığı, yeşil/mavi etiket uyumluluk denetimleri ve yük testleri ile sistemlerinizin güvenliğini ve standartlara uyumunu denetliyoruz.",
    badge: "Denetim & Raporlama",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8",
    heroImageAlt: "Test ve denetim hizmetleri - güvenlik kontrolleri",
    whyTitle: "Neden Test & Denetim?",
    whySubtitle: "Düzenli test ve denetim, güvenlik standartlarına uyum ve yasal yükümlülüklerin yerine getirilmesi için kritik bir unsurdur.",
    whyCards: [
      {
        icon: "verified",
        title: "Yasal Uyumluluk",
        description:
          "Periyodik fenni muayene yükümlülüklerini karşılamak için sistemlerinizi hazırlıyoruz. Tüm güvenlik standartlarına uyumlu raporlama.",
        strongText: "Fenni Muayene",
      },
      {
        icon: "eco",
        title: "Yeşil/Mavi Etiket Uyumluluğu",
        description:
          "Enerji verimliliği standartlarına uygunluk denetimi ve uygun etiket alımı için gerekli testleri gerçekleştiriyoruz.",
        strongText: "Yeşil/Mavi Etiket",
      },
      {
        icon: "science",
        title: "Bağımsız Mühendislik Raporu",
        description:
          "Tarafsız ve objektif mühendislik değerlendirmeleri ile sistem durumunu analiz ediyor, iyileştirme önerileri sunuyoruz.",
      },
    ],
    scope: {
      badge: "Denetim Kapsamı",
      title: "Kapsamlı Test ve Denetim Hizmetleri",
      description:
        "Asansör ve yürüyen merdiven sistemleriniz için tüm güvenlik ve performans kontrollerini gerçekleştiriyoruz.",
      items: [
        {
          icon: "weight",
          title: "Yük Testleri",
          description: "",
          borderColor: "primary",
        },
        {
          icon: "speed",
          title: "Hız ve Performans Testleri",
          description: "",
          borderColor: "accent",
        },
        {
          icon: "sensors",
          title: "Güvenlik Sistemleri Kontrolü",
          description: "",
          borderColor: "accent",
        },
        {
          icon: "description",
          title: "Fenni Muayene Hazırlığı",
          description: "Resmi denetim öncesi eksiksiz kontrol ve dokümantasyon hazırlığı.",
          borderColor: "primary",
        },
      ],
      image:
        "/test-denetim/yuruyen-merdiven-asansor-test-bakim.jpg",
      imageAlt: "Test ve denetim süreci - mühendislik kontrolleri",
      imageFit: "contain",
      note: {
        label: "Denetim Notu",
        text: "Tüm test sonuçları detaylı raporlarla belgelendirilir ve yasal gereklilikler karşılanır.",
      },
    },
    beforeAfter: {
      title: "Denetim Öncesi / Sonrası",
      subtitle: "Profesyonel denetim ile güvenlik ve uyumluluk garantisi.",
      items: [
        {
          label: "Denetimsiz Sistem",
          labelColor: "red",
          title: "Belirsizlik ve Risk",
          description:
            "Güvenlik durumu belirsiz, yasal yükümlülükler karşılanmamış ve olası cezai yaptırımlar.",
          image:
            "/test-denetim/test-denetim-eski-asansor-1.jpg",
          imageAlt: "Denetimsiz sistem riskleri",
        },
        {
          label: "Denetimli Sistem",
          labelColor: "green",
          title: "Güvenlik ve Uyumluluk",
          description:
            "Tüm standartlara uyumlu, belgelenmiş güvenlik durumu ve yasal yükümlülüklerin karşılanması.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDvJJ8xNPAPaZ6KMlDytTMyOv27UqwZKqHA8lge2yE9WApziochSTQ3rgSSDnCrXSTLIFCG3RTZvatOFQ2bhQAnenp_wAEwFLGvKm9FgShmMtphT3JWi-Y_fPUMIdKR8uaJ-FbqmMlmKpB1EfQItUed_RK1ROvqFJNy6R7f14h6y4BGSv1U_j3qivL8eivA2CsNjV6eQlilVihu7XLdKqyrMfmo2UpWccz0gSpKbbVSI0CrGfGs1N4No0yFdqFcDGhr7Xf-Rk8K7A4",
          imageAlt: "Denetimli ve belgelenmiş sistem",
        },
      ],
    },
    process: {
      title: "Denetim Süreci",
      subtitle: "Adım adım profesyonel test ve denetim hizmeti.",
      steps: [
        {
          icon: "search",
          title: "1. Ön İnceleme",
          description: "Sistem durumu, dokümantasyon ve geçmiş test kayıtlarının incelenmesi.",
        },
        {
          icon: "science",
          title: "2. Test Uygulamaları",
          description: "Yük, hız, güvenlik sistemleri ve performans testlerinin gerçekleştirilmesi.",
        },
        {
          icon: "description",
          title: "3. Raporlama",
          description: "Detaylı test sonuçları, uyumluluk değerlendirmesi ve önerilerin hazırlanması.",
        },
        {
          icon: "verified",
          title: "4. Onay ve Belgelendirme",
          description: "Resmi denetim hazırlığı ve gerekli belgelerin tamamlanması.",
        },
      ],
    },
    cta: {
      title: "Sistemlerinizin Güvenliğini Garanti Altına Alın",
      description:
        "Uzman mühendislerimizle test ve denetim hizmetlerimizden yararlanın. Yasal yükümlülüklerinizi karşılayın ve güvenliği en üst düzeye çıkarın.",
      primaryButton: "Denetim Randevusu Oluştur",
      secondaryButton: "Test Teklifi Al",
    },
  },
];

/**
 * Slug'a göre hizmet detayı bulma fonksiyonu
 */
export function getServiceDetailBySlug(slug: string): ServiceData | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}
