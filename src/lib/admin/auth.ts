import { cookies } from "next/headers";

/**
 * Admin kullanıcı bilgileri için tip tanımı
 */
export interface AdminUser {
  username: string;
  password: string;
}

/**
 * Session token kontrolü
 * @returns boolean - Kullanıcı giriş yapmış mı?
 */
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");
  return token?.value === process.env.ADMIN_SESSION_TOKEN;
}

/**
 * Kullanıcı giriş doğrulama
 * @param username - Kullanıcı adı
 * @param password - Şifre
 * @returns boolean - Giriş başarılı mı?
 */
export async function authenticate(
  username: string,
  password: string
): Promise<boolean> {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    console.error("Admin credentials not configured in .env");
    return false;
  }

  return username === adminUsername && password === adminPassword;
}

/**
 * Session token oluşturma
 * @returns string - Session token
 */
export function createSessionToken(): string {
  return process.env.ADMIN_SESSION_TOKEN || "admin_session_" + Date.now();
}

/**
 * Session token'ı cookie'ye kaydetme
 * @param token - Session token
 */
export async function setSessionToken(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 gün
    path: "/",
  });
}

/**
 * Session token'ı silme (logout)
 */
export async function clearSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
}
