/**
 * ElectricalStandards komponenti - Standartlar ve sertifikalar bölümü
 */
export default function ElectricalStandards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-y border-gray-100 py-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
              <span className="material-symbols-outlined text-3xl text-gray-400">
                verified_user
              </span>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-primary">Uluslararası Uygunluk</h3>
              <p className="text-gray-500 text-sm mt-1">
                Tüm elektrik sistemlerimiz global güvenlik standartlarına göre sertifikalandırılmıştır.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-800 font-display border-b-2 border-gray-300 pb-1">
                EN 81
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">
                Asansör Standardı
              </span>
            </div>
            <div className="h-10 w-px bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-800 font-display border-b-2 border-gray-300 pb-1">
                CE
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">
                Avrupa Uygunluğu
              </span>
            </div>
            <div className="h-10 w-px bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-3xl text-gray-800 mb-1">
                health_and_safety
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                İş Güvenliği
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
