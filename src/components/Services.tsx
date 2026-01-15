import Image from "next/image";
import Link from "next/link";

/**
 * Services Section komponenti - Hizmetlerimizi gösterir
 */
export default function Services() {
  const services = [
    {
      id: 1,
      title: "Asansör Modernizasyonu",
      description: "Yüksek trafikli ortamlar için tasarlanmış gelişmiş yolcu ve yük asansörü çözümleri.",
      icon: "elevator",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvJJ8xNPAPaZ6KMlDytTMyOv27UqwZKqHA8lge2yE9WApziochSTQ3rgSSDnCrXSTLIFCG3RTZvatOFQ2bhQAnenp_wAEwFLGvKm9FgShmMtphT3JWi-Y_fPUMIdKR8uaJ-FbqmMlmKpB1EfQItUed_RK1ROvqFJNy6R7f14h6y4BGSv1U_j3qivL8eivA2CsNjV6eQlilVihu7XLdKqyrMfmo2UpWccz0gSpKbbVSI0CrGfGs1N4No0yFdqFcDGhr7Xf-Rk8K7A4",
      imageAlt: "Modern paslanmaz çelik asansör kapıları şık kurumsal lobide",
      link: "/hizmetler/asansor-modernizasyonu",
    },
    {
      id: 2,
      title: "Parça Tedariği",
      description: "Tüm markalar için yüksek kaliteli yedek parça, dişli ve sertifikalı mekanik komponentler.",
      icon: "settings_suggest",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8",
      imageAlt: "Endüstriyel dişliler ve mekanik komponentler yakın çekim",
      link: "/urunler",
    },
    {
      id: 3,
      title: "Yürüyen Merdiven Sistemleri",
      description: "Dayanıklılık ve akış için tasarlanmış ticari ve ağır hizmet yürüyen merdiven sistemleri.",
      icon: "escalator",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkS2DDe_BLZTxpqpQdmMRdg5J_a4O3Nor2tThx_pl8WaHD1v36GfY3G-81U6Fegi20ND5P5cg1FXcRdvEv_ubG-Y6ZgGH4GR-uuio0Sry3aeb7QD472zJz6bnSpLWDDPzr74x5GcaU1ZfR0x_RkapgmqeRx-sKcB3_JnQTcGreEFtogKzJWx3iSna1VNfrm2fjVY5M4PnhSgZ1rb4uYmgRrwseiqqSqIRLw7n1rgL0IT2YruYmOaLO4t4arLaoLDZpJJvXkU-O_6s",
      imageAlt: "Alışveriş merkezinde uzun modern yürüyen merdiven görünümü",
      link: "/hizmetler/yuruyen-merdiven-sistemleri",
    },
    {
      id: 4,
      title: "Periyodik Bakım",
      description: "Mevcut sistemlerin güvenlik, verimlilik ve estetik açısından stratejik olarak yükseltilmesi.",
      icon: "upgrade",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkzSJcx8LphmXZYblHxZt7mlEx-rsL6TArrTBR99--qXLuDOdh8lic3fVb5S9pgxpNWJHdSMvrtON6qWQZlz-VykTDzBADYo04EZgPrng2iSFVCm-iUuQ6didKN17w3jQM6FWo_5EdSPJKvS39_ykqHdaMpdLSMUTZL5Yd59GJqmF2XL5kZdh9zgrtmZpww7grnMqEyaajFhzLCzgmvF0vXcyBXg-a1qeYVS2LVN8lFLM4Xuw82U5PjvAs6iFEIO5OTn446mD1aRA",
      imageAlt: "Asansör modernizasyonu için dijital kontrol paneli inceleyen mühendis",
      link: "/hizmetler/periyodik-bakim",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-light">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
              Uzmanlığımız
            </h2>
            <h3 className="text-primary text-3xl md:text-4xl font-black tracking-tight mb-4">
              Mühendislik Mükemmelliği
            </h3>
            <p className="text-gray-600 text-lg">
              Endüstriyel ve ticari ihtiyaçlar için özel olarak tasarlanmış kapsamlı dikey ulaşım çözümleri. Güvenlik, verimlilik ve tasarım sunuyoruz.
            </p>
          </div>
          <Link
            href="/hizmetler"
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
          >
            <span>Tüm Hizmetleri Gör</span>
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>
        </div>

        {/* 4 Sütunlu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 block"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
                <Image
                  alt={service.imageAlt}
                  src={service.image}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col h-[220px]">
                <div className="size-10 rounded bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h4 className="text-primary text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-gray-500 text-sm mb-auto">{service.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    Daha fazla bilgi{" "}
                    <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
