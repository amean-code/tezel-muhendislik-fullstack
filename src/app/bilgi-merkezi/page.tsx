import type { Metadata } from "next";
import { redirect } from "next/navigation";
import KnowledgeHero from "@/components/knowledge/KnowledgeHero";
import BlogGrid from "@/components/knowledge/BlogGrid";
import KnowledgeSidebar from "@/components/knowledge/KnowledgeSidebar";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
 * Şu anda erişilebilir değil, ana sayfaya yönlendiriyor
 */
export default function KnowledgeCenterPage() {
  // Sayfa henüz aktif değil, ana sayfaya yönlendir
  redirect("/");
  return (
    <>
      <AnimatedSection animationType="fadeIn" delay={0}>
        <KnowledgeHero />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={100}>
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              <AnimatedSection animationType="fadeInUp" delay={200}>
                <BlogGrid />
              </AnimatedSection>
              <AnimatedSection animationType="slideInRight" delay={300}>
                <KnowledgeSidebar />
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
