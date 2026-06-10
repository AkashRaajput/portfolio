import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "self-driving-car-ai",
    title: "Self Driving Car Steering Prediction",
    category: "Personal Project",
    period: "May 2025 – Present",
    overview:
      "CNN-based steering angle prediction using computer vision and deep learning, with a Flask web app for image and video analysis.",
    problem:
      "Manual rule-based steering fails when road lighting, lane curvature, and visual noise vary across frames and driving conditions.",
    solution:
      "Built a TensorFlow/Keras CNN to predict steering angles from road images, with OpenCV preprocessing and a Flask interface for uploads and cloud deployment.",
    technologies: ["TensorFlow", "Keras", "Flask", "OpenCV", "CNN", "Computer Vision"],
    keyContributions: [
      "Built a deep learning model using TensorFlow and Keras to predict steering angles from road images.",
      "Developed a Flask web application supporting image and video uploads for steering prediction analysis.",
      "Implemented OpenCV-based preprocessing, frame extraction, and video analysis workflows.",
      "Integrated model inference with a responsive UI and deployed the application for cloud-based access.",
    ],
    results: [
      "Delivered a working computer-vision prototype demonstrating autonomous-driving steering concepts.",
      "Strengthened end-to-end skills across CNN training, OpenCV pipelines, and model-serving with Flask.",
    ],
    metric: "AI vision prototype",
    accent: "from-emerald-400/24 via-cyan-400/10 to-transparent",
    featured: true,
    headline: "CNN steering prediction with Flask deployment",
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "Personal Project",
    period: "Feb 2024 – Jun 2024",
    overview:
      "Machine-learning pipeline for detecting fraudulent credit card transactions with interpretable classification workflows.",
    problem:
      "Fraudulent transactions are rare compared with legitimate activity, making reliable pattern discovery and classification difficult.",
    solution:
      "Engineered features and trained Logistic Regression and Random Forest classifiers with precision/recall-focused evaluation and feature-importance analysis.",
    technologies: ["Python", "Scikit-learn", "Random Forest", "Logistic Regression", "Pandas", "NumPy"],
    keyContributions: [
      "Developed fraud detection models using Logistic Regression and Random Forest Classifier.",
      "Performed feature engineering and model evaluation focusing on precision, recall, and fraud detection accuracy.",
      "Created an interpretable workflow with feature-importance analysis for business decision support.",
    ],
    results: [
      "Built a complete fraud-detection pipeline from data analysis through model evaluation.",
      "Improved practical understanding of imbalanced classification and model interpretation.",
    ],
    metric: "ML classification",
    accent: "from-amber-400/24 via-rose-400/10 to-transparent",
  },
  {
    slug: "hubspot-experts-tours",
    title: "HubSpot Experts Tours",
    category: "Professional Project",
    period: "2024 – 2025",
    liveUrl: "https://dev.hubspotexperts.com/tours",
    overview:
      "HubSpot CMS tour experience with expert-led session content, campaign pages, and conversion-focused visitor journeys.",
    problem:
      "Tour-style campaign pages need flexible HubSpot content management while keeping registration paths simple and persuasive.",
    solution:
      "Built HubSpot CMS templates and HubL modules for tour content, dynamic sections, and CRM-connected lead capture flows.",
    technologies: ["HubSpot CMS", "HubL", "HubDB", "JavaScript", "CRM Integrations"],
    keyContributions: [
      "Created editable HubSpot modules for tour listings, session content, and campaign sections.",
      "Supported HubSpot form and CRM-connected conversion flows across tour pages.",
      "Structured page architecture for marketing teams to update tour content independently.",
    ],
    results: [
      "Delivered a maintainable tour platform inside HubSpot CMS.",
      "Improved consistency across tour content, forms, and lead capture areas.",
    ],
    metric: "HubSpot campaign",
    accent: "from-orange-400/24 via-amber-400/10 to-transparent",
    featured: true,
    headline: "Tour platform with CRM-connected conversion paths",
  },
  {
    slug: "nemko-events-platform",
    title: "Nemko Events Platform",
    category: "Professional Project",
    period: "2024 – 2025",
    liveUrl: "https://www-nemko-com.sandbox.hs-sites.com/events",
    overview:
      "HubDB-powered events platform for program listings, event details, and registration-focused user journeys.",
    problem:
      "Event experiences require clear information architecture, fast content updates, and smooth registration pathways.",
    solution:
      "Delivered HubDB-driven event listing and detail pages with reusable HubSpot modules and responsive layouts.",
    technologies: ["HubSpot CMS", "HubL", "HubDB", "JavaScript", "Responsive UI"],
    keyContributions: [
      "Built reusable event-focused page sections and editable CMS modules.",
      "Structured HubDB content for events, programs, and campaign updates.",
      "Improved responsive presentation across desktop, tablet, and mobile views.",
    ],
    results: [
      "Created a maintainable event content experience for marketing teams.",
      "Supported clearer visitor journeys from event discovery to registration.",
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
    period: "2024 – 2025",
    liveUrl: "https://entelligence-2030188-hs-sites-com.sandbox.hs-sites.com/home",
    overview:
      "B2B website presenting services, expertise, and lead-generation content with a polished HubSpot CMS experience.",
    problem:
      "Service-led websites need trustworthy messaging, flexible page building, and reliable CRM-connected conversion points.",
    solution:
      "Developed CMS-driven pages and modules balancing brand presentation, content editing, and conversion-focused layouts.",
    technologies: ["HubSpot CMS", "HubL", "JavaScript", "CRM Integrations", "SEO"],
    keyContributions: [
      "Built responsive sections for service, proof, and conversion content.",
      "Implemented CMS editing patterns for scalable page updates.",
      "Supported CRM-aware forms and lead-generation flows.",
    ],
    results: [
      "Delivered a professional site experience with maintainable CMS controls.",
      "Aligned marketing pages with lead-generation workflows.",
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
    period: "2024 – 2025",
    liveUrl: "https://www.flxnetworks.com/",
    overview:
      "Financial-services web platform with structured content, responsive pages, and business-friendly CMS management.",
    problem:
      "Financial audiences need credible presentation, clear navigation, and frictionless access to key content across devices.",
    solution:
      "Created responsive HubSpot CMS sections and HubDB content structures for complex financial information.",
    technologies: ["HubSpot CMS", "HubL", "HubDB", "JavaScript", "Responsive Development"],
    keyContributions: [
      "Developed reusable CMS modules for structured content presentation.",
      "Improved mobile and desktop responsiveness across page sections.",
      "Supported editable HubSpot content patterns for non-technical teams.",
    ],
    results: [
      "Produced a cleaner, scalable CMS page-building experience.",
      "Supported a professional web presence for a finance-focused audience.",
    ],
    metric: "Finance CMS",
    accent: "from-lime-400/20 via-emerald-400/10 to-transparent",
  },
  {
    slug: "dxd-capital",
    title: "DXD Capital",
    category: "Professional Project",
    period: "2024 – 2025",
    liveUrl: "https://dxd.capital/",
    overview:
      "Investment-focused website emphasizing credibility, content clarity, and polished HubSpot CMS execution.",
    problem:
      "Investment websites must communicate trust and detail while staying easy for teams to update as content evolves.",
    solution:
      "Built professional CMS pages with structured content areas, responsive UI, and reusable module patterns.",
    technologies: ["HubSpot CMS", "HubL", "JavaScript", "CMS Modules", "Responsive UI"],
    keyContributions: [
      "Implemented responsive CMS page sections aligned with brand and content needs.",
      "Created reusable module patterns for consistent updates across the site.",
      "Refined spacing, layout, and interaction details for a premium presentation.",
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
    period: "2024 – 2025",
    liveUrl: "https://www.growflow.com/growflow-blog-2025",
    overview:
      "Growth-focused marketing website with CMS flexibility, HubDB content, and conversion-oriented user paths.",
    problem:
      "Marketing teams need pages that evolve quickly without sacrificing performance, structure, or visual consistency.",
    solution:
      "Developed flexible CMS sections, HubDB-driven layouts, and integration-ready patterns for campaigns and blog content.",
    technologies: ["HubSpot CMS", "HubL", "HubDB", "JavaScript", "API Integrations"],
    keyContributions: [
      "Built flexible page modules for marketing and product content.",
      "Supported structured content with HubDB for dynamic page data.",
      "Prepared integration-ready areas for forms, CRM actions, and campaign flows.",
    ],
    results: [
      "Enabled faster page updates through reusable CMS components.",
      "Strengthened the bridge between marketing pages and business workflows.",
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
