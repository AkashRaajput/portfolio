import type { Metadata } from "next";

import { ExperienceSection } from "@/components/sections/experience-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience for Akash Kumar — HubSpot Developer at Palmspire Technology building CMS, HubDB, membership, and automation solutions for North American clients.",
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return <ExperienceSection standalone />;
}
