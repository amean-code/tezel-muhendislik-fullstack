import Link from "next/link";

/**
 * ProductCategories komponenti - Ürün kategorileri grid'i
 */
interface Category {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export default function ProductCategories() {
  const categories: Category[] = [
    {
      icon: "inventory_2",
      title: "Paket Asansörler",
      description: "Komple Sistem Çözümleri",
      href: "/urunler?kategori=paket-asansorler",
    },
    {
      icon: "settings_input_component",
      title: "Kumanda Panoları",
      description: "Akıllı Kontrol Üniteleri",
      href: "/urunler?kategori=kumanda-panolari",
    },
    {
      icon: "bolt",
      title: "Motorlar",
      description: "Dişlili & Dişlisiz Tahrik",
      href: "/urunler?kategori=motorlar",
    },
    {
      icon: "door_front",
      title: "Kabinler",
      description: "Endüstriyel Tasarım ve Özel Üretim",
      href: "/urunler?kategori=kabinler",
    },
    {
      icon: "escalator",
      title: "Yürüyen Merdivenler",
      description: "Her Türlü Hizmet Tipinde Yürüyen Merdiven ve Bantlar",
      href: "/urunler?kategori=yuruyen-merdivenler",
    },
    {
      icon: "sensor_door",
      title: "Otomatik Kapı Sistemleri",
      description: "Otomatik ve Çarpma Kapı Sistemleri",
      href: "/urunler?kategori=kapi-sistemleri",
    },
    {
      icon: "build_circle",
      title: "Yedek Parçalar",
      description: "Her Marka Orijinal ve Uyumlu Sertifikalı Komponentler",
      href: "/urunler?kategori=yedek-parcalar",
    },
    {
      icon: "upgrade",
      title: "Modernizasyon Kitleri",
      description: "Sistem İyileştirme",
      href: "/urunler?kategori=modernizasyon",
    },
    {
      icon: "construction",
      title: "Bakım Ekipmanları",
      description: "Sarf Malzemeler",
      href: "/urunler?kategori=bakim-ekipmanlari",
    },
    {
      icon: "precision_manufacturing",
      title: "Özel Projeler",
      description: "Terzi Usulü Mühendislik",
      href: "/urunler?kategori=ozel-projeler",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-accent text-sm font-black uppercase tracking-widest mb-2">
            Çözüm Kataloğu
          </span>
          <h2 className="text-primary text-3xl lg:text-4xl font-black uppercase">
            Ürün Kategorileri
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-0 border-t border-l border-gray-200">
          {categories.map((category, index) => {
            const CategoryContent = (
              <div className="group bg-white p-8 border-r border-b border-gray-200 hover:bg-primary transition-colors duration-300 h-[240px] flex flex-col">
                <span className="material-symbols-outlined text-4xl text-accent mb-6">
                  {category.icon}
                </span>
                <h4 className="text-primary group-hover:text-white text-lg font-black uppercase mb-4 leading-tight flex-shrink-0">
                  {category.title}
                </h4>
                <p className="text-gray-500 group-hover:text-gray-300 text-xs font-medium uppercase tracking-wider flex-grow">
                  {category.description}
                </p>
              </div>
            );

            return category.href ? (
              <Link key={index} href={category.href}>
                {CategoryContent}
              </Link>
            ) : (
              <div key={index}>{CategoryContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
