/**
 * Breadcrumbs komponenti - Sayfa navigasyon breadcrumb'ları
 */
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          )}
          {item.href ? (
            <a className="hover:text-primary transition-colors" href={item.href}>
              {item.label}
            </a>
          ) : (
            <span className="text-primary font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
