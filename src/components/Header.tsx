"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { services } from "@/data/services";

/**
 * Header komponenti - Ana navigasyon ve logo içerir
 * Hizmetler dropdown menüsü ve referanslar linki içerir
 */
export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  /**
   * Hizmetler dropdown menüsünü açma/kapama fonksiyonu
   */
  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  /**
   * Hizmetler dropdown menüsünü kapatma fonksiyonu
   */
  const closeServicesDropdown = () => {
    setIsServicesOpen(false);
  };

  /**
   * Mobil menüyü açma/kapama fonksiyonu
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Mobil menüyü kapatma fonksiyonu
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  /**
   * Mobil hizmetler menüsünü açma/kapama fonksiyonu
   */
  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  /**
   * Mobil menü açıkken body scroll'unu engelle
   */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobil Menü Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 animate-[fadeIn_0.3s_ease-out]"
          onClick={closeMobileMenu}
          style={{ top: "80px" }}
        />
      )}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Bölümü */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 bg-primary text-white rounded">
              <span className="material-symbols-outlined text-[28px]">engineering</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-primary text-xl font-bold leading-none tracking-tight">
                Tezel Mühendislik
              </h1>
              <span className="text-gray-500 text-xs font-medium tracking-wide mt-1 uppercase">
                Engineering Systems
              </span>
            </div>
          </Link>

          {/* Masaüstü Navigasyon */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-8">
              {/* Hizmetler Dropdown */}
              <div
                className="relative"
                onMouseEnter={toggleServicesDropdown}
                onMouseLeave={closeServicesDropdown}
              >
                <button
                  className="text-gray-700 text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Hizmetler
                  <span
                    className={`material-symbols-outlined text-base transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                      <Link
                        href="/hizmetler"
                        className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-50"
                        onClick={closeServicesDropdown}
                      >
                        Tüm Hizmetler
                      </Link>
                      <div className="border-t border-gray-200 my-2"></div>
                      <Link
                        href="/hizmetler/asansor-modernizasyonu"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                        onClick={closeServicesDropdown}
                      >
                        Asansör Modernizasyonu
                      </Link>
                      <Link
                        href="/hizmetler/yuruyen-merdiven-bant-modernizasyonu"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                        onClick={closeServicesDropdown}
                      >
                        Yürüyen Merdiven/Bant Modernizasyonu
                      </Link>
                      <Link
                        href="/hizmetler/yedek-parca-satisi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                        onClick={closeServicesDropdown}
                      >
                        Yedek Parça Satışı
                      </Link>
                      <Link
                        href="/hizmetler/enerji-taahhut"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                        onClick={closeServicesDropdown}
                      >
                        Enerji Taahhüt
                      </Link>
                      <Link
                        href="/hizmetler/elektrik-elektronik-taahhut"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                        onClick={closeServicesDropdown}
                      >
                        Elektrik & Elektronik Taahhüt
                      </Link>
                      <Link
                        href="/hizmetler/test-denetim"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                        onClick={closeServicesDropdown}
                      >
                        Test & Denetim
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                className="text-gray-700 text-sm font-semibold hover:text-accent transition-colors"
                href="/urunler"
              >
                Ürünler
              </Link>
              <Link
                href="/referanslar"
                className="text-gray-700 text-sm font-semibold hover:text-accent transition-colors"
              >
                Referanslar
              </Link>
              <Link
                className="text-gray-700 text-sm font-semibold hover:text-accent transition-colors"
                href="/hakkimizda"
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="text-gray-700 text-sm font-semibold hover:text-accent transition-colors"
              >
                İletişim
              </Link>
            </nav>
            <Link
              href="/iletisim"
              className="flex items-center justify-center h-10 px-6 bg-accent hover:bg-[#d97b20] text-white text-sm font-bold rounded transition-colors shadow-sm"
            >
              Teklif Talep Et
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:text-accent transition-all duration-300"
              aria-label="Menü"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`material-symbols-outlined text-2xl transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}>
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobil Menü Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white relative z-50 max-h-[calc(100vh-5rem)] overflow-y-auto animate-[slideDown_0.4s_ease-out]">
            <nav className="py-4 space-y-1">
              {/* Mobil Hizmetler Menüsü */}
              <div>
                <button
                  onClick={toggleMobileServices}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent transition-all duration-200 text-sm font-semibold"
                  aria-expanded={isMobileServicesOpen}
                >
                  <span>Hizmetler</span>
                  <span
                    className={`material-symbols-outlined text-base transition-transform duration-300 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isMobileServicesOpen && (
                  <div className="bg-gray-50 py-2 animate-[slideDown_0.3s_ease-out]">
                    <Link
                      href="/hizmetler"
                      className="block px-8 py-2 text-sm font-semibold text-primary hover:bg-gray-100 transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      Tüm Hizmetler
                    </Link>
                    <Link
                      href="/hizmetler/asansor-modernizasyonu"
                      className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      Asansör Modernizasyonu
                    </Link>
                    <Link
                      href="/hizmetler/yuruyen-merdiven-bant-modernizasyonu"
                      className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      Yürüyen Merdiven/Bant Modernizasyonu
                    </Link>
                    <Link
                      href="/hizmetler/yedek-parca-satisi"
                      className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      Yedek Parça Satışı
                    </Link>
                    <Link
                      href="/hizmetler/enerji-taahhut"
                      className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      Enerji Taahhüt
                    </Link>
                    <Link
                      href="/hizmetler/elektrik-elektronik-taahhut"
                      className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      Elektrik & Elektronik Taahhüt
                    </Link>
                    <Link
                      href="/hizmetler/test-denetim"
                      className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      Test & Denetim
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/urunler"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent transition-all duration-200 text-sm font-semibold"
                onClick={closeMobileMenu}
              >
                Ürünler
              </Link>
              <Link
                href="/referanslar"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent transition-all duration-200 text-sm font-semibold"
                onClick={closeMobileMenu}
              >
                Referanslar
              </Link>
              <Link
                href="/hakkimizda"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent transition-all duration-200 text-sm font-semibold"
                onClick={closeMobileMenu}
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent transition-all duration-200 text-sm font-semibold"
                onClick={closeMobileMenu}
              >
                İletişim
              </Link>
              <div className="px-4 pt-2">
                <Link
                  href="/iletisim"
                  className="flex items-center justify-center h-10 px-6 bg-accent hover:bg-[#d97b20] text-white text-sm font-bold rounded transition-colors shadow-sm"
                  onClick={closeMobileMenu}
                >
                  Teklif Talep Et
                </Link>
              </div>
            </nav>
          </div>
        )}
        </div>
      </header>
    </>
  );
}
