import type { LucideIcon } from "lucide-react";

export type ProjectGroup = "hubspot" | "wordpress" | "nextjs" | "personal";

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
  featured?: boolean;
  headline?: string;
  period?: string;
  liveUrl?: string;
  screenshot?: string;
  projectGroup?: ProjectGroup;
};

export type WebsiteProject = {
  slug: string;
  title: string;
  liveUrl?: string;
  screenshot: string;
  technologies: string[];
  description: string;
  challenge: string;
  approach: string;
  contributions: string[];
  businessImpact: string[];
  metric: string;
  accent: string;
  headline?: string;
  period?: string;
  featured?: boolean;
  group: "wordpress" | "nextjs" | "personal";
};

export type ExperienceHighlight = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  employmentType: "Full-time" | "Internship";
  location: string;
  summary: string;
  impact: string[];
  highlights: ExperienceHighlight[];
  accent: string;
  initials: string;
  isCurrent?: boolean;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location?: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
  featured?: boolean;
};

export type CoreSkill = {
  name: string;
  proficiency: number;
  detail: string;
};

export type Achievement = {
  label: string;
  value: string;
  detail: string;
  year?: string;
};

export type VolunteerRole = {
  role: string;
  organization: string;
  period: string;
  detail: string;
};
