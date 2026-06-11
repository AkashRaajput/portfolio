"use client";

import { motion } from "framer-motion";

import { StaggerContainer, staggerItem } from "@/components/motion/stagger-container";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { coreSkills, skillGroups } from "@/data/skills";
export function SkillsSection() {
  return (
    <section id="skills" className="section-divider section-padding-sm">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Skills and tools"
          description="HubSpot CMS, HubDB, automation, front-end, and integration skills used across client delivery."
        />

        <StaggerContainer className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2">
          <motion.div variants={staggerItem} className="glass rounded-2xl p-6 sm:p-8">
            <p className="eyebrow">Core competencies</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">Core skills</h3>

            <div className="mt-8 grid gap-6">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <div className="mb-2 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-medium">{skill.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{skill.detail}</p>
                    </div>
                    <span className="font-mono text-xs text-primary">{skill.proficiency}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + index * 0.08, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={staggerItem}
                className="glass rounded-2xl p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <group.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="font-mono text-xs text-foreground/85">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </section>
  );
}
