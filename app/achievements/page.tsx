import type { Metadata } from "next";

import { AchievementsSection } from "@/components/sections/achievements-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Achievements including JEE Mains Qualified, HackerRank Gold Badge, AMCAT 99 Percentile, and 50+ delivered websites.",
  alternates: {
    canonical: `${siteConfig.url}/achievements`,
  },
};

export default function AchievementsPage() {
  return <AchievementsSection />;
}
