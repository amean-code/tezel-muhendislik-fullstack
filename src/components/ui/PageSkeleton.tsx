/**
 * Sayfa yükleme skeleton komponenti - Tüm sayfalarda kullanılabilir
 */

/**
 * Hero skeleton - Sayfa başlığı için (hizmetler sayfası için özel)
 */
export function HeroSkeleton() {
  return (
    <div className="relative w-full h-[600px] bg-gray-300 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-6 items-center">
          {/* Badge skeleton */}
          <div className="h-6 w-32 bg-white/60 rounded animate-pulse"></div>
          {/* Title skeleton */}
          <div className="space-y-3 w-full">
            <div className="h-12 w-3/4 bg-white/60 rounded mx-auto animate-pulse"></div>
            <div className="h-12 w-2/3 bg-white/60 rounded mx-auto animate-pulse"></div>
          </div>
          {/* Description skeleton */}
          <div className="space-y-2 w-full max-w-2xl">
            <div className="h-5 w-full bg-white/60 rounded animate-pulse"></div>
            <div className="h-5 w-5/6 bg-white/60 rounded mx-auto animate-pulse"></div>
          </div>
          {/* Button skeleton */}
          <div className="h-12 w-48 bg-white/60 rounded animate-pulse mt-4"></div>
        </div>
      </div>
    </div>
  );
}

/**
 * Content skeleton - İçerik bölümleri için
 */
export function ContentSkeleton() {
  return (
    <div className="bg-background-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {/* Section 1: Grid Cards */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="h-4 w-32 bg-gray-300 rounded mx-auto animate-pulse"></div>
              <div className="h-10 w-96 bg-gray-300 rounded mx-auto animate-pulse"></div>
              <div className="h-5 w-2/3 bg-gray-300 rounded mx-auto animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Feature with Image */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="h-[400px] bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="h-4 w-40 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-10 w-full bg-gray-300 rounded animate-pulse"></div>
              <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-5 w-5/6 bg-gray-200 rounded animate-pulse"></div>
              <div className="space-y-4 mt-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-gray-200 rounded-full flex-shrink-0 animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Process Timeline */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="h-4 w-32 bg-gray-300 rounded mx-auto animate-pulse"></div>
              <div className="h-10 w-96 bg-gray-300 rounded mx-auto animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="text-center space-y-4">
                  <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded mx-auto animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded mx-auto animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Full page skeleton - Tüm sayfa için
 */
export default function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background-light">
      <HeroSkeleton />
      <ContentSkeleton />
    </div>
  );
}
