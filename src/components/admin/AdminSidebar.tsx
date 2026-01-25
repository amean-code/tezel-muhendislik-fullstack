"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/**
 * Admin sidebar komponenti - Navigasyon menüsü
 */
export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Logout fonksiyonu
   */
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const menuItems = [
    { href: "/admin", label: "Panel Özeti", icon: "dashboard" },
    { href: "/admin/urunler", label: "Ürün Yönetimi", icon: "inventory_2" },
    { href: "/admin/projeler", label: "Proje Yönetimi", icon: "folder" },
    { href: "/admin/teknik-servis", label: "Teknik Servis", icon: "engineering" },
    { href: "/admin/kataloglar", label: "Kataloglar", icon: "description" },
    { href: "/admin/ayarlar", label: "Ayarlar", icon: "settings" },
  ];

  return (
    <aside className="w-64 bg-primary text-white flex-shrink-0 hidden lg:flex flex-col">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="size-8">
            <svg
              className="w-full h-full"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="font-bold tracking-tight">TEZEL ADMIN</span>
        </div>
      </div>
      <nav className="flex-1 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-6 py-3 text-sm transition-opacity ${
                isActive
                  ? "bg-white/10 border-l-4 border-brand-orange font-semibold"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <span className="material-symbols-outlined mr-3">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-6 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center px-6 py-3 text-sm opacity-70 hover:opacity-100 transition-opacity w-full text-left"
        >
          <span className="material-symbols-outlined mr-3">logout</span>
          Çıkış Yap
        </button>
        <div className="text-xs opacity-50 mt-4">© 2024 Tezel Mühendislik</div>
      </div>
    </aside>
  );
}
