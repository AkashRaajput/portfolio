import { Braces, Code2, Gauge, GitBranch, LayoutDashboard, Server } from "lucide-react";

import type { Achievement, CoreSkill, SkillGroup } from "@/types";

export const coreSkills: CoreSkill[] = [
  {
    name: "HubSpot CMS & HubDB",
    proficiency: 94,
    detail: "Custom modules, dynamic pages, membership functionality, resource libraries, and events platforms",
  },
  {
    name: "Workflow Automation & CRM",
    proficiency: 92,
    detail: "CRM customization, lists and automation, integrations, and marketing operations workflows",
  },
  {
    name: "JavaScript / TypeScript",
    proficiency: 88,
    detail: "React, Next.js, Tailwind CSS, and API-connected front-end development",
  },
  {
    name: "Python & Flask",
    proficiency: 82,
    detail: "REST APIs, proof-of-concept applications, and backend integration logic",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "HubSpot",
    icon: LayoutDashboard,
    description: "CMS development, HubDB architecture, and marketing automation delivery.",
    skills: [
      "HubSpot CMS",
      "HubDB",
      "HubL",
      "Custom Modules",
      "Dynamic Pages",
      "Membership Functionality",
      "Resource Libraries",
      "Events Platforms",
      "Blog Systems",
      "Landing Pages",
      "Email Templates",
      "Workflows",
      "CRM Customization",
      "Lists & Automation",
    ],
    featured: true,
  },
  {
    title: "Frontend",
    icon: Braces,
    description: "Modern front-end development with responsive, performance-focused interfaces.",
    skills: ["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Backend",
    icon: Code2,
    description: "Server-side logic, APIs, and integration development.",
    skills: ["Node.js", "Python", "Flask", "REST APIs"],
  },
  {
    title: "CMS",
    icon: Server,
    description: "Content management platforms for marketing and business teams.",
    skills: ["HubSpot", "WordPress"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    description: "Development, testing, deployment, and collaboration tooling.",
    skills: ["Git", "GitHub", "Vercel", "BrowserStack", "Postman"],
  },
  {
    title: "Other",
    icon: Gauge,
    description: "Delivery practices focused on quality, performance, and maintainability.",
    skills: [
      "SEO Optimization",
      "Accessibility",
      "Performance Optimization",
      "Core Web Vitals",
      "Technical Documentation",
      "Solution Architecture",
    ],
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
