import Image from "next/image";

/**
 * ProductGallery komponenti - Ürün görselleri galerisi
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

export default function ProductGallery({
  mainImage,
  mainImageAlt,
  thumbnails,
  moreCount = 0,
}: ProductGalleryProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Ana Görsel */}
      <div className="aspect-[4/3] w-full bg-white rounded border border-gray-200 p-8 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded cursor-pointer hover:bg-white transition-colors">
          <span className="material-symbols-outlined text-gray-600">zoom_in</span>
        </div>
        <div className="relative w-full h-full">
          <Image
            alt={mainImageAlt}
            src={mainImage}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Thumbnail'lar */}
      <div className="grid grid-cols-4 gap-4">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            className={`aspect-square rounded border-2 ${
              index === 0
                ? "border-primary"
                : "border-gray-200 hover:border-primary transition-colors"
            } bg-white p-2`}
          >
            <div className="relative w-full h-full">
              <Image
                alt={thumb.alt}
                src={thumb.image}
                fill
                className={`object-cover ${index === 0 ? "" : "opacity-70"}`}
              />
            </div>
          </button>
        ))}
        {moreCount > 0 && (
          <button className="aspect-square rounded border border-gray-200 bg-white p-2 hover:border-primary transition-colors flex items-center justify-center bg-gray-50">
            <span className="text-xs font-semibold text-primary">+{moreCount} More</span>
          </button>
        )}
      </div>
    </div>
  );
}
