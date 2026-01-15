/**
 * Teknik terimler veri yapısı ve örnek veriler
 */

export type TermCategory =
  | "Motor Teknolojisi"
  | "Güvenlik"
  | "Kritik Güvenlik"
  | "Mekanik Aksam"
  | "Kontrol Sistemleri"
  | "Elektrik Sistemleri"
  | "Standartlar"
  | "Bakım";

export interface TechnicalTerm {
  id: string;
  term: string;
  description: string;
  category: TermCategory;
  relatedStandard?: string;
  isMandatory?: boolean;
  firstLetter: string; // Türkçe alfabeye göre ilk harf
}

/**
 * Teknik terimler listesi
 */
export const technicalTerms: TechnicalTerm[] = [
  {
    id: "asenkron-motor",
    term: "Asenkron Motor",
    description:
      "Rotor hızı ile statör döner alanı arasında bir kayma bulunan ve endüksiyon prensibine göre çalışan alternatif akım motoru. Asansör sistemlerinde yaygın olarak kullanılan dayanıklı motor tipidir.",
    category: "Motor Teknolojisi",
    relatedStandard: "EN 81-20 Madde 5.9",
    firstLetter: "A",
  },
  {
    id: "acil-kurtarma-tertibati",
    term: "Acil Kurtarma Tertibatı",
    description:
      "Elektrik kesintisi durumunda asansör kabinini en yakın kata otomatik olarak getiren ve kapıları açarak yolcuların tahliyesini sağlayan akülü elektronik sistem.",
    category: "Güvenlik",
    firstLetter: "A",
  },
  {
    id: "hidrolik-tampon",
    term: "Hidrolik Tampon",
    description:
      "Kuyu dibinde bulunan, kabin veya karşı ağırlığın serbest düşüşü durumunda çarpma etkisini yağ basıncı ile sönümleyerek güvenli bir duruş sağlayan güvenlik elemanı.",
    category: "Mekanik Aksam",
    relatedStandard: "EN 81-20/50",
    firstLetter: "H",
  },
  {
    id: "parasut-fren-sistemi",
    term: "Paraşüt Fren Sistemi",
    description:
      "Halat kopması veya aşırı hızlanma durumunda devreye girerek kabini raylara kilitleyen mekanik güvenlik tertibatı. Kaymalı ve ani etkili olmak üzere türleri vardır.",
    category: "Kritik Güvenlik",
    isMandatory: true,
    firstLetter: "P",
  },
  {
    id: "vvvf-surucu",
    term: "VVVF Sürücü",
    description:
      "Variable Voltage Variable Frequency (Değişken Voltaj Değişken Frekans). Asansör motorunun hızını, voltaj ve frekansı değiştirerek kontrol eden, konforlu kalkış ve duruş sağlayan elektronik sürücü ünitesi.",
    category: "Kontrol Sistemleri",
    firstLetter: "V",
  },
  {
    id: "kabin-kapisi",
    term: "Kabin Kapısı",
    description:
      "Asansör kabinini kuyu içinden ayıran ve yolcuların güvenliğini sağlayan kapı sistemi. Otomatik veya manuel olarak çalışabilir.",
    category: "Güvenlik",
    relatedStandard: "EN 81-20",
    firstLetter: "K",
  },
  {
    id: "kuyu-kapisi",
    term: "Kuyu Kapısı",
    description:
      "Her katta bulunan ve kuyu boşluğunu koridor alanından ayıran kapı sistemi. Güvenlik açısından kritik öneme sahiptir.",
    category: "Güvenlik",
    relatedStandard: "EN 81-20",
    firstLetter: "K",
  },
  {
    id: "karsi-agirlik",
    term: "Karşı Ağırlık",
    description:
      "Asansör kabininin ağırlığını dengelemek için kullanılan, kabin ağırlığının yaklaşık %40-50'si kadar olan ağırlık bloğu.",
    category: "Mekanik Aksam",
    firstLetter: "K",
  },
  {
    id: "halat-sistemi",
    term: "Halat Sistemi",
    description:
      "Kabin ve karşı ağırlığı taşıyan, çelik tel halatlardan oluşan sistem. Genellikle 4-8 adet halat kullanılır.",
    category: "Mekanik Aksam",
    relatedStandard: "EN 81-20",
    firstLetter: "H",
  },
  {
    id: "makine-dairesi",
    term: "Makine Dairesi",
    description:
      "Asansör motoru, kontrol panosu ve diğer elektromekanik ekipmanların bulunduğu teknik alan.",
    category: "Elektrik Sistemleri",
    firstLetter: "M",
  },
  {
    id: "makine-dairesiz",
    term: "Makine Dairesiz",
    description:
      "Motor ve kontrol sistemlerinin kuyu içine entegre edildiği, ayrı bir makine dairesi gerektirmeyen asansör tipi.",
    category: "Kontrol Sistemleri",
    firstLetter: "M",
  },
  {
    id: "otomatik-kapi",
    term: "Otomatik Kapı",
    description:
      "Elektrikli motor ile açılıp kapanan, sensörlerle kontrol edilen kapı sistemi.",
    category: "Kontrol Sistemleri",
    firstLetter: "O",
  },
  {
    id: "periyodik-bakim",
    term: "Periyodik Bakım",
    description:
      "Asansör sisteminin düzenli aralıklarla kontrol edilmesi, yağlama ve ayar işlemlerinin yapılması.",
    category: "Bakım",
    relatedStandard: "TS EN 81-80",
    firstLetter: "P",
  },
  {
    id: "hiz-kontrol-sistemi",
    term: "Hız Kontrol Sistemi",
    description:
      "Asansörün hareket hızını kontrol eden ve güvenli çalışma hızını sağlayan elektronik sistem.",
    category: "Kontrol Sistemleri",
    firstLetter: "H",
  },
  {
    id: "güvenlik-devresi",
    term: "Güvenlik Devresi",
    description:
      "Asansörün güvenli çalışmasını sağlayan, tüm güvenlik elemanlarını kontrol eden elektrik devresi.",
    category: "Güvenlik",
    isMandatory: true,
    firstLetter: "G",
  },
  {
    id: "yolcu-asansoru",
    term: "Yolcu Asansörü",
    description:
      "İnsan taşımacılığı için tasarlanmış, yük taşıma kapasitesi sınırlı olan asansör tipi.",
    category: "Standartlar",
    relatedStandard: "EN 81-20",
    firstLetter: "Y",
  },
  {
    id: "yuk-asansoru",
    term: "Yük Asansörü",
    description:
      "Ağır yüklerin taşınması için tasarlanmış, yüksek taşıma kapasiteli asansör tipi.",
    category: "Standartlar",
    relatedStandard: "EN 81-20",
    firstLetter: "Y",
  },
  {
    id: "elektrik-kesintisi",
    term: "Elektrik Kesintisi",
    description:
      "Asansör sisteminin çalışmasını durduran elektrik enerjisi kesilmesi durumu.",
    category: "Güvenlik",
    firstLetter: "E",
  },
  {
    id: "fren-sistemi",
    term: "Fren Sistemi",
    description:
      "Asansörün durmasını ve sabit kalmasını sağlayan mekanik veya elektromekanik sistem.",
    category: "Güvenlik",
    isMandatory: true,
    firstLetter: "F",
  },
  {
    id: "limit-switch",
    term: "Limit Switch",
    description:
      "Asansörün en üst ve en alt konumlarını algılayan, sistemin aşırı hareketini önleyen anahtar.",
    category: "Güvenlik",
    firstLetter: "L",
  },
  {
    id: "kuyu-derinligi",
    term: "Kuyu Derinliği",
    description:
      "Asansör kuyusunun en alt noktasından en üst noktasına kadar olan dikey mesafe.",
    category: "Standartlar",
    firstLetter: "K",
  },
  {
    id: "kabin-olcusu",
    term: "Kabin Ölçüsü",
    description:
      "Asansör kabininin genişlik, derinlik ve yükseklik ölçüleri. Taşıma kapasitesini belirler.",
    category: "Standartlar",
    firstLetter: "K",
  },
];

/**
 * Harfe göre terimleri filtreler
 */
export function getTermsByLetter(letter: string): TechnicalTerm[] {
  return technicalTerms.filter((term) => term.firstLetter === letter);
}

/**
 * Tüm harfleri ve terim sayılarını döndürür
 */
export function getLetterCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  technicalTerms.forEach((term) => {
    counts[term.firstLetter] = (counts[term.firstLetter] || 0) + 1;
  });
  return counts;
}

/**
 * Arama fonksiyonu - terim adı veya açıklamasında arama yapar
 */
export function searchTerms(query: string): TechnicalTerm[] {
  const lowerQuery = query.toLowerCase();
  return technicalTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.description.toLowerCase().includes(lowerQuery) ||
      term.category.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Kategoriye göre terimleri filtreler
 */
export function getTermsByCategory(category: TermCategory): TechnicalTerm[] {
  return technicalTerms.filter((term) => term.category === category);
}
