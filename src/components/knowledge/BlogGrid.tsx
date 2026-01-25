"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { blogs, categoryLabels, type Blog, type BlogCategory } from "@/data/blogs";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * BlogGrid komponenti - Blog makalelerini grid formatında gösterir
 */
export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("all");

  /**
   * Seçili kategoriye göre blogları filtreler
   */
  const filteredBlogs = blogs.filter(
    (blog) => selectedCategory === "all" || blog.category === selectedCategory
  );

  /**
   * Öne çıkan blogu bulur
   */
  const featuredBlog = blogs.find((blog) => blog.featured);

  /**
   * Öne çıkan blog hariç diğer blogları döndürür
   */
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  return (
    <div className="flex-1 min-w-0">
      {/* Öne Çıkan Blog */}
          {featuredBlog && selectedCategory === "all" && (
          <div className="mb-12 group cursor-pointer">
            <Link href={`/bilgi-merkezi/${featuredBlog.slug}`}>
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 md:hidden"></div>
                    <Image
                      src={featuredBlog.image}
                      alt={featuredBlog.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 z-20 md:hidden">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary text-white mb-2">
                        Öne Çıkan
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary uppercase tracking-wider">
                        Öne Çıkan
                      </span>
                      <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {featuredBlog.date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4 leading-tight group-hover:text-gray-700 transition-colors">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {featuredBlog.description}
                    </p>
                    <div className="mt-auto">
                      <span className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                        Okumaya Devam Et{" "}
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Kategori Filtreleri */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {(Object.keys(categoryLabels) as BlogCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-sm ring-1 ring-primary"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {regularBlogs.map((blog, index) => (
            <AnimatedCard key={blog.id} index={index}>
              <BlogCard blog={blog} />
            </AnimatedCard>
          ))}
        </div>

        {/* Sayfalama */}
        {regularBlogs.length > 0 && (
          <div className="mt-12 flex justify-center">
            <nav aria-label="Pagination" className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900 hover:bg-gray-50">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900 hover:bg-gray-50">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </nav>
          </div>
        )}
    </div>
  );
}

/**
 * BlogCard komponenti - Tek bir blog kartını gösterir
 */
function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="flex flex-col h-full bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
      <Link href={`/bilgi-merkezi/${blog.slug}`}>
        <div className="h-48 overflow-hidden relative">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-700">
            {categoryLabels[blog.category]}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-display font-bold text-primary mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
            {blog.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
            {blog.description}
          </p>
          <span className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
            İncele <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
