/**
 * Partners komponenti - İş ortakları ve referanslar bölümü
 */
interface Partner {
  name: string;
  logo?: string;
}

export default function Partners() {
  const partners: Partner[] = [
    { name: "PARTNER 01" },
    { name: "PARTNER 02" },
    { name: "PARTNER 03" },
    { name: "PARTNER 04" },
    { name: "PARTNER 05" },
    { name: "PARTNER 06" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary text-2xl font-black uppercase tracking-widest italic">
            İş Ortaklarımız ve Referanslar
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 opacity-40 grayscale">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 border border-gray-200"
            >
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className="max-w-full h-auto" />
              ) : (
                <span className="text-xl font-black uppercase tracking-tighter">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
