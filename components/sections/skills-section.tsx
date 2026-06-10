"use client";

import { motion } from "framer-motion";

import { StaggerContainer, staggerItem } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A focused stack for CMS builds, integrations, and Python development."
          description="HubSpot CMS depth, modern web development skills, Python capability, and AI tools that support practical implementation."
        />
        <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={staggerItem}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <group.icon className="size-5" />
                  </div>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
