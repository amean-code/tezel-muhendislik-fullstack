"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AnimatedSection komponenti - Scroll animasyonları için wrapper
 */
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animationType?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn";
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
  animationType = "fadeInUp",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    fadeInUp: isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8",
    fadeIn: isVisible ? "animate-fadeIn" : "opacity-0",
    slideInLeft: isVisible ? "animate-slideInLeft" : "opacity-0 -translate-x-8",
    slideInRight: isVisible ? "animate-slideInRight" : "opacity-0 translate-x-8",
    scaleIn: isVisible ? "animate-scaleIn" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${animationClasses[animationType]} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * AnimatedCard komponenti - Kartlar için özel animasyon
 */
interface AnimatedCardProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

export function AnimatedCard({ children, index = 0, className = "" }: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "animate-fadeInUp opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
