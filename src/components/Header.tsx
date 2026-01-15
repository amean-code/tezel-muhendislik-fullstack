"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/services";

/**
 * Header komponenti - Ana navigasyon ve logo içerir
 * Hizmetler dropdown menüsü ve referanslar linki içerir
 */
export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  return (
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
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/hizmetler/${service.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                          onClick={closeServicesDropdown}
                        >
                          {service.title}
                        </Link>
                      ))}
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
            <button className="flex items-center justify-center h-10 px-6 bg-accent hover:bg-[#d97b20] text-white text-sm font-bold rounded transition-colors shadow-sm">
              <span>Teklif Talep Et</span>
            </button>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="flex lg:hidden">
            <button className="p-2 text-gray-700" aria-label="Menü">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
