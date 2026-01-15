/**
 * MaintenanceProcess komponenti - Bakım süreci adımları
 */
export default function MaintenanceProcess() {
  const steps = [
    {
      icon: "analytics",
      title: "1. Analiz",
      description: "Saha incelemesi ile mevcut durumun tespiti ve performans ölçümü.",
    },
    {
      icon: "description",
      title: "2. Raporlama",
      description: "Eksiklerin listelenmesi ve mühendislik raporunun oluşturulması.",
    },
    {
      icon: "handyman",
      title: "3. Müdahale",
      description: "Uzman ekiplerce onarım, parça değişimi veya bakım uygulaması.",
    },
    {
      icon: "verified",
      title: "4. Test",
      description: "Güvenlik fonksiyonlarının doğrulanması ve sistemin devreye alınması.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
            Süreç Yönetimi
          </h2>
          <h2 className="text-3xl font-display font-bold text-primary">Bakım Sürecimiz</h2>
          <p className="text-gray-500 mt-3">Sistemlerinizin sürekliliği için izlediğimiz 4 adımlı prosedür.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-300 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div
                  className={`w-20 h-20 bg-white border-4 border-white ring-2 ${
                    index === 0 ? "ring-accent" : "ring-gray-300 group-hover:ring-accent"
                  } transition-all rounded-full flex items-center justify-center mb-6 shadow-lg z-10`}
                >
                  <span className="material-symbols-outlined text-3xl text-primary">
                    {step.icon}
                  </span>
                </div>
                <h4 className="text-lg font-display font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
