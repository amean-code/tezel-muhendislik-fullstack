import Image from "next/image";

/**
 * ServicesFeature komponenti - Özellik bölümleri (Tüm hizmetler için kısa bilgi alanları)
 */
interface FeatureItem {
  text: string;
  strong?: string;
}

interface FeatureSection {
  title: string;
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  items: FeatureItem[];
  imagePosition: "left" | "right";
}

export default function ServicesFeature() {
  const features: FeatureSection[] = [
    {
      title: "Asansör Sistemleri",
      badge: "Dikey Ulaşım Çözümleri",
      description:
        "Yüksek katlı binalar, hastaneler ve endüstriyel tesisler için özel olarak tasarlanmış asansör sistemlerimiz, en son teknoloji sürücü sistemleri ve akıllı trafik yönetim algoritmaları ile donatılmıştır.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDvJJ8xNPAPaZ6KMlDytTMyOv27UqwZKqHA8lge2yE9WApziochSTQ3rgSSDnCrXSTLIFCG3RTZvatOFQ2bhQAnenp_wAEwFLGvKm9FgShmMtphT3JWi-Y_fPUMIdKR8uaJ-FbqmMlmKpB1EfQItUed_RK1ROvqFJNy6R7f14h6y4BGSv1U_j3qivL8eivA2CsNjV6eQlilVihu7XLdKqyrMfmo2UpWccz0gSpKbbVSI0CrGfGs1N4No0yFdqFcDGhr7Xf-Rk8K7A4",
      imageAlt: "Asansör Sistemleri Detay",
      imagePosition: "left",
      items: [
        { text: "EN 81-20/50 Standartlarına tam uyumluluk ve CE sertifikasyonu.", strong: "EN 81-20/50 Standartlarına" },
        {
          text: "VVVF Sürücü Teknolojisi ile %40'a varan enerji verimliliği ve konforlu seyir.",
          strong: "VVVF Sürücü Teknolojisi",
        },
        { text: "Rejeneratif üniteler ile enerjinin şebekeye geri kazandırılması." },
        { text: "Deprem sensörleri ve sismik koruma modülleri entegrasyonu." },
      ],
    },
    {
      title: "Modernizasyon Çözümleri",
      badge: "Sistem Yenileme",
      description:
        "Eskimiş asansör sistemlerinizi binanızın mimari yapısını bozmadan, en yeni güvenlik standartlarına ve teknolojik özelliklere kavuşturuyoruz.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkzSJcx8LphmXZYblHxZt7mlEx-rsL6TArrTBR99--qXLuDOdh8lic3fVb5S9pgxpNWJHdSMvrtON6qWQZlz-VykTDzBADYo04EZgPrng2iSFVCm-iUuQ6didKN17w3jQM6FWo_5EdSPJKvS39_ykqHdaMpdLSMUTZL5Yd59GJqmF2XL5kZdh9zgrtmZpww7grnMqEyaajFhzLCzgmvF0vXcyBXg-a1qeYVS2LVN8lFLM4Xuw82U5PjvAs6iFEIO5OTn446mD1aRA",
      imageAlt: "Modernizasyon Hizmetleri",
      imagePosition: "right",
      items: [
        { text: "Mikroişlemci Tabanlı yeni nesil kumanda panosu değişimi.", strong: "Mikroişlemci Tabanlı" },
        { text: "Otomatik kapı revizyonu ve güvenlik fotosellerinin güncellenmesi." },
        { text: "Kabin içi estetik yenileme ve aydınlatma modernizasyonu." },
        { text: "Hız regülatörü ve fren sistemlerinin güvenlik testleri ve değişimi." },
      ],
    },
    {
      title: "Yürüyen Merdiven Sistemleri",
      badge: "Yatay Ulaşım Çözümleri",
      description:
        "Ticari merkezler, metro istasyonları ve havalimanları için ağır hizmet tipi yürüyen merdiven ve bant sistemleri. Güvenlik sensörleri ve otomasyon entegrasyonu ile donatılmış modern çözümler.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpA4dqBmp79ZNsj1yQ8QAbwDty5_EDhk06PpinBsNm79K7fw2d8g-auPEI8iCufYyMB-Hk3TNl8ZHiI3-8tBXia1hTSPsI4NHO4AVvYvpNdqowUAJPmGDOaHYuvLgmVUYjkOuwAglORBrrgC-j-PTtYG1BW0GUQIrMgAhBxQWeqF0v0D-zGsxqgG_zUDUoVJgxSsZQ0wrD-QP5db_Np1tFDuh7k0DVmSp6n5QzCvMJs7E1j6FGlDiKXxdt9dUF1U9HYLDHOtKEgbA",
      imageAlt: "Yürüyen Merdiven Sistemleri",
      imagePosition: "left",
      items: [
        { text: "EN 115 Standartlarına tam uyumlu güvenlik sistemleri ve sertifikasyon.", strong: "EN 115 Standartlarına" },
        {
          text: "Ağır hizmet tipi mekanik sistemler ile yüksek trafik kapasitesi.",
          strong: "Ağır hizmet tipi",
        },
        { text: "Otomatik yön değiştirme ve hız optimizasyonu özellikleri." },
        { text: "Güvenlik sensörleri ve acil durum fren sistemleri entegrasyonu." },
      ],
    },
    {
      title: "Periyodik Bakım",
      badge: "Önleyici Bakım",
      description:
        "EN 13015 standartlarına uygun, önleyici ve kestirimci bakım hizmetleri. 7/24 teknik destek ve arıza müdahale garantisi ile kesintisiz işletim sağlıyoruz.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8",
      imageAlt: "Periyodik Bakım Hizmetleri",
      imagePosition: "right",
      items: [
        { text: "Aylık, üç aylık ve yıllık periyodik bakım programları.", strong: "Periyodik bakım programları" },
        { text: "Kestirimci bakım teknolojileri ile arıza önleme." },
        { text: "7/24 teknik destek ve acil müdahale hizmeti." },
        { text: "Detaylı bakım raporları ve performans analizi." },
      ],
    },
    {
      title: "Elektrik & Kontrol Sistemleri",
      badge: "Akıllı Kontrol",
      description:
        "Mikroişlemci tabanlı kumanda panoları, VVVF sürücü sistemleri ve akıllı trafik yönetim algoritmaları. Modern binalar için entegre kontrol çözümleri.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCboaMQayjXmx4qif-FOAZcoDgzlnLEIUc0IoJyYcedL6RGCiitvrxx-ECmFQix-_DM7XascE1teTaicntqR5WqpmeGZGihUmlcWHS5UACznnMBi7jL7e2h6N9TGDtbQeYc82ABxiNkqcTkBv_JHx5Qr9ooz84B49L2VSFQA9k3zOx0Fzn9ruMUw-BMlktDq2Yz4Oms3RnseBM28s2GpVRxEM3-JEao9hQVKFota8Ef8a2JQbwDxwCop5IU3b5z6kIlw7bKhfDBasU",
      imageAlt: "Elektrik & Kontrol Sistemleri",
      imagePosition: "left",
      items: [
        { text: "Mikroişlemci tabanlı kumanda panoları ile gelişmiş kontrol.", strong: "Mikroişlemci tabanlı" },
        {
          text: "VVVF sürücü teknolojisi ile enerji verimliliği optimizasyonu.",
          strong: "VVVF sürücü teknolojisi",
        },
        { text: "Akıllı trafik yönetim algoritmaları ile bekleme süresi optimizasyonu." },
        { text: "CANbus ve Modbus protokol desteği ile entegrasyon kolaylığı." },
      ],
    },
  ];

  return (
    <section className="bg-background-light py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row gap-16 mb-24 items-center ${
              index === features.length - 1 ? "" : "mb-24"
            } ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="w-full lg:w-1/2 relative h-[400px]">
              <div
                className={`absolute inset-0 bg-primary/10 ${
                  feature.imagePosition === "left"
                    ? "-translate-x-4 translate-y-4"
                    : "translate-x-4 translate-y-4"
                }`}
              ></div>
              <Image
                alt={feature.imageAlt}
                src={feature.image}
                fill
                className="relative w-full h-full object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                {feature.badge}
              </span>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">{feature.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">{feature.description}</p>
              <ul className="space-y-4">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent mt-0.5">check_circle</span>
                    <span className="text-gray-700">
                      {item.strong ? (
                        <>
                          <strong>{item.strong}</strong> {item.text.replace(item.strong, "").trim()}
                        </>
                      ) : (
                        item.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
