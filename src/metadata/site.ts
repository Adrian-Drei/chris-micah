export {
  SITE_LOCALE,
  SITE_NAME,
  SOCIAL_PREVIEW_IMAGE,
  THEME_COLOR,
  WEDDING_DATE,
  formatPageTitle,
  pageMetadata,
} from "../../metadata.config";
export type { PageMetadata, StructuredDataKind } from "../../metadata.config";

const configuredSiteUrl = (import.meta.env.VITE_SITE_URL || "").trim();

export const getSiteOrigin = () =>
  configuredSiteUrl ? configuredSiteUrl.replace(/\/$/, "") : "";

export const toAbsoluteUrl = (path: string) => {
  if (/^https?:\/\//i.test(path)) return path;
  const origin = getSiteOrigin();
  return origin ? new URL(path, `${origin}/`).href : path;
};
