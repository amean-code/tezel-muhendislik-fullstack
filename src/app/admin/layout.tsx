import { isAuthenticated } from "@/lib/admin/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";

/**
 * Admin paneli layout - Tüm admin sayfaları için ortak layout
 */
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Login sayfası hariç diğer sayfalar için authentication kontrolü
  const authenticated = await isAuthenticated();

  return (
    <div className="min-h-screen flex">
      {authenticated && <AdminSidebar />}
      <main className="flex-1 flex flex-col min-w-0">{children}</main>
    </div>
  );
}
