import { NextRequest, NextResponse } from "next/server";
import { authenticate, setSessionToken, createSessionToken } from "@/lib/admin/auth";

/**
 * Admin login API endpoint
 * POST /api/admin/login
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "Kullanıcı adı ve şifre gereklidir" },
        { status: 400 }
      );
    }

    const isValid = await authenticate(username, password);

    if (!isValid) {
      return NextResponse.json(
        { error: "Kullanıcı adı veya şifre hatalı" },
        { status: 401 }
      );
    }

    const token = createSessionToken();
    await setSessionToken(token);

    return NextResponse.json({ success: true, message: "Giriş başarılı" });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Giriş işlemi sırasında bir hata oluştu" },
      { status: 500 }
    );
  }
}
