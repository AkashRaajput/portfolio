import { Building2, GraduationCap, Github, Linkedin, Mail, MapPin, Rocket } from "lucide-react";

import { siteConfig } from "@/config/site";

export const profile = {
  name: siteConfig.name,
  role: siteConfig.role,
  title: "HubSpot CMS Developer",
  company: "Palmspire Technology",
  degree: "B.Tech Computer Science Engineering",
  university: "Dev Bhoomi Institute of Technology, Dehradun",
  headline: "50+ HubSpot CMS websites, HubDB systems, and CRM-connected integrations.",
  tagline:
    "HubSpot CMS Developer at Palmspire Technology — shipping production websites, WordPress builds, HubDB-driven platforms, REST API integrations, and Python/AI side projects.",
  bio: "B.Tech CSE graduate and HubSpot CMS Developer at Palmspire Technology with 50+ websites and landing pages delivered across HubSpot CMS, WordPress, Next.js, and HubL. Experienced in HubDB, REST API integrations, membership systems, CRM workflows, and applied Python/AI development.",
  availability: "Open to HubSpot CMS, full-stack, and Python roles",
  stats: [
    { label: "Sites delivered", value: "50+" },
    { label: "Experience", value: "2+ yrs" },
    { label: "Education", value: "B.Tech" },
  ],
  highlights: [
    "HubSpot CMS",
    "HubDB & HubL",
    "WordPress",
    "API Integrations",
    "50+ Sites",
  ],
  quickFacts: [
    { icon: Building2, label: "HubSpot CMS Developer at Palmspire Technology · Aug 2024 – Present · On-site" },
    { icon: GraduationCap, label: "B.Tech CSE, Dev Bhoomi Institute of Technology, Dehradun (2024)" },
    { icon: Rocket, label: "50+ websites across HubSpot CMS, WordPress, Next.js, and HubL" },
    { icon: MapPin, label: siteConfig.location },
  ],
  socials: [
    { label: "GitHub", href: siteConfig.socials.github, icon: Github },
    { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  ],
};
