import Link from "next/link";

/**
 * ServicesCTA komponenti - Hizmetler sayfası CTA bölümü.
 * "Teklif Talep Et" ve "İletişime Geç" butonları iletişim sayfasına yönlendirir.
 */
export default function ServicesCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
          Projeniz İçin Doğru Teknik Çözüm
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Uzman mühendis kadromuzla tanışın, yapınıza en uygun asansör ve yürüyen merdiven
          sistemleri için ücretsiz keşif talep edin.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/iletisim"
            className="w-full sm:w-auto min-w-[200px] h-14 px-8 bg-accent hover:bg-[#d97b20] text-white text-lg font-bold transition-colors shadow-md flex items-center justify-center"
          >
            Teklif Talep Et
          </Link>
          <Link
            href="/iletisim"
            className="w-full sm:w-auto min-w-[200px] h-14 px-8 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg font-bold transition-colors flex items-center justify-center"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </section>
  );
}
