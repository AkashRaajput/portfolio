import { Building2, GraduationCap, Github, Linkedin, Mail, MapPin, Rocket } from "lucide-react";

import { siteConfig } from "@/config/site";

export const profile = {
  name: siteConfig.name,
  role: siteConfig.role,
  title: siteConfig.title,
  company: siteConfig.company,
  companyHQ: siteConfig.companyHQ,
  workType: siteConfig.workType,
  degree: "B.Tech Computer Science Engineering",
  university: "Dev Bhoomi Institute of Technology, Dehradun",
  professionalSummary:
    "Results-driven HubSpot Developer and Automation Specialist with 2+ years of experience building HubSpot CMS websites, HubDB-powered platforms, membership portals, CRM integrations, workflow automation systems, dynamic content experiences, and WordPress websites. Experienced in delivering enterprise and mid-market client solutions across North America while working remotely from India. Specialized in HubSpot CMS, HubDB architecture, membership experiences, dynamic content systems, workflow automation, CRM integrations, resource libraries, events platforms, Next.js applications, and scalable web development.",
  headline: "HubSpot CMS, HubDB architecture, and CRM automation for scalable client delivery.",
  tagline:
    "HubSpot Developer at Palmspire Technology with 2+ years building CMS websites, HubDB-powered platforms, membership portals, CRM integrations, and workflow automation — remotely from Noida for North American clients.",
  bio: "Mid-level HubSpot Developer specializing in CMS delivery, HubDB architecture, membership platforms, CRM integrations, and workflow automation for enterprise and mid-market clients across North America.",
  aboutBody:
    "I build and maintain HubSpot CMS websites, HubDB-powered platforms, and membership portals for North American clients while working remotely from Noida, India at Palmspire Technology. My work spans solution architecture, CRM integrations, workflow automation, dynamic content systems, and performance optimization — with technical ownership from scoping through production delivery.",
  focusAreas: [
    {
      title: "HubSpot CMS & HubDB architecture",
      detail:
        "CMS websites, custom modules, dynamic pages, membership platforms, resource libraries, events platforms, and scalable content management systems.",
    },
    {
      title: "CRM integrations & workflow automation",
      detail:
        "Third-party API integrations, CRM customization, lead nurturing workflows, and marketing operations automation with focus on business impact and scalability.",
    },
    {
      title: "Full-stack delivery & technical ownership",
      detail:
        "Next.js and WordPress development, Python applications, performance and Core Web Vitals optimization, solution architecture, and technical documentation.",
    },
  ],
  availability: "Remote · HubSpot CMS & automation roles",
  stats: [
    { label: "Experience", value: "2+ yrs" },
    { label: "Work type", value: "Remote" },
    { label: "Education", value: "B.Tech" },
  ],
  highlights: [
    "HubSpot CMS",
    "HubDB Architecture",
    "Membership Platforms",
    "CRM Integrations",
    "Workflow Automation",
    "Next.js",
  ],
  quickFacts: [
    {
      icon: Building2,
      label: "HubSpot Developer at Palmspire Technology · 2024 – Present · Remote",
    },
    {
      icon: MapPin,
      label: `${siteConfig.location} · Company HQ · ${siteConfig.companyHQ}`,
    },
    {
      icon: Rocket,
      label: "HubSpot CMS, HubDB, membership portals, CRM automation, and dynamic content systems",
    },
    {
      icon: GraduationCap,
      label: "B.Tech CSE, Dev Bhoomi Institute of Technology, Dehradun (2024)",
    },
  ],
  socials: [
    { label: "GitHub", href: siteConfig.socials.github, icon: Github },
    { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  ],
};
