import { Building2, Github, Linkedin, Mail, MapPin, Rocket } from "lucide-react";

import { siteConfig } from "@/config/site";

export const profile = {
  name: siteConfig.name,
  role: siteConfig.role,
  title: "HubSpot CMS Developer",
  company: "Palmspire Technology",
  headline: "Production HubSpot CMS platforms, CRM integrations, and Python-backed delivery.",
  tagline:
    "Two years shipping client websites, HubDB-driven modules, API integrations, and Python solutions for teams that need reliable execution—not experiments.",
  bio: "HubSpot CMS and Python developer with 2 years of professional experience at Palmspire Technology, delivering 50+ production websites, HubL templates, HubDB structures, CRM integrations, membership systems, and applied AI work.",
  availability: "Open to HubSpot CMS, Python, and integration roles",
  stats: [
    { label: "Experience", value: "2+ yrs" },
    { label: "Sites delivered", value: "50+" },
    { label: "Current role", value: "Palmspire" },
  ],
  highlights: ["HubSpot CMS", "HubDB & HubL", "CRM Integrations", "Python / Flask", "50+ Sites"],
  quickFacts: [
    { icon: Building2, label: "Full-time at Palmspire Technology since Jun 2024" },
    { icon: Rocket, label: "Client delivery across CMS, integrations, and landing-page systems" },
    { icon: MapPin, label: siteConfig.location },
  ],
  socials: [
    { label: "GitHub", href: siteConfig.socials.github, icon: Github },
    { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  ],
};
