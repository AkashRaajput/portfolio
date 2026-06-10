import { BrainCircuit, Braces, Code2, Database, GitBranch, LayoutDashboard } from "lucide-react";

import type { Achievement, SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "CMS Development",
    icon: LayoutDashboard,
    skills: ["HubSpot CMS", "HubL", "HubDB", "WordPress", "Landing Pages"],
  },
  {
    title: "Web Development",
    icon: Braces,
    skills: ["JavaScript", "TypeScript", "Next.js", "API Integrations", "Membership Systems"],
  },
  {
    title: "Python",
    icon: Code2,
    skills: ["Python", "Flask", "Automation", "Backend Logic", "Data Handling"],
  },
  {
    title: "AI and Vision",
    icon: BrainCircuit,
    skills: ["TensorFlow", "OpenCV", "AI Prototyping", "Model Integration", "Experimentation"],
  },
  {
    title: "Data and CRM",
    icon: Database,
    skills: ["HubDB", "CRM Integrations", "Structured Content", "API Data", "Workflow Mapping"],
  },
  {
    title: "Tools",
    icon: GitBranch,
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
