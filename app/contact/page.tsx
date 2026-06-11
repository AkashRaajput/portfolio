import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Akash Kumar.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return <ContactSection standalone />;
}
