import { Building2, GraduationCap, Github, Linkedin, Mail, MapPin, Rocket } from "lucide-react";

import { siteConfig } from "@/config/site";

export const profile = {
  name: siteConfig.name,
  role: siteConfig.role,
  title: "HubSpot CMS Developer",
  company: "Palmspire Technology",
  degree: "B.Tech Computer Science Engineering",
  university: "Dev Bhoomi Institute of Technology, Dehradun",
  headline: "HubSpot CMS websites, HubDB, and CRM integrations.",
  tagline:
    "HubSpot CMS Developer at Palmspire Technology. I build client sites on HubSpot CMS and WordPress, with HubDB, REST APIs, and Python on the side.",
  bio: "B.Tech CSE graduate working as a HubSpot CMS Developer at Palmspire Technology. Day-to-day work spans HubSpot CMS, WordPress, HubL, HubDB, REST API integrations, and membership systems.",
  availability: "Open to HubSpot CMS and full-stack roles",
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
  ],
  quickFacts: [
    { icon: Building2, label: "HubSpot CMS Developer at Palmspire Technology · Aug 2024 – Present · On-site" },
    { icon: GraduationCap, label: "B.Tech CSE, Dev Bhoomi Institute of Technology, Dehradun (2024)" },
    { icon: Rocket, label: "Client sites across HubSpot CMS, WordPress, and Next.js" },
    { icon: MapPin, label: siteConfig.location },
  ],
  socials: [
    { label: "GitHub", href: siteConfig.socials.github, icon: Github },
    { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  ],
};
