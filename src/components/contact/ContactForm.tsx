"use client";

import { serviceTypes, contactInfo } from "@/data/contact";
import { useState } from "react";

/**
 * Gmail compose URL'si oluşturur (tarayıcıda Gmail yeni mail penceresi açmak için).
 */
function buildGmailComposeUrl(params: {
  to: string;
  subject: string;
  body: string;
}) {
  const searchParams = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: params.to,
    su: params.subject,
    body: params.body,
  });

  return `https://mail.google.com/mail/?${searchParams.toString()}`;
}

/**
 * Form verilerinden WhatsApp mesaj metnini üretir.
 */
function buildWhatsAppMessage(formData: {
  fullname: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}) {
  const lines = [
    "Merhaba, web siteniz üzerinden hızlı teklif talebinde bulunmak istiyorum.",
    "",
    `Ad Soyad: ${formData.fullname}`,
    `E-posta: ${formData.email}`,
    `Telefon: ${formData.phone}`,
    `Hizmet/Ürün Türü: ${formData.serviceType}`,
    "",
    "Mesajım:",
    formData.message,
  ];

  return lines.join("\n");
}

/**
 * WhatsApp hızlı teklif linkini oluşturur.
 */
function buildWhatsAppUrl(message: string) {
  const phone = contactInfo.whatsapp.number;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * ContactForm komponenti - Teklif talep formu
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  /**
   * Form verilerinden e-posta konu ve gövdesini hazırlar.
   */
  const buildMailContent = () => {
    const subject = `Teklif Talebi - ${formData.fullname || "İsimsiz"} - ${
      formData.serviceType || "Hizmet seçilmedi"
    }`;

    const lines = [
      "Yeni bir teklif talebi alındı:",
      "",
      `Ad Soyad: ${formData.fullname}`,
      `E-posta: ${formData.email}`,
      `Telefon: ${formData.phone}`,
      `Hizmet/Ürün Türü: ${formData.serviceType}`,
      "",
      "Mesaj:",
      formData.message,
    ];

    const body = lines.join("\n");

    return { subject, body };
  };

  /**
   * Form gönderiminde Gmail üzerinden yeni e-posta penceresi açar.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { subject, body } = buildMailContent();
    const to = contactInfo.email.primary;

    // Kullanıcı Gmail kullanıyorsa yeni sekmede compose ekranını açıyoruz.
    const gmailUrl = buildGmailComposeUrl({ to, subject, body });
    if (typeof window !== "undefined") {
      window.open(gmailUrl, "_blank");
    }
  };

  /**
   * Form alanlarını state ile günceller.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="lg:col-span-7">
      <div className="bg-white border border-gray-200 p-8 md:p-10 shadow-sm h-full flex flex-col">
        <h3 className="text-primary text-2xl font-bold mb-2">Teklif Talep Formu</h3>
        <p className="text-gray-500 mb-8 text-sm">
          Projeniz için en uygun çözümü sunabilmemiz adına lütfen formu doldurun.
        </p>
        <form action="#" className="space-y-5" method="POST" onSubmit={handleSubmit}>
          {/* Ad Soyad */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 block" htmlFor="fullname">
              Ad Soyad
            </label>
            <input
              className="w-full border-gray-300 focus:border-accent focus:ring-accent rounded-sm shadow-sm py-3 px-4 bg-gray-50 placeholder-gray-400 transition-colors"
              id="fullname"
              name="fullname"
              placeholder="Adınız ve Soyadınız"
              type="text"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          {/* E-posta ve Telefon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 block" htmlFor="email">
                E-posta
              </label>
              <input
                className="w-full border-gray-300 focus:border-accent focus:ring-accent rounded-sm shadow-sm py-3 px-4 bg-gray-50 placeholder-gray-400 transition-colors"
                id="email"
                name="email"
                placeholder="ornek@sirket.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 block" htmlFor="phone">
                Telefon
              </label>
              <input
                className="w-full border-gray-300 focus:border-accent focus:ring-accent rounded-sm shadow-sm py-3 px-4 bg-gray-50 placeholder-gray-400 transition-colors"
                id="phone"
                name="phone"
                placeholder="+90 (___) ___ __ __"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Hizmet Türü */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 block" htmlFor="service-type">
              Hizmet/Ürün Türü
            </label>
            <div className="relative">
              <select
                className="w-full border-gray-300 focus:border-accent focus:ring-accent rounded-sm shadow-sm py-3 px-4 bg-gray-50 text-gray-700 appearance-none cursor-pointer"
                id="service-type"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option disabled value="">
                  Lütfen bir hizmet seçiniz
                </option>
                {serviceTypes.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          {/* Mesaj */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 block" htmlFor="message">
              Mesajınız
            </label>
            <textarea
              className="w-full border-gray-300 focus:border-accent focus:ring-accent rounded-sm shadow-sm py-3 px-4 bg-gray-50 placeholder-gray-400 transition-colors"
              id="message"
              name="message"
              placeholder="Projeniz hakkında kısa bilgi veriniz..."
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Butonu */}
          <div className="pt-4">
            <button
              className="w-full bg-accent hover:bg-[#d97b20] text-white text-lg font-bold py-4 px-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              type="submit"
            >
              <span>Teklif Talep Et</span>
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </form>

        {/* Alternatif Teklif Kanalları */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
            Alternatif Teklif Kanalları
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <button
              className="flex items-center justify-center gap-2 bg-primary hover:bg-[#082230] text-white py-3 px-4 rounded-sm transition-all group"
              type="button"
              onClick={() => {
                const message = buildWhatsAppMessage(formData);
                const url = buildWhatsAppUrl(message);
                if (typeof window !== "undefined") {
                  window.open(url, "_blank");
                }
              }}
            >
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                chat
              </span>
              <span className="font-medium">WhatsApp ile Hızlı Teklif</span>
            </button>
            <a
              className="flex items-center justify-center gap-2 border border-gray-300 hover:border-accent hover:text-accent text-gray-600 py-3 px-4 rounded-sm transition-all group"
              href={`mailto:${contactInfo.email.primary}`}
            >
              <span className="material-symbols-outlined text-xl group-hover:text-accent transition-colors">
                alternate_email
              </span>
              <span className="font-medium">{contactInfo.email.primary}</span>
            </a>
            <a
              className="flex items-center justify-center gap-2 border border-gray-300 hover:border-accent hover:text-accent text-gray-600 py-3 px-4 rounded-sm transition-all group"
              href={`mailto:${contactInfo.email.sales}`}
            >
              <span className="material-symbols-outlined text-xl group-hover:text-accent transition-colors">
                alternate_email
              </span>
              <span className="font-medium">{contactInfo.email.sales}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
