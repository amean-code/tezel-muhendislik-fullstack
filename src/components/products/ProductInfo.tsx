/**
 * ProductInfo komponenti - Ürün bilgileri ve özellikler
 */
interface ProductInfoProps {
  badge?: string;
  title: string;
  description: string;
  features: string[];
}

export default function ProductInfo({ badge, title, description, features }: ProductInfoProps) {
  return (
    <div className="flex flex-col justify-center">
      <div className="mb-6">
        {badge && (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 mb-4">
            {badge}
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
          {title}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>

        {/* Özellikler */}
        <div className="flex flex-col gap-3 p-4 bg-white rounded border border-gray-200 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5">check_circle</span>
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Butonlar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex-1 flex items-center justify-center gap-2 h-12 px-6 rounded bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 font-bold transition-all">
          <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
          <span>Kataloğu İndir</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 h-12 px-6 rounded bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 font-bold transition-all">
          <span>Teklif Talep Et</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
      <p className="mt-4 text-xs text-gray-500 text-center sm:text-left">
        *Teknik çizimler ve 3D modeller için satış departmanı ile iletişime geçiniz.
      </p>
    </div>
  );
}
