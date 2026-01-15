/**
 * ProcessTimeline komponenti - Teknik süreç yönetimi timeline
 */
interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export default function ProcessTimeline() {
  const steps: ProcessStep[] = [
    {
      icon: "search",
      title: "Keşif & Analiz",
      description: "Saha incelemesi, trafik analizi ve ihtiyaçların belirlenmesi.",
    },
    {
      icon: "architecture",
      title: "Teknik Planlama",
      description: "Mühendislik hesaplamaları, proje çizimi ve malzeme seçimi.",
    },
    {
      icon: "construction",
      title: "Uygulama",
      description: "Uzman ekiplerce montaj, kurulum ve sistem entegrasyonu.",
    },
    {
      icon: "verified",
      title: "Test & Devreye Alma",
      description: "Güvenlik testleri, son kontroller ve sistemin teslimi.",
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-primary">Teknik Süreç Yönetimi</h2>
          <p className="text-gray-500 mt-3">Projenizin başından sonuna kadar şeffaf ve planlı ilerleyiş.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div
                  className={`w-16 h-16 bg-white border-2 ${
                    index === 0 ? "border-accent" : "border-gray-300"
                  } flex items-center justify-center mb-6 shadow-lg group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors duration-300`}
                >
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
