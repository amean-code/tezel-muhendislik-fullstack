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
          "Mevcut asansörlerinizi EN 81-80 standartlarına tam uyumlu hale getirerek kaza risklerini minimize ediyoruz. Fren sistemleri, hız regülatörleri ve kapı güvenlik sensörleri en yeni teknolojilerle yenilenir.",
        strongText: "EN 81-80",
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
          title: "Tahrik Sistemi Dönüşümü",
          description: "Yağlı dişli sistemlerin, bakım gerektirmeyen dişlisiz motorlarla değişimi.",
          borderColor: "accent",
        },
        {
          icon: "elevator",
          title: "Kabin Yenileme",
          description: "Anti-vandal butonlar, dekoratif paslanmaz kaplama ve zemin yenileme.",
          borderColor: "accent",
        },
        {
          icon: "sensors",
          title: "Güvenlik Güncellemesi",
          description: "Hız regülatörü, paraşüt fren ve kuyu dibi tamponların yenilenmesi.",
          borderColor: "primary",
        },
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkzSJcx8LphmXZYblHxZt7mlEx-rsL6TArrTBR99--qXLuDOdh8lic3fVb5S9pgxpNWJHdSMvrtON6qWQZlz-VykTDzBADYo04EZgPrng2iSFVCm-iUuQ6didKN17w3jQM6FWo_5EdSPJKvS39_ykqHdaMpdLSMUTZL5Yd59GJqmF2XL5kZdh9zgrtmZpww7grnMqEyaajFhzLCzgmvF0vXcyBXg-a1qeYVS2LVN8lFLM4Xuw82U5PjvAs6iFEIO5OTn446mD1aRA",
      imageAlt: "Teknik revizyon süreci ve modernizasyon uygulaması",
      note: {
        label: "Mühendislik Notu",
        text: "Her modernizasyon projesi, binanın trafik yoğunluğuna göre özel olarak hesaplanır.",
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
            "Gürültülü röleli pano, yüksek enerji tüketimi ve sık arıza yapan mekanik parçalar.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8",
          imageAlt: "Eski asansör sistemi ve yıpranmış parçalar",
        },
        {
          label: "Modernize Edilmiş",
          labelColor: "green",
          title: "Estetik ve Güvenli",
          description:
            "Paslanmaz çelik kabin, LED aydınlatma, dijital göstergeler ve sessiz çalışma.",
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
          description: "Uzman ekiplerce kurulum, güvenlik testleri ve yeşil etiket alımı.",
        },
      ],
    },
    cta: {
      title: "Asansörünüzü Yenilemeye Hazır Mısınız?",
      description:
        "Uzman mühendislerimizle binanızın değerini artırın, güvenliği en üst düzeye çıkarın. Hemen iletişime geçin, yerinde ücretsiz analiz yapalım.",
      primaryButton: "Modernizasyon Teklifi Al",
      secondaryButton: "Ücretsiz Keşif Randevusu Oluştur",
    },
  },
  {
    slug: "periyodik-bakim",
    title: "Periyodik Bakım: Kesintisiz İşletim İçin Profesyonel Teknik Servis",
    description:
      "EN 13015 standartlarına uygun, önleyici ve kestirimci bakım hizmetleri ile sistemlerinizin maksimum verimlilikte çalışmasını sağlıyoruz.",
    badge: "Teknik Servis",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8",
    heroImageAlt: "Periyodik bakım ve teknik servis hizmetleri",
    whyTitle: "Neden Periyodik Bakım?",
    whySubtitle: "Düzenli bakım, beklenmedik arızaları önler ve sistem ömrünü uzatır.",
    whyCards: [
      {
        icon: "schedule",
        title: "7/24 Teknik Destek",
        description:
          "Ortalama 120 dakika içinde arıza müdahalesi garantisi. Kritik sistemler için öncelikli müdahale protokolü.",
        strongText: "120 dakika",
      },
      {
        icon: "trending_up",
        title: "Kestirimci Bakım",
        description:
          "Sensör verileri ve performans analizi ile olası arızaları önceden tespit ediyor, planlı müdahale ile kesintisiz işletim sağlıyoruz.",
      },
      {
        icon: "verified",
        title: "Standart Uyumluluk",
        description:
          "EN 13015 standartlarına tam uyumlu bakım programları ile güvenlik denetimlerine hazırlık.",
        strongText: "EN 13015",
      },
    ],
    scope: {
      badge: "Bakım Kapsamı",
      title: "Kapsamlı Bakım Hizmetleri",
      description:
        "Her bakım ziyaretinde sisteminizin tüm kritik bileşenlerini kontrol ediyor, gerekli ayarları yapıyoruz.",
      items: [
        {
          icon: "build_circle",
          title: "Mekanik Kontroller",
          description: "Raylar, makaralar, kablo ve halatların görsel ve ölçümsel kontrolü.",
          borderColor: "primary",
        },
        {
          icon: "electrical_services",
          title: "Elektrik Sistemleri",
          description: "Kumanda panosu, kontaktörler, sigortalar ve güvenlik devrelerinin testi.",
          borderColor: "accent",
        },
        {
          icon: "sensors",
          title: "Güvenlik Sistemleri",
          description: "Kapı güvenlik sensörleri, hız regülatörü ve fren sistemlerinin kontrolü.",
          borderColor: "accent",
        },
        {
          icon: "cleaning_services",
          title: "Temizlik ve Yağlama",
          description: "Kuyu ve makine dairesi temizliği, kritik parçaların yağlanması.",
          borderColor: "primary",
        },
      ],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD9O5j8pHDkxp1oOf8i8N5PbhbgWe0tR2jvKRwGytcnaEp-0ZdEYQACjMppzd1xAu2d_N7eUFWyv-UuYDEO-02i0sysSXgAhWEc4I5IDy2P_YgTweZuAJlm6Egm9mJmr3VqDjZ9QUz2W-oNw73Md5rBe2QjquHCMUdGuKkQ9WZ-zlQzQp_o5kh0a_3NxyMXEFkIHR9tigNvZbM2KgIVHj6ymrP9Ea2uHIH43Dwoq6TihwPsz1TmHAxMEgcOaeFArYlE16usuBHBugc",
      imageAlt: "Teknik bakım operasyonu ve kontrol süreci",
      note: {
        label: "Bakım Notu",
        text: "Her bakım ziyareti sonrası detaylı rapor ve öneriler sunulur.",
      },
    },
    beforeAfter: {
      title: "Bakım Öncesi / Sonrası",
      subtitle: "Düzenli bakımın sistem performansına etkisi.",
      items: [
        {
          label: "Bakımsız Sistem",
          labelColor: "red",
          title: "Yüksek Arıza Riski",
          description:
            "Aşınmış parçalar, gürültülü çalışma ve beklenmedik arızalar.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8",
          imageAlt: "Bakımsız asansör sistemi",
        },
        {
          label: "Bakımlı Sistem",
          labelColor: "green",
          title: "Optimum Performans",
          description:
            "Sessiz çalışma, düşük arıza oranı ve uzun sistem ömrü.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDvJJ8xNPAPaZ6KMlDytTMyOv27UqwZKqHA8lge2yE9WApziochSTQ3rgSSDnCrXSTLIFCG3RTZvatOFQ2bhQAnenp_wAEwFLGvKm9FgShmMtphT3JWi-Y_fPUMIdKR8uaJ-FbqmMlmKpB1EfQItUed_RK1ROvqFJNy6R7f14h6y4BGSv1U_j3qivL8eivA2CsNjV6eQlilVihu7XLdKqyrMfmo2UpWccz0gSpKbbVSI0CrGfGs1N4No0yFdqFcDGhr7Xf-Rk8K7A4",
          imageAlt: "Bakımlı ve optimize edilmiş asansör sistemi",
        },
      ],
    },
    process: {
      title: "Bakım Süreci",
      subtitle: "Profesyonel bakım hizmetlerimizin adımları.",
      steps: [
        {
          icon: "search",
          title: "1. Sistem İncelemesi",
          description: "Görsel kontrol, ses analizi ve performans ölçümleri.",
        },
        {
          icon: "checklist",
          title: "2. Kontrol Listesi",
          description: "Tüm kritik bileşenlerin standart kontrol listesine göre değerlendirilmesi.",
        },
        {
          icon: "build",
          title: "3. Bakım İşlemleri",
          description: "Gerekli ayarlar, temizlik, yağlama ve küçük onarımlar.",
        },
        {
          icon: "description",
          title: "4. Raporlama",
          description: "Detaylı bakım raporu ve bir sonraki bakım önerileri.",
        },
      ],
    },
    cta: {
      title: "Sistemlerinizin Bakımını Bize Bırakın",
      description:
        "7/24 teknik destek ve kestirimci bakım hizmetlerimizle sistemlerinizin kesintisiz çalışmasını sağlayın.",
      primaryButton: "Bakım Planı Oluştur",
      secondaryButton: "Teknik Destek Talep Et",
    },
  },
];

/**
 * Slug'a göre hizmet detayı bulma fonksiyonu
 */
export function getServiceDetailBySlug(slug: string): ServiceData | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}
