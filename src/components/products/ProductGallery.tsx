"use client";

import { useState } from "react";

/**
 * ProductGallery komponenti - Ürün görselleri galerisi (tab'lı yapı ile)
 */
interface ProductGalleryProps {
  mainImage: string;
  mainImageAlt: string;
  thumbnails: Array<{
    image: string;
    alt: string;
  }>;
  moreCount?: number;
}

type GalleryTab = "images" | "drawings" | "certificates";

export default function ProductGallery({
  mainImage,
  mainImageAlt,
  thumbnails,
  moreCount = 0,
}: ProductGalleryProps) {
  const [activeTab, setActiveTab] = useState<GalleryTab>("images");
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [selectedImageAlt, setSelectedImageAlt] = useState(mainImageAlt);

  /**
   * Tab değiştirme fonksiyonu
   */
  const handleTabChange = (tab: GalleryTab) => {
    setActiveTab(tab);
  };

  /**
   * Thumbnail seçme fonksiyonu
   */
  const handleThumbnailClick = (image: string, alt: string) => {
    setSelectedImage(image);
    setSelectedImageAlt(alt);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Ana Görsel */}
      <div className="bg-white border border-gray-200 p-4">
        <div className="aspect-[16/10] bg-cover bg-center relative" style={{ backgroundImage: `url(${selectedImage})` }}>
          <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors" />
        </div>
      </div>

      {/* Tab'lar */}
      <div className="flex border-b border-gray-200 mb-2">
        <button
          onClick={() => handleTabChange("images")}
          className={`px-6 py-3 text-sm font-bold transition-colors ${
            activeTab === "images"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-600 hover:text-primary"
          }`}
        >
          Görseller
        </button>
        <button
          onClick={() => handleTabChange("drawings")}
          className={`px-6 py-3 text-sm font-bold transition-colors ${
            activeTab === "drawings"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-600 hover:text-primary"
          }`}
        >
          Teknik Çizimler (CAD)
        </button>
        <button
          onClick={() => handleTabChange("certificates")}
          className={`px-6 py-3 text-sm font-bold transition-colors ${
            activeTab === "certificates"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-600 hover:text-primary"
          }`}
        >
          Sertifikalar
        </button>
      </div>

      {/* Thumbnail'lar */}
      <div className="grid grid-cols-4 gap-4">
        {activeTab === "images" && (
          <>
            {/* Ana görseli de thumbnail olarak göster */}
            <button
              onClick={() => handleThumbnailClick(mainImage, mainImageAlt)}
              className={`aspect-square bg-cover bg-center cursor-pointer border-2 transition-colors ${
                selectedImage === mainImage
                  ? "border-primary"
                  : "border-gray-200 hover:border-primary"
              }`}
              style={{ backgroundImage: `url(${mainImage})` }}
              aria-label={mainImageAlt}
            />
            {thumbnails.slice(0, 3).map((thumb, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(thumb.image, thumb.alt)}
                className={`aspect-square bg-cover bg-center cursor-pointer border-2 transition-colors ${
                  selectedImage === thumb.image
                    ? "border-primary"
                    : "border-gray-200 hover:border-primary"
                }`}
                style={{ backgroundImage: `url(${thumb.image})` }}
                aria-label={thumb.alt}
              />
            ))}
            {moreCount > 0 && (
              <button className="aspect-square bg-gray-100 flex flex-col items-center justify-center text-gray-600 border border-gray-200 hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">architecture</span>
                <span className="text-[10px] mt-1 font-bold">CAD / DWG</span>
              </button>
            )}
          </>
        )}
        {activeTab === "drawings" && (
          <div className="col-span-4 flex items-center justify-center py-8 text-gray-500">
            <div className="text-center">
              <span className="material-symbols-outlined text-5xl mb-2">architecture</span>
              <p className="text-sm">Teknik çizimler yakında eklenecek</p>
            </div>
          </div>
        )}
        {activeTab === "certificates" && (
          <div className="col-span-4 flex items-center justify-center py-8 text-gray-500">
            <div className="text-center">
              <span className="material-symbols-outlined text-5xl mb-2">verified</span>
              <p className="text-sm">Sertifikalar yakında eklenecek</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
