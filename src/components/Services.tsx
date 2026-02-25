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
      description: "Mevcut sistemlerin verimliliğini, güvenliğini ve konforunu artırmak için kapsamlı modernizasyon paketleri.",
      icon: "upgrade",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvJJ8xNPAPaZ6KMlDytTMyOv27UqwZKqHA8lge2yE9WApziochSTQ3rgSSDnCrXSTLIFCG3RTZvatOFQ2bhQAnenp_wAEwFLGvKm9FgShmMtphT3JWi-Y_fPUMIdKR8uaJ-FbqmMlmKpB1EfQItUed_RK1ROvqFJNy6R7f14h6y4BGSv1U_j3qivL8eivA2CsNjV6eQlilVihu7XLdKqyrMfmo2UpWccz0gSpKbbVSI0CrGfGs1N4No0yFdqFcDGhr7Xf-Rk8K7A4",
      imageAlt: "Modern paslanmaz çelik asansör kapıları şık kurumsal lobide",
      link: "/hizmetler/asansor-modernizasyonu",
    },
    {
      id: 2,
      title: "Yürüyen Merdiven/Bant Modernizasyonu",
      description: "Mevcut yürüyen merdiven ve bant sistemlerinizi modern teknolojilerle yenileyin. Güvenlik ve verimlilik artışı.",
      icon: "escalator",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZTuX8o6R-NIPOB9lgbGt3Y9VuxCSV8tGfsHsGw2D16sgP8xTExugMEZu46_nn4DnlKHsjovNMHHTMvkQAr_8osecEIHNNlOaTiCrk500Tjcs8vQ4MbNAt6JLBOCK8iKs1whCHrET1Mx0m2gwTux5jQyJbT_PMvHDgCrBswoGNnkIIRLjhnWDm0pQU4PuNeMopKa_WdS69178oGKI3V8wRjY0p48wjHEmTX9pYqqHStLyCtK490t87_JqoQtfviHmRyOhh1s4Bw5U",
      imageAlt: "Yürüyen merdiven modernizasyon çalışması",
      link: "/hizmetler/yuruyen-merdiven-bant-modernizasyonu",
    },
    {
      id: 3,
      title: "Yedek Parça Satışı",
      description: "Asansör, yürüyen merdiven ve bant sistemleri için orijinal veya uyumlu, sertifikalı yedek parça temini.",
      icon: "inventory_2",
      image: "/yedek-parca/yedek-parca-kapak-gorsel.png",
      imageAlt: "Yedek parça stok ve tedarik hizmetleri",
      link: "/hizmetler/yedek-parca-satisi",
    },
    {
      id: 4,
      title: "Enerji Taahhüt",
      description: "Güneş Enerji Santralleri (GES) ve Elektrikli Araç Şarj İstasyonları kurulumu. Yenilenebilir enerji çözümleri.",
      icon: "solar_power",
      image: "/ev-catı-gunes-paneli.png",
      imageAlt: "Güneş enerji santrali ve şarj istasyonu projeleri",
      link: "/hizmetler/enerji-taahhut",
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
              Endüstriyel ve ticari ihtiyaçlar için özel olarak tasarlanmış kapsamlı yatay ve dikey ulaşım çözümleri. Güvenlik, verimlilik ve estetik sunuyoruz.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
                <Image
                  alt={service.imageAlt}
                  src={service.image}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="size-10 rounded bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h4 className="text-primary text-lg font-bold mb-3 line-clamp-2">{service.title}</h4>
                <p className="text-gray-500 text-sm flex-grow line-clamp-3">{service.description}</p>
                <div className="pt-4 border-t border-gray-100 mt-4 flex-shrink-0">
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
