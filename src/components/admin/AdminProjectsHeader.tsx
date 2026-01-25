"use client";

interface AdminProjectsHeaderProps {
  onAddProject: () => void;
}

/**
 * Admin proje yönetimi sayfası header komponenti
 */
export default function AdminProjectsHeader({
  onAddProject,
}: AdminProjectsHeaderProps) {

  return (
    <header className="bg-white border-b border-border-color h-20 flex items-center justify-between px-8 shrink-0">
      <h1 className="text-2xl font-bold text-primary uppercase tracking-tight">
        Proje Yönetimi
      </h1>
      <div className="flex items-center gap-4">
        <button
          onClick={onAddProject}
          className="flex items-center gap-2 bg-brand-orange hover:bg-[#d9791c] text-white px-5 py-2.5 rounded shadow-sm font-bold text-sm transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          YENİ PROJE EKLE
        </button>
        <div className="h-8 w-[1px] bg-border-color mx-2"></div>
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
            Admin
          </div>
          <span className="text-sm font-medium">Yönetici</span>
        </div>
      </div>
    </header>
  );
}
