import { projects } from "@/data/all-projects";
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
    jobTitle: siteConfig.title,
    description: profile.professionalSummary,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary",
        addressRegion: "Alberta",
        addressCountry: "Canada",
      },
    },
    workLocation: {
      "@type": "Place",
      name: siteConfig.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressCountry: "India",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Dev Bhoomi Institute of Technology",
    },
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
    knowsAbout: [
      "HubSpot Developer",
      "HubSpot CMS Developer",
      "HubDB Developer",
      "HubSpot Automation Specialist",
      "HubSpot CMS Expert",
      "Web Developer",
      "WordPress Developer",
      "CRM Automation",
      "HubSpot Membership Portal",
      "HubSpot Dynamic Pages",
      "HubSpot CMS",
      "HubL",
      "HubDB",
      "Custom Modules",
      "Membership Platforms",
      "Workflow Automation",
      "CRM Integrations",
      "Dynamic Content Systems",
      "Next.js",
      "React",
      "TypeScript",
      "WordPress",
      "Python",
      "Flask",
      "REST APIs",
      "SEO Optimization",
      "Accessibility",
      "Core Web Vitals",
      "Technical Documentation",
      "Solution Architecture",
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
    name: siteConfig.seoTitle,
    url: siteConfig.url,
    description: profile.professionalSummary,
    mainEntity: personSchema,
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: project.liveUrl ?? `${siteConfig.url}/projects/${project.slug}`,
      description: project.overview,
      keywords: project.technologies.join(", "),
    })),
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — HubSpot Development Services`,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: ["North America", "India"],
    serviceType: [
      "HubSpot CMS Development",
      "HubDB Development",
      "HubSpot Automation",
      "CRM Integration",
      "Membership Portal Development",
      "WordPress Development",
      "Web Development",
    ],
    provider: personSchema,
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          personSchema,
          websiteSchema,
          portfolioSchema,
          professionalServiceSchema,
        ]),
      }}
    />
  );
}
