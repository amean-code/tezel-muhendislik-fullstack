import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/products/Breadcrumbs";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import TechnicalSpecs from "@/components/products/TechnicalSpecs";
import RelatedProducts from "@/components/products/RelatedProducts";
import StickyCTA from "@/components/products/StickyCTA";
import { getProductBySlug, getRelatedProducts } from "@/data/products";

/**
 * Ürün detay sayfası için metadata
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

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
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

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
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-6 pb-20">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Ürün Hero Bölümü */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          {/* Sol Kolon: Galeri */}
          <div className="lg:col-span-7">
            <ProductGallery
              mainImage={product.image}
              mainImageAlt={product.imageAlt}
              thumbnails={product.thumbnails}
              moreCount={product.thumbnails.length > 3 ? product.thumbnails.length - 3 : 0}
            />
          </div>

          {/* Sağ Kolon: Bilgiler */}
          <div className="lg:col-span-5">
            <ProductInfo
              badge={product.badge}
              title={product.title}
              description={product.description}
              features={product.features}
            />
          </div>
        </div>

        {/* Teknik Özellikler */}
        <TechnicalSpecs specs={product.specs} />

        {/* Benzer Ürünler */}
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
      </div>

      {/* Mobil Sticky CTA */}
      <StickyCTA model={product.title} />
    </>
  );
}
