import type { Metadata } from "next";
import KnowledgeHero from "@/components/knowledge/KnowledgeHero";
import BlogGrid from "@/components/knowledge/BlogGrid";
import KnowledgeSidebar from "@/components/knowledge/KnowledgeSidebar";

export const metadata: Metadata = {
  title: "Teknik Bilgi Merkezi - Tezel Mühendislik",
  description:
    "Asansör ve yürüyen merdiven teknolojileri üzerine teknik makaleler, standartlar ve mühendislik rehberleri.",
  keywords:
    "teknik bilgi, blog, makale, asansör standartları, mühendislik rehberleri, teknik bakım, modernizasyon",
  openGraph: {
    title: "Teknik Bilgi Merkezi - Tezel Mühendislik",
    description: "Asansör ve yürüyen merdiven teknolojileri üzerine teknik makaleler ve rehberler.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Bilgi Merkezi sayfası - Teknik makaleler ve blog içerikleri
 */
export default function KnowledgeCenterPage() {
  return (
    <>
      <KnowledgeHero />
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <BlogGrid />
            <KnowledgeSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
