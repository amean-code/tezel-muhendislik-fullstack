import { TechnicalTerm } from "@/data/technicalTerms";

/**
 * TermCard komponenti - Tek bir teknik terim kartını gösterir
 */
export default function TermCard({ term }: { term: TechnicalTerm }) {
  /**
   * Kategori renkleri
   */
  const categoryColors: Record<string, { bg: string; text: string }> = {
    "Motor Teknolojisi": { bg: "bg-blue-50", text: "text-blue-600" },
    Güvenlik: { bg: "bg-green-50", text: "text-green-600" },
    "Kritik Güvenlik": { bg: "bg-red-50", text: "text-red-600" },
    "Mekanik Aksam": { bg: "bg-purple-50", text: "text-purple-600" },
    "Kontrol Sistemleri": { bg: "bg-orange-50", text: "text-orange-600" },
    "Elektrik Sistemleri": { bg: "bg-yellow-50", text: "text-yellow-600" },
    Standartlar: { bg: "bg-gray-50", text: "text-gray-600" },
    Bakım: { bg: "bg-indigo-50", text: "text-indigo-600" },
  };

  const colors = categoryColors[term.category] || {
    bg: "bg-gray-50",
    text: "text-gray-600",
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all hover:border-primary/30">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <h3 className="text-xl font-bold text-primary group-hover:text-blue-700 transition-colors">
            {term.term}
          </h3>
          <span
            className={`inline-block mt-2 text-xs font-semibold ${colors.text} ${colors.bg} px-2 py-0.5 rounded`}
          >
            {term.category}
          </span>
        </div>
        <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
          <p className="text-gray-700 leading-relaxed mb-3">{term.description}</p>
          {term.relatedStandard && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span>İlgili Standart: {term.relatedStandard}</span>
            </div>
          )}
          {term.isMandatory && (
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>Zorunlu Güvenlik Bileşeni</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
