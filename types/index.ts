import type { LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  category: "Personal Project" | "Professional Project";
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyContributions: string[];
  results: string[];
  metric: string;
  accent: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  impact: string[];
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Achievement = {
  label: string;
  value: string;
  detail: string;
};
