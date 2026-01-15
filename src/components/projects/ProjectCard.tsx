import Image from "next/image";
import { Project, categoryLabels } from "@/data/projects";

/**
 * ProjectCard komponenti - Tek bir proje kartı
 */
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-gray-300">
      {/* Resim Bölümü */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <div className="absolute right-3 top-3 z-10 rounded bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {categoryLabels[project.category]}
        </div>
        <div className="h-full w-full relative">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      </div>

      {/* İçerik Bölümü */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-primary group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <span className="material-symbols-outlined text-[18px]">location_on</span>
          <span>{project.location}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
          <span className="material-symbols-outlined text-[18px]">settings</span>
          <span>{project.equipment}</span>
        </div>
      </div>

      {/* Alt Çizgi */}
      <div className="h-[3px] w-full scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"></div>
    </div>
  );
}
