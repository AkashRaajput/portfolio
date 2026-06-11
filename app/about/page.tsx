import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Akash Kumar — HubSpot CMS Developer at Palmspire Technology.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutSection standalone />
      <EducationSection />
      <SkillsSection />
    </>
  );
}
