"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Admin login sayfası
 */
export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Login form gönderme fonksiyonu
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/admin/urunler");
        router.refresh();
      } else {
        setError(data.error || "Giriş başarısız");
      }
    } catch (err) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light">
      <div className="w-full max-w-md p-8">
        <div className="bg-white border border-border-color shadow-sm p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="size-10 bg-primary text-white rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">engineering</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">TEZEL ADMIN</h1>
              <p className="text-sm text-gray-500">Yönetici Paneli</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Şifre
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-border-color rounded bg-background-light focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                required
                disabled={loading}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-orange hover:bg-[#d9791c] text-white px-6 py-3 rounded shadow-sm font-bold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Giriş yapılıyor..." : "GİRİŞ YAP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
