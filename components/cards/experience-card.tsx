"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import type { Experience } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { staggerItem } from "@/components/motion/stagger-container";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.article variants={staggerItem}>
      <Card>
        <CardHeader className="gap-4 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
          <div>
            <CardTitle>{experience.role}</CardTitle>
            <p className="mt-2 text-muted-foreground">{experience.company}</p>
          </div>
          <Badge className="w-fit">{experience.period}</Badge>
        </CardHeader>
        <CardContent>
          <p className="leading-7 text-muted-foreground">{experience.summary}</p>
          <ul className="mt-6 grid gap-3">
            {experience.impact.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.article>
  );
}
