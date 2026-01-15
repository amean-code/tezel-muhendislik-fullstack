/**
 * EscalatorStandards komponenti - EN 115 standartları ve sertifikalar bölümü
 */
export default function EscalatorStandards() {
  return (
    <section className="bg-primary text-white py-12 border-y border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/10 rounded backdrop-blur-sm">
              <span className="material-symbols-outlined text-4xl text-accent">security</span>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">
                EN 115 Standartları ve CE Uygunluğu
              </h3>
              <p className="text-gray-300 max-w-2xl">
                Tüm kurulum ve modernizasyon projelerimiz, Avrupa Birliği güvenlik normlarına (EN
                115) ve CE direktiflerine tam uyumluluk çerçevesinde gerçekleştirilmektedir.
              </p>
            </div>
          </div>
          <div className="flex gap-4 opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="border border-white/30 px-4 py-2 rounded font-bold text-sm tracking-widest">
              EN 115-1
            </div>
            <div className="border border-white/30 px-4 py-2 rounded font-bold text-sm tracking-widest">
              CE MARK
            </div>
            <div className="border border-white/30 px-4 py-2 rounded font-bold text-sm tracking-widest">
              ISO 9001
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
