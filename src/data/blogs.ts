/**
 * Blog makaleleri için TypeScript tipleri ve veriler
 */

export type BlogCategory =
  | "all"
  | "standards"
  | "modernization"
  | "maintenance"
  | "technologies"
  | "glossary";

export interface Blog {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  tags?: string[];
  content?: string; // Makale içeriği (HTML formatında)
  readingTime?: number; // Okuma süresi (dakika)
  author?: string; // Yazar bilgisi
}

/**
 * Tüm blog makalelerinin listesi
 */
export const blogs: Blog[] = [
  {
    id: "1",
    slug: "asansorlerde-enerji-verimliligi-ve-en-81-20-standartlari",
    title: "Asansörlerde Enerji Verimliliği ve EN 81-20 Standartları",
    description:
      "Yeni nesil asansör sistemlerinde enerji tasarrufu sağlayan teknolojiler, rejeneratif sürücüler ve Avrupa standartlarına uyum süreci hakkında kapsamlı bir mühendislik incelemesi.",
    category: "standards",
    date: "12 Ekim 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdLiZ4etobPgaqAQ0n3Z8fNrw8IPo3148NUcFpeqYCtws3cpcxpHDA06wznpD2PP2DyAiLpeq1_N-Of2G-1f6iejeFyypRRAGcOC1FUKRA8Ogavn6vxwLurvI9wGLeENAZFpI9WSs5KRfnMow-XDUcL0uKe163ovpjKzht9tKWiOjeEc5pBlS377eEjdl4f0PWma5nrodrloXpz27llTn_FMTTHGiJThqL9uHt5aovwzXzJqeAElNB2iqWLZACPJEoITLTsx6Snfc",
    imageAlt: "Technical blueprint of an elevator motor system",
    featured: true,
    tags: ["EN81-20", "EnerjiVerimliliği", "Güvenlik"],
    readingTime: 8,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Giriş ve Standartlara Genel Bakış</h2>
      <p>Bu teknik makale, asansör sistemlerinde enerji verimliliği konusunu detaylı bir şekilde ele almaktadır. EN 81-20 standartlarına uygun olarak tasarlanan modern asansör sistemleri, geleneksel sistemlere göre %40'a varan enerji tasarrufu sağlayabilmektedir.</p>
      
      <div class="my-8 bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
        <div class="flex gap-3 mb-2">
          <span class="material-symbols-outlined text-primary">warning</span>
          <h4 class="font-bold text-primary">KRİTİK TEKNİK UYARI: EN 81-20 Referansı</h4>
        </div>
        <p class="text-sm text-primary/80 m-0">
          EN 81-20 standardı uyarınca; asansör sistemleri, enerji verimliliği açısından belirli kriterleri karşılamalıdır. Rejeneratif sürücüler ve LED aydınlatma sistemleri bu kriterlerin önemli bir parçasıdır.
        </p>
      </div>

      <h2>2. Enerji Verimliliği Teknolojileri</h2>
      <p>Modern asansör sistemlerinde kullanılan enerji verimliliği teknolojileri şunları içermektedir:</p>
      <ul>
        <li><strong>Rejeneratif sürücüler:</strong> Enerji geri kazanımı ile %40'a varan tasarruf</li>
        <li><strong>LED aydınlatma sistemleri:</strong> Geleneksel aydınlatmaya göre %80 daha az enerji tüketimi</li>
        <li><strong>Akıllı bekleme modları:</strong> Kullanım dışı saatlerde otomatik enerji tasarrufu</li>
        <li><strong>Yüksek verimli motorlar:</strong> IE4 ve üzeri verimlilik sınıfı motorlar</li>
      </ul>

      <h2>3. EN 81-20 Standardı Gereksinimleri</h2>
      <p>Standardın enerji verimliliği ile ilgili temel gereksinimleri:</p>
      <ul>
        <li>Enerji tüketim ölçümü ve raporlama</li>
        <li>Rejeneratif sistemler için şebeke uyumluluğu</li>
        <li>Bekleme modu enerji tüketim limitleri</li>
        <li>Enerji verimliliği sınıflandırması</li>
      </ul>

      <h2>4. Sonuç ve Öneriler</h2>
      <p>Tezel Mühendislik olarak, tüm projelerde enerji verimliliği standartlarına uygun sistemlerin kullanılmasını şiddetle tavsiye ediyoruz. Bu hem çevresel hem de ekonomik açıdan önemli faydalar sağlamaktadır.</p>
    `,
  },
  {
    id: "2",
    slug: "hidrolik-asansor-sistemlerinde-yag-analizi-ve-bakim-periyotlari",
    title: "Hidrolik Asansör Sistemlerinde Yağ Analizi ve Bakım Periyotları",
    description:
      "Hidrolik sistemlerin ömrünü uzatmak için kritik öneme sahip yağ viskozite testleri ve periyodik filtre değişim süreçleri.",
    category: "maintenance",
    date: "5 Ekim 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACrOtB5ncnS63PMNM0fWaBi_8xpXww6Wag05igFFgoUgyQtruyzFWDBxQ1er2c1PhMMpqx6LUpTboQUeXRdRKOlR0M4A7CBhUl_Oq4AOCApgAgGdmY2MwUUA8SRr4QNvsXFPoG1uwH49ePuHA-Nc2QgUXtxzDB9ORhbEwtYNmJefiMG1YUvkE8KikV-e43hzECeMXVFgDIuRedyzCux2VhIfJy4fokdwe4p5GfJZkzWj5EU82O2fixc4zjOCI48QkWj4piYxQUPC4",
    imageAlt: "Industrial construction site with heavy machinery",
    tags: ["Hidrolik", "AsansörBakım", "TeknikBakım"],
    readingTime: 5,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Hidrolik Sistemlerde Yağın Önemi</h2>
      <p>Hidrolik asansör sistemlerinde kullanılan yağ, sistemin kalbi niteliğindedir. Doğru yağ seçimi ve düzenli bakım, sistem ömrünü önemli ölçüde uzatır.</p>
      
      <h2>2. Yağ Analizi Parametreleri</h2>
      <p>Periyodik yağ analizinde kontrol edilmesi gereken parametreler:</p>
      <ul>
        <li>Viskozite değeri ve değişim oranı</li>
        <li>Asit sayısı (TAN - Total Acid Number)</li>
        <li>Su içeriği ve partikül analizi</li>
        <li>Oksidasyon stabilitesi</li>
      </ul>
      
      <h2>3. Bakım Periyotları</h2>
      <p>Önerilen bakım periyotları:</p>
      <ul>
        <li>Aylık: Görsel kontrol ve seviye kontrolü</li>
        <li>6 Aylık: Yağ analizi ve filtre kontrolü</li>
        <li>Yıllık: Yağ değişimi ve sistem temizliği</li>
      </ul>
    `,
  },
  {
    id: "3",
    slug: "yuruyen-merdivenlerde-iot-tabanli-uzaktan-izleme",
    title: "Yürüyen Merdivenlerde IoT Tabanlı Uzaktan İzleme",
    description:
      "Sensör verileri ile arıza tespiti, kestirimci bakım uygulamaları ve AVM'lerdeki operasyonel verimlilik artışı.",
    category: "technologies",
    date: "28 Eylül 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpeoMorWwb235JpUHJbyoBDdMWFnvuLdtqVe9P6dBBvkwsZG-WT5Seq9riH0A4xy5McUTCMXLwoer8jmZ5sn-HmyhL3LGja6Fm_QLNTsQ4J9ktXGthKuPCX_lqKpXidA7O6LSPp--Xi10hAEqwRS0d-c9R7EqYx8OiSldyTRX2XVyD49B3Dm0FoxJqZwdE04-1V783gtetAZNw5et_IdRD0Mu3JdiuK7WKjn-QmzYMJ5UT09wZKvmCXw3tcDkssJ_rIMG8X1cmO90",
    imageAlt: "Electronic circuit board close up",
    tags: ["IoT", "YeniTeknolojiler", "Uzaktanİzleme"],
    readingTime: 6,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. IoT ve Uzaktan İzleme Sistemleri</h2>
      <p>Yürüyen merdiven sistemlerinde IoT teknolojileri, gerçek zamanlı veri toplama ve analiz imkanı sunarak bakım maliyetlerini %30'a varan oranlarda azaltmaktadır.</p>
      
      <h2>2. Sensör Teknolojileri</h2>
      <p>Sistemde kullanılan sensörler:</p>
      <ul>
        <li>Sıcaklık ve titreşim sensörleri</li>
        <li>Akım ve voltaj ölçüm sensörleri</li>
        <li>Hız ve yön sensörleri</li>
        <li>Güvenlik sensörleri</li>
      </ul>
      
      <h2>3. Kestirimci Bakım Uygulamaları</h2>
      <p>Toplanan veriler, makine öğrenmesi algoritmaları ile analiz edilerek arızaların önceden tespit edilmesi sağlanmaktadır.</p>
    `,
  },
  {
    id: "4",
    slug: "2024-yili-asansor-periyodik-kontrol-yonetmeligi-degisiklikleri",
    title: "2024 Yılı Asansör Periyodik Kontrol Yönetmeliği Değişiklikleri",
    description:
      "Resmi Gazete'de yayınlanan son değişiklikler ve bina yöneticilerinin dikkat etmesi gereken yeni yasal zorunluluklar.",
    category: "standards",
    date: "20 Eylül 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0YXaDUOU0bMyDaNsn0Jz9gUf2wPpQ-rEsmHGEM9cBfjykuwE7Ks_ZI7g1XG8aUyVO0Fsyvtg-bUrq7fpVhyVnJlIT3nTtE4K-U-dH174NJDQZFPUA_ienG5ggCnk189vcySGZ3j0IZxHDiWziMFeswJw03PlI2Ap99BxJ6fveQoSAlwJnfpzfK43IXSInV3Z29V4-JXLBByYMY4ocorKsbsLtlbfNrIP4Qt3dE7B_oAQ5CnFnskO0djYDWxTPiVTZ2dGnrmsmSqk",
    imageAlt: "Office workers reviewing documents",
    tags: ["Mevzuat", "YasalYönetmelikler", "Güvenlik"],
    readingTime: 7,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Yönetmelik Değişikliklerine Genel Bakış</h2>
      <p>2024 yılında yayınlanan Asansör Periyodik Kontrol Yönetmeliği değişiklikleri, bina yöneticileri ve işletmeciler için önemli yeni yükümlülükler getirmektedir.</p>
      
      <h2>2. Önemli Değişiklikler</h2>
      <ul>
        <li><strong>Kontrol periyotları:</strong> Yıllık kontrol zorunluluğu ve özel durumlar</li>
        <li><strong>Belgelendirme:</strong> Yeni belge gereksinimleri ve dijital kayıt sistemi</li>
        <li><strong>Güvenlik kriterleri:</strong> Güncellenmiş güvenlik standartları</li>
        <li><strong>Ceza hükümleri:</strong> Uyumsuzluk durumunda yaptırımlar</li>
      </ul>
      
      <h2>3. Bina Yöneticileri İçin Öneriler</h2>
      <p>Yeni yönetmelik gereksinimlerine uyum için yapılması gerekenler ve hazırlık süreçleri.</p>
    `,
  },
  {
    id: "5",
    slug: "eski-asansorlerin-guvenlik-modernizasyonu-adim-adim-rehber",
    title: "Eski Asansörlerin Güvenlik Modernizasyonu: Adım Adım Rehber",
    description:
      "20 yaş üstü asansörlerde fren sistemleri, kabin kapıları ve kontrol panolarının modernizasyon süreçleri.",
    category: "modernization",
    date: "15 Eylül 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDI_KoT2p2cIZMM9__rjq-i9Z1dWdRhkJdZIax0HzWmLR1py6fmRmepBsd1D49eNo6o-eS5l1wKaaqm-dR4h4pjPFjPoOmOEotJV17WeqRw-OR0GNog323U9rgWl2iD2MuPLV-sp59n814wt8X7V2uSYeM-gyjuOUOZiKPFJRluo4YjkGMXAsZuIdzkRqlFrewyzNgV5A5Ut38OKSX-GAQR6VqiRObIDQQP78QFLrIr1jSNZkX8iH3NgAT-lO0Ju2RlNuZ75c9wJyo",
    imageAlt: "Modern high speed elevator doors",
    tags: ["Modernizasyon", "Güvenlik", "Bakım"],
    readingTime: 12,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Modernizasyon Planlaması</h2>
      <p>Eski asansör sistemlerinin modernizasyonu, güvenlik ve verimlilik açısından kritik öneme sahiptir. İlk adım olarak mevcut sistemin detaylı analizi yapılmalıdır.</p>
      
      <h2>2. Modernizasyon Aşamaları</h2>
      <h3>2.1. Fren Sistemleri</h3>
      <p>Elektromanyetik fren sistemlerinin modernizasyonu ve test prosedürleri.</p>
      
      <h3>2.2. Kabin Kapıları</h3>
      <p>Otomatik kapı sistemleri ve güvenlik fotosellerinin güncellenmesi.</p>
      
      <h3>2.3. Kontrol Panoları</h3>
      <p>Mikroişlemci tabanlı yeni nesil kumanda panosu değişimi.</p>
      
      <h2>3. Test ve Uygunluk Kontrolü</h2>
      <p>Modernizasyon sonrası yapılması gereken güvenlik testleri ve EN 81-20 uygunluk kontrolü.</p>
    `,
  },
  {
    id: "6",
    slug: "vvvf-surucu-parametre-ayarlari-ve-hata-kodlari",
    title: "VVVF Sürücü Parametre Ayarları ve Hata Kodları",
    description:
      "Frekans inverterlerinin konforlu duruş kalkış ayarları ve yaygın karşılaşılan hata kodlarının çözümleri.",
    category: "maintenance",
    date: "10 Eylül 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3z9snOiaXa3dKUVD0_eh2ZHN2ZTPpQB3cNdS0ZaUlgzXCDRksUn9E7swE6FuZYg7JFVQgKDjUkmnwthsUwvg2eRPNRB21O7kBop3YTPk5zY7jQXEEEadQW6dKlYXg4N_jovkTo09I4q7T_sGn0lBQEq6qJN6_qR2kkFGsFfMvs-WsDTIbYcXYe7p7TJ4uBREx6gXu9MSOze57NaGKgggzN4kYI9d1vSRWJVtCUG75FNWUf5wCk-6x64kkGKbiUwIfuSaBR5pqMQc",
    imageAlt: "Engineer checking industrial control panel",
    tags: ["TeknikBakım", "VVVF", "HataKodları"],
    readingTime: 6,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. VVVF Sürücü Parametreleri</h2>
      <p>VVVF (Variable Voltage Variable Frequency) sürücüler, asansör konforunu ve enerji verimliliğini optimize etmek için doğru parametre ayarları gerektirir.</p>
      
      <h2>2. Temel Parametre Ayarları</h2>
      <ul>
        <li><strong>Hız referansı:</strong> Nominal hız ve maksimum hız ayarları</li>
        <li><strong>Hızlanma/yavaşlama:</strong> Ramp süreleri ve eğrileri</li>
        <li><strong>Manyetik akı:</strong> Motor manyetizasyon ayarları</li>
        <li><strong>PID kontrol:</strong> Hız kontrol parametreleri</li>
      </ul>
      
      <h2>3. Yaygın Hata Kodları</h2>
      <p>En sık karşılaşılan hata kodları ve çözümleri:</p>
      <ul>
        <li><strong>Overcurrent (Aşırı Akım):</strong> Motor yükü ve kısa devre kontrolü</li>
        <li><strong>Overvoltage (Aşırı Gerilim):</strong> Şebeke gerilimi ve fren direnci kontrolü</li>
        <li><strong>Ground Fault (Toprak Kaçağı):</strong> Motor izolasyon testi</li>
        <li><strong>Overheating (Aşırı Isınma):</strong> Soğutma sistemi kontrolü</li>
      </ul>
    `,
  },
  {
    id: "7",
    slug: "asansor-muhendisligi-temel-terimler-sozlugu-a-z",
    title: "Asansör Mühendisliği Temel Terimler Sözlüğü (A-Z)",
    description:
      "Regülatör, halat, kuyu dibi tamponu ve diğer teknik terimlerin açıklamalı sözlüğü.",
    category: "glossary",
    date: "5 Eylül 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFuFsXwkbGUzuTCAPXdBfRJunHmSKAwcxXi4fJi2E4pDMnOW81gwNjABepc1_Z6-ptLi2unTmD0H5IW86VP-EUF1X7T5Qnw5-cRFOUfYYGZK6DE0p-LdHnVFWP7jszWjFij6bfGg9bmn98_mo9-04TJ6gndNOWttU4JkoK2Ye6jG_Vvnbkk4s1Lu1SzEnoeK0pK59Tpcg4IktaXOh3U5J-Xc9IsF38Aq3shIX5LtUviTOMjtxWhbejgYAsGo69xI-W1mS8tOFe2I8",
    imageAlt: "Abstract code and data visualization",
    tags: ["TeknikSözlük", "Eğitim", "Referans"],
    readingTime: 10,
    author: "Mühendislik Departmanı",
    content: `
      <h2>A - D Harfleri</h2>
      <p><strong>Asansör Kuyusu:</strong> Asansörün hareket ettiği dikey boşluk. Kuyu duvarları, kapı açıklıkları ve makine dairesi ile sınırlandırılmıştır.</p>
      <p><strong>Bobin:</strong> Elektromanyetik fren sisteminin parçası. Manyetik alan oluşturarak frenin açılmasını sağlar.</p>
      <p><strong>Dengeleme Katsayısı:</strong> Karşı ağırlık ve kabin ağırlığı oranı. Genellikle %40-50 arasındadır.</p>
      
      <h2>E - K Harfleri</h2>
      <p><strong>Fotosel:</strong> Kapı güvenlik sensörü. Kapı kapanırken yolcu veya nesne algılandığında kapıyı açan sistem.</p>
      <p><strong>Halat:</strong> Kabin ve karşı ağırlığı taşıyan çelik halat. Genellikle 8-10 mm çapında ve çok telli yapıdadır.</p>
      <p><strong>Kabin:</strong> Yolcuların ve yüklerin taşındığı bölüm. Güvenlik ve konfor standartlarına uygun olarak tasarlanır.</p>
      
      <h2>L - Z Harfleri</h2>
      <p><strong>Regülatör:</strong> Hız sınırlama cihazı. Asansörün izin verilen maksimum hızı aşmasını önler.</p>
      <p><strong>Tampon:</strong> Kuyu dibi ve üstü güvenlik elemanları. Acil durumlarda kabin ve karşı ağırlığın çarpmasını yumuşatan sistemler.</p>
      <p><strong>VVVF:</strong> Variable Voltage Variable Frequency - Değişken gerilim ve frekanslı sürücü sistemi.</p>
    `,
  },
  {
    id: "8",
    slug: "en-115-yuruyen-merdiven-standartlari-ve-guncellemeler",
    title: "EN 115 Yürüyen Merdiven Standartları ve Güncellemeler",
    description:
      "Yürüyen merdiven ve yürüyen bant sistemleri için EN 115 standardının son revizyonları, güvenlik gereksinimleri ve uyumluluk süreçleri.",
    category: "standards",
    date: "1 Kasım 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpA4dqBmp79ZNsj1yQ8QAbwDty5_EDhk06PpinBsNm79K7fw2d8g-auPEI8iCufYyMB-Hk3TNl8ZHiI3-8tBXia1hTSPsI4NHO4AVvYvpNdqowUAJPmGDOaHYuvLgmVUYjkOuwAglORBrrgC-j-PTtYG1BW0GUQIrMgAhBxQWeqF0v0D-zGsxqgG_zUDUoVJgxSsZQ0wrD-QP5db_Np1tFDuh7k0DVmSp6n5QzCvMJs7E1j6FGlDiKXxdt9dUF1U9HYLDHOtKEgbA",
    imageAlt: "Yürüyen merdiven sistemleri teknik çizim",
    tags: ["EN115", "Standartlar", "YürüyenMerdiven"],
    readingTime: 9,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. EN 115 Standardına Genel Bakış</h2>
      <p>EN 115 standardı, yürüyen merdiven ve yürüyen bant sistemlerinin güvenlik gereksinimlerini belirleyen Avrupa Birliği standardıdır. Bu standardın son revizyonu, özellikle acil durum fren sistemleri ve güvenlik sensörleri konusunda önemli güncellemeler içermektedir.</p>
      
      <h2>2. Temel Güvenlik Gereksinimleri</h2>
      <p>Standardın temel gereksinimleri şunları içermektedir:</p>
      <ul>
        <li>Acil durum fren sistemleri ve test prosedürleri</li>
        <li>Güvenlik fotoselleri ve sensör yerleşimleri</li>
        <li>Yük kapasitesi ve trafik analizi kriterleri</li>
        <li>Periyodik kontrol ve bakım gereksinimleri</li>
      </ul>
      
      <h2>3. Son Güncellemeler ve Değişiklikler</h2>
      <p>2023 yılında yayınlanan revizyon, özellikle IoT entegrasyonu ve uzaktan izleme sistemleri konusunda yeni gereksinimler getirmiştir.</p>
    `,
  },
  {
    id: "9",
    slug: "asansor-kabin-modernizasyonu-tasarim-rehberi",
    title: "Asansör Kabin Modernizasyonu: Tasarım ve Uygulama Rehberi",
    description:
      "Eski asansör kabinlerinin modern tasarım prensipleriyle yenilenmesi, malzeme seçimi ve estetik iyileştirmeler hakkında kapsamlı rehber.",
    category: "modernization",
    date: "25 Ekim 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkzSJcx8LphmXZYblHxZt7mlEx-rsL6TArrTBR99--qXLuDOdh8lic3fVb5S9pgxpNWJHdSMvrtON6qWQZlz-VykTDzBADYo04EZgPrng2iSFVCm-iUuQ6didKN17w3jQM6FWo_5EdSPJKvS39_ykqHdaMpdLSMUTZL5Yd59GJqmF2XL5kZdh9zgrtmZpww7grnMqEyaajFhzLCzgmvF0vXcyBXg-a1qeYVS2LVN8lFLM4Xuw82U5PjvAs6iFEIO5OTn446mD1aRA",
    imageAlt: "Modern asansör kabin içi tasarım",
    tags: ["Modernizasyon", "Tasarım", "Kabin"],
    readingTime: 11,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Modernizasyon Planlaması</h2>
      <p>Asansör kabin modernizasyonu, binanın mimari karakterine uygun olarak planlanmalıdır. İlk adım olarak mevcut kabin ölçüleri ve yapısal durumu değerlendirilmelidir.</p>
      
      <h2>2. Malzeme Seçimi</h2>
      <p>Modern kabin tasarımlarında kullanılan başlıca malzemeler:</p>
      <ul>
        <li>Paslanmaz çelik paneller ve dekoratif uygulamalar</li>
        <li>Cam ve ayna kombinasyonları</li>
        <li>Ahşap kaplamalar ve doğal taş uygulamaları</li>
        <li>LED aydınlatma sistemleri</li>
      </ul>
      
      <h2>3. Uygulama Aşamaları</h2>
      <p>Modernizasyon süreci, ölçüm ve tasarım aşamasından başlayarak montaj ve test aşamasına kadar sistematik olarak yürütülmelidir.</p>
    `,
  },
  {
    id: "10",
    slug: "asansor-kumanda-panolari-bakim-ve-ariza-giderme",
    title: "Asansör Kumanda Panoları: Bakım ve Arıza Giderme",
    description:
      "Mikroişlemci tabanlı kumanda panolarının periyodik bakımı, yaygın arızalar ve çözüm yöntemleri hakkında teknik bilgiler.",
    category: "maintenance",
    date: "18 Ekim 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCboaMQayjXmx4qif-FOAZcoDgzlnLEIUc0IoJyYcedL6RGCiitvrxx-ECmFQix-_DM7XascE1teTaicntqR5WqpmeGZGihUmlcWHS5UACznnMBi7jL7e2h6N9TGDtbQeYc82ABxiNkqcTkBv_JHx5Qr9ooz84B49L2VSFQA9k3zOx0Fzn9ruMUw-BMlktDq2Yz4Oms3RnseBM28s2GpVRxEM3-JEao9hQVKFota8Ef8a2JQbwDxwCop5IU3b5z6kIlw7bKhfDBasU",
    imageAlt: "Asansör kumanda panosu teknik bakım",
    tags: ["KumandaPanosu", "Bakım", "ArızaGiderme"],
    readingTime: 7,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Kumanda Panosu Bakım Programı</h2>
      <p>Kumanda panolarının düzenli bakımı, sistem güvenilirliği ve ömrü açısından kritik öneme sahiptir. Aylık, üç aylık ve yıllık bakım programları uygulanmalıdır.</p>
      
      <h2>2. Yaygın Arızalar ve Çözümleri</h2>
      <p>En sık karşılaşılan arızalar:</p>
      <ul>
        <li>Kontaktör arızaları ve çözüm yöntemleri</li>
        <li>Güç kaynağı problemleri</li>
        <li>Komünikasyon hataları ve CANbus sorunları</li>
        <li>Yazılım güncellemeleri ve parametre ayarları</li>
      </ul>
      
      <h2>3. Önleyici Bakım Stratejileri</h2>
      <p>Kestirimci bakım teknolojileri ile arızaların önceden tespit edilmesi mümkündür.</p>
    `,
  },
  {
    id: "11",
    slug: "yapay-zeka-destekli-asansor-trafik-yonetimi",
    title: "Yapay Zeka Destekli Asansör Trafik Yönetimi",
    description:
      "Makine öğrenmesi algoritmaları ile optimize edilmiş trafik yönetim sistemleri, bekleme süresi azaltma ve enerji verimliliği artırma stratejileri.",
    category: "technologies",
    date: "10 Ekim 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpeoMorWwb235JpUHJbyoBDdMWFnvuLdtqVe9P6dBBvkwsZG-WT5Seq9riH0A4xy5McUTCMXLwoer8jmZ5sn-HmyhL3LGja6Fm_QLNTsQ4J9ktXGthKuPCX_lqKpXidA7O6LSPp--Xi10hAEqwRS0d-c9R7EqYx8OiSldyTRX2XVyD49B3Dm0FoxJqZwdE04-1V783gtetAZNw5et_IdRD0Mu3JdiuK7WKjn-QmzYMJ5UT09wZKvmCXw3tcDkssJ_rIMG8X1cmO90",
    imageAlt: "Yapay zeka destekli asansör kontrol sistemi",
    tags: ["YapayZeka", "TrafikYönetimi", "YeniTeknolojiler"],
    readingTime: 8,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Yapay Zeka ve Trafik Yönetimi</h2>
      <p>Modern asansör sistemlerinde yapay zeka teknolojileri, trafik akışını optimize ederek bekleme sürelerini %30'a varan oranlarda azaltabilmektedir.</p>
      
      <h2>2. Makine Öğrenmesi Algoritmaları</h2>
      <p>Sistem, kullanım kalıplarını öğrenerek:</p>
      <ul>
        <li>Yoğun saatlerde otomatik trafik optimizasyonu</li>
        <li>Bekleme süresi tahminleri</li>
        <li>Enerji tüketimi optimizasyonu</li>
        <li>Kestirimci bakım uyarıları</li>
      </ul>
      
      <h2>3. Uygulama Örnekleri</h2>
      <p>Yüksek katlı binalarda ve AVM'lerde uygulanan başarılı örnekler incelenmektedir.</p>
    `,
  },
  {
    id: "12",
    slug: "asansor-halat-sistemleri-ve-bakim-kriterleri",
    title: "Asansör Halat Sistemleri ve Bakım Kriterleri",
    description:
      "Halat sistemlerinin periyodik kontrolü, aşınma kriterleri, değişim zamanlaması ve güvenlik standartları hakkında detaylı teknik bilgiler.",
    category: "maintenance",
    date: "3 Ekim 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvJJ8xNPAPaZ6KMlDytTMyOv27UqwZKqHA8lge2yE9WApziochSTQ3rgSSDnCrXSTLIFCG3RTZvatOFQ2bhQAnenp_wAEwFLGvKm9FgShmMtphT3JWi-Y_fPUMIdKR8uaJ-FbqmMlmKpB1EfQItUed_RK1ROvqFJNy6R7f14h6y4BGSv1U_j3qivL8eivA2CsNjV6eQlilVihu7XLdKqyrMfmo2UpWccz0gSpKbbVSI0CrGfGs1N4No0yFdqFcDGhr7Xf-Rk8K7A4",
    imageAlt: "Asansör halat sistemi teknik inceleme",
    tags: ["HalatSistemi", "Bakım", "Güvenlik"],
    readingTime: 6,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Halat Sistemleri Genel Bakış</h2>
      <p>Asansör halat sistemleri, kabin ve karşı ağırlığın güvenli bir şekilde taşınmasından sorumludur. Düzenli kontrol ve bakım kritik öneme sahiptir.</p>
      
      <h2>2. Periyodik Kontrol Kriterleri</h2>
      <p>Halat kontrolünde dikkat edilmesi gereken noktalar:</p>
      <ul>
        <li>Halat çapı ölçümleri ve toleranslar</li>
        <li>Aşınma ve kırılma kontrolü</li>
        <li>Halat gerilimi ve dengeleme</li>
        <li>Makara ve kasnak kontrolü</li>
      </ul>
      
      <h2>3. Değişim Kriterleri</h2>
      <p>EN 81-20 standardına göre halat değişim kriterleri ve zamanlaması belirlenmektedir.</p>
    `,
  },
  {
    id: "13",
    slug: "ce-sertifikasyonu-ve-uygunluk-degerlendirmesi",
    title: "CE Sertifikasyonu ve Uygunluk Değerlendirmesi",
    description:
      "Asansör ve yürüyen merdiven sistemleri için CE işareti alma süreci, uygunluk değerlendirmesi ve teknik dosya hazırlama rehberi.",
    category: "standards",
    date: "28 Eylül 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0YXaDUOU0bMyDaNsn0Jz9gUf2wPpQ-rEsmHGEM9cBfjykuwE7Ks_ZI7g1XG8aUyVO0Fsyvtg-bUrq7fpVhyVnJlIT3nTtE4K-U-dH174NJDQZFPUA_ienG5ggCnk189vcySGZ3j0IZxHDiWziMFeswJw03PlI2Ap99BxJ6fveQoSAlwJnfpzfK43IXSInV3Z29V4-JXLBByYMY4ocorKsbsLtlbfNrIP4Qt3dE7B_oAQ5CnFnskO0djYDWxTPiVTZ2dGnrmsmSqk",
    imageAlt: "CE sertifikasyonu ve uygunluk belgeleri",
    tags: ["CESertifikasyonu", "Standartlar", "Uygunluk"],
    readingTime: 10,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. CE İşareti ve Önemi</h2>
      <p>CE işareti, ürünün Avrupa Birliği güvenlik, sağlık ve çevre koruma gereksinimlerine uygun olduğunu gösterir.</p>
      
      <h2>2. Uygunluk Değerlendirme Süreci</h2>
      <p>Süreç şu aşamalardan oluşur:</p>
      <ul>
        <li>Teknik dosya hazırlama</li>
        <li>Uygunluk değerlendirme kuruluşu seçimi</li>
        <li>Test ve sertifikasyon</li>
        <li>CE işareti uygulaması</li>
      </ul>
      
      <h2>3. Teknik Dosya İçeriği</h2>
      <p>Teknik dosyada yer alması gereken belgeler ve dokümantasyon detayları.</p>
    `,
  },
  {
    id: "14",
    slug: "asansor-kapisi-modernizasyonu-ve-güvenlik-sistemleri",
    title: "Asansör Kapısı Modernizasyonu ve Güvenlik Sistemleri",
    description:
      "Otomatik kapı sistemlerinin modernizasyonu, güvenlik fotoselleri, kapı operatörleri ve EN 81-20 uyumluluk gereksinimleri.",
    category: "modernization",
    date: "22 Eylül 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDI_KoT2p2cIZMM9__rjq-i9Z1dWdRhkJdZIax0HzWmLR1py6fmRmepBsd1D49eNo6o-eS5l1wKaaqm-dR4h4pjPFjPoOmOEotJV17WeqRw-OR0GNog323U9rgWl2iD2MuPLV-sp59n814wt8X7V2uSYeM-gyjuOUOZiKPFJRluo4YjkGMXAsZuIdzkRqlFrewyzNgV5A5Ut38OKSX-GAQR6VqiRObIDQQP78QFLrIr1jSNZkX8iH3NgAT-lO0Ju2RlNuZ75c9wJyo",
    imageAlt: "Modern asansör kapı sistemi",
    tags: ["KapıSistemi", "Modernizasyon", "Güvenlik"],
    readingTime: 9,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Kapı Modernizasyonu Gereksinimleri</h2>
      <p>Eski kapı sistemlerinin modernizasyonu, güvenlik ve konfor açısından kritik öneme sahiptir.</p>
      
      <h2>2. Güvenlik Sistemleri</h2>
      <p>Modern kapı sistemlerinde kullanılan güvenlik özellikleri:</p>
      <ul>
        <li>Çoklu fotosel sistemleri</li>
        <li>Kapı operatörü güvenlik modülleri</li>
        <li>Acil durum açma mekanizmaları</li>
        <li>Kapı kilit sistemleri</li>
      </ul>
      
      <h2>3. Uygulama ve Test</h2>
      <p>Modernizasyon sonrası güvenlik testleri ve uygunluk kontrolü süreçleri.</p>
    `,
  },
  {
    id: "15",
    slug: "asansor-terimleri-sozlugu-baslangic-seviyesi",
    title: "Asansör Terimleri Sözlüğü: Başlangıç Seviyesi",
    description:
      "Asansör mühendisliğine yeni başlayanlar için temel terimler, kavramlar ve açıklamalar. Regülatörden kuyu dibi tamponuna kadar.",
    category: "glossary",
    date: "15 Eylül 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFuFsXwkbGUzuTCAPXdBfRJunHmSKAwcxXi4fJi2E4pDMnOW81gwNjABepc1_Z6-ptLi2unTmD0H5IW86VP-EUF1X7T5Qnw5-cRFOUfYYGZK6DE0p-LdHnVFWP7jszWjFij6bfGg9bmn98_mo9-04TJ6gndNOWttU4JkoK2Ye6jG_Vvnbkk4s1Lu1SzEnoeK0pK59Tpcg4IktaXOh3U5J-Xc9IsF38Aq3shIX5LtUviTOMjtxWhbejgYAsGo69xI-W1mS8tOFe2I8",
    imageAlt: "Teknik terimler sözlüğü görsel",
    tags: ["TeknikSözlük", "Eğitim", "Başlangıç"],
    readingTime: 12,
    author: "Mühendislik Departmanı",
    content: `
      <h2>A - D Harfleri</h2>
      <p><strong>Asansör Kuyusu:</strong> Asansörün hareket ettiği dikey boşluk.</p>
      <p><strong>Bobin:</strong> Elektromanyetik fren sisteminin parçası.</p>
      <p><strong>Dengeleme Katsayısı:</strong> Karşı ağırlık ve kabin ağırlığı oranı.</p>
      
      <h2>E - K Harfleri</h2>
      <p><strong>Fotosel:</strong> Kapı güvenlik sensörü.</p>
      <p><strong>Halat:</strong> Kabin ve karşı ağırlığı taşıyan çelik halat.</p>
      <p><strong>Kabin:</strong> Yolcuların ve yüklerin taşındığı bölüm.</p>
      
      <h2>L - Z Harfleri</h2>
      <p><strong>Regülatör:</strong> Hız sınırlama cihazı.</p>
      <p><strong>Tampon:</strong> Kuyu dibi ve üstü güvenlik elemanları.</p>
    `,
  },
  {
    id: "16",
    slug: "rejeneratif-suruculer-ve-enerji-geri-kazanim",
    title: "Rejeneratif Sürücüler ve Enerji Geri Kazanımı",
    description:
      "Rejeneratif frekans inverterlerinin çalışma prensipleri, enerji geri kazanım sistemleri ve ekonomik analiz.",
    category: "technologies",
    date: "8 Eylül 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdLiZ4etobPgaqAQ0n3Z8fNrw8IPo3148NUcFpeqYCtws3cpcxpHDA06wznpD2PP2DyAiLpeq1_N-Of2G-1f6iejeFyypRRAGcOC1FUKRA8Ogavn6vxwLurvI9wGLeENAZFpI9WSs5KRfnMow-XDUcL0uKe163ovpjKzht9tKWiOjeEc5pBlS377eEjdl4f0PWma5nrodrloXpz27llTn_FMTTHGiJThqL9uHt5aovwzXzJqeAElNB2iqWLZACPJEoITLTsx6Snfc",
    imageAlt: "Rejeneratif sürücü sistemi",
    tags: ["Rejeneratif", "EnerjiVerimliliği", "Teknoloji"],
    readingTime: 7,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Rejeneratif Sistemlerin Çalışma Prensibi</h2>
      <p>Rejeneratif sürücüler, asansörün aşağı inerken ürettiği enerjiyi şebekeye geri aktararak %40'a varan enerji tasarrufu sağlar.</p>
      
      <h2>2. Teknik Özellikler</h2>
      <p>Sistem özellikleri:</p>
      <ul>
        <li>Geri besleme kapasitesi ve şebeke uyumluluğu</li>
        <li>Harmonik filtreleme ve güç kalitesi</li>
        <li>Kontrol algoritmaları</li>
      </ul>
      
      <h2>3. Ekonomik Analiz</h2>
      <p>Yatırım geri dönüş süresi ve enerji maliyeti analizleri.</p>
    `,
  },
  {
    id: "17",
    slug: "asansor-periyodik-kontrol-hazirlik-rehberi",
    title: "Asansör Periyodik Kontrol Hazırlık Rehberi",
    description:
      "Fenni muayene öncesi yapılması gereken hazırlıklar, kontrol listesi ve dikkat edilmesi gereken noktalar.",
    category: "maintenance",
    date: "1 Eylül 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzVkCB3rtlqnCd-MjBp4EjO3q-kpwa90BjHlOMxzBCqUb_6vjHuQseHhgzlb7be5esw2dRSazopH7QEOAnh--dpQflCF4VfiobO9NKIeRUQ6XBmmmp1tEEOVFwM7K08qPDgvJAvg6wBiNRbYAm_wwWt0EXGErwLCi0uMvUo_e64J9AtwogwnGR5LnjZgy0tzZtgZoWdI2-Dgeo34Nvjh5ERVhW_HxVQ4iDCMLfQ52DHO76sMYGi8p3Vh-JksAuJMWIxURUY-j1cU8",
    imageAlt: "Asansör periyodik kontrol hazırlığı",
    tags: ["PeriyodikKontrol", "FenniMuayene", "Bakım"],
    readingTime: 5,
    author: "Mühendislik Departmanı",
    content: `
      <h2>1. Kontrol Öncesi Hazırlık</h2>
      <p>Periyodik kontrol öncesi yapılması gereken hazırlıklar ve kontrol listesi.</p>
      
      <h2>2. Kontrol Edilecek Sistemler</h2>
      <ul>
        <li>Güvenlik sistemleri ve fren testleri</li>
        <li>Kapı sistemleri ve güvenlik fotoselleri</li>
        <li>Kumanda panosu ve elektrik sistemleri</li>
        <li>Mekanik sistemler ve halat kontrolü</li>
      </ul>
      
      <h2>3. Dokümantasyon</h2>
      <p>Hazırlanması gereken belgeler ve teknik dosya içeriği.</p>
    `,
  },
];

/**
 * Kategori etiketlerini döndürür
 */
export const categoryLabels: Record<BlogCategory, string> = {
  all: "Tümü",
  standards: "Standartlar & Mevzuat",
  modernization: "Modernizasyon Rehberi",
  maintenance: "Teknik Bakım",
  technologies: "Yeni Teknolojiler",
  glossary: "Teknik Sözlük",
};

/**
 * Slug'a göre blog bulma fonksiyonu
 */
export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

/**
 * İlgili blogları döndürür (aynı kategori, mevcut blog hariç)
 */
export function getRelatedBlogs(currentBlogId: string, category: BlogCategory, limit: number = 3): Blog[] {
  return blogs
    .filter((blog) => blog.id !== currentBlogId && blog.category === category)
    .slice(0, limit);
}
