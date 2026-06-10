import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { siteConfig } from "@/config/site";

export function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: "HubSpot CMS Developer",
    worksFor: {
      "@type": "Organization",
      name: "Palmspire Technology",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dehradun",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Dev Bhoomi Institute of Technology",
    },
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
    knowsAbout: [
      "HubSpot CMS",
      "HubL",
      "HubDB",
      "WordPress",
      "Python",
      "Flask",
      "TensorFlow",
      "OpenCV",
      "Next.js",
      "API Integrations",
      "CRM Integrations",
      "Membership Systems",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${siteConfig.name} - ${siteConfig.role}`,
    url: siteConfig.url,
    description: profile.bio,
    mainEntity: personSchema,
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: project.liveUrl ?? `${siteConfig.url}/projects/${project.slug}`,
      description: project.overview,
      keywords: project.technologies.join(", "),
    })),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema, portfolioSchema]),
      }}
    />
  );
}
