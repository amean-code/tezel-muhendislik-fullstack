/**
 * ProductsHeader komponenti - Ürünler sayfası başlık ve sıralama
 */
interface ProductsHeaderProps {
  totalProducts?: number;
}

export default function ProductsHeader({ totalProducts = 0 }: ProductsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-200">
      <h1 className="text-3xl font-bold text-primary">Asansör Bileşenleri</h1>
      <div className="mt-4 sm:mt-0 flex items-center gap-3">
        <span className="text-sm text-gray-500">{totalProducts} sonuç gösteriliyor</span>
        <div className="relative">
          <select className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary focus:border-primary block w-full p-2.5 pr-8">
            <option value="recommended" defaultValue="recommended">
              Sıralama: Önerilen
            </option>
            <option value="newest">En Yeni</option>
            <option value="name-asc">İsim (A-Z)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
