import type { Metadata } from "next";

import { AchievementsSection } from "@/components/sections/achievements-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Academic and professional milestones for Akash Kumar.",
  alternates: {
    canonical: `${siteConfig.url}/achievements`,
  },
};

export default function AchievementsPage() {
  return <AchievementsSection />;
}
