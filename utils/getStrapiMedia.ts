// utils/getStrapiMedia.ts
export function getStrapiMedia(url: string): string {
  if (!url) return "";

  // If it's already a full URL (production), return as is
  if (url.startsWith("http")) return url;

  // Otherwise, prepend local backend base URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:1337";
  return `${baseUrl}${url}`;
}
