import { websiteProjectToCaseStudy } from "@/lib/project-utils";
import { mlProjects } from "@/data/ml-projects";
import { platformProjects } from "@/data/platform-projects";
import { projects as hubspotProjects } from "@/data/projects";
import { wordpressProjects } from "@/data/wordpress-projects";
import type { Project } from "@/types";

export const projects = [
  ...hubspotProjects.map((project) => ({ ...project, projectGroup: "hubspot" as const })),
  ...wordpressProjects.map(websiteProjectToCaseStudy),
  ...platformProjects.map(websiteProjectToCaseStudy),
  ...mlProjects.map((project) => ({ ...project, projectGroup: "personal" as const })),
];

export const featuredProjects = projects.filter((project) => project.featured);
export const hubspotProjectList = hubspotProjects;
export const personalProjects = projects.filter((project) => project.projectGroup === "personal");
export const professionalProjects = projects.filter((project) => project.category === "Professional Project");

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
