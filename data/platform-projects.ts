import type { WebsiteProject } from "@/types";
import { getWebsiteScreenshotUrl } from "@/lib/screenshot-url";

export const nextjsProjects: WebsiteProject[] = [
  {
    slug: "palmspire-theme-documentation",
    title: "Palmspire Theme Documentation Platform",
    liveUrl: undefined,
    screenshot: getWebsiteScreenshotUrl("https://www.hubspot.com"),
    headline: "Internal Developer Platform",
    period: "2024 – Present",
    featured: true,
    group: "nextjs",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description:
      "Built an internal Next.js documentation platform for Palmspire Technology—housing HubSpot theme documentation, reusable component references, implementation guides, development standards, and onboarding resources for the delivery team.",
    challenge:
      "Distributed HubSpot developers needed a single source of truth for theme architecture, module patterns, and implementation standards—replacing scattered documents and inconsistent handoff notes.",
    approach:
      "Developed a Next.js documentation site with structured content sections, searchable component references, and standardized guides that align HubSpot theme delivery across client projects.",
    contributions: [
      "Built internal documentation systems for HubSpot theme architecture and module development.",
      "Authored implementation guides covering HubL patterns, HubDB setups, and CRM integration standards.",
      "Documented reusable component libraries and development conventions for team onboarding.",
      "Created theme documentation workflows that reduce ramp-up time for new developers.",
      "Structured knowledge management sections for internal tooling and delivery processes.",
    ],
    businessImpact: [
      "Reduced developer onboarding time and improved consistency across HubSpot theme delivery.",
      "Centralized implementation knowledge that supports faster, more reliable client handoffs.",
    ],
    metric: "Internal docs platform",
    accent: "from-primary/35 via-cyan-400/15 to-transparent",
  },
];

export const personalBuildProjects: WebsiteProject[] = [
  {
    slug: "self-driving-car-ai",
    title: "Self-Driving Car Steering Angle Prediction",
    liveUrl: "https://self-driving-car-821a.onrender.com/",
    screenshot: getWebsiteScreenshotUrl("https://self-driving-car-821a.onrender.com/"),
    headline: "Computer Vision Application",
    period: "May 2025 – Present",
    featured: true,
    group: "personal",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
    description:
      "End-to-end computer vision application that predicts steering angles from road images and video using a convolutional neural network—deployed as a Flask web app for live image and video inference.",
    challenge:
      "Behavioral cloning for steering prediction breaks down when lighting shifts, lane curvature changes, and frame-level visual noise introduce variability that rule-based systems cannot handle reliably.",
    approach:
      "Trained a TensorFlow CNN on labeled steering data with OpenCV preprocessing pipelines, then wrapped inference in a Flask application supporting uploaded images and extracted video frames.",
    contributions: [
      "Trained a CNN model in TensorFlow for steering angle prediction from road imagery.",
      "Built OpenCV preprocessing pipelines for frame extraction, normalization, and video analysis.",
      "Developed a Flask web interface for image and video upload with live inference output.",
      "Implemented behavioral cloning workflows connecting computer vision input to steering predictions.",
      "Deployed the application to Render for cloud-based demonstration and testing.",
    ],
    businessImpact: [
      "Delivered a working prototype demonstrating applied deep learning for autonomous steering concepts.",
      "Validated end-to-end skills in CNN training, video processing, and model-serving with Flask.",
    ],
    metric: "Computer vision app",
    accent: "from-emerald-400/24 via-cyan-400/10 to-transparent",
  },
];

export const platformProjects: WebsiteProject[] = [...nextjsProjects, ...personalBuildProjects];
