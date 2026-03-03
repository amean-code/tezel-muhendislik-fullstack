import Link from "next/link";
import Image from "next/image";
import { contactInfo } from "@/data/contact";

/**
 * Telefon numarasını tel: linki için uygun formata dönüştürme fonksiyonu
 * Boşluk, parantez ve tire karakterlerini kaldırır, + karakterini korur
 */
function formatPhoneForTel(phone: string): string {
  return phone.replace(/[\s()-]/g, "");
}

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
              <Image
                src="/tezel_logo_nobg.png"
                alt="Tezel Mühendislik Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold tracking-tight">Tezel Mühendislik</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Asansör ve yürüyen merdiven/bant mühendislik çözümlerinin önde gelen sağlayıcısı. 2010 beri güvenlik, yenilik ve güvenilirliğe bağlıyız.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                className="size-8 rounded bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white"
                href="/"
                aria-label="Web sitesi"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a
                className="size-8 rounded bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white"
                href={`mailto:${contactInfo.email.primary}`}
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
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/hakkimizda">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/urunler">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/referanslar">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/iletisim">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Hizmetler</h3>
            <ul className="space-y-3">
              <li>
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/hizmetler">
                  Tüm Hizmetler
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/hizmetler/asansor-modernizasyonu">
                  Asansör Modernizasyonu
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/hizmetler/yuruyen-merdiven-bant-modernizasyonu">
                  Yürüyen Merdiven/Bant Modernizasyonu
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/hizmetler/yedek-parca-satisi">
                  Yedek Parça Satışı
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/hizmetler/enerji-taahhut">
                  Enerji Taahhüt
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/hizmetler/elektrik-elektronik-taahhut">
                  Elektrik & Elektronik Taahhüt
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-accent transition-colors text-sm" href="/hizmetler/test-denetim">
                  Test & Denetim
                </Link>
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
                  {contactInfo.office.address}
                  {contactInfo.office.addressLine2 && (
                    <>
                      <br />
                      {contactInfo.office.addressLine2}
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-accent text-lg mt-0.5">call</span>
                <div className="flex flex-col">
                  <a
                    href={`tel:${formatPhoneForTel(contactInfo.phone.number)}`}
                    className="hover:text-accent transition-colors"
                  >
                    {contactInfo.phone.number}
                  </a>
                  <a
                    href={`tel:${formatPhoneForTel(contactInfo.phone2.number)}`}
                    className="hover:text-accent transition-colors"
                  >
                    {contactInfo.phone2.number}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-accent text-lg mt-0.5">mail</span>
                <div className="flex flex-col">
                  <a
                    href={`mailto:${contactInfo.email.primary}`}
                    className="hover:text-accent transition-colors"
                  >
                    {contactInfo.email.primary}
                  </a>
                  {contactInfo.email.sales && (
                    <a
                      href={`mailto:${contactInfo.email.sales}`}
                      className="hover:text-accent transition-colors"
                    >
                      {contactInfo.email.sales}
                    </a>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
