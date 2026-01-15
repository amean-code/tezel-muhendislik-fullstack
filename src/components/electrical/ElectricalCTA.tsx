import Link from "next/link";

/**
 * ElectricalCTA komponenti - Elektrik ve kontrol sistemleri sayfası çağrı bölümü
 */
export default function ElectricalCTA() {
  return (
    <section className="py-24 bg-[#F5F5F5] border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
          Elektrik & Kontrol Sistemleri İçin Teknik Destek
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          İşletmenizin kesintisiz çalışması için 7/24 teknik destek ve uzman mühendislik çözümleri
          sunuyoruz. Projeniz için en doğru elektrik planlamasını birlikte yapalım.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/iletisim"
            className="w-full sm:w-auto min-w-[240px] h-14 px-8 bg-accent hover:bg-[#d97b20] text-white text-lg font-bold rounded-sm transition-colors shadow-lg shadow-accent/20 flex items-center justify-center"
          >
            Teklif Talep Et
          </Link>
          <Link
            href="/iletisim"
            className="w-full sm:w-auto min-w-[240px] h-14 px-8 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg font-bold rounded-sm transition-colors flex items-center justify-center"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </section>
  );
}
