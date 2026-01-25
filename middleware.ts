import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware - Admin route protection
 * Admin sayfalarına erişimi kontrol eder (login hariç)
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const adminToken = request.cookies.get("admin_token");

  // Admin login sayfasına herkes erişebilir
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Admin sayfalarına erişim kontrolü
  if (pathname.startsWith("/admin")) {
    // Token yoksa login'e yönlendir
    if (!adminToken) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
