import type { Metadata } from "next";

import { SkillsSection } from "@/components/sections/skills-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and tools used in client and personal work.",
  alternates: {
    canonical: `${siteConfig.url}/skills`,
  },
};

export default function SkillsPage() {
  return <SkillsSection />;
}
