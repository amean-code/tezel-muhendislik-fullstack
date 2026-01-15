import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teknik Sözlük - Tezel Mühendislik",
  description:
    "Asansör ve yürüyen merdiven sektöründe kullanılan teknik terimler, standart tanımları ve mühendislik jargonlarına dair kapsamlı referans kaynağı.",
  keywords:
    "teknik sözlük, asansör terimleri, mühendislik terimleri, teknik terimler, EN 81-20, asansör standartları",
  openGraph: {
    title: "Teknik Sözlük - Tezel Mühendislik",
    description:
      "Asansör ve yürüyen merdiven sektöründe kullanılan teknik terimler ve mühendislik jargonları.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function TechnicalDictionaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
