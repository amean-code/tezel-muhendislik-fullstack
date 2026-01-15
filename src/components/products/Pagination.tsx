/**
 * Pagination komponenti - Sayfalama navigasyonu
 */
interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
}

export default function Pagination({ currentPage = 1, totalPages = 3 }: PaginationProps) {
  return (
    <div className="mt-8 flex items-center justify-center border-t border-gray-200 pt-8">
      <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
        <a
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          href="#"
        >
          <span className="sr-only">Önceki</span>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
        </a>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <a
            key={page}
            aria-current={page === currentPage ? "page" : undefined}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              page === currentPage
                ? "z-10 bg-primary text-white focus-visible:outline-primary"
                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
            }`}
            href={`/urunler?sayfa=${page}`}
          >
            {page}
          </a>
        ))}
        <a
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          href="#"
        >
          <span className="sr-only">Sonraki</span>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </a>
      </nav>
    </div>
  );
}
