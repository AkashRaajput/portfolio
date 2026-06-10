"use client";

import { motion } from "framer-motion";

import { ExperienceCard } from "@/components/cards/experience-card";
import { ExperienceHighlights } from "@/components/experience/experience-highlights";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { experiences, palmspireHighlights } from "@/data/experience";

export function ExperienceSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="experience"
      className={`section-divider ${standalone ? "section-padding" : "section-padding-sm"}`}
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Two years of production delivery at Palmspire Technology."
          description="Full-time HubSpot CMS and Python development for client platforms—built on an AI internship foundation at OpenWeaver."
          as={standalone ? "h1" : "h2"}
        />

        <ExperienceHighlights items={palmspireHighlights} />

        <div className="relative mt-16 lg:mt-20">
          {/* Animated timeline spine */}
          <div
            className="pointer-events-none absolute bottom-0 left-4 top-0 w-px bg-border lg:left-1/2 lg:-translate-x-px"
            aria-hidden="true"
          >
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-primary/60 to-primary/20"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>

          <StaggerContainer className="relative space-y-12 lg:space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${experience.role}`}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
