import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "valiantys-ticketing-portal",
    title: "Valiantys Ticketing Portal",
    category: "Professional Project",
    period: "2024 – Present",
    liveUrl: "https://www.valiantys.com",
    overview:
      "Built an enterprise ticketing portal on HubSpot CMS enabling customers to authenticate via Atlassian OAuth, view organization tickets, create tickets, comment on tickets, and access multiple Jira Service Management regions through a single unified portal.",
    problem:
      "Enterprise customers across APAC, EMEA, and North America needed access to region-specific Jira Service Management instances without managing separate portals, credentials, or support workflows for each region.",
    solution:
      "Architected a unified HubSpot membership portal with multi-region routing, Atlassian OAuth authentication, secure session management, client-to-region mapping, and AWS deployment planning—connecting ticket viewing, creation, and commenting across JSM regions through one interface.",
    technologies: [
      "HubSpot CMS",
      "HubSpot Memberships",
      "HubDB",
      "Node.js",
      "TypeScript",
      "AWS",
      "Atlassian OAuth",
      "Jira Service Management",
    ],
    keyContributions: [
      "Designed multi-region routing architecture for APAC, EMEA, and North America JSM access.",
      "Built Atlassian OAuth integration flows for secure customer authentication.",
      "Designed secure session management across the unified portal experience.",
      "Planned ticket creation, detail, and comment management API architecture.",
      "Implemented client-to-region mapping logic.",
      "Designed AWS deployment architecture for the integration platform.",
      "Created unified HubSpot portal experience consolidating regional JSM access.",
    ],
    results: [
      "Enabled customers across APAC, EMEA, and North America to access Jira Service Management through a single portal.",
    ],
    metric: "Enterprise support portal",
    accent: "from-violet-400/24 via-indigo-400/10 to-transparent",
    featured: true,
    headline: "Enterprise Support Portal",
  },
  {
    slug: "easy-travel-customer-portal",
    title: "Easy Travel Customer Portal",
    category: "Professional Project",
    period: "2024 – Present",
    liveUrl: "https://dev.hubspotexperts.com/portal-development-page",
    overview:
      "Developed a membership-based travel portal enabling customers to manage tours, resources, merchandise, FAQs, and personalized travel experiences through a centralized HubSpot CMS and HubDB platform.",
    problem:
      "Travel customers needed a single authenticated portal to manage purchased tours, merchandise, resources, FAQs, and personalized content—replacing fragmented post-purchase experiences across separate touchpoints.",
    solution:
      "Built a HubSpot membership portal with HubDB-backed data connections, personalized dashboards, Save Tour functionality, and integrated merchandise, resource, and profile management workflows.",
    technologies: ["HubSpot Memberships", "HubDB", "HubSpot CMS", "JavaScript"],
    keyContributions: [
      "Built Save Tour functionality for customer tour management.",
      "Created membership authentication flows and login/logout logic.",
      "Developed personalized dashboards connected to purchased tour data.",
      "Integrated merchandise workflows and resource delivery logic.",
      "Implemented FAQ systems and profile management workflows.",
      "Developed multi-tour support for customers with multiple active bookings.",
    ],
    results: [
      "Delivered a centralized customer portal improving customer engagement and self-service capabilities.",
    ],
    metric: "Membership travel portal",
    accent: "from-orange-400/24 via-amber-400/10 to-transparent",
    featured: true,
    headline: "Membership Travel Portal",
  },
  {
    slug: "gtia-resource-library",
    title: "GTIA Resource Library",
    category: "Professional Project",
    period: "2024 – Present",
    liveUrl: "https://gtia.org/resource-library",
    overview:
      "Developed a HubDB-powered resource library with membership-based content access, gated listing and detail pages, reporting capabilities, and personalized content delivery for GTIA members.",
    problem:
      "The organization needed to distribute resource content at scale while enforcing membership-based access, tracking engagement, and delivering personalized experiences based on session and membership state.",
    solution:
      "Built a HubDB resource library with gated listing and detail pages, membership access logic, thank-you page workflows, reporting structures, and cookie- and session-based conditional content rendering.",
    technologies: ["HubSpot CMS", "HubDB", "HubL", "JavaScript", "HubSpot Workflows"],
    keyContributions: [
      "Built HubDB listing pages and dynamic detail pages for resource content.",
      "Implemented gated content experiences with membership access logic.",
      "Developed thank-you page workflows and reporting structures.",
      "Built tracking architecture for resource engagement.",
      "Implemented cookie-based personalization and session-based membership detection.",
      "Created conditional content rendering based on membership status.",
    ],
    results: [
      "Enabled scalable content distribution and membership-based resource delivery.",
    ],
    metric: "HubDB resource library",
    accent: "from-cyan-400/24 via-sky-400/10 to-transparent",
    featured: true,
    headline: "Membership Resource Library",
  },
  {
    slug: "nemko-digital-experience-platform",
    title: "Nemko Digital Experience Platform",
    category: "Professional Project",
    period: "2024 – Present",
    liveUrl: "https://www.nemko.com",
    overview:
      "Delivered multiple HubDB-powered solutions for Nemko spanning a Global Market Access country comparison platform (nemko.com/services/global-market-access/select-by-country), a resource management library, and a dynamic events platform (nemko.com/resources/events)—forming a scalable HubDB ecosystem across the site.",
    problem:
      "Nemko required multiple HubDB-driven experiences—a custom country comparison engine for global market access, a scalable resource library with gated and ungated content, and a dynamic events platform—each needing listing pages, detail routing, and content automation without redundant CMS overhead.",
    solution:
      "Delivered an integrated HubDB ecosystem with a multi-country comparison engine, resource management platform with dynamic routing, and an events platform featuring HubDB slider integration, upcoming event filtering, and date-based automation.",
    technologies: ["HubSpot CMS", "HubDB", "HubL", "JavaScript"],
    keyContributions: [
      "Global Market Access: Built custom country comparison engine with dynamic HubDB integration, multi-country comparison functionality, drag-and-drop compatible modules, and responsive comparison tables.",
      "Resource Management: Developed HubDB resource library with dynamic listing pages, detail pages, gated and ungated experiences, and dynamic routing.",
      "Events Platform: Built dynamic event listings, event detail pages, event slider HubDB integration, upcoming event filtering, date-based automation, and dynamic content population.",
    ],
    results: [
      "Created a scalable HubDB ecosystem supporting resources, events, and global market access content across nemko.com.",
    ],
    metric: "HubDB ecosystem",
    accent: "from-teal-400/24 via-blue-400/10 to-transparent",
    featured: true,
    headline: "HubDB Digital Experience Platform",
  },
  {
    slug: "easy-travel-merchandise-automation",
    title: "Easy Travel Merchandise Automation",
    category: "Professional Project",
    period: "2024 – Present",
    liveUrl: "https://dev.hubspotexperts.com/merchandise-page",
    overview:
      "Built merchandise management and HubSpot CRM automation workflows connecting a HubDB product catalog to deal pipelines, line item synchronization, and customer purchase workflows.",
    problem:
      "Merchandise sales required a structured product catalog connected to HubSpot CRM—with deal automation and line item synchronization—to eliminate manual pipeline updates and inconsistent purchase tracking.",
    solution:
      "Architected HubDB product catalog management with CRM workflow integration, deal automation, line item synchronization, product sorting systems, and a dedicated merchandise pipeline structure.",
    technologies: ["HubDB", "HubSpot CRM", "JavaScript", "HubSpot Deals"],
    keyContributions: [
      "Designed product catalog architecture and HubDB product management system.",
      "Built deal automation and line item synchronization workflows.",
      "Integrated CRM workflow automation for merchandise purchases.",
      "Implemented product sorting systems and merchandise pipeline architecture.",
    ],
    results: [
      "Automated merchandise management and customer purchase workflows across HubSpot CRM.",
    ],
    metric: "CRM merchandise automation",
    accent: "from-lime-400/20 via-emerald-400/10 to-transparent",
    headline: "Merchandise & CRM Automation",
  },
  {
    slug: "telus-health-marketing-automation",
    title: "Telus Health Marketing Automation",
    category: "Professional Project",
    period: "2024 – Present",
    liveUrl: "https://www.telushealth.com",
    overview:
      "Worked on HubSpot CRM workflow validation, landing page migration, lead routing, and marketing automation QA for Telus Health—ensuring reliable form automation, email workflows, and MQL routing.",
    problem:
      "Marketing automation workflows, landing pages, and lead routing required systematic validation and migration support to ensure accurate branch logic, reliable MQL routing, and consistent form and email automation across HubSpot CRM.",
    solution:
      "Executed workflow testing and branch validation, performed form and email automation QA, supported landing page migration, and troubleshooted CRM workflows to stabilize marketing operations.",
    technologies: ["HubSpot CRM", "HubSpot Workflows", "Forms", "Email Automation"],
    keyContributions: [
      "Conducted workflow testing and branch validation across HubSpot automation paths.",
      "Performed form automation and email automation QA.",
      "Supported landing page migration to HubSpot.",
      "Troubleshot CRM workflow issues and validated MQL routing logic.",
    ],
    results: [
      "Improved reliability and accuracy of marketing automation systems for Telus Health.",
    ],
    metric: "Marketing automation QA",
    accent: "from-rose-400/20 via-orange-400/10 to-transparent",
    headline: "Marketing Automation & Lead Routing",
  },
  {
    slug: "campaign-creators-website",
    title: "Campaign Creators Website",
    category: "Professional Project",
    period: "2024 – Present",
    liveUrl: "https://www.campaigncreators.com/",
    overview:
      "HubSpot CMS marketing site for Campaign Creators—an Elite HubSpot Solutions Partner offering enterprise implementation, replatforming, and revenue system architecture across all Hubs.",
    problem:
      "An Elite-tier HubSpot agency needed a CMS-driven site to communicate complex service offerings, accreditations, and enterprise case studies while maintaining fast performance and clear conversion paths.",
    solution:
      "Delivered HubSpot CMS templates with service vertical pages, case study modules, accreditation proof, and conversion-focused landing sections optimized for SEO and lead capture.",
    technologies: ["HubSpot CMS", "HubL", "HubDB", "JavaScript", "SEO", "CRM Integrations"],
    keyContributions: [
      "Developed HubSpot CMS templates for enterprise service and capability pages.",
      "Built case study and client logo modules highlighting CoreSite, ASU, and replatforming wins.",
      "Implemented blog and insights publishing architecture for HubSpot strategy content.",
      "Structured conversion-focused landing sections for HubSpot onboarding and audit requests.",
      "Optimized Core Web Vitals and SEO across service and resource pages.",
    ],
    results: [
      "Gave Campaign Creators a credible HubSpot CMS platform aligned with Elite Solutions Partner positioning.",
      "Improved inbound lead capture for enterprise HubSpot implementation and replatforming engagements.",
    ],
    metric: "Agency marketing CMS",
    accent: "from-blue-400/24 via-sky-400/10 to-transparent",
    headline: "Elite HubSpot Agency Site",
  },
  {
    slug: "charter-and-co",
    title: "Charter & Co",
    category: "Professional Project",
    period: "2024 – Present",
    liveUrl: "https://charter.film/",
    overview:
      "HubSpot CMS portfolio for Charter—a commercial video production studio delivering commercials, branded documentaries, and anthem films for agencies and brand teams.",
    problem:
      "Charter needed a visually driven HubSpot CMS site that could showcase film work, explain a four-stage production process, and convert agency inquiries without compromising cinematic presentation.",
    solution:
      "Built HubSpot CMS templates centered on video case studies, process storytelling, and testimonial modules—with performance-conscious media loading and responsive portfolio layouts.",
    technologies: ["HubSpot CMS", "HubL", "JavaScript", "Video Integration", "Responsive UI", "SEO"],
    keyContributions: [
      "Developed HubSpot CMS templates for commercial, documentary, and live session project showcases.",
      "Built video embed and manifesto presentation modules with performance-conscious loading.",
      "Implemented process-stage content sections for concepting through post-production.",
      "Created testimonial and FAQ modules supporting agency and brand lead generation.",
      "Optimized responsive layouts and SEO for creative production discovery.",
    ],
    results: [
      "Gave Charter a portfolio platform that presents high-end production work to agency and brand prospects.",
      "Streamlined inbound inquiry paths for commercial, documentary, and virtual production projects.",
    ],
    metric: "Creative portfolio",
    accent: "from-fuchsia-400/20 via-purple-400/10 to-transparent",
    headline: "Production Studio Portfolio",
  },
  {
    slug: "forge-virtual-studios",
    title: "Forge Virtual Studios",
    category: "Professional Project",
    period: "2024 – Present",
    liveUrl: "https://forgevirtualstudios.com/",
    overview:
      "HubSpot CMS site for Forge Virtual Studios—a Chicago-area LED volume virtual production facility with two stages, Unreal Engine workflows, and hospitality-focused studio rentals.",
    problem:
      "Forge needed a HubSpot CMS site that could communicate technical studio specs, showcase LED volume capabilities, and convert production teams researching virtual production near Chicago.",
    solution:
      "Structured HubSpot CMS pages around studio stages, tech specifications, amenity highlights, and client testimonials—with video-forward layouts and location convenience content.",
    technologies: ["HubSpot CMS", "HubL", "HubDB", "JavaScript", "Video", "Responsive UI"],
    keyContributions: [
      "Built HubSpot CMS sections for Studio A and Studio B LED volume specifications.",
      "Developed tech spec, amenity, and location proximity modules for production team research.",
      "Implemented video hero and testimonial components for virtual production case studies.",
      "Created FAQ and booking inquiry flows for studio rental lead generation.",
      "Optimized responsive performance for media-rich studio marketing pages.",
    ],
    results: [
      "Positioned Forge as a Midwest virtual production destination for agencies, brands, and filmmakers.",
      "Reduced sales cycle friction by surfacing studio specs, amenities, and client results upfront.",
    ],
    metric: "Studio marketing site",
    accent: "from-emerald-400/24 via-lime-400/10 to-transparent",
    headline: "Virtual Production Studio",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const hubspotProjects = projects;
export const personalProjects = projects.filter((project) => project.category === "Personal Project");
export const professionalProjects = projects.filter((project) => project.category === "Professional Project");

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
