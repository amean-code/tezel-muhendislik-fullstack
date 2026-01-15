"use client";

import { useState } from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import { ProjectCategory, projects } from "@/data/projects";

/**
 * Referanslar sayfası client komponenti
 */
export default function ReferencesPageClient() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  return (
    <>
      <ProjectsHero />
      <ProjectsFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <ProjectsGrid projects={projects} activeCategory={activeCategory} />
      <ProjectsCTA />
    </>
  );
}
