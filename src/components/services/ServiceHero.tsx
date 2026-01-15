import Image from "next/image";

/**
 * ServiceHero komponenti - Hizmet detay sayfası hero bölümü
 */
interface ServiceHeroProps {
  badge?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText?: string;
}

export default function ServiceHero({
  badge,
  title,
  description,
  image,
  imageAlt,
  ctaText = "Teklif Al",
}: ServiceHeroProps) {
  return (
    <section className="relative w-full h-[600px] bg-primary flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image alt={imageAlt} src={image} fill className="object-cover opacity-60 grayscale" priority />
      </div>
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-6 items-center">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/40 backdrop-blur-sm mb-2">
              <span className="w-2 h-2 bg-accent animate-pulse"></span>
              <span className="text-accent text-xs font-bold uppercase tracking-widest">{badge}</span>
            </div>
          )}
          <h1 className="text-white text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light font-display max-w-2xl leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-accent hover:bg-[#d97b20] text-white font-bold transition-colors shadow-lg">
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
