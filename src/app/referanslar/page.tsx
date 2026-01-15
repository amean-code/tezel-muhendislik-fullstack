import type { Metadata } from "next";
import ReferencesPageClient from "./ReferencesPageClient";

export const metadata: Metadata = {
  title: "Referanslar ve Projeler - Tezel Mühendislik",
  description:
    "Mühendislik tecrübemiz ve teknik yetkinliğimizle hayata geçirdiğimiz asansör ve yürüyen merdiven çözümleri.",
  keywords:
    "referanslar, projeler, asansör projeleri, yürüyen merdiven, modernizasyon, Tezel Mühendislik, portföy",
  openGraph: {
    title: "Referanslar ve Projeler - Tezel Mühendislik",
    description: "Mühendislik tecrübemiz ve teknik yetkinliğimizle hayata geçirdiğimiz çözümler.",
    type: "website",
    locale: "tr_TR",
  },
};

/**
 * Referanslar sayfası - Proje ve referans portföyü
 */
export default function ReferencesPage() {
  return <ReferencesPageClient />;
}
