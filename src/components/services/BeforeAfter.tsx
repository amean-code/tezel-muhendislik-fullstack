import Image from "next/image";

/**
 * BeforeAfter komponenti - Önce/Sonra karşılaştırması
 */
interface BeforeAfterItem {
  label: string;
  labelColor: "red" | "green";
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface BeforeAfterProps {
  title: string;
  subtitle?: string;
  items: BeforeAfterItem[];
}

export default function BeforeAfter({ title, subtitle, items }: BeforeAfterProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">{title}</h2>
          {subtitle && <p className="text-gray-500">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="group relative overflow-hidden shadow-lg">
              <div
                className={`absolute top-4 left-4 z-20 ${
                  item.labelColor === "red" ? "bg-red-600" : "bg-green-600"
                } text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider shadow-md`}
              >
                {item.label}
              </div>
              <div className="relative h-[400px]">
                <Image
                  alt={item.imageAlt}
                  src={item.image}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                    item.labelColor === "red" ? "grayscale brightness-90" : ""
                  }`}
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  item.labelColor === "red" ? "from-black/80" : "from-primary/90"
                } to-transparent opacity-100 flex items-end p-8`}
              >
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
