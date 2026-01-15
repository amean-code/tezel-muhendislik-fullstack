import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/products/Breadcrumbs";
import ProductGallery from "@/components/products/ProductGallery";
import ProductPageHeading from "@/components/products/ProductPageHeading";
import ProductEngineeringAdvantages from "@/components/products/ProductEngineeringAdvantages";
import ProductSpecsComparison from "@/components/products/ProductSpecsComparison";
import RelatedProducts from "@/components/products/RelatedProducts";
import StickyCTA from "@/components/products/StickyCTA";
import { getProductBySlug, getRelatedProducts } from "@/data/products";

/**
 * Ürün detay sayfası için metadata
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Ürün Bulunamadı - Tezel Mühendislik",
    };
  }

  return {
    title: `${product.title} - Tezel Mühendislik`,
    description: product.description,
    keywords: `${product.title}, ${product.category}, asansör bileşenleri, Tezel Mühendislik`,
    openGraph: {
      title: `${product.title} - Tezel Mühendislik`,
      description: product.description,
      type: "website",
      locale: "tr_TR",
    },
  };
}

/**
 * Ürün detay sayfası
 */
export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 4).map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    image: p.image,
    imageAlt: p.imageAlt,
    href: `/urunler/${p.slug}`,
  }));

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: product.category, href: `/urunler?kategori=${product.category.toLowerCase()}` },
    { label: product.title },
  ];

  return (
    <>
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-6">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Heading */}
        <ProductPageHeading title={product.title} description={product.description} />

        {/* Product Visuals & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          {/* Gallery (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <ProductGallery
              mainImage={product.image}
              mainImageAlt={product.imageAlt}
              thumbnails={product.thumbnails}
              moreCount={product.thumbnails.length > 3 ? product.thumbnails.length - 3 : 0}
            />
          </div>

          {/* Engineering Context (Right) */}
          {product.engineeringAdvantages && (
            <div className="lg:col-span-5 flex flex-col">
              <ProductEngineeringAdvantages
                title={product.engineeringAdvantages.title}
                description={product.engineeringAdvantages.description}
                advantages={product.engineeringAdvantages.advantages}
              />
            </div>
          )}
        </div>

        {/* Technical Specification Table */}
        {product.comparisonSpecs && (
          <ProductSpecsComparison
            title={product.comparisonSpecs.title}
            version1Label={product.comparisonSpecs.version1Label}
            version2Label={product.comparisonSpecs.version2Label}
            specs={product.comparisonSpecs.specs}
            note={product.comparisonSpecs.note}
          />
        )}

        {/* Benzer Ürünler */}
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
      </div>

      {/* Mobil Sticky CTA */}
      <StickyCTA model={product.title} />
    </>
  );
}
