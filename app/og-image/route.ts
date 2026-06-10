import { siteConfig } from "@/config/site";

export function GET() {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#08111f"/>
  <circle cx="190" cy="90" r="260" fill="#2dd4bf" opacity="0.28"/>
  <circle cx="1000" cy="520" r="320" fill="#f59e0b" opacity="0.16"/>
  <rect x="72" y="72" width="1056" height="486" rx="32" fill="#111827" opacity="0.74" stroke="#2dd4bf" stroke-opacity="0.3"/>
  <text x="112" y="142" fill="#5eead4" font-family="Arial, sans-serif" font-size="28" font-weight="700">Portfolio</text>
  <text x="112" y="286" fill="#f8fafc" font-family="Arial, sans-serif" font-size="76" font-weight="700">${siteConfig.name}</text>
  <text x="112" y="356" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="36">HubSpot CMS Developer | Python Developer</text>
  <text x="112" y="410" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="36">AI Enthusiast</text>
  <text x="112" y="506" fill="#99f6e4" font-family="Arial, sans-serif" font-size="28">HubSpot CMS • HubL • Python • AI • CRM Integrations</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
