"use client";

import { useState } from "react";

/**
 * FAQSidebar komponenti - Sık Sorulan Sorular sayfası yan menü widget'ları
 */
export default function FAQSidebar() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  /**
   * Form gönderme fonksiyonu
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log("Form gönderildi:", formData);
  };

  /**
   * Form input değişikliklerini yönetir
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Soru Sorma Formu */}
        <div className="bg-primary rounded-lg p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-display font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined">support_agent</span>
              Bize Soru Sorun
            </h3>
            <p className="text-sm text-gray-300 mb-6 font-light">
              Aradığınız cevabı bulamadınız mı? Teknik ekibimize doğrudan sorabilirsiniz.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wide">
                  Ad Soyad
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="İsim Giriniz"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wide">
                  E-posta
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="ornek@mail.com"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wide">
                  Sorunuz
                </label>
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                  placeholder="Teknik sorunuzu buraya yazın..."
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full bg-white text-primary font-bold text-sm py-3 rounded hover:bg-gray-100 transition-colors shadow-md mt-2 flex items-center justify-center gap-2"
                type="submit"
              >
                Gönder <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Hızlı İletişim */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
            Hızlı İletişim
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded text-primary">
                <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Teknik Destek Hattı</p>
                <p className="text-sm font-bold text-gray-900">+90 (212) 555 00 00</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded text-primary">
                <span className="material-symbols-outlined text-[20px]">mark_email_unread</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">E-posta</p>
                <p className="text-sm font-bold text-gray-900">destek@tezel.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded text-primary">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Çalışma Saatleri</p>
                <p className="text-sm font-bold text-gray-900">Pzt - Cum: 08:30 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
