import Image from "next/image";
import { serviceDetails } from "@/data/serviceDetails";

/**
 * Feature listesinde kullanılan madde tipi (vurgulu metin opsiyonel).
 */
interface FeatureItem {
  text: string;
  strong?: string;
}

/**
 * ServicesFeature'ta tek bir hizmet bloğunu temsil eden tip.
 */
interface FeatureSection {
  title: string;
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  items: FeatureItem[];
  imagePosition: "left" | "right";
}

/**
 * serviceDetails'ten FeatureSection listesi üretir.
 * Madde listesi whyCards'tan (description + strongText) türetilir.
 */
function buildFeaturesFromServiceDetails(): FeatureSection[] {
  return serviceDetails.map((service, index) => {
    const items: FeatureItem[] = service.whyCards.map((card) => ({
      text: card.description,
      strong: card.strongText,
    }));
    return {
      title: service.title,
      badge: service.badge ?? "",
      description: service.description,
      image: service.scope.image,
      imageAlt: service.scope.imageAlt,
      items,
      imagePosition: index % 2 === 0 ? "left" : "right",
    };
  });
}

/**
 * ServicesFeature komponenti - Özellik bölümleri (serviceDetails verisiyle, tüm hizmetler için kısa bilgi alanları).
 */
export default function ServicesFeature() {
  const features = buildFeaturesFromServiceDetails();

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
