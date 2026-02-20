import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFloatingButtons from "@/components/ContactFloatingButtons";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tezel Mühendislik - Asansör & Yürüyen Merdiven Sistemleri",
  description: "Modern altyapı için güvenilir dikey ulaşım çözümleri. Dünya standartlarında asansör ve yürüyen merdiven sistemleri tasarlıyor, kuruyor ve bakımını yapıyoruz.",
  keywords: "asansör, yürüyen merdiven, asansör bakımı, asansör modernizasyonu, Tezel Mühendislik, dikey ulaşım sistemleri",
  authors: [{ name: "Tezel Mühendislik" }],
  icons: {
    icon: "/tezel_logo_nobg.png",
    shortcut: "/tezel_logo_nobg.png",
    apple: "/tezel_logo_nobg.png",
  },
  openGraph: {
    title: "Tezel Mühendislik - Asansör & Yürüyen Merdiven Sistemleri",
    description: "Modern altyapı için güvenilir dikey ulaşım çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/tezel_logo_nobg.png" type="image/png" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background-light text-primary font-display overflow-x-hidden flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow pb-20 page-content">{children}</main>
        <Footer />
        <ContactFloatingButtons />
      </body>
    </html>
  );
}
