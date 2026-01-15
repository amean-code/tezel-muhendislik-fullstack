/**
 * RegulationsHero komponenti - Yasal Yönetmelikler sayfası hero bölümü
 */
export default function RegulationsHero() {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="bg-white p-3 rounded-full shadow-sm mb-2">
            <span className="material-symbols-outlined text-primary text-4xl">gavel</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
            Mevzuat ve Yasal Yönetmelikler Kütüphanesi
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
            Asansör işletme, bakım, periyodik kontrol yönetmelikleri ve uluslararası standartlar için güncel bilgi
            bankası.
          </p>
        </div>
      </div>
    </section>
  );
}
