import type { Metadata } from "next";

import { ExperienceSection } from "@/components/sections/experience-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience for Akash Kumar, including Palmspire Technology and OpenWeaver AI Internship work.",
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return <ExperienceSection standalone />;
}
