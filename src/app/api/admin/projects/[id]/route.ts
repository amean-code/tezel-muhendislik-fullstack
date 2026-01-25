import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin/auth";
import { getProjectById, updateProject, deleteProject } from "@/lib/admin/storage";
import type { Project } from "@/data/projects";

/**
 * Proje güncelleme
 * PUT /api/admin/projects/[id]
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    const { id } = await params;
    const body: Partial<Omit<Project, "id">> = await request.json();

    const project = await updateProject(id, body);

    if (!project) {
      return NextResponse.json({ error: "Proje bulunamadı" }, { status: 404 });
    }

    return NextResponse.json({ success: true, project });
  } catch (error) {
    console.error("Update project error:", error);
    return NextResponse.json(
      { error: "Proje güncellenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}

/**
 * Proje silme
 * DELETE /api/admin/projects/[id]
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    const { id } = await params;
    const success = await deleteProject(id);

    if (!success) {
      return NextResponse.json({ error: "Proje bulunamadı" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Proje silindi" });
  } catch (error) {
    console.error("Delete project error:", error);
    return NextResponse.json(
      { error: "Proje silinirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
