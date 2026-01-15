/**
 * KnowledgeSidebar komponenti - Bilgi Merkezi sayfası yan menü widget'ları
 */
export default function KnowledgeSidebar() {
  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Hızlı Erişim Widget */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-display font-bold text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">bookmark</span>
            Bilgi Bankası
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                href="/bilgi-merkezi/sik-sorulan-sorular"
              >
                <div className="bg-primary/10 text-primary p-2 rounded-md">
                  <span className="material-symbols-outlined text-[20px]">quiz</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                    Sık Sorulan Sorular
                  </p>
                  <p className="text-xs text-gray-500">Arıza ve bakımla ilgili</p>
                </div>
                <span className="material-symbols-outlined text-gray-400 text-[18px]">
                  chevron_right
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                href="/bilgi-merkezi/teknik-sozluk"
              >
                <div className="bg-primary/10 text-primary p-2 rounded-md">
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                    Teknik Sözlük
                  </p>
                  <p className="text-xs text-gray-500">Mühendislik terimleri</p>
                </div>
                <span className="material-symbols-outlined text-gray-400 text-[18px]">
                  chevron_right
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                href="/bilgi-merkezi/yasal-yonetmelikler"
              >
                <div className="bg-primary/10 text-primary p-2 rounded-md">
                  <span className="material-symbols-outlined text-[20px]">gavel</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                    Yasal Yönetmelikler
                  </p>
                  <p className="text-xs text-gray-500">Mevzuat kütüphanesi</p>
                </div>
                <span className="material-symbols-outlined text-gray-400 text-[18px]">
                  chevron_right
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Bülten Widget */}
        <div className="bg-primary rounded-xl p-6 text-white shadow-md relative overflow-hidden">
          {/* Arka Plan Deseni */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 rounded-full bg-blue-500/20 blur-xl"></div>
          <h3 className="text-lg font-display font-bold mb-2 relative z-10">Bültene Abone Olun</h3>
          <p className="text-sm text-gray-300 mb-4 relative z-10">
            Yeni teknik makaleler ve sektör duyuruları e-postanıza gelsin.
          </p>
          <form className="space-y-3 relative z-10">
            <input
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E-posta adresiniz"
              type="email"
            />
            <button
              className="w-full bg-white text-primary font-bold text-sm py-2 rounded-lg hover:bg-gray-100 transition-colors"
              type="button"
            >
              Kaydol
            </button>
          </form>
        </div>

        {/* Popüler Etiketler */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
            Popüler Etiketler
          </h3>
          <div className="flex flex-wrap gap-2">
            {["EN81-20", "Hidrolik", "EnerjiVerimliliği", "AsansörBakım", "Güvenlik"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-900 text-xs font-medium rounded hover:bg-gray-200 cursor-pointer transition-colors"
                >
                  #{tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
