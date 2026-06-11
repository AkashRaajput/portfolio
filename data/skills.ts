import { BrainCircuit, Braces, Code2, Database, GitBranch, LayoutDashboard } from "lucide-react";

import type { Achievement, CoreSkill, SkillGroup } from "@/types";

export const coreSkills: CoreSkill[] = [
  {
    name: "HubSpot CMS",
    proficiency: 94,
    detail: "HubL, modules, templates, blogs, resources, and editor-ready systems",
  },
  {
    name: "HubDB & CRM",
    proficiency: 90,
    detail: "Dynamic listings, forms, workflows, and REST API integrations",
  },
  {
    name: "JavaScript / TypeScript",
    proficiency: 86,
    detail: "React, Next.js, responsive UI, and API-connected front ends",
  },
  {
    name: "Python / AI",
    proficiency: 84,
    detail: "Flask, TensorFlow, OpenCV, Scikit-learn, and ML prototypes",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "CMS & Platforms",
    icon: LayoutDashboard,
    description: "HubSpot CMS, WordPress, and Elementor delivery for marketing teams.",
    skills: ["HubSpot CMS", "HubL", "HubDB", "WordPress", "Elementor"],
    featured: true,
  },
  {
    title: "Frontend",
    icon: Braces,
    description: "Modern JavaScript development and responsive web experiences.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
    featured: true,
  },
  {
    title: "Backend & APIs",
    icon: Code2,
    description: "Python services, REST APIs, and integration logic.",
    skills: ["Python", "Flask", "REST APIs", "Automation", "Membership Systems"],
  },
  {
    title: "AI / Machine Learning",
    icon: BrainCircuit,
    description: "Applied ML, computer vision, and data-driven prototypes.",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "NumPy", "Pandas"],
  },
  {
    title: "Data & CRM",
    icon: Database,
    description: "HubDB models, CRM workflows, and structured content systems.",
    skills: ["HubDB", "CRM Integrations", "MySQL", "SQL Server", "Workflow Automation"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    description: "Development, deployment, and collaboration tooling.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Jupyter", "Vercel", "Render"],
  },
];

export const achievements: Achievement[] = [
  {
    label: "Websites delivered",
    value: "50+",
    detail: "Production websites and landing pages across HubSpot CMS, WordPress, and Next.js.",
    year: "2024 – Present",
  },
  {
    label: "JEE Mains",
    value: "Qualified",
    detail: "Qualified Joint Entrance Examination (Mains), 2019.",
    year: "2019",
  },
  {
    label: "HackerRank",
    value: "Gold",
    detail: "Golden Badge in Java and Python on HackerRank.",
    year: "2023",
  },
  {
    label: "AMCAT",
    value: "99%",
    detail: "Scored in the 99th percentile on AMCAT employability assessment.",
    year: "2023",
  },
];
