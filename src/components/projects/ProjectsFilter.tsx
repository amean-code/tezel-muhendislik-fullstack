"use client";

import { ProjectCategory, categoryLabels } from "@/data/projects";
import { useState } from "react";

/**
 * ProjectsFilter komponenti - Proje filtreleme bölümü
 */
interface ProjectsFilterProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export default function ProjectsFilter({ activeCategory, onCategoryChange }: ProjectsFilterProps) {
  const categories: ProjectCategory[] = ["all", "elevator-systems", "escalator", "modernization", "maintenance"];

  return (
    <div className="border-b border-gray-200 bg-white sticky top-20 z-40 shadow-sm">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto pb-px pt-1 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`group inline-flex flex-col items-center justify-center border-b-[3px] px-1 py-4 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "border-accent text-primary font-bold"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              <span>{categoryLabels[category]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
