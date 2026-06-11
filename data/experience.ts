import {
  Database,
  KeyRound,
  LayoutDashboard,
  Plug,
  Workflow,
} from "lucide-react";

import type { Experience, ExperienceHighlight } from "@/types";

export const palmspireHighlights: ExperienceHighlight[] = [
  { label: "HubSpot CMS", value: "Primary", icon: LayoutDashboard },
  { label: "HubDB architecture", value: "HubDB", icon: Database },
  { label: "Membership platforms", value: "Gated", icon: KeyRound },
  { label: "CRM integrations", value: "APIs", icon: Plug },
  { label: "Workflow automation", value: "Ops", icon: Workflow },
];

export const experiences: Experience[] = [
  {
    role: "HubSpot Developer",
    company: "Palmspire Technology",
    period: "2024 – Present",
    employmentType: "Full-time",
    location: "Remote from Noida, India",
    isCurrent: true,
    initials: "PT",
    accent: "from-primary/35 via-cyan-400/15 to-transparent",
    highlights: palmspireHighlights,
    summary:
      "Develop and maintain HubSpot CMS websites, HubDB-powered platforms, membership portals, CRM integrations, and workflow automation systems for North American clients. Company HQ: Calgary, Alberta, Canada.",
    impact: [
      "Develop and maintain HubSpot CMS websites, landing pages, and custom themes.",
      "Build HubDB-powered resource libraries, events platforms, dynamic listing pages, dynamic detail pages, and content management systems.",
      "Develop custom HubSpot modules using HubL, HTML, CSS, JavaScript, and TypeScript.",
      "Implement CRM integrations and third-party API integrations.",
      "Configure workflow automation, lead nurturing systems, and marketing operations workflows.",
      "Develop membership portals, gated content experiences, and user-specific content delivery systems.",
      "Build blog systems, resource centers, event platforms, and search experiences.",
      "Perform website migrations and HubSpot implementations.",
      "Optimize performance, accessibility, SEO, and Core Web Vitals.",
      "Participate in technical scoping, solution architecture, estimations, and development planning.",
      "Develop modern web applications using Next.js, React, TypeScript, and Tailwind CSS.",
      "Create internal documentation systems, technical implementation guides, and developer handoff documentation.",
      "Build proof-of-concepts and custom applications using Python and Flask.",
    ],
  },
  {
    role: "AI Intern",
    company: "OpenWeaver",
    period: "Aug 2023 – Sep 2023",
    employmentType: "Internship",
    location: "Remote, India",
    initials: "OW",
    accent: "from-violet-400/25 via-indigo-400/10 to-transparent",
    highlights: [
      { label: "NLP & Vision", value: "Applied", icon: Database },
      { label: "PyTorch / TF", value: "Hands-on", icon: Plug },
    ],
    summary:
      "Completed a 4-week AI Engineering internship covering NLP, computer vision, and speech recognition with practical ML application builds.",
    impact: [
      "Completed modules on NLP, computer vision, and speech recognition.",
      "Built sentiment analysis, disease prediction, and traffic monitoring prototypes.",
      "Used PyTorch and TensorFlow for model training and evaluation.",
    ],
  },
];
