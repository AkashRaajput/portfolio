import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3456;
const PRINT_URL = `http://localhost:${PORT}/resume/print`;
const OUTPUT = path.join(__dirname, "..", "public", "resume", "Akash_Kumar_CV.pdf");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Server not ready yet.
    }
    await wait(1000);
  }
  throw new Error(`Server did not become ready at ${url}`);
}

function startServer() {
  const child = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: path.join(__dirname, ".."),
    stdio: "ignore",
    shell: true,
    detached: process.platform !== "win32",
  });
  return child;
}

async function generatePdf() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(PRINT_URL, { waitUntil: "networkidle", timeout: 60000 });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: OUTPUT,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" },
  });

  await browser.close();
  console.log(`Resume PDF saved to ${OUTPUT}`);
}

async function main() {
  const server = startServer();

  try {
    await waitForServer(PRINT_URL);
    await generatePdf();
  } finally {
    if (process.platform === "win32") {
      spawn("taskkill", ["/pid", String(server.pid), "/f", "/t"], { stdio: "ignore", shell: true });
    } else {
      process.kill(-server.pid);
    }
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
