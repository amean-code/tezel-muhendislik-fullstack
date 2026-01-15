import Image from "next/image";

/**
 * EscalatorServices komponenti - Yürüyen merdiven hizmet kapsamı kartları
 */
export default function EscalatorServices() {
  const services = [
    {
      title: "Kurulum (Yeni Montaj)",
      description: "Kamu ve ticari alanlar için yüksek performanslı sistem montajı.",
      icon: "construction",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDxFAZaWr9WXR3A6sv7YJrE7PG1I_KG--WlqMwo3XwlaqI3Svt9r3HufM3-ZlNxiSAn2x7wHmdTH8jxGrw4Mi7mva9lAVGoDDgK8yawcSt-zYeldDzEIVkIeyPvo3Ud_ebLC_rFGwB8GFF1EvQt_1yetWtp3Z0Et-kwuDhKjyDqApOaMinja_LOgKW46GcF94xHl6tDUqDU-h1iFVXn6HvxT6wohbPWroJYSBavyPqqKR3mV_kXYevvGLN2IqcmuUuGo0egU-OKqqY",
      imageAlt: "Yürüyen merdiven montaj sahası",
      features: [
        "Saha analizi ve proje çizimi",
        "Ağır hizmet tipi mekanik montaj",
        "Otomasyon entegrasyonu",
      ],
    },
    {
      title: "Revizyon",
      description: "Mevcut sistemlerin performans analizi ve kapsamlı yenileme işlemleri.",
      icon: "rule_settings",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjZHf2G0n6b1YxBumLfNgnCUEyWwONNyUqbsFoeMxvm4c72hUTAh2KvUBEn7wUJfeFlrAdTf2yusm0qoUybbcoxDKlRKUBoJL4XTF2FHHwiEGx3mH2wgBMkP2IyHmwN1IqgTn_Zp7zFPkWP0vhii_0bks0CvGmGyzxiNVDo8qRMKVnDG83y2kQLEtZ16ErPtJUHNrkSR1hEEdd_AkdIZhp4mzeM6O3GfWBC2_WNJkxj_HbpfAjwSHRtVoToSrEGgVSPvLFZpmxE1I",
      imageAlt: "Mekanik dişli sistemleri revizyonu",
      features: [
        "Güvenlik sensör güncellemeleri",
        "Motor ve sürücü modernizasyonu",
        "Korkuluk ve kaplama yenileme",
      ],
    },
    {
      title: "Parça Değişimi & Optimizasyon",
      description: "Orijinal yedek parça temini ve sistem verimliliğini artırma.",
      icon: "settings_suggest",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBQHzAcUK6mBj0ii4KK23xLJHO206ngOsZEZ2Dlhnp4BVX5yanGAkUzITkCzXoyuLGLlAt1yxfro7cn873Dwe_dTX1rjbj7iTrfUbKe-I5EHDF9X3Ob5qodMvjW1JauDS70NQ0vR8qzcY6VgTh_-_sjFewEA5g-FbEzZFQEdHbWK4Fksq3tYJ5q5fm3JMLBmeSOe3HqpJOELjTQaqLwE2kPAstJSRC4jjmSxkmrJnoDW8tVOMD2dotKSyX-BaKRx0LRfCeruAX3acU",
      imageAlt: "Endüstriyel yedek parça ve zincir",
      features: [
        "Basamak zinciri ve makara değişimi",
        "Tarak plakası ve süpürgelik onarımı",
        "Enerji tasarrufu modları",
      ],
    },
  ];

  return (
    <section
      id="service-details-section"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
            Hizmet Kapsamı
          </h2>
          <h3 className="text-primary text-3xl md:text-4xl font-display font-bold tracking-tight">
            Kapsamlı Teknik Çözümler
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background-light rounded-lg border border-gray-200 flex flex-col group hover:border-accent transition-colors duration-300 overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-20"></div>
                <Image
                  alt={service.imageAlt}
                  src={service.image}
                  fill
                  className="object-cover grayscale-[30%] group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 pt-0 flex flex-col gap-6 relative">
                <div className="-mt-7 size-14 bg-white border border-gray-200 rounded flex items-center justify-center text-accent shadow-lg relative z-20 group-hover:bg-accent group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-primary mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <span className="material-symbols-outlined text-accent text-lg">
                          check_circle
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
