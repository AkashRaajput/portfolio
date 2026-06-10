import type { Metadata } from "next";

import { SkillsSection } from "@/components/sections/skills-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skills across HubSpot CMS, HubL, HubDB, JavaScript, TypeScript, Python, Flask, TensorFlow, OpenCV, Git, GitHub, and Next.js.",
  alternates: {
    canonical: `${siteConfig.url}/skills`,
  },
};

export default function SkillsPage() {
  return <SkillsSection />;
}
