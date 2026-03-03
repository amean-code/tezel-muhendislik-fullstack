"use client";

import Image from "next/image";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * ServiceScope komponenti - Hizmet kapsamı bölümü
 */
interface ScopeItem {
  icon: string;
  title: string;
  description: string;
  borderColor?: "primary" | "accent";
}

interface ServiceScopeProps {
  badge: string;
  title: string;
  description: string;
  items: ScopeItem[];
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  note?: {
    label: string;
    text: string;
  };
}

export default function ServiceScope({
  badge,
  title,
  description,
  items,
  image,
  imageAlt,
  imageFit = "cover",
  note,
}: ServiceScopeProps) {
  return (
    <section className="bg-background-light py-24 border-y border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
              {badge}
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-6">{title}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <AnimatedCard key={index} index={index}>
                  <div
                    className={`bg-white p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 h-full ${
                      item.borderColor === "accent" ? "border-accent" : "border-primary"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-3xl mb-3 ${
                        item.borderColor === "accent" ? "text-accent" : "text-primary"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 border border-primary/20"></div>
            <Image
              alt={imageAlt}
              src={image}
              fill
              className={`relative w-full h-full ${
                imageFit === "contain" ? "object-contain" : "object-cover"
              } shadow-xl z-10`}
            />
            {note && (
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur p-4 shadow-lg max-w-xs border-l-4 border-accent">
                <p className="text-xs font-bold uppercase text-gray-500 mb-1">{note.label}</p>
                <p className="text-sm font-medium text-primary">{note.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
