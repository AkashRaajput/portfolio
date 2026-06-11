export function getProjectScreenshotPath(slug: string) {
  return `/projects/screenshots/${slug}.jpg`;
}

/** @deprecated Use local screenshot paths via getProjectScreenshotPath */
export function getWebsiteScreenshotUrl(url: string) {
  const normalized = url.replace(/^https?:\/\//, "");
  return `https://image.thum.io/get/width/800/crop/600/noanimate/${normalized}`;
}
