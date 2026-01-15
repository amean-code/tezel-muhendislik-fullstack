import { contactInfo } from "@/data/contact";
import Link from "next/link";

/**
 * CTA Section komponenti - Çağrı yapma bölümü
 */
export default function CTA() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-xl overflow-hidden shadow-2xl relative">
          {/* Soyut Arka Plan Deseni */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 px-6 py-16 md:py-20 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Altyapınızı Yükseltmeye Hazır mısınız?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Yeni kurulum veya bakım ihtiyaçlarınız için mühendislik ekibimizle iletişime geçin ve danışmanlık alın.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/iletisim"
                className="w-full sm:w-auto min-w-[180px] h-14 px-8 bg-accent hover:bg-[#d97b20] text-white text-lg font-bold rounded transition-colors shadow-lg flex items-center justify-center"
              >
                Teklif Talep Et
              </Link>
              <Link
                href={`https://wa.me/${contactInfo.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-w-[180px] h-14 px-8 bg-transparent hover:bg-white/10 text-white border border-white/30 text-lg font-bold rounded transition-colors flex items-center justify-center"
              >
                Satış Ekibiyle İletişim
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
