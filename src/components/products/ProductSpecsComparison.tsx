/**
 * ProductSpecsComparison komponenti - Karşılaştırmalı teknik özellikler tablosu
 */
interface ComparisonSpec {
  parameter: string;
  unit: string;
  version1: string;
  version2: string;
}

interface ProductSpecsComparisonProps {
  title: string;
  version1Label: string;
  version2Label: string;
  specs: ComparisonSpec[];
  note?: string;
}

export default function ProductSpecsComparison({
  title,
  version1Label,
  version2Label,
  specs,
  note,
}: ProductSpecsComparisonProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined">table_chart</span>
        {title}
      </h2>
      <div className="overflow-x-auto border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-6 py-4 font-bold text-sm tracking-wide uppercase">Parametre</th>
              <th className="px-6 py-4 font-bold text-sm tracking-wide uppercase">Birim</th>
              <th className="px-6 py-4 font-bold text-sm tracking-wide uppercase">{version1Label}</th>
              <th className="px-6 py-4 font-bold text-sm tracking-wide uppercase">{version2Label}</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            {specs.map((spec, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-6 py-4 font-semibold text-gray-900">{spec.parameter}</td>
                <td className="px-6 py-4 text-gray-600">{spec.unit}</td>
                <td className="px-6 py-4 text-gray-900">{spec.version1}</td>
                <td className="px-6 py-4 text-gray-900">{spec.version2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="mt-4 text-xs text-gray-500 italic">{note}</p>
      )}
    </div>
  );
}
