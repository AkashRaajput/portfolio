import type { Metadata } from "next";

import { ProjectsSection } from "@/components/sections/projects-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects in HubSpot CMS, integrations, and Python.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return <ProjectsSection standalone />;
}
