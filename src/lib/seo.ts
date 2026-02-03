/**
 * SEO helper for Haddon Digital Group – site URL for metadata and schemas.
 */

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.haddondigitalgroup.com";
}
