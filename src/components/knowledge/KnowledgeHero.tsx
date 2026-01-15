/**
 * KnowledgeHero komponenti - Bilgi Merkezi sayfası hero bölümü
 */
export default function KnowledgeHero() {
  return (
    <div className="relative flex h-[400px] w-full flex-col justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlZStmjov0QrUpR-TIpUkSAhGWJYLdAJcyqtd8CXBk0cq6iThAgFnCBqmvV_9hOZz5_BAaKZU_TcXdNRuWZhR-pZsIv_z_EapbyG0Y8jsVW6-P0CL1Zh3H55Jg6C-JZ8MveovlxinfCBC9EmrQKcQMAnwo7oFe-lILGRl_6y9FHvFmZvqoDswcZ_PLEwlP5MwyGhJsWY-cCiBEdDPAO9ZeDcQ6yFPnqXQt-P0-BgOR--PC6_oW9B30_5JS6Ofs_IPrwT244nyL5xo")',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-accent/90 mb-2">
            <span className="material-symbols-outlined text-sm">menu_book</span>
            <span className="text-xs font-bold uppercase tracking-widest font-display">
              Teknik Bilgi Merkezi
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Teknik Bilgi Merkezi<br />
            <span className="text-white/80">Mühendislik Rehberleri & Standartlar</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 font-light">
            Asansör ve yürüyen merdiven teknolojileri üzerine teknik makaleler, standartlar ve mühendislik
            rehberleri.
          </p>
        </div>
      </div>
    </div>
  );
}
