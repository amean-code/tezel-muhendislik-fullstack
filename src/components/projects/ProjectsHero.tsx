/**
 * ProjectsHero komponenti - Referanslar sayfası hero bölümü
 */
export default function ProjectsHero() {
  return (
    <div className="relative flex h-[400px] w-full flex-col justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxNPbuKOvftFRsFE1DZBjUMhyZeGpfFWmrV1OZBN0hOV_UrnxDB1S0bRax8xPSaCguqothQ_nOAI2--pQQIPDFkgaezHSB4pb-zl9q2SlemKL14v8OFvQUkvIPPnxiuz8DfG5nHZxPNCt1ZR9rx_skdmjVcwN-f8d-XnBmoOISVSAgeX8UInNx9vIuPNfcvoNt6ZbumOAqf3rdhamTZB8hrStZ84OpmVEaNY2Vlqp_ln5H4gwkpIJVfKujso2ZfBo3LPT56MokMm4")',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-accent/90 mb-2">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span className="text-xs font-bold uppercase tracking-widest font-display">
              Kalite ve Güven
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Referanslarımız &<br />
            <span className="text-white/80">Projelerimiz</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 font-light">
            Mühendislik tecrübemiz ve teknik yetkinliğimizle hayata geçirdiğimiz asansör ve yürüyen
            merdiven çözümleri.
          </p>
        </div>
      </div>
    </div>
  );
}
