import Image from "next/image";

/**
 * ServicesHero komponenti - Hizmetler sayfası hero bölümü
 */
export default function ServicesHero() {
  return (
    <section className="relative w-full h-[500px] bg-primary flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          alt="Endüstriyel asansör motor aksamı ve kontrol paneli detayları"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-4 items-center">
          <h1 className="text-white text-5xl md:text-6xl font-display font-bold tracking-tight">
            Hizmetlerimiz
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light font-display max-w-2xl leading-relaxed">
            Yüksek mühendislik standartlarında asansör ve yürüyen merdiven çözümleri. Güvenlik,
            verimlilik ve sürdürülebilirlik odaklı teknik hizmetler.
          </p>
          <div className="mt-4 w-16 h-1 bg-accent"></div>
        </div>
      </div>
    </section>
  );
}
