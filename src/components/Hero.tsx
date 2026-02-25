import Image from "next/image";
import Link from "next/link";

/**
 * Hero Section komponenti - Ana banner ve CTA butonları içerir
 */
export default function Hero() {
  return (
    <section className="relative w-full h-[700px] bg-primary flex items-center overflow-hidden">
      {/* Arka Plan Görseli ve Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent z-10"></div>
        <Image
          alt="Endüstriyel asansör şaftı metalik kılavuz raylar ve yapı ile"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlZStmjov0QrUpR-TIpUkSAhGWJYLdAJcyqtd8CXBk0cq6iThAgFnCBqmvV_9hOZz5_BAaKZU_TcXdNRuWZhR-pZsIv_z_EapbyG0Y8jsVW6-P0CL1Zh3H55Jg6C-JZ8MveovlxinfCBC9EmrQKcQMAnwo7oFe-lILGRl_6y9FHvFmZvqoDswcZ_PLEwlP5MwyGhJsWY-cCiBEdDPAO9ZeDcQ6yFPnqXQt-P0-BgOR--PC6_oW9B30_5JS6Ofs_IPrwT244nyL5xo"
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
      </div>

      {/* Hero İçeriği */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-accent"></div>
            <span className="text-accent text-sm font-black uppercase tracking-[0.3em]">
              Endüstriyel Mükemmellik
            </span>
          </div>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] uppercase italic">
            Hareketi Güvenle Yeniliyoruz
            <br />
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-medium leading-relaxed max-w-xl border-l-4 border-accent pl-6">
            Asansör, yürüyen merdiven, yedek parça ve modernizasyon çözümlerinde mühendislik odaklı yaklaşım.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="h-14 px-10 bg-accent hover:bg-[#d97b20] text-white text-sm font-black uppercase tracking-widest transition-all">
              <Link href="/iletisim">Teklif Al</Link>
            </button>
            <button className="h-14 px-10 bg-transparent hover:bg-white/10 text-white border-2 border-white text-sm font-black uppercase tracking-widest transition-colors">
              <Link href="/hizmetler">Hizmetleri İncele</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
