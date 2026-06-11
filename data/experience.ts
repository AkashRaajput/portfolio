import {
  Database,
  Globe,
  KeyRound,
  LayoutDashboard,
  Plug,
} from "lucide-react";

import type { Experience, ExperienceHighlight } from "@/types";

export const palmspireHighlights: ExperienceHighlight[] = [
  { label: "Websites delivered", value: "50+", icon: Globe },
  { label: "HubSpot CMS", value: "Primary", icon: LayoutDashboard },
  { label: "HubDB development", value: "HubDB", icon: Database },
  { label: "API integrations", value: "REST", icon: Plug },
  { label: "Membership systems", value: "Auth flows", icon: KeyRound },
];

export const experiences: Experience[] = [
  {
    role: "HubSpot CMS Developer",
    company: "Palmspire Technology",
    period: "Aug 2024 – Present",
    employmentType: "Full-time",
    location: "On-site, India",
    isCurrent: true,
    initials: "PT",
    accent: "from-primary/35 via-cyan-400/15 to-transparent",
    highlights: palmspireHighlights,
    summary:
      "Develop and launch client websites and landing pages using HubSpot CMS, WordPress, Next.js, HubL, and JavaScript — with advanced HubDB, REST API, membership, and CRM-connected delivery.",
    impact: [
      "Developed and launched 50+ websites and landing pages using HubSpot CMS, WordPress (Elementor), Next.js, HTML, CSS, JavaScript, and HubL.",
      "Built custom HubSpot modules, dynamic templates, blog listing/detail pages, resource libraries, eBooks, event systems, and scalable HubDB-driven experiences.",
      "Implemented HubDB integrations, REST API integrations, custom forms, membership/login experiences, workflow automations, email templates, and CRM-connected solutions.",
      "Created dynamic listing and detail pages for events, resources, blogs, tours, and directory-style content with maintainable CMS workflows for marketing teams.",
      "Delivered custom WordPress solutions including Elementor websites, plugin enhancements, theme customization, and third-party integrations.",
      "Shipped responsive, SEO-optimized, accessible, cross-browser compatible sites while collaborating with designers, marketers, and clients on requirements and technical consultation.",
      "Applied Python and AI through professional and personal initiatives — machine learning, computer vision, and automation-based solutions.",
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
