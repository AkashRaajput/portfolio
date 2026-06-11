"use client";

import { ProjectCard } from "@/components/cards";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { nextjsProjects, personalBuildProjects } from "@/data/platform-projects";
import { websiteProjectToCaseStudy } from "@/lib/project-utils";

export function PlatformProjectsSection({ standalone = false }: { standalone?: boolean }) {
  const nextjsCaseStudies = nextjsProjects.map(websiteProjectToCaseStudy);
  const personalCaseStudies = personalBuildProjects.map(websiteProjectToCaseStudy);

  return (
    <section
      id="platform-projects"
      className={`section-divider ${standalone ? "section-padding" : "section-padding-sm"}`}
    >
      <Container>
        <SectionHeading
          eyebrow="Next.js & Personal"
          title="Next.js & personal projects"
          description="Internal Next.js tooling for developer documentation and a deployed computer vision application demonstrating Python, TensorFlow, and Flask delivery."
          as={standalone ? "h1" : "h2"}
        />

        <div className="mt-14 space-y-16 lg:mt-16">
          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Next.js & internal development</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              Internal platforms and documentation systems built with Next.js, React, and TypeScript to support
              HubSpot theme delivery and team onboarding.
            </p>
            <StaggerContainer className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {nextjsCaseStudies.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </StaggerContainer>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Personal projects</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              Applied machine learning and computer vision builds exploring deep learning, CNN models, and video
              processing outside client delivery.
            </p>
            <StaggerContainer className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {personalCaseStudies.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
