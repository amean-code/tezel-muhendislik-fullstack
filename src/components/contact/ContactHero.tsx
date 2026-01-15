/**
 * ContactHero komponenti - İletişim sayfası hero bölümü
 */
export default function ContactHero() {
  return (
    <section className="w-full bg-background-light py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-primary text-4xl md:text-5xl font-bold tracking-tight mb-4">
          İletişim & Teklif Talebi
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-normal">
          Endüstriyel asansör ve yürüyen merdiven çözümlerimiz için teknik ekibimizle iletişime geçin
          veya projeniz için detaylı teklif alın.
        </p>
      </div>
    </section>
  );
}
