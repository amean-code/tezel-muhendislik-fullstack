"use client";

import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * ServiceProcess komponenti - Teknik analiz süreci timeline
 */
interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  badge?: string;
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export default function ServiceProcess({ badge, title, subtitle, steps }: ServiceProcessProps) {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {badge && (
            <h2 className="text-accent text-sm font-bold uppercase tracking-wider mb-2">{badge}</h2>
          )}
          <h2 className="text-3xl font-display font-bold text-primary">{title}</h2>
          {subtitle && <p className="text-gray-500 mt-3">{subtitle}</p>}
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-300 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="flex flex-col items-center text-center group cursor-default">
                  <div
                    className={`w-20 h-20 bg-white border-4 border-white ring-2 flex items-center justify-center mb-6 shadow-lg z-10 transition-all ${
                      index === 0
                        ? "ring-accent"
                        : "ring-gray-300 group-hover:ring-accent group-hover:scale-110"
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl text-primary">{step.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 px-2">{step.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
