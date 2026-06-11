import type { Metadata } from "next";

import { MLProjectsSection } from "@/components/sections/ml-projects-section";
import { PlatformProjectsSection } from "@/components/sections/platform-projects-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { WordPressProjectsSection } from "@/components/sections/wordpress-projects-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "HubSpot CMS, WordPress, machine learning, Next.js, and personal projects across membership portals, HubDB platforms, CRM automation, and web development.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsSection standalone />
      <WordPressProjectsSection />
      <MLProjectsSection />
      <PlatformProjectsSection />
    </>
  );
}
