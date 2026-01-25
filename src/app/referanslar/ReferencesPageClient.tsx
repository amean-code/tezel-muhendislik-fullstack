"use client";

import { useState } from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import { ProjectCategory, projects } from "@/data/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";

/**
 * Referanslar sayfası client komponenti
 */
export default function ReferencesPageClient() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  return (
    <>
      <AnimatedSection animationType="fadeIn" delay={0}>
        <ProjectsHero />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={100}>
        <ProjectsFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={200}>
        <ProjectsGrid projects={projects} activeCategory={activeCategory} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={300}>
        <ProjectsCTA />
      </AnimatedSection>
    </>
  );
}
