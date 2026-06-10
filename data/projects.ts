import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "self-driving-car-ai",
    title: "Self Driving Car AI",
    category: "Personal Project",
    overview:
      "An AI-powered driving simulation project focused on lane awareness, camera-frame processing, and model-backed steering decisions.",
    problem:
      "Manual rule-based vehicle control struggles when lighting, lane curves, and visual noise change from frame to frame.",
    solution:
      "Built a CNN-based workflow that processes driving video frames, extracts visual patterns with OpenCV, and serves predictions through a Flask interface for experimentation and review.",
    technologies: ["TensorFlow", "Flask", "OpenCV", "CNN", "Video Processing"],
    keyContributions: [
      "Prepared image and video-processing flows for frame extraction and model-ready input.",
      "Designed a convolutional neural network workflow for steering prediction experiments.",
      "Connected Python inference logic with a Flask layer for easier testing and demonstration.",
    ],
    results: [
      "Created a practical AI prototype that demonstrates computer vision concepts in an autonomous-driving context.",
      "Strengthened applied understanding of CNNs, OpenCV preprocessing, and model-serving patterns.",
    ],
    metric: "AI vision prototype",
    accent: "from-emerald-400/24 via-cyan-400/10 to-transparent",
    featured: true,
    headline: "CNN-based steering from live video frames",
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "Personal Project",
    overview:
      "A machine-learning project for identifying suspicious card transactions through data analysis and classification.",
    problem:
      "Fraudulent transactions are rare compared with normal activity, making pattern discovery and reliable classification difficult.",
    solution:
      "Analyzed transaction data, prepared features, and used a Random Forest classifier to separate high-risk transactions from legitimate activity.",
    technologies: ["Machine Learning", "Random Forest", "Data Analysis", "Python", "Classification"],
    keyContributions: [
      "Explored transaction patterns and prepared data for supervised machine-learning experiments.",
      "Implemented Random Forest classification for fraud-risk prediction.",
      "Reviewed model behavior through metrics and feature-driven analysis.",
    ],
    results: [
      "Built a clear fraud-detection workflow from analysis to model evaluation.",
      "Improved practical understanding of imbalanced data, classification logic, and model interpretation.",
    ],
    metric: "ML classification",
    accent: "from-amber-400/24 via-rose-400/10 to-transparent",
  },
  {
    slug: "nemko-events-platform",
    title: "Nemko Events Platform",
    category: "Professional Project",
    overview:
      "A professional events platform built to present programs, event details, and conversion-focused user journeys.",
    problem:
      "Event experiences need clear information architecture, fast content updates, and smooth registration pathways for visitors.",
    solution:
      "Delivered structured CMS pages and reusable content patterns that made event discovery and campaign updates easier for the team.",
    technologies: ["HubSpot CMS", "HubL", "HubDB", "JavaScript", "Responsive UI"],
    keyContributions: [
      "Built reusable event-focused page sections and editable CMS modules.",
      "Structured event content for easier updates across pages and campaigns.",
      "Improved responsive presentation across desktop, tablet, and mobile views.",
    ],
    results: [
      "Created a more maintainable event content experience for marketing teams.",
      "Supported clearer visitor journeys from event discovery to action.",
    ],
    metric: "Events CMS",
    accent: "from-cyan-400/24 via-sky-400/10 to-transparent",
    featured: true,
    headline: "HubDB-powered events platform for Nemko",
  },
  {
    slug: "entelligence",
    title: "Entelligence",
    category: "Professional Project",
    overview:
      "A business website project focused on presenting services, expertise, and lead-generation content with a polished CMS experience.",
    problem:
      "Service-led websites need trustworthy messaging, flexible page building, and reliable CRM-connected conversion points.",
    solution:
      "Developed CMS-driven pages and modules that balanced brand presentation, content editing needs, and conversion-focused layouts.",
    technologies: ["HubSpot CMS", "HubL", "JavaScript", "CRM Integrations", "SEO"],
    keyContributions: [
      "Built responsive sections for service, proof, and conversion content.",
      "Implemented CMS editing patterns for scalable page updates.",
      "Supported CRM-aware forms and lead-generation flows.",
    ],
    results: [
      "Delivered a professional site experience with maintainable CMS controls.",
      "Helped align marketing pages with lead-generation workflows.",
    ],
    metric: "B2B website",
    accent: "from-violet-400/20 via-teal-400/10 to-transparent",
    featured: true,
    headline: "Service-led B2B site with CRM conversion flows",
  },
  {
    slug: "flx-networks",
    title: "FLX Networks",
    category: "Professional Project",
    overview:
      "A financial-services web project built around clear content structure, responsive pages, and business-friendly CMS management.",
    problem:
      "Financial audiences need clear navigation, credible presentation, and frictionless access to key content across devices.",
    solution:
      "Created responsive CMS sections and content structures that helped present complex information in a cleaner, more manageable way.",
    technologies: ["HubSpot CMS", "HubL", "HubDB", "JavaScript", "Responsive Development"],
    keyContributions: [
      "Developed reusable CMS modules for structured content presentation.",
      "Improved mobile and desktop responsiveness across page sections.",
      "Supported editable HubSpot content patterns for non-technical teams.",
    ],
    results: [
      "Produced a cleaner, more scalable CMS page-building experience.",
      "Supported a professional web presence for a finance-focused audience.",
    ],
    metric: "Finance CMS",
    accent: "from-lime-400/20 via-emerald-400/10 to-transparent",
  },
  {
    slug: "dxd-capital",
    title: "DXD Capital",
    category: "Professional Project",
    overview:
      "A capital and investment-focused website experience emphasizing credibility, content clarity, and polished page execution.",
    problem:
      "Investment websites must communicate trust and detail while staying easy for teams to update as content evolves.",
    solution:
      "Built professional CMS pages with structured content areas, responsive UI behavior, and clean implementation details.",
    technologies: ["HubSpot CMS", "HubL", "JavaScript", "CMS Modules", "Responsive UI"],
    keyContributions: [
      "Implemented responsive CMS page sections aligned with brand and content needs.",
      "Created reusable module patterns for consistent updates across the site.",
      "Refined spacing, layout, and interaction details for a polished presentation.",
    ],
    results: [
      "Delivered a premium CMS-managed web experience.",
      "Improved maintainability for future content and campaign updates.",
    ],
    metric: "Premium CMS",
    accent: "from-yellow-400/20 via-cyan-400/10 to-transparent",
  },
  {
    slug: "growflow",
    title: "GrowFlow",
    category: "Professional Project",
    overview:
      "A growth-focused website project supporting marketing content, CMS flexibility, and conversion-oriented user paths.",
    problem:
      "Marketing teams need pages that can evolve quickly without sacrificing performance, structure, or visual consistency.",
    solution:
      "Developed flexible CMS sections, reusable layouts, and integration-ready page patterns for ongoing content and campaign needs.",
    technologies: ["HubSpot CMS", "HubL", "HubDB", "JavaScript", "API Integrations"],
    keyContributions: [
      "Built flexible page modules for marketing and product content.",
      "Supported structured content with HubDB where dynamic page data was useful.",
      "Prepared integration-ready areas for forms, CRM actions, and campaign flows.",
    ],
    results: [
      "Enabled faster page updates through reusable CMS components.",
      "Supported a stronger bridge between marketing pages and business workflows.",
    ],
    metric: "Growth website",
    accent: "from-teal-400/24 via-blue-400/10 to-transparent",
    featured: true,
    headline: "Marketing CMS with HubDB and campaign-ready modules",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const personalProjects = projects.filter((project) => project.category === "Personal Project");
export const professionalProjects = projects.filter((project) => project.category === "Professional Project");

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
