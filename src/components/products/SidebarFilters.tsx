/**
 * SidebarFilters komponenti - Ürün filtreleme sidebar'ı
 */
export default function SidebarFilters() {
  return (
    <aside className="hidden w-64 shrink-0 lg:block sticky top-24">
      <div className="mb-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex text-sm text-gray-500 mb-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <a className="inline-flex items-center hover:text-primary" href="/">
                Ana Sayfa
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-base mx-1">chevron_right</span>
                <a className="ml-1 hover:text-primary" href="/urunler">
                  Ürünler
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-base mx-1">chevron_right</span>
                <span className="ml-1 font-medium text-primary">Bileşenler</span>
              </div>
            </li>
          </ol>
        </nav>

        <h2 className="text-2xl font-bold text-primary mb-2">Filtreler</h2>
        <p className="text-sm text-gray-500">Ürün özelliklerine göre daraltın</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Filtre Grubu 1: Bileşen Tipi */}
        <details className="group border-b border-gray-200 pb-4" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-gray-900">
            <span>Bileşen Tipi</span>
            <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
          </summary>
          <div className="pt-2 flex flex-col gap-2">
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">Motorlar (Traction)</span>
            </label>
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">Kumanda Panoları</span>
            </label>
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">Kapı Sistemleri</span>
            </label>
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">Güvenlik Komponentleri</span>
            </label>
          </div>
        </details>

        {/* Filtre Grubu 2: Yük Kapasitesi */}
        <details className="group border-b border-gray-200 pb-4" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-gray-900">
            <span>Yük Kapasitesi (kg)</span>
            <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
          </summary>
          <div className="pt-2 flex flex-col gap-2">
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">320 kg - 450 kg</span>
            </label>
            <label className="flex items-center gap-3">
              <input defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">630 kg - 800 kg</span>
            </label>
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">1000 kg +</span>
            </label>
          </div>
        </details>

        {/* Filtre Grubu 3: Hız */}
        <details className="group border-b border-gray-200 pb-4">
          <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-gray-900">
            <span>Hız (m/s)</span>
            <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
          </summary>
          <div className="pt-2 flex flex-col gap-2">
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">1.0 m/s</span>
            </label>
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">1.6 m/s</span>
            </label>
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">2.5 m/s +</span>
            </label>
          </div>
        </details>

        {/* Filtre Grubu 4: Materyal */}
        <details className="group border-b border-gray-200 pb-4">
          <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-gray-900">
            <span>Materyal</span>
            <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
          </summary>
          <div className="pt-2 flex flex-col gap-2">
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">Paslanmaz Çelik</span>
            </label>
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">Alüminyum</span>
            </label>
            <label className="flex items-center gap-3">
              <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              <span className="text-sm text-gray-600">Dökme Demir</span>
            </label>
          </div>
        </details>
      </div>
    </aside>
  );
}
