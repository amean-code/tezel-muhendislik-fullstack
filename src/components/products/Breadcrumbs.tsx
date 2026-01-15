import Link from "next/link";

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
    <nav className="flex items-center gap-2 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <span className="material-symbols-outlined text-gray-600 text-xs">chevron_right</span>
          )}
          {item.href ? (
            <Link className="text-gray-600 hover:text-primary text-sm font-medium transition-colors" href={item.href}>
              {item.label}
            </Link>
          ) : (
            <span className="text-primary text-sm font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
