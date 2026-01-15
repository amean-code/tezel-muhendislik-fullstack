/**
 * Sık Sorulan Sorular (FAQ) verileri için TypeScript tipleri ve veriler
 */

export type FAQCategory = "all" | "maintenance" | "modernization" | "regulation";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  tags?: string[];
}

/**
 * Tüm FAQ'ların listesi
 */
export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Asansör periyodik bakımları ne sıklıkla yapılmalıdır?",
    answer:
      "Asansör İşletme ve Bakım Yönetmeliği gereğince, asansörlerin güvenli ve sürekli çalışmasını sağlamak amacıyla ayda en az bir kez yetkili bir asansör firması tarafından bakımının yapılması yasal bir zorunluluktur. Bu bakım sırasında güvenlik devreleri, fren sistemleri, kapı kilitleri ve halat gerginlikleri kontrol edilir.",
    category: "maintenance",
    tags: ["Bakım", "Yönetmelik"],
  },
  {
    id: "2",
    question: "Kırmızı etiket alan bir asansör için süreç nasıl işler?",
    answer:
      "Kırmızı etiket, asansörün can ve mal güvenliği açısından yüksek risk taşıdığını ve 'güvensiz' olduğunu belirtir. Bu durumda bina yönetimi, eksikliklerin giderilmesi için 60 gün süreye sahiptir. Ancak asansörün kullanımı bu süre zarfında durdurulmalıdır. Revizyon işlemleri yetkili firma tarafından tamamlandıktan sonra tekrar muayene başvurusu yapılmalıdır.",
    category: "regulation",
    tags: ["Mevzuat", "Güvenlik"],
  },
  {
    id: "3",
    question: "Asansör modernizasyonu ne kadar sürer?",
    answer:
      "Modernizasyon süresi, yapılacak işlemlerin kapsamına göre değişir. Sadece pano değişimi 2-3 gün sürebilirken, tam kapsamlı (motor, kabin, kapı, ray değişimi) bir modernizasyon işlemi 2 ile 4 hafta arasında sürebilir. Proje öncesinde yapılan keşif ile net süre belirlenir ve bir iş takvimi oluşturulur.",
    category: "modernization",
    tags: ["Modernizasyon", "Süreç"],
  },
  {
    id: "4",
    question: "Enerji verimliliği yüksek asansör sistemlerinin avantajları nelerdir?",
    answer:
      "VVVF (Değişken Voltaj ve Frekans) sürücülü ve dişlisiz (gearless) motor sistemleri, eski tip sistemlere göre %40-%60 oranında enerji tasarrufu sağlar. Ayrıca daha konforlu bir sürüş, hassas duruş ve daha az mekanik aşınma sunarak bakım maliyetlerini uzun vadede düşürür.",
    category: "modernization",
    tags: ["Enerji", "Verimlilik"],
  },
  {
    id: "5",
    question: "Mavi etiket nedir ve geçerlilik süresi ne kadardır?",
    answer:
      "Mavi etiket, asansörün 'hafif kusurlu' olduğunu ifade eder. Can güvenliği açısından doğrudan bir risk oluşturmamakla birlikte, belirlenen eksikliklerin bir sonraki periyodik kontrole kadar (genellikle 1 yıl) giderilmesi gerekir. Giderilmezse bir sonraki kontrolde asansör 'güvensiz' olarak değerlendirilebilir.",
    category: "regulation",
    tags: ["Mevzuat", "Etiket"],
  },
  {
    id: "6",
    question: "Asansörde mahsur kalma durumunda ne yapılmalıdır?",
    answer:
      "Öncelikle sakin olunmalıdır. Kabin içindeki alarm butonuna basarak veya interkom sistemi ile dışarıyla iletişim kurmaya çalışın. Asla kendi çabalarınızla kapıyı açmaya veya kabinden çıkmaya çalışmayın. Yetkili kurtarma personeli veya itfaiye gelene kadar bekleyin. Modern asansörlerde havalandırma sistemleri elektrik kesilse bile çalışmaya devam edecek şekilde tasarlanmıştır.",
    category: "maintenance",
    tags: ["Güvenlik", "Acil Durum"],
  },
];

/**
 * Kategori etiketlerini döndürür
 */
export const categoryLabels: Record<FAQCategory, string> = {
  all: "Tümü",
  maintenance: "Bakım",
  modernization: "Modernizasyon",
  regulation: "Mevzuat",
};
