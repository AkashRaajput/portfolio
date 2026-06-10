import { BrainCircuit, Braces, Code2, Database, GitBranch, LayoutDashboard } from "lucide-react";

import type { Achievement, CoreSkill, SkillGroup } from "@/types";

export const coreSkills: CoreSkill[] = [
  {
    name: "HubSpot CMS",
    proficiency: 92,
    detail: "Templates, modules, HubL, and editor-ready page systems",
  },
  {
    name: "HubDB & CRM",
    proficiency: 88,
    detail: "Dynamic content, forms, and workflow-connected integrations",
  },
  {
    name: "JavaScript / TypeScript",
    proficiency: 85,
    detail: "Next.js, API integrations, and interactive UI delivery",
  },
  {
    name: "Python",
    proficiency: 82,
    detail: "Flask services, automation, and ML-oriented prototypes",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "CMS Development",
    icon: LayoutDashboard,
    description: "Production HubSpot and WordPress delivery for marketing and product teams.",
    skills: ["HubSpot CMS", "HubL", "HubDB", "WordPress", "Landing Pages"],
    featured: true,
  },
  {
    title: "Web Development",
    icon: Braces,
    description: "Modern front-end and integration work across the JavaScript ecosystem.",
    skills: ["JavaScript", "TypeScript", "Next.js", "API Integrations", "Membership Systems"],
    featured: true,
  },
  {
    title: "Python",
    icon: Code2,
    description: "Backend logic, automation, and service layers that support web delivery.",
    skills: ["Python", "Flask", "Automation", "Backend Logic", "Data Handling"],
  },
  {
    title: "AI and Vision",
    icon: BrainCircuit,
    description: "Applied ML and computer-vision prototypes beyond coursework.",
    skills: ["TensorFlow", "OpenCV", "AI Prototyping", "Model Integration", "Experimentation"],
  },
  {
    title: "Data and CRM",
    icon: Database,
    description: "Structured content models and CRM-connected business workflows.",
    skills: ["HubDB", "CRM Integrations", "Structured Content", "API Data", "Workflow Mapping"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    description: "Version control, collaboration, and deployment support.",
    skills: ["Git", "GitHub", "Version Control", "Deployment Support", "Code Review"],
  },
];

export const achievements: Achievement[] = [
  {
    label: "Delivery",
    value: "50+",
    detail: "Websites and landing pages developed across HubSpot CMS, WordPress, and modern web stacks.",
  },
  {
    label: "JEE Mains",
    value: "Qualified",
    detail: "Cleared JEE Mains, demonstrating strong analytical ability and disciplined preparation.",
  },
  {
    label: "HackerRank",
    value: "Gold",
    detail: "Earned a HackerRank Gold Badge through consistent coding practice and problem solving.",
  },
  {
    label: "AMCAT",
    value: "99%",
    detail: "Scored in the 99th percentile, reflecting strong aptitude and employability skills.",
  },
];
