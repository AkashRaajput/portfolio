import { achievements } from "@/data/skills";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { siteConfig } from "@/config/site";

export const resume = {
  name: siteConfig.name,
  title: siteConfig.title,
  role: siteConfig.role,
  location: siteConfig.location,
  workType: siteConfig.workType,
  company: siteConfig.company,
  companyHQ: siteConfig.companyHQ,
  email: siteConfig.email,
  phone: siteConfig.phone,
  portfolio: siteConfig.url,
  links: {
    linkedin: siteConfig.socials.linkedin,
    github: siteConfig.socials.github,
  },
  professionalSummary: profile.professionalSummary,
  coreCompetencies: [
    "HubSpot CMS Development",
    "HubDB Architecture",
    "Membership Platforms",
    "CRM Integrations",
    "Workflow Automation",
    "Dynamic Content Systems",
    "WordPress Development",
    "Next.js Applications",
    "Python / Flask",
    "Technical Documentation",
  ],
  skills: Object.fromEntries(skillGroups.map((group) => [group.title, group.skills])),
  experience: experiences.map(({ role, company, period, location, summary, impact }) => ({
    role,
    company,
    period,
    location,
    summary,
    responsibilities: impact,
  })),
  selectedProjects: [
    {
      name: "Valiantys Ticketing Portal",
      stack: "HubSpot CMS, HubDB, Atlassian OAuth, Jira Service Management, Node.js, TypeScript, AWS",
      highlight:
        "Enterprise support portal with multi-region JSM routing and Atlassian OAuth for APAC, EMEA, and North America.",
    },
    {
      name: "GTIA Resource Library",
      stack: "HubSpot CMS, HubDB, HubL, JavaScript, HubSpot Workflows",
      highlight:
        "HubDB-powered membership resource library with gated content, reporting, and personalization logic.",
    },
    {
      name: "Nemko Digital Experience Platform",
      stack: "HubSpot CMS, HubDB, HubL, JavaScript",
      highlight:
        "HubDB ecosystem for global market access comparison, resource management, and dynamic events platform.",
    },
    {
      name: "Easy Travel Customer Portal",
      stack: "HubSpot Memberships, HubDB, HubSpot CMS, JavaScript",
      highlight:
        "Membership travel portal with personalized dashboards, tour management, and merchandise workflows.",
    },
    {
      name: "Campaign Creators Website",
      stack: "HubSpot CMS, HubL, HubDB, JavaScript, SEO",
      highlight: "Elite HubSpot Solutions Partner marketing site with enterprise case studies and lead capture.",
    },
    {
      name: "WordPress Client Delivery",
      stack: "WordPress, WooCommerce, Elementor, PHP, JavaScript",
      highlight:
        "Healthcare, fintech, industrial, and e-commerce sites including Get Neffy, CRX Markets, Pipehorn, and Real Gangsters.",
    },
    {
      name: "Credit Card Fraud Detection System",
      stack: "Python, Scikit-Learn, Pandas, NumPy, Flask",
      highlight:
        "ML classification pipeline with feature engineering, model tuning, and Flask deployment prototype.",
    },
  ],
  education: education.map(({ institution, degree, period, score, location }) => ({
    institution,
    degree,
    period,
    score,
    location,
  })),
  achievements: achievements.map(({ label, value, detail, year }) => ({
    label,
    value,
    detail,
    year,
  })),
};
