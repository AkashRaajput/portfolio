export function getWebsiteScreenshotUrl(url: string) {
  const normalized = url.replace(/^https?:\/\//, "");
  return `https://image.thum.io/get/width/800/crop/600/noanimate/${normalized}`;
}
