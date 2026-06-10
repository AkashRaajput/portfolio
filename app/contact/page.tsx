import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Akash Kumar for HubSpot CMS, Python, API integration, CRM, and AI-oriented development work.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return <ContactSection standalone />;
}
