import { NextResponse } from "next/server";
import { clearSession } from "@/lib/admin/auth";

/**
 * Admin logout API endpoint
 * POST /api/admin/logout
 */
export async function POST() {
  try {
    await clearSession();
    return NextResponse.json({ success: true, message: "Çıkış başarılı" });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Çıkış işlemi sırasında bir hata oluştu" },
      { status: 500 }
    );
  }
}
