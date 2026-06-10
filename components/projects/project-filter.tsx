"use client";

import { motion } from "framer-motion";

import type { Project } from "@/types";
import { cn } from "@/lib/utils";

export type ProjectFilterValue = "all" | Project["category"];

type ProjectFilterProps = {
  value: ProjectFilterValue;
  onChange: (value: ProjectFilterValue) => void;
  counts: Record<ProjectFilterValue, number>;
};

const filters: { value: ProjectFilterValue; label: string }[] = [
  { value: "all", label: "All projects" },
  { value: "Professional Project", label: "Professional" },
  { value: "Personal Project", label: "Personal" },
];

export function ProjectFilter({ value, onChange, counts }: ProjectFilterProps) {
  return (
    <div
      className="inline-flex flex-wrap gap-1 rounded-xl border border-border bg-background/40 p-1.5 backdrop-blur-sm"
      role="tablist"
      aria-label="Filter projects by category"
    >
      {filters.map((filter) => {
        const isActive = value === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.value)}
            className={cn(
              "relative rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
              isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="project-filter-pill"
                className="absolute inset-0 rounded-lg bg-primary shadow-md shadow-primary/25"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            ) : null}
            <span className="relative z-10 flex items-center gap-2">
              {filter.label}
              <span
                className={cn(
                  "rounded-md px-1.5 py-0.5 font-mono text-[10px]",
                  isActive ? "bg-primary-foreground/15 text-primary-foreground" : "bg-white/5",
                )}
              >
                {counts[filter.value]}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
