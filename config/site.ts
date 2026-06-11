export const siteConfig = {
  name: "Akash Kumar",
  role: "HubSpot CMS Developer | Python Developer | AI Enthusiast",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://akashkumar.dev",
  description:
    "Portfolio of Akash Kumar — HubSpot CMS Developer at Palmspire Technology with 50+ websites delivered, HubDB expertise, API integrations, and Python/AI projects.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "akashrajput8265@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+918923896991",
  location: "Dehradun, India",
  socials: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/AkashRaajput",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/akash-kumar-a52195200/",
  },
  resume: {
    href: "/resume",
    filename: "Akash_Kumar_CV.pdf",
  },
};
