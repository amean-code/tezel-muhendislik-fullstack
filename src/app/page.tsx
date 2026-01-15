import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CorporatePortfolio from "@/components/CorporatePortfolio";
import ProductCategories from "@/components/ProductCategories";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Services from "@/components/Services";

/**
 * Ana sayfa komponenti - Tüm bölümleri içerir
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <CorporatePortfolio />
      <ProductCategories />
      <Partners />
      <CTA />
    </>
  );
}
