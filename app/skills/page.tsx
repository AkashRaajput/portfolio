import type { Metadata } from "next";

import { SkillsSection } from "@/components/sections/skills-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "HubSpot CMS, HubDB, workflow automation, front-end, backend, and integration skills for Akash Kumar.",
  alternates: {
    canonical: `${siteConfig.url}/skills`,
  },
};

export default function SkillsPage() {
  return <SkillsSection />;
}
