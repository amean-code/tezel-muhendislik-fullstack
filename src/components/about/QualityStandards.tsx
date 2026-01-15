/**
 * QualityStandards komponenti - Kalite standartları bölümü
 */
interface Standard {
  name: string;
  code: string;
}

export default function QualityStandards() {
  const standards: Standard[] = [
    { name: "CE", code: "2014/33/EU" },
    { name: "TSE", code: "TS EN 81-20" },
    { name: "EN 81", code: "Safety Standards" },
    { name: "ISO", code: "9001:2015" },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-10">
          Uluslararası Kalite Standartlarımız
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60 grayscale">
          {standards.map((standard, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-gray-500 tracking-tighter">
                {standard.name}
              </span>
              <span className="text-[10px] text-gray-400 font-bold mt-1">{standard.code}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
