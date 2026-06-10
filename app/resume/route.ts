import { NextResponse } from "next/server";

import { achievements } from "@/data/skills";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export function GET() {
  const resume = [
    `${siteConfig.name}`,
    siteConfig.role,
    siteConfig.email,
    siteConfig.socials.github,
    siteConfig.socials.linkedin,
    "",
    "SUMMARY",
    profile.bio,
    "",
    "EXPERIENCE",
    ...experiences.flatMap((experience) => [
      `${experience.role} - ${experience.company}`,
      experience.period,
      experience.summary,
      ...experience.impact.map((item) => `- ${item}`),
      "",
    ]),
    "PROJECTS",
    ...projects.map((project) => `- ${project.title}: ${project.overview}`),
    "",
    "ACHIEVEMENTS",
    ...achievements.map((achievement) => `- ${achievement.label}: ${achievement.value} - ${achievement.detail}`),
  ].join("\n");

  return new NextResponse(resume, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Akash-Kumar-Resume.md"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
