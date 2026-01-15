import Link from "next/link";

/**
 * TechnicalDictionarySidebar komponenti - Teknik sözlük sayfası yan menü widget'ları
 */
export default function TechnicalDictionarySidebar() {
  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Bilgi Bankası Widget */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">bookmark</span>
            Bilgi Bankası
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
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
              </Link>
            </li>
            <li>
              <Link
                className="group flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20 transition-colors"
                href="/bilgi-merkezi/teknik-sozluk"
              >
                <div className="bg-primary text-white p-2 rounded-md">
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-primary">Teknik Sözlük</p>
                  <p className="text-xs text-gray-500">Mühendislik terimleri</p>
                </div>
                <span className="material-symbols-outlined text-primary text-[18px]">
                  chevron_right
                </span>
              </Link>
            </li>
            <li>
              <Link
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
              </Link>
            </li>
          </ul>
        </div>

        {/* Terim Öner Widget */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="material-symbols-outlined text-primary">lightbulb</span>
            <h3 className="text-sm font-bold text-gray-900">Aradığınızı Bulamadınız mı?</h3>
          </div>
          <p className="text-xs text-gray-600 mb-4">
            Sözlüğe eklenmesini istediğiniz teknik bir terim varsa bize iletin, uzman mühendislerimiz
            açıklasın.
          </p>
          <button
            className="w-full bg-white text-primary text-xs font-bold py-2 rounded border border-gray-200 hover:bg-gray-50 transition-colors"
            type="button"
          >
            Terim Öner
          </button>
        </div>
      </div>
    </aside>
  );
}
