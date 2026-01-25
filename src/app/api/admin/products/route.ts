import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin/auth";
import {
  readProducts,
  createProduct,
} from "@/lib/admin/storage";
import type { Product } from "@/data/products";

/**
 * Ürünleri listeleme
 * GET /api/admin/products
 */
export async function GET(request: NextRequest) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const inStockParam = searchParams.get("inStock");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    let products = await readProducts();

    // Filtreleme
    if (search) {
      products = products.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.slug.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      products = products.filter((p) => p.category === category);
    }

    if (inStockParam !== null && inStockParam !== "") {
      const inStock = inStockParam === "true";
      products = products.filter((p) => p.inStock === inStock);
    }

    // Sayfalama
    const total = products.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedProducts = products.slice(start, end);

    return NextResponse.json({
      products: paginatedProducts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get products error:", error);
    return NextResponse.json(
      { error: "Ürünler getirilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}

/**
 * Yeni ürün oluşturma
 * POST /api/admin/products
 */
export async function POST(request: NextRequest) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    const body: Omit<Product, "id"> = await request.json();
    const product = await createProduct(body);

    return NextResponse.json({ success: true, product }, { status: 201 });
  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json(
      { error: "Ürün oluşturulurken bir hata oluştu" },
      { status: 500 }
    );
  }
}
