import {
  Database,
  Globe,
  KeyRound,
  LayoutDashboard,
  Plug,
} from "lucide-react";

import type { Experience, ExperienceHighlight } from "@/types";

export const palmspireHighlights: ExperienceHighlight[] = [
  {
    label: "Websites delivered",
    value: "50+",
    icon: Globe,
  },
  {
    label: "HubSpot CMS",
    value: "Expert",
    icon: LayoutDashboard,
  },
  {
    label: "HubDB development",
    value: "Advanced",
    icon: Database,
  },
  {
    label: "API integrations",
    value: "Production",
    icon: Plug,
  },
  {
    label: "Membership systems",
    value: "Built",
    icon: KeyRound,
  },
];

export const experiences: Experience[] = [
  {
    role: "HubSpot CMS Developer | Python Developer",
    company: "Palmspire Technology",
    period: "Jun 2024 – Present",
    employmentType: "Full-time",
    location: "Remote, India",
    isCurrent: true,
    initials: "PT",
    accent: "from-primary/35 via-cyan-400/15 to-transparent",
    highlights: palmspireHighlights,
    summary:
      "Own end-to-end delivery of client websites, HubSpot CMS platforms, HubDB structures, API integrations, and membership systems for production marketing and product teams.",
    impact: [
      "Delivered 50+ production websites and landing pages with reusable HubL modules, responsive layouts, and editor-friendly CMS architecture.",
      "Led HubDB development for dynamic content models powering events, directories, and multi-page client platforms.",
      "Shipped API integrations and CRM-connected workflows linking HubSpot forms, external services, and business data.",
      "Built membership systems with gated content, authentication flows, and access-controlled page experiences.",
      "Extended delivery with Python and Flask utilities for automation, integration logic, and AI-oriented prototypes.",
    ],
  },
  {
    role: "AI Intern",
    company: "OpenWeaver",
    period: "Jan 2024 – May 2024",
    employmentType: "Internship",
    location: "India",
    initials: "OW",
    accent: "from-violet-400/25 via-indigo-400/10 to-transparent",
    highlights: [
      {
        label: "Python foundation",
        value: "Core",
        icon: Plug,
      },
      {
        label: "AI workflows",
        value: "Applied",
        icon: Database,
      },
    ],
    summary:
      "AI-focused internship that established structured engineering habits and applied Python skills later used across production client work.",
    impact: [
      "Practiced end-to-end development across research, implementation, testing, and technical presentation.",
      "Strengthened Python fundamentals and automation patterns carried into Palmspire delivery work.",
      "Built an AI tooling foundation that informed computer-vision and machine-learning side projects.",
    ],
  },
];
