"use client";

import { motion } from "framer-motion";

import { StaggerContainer, staggerItem } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { achievements } from "@/data/skills";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Academic, coding, and professional milestones."
          description="Highlights that reflect problem-solving ability, consistent learning, and production delivery experience."
          align="center"
        />
        <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <motion.div key={achievement.label} variants={staggerItem}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">{achievement.label}</p>
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
