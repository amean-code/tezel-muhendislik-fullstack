/**
 * Stats Section komponenti - İstatistikleri gösterir
 */
export default function Stats() {
  return (
    <section className="relative z-30 -mt-16 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-xl border border-gray-100">
          <div className="flex flex-col gap-1 p-6 border-b sm:border-b-0 sm:border-r border-gray-100 last:border-0">
            <div className="flex items-center gap-2 text-accent mb-2">
              <span className="material-symbols-outlined">apartment</span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Projeler
              </span>
            </div>
            <p className="text-primary text-3xl font-black">100+</p>
            <p className="text-gray-600 text-sm">Tamamlanan Kurulum</p>
          </div>

          <div className="flex flex-col gap-1 p-6 border-b lg:border-b-0 lg:border-r border-gray-100 last:border-0">
            <div className="flex items-center gap-2 text-accent mb-2">
              <span className="material-symbols-outlined">history</span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Deneyim
              </span>
            </div>
            <p className="text-primary text-3xl font-black">25</p>
            <p className="text-gray-600 text-sm">Sektörde Yıl</p>
          </div>

          <div className="flex flex-col gap-1 p-6 border-b sm:border-b-0 sm:border-r border-gray-100 last:border-0">
            <div className="flex items-center gap-2 text-accent mb-2">
              <span className="material-symbols-outlined">build_circle</span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Bakım
              </span>
            </div>
            <p className="text-primary text-3xl font-black">1200+</p>
            <p className="text-gray-600 text-sm">Yönetilen Ünite</p>
          </div>

          <div className="flex flex-col gap-1 p-6">
            <div className="flex items-center gap-2 text-accent mb-2">
              <span className="material-symbols-outlined">groups</span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Ekip
              </span>
            </div>
            <p className="text-primary text-3xl font-black">30</p>
            <p className="text-gray-600 text-sm">Uzman Çalışan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
