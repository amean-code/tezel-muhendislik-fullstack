/**
 * Footer komponenti - Alt bilgi ve linkler
 */
export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Şirket Bilgisi */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px] text-accent">engineering</span>
              <span className="text-xl font-bold tracking-tight">Tezel Mühendislik</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Asansör ve yürüyen merdiven mühendislik çözümlerinin önde gelen sağlayıcısı. 1998'den beri güvenlik, yenilik ve güvenilirliğe bağlıyız.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                className="size-8 rounded bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white"
                href="#"
                aria-label="Web sitesi"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a
                className="size-8 rounded bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white"
                href="#"
                aria-label="E-posta"
              >
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-400 hover:text-accent transition-colors text-sm" href="#hakkimizda">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent transition-colors text-sm" href="#urunler">
                  Ürünlerimiz
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent transition-colors text-sm" href="#bakim">
                  Bakım Planları
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent transition-colors text-sm" href="#modernizasyon">
                  Modernizasyon
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent transition-colors text-sm" href="#projeler">
                  Projeler
                </a>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Hizmetler</h3>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-400 hover:text-accent transition-colors text-sm" href="#kurulum">
                  Kurulum
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent transition-colors text-sm" href="#tamir">
                  Tamir & Servis
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent transition-colors text-sm" href="#guvenlik">
                  Güvenlik Kontrolleri
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent transition-colors text-sm" href="#destek">
                  7/24 Destek
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-accent text-lg mt-0.5">location_on</span>
                <span>
                  Endüstri Bölgesi 4. Levent,
                  <br />
                  İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-accent text-lg">call</span>
                <span>+90 (212) 555 0123</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-accent text-lg">mail</span>
                <span>info@tezelmuhendislik.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Tezel Mühendislik. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#gizlilik">
              Gizlilik Politikası
            </a>
            <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#kullanim">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
