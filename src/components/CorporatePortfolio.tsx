/**
 * CorporatePortfolio komponenti - Kurumsal portföy ve mühendislik mükemmelliği bölümü
 */
export default function CorporatePortfolio() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5">
          <h2 className="text-accent text-sm font-black uppercase tracking-widest mb-4">
            Kurumsal Portföy
          </h2>
          <h3 className="text-primary text-4xl lg:text-5xl font-black uppercase mb-8">
            Mühendislik Mükemmelliği
          </h3>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 font-medium leading-relaxed mb-6">
              Tezel Mühendislik olarak, yatay ve dikey taşımacılık sistemlerinde uluslararası güvenlik
              standartlarını temel alan yüksek mühendislik disiplini ile hizmet
              veriyoruz. Teknik analizden uygulamaya kadar her aşamada mekanik hassasiyeti ve
              enerji verimliliğini ön planda tutuyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Modernizasyon uzmanlığımız ile yaşlanan sistemleri güncel teknolojiyle entegre
              ederek, emniyet protokollerini en üst seviyeye çıkarıyor ve operasyonel ömrü
              maksimize ediyoruz. Sertifikalı bileşen kullanımı ve titiz mühendislik hesaplamalarıyla
              tesislerinizin yatay ve dikey mobilite altyapısını güvence altına alıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
