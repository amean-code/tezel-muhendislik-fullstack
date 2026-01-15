import type { Metadata } from "next";
import SidebarFilters from "@/components/products/SidebarFilters";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductGrid from "@/components/products/ProductGrid";
import Pagination from "@/components/products/Pagination";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Asansör Bileşenleri - Tezel Mühendislik",
  description: "Yüksek kaliteli asansör bileşenleri ve yedek parçalar. Motorlar, kumanda panoları, kapı sistemleri ve güvenlik komponentleri. ISO standartlarında üretim.",
  keywords: "asansör bileşenleri, asansör motoru, kumanda panosu, kapı sistemi, güvenlik komponentleri, yedek parça, Tezel Mühendislik",
  openGraph: {
    title: "Asansör Bileşenleri - Tezel Mühendislik",
    description: "Yüksek kaliteli asansör bileşenleri ve yedek parçalar.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Ürünler sayfası - Asansör bileşenleri kataloğu
 */
export default function ProductsPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-1 items-start gap-8 px-4 sm:px-6 lg:px-8 py-8">
      {/* Sidebar Filtreler */}
      <SidebarFilters />

      {/* Ana İçerik */}
      <div className="flex-1">
        <ProductsHeader totalProducts={products.length} />
        <ProductGrid />
        <Pagination />
      </div>
    </div>
  );
}
