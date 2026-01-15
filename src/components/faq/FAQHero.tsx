import Link from "next/link";

/**
 * FAQHero komponenti - Sık Sorulan Sorular sayfası hero bölümü
 */
export default function FAQHero() {
  return (
    <section className="bg-gray-100 border-b border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4 text-sm font-medium text-gray-500">
              <Link href="/bilgi-merkezi" className="hover:text-primary">
                Bilgi Merkezi
              </Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-primary font-bold">Sık Sorulan Sorular</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              Sık Sorulan Sorular
            </h1>
            <p className="mt-4 text-lg text-gray-600 font-light max-w-2xl">
              Teknik süreçler, modernizasyon, bakım periyotları ve yasal mevzuatlar hakkında merak
              ettiğiniz tüm soruların mühendislik onaylı cevapları.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
