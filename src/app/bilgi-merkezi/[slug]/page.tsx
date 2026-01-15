import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/products/Breadcrumbs";
import TableOfContents from "@/components/knowledge/TableOfContents";
import ShareButton from "@/components/knowledge/ShareButton";
import { getBlogBySlug, getRelatedBlogs, categoryLabels, type BlogCategory } from "@/data/blogs";

/**
 * Blog detay sayfası için metadata
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Makale Bulunamadı - Tezel Mühendislik",
    };
  }

  return {
    title: `${blog.title} - Tezel Mühendislik`,
    description: blog.description,
    keywords: blog.tags?.join(", ") || "",
    openGraph: {
      title: `${blog.title} - Tezel Mühendislik`,
      description: blog.description,
      type: "article",
      locale: "tr_TR",
      images: [
        {
          url: blog.image,
          alt: blog.imageAlt,
        },
      ],
    },
  };
}

/**
 * HTML içeriğindeki başlıklara ID ekler
 */
function addIdsToHeadings(htmlContent: string): string {
  if (!htmlContent) return htmlContent;

  return htmlContent.replace(/<h([23])[^>]*>(.*?)<\/h[23]>/gi, (match, level, content) => {
    const text = content.replace(/<[^>]*>/g, "").trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return `<h${level} id="${id}">${content}</h${level}>`;
  });
}

/**
 * Blog detay sayfası - Template tasarımına göre güncellenmiş
 */
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(blog.id, blog.category, 3);

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Bilgi Merkezi", href: "/bilgi-merkezi" },
    { label: categoryLabels[blog.category], href: `/bilgi-merkezi?kategori=${blog.category}` },
    { label: blog.title },
  ];

  // İçerikteki başlıklara ID ekle
  const contentWithIds = blog.content ? addIdsToHeadings(blog.content) : null;

  return (
    <>
      {/* Breadcrumb & Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
          {/* Breadcrumb */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Article Header */}
          <div className="max-w-4xl">
            <h1 className="text-3xl lg:text-5xl font-black text-primary leading-tight tracking-tight mb-6">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-secondary border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">engineering</span>
                <span className="font-medium text-gray-900">
                  {blog.author || "Mühendislik Departmanı"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                <span>{blog.date}</span>
              </div>
              {blog.readingTime && (
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                  <span>{blog.readingTime} Dk Okuma</span>
                </div>
              )}
              <div className="flex items-center gap-2 ml-auto">
                <span className="px-2 py-1 bg-blue-50 text-primary text-xs font-bold rounded uppercase tracking-wider">
                  Teknik Makale
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded uppercase tracking-wider">
                  {categoryLabels[blog.category]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Main Article Content */}
          <article className="w-full lg:w-2/3 article-content">
            {/* Lead Paragraph */}
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-8 border-l-4 border-primary pl-4">
              {blog.description}
            </p>

            {/* Main Image */}
            <div className="rounded-lg overflow-hidden mb-10 shadow-md">
              <div className="w-full aspect-video bg-gray-100 relative">
                <Image src={blog.image} alt={blog.imageAlt} fill className="object-cover" />
              </div>
              <div className="bg-gray-50 p-3 text-xs text-center text-secondary border-t border-gray-100">
                {blog.imageAlt}
              </div>
            </div>

            {/* Content */}
            {contentWithIds ? (
              <div
                className="article-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />
            ) : (
              <div className="article-content">
                <h2 id="giriş-ve-standartlara-genel-bakış">1. Giriş ve Standartlara Genel Bakış</h2>
                <p>
                  Bu teknik makale, asansör sistemlerinde enerji verimliliği konusunu detaylı bir şekilde ele almaktadır.
                  EN 81-20 standartlarına uygun olarak tasarlanan modern asansör sistemleri, geleneksel sistemlere göre
                  %40'a varan enerji tasarrufu sağlayabilmektedir.
                </p>

                <div className="my-8 bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
                  <div className="flex gap-3 mb-2">
                    <span className="material-symbols-outlined text-primary">warning</span>
                    <h4 className="font-bold text-primary">KRİTİK TEKNİK UYARI: EN 81-20 Referansı</h4>
                  </div>
                  <p className="text-sm text-primary/80 m-0">
                    EN 81-20 standardı uyarınca; asansör sistemleri, enerji verimliliği açısından belirli kriterleri
                    karşılamalıdır. Rejeneratif sürücüler ve LED aydınlatma sistemleri bu kriterlerin önemli bir
                    parçasıdır.
                  </p>
                </div>

                <h2 id="enerji-verimliliği-teknolojileri">2. Enerji Verimliliği Teknolojileri</h2>
                <p>
                  Modern asansör sistemlerinde kullanılan enerji verimliliği teknolojileri şunları içermektedir:
                </p>
                <ul>
                  <li>Rejeneratif sürücüler (enerji geri kazanımı)</li>
                  <li>LED aydınlatma sistemleri</li>
                  <li>Akıllı bekleme modları</li>
                  <li>Yüksek verimli motorlar</li>
                </ul>

                <h2 id="sonuç-ve-öneriler">3. Sonuç ve Öneriler</h2>
                <p>
                  Tezel Mühendislik olarak, tüm projelerde enerji verimliliği standartlarına uygun sistemlerin
                  kullanılmasını şiddetle tavsiye ediyoruz. Bu hem çevresel hem de ekonomik açıdan önemli faydalar
                  sağlamaktadır.
                </p>
              </div>
            )}

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Right: Sticky Sidebar */}
          <aside className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Table of Contents Widget */}
            {contentWithIds && <TableOfContents content={contentWithIds} />}

            {/* Share CTA */}
            <ShareButton title={blog.title} description={blog.description} />

            {/* Newsletter Mini */}
            <div className="bg-primary/5 border border-primary/10 rounded p-6">
              <h4 className="font-bold text-primary mb-2">Uzmanlık Bülteni</h4>
              <p className="text-xs text-gray-600 mb-4">
                Her ay yayınlanan teknik bültenimize abone olun, standart değişikliklerinden haberdar olun.
              </p>
              <form className="flex flex-col gap-2">
                <input
                  className="w-full text-sm border-gray-300 rounded focus:ring-primary focus:border-primary px-3 py-2"
                  placeholder="E-posta adresiniz"
                  type="email"
                />
                <button
                  className="w-full py-2 bg-primary text-white text-xs font-bold rounded hover:bg-[#071d28] uppercase tracking-wide transition-colors"
                  type="submit"
                >
                  Abone Ol
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedBlogs.length > 0 && (
        <div className="bg-gray-100 border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-primary">Benzer Teknik Makaleler</h2>
              <Link
                className="text-sm font-bold text-primary flex items-center gap-1 hover:underline"
                href="/bilgi-merkezi"
              >
                Tümünü Gör <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/bilgi-merkezi/${relatedBlog.slug}`}
                  className="bg-white rounded border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-primary uppercase z-10">
                      {categoryLabels[relatedBlog.category]}
                    </div>
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-secondary mb-2">
                      {relatedBlog.date} • {relatedBlog.readingTime || 5} Dk Okuma
                    </div>
                    <h3 className="font-bold text-lg text-primary mb-2 leading-tight group-hover:text-secondary transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedBlog.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
