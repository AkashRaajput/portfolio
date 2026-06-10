import type { Metadata } from "next";

import { ProjectsSection } from "@/components/sections/projects-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Akash Kumar across AI projects, HubSpot CMS websites, CRM integrations, and professional client platforms.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return <ProjectsSection standalone />;
}
