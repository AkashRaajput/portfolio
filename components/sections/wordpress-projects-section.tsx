"use client";

import { StaggerContainer } from "@/components/motion/stagger-container";
import { WebsiteProjectCard } from "@/components/cards/website-project-card";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { wordpressProjects } from "@/data/wordpress-projects";

export function WordPressProjectsSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="wordpress-projects"
      className={`section-divider ${standalone ? "section-padding" : "section-padding-sm"}`}
    >
      <Container>
        <SectionHeading
          eyebrow="WordPress"
          title="WordPress projects"
          description="Client WordPress builds spanning healthcare, fintech, e-commerce, creative portfolios, and agency marketing sites—focused on CMS implementation, custom development, and performance."
          as={standalone ? "h1" : "h2"}
        />

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 lg:mt-16">
          {wordpressProjects.map((project) => (
            <WebsiteProjectCard key={project.slug} project={project} />
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
