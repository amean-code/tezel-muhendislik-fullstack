/**
 * AboutCTA komponenti - Hakkımızda sayfası CTA bölümü
 */
export default function AboutCTA() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-white text-3xl font-bold leading-tight mb-4">
              Tezel Mühendislik, her projede güvenliği, kaliteyi ve mühendislik disiplinini esas alır.
            </h2>
            <p className="text-blue-100 opacity-80 font-light">
              Teknik bir analiz veya yeni proje danışmanlığı için uzman mühendislerimizle iletişime geçin.
            </p>
          </div>
          <button className="shrink-0 h-14 px-10 bg-accent hover:bg-[#d97b20] text-white text-lg font-bold transition-all shadow-lg flex items-center gap-3 group">
            <span>Teklif Talep Et</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
