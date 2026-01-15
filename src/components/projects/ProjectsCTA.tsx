import Link from "next/link";

/**
 * ProjectsCTA komponenti - Referanslar sayfası CTA bölümü
 */
export default function ProjectsCTA() {
  return (
    <div className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-full bg-accent/10 p-3 text-accent">
            <span className="material-symbols-outlined text-3xl">handshake</span>
          </div>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Projeniz İçin Güvenilir Bir <br />
            Çözüm Ortağı Arıyorsanız
          </h2>
          <p className="max-w-xl text-gray-600">
            Teknik uzmanlığımız ve geniş referans ağımız ile projenize değer katmaya hazırız. Size
            özel çözümlerimiz için hemen bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center max-w-md">
            <Link
              href="/iletisim"
              className="flex w-full sm:w-auto h-12 items-center justify-center rounded bg-accent px-8 text-base font-bold text-white shadow-md hover:bg-[#d97b20] hover:shadow-lg transition-all"
            >
              Teklif Talep Et
            </Link>
            <Link
              href="/iletisim"
              className="flex w-full sm:w-auto h-12 items-center justify-center rounded border-2 border-primary bg-transparent px-8 text-base font-bold text-primary hover:bg-primary hover:text-white transition-all"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
