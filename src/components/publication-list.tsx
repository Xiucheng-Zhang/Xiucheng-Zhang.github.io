"use client";

import { useMemo, useState } from "react";
import { Publication } from "@/data/publication";
import { PublicationEntry } from "./publication-entry";

export function PublicationList({
  publications,
}: {
  publications: Publication[];
}) {
  const tags = useMemo(
    () =>
      Array.from(new Set(publications.flatMap((p) => p.tags ?? []))).sort(),
    [publications]
  );
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? publications.filter((p) => p.tags?.includes(activeTag))
    : publications;

  return (
    <div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
          <button
            onClick={() => setActiveTag(null)}
            className={`text-xs tracking-wider uppercase transition-colors duration-300 ${
              activeTag === null
                ? "text-zinc-900 border-b border-zinc-900"
                : "text-zinc-400 hover:text-zinc-700"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`text-xs tracking-wider uppercase transition-colors duration-300 ${
                activeTag === tag
                  ? "text-zinc-900 border-b border-zinc-900"
                  : "text-zinc-400 hover:text-zinc-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      <div className="space-y-12">
        {filtered.map((publication, index) => (
          <div key={publication.title}>
            <PublicationEntry publication={publication} />
            {index < filtered.length - 1 && (
              <div className="h-px bg-zinc-200 my-8" />
            )}
          </div>
        ))}
      </div>
      <p className="text-xs text-zinc-400 mt-10">
        * Equal contribution&ensp;·&ensp;† Corresponding author
      </p>
    </div>
  );
}
