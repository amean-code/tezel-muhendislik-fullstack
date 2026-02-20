"use client";

import Link from "next/link";
import Image from "next/image";
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
          <div className="size-10 flex items-center justify-center">
            <Image
              src="/tezel_logo_nobg.png"
              alt="Tezel Mühendislik Logo"
              width={40}
              height={40}
              className="object-contain"
            />
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
