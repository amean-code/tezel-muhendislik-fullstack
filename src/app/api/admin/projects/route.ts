import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin/auth";
import { readProjects, createProject } from "@/lib/admin/storage";
import type { Project } from "@/data/projects";

/**
 * Projeleri listeleme
 * GET /api/admin/projects
 */
export async function GET(request: NextRequest) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    let projects = await readProjects();

    // Filtreleme
    if (search) {
      projects = projects.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.location.toLowerCase().includes(search.toLowerCase()) ||
          p.equipment.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category && category !== "all") {
      projects = projects.filter((p) => p.category === category);
    }

    // Sayfalama
    const total = projects.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedProjects = projects.slice(start, end);

    return NextResponse.json({
      projects: paginatedProjects,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get projects error:", error);
    return NextResponse.json(
      { error: "Projeler getirilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}

/**
 * Yeni proje oluşturma
 * POST /api/admin/projects
 */
export async function POST(request: NextRequest) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    const body: Omit<Project, "id"> = await request.json();
    const project = await createProject(body);

    return NextResponse.json({ success: true, project }, { status: 201 });
  } catch (error) {
    console.error("Create project error:", error);
    return NextResponse.json(
      { error: "Proje oluşturulurken bir hata oluştu" },
      { status: 500 }
    );
  }
}
