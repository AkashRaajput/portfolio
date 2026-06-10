"use client";

import { motion } from "framer-motion";

import { StaggerContainer, staggerItem } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { achievements } from "@/data/skills";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-divider section-padding-sm">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Academic, coding, and professional milestones."
          description="Highlights that reflect problem-solving ability, consistent learning, and production delivery experience."
          align="center"
        />
        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <motion.div key={achievement.label} variants={staggerItem}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm text-muted-foreground">{achievement.label}</p>
                    {achievement.year ? (
                      <p className="font-mono text-xs text-primary">{achievement.year}</p>
                    ) : null}
                  </div>
                  <p className="mt-3 text-4xl font-semibold tracking-tight text-primary">{achievement.value}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{achievement.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
