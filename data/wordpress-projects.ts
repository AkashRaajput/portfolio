import type { WebsiteProject } from "@/types";
import { getWebsiteScreenshotUrl } from "@/lib/screenshot-url";

const wordpressProject = (project: Omit<WebsiteProject, "group">): WebsiteProject => ({
  ...project,
  group: "wordpress",
});

export const wordpressProjects: WebsiteProject[] = [
  wordpressProject({
    slug: "get-neffy",
    title: "Get Neffy",
    liveUrl: "https://visit.getneffy.com/",
    screenshot: getWebsiteScreenshotUrl("https://visit.getneffy.com/"),
    headline: "Healthcare Patient Portal",
    period: "2024 – 2025",
    technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "Responsive UI", "SEO"],
    description:
      "WordPress site for neffy® virtual visit booking—guiding patients through medical intake, prescriber scheduling, and pharmacy fulfillment for needle-free epinephrine access.",
    challenge:
      "The brand needed a compliant, mobile-first WordPress experience that could walk patients through insurance-aware virtual visit booking without overwhelming a regulated healthcare audience.",
    approach:
      "Structured the CMS around a step-by-step patient journey with Elementor layouts, conditional content blocks, and performance-tuned assets for fast load on mobile networks.",
    contributions: [
      "Implemented WordPress CMS architecture for multi-step virtual visit and onboarding flows.",
      "Built responsive Elementor page sections for appointment booking, prescriber education, and pharmacy pickup paths.",
      "Developed custom JavaScript interactions for form progression and state-specific visit requirements.",
      "Optimized page weight, image delivery, and Core Web Vitals across high-traffic landing pages.",
      "Configured SEO metadata and semantic markup for healthcare discovery pages.",
    ],
    businessImpact: [
      "Gave patients a frictionless path to book virtual prescriber visits and access neffy® without in-person clinic visits.",
      "Reduced content update overhead for marketing teams managing regulated healthcare messaging.",
    ],
    metric: "Healthcare CMS",
    accent: "from-sky-400/24 via-blue-400/10 to-transparent",
  }),
  wordpressProject({
    slug: "landmark-aquatic",
    title: "Landmark Aquatic",
    liveUrl: "https://landmarkaquatic.com/",
    screenshot: getWebsiteScreenshotUrl("https://landmarkaquatic.com/"),
    headline: "Commercial Aquatics Platform",
    period: "2024 – 2025",
    technologies: ["WordPress", "Custom Theme", "PHP", "SCSS", "JavaScript", "ACF"],
    description:
      "WordPress site for a commercial pool design, build, and maintenance firm—showcasing municipal, resort, educational, and community aquatic projects across the United States.",
    challenge:
      "Landmark Aquatic needed a portfolio-driven WordPress site that could organize dozens of facility types and project case studies while keeping service pages editable for non-technical staff.",
    approach:
      "Delivered a custom WordPress theme with structured content types for projects, verticals, and testimonials—paired with responsive layouts tuned for image-heavy case study galleries.",
    contributions: [
      "Developed custom WordPress theme templates for service verticals, project portfolios, and featured case studies.",
      "Built Advanced Custom Fields structures so marketing teams could publish new aquatic projects independently.",
      "Implemented responsive grid layouts for large photography sets across municipalities, resorts, and school natatoriums.",
      "Optimized image loading and layout stability for portfolio pages with extensive media assets.",
      "Integrated lead capture and contact workflows aligned with commercial sales inquiries.",
    ],
    businessImpact: [
      "Enabled Landmark Aquatic to present a national project portfolio that supports bids for municipal, resort, and educational contracts.",
      "Improved inbound lead quality by routing visitors through service-specific content paths.",
    ],
    metric: "Portfolio CMS",
    accent: "from-cyan-400/24 via-teal-400/10 to-transparent",
  }),
  wordpressProject({
    slug: "crx-markets",
    title: "CRX Markets",
    liveUrl: "https://www.crxmarkets.com/",
    screenshot: getWebsiteScreenshotUrl("https://www.crxmarkets.com/"),
    headline: "FinTech Corporate Platform",
    period: "2024 – 2025",
    technologies: ["WordPress", "Custom Development", "PHP", "JavaScript", "Multilingual", "SEO"],
    description:
      "Corporate WordPress platform for Europe's leading working-capital financing marketplace—presenting supply chain finance solutions to corporates, banks, and institutional investors.",
    challenge:
      "CRX Markets required a credible fintech web presence that could communicate complex financing products, publish multilingual news, and surface enterprise client testimonials without sacrificing performance.",
    approach:
      "Built modular WordPress page components for product positioning, news publishing, and client proof— with structured content models for case studies and team profiles.",
    contributions: [
      "Developed custom WordPress templates for corporate and financing-partner solution pages.",
      "Built news and insights publishing workflows with archive and category navigation.",
      "Implemented client testimonial and logo showcase modules for enterprise social proof.",
      "Delivered responsive layouts for data-heavy fintech content across desktop and mobile.",
      "Tuned SEO structure and page performance for international corporate discovery.",
    ],
    businessImpact: [
      "Strengthened CRX Markets' digital credibility with Nestlé, Vattenfall, and other enterprise clients featured on-site.",
      "Gave marketing teams a maintainable platform for publishing working-capital finance insights.",
    ],
    metric: "FinTech CMS",
    accent: "from-indigo-400/24 via-violet-400/10 to-transparent",
  }),
  wordpressProject({
    slug: "pipehorn",
    title: "Pipehorn",
    liveUrl: "https://pipehorn.com/",
    screenshot: getWebsiteScreenshotUrl("https://pipehorn.com/"),
    headline: "Industrial Product Catalog",
    period: "2024 – 2025",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Custom Post Types", "SEO"],
    description:
      "WordPress product site for Pipehorn utility locating equipment—supporting underground pipe, cable, magnetic locator, and water leak detector lines sold to gas, telecom, and municipal crews.",
    challenge:
      "Pipehorn needed a WordPress catalog that could educate field crews on product differences, surface customer testimonials, and drive factory-direct purchases for specialized locating hardware.",
    approach:
      "Structured WordPress around product families, support resources, and trade-show content—with WooCommerce-ready product presentation and video demonstration embeds.",
    contributions: [
      "Built WordPress product category architecture for locators, magnetic locators, and leak detectors.",
      "Developed custom templates for product detail pages, comparison content, and customer testimonial sections.",
      "Implemented locating tips and video library sections for field crew education.",
      "Optimized responsive product layouts for mobile use by utility crews in the field.",
      "Configured SEO and structured content for industrial equipment discovery.",
    ],
    businessImpact: [
      "Gave Pipehorn a digital storefront that supports factory-direct sales and field crew product research.",
      "Reduced sales friction by surfacing product demos, support resources, and trade-show schedules in one place.",
    ],
    metric: "Product catalog",
    accent: "from-amber-400/24 via-orange-400/10 to-transparent",
  }),
  wordpressProject({
    slug: "real-gangsters",
    title: "Real Gangsters",
    liveUrl: "https://www.realgangsters.com/",
    screenshot: getWebsiteScreenshotUrl("https://www.realgangsters.com/"),
    headline: "MMA Apparel E-commerce",
    period: "2024 – 2025",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "E-commerce", "Responsive UI"],
    description:
      "WooCommerce-powered WordPress store for Real Gangsters—an MMA lifestyle brand selling fight gear, rashguards, jiu-jitsu shorts, and apparel built around discipline and community.",
    challenge:
      "The brand needed a fast, mobile-first e-commerce experience that could merchandise fight gear and lifestyle collections while reflecting the grit of an MMA movement brand.",
    approach:
      "Delivered a WooCommerce WordPress storefront with collection-based navigation, product variant handling, and performance-focused front-end assets for mobile shoppers.",
    contributions: [
      "Built WooCommerce catalog structure for fight gear, new arrivals, lifestyle, and youth collections.",
      "Developed responsive product grid and detail templates optimized for mobile commerce.",
      "Implemented cart, checkout, and product variant flows for apparel sizing and color options.",
      "Tuned page performance for image-heavy product photography across collections.",
      "Configured category landing pages for seasonal drops and bestseller merchandising.",
    ],
    businessImpact: [
      "Launched a direct-to-consumer storefront that supports Real Gangsters' MMA community and apparel sales.",
      "Improved mobile conversion paths for fight gear and lifestyle product discovery.",
    ],
    metric: "WooCommerce store",
    accent: "from-rose-400/24 via-red-400/10 to-transparent",
  }),
  wordpressProject({
    slug: "charter-and-co",
    title: "Charter & Co",
    liveUrl: "https://charter.film/",
    screenshot: getWebsiteScreenshotUrl("https://charter.film/"),
    headline: "Production Studio Portfolio",
    period: "2024 – 2025",
    technologies: ["WordPress", "Custom Theme", "JavaScript", "Video Integration", "Responsive UI", "SEO"],
    description:
      "WordPress portfolio for Charter—a commercial video production studio delivering commercials, branded documentaries, and anthem films for agencies and brand teams.",
    challenge:
      "Charter needed a visually driven WordPress site that could showcase film work, explain a four-stage production process, and convert agency inquiries without compromising cinematic presentation.",
    approach:
      "Built a custom WordPress theme centered on video case studies, process storytelling, and testimonial modules—with lazy-loaded media and responsive layouts for portfolio browsing.",
    contributions: [
      "Developed custom WordPress templates for commercial, documentary, and live session project showcases.",
      "Built video embed and manifesto presentation modules with performance-conscious loading.",
      "Implemented process-stage content sections for concepting through post-production.",
      "Created testimonial and FAQ modules supporting agency and brand lead generation.",
      "Optimized responsive layouts and SEO for creative production discovery.",
    ],
    businessImpact: [
      "Gave Charter a portfolio platform that presents high-end production work to agency and brand prospects.",
      "Streamlined inbound inquiry paths for commercial, documentary, and virtual production projects.",
    ],
    metric: "Creative portfolio",
    accent: "from-fuchsia-400/20 via-purple-400/10 to-transparent",
  }),
  wordpressProject({
    slug: "forge-virtual-studios",
    title: "Forge Virtual Studios",
    liveUrl: "https://forgevirtualstudios.com/",
    screenshot: getWebsiteScreenshotUrl("https://forgevirtualstudios.com/"),
    headline: "Virtual Production Studio",
    period: "2024 – 2025",
    technologies: ["WordPress", "Custom Development", "JavaScript", "Video", "Responsive UI", "SEO"],
    description:
      "WordPress site for Forge Virtual Studios—a Chicago-area LED volume virtual production facility with two stages, Unreal Engine workflows, and hospitality-focused studio rentals.",
    challenge:
      "Forge needed a WordPress site that could communicate technical studio specs, showcase LED volume capabilities, and convert production teams researching virtual production near Chicago.",
    approach:
      "Structured WordPress around studio stages, tech specifications, amenity highlights, and client testimonials—with video-forward layouts and location convenience content.",
    contributions: [
      "Built custom WordPress sections for Studio A and Studio B LED volume specifications.",
      "Developed tech spec, amenity, and location proximity modules for production team research.",
      "Implemented video hero and testimonial components for virtual production case studies.",
      "Created FAQ and booking inquiry flows for studio rental lead generation.",
      "Optimized responsive performance for media-rich studio marketing pages.",
    ],
    businessImpact: [
      "Positioned Forge as a Midwest virtual production destination for agencies, brands, and filmmakers.",
      "Reduced sales cycle friction by surfacing studio specs, amenities, and client results upfront.",
    ],
    metric: "Studio marketing site",
    accent: "from-emerald-400/24 via-lime-400/10 to-transparent",
  }),
  wordpressProject({
    slug: "campaign-creators",
    title: "Campaign Creators",
    liveUrl: "https://www.campaigncreators.com/",
    screenshot: getWebsiteScreenshotUrl("https://www.campaigncreators.com/"),
    headline: "HubSpot Agency Website",
    period: "2024 – 2025",
    technologies: ["WordPress", "Custom Theme", "PHP", "JavaScript", "SEO", "Performance Optimization"],
    description:
      "WordPress marketing site for Campaign Creators—an Elite HubSpot Solutions Partner offering enterprise HubSpot implementation, replatforming, and revenue system architecture.",
    challenge:
      "An Elite-tier HubSpot agency needed its own WordPress site to communicate complex service offerings, accreditations, and enterprise case studies while maintaining fast performance and clear conversion paths.",
    approach:
      "Delivered a modular WordPress build with service vertical pages, case study structures, and accreditation proof—optimized for SEO and lead capture across multiple HubSpot service lines.",
    contributions: [
      "Developed custom WordPress templates for enterprise HubSpot service and capability pages.",
      "Built case study and client logo modules highlighting CoreSite, ASU, and other replatforming wins.",
      "Implemented blog and insights publishing architecture for HubSpot strategy content.",
      "Structured conversion-focused landing sections for HubSpot onboarding and audit requests.",
      "Optimized Core Web Vitals and SEO across service and resource pages.",
    ],
    businessImpact: [
      "Gave Campaign Creators a credible web platform aligned with their Elite HubSpot Solutions Partner positioning.",
      "Improved inbound lead capture for enterprise HubSpot implementation and replatforming engagements.",
    ],
    metric: "Agency marketing CMS",
    accent: "from-blue-400/24 via-sky-400/10 to-transparent",
  }),
];
