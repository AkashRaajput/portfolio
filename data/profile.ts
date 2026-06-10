import { Code2, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";

export const profile = {
  name: siteConfig.name,
  role: siteConfig.role,
  tagline:
    "Building high-performing HubSpot CMS websites, CRM-connected workflows, and Python-powered solutions with clean execution and practical AI curiosity.",
  bio: "A HubSpot CMS and Python developer with 2 years of professional experience delivering 50+ websites and landing pages, HubDB-driven modules, API integrations, membership systems, CRM integrations, and AI-oriented development work.",
  availability: "Available for HubSpot CMS, Python, and integration work",
  stats: [
    { label: "Experience", value: "2 yrs" },
    { label: "Websites", value: "50+" },
    { label: "Company", value: "Palmspire" },
  ],
  quickFacts: [
    { icon: Code2, label: "HubSpot CMS, HubL, HubDB, and WordPress delivery" },
    { icon: Sparkles, label: "Python, AI, API, membership, and CRM integrations" },
    { icon: MapPin, label: siteConfig.location },
  ],
  socials: [
    { label: "GitHub", href: siteConfig.socials.github, icon: Github },
    { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  ],
};
