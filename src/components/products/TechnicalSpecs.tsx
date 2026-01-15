/**
 * TechnicalSpecs komponenti - Teknik özellikler tablosu
 */
interface SpecRow {
  parameter: string;
  value: string;
  unit: string;
}

interface TechnicalSpecsProps {
  specs: SpecRow[];
}

export default function TechnicalSpecs({ specs }: TechnicalSpecsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20" id="specs">
      {/* Sol Sidebar */}
      <div className="lg:col-span-3">
        <div className="sticky top-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Teknik Özellikler</h2>
          <p className="text-sm text-gray-500 mb-6">
            TM-5000 serisi motorlarımızın detaylı performans verileri ve mekanik parametreleri.
            Projenize özel konfigürasyonlar için bizimle iletişime geçebilirsiniz.
          </p>
          <div className="hidden lg:block p-4 bg-blue-50 rounded border border-blue-100">
            <h4 className="font-bold text-primary text-sm mb-2">Mühendis Desteği</h4>
            <p className="text-xs text-blue-800 mb-3">
              Projeniz için doğru motoru seçmekte yardıma mı ihtiyacınız var?
            </p>
            <a className="text-xs font-bold text-primary underline" href="#iletisim">
              Mühendislerimizle görüşün -&gt;
            </a>
          </div>
        </div>
      </div>

      {/* Sağ Tablo */}
      <div className="lg:col-span-9">
        <div className="overflow-hidden rounded shadow-sm border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 text-sm font-semibold w-1/3">Parametre</th>
                <th className="p-4 text-sm font-semibold w-1/3">Değer</th>
                <th className="p-4 text-sm font-semibold w-1/3">Birim</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {specs.map((spec, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-sm font-medium text-gray-900">{spec.parameter}</td>
                  <td className="p-4 text-sm text-gray-600 font-mono">{spec.value}</td>
                  <td className="p-4 text-sm text-gray-500">{spec.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
