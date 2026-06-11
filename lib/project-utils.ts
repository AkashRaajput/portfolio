import type { Project, WebsiteProject } from "@/types";

export function websiteProjectToCaseStudy(project: WebsiteProject): Project {
  return {
    slug: project.slug,
    title: project.title,
    category: project.group === "personal" ? "Personal Project" : "Professional Project",
    overview: project.description,
    problem: project.challenge,
    solution: project.approach,
    technologies: project.technologies,
    keyContributions: project.contributions,
    results: project.businessImpact,
    metric: project.metric,
    accent: project.accent,
    featured: project.featured,
    headline: project.headline,
    period: project.period,
    liveUrl: project.liveUrl,
    screenshot: project.screenshot,
    projectGroup: project.group === "wordpress" ? "wordpress" : project.group,
  };
}
