export const siteConfig = {
  name: "Akash Kumar",
  role: "HubSpot CMS Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-kappa-gray-11.vercel.app",
  description:
    "Portfolio of Akash Kumar — HubSpot CMS Developer at Palmspire Technology.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "akashrajput8265@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+918923896991",
  location: "Dehradun, India",
  socials: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/AkashRaajput",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/akash-kumar-a52195200/",
  },
  resume: {
    href: "/resume/Akash_Kumar_CV.pdf",
    filename: "Akash_Kumar_CV.pdf",
  },
};
