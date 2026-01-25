import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin/auth";

/**
 * Admin ana sayfası - Ürün yönetimine yönlendirir
 */
export default async function AdminDashboardPage() {
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    redirect("/admin/login");
  }

  redirect("/admin/urunler");
}
