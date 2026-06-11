import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = siteConfig.seoTitle;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#ecfeff",
          background:
            "radial-gradient(circle at 20% 10%, rgba(45, 212, 191, 0.36), transparent 34%), linear-gradient(135deg, #08111f 0%, #101827 52%, #14211f 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: "28px", color: "#5eead4", fontWeight: 700 }}>
          {siteConfig.title}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "78px", fontWeight: 700, letterSpacing: "0" }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "24px",
              maxWidth: "920px",
              fontSize: "38px",
              lineHeight: 1.25,
              color: "#cbd5e1",
            }}
          >
            {siteConfig.ogDescription}
          </div>
        </div>

        <div style={{ display: "flex", gap: "18px", fontSize: "28px", color: "#99f6e4" }}>
          <div style={{ display: "flex" }}>HubSpot CMS</div>
          <div style={{ display: "flex" }}>HubDB</div>
          <div style={{ display: "flex" }}>CRM Automation</div>
          <div style={{ display: "flex" }}>Membership Portals</div>
          <div style={{ display: "flex" }}>Next.js</div>
        </div>
      </div>
    ),
    size,
  );
}
