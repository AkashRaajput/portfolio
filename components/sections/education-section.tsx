"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { StaggerContainer, staggerItem } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { education, volunteerRoles } from "@/data/education";

export function EducationSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="education"
      className={`section-divider ${standalone ? "section-padding" : "section-padding-sm"}`}
    >
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Computer Science foundation from Dehradun."
          description="B.Tech in Computer Science Engineering with consistent academic performance and analytical strengths reflected in JEE and AMCAT results."
          as={standalone ? "h1" : "h2"}
        />

        <StaggerContainer className="mt-14 grid gap-4 lg:mt-16">
          {education.map((item) => (
            <motion.div
              key={`${item.institution}-${item.period}`}
              variants={staggerItem}
              className="glass flex flex-col gap-4 rounded-xl p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <p className="font-semibold tracking-tight">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.institution}
                    {item.location ? `, ${item.location}` : ""}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 sm:text-right">
                <div>
                  <p className="font-mono text-sm font-medium text-primary">{item.score}</p>
                  <p className="text-xs text-muted-foreground">Score</p>
                </div>
                <div>
                  <p className="font-mono text-sm font-medium">{item.period}</p>
                  <p className="text-xs text-muted-foreground">Year</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {volunteerRoles.length > 0 ? (
          <div className="mt-12">
            <p className="eyebrow">Community</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">Volunteering</h3>
            <StaggerContainer className="mt-6 grid gap-4">
              {volunteerRoles.map((role) => (
                <motion.div
                  key={role.organization}
                  variants={staggerItem}
                  className="rounded-xl border border-border/80 bg-white/[0.02] p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-semibold">{role.role}</p>
                      <p className="text-sm text-primary">{role.organization}</p>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground">{role.period}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{role.detail}</p>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
