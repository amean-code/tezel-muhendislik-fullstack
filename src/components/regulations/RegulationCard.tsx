import Link from "next/link";
import { Regulation } from "./RegulationsList";

interface RegulationCardProps {
  regulation: Regulation;
}

/**
 * RegulationCard komponenti - Tek bir yönetmelik kartını gösterir
 */
export default function RegulationCard({ regulation }: RegulationCardProps) {
  const isArchived = regulation.status === "archived";

  /**
   * Durum badge rengini belirleme fonksiyonu
   */
  const getStatusBadgeClass = () => {
    if (regulation.status === "active") {
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    }
    return "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300";
  };

  /**
   * Tip badge rengini belirleme fonksiyonu
   */
  const getTypeBadgeClass = () => {
    if (regulation.type === "official") {
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    }
    return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
  };

  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group relative overflow-hidden ${
        isArchived ? "opacity-80 group-hover:opacity-100 transition-opacity" : ""
      }`}
    >
      {/* Durum çizgisi */}
      <div className={`absolute top-0 left-0 w-1 h-full ${regulation.borderColor}`}></div>

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* İkon */}
        <div className="flex-shrink-0 bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-3xl">{regulation.icon}</span>
        </div>

        {/* İçerik */}
        <div className="flex-1 min-w-0">
          {/* Badge'ler */}
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getStatusBadgeClass()}`}>
              {regulation.statusLabel}
            </span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getTypeBadgeClass()}`}>
              {regulation.typeLabel}
            </span>
          </div>

          {/* Başlık */}
          <h3 className="text-lg font-display font-bold text-primary group-hover:text-blue-700 transition-colors mb-2">
            {regulation.title}
          </h3>

          {/* Açıklama */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{regulation.description}</p>

          {/* Tarih ve Numara Bilgileri */}
          <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                {isArchived ? "event_busy" : "calendar_month"}
              </span>
              {isArchived ? "İptal" : "Yürürlük"}: {regulation.effectiveDate}
            </span>
            {regulation.documentNumber && (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">tag</span>
                Sayı: {regulation.documentNumber}
              </span>
            )}
            {regulation.revisionDate && (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">update</span>
                Revizyon: {regulation.revisionDate}
              </span>
            )}
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex-shrink-0 w-full md:w-auto flex flex-row md:flex-col gap-2 mt-2 md:mt-0">
          <button
            className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-colors shadow-sm ${
              isArchived
                ? "bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200"
                : "bg-primary text-white hover:bg-[#152c5c]"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            PDF İndir
          </button>
          {!isArchived && (
            <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              Önizle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
