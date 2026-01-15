"use client";

import { useEffect, useState } from "react";

/**
 * Başlık tipi
 */
interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

/**
 * HTML içeriğinden başlıkları çıkarır (h2 ve h3)
 */
function extractHeadings(htmlContent: string): Heading[] {
  if (!htmlContent) return [];

  const headings: Heading[] = [];
  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const h3Regex = /<h3[^>]*>(.*?)<\/h3>/gi;

  // H2 başlıklarını bul
  let match;
  while ((match = h2Regex.exec(htmlContent)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, "").trim();
    if (text) {
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      headings.push({ id, text, level: 2 });
    }
  }

  // H3 başlıklarını bul
  while ((match = h3Regex.exec(htmlContent)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, "").trim();
    if (text) {
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      headings.push({ id, text, level: 3 });
    }
  }

  return headings;
}

/**
 * İçindekiler komponenti - Makale başlıklarını gösterir
 */
export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    if (content) {
      const extractedHeadings = extractHeadings(content);
      setHeadings(extractedHeadings);
    }
  }, [content]);

  if (headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded p-6 shadow-sm">
      <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
        İçindekiler
      </h4>
      <nav className="flex flex-col gap-3 text-sm">
        {headings.map((heading, index) => (
          <a
            key={index}
            className={`text-gray-600 hover:text-primary transition-colors flex items-center gap-2 ${
              heading.level === 2 ? "text-primary font-medium" : "pl-4"
            }`}
            href={`#${heading.id}`}
            onClick={(e) => handleClick(e, heading.id)}
          >
            {heading.level === 2 && <span className="size-1.5 rounded-full bg-primary"></span>}
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
