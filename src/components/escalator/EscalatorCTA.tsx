import Link from "next/link";

/**
 * EscalatorCTA komponenti - Yürüyen merdiven sayfası çağrı bölümü
 */
export default function EscalatorCTA() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 tracking-tight">
              Yürüyen Merdiven Sistemleri İçin Teknik Destek
            </h2>
            <p className="text-gray-600 text-lg">
              Projeleriniz için uzman mühendislerimizden detaylı bilgi ve fiyat teklifi alın.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link
              href="/iletisim"
              className="h-14 px-8 bg-accent hover:bg-[#d97b20] text-white text-lg font-bold rounded transition-colors shadow-lg flex items-center justify-center"
            >
              Teklif Talep Et
            </Link>
            <Link
              href="/iletisim"
              className="h-14 px-8 bg-transparent hover:bg-primary hover:text-white text-primary border-2 border-primary text-lg font-bold rounded transition-colors flex items-center justify-center"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
