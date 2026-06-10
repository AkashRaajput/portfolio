import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Akash Kumar, a HubSpot CMS and Python developer with 2 years of experience building websites, landing pages, integrations, and AI projects.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutSection standalone />
      <SkillsSection />
    </>
  );
}
