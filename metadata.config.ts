export const SITE_NAME = "Chris & Micah's Wedding";
export const SITE_LOCALE = "en_US";
export const THEME_COLOR = "#ede8d0";
export const WEDDING_DATE = "2026-10-13";
export const SOCIAL_PREVIEW_IMAGE = "/wedding-social-preview.jpg";
export const formatPageTitle = (pageTitle: string) =>
  `${pageTitle} | ${SITE_NAME}`;

export type StructuredDataKind = "wedding" | "article";

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
  structuredData?: StructuredDataKind;
}

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "Chris & Micah's Wedding | October 13, 2026",
    description:
      "Celebrate the wedding of Chris and Micah on October 13, 2026, in Silang, Cavite. Explore their story, wedding details, venue, and countdown.",
    path: "/",
    type: "website",
    image: SOCIAL_PREVIEW_IMAGE,
    structuredData: "wedding",
  },
  rsvp: {
    title: formatPageTitle("RSVP"),
    description:
      "Respond to Chris and Micah's wedding invitation for October 13, 2026, in Silang, Cavite.",
    path: "/rsvp",
    type: "website",
    image: SOCIAL_PREVIEW_IMAGE,
    noIndex: true,
    structuredData: "wedding",
  },
  responses: {
    title: formatPageTitle("RSVP Responses"),
    description:
      "Private administration area for reviewing wedding RSVP responses.",
    path: "/responses",
    type: "website",
    noIndex: true,
  },
  khmerCeremony: {
    title: "Cambodian Wedding Ceremony Schedule | Chris & Micah",
    description:
      "Learn about the schedule and traditions of the Cambodian Khmer wedding ceremony for Chris and Micah's celebration.",
    path: "/khmer-ceremony",
    type: "article",
    image: SOCIAL_PREVIEW_IMAGE,
    structuredData: "article",
  },
  denied: {
    title: formatPageTitle("Access Denied"),
    description:
      "This private wedding page is not available to the current visitor.",
    path: "/denied",
    type: "website",
    noIndex: true,
  },
  notFound: {
    title: formatPageTitle("Page Not Found"),
    description:
      "The requested page could not be found on Chris and Micah's wedding website.",
    path: "/404",
    type: "website",
    noIndex: true,
  },
};
