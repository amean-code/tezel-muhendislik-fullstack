"use client";

interface ShareButtonProps {
  title: string;
  description: string;
}

/**
 * Paylaş butonu komponenti - Makaleyi paylaşmak için
 */
export default function ShareButton({ title, description }: ShareButtonProps) {
  /**
   * Makaleyi paylaş fonksiyonu
   */
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        // Kullanıcı paylaşımı iptal etti veya hata oluştu
      }
    } else {
      // Fallback: URL'yi kopyala
      try {
        await navigator.clipboard.writeText(url);
        alert("Makale linki kopyalandı!");
      } catch (err) {
        // Clipboard API desteklenmiyor
        const textArea = document.createElement("textarea");
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Makale linki kopyalandı!");
      }
    }
  };

  return (
    <div className="bg-primary rounded p-6 text-white shadow-lg relative overflow-hidden group">
      <div className="absolute -right-6 -top-6 size-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="font-bold text-lg">Bu Makaleyi Paylaş</h4>
            <p className="text-blue-200 text-xs mt-1">Sosyal medyada veya arkadaşlarınla paylaş.</p>
          </div>
          <span className="material-symbols-outlined text-3xl">share</span>
        </div>
        <button
          onClick={handleShare}
          className="w-full py-3 bg-white text-primary font-bold text-sm rounded hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">share</span>
          Paylaş
        </button>
      </div>
    </div>
  );
}
