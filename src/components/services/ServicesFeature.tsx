import Image from "next/image";

/**
 * ServicesFeature komponenti - Özellik bölümleri (Asansör Sistemleri ve Modernizasyon)
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
