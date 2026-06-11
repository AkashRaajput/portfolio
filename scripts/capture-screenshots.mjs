import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sites = [
  { slug: "get-neffy", url: "https://visit.getneffy.com/" },
  { slug: "landmark-aquatic", url: "https://landmarkaquatic.com/" },
  { slug: "crx-markets", url: "https://www.crxmarkets.com/" },
  { slug: "pipehorn", url: "https://pipehorn.com/" },
  { slug: "real-gangsters", url: "https://www.realgangsters.com/" },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const site of sites) {
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(2000);
    const output = path.join(__dirname, "..", "public", "projects", "screenshots", `${site.slug}.jpg`);
    await page.screenshot({ path: output, type: "jpeg", quality: 85, fullPage: false });
    console.log(`Saved ${site.slug}`);
  } catch (error) {
    console.error(`Failed ${site.slug}:`, error instanceof Error ? error.message : error);
  }
}

await browser.close();
