import Image from "next/image";

/**
 * EscalatorProcess komponenti - Teknik yaklaşım süreç adımları
 */
export default function EscalatorProcess() {
  const steps = [
    {
      number: "1",
      title: "Ön Keşif",
      description: "Mevcut durumun teknik analizi ve ihtiyaçların belirlenmesi.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC88e9kx3UvlNAJ7dKmDbvY6r6yj52IhZLYIyJIY4qcwLd63ulwPXZaAmtIjZTYW7Rz7z8agvsv7woq8vT41n6BvnK3BEUyYTqFz4jsPEM4VCyWa0DjngTlkwSCBxJ0Ojo332bylG8aoSRXvacBW-GiDj6uRmdyFSGfXM-xwzaxygrSlaP1JnqT_HX9FBsUM_4e4Ggjuj1jVfH9cRw136KiQvZzY29yubftgG1iJeOA9ZECHlYqhYzpv0LZ2uJHcc2Q92xF1O2Twes",
      imageAlt: "Ön keşif teknik şema",
    },
    {
      number: "2",
      title: "Mühendislik Planlaması",
      description: "Detaylı proje çizimi, malzeme seçimi ve iş planı oluşturma.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXrQGKWpP8u3159_vEhbG67i02ecNSiJ9rPqmWmKHCs8pHmIxCSmUvBgqWnXmlsY76z55ZfeGFezMa6cupkaSR8XqI6pgZniJgsLdJ84GDJvXOwtxHoekSRZ3hCPEKOPK2IbYLS2M1wYNtu1aD5vl4fVxxbW03XpI9OdR61DGC8mXvLq95BsSCJ7HiqckYVwAPe1hBvmKbBlgZ6Q7JMwxm0J_iXamefRDFgN8NZ6O5Bbip5wVhhyyzMAp6kTR-W366LFo04JSLxmY",
      imageAlt: "Mühendislik planlaması blueprint",
    },
    {
      number: "3",
      title: "Güvenlik Öncelikli Uygulama",
      description: "İş sağlığı ve güvenliği standartlarında titiz montaj süreci.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyQyCyo3F3sNgl4ecuZxf8xWp1tz7hm0zTpbTVlkGBQCeWVjXvNhldZWeCun5Ag_P9phcGCWrJFW_qEgA9THtH98z2Bpyiv5gAMG02P1H8bFr56CV0-scsdHXqpPQ222PQxMkewW2CkrbOYY1mgmCDhMcuPnPFpq3Ib34vslNBogGSKNX6zsokBDMmfu7erq30v-OUuDhWbn43K0WZNk98KGrl7PsuD6CglnIk9m9WaaQcgFRGvMXH6HS2byw92vI1pfrbct_J9lk",
      imageAlt: "Güvenlik öncelikli uygulama",
    },
    {
      number: "4",
      title: "Test / Devreye Alma",
      description: "Yük testleri, sensör kontrolleri ve sistemin aktif edilmesi.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCMt39GBsPd_bAFk-grf8uyw8wSae1zAuSzM5504kfrpmjt1HHz0QQCYwdveqYcGGH6okb7QY-VD3HWg76HVL-bfvDPdvQz4cyp2CSAan5Ea_C0p_maYPnj87lOMr9MqOf4OLUWpUAEEbzCqu6Ir5oiI8Uv6uc4rNEyBcRd_75Y34PUthyW5ZAMTwV-P-R1rhT43PEmCfAiBS157WE3F65dRj4sI-OhWjhGsdXZ-kOOXhmWyqutkSJ-H9nhN9N_zmRmun-0mtvix0U",
      imageAlt: "Test ve devreye alma",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
            Süreç Yönetimi
          </h2>
          <h3 className="text-primary text-3xl font-display font-bold tracking-tight">
            Teknik Yaklaşımımız
          </h3>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded border border-gray-100 shadow-lg flex flex-col items-center text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none">
                  <Image
                    alt={step.imageAlt}
                    src={step.image}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="size-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 ring-4 ring-white">
                    {step.number}
                  </div>
                  <h4 className="font-display font-bold text-primary text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
