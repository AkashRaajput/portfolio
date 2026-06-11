import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { siteConfig } from "@/config/site";

export const resume = {
  name: siteConfig.name,
  title: siteConfig.title,
  location: siteConfig.location,
  workType: siteConfig.workType,
  email: siteConfig.email,
  phone: siteConfig.phone,
  links: {
    linkedin: siteConfig.socials.linkedin,
    github: siteConfig.socials.github,
  },
  professionalSummary: profile.professionalSummary,
  experience: experiences.map(({ role, company, period, location, impact }) => ({
    role,
    company,
    period,
    location,
    responsibilities: impact,
  })),
  skills: Object.fromEntries(skillGroups.map((group) => [group.title, group.skills])),
};
