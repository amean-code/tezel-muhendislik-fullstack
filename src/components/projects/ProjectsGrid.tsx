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
          <div className="flex flex-col items-center justify-center py-24">
            <p className="text-xl font-bold text-gray-600 uppercase tracking-wide">
              Projelerimiz yakında sizlerle
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
