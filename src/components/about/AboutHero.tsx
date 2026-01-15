import Image from "next/image";

/**
 * AboutHero komponenti - Hakkımızda sayfası hero bölümü
 */
export default function AboutHero() {
  return (
    <section className="relative w-full h-[500px] flex items-center bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/60 z-10"></div>
        <Image
          alt="Asansör şaftı iç görünümü"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlZStmjov0QrUpR-TIpUkSAhGWJYLdAJcyqtd8CXBk0cq6iThAgFnCBqmvV_9hOZz5_BAaKZU_TcXdNRuWZhR-pZsIv_z_EapbyG0Y8jsVW6-P0CL1Zh3H55Jg6C-JZ8MveovlxinfCBC9EmrQKcQMAnwo7oFe-lILGRl_6y9FHvFmZvqoDswcZ_PLEwlP5MwyGhJsWY-cCiBEdDPAO9ZeDcQ6yFPnqXQt-P0-BgOR--PC6_oW9B30_5JS6Ofs_IPrwT244nyL5xo"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Tezel Mühendislik: Güvenilir Asansör ve Dikey Taşıma Sistemleri Çözümleri
          </h1>
          <p className="text-gray-200 text-lg font-light leading-relaxed border-l-4 border-accent pl-6">
            Çeyrek asırlık mühendislik tecrübemizle, binaların kalbinde güvenliği ve verimliliği yeniden
            tanımlıyoruz. Uluslararası standartlarda, teknik hassasiyetle tasarlanmış dikey taşıma çözümleri
            sunuyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
