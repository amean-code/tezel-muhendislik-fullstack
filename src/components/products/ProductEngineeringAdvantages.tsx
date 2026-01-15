/**
 * ProductEngineeringAdvantages komponenti - Mühendislik avantajları bölümü
 */
interface AdvantageItem {
  title: string;
  description: string;
}

interface ProductEngineeringAdvantagesProps {
  title: string;
  description: string;
  advantages: AdvantageItem[];
}

export default function ProductEngineeringAdvantages({
  title,
  description,
  advantages,
}: ProductEngineeringAdvantagesProps) {
  return (
    <div className="bg-white border border-gray-200 p-8 h-full">
      <div className="flex items-center gap-2 text-primary mb-4">
        <span className="material-symbols-outlined">engineering</span>
        <span className="text-sm font-bold tracking-widest uppercase">Mühendislik Avantajları</span>
      </div>
      <h3 className="text-2xl font-bold mb-6 text-primary">{title}</h3>
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>{description}</p>
        <ul className="space-y-4">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex gap-3">
              <span className="material-symbols-outlined text-primary flex-shrink-0">check_circle</span>
              <div>
                <span className="font-bold block text-primary">{advantage.title}:</span>
                <span className="text-sm text-gray-600">{advantage.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
