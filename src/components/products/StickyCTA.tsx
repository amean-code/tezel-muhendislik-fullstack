/**
 * StickyCTA komponenti - Mobil için sabit alt CTA bar
 */
interface StickyCTAProps {
  model: string;
}

export default function StickyCTA({ model }: StickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-xl z-50 lg:hidden">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Model</span>
          <span className="font-bold text-sm">{model}</span>
        </div>
        <button className="flex-1 flex items-center justify-center rounded px-5 py-3 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">
          Teklif Talep Et
        </button>
      </div>
    </div>
  );
}
