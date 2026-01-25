"use client";

import { Project, ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useState, useEffect, useMemo } from "react";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * ProjectsGrid komponenti - Proje kartları grid'i
 */
interface ProjectsGridProps {
  projects: Project[];
  activeCategory: ProjectCategory;
}

export default function ProjectsGrid({ projects, activeCategory }: ProjectsGridProps) {
  const [showAll, setShowAll] = useState(false);

  // Kategoriye göre projeleri filtrele
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  // Kategori değiştiğinde showAll'u sıfırla
  useEffect(() => {
    setShowAll(false);
  }, [activeCategory]);

  return (
    <>
      <div className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project, index) => (
              <AnimatedCard key={project.id} index={index}>
                <ProjectCard project={project} />
              </AnimatedCard>
            ))}
          </div>

          {/* Load More Butonu */}
          {filteredProjects.length > 6 && !showAll && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="flex items-center gap-2 rounded border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span>Daha Fazla Göster</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
