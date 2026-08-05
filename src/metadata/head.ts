import type { RouteLocationNormalizedLoaded } from "vue-router";
import {
  SITE_LOCALE,
  SITE_NAME,
  SOCIAL_PREVIEW_IMAGE,
  WEDDING_DATE,
  getSiteOrigin,
  toAbsoluteUrl,
  type PageMetadata,
} from "./site";

const managedAttribute = "data-wedding-metadata";

const setMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(managedAttribute, "true");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) =>
    element?.setAttribute(name, value)
  );
};

const setCanonical = (url: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );
  if (!url) {
    element?.remove();
    return;
  }
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    element.setAttribute(managedAttribute, "true");
    document.head.appendChild(element);
  }
  element.href = url;
};

const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: toAbsoluteUrl("/"),
});

const weddingSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Wedding of Chris and Micah",
  description: "The wedding celebration of Chris and Micah in Silang, Cavite.",
  startDate: WEDDING_DATE,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Chateaux De Paris",
    address: {
      "@type": "PostalAddress",
      streetAddress: "South Forbes Golf City, South Boulevard",
      addressLocality: "Silang",
      addressRegion: "Cavite",
      postalCode: "4118",
      addressCountry: "PH",
    },
  },
  image: [toAbsoluteUrl(SOCIAL_PREVIEW_IMAGE)],
  url: toAbsoluteUrl("/"),
});

const articleSchema = (metadata: PageMetadata) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Schedule of the Cambodian (Khmer) Ceremony",
  description: metadata.description,
  mainEntityOfPage: toAbsoluteUrl(metadata.path),
});

const breadcrumbSchema = (metadata: PageMetadata) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: toAbsoluteUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cambodian Ceremony",
      item: toAbsoluteUrl(metadata.path),
    },
  ],
});

const setStructuredData = (metadata: PageMetadata) => {
  document.head
    .querySelectorAll(`script[type="application/ld+json"][${managedAttribute}]`)
    .forEach((element) => element.remove());

  if (!getSiteOrigin() || metadata.noIndex) return;

  const data: object[] = [websiteSchema()];
  if (metadata.structuredData === "wedding") data.push(weddingSchema());
  if (metadata.structuredData === "article") {
    data.push(articleSchema(metadata), breadcrumbSchema(metadata));
  }

  data.forEach((value) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute(managedAttribute, "true");
    script.textContent = JSON.stringify(value);
    document.head.appendChild(script);
  });
};

export const applyRouteMetadata = (route: RouteLocationNormalizedLoaded) => {
  const metadata = route.meta.metadata as PageMetadata | undefined;
  if (!metadata) return;

  const canonicalUrl = getSiteOrigin() ? toAbsoluteUrl(metadata.path) : "";
  const imageUrl = toAbsoluteUrl(metadata.image || SOCIAL_PREVIEW_IMAGE);
  const robots =
    metadata.noIndex || !getSiteOrigin()
      ? "noindex, nofollow, noarchive"
      : "index, follow, max-image-preview:large";

  document.title = metadata.title;
  setMeta('meta[name="description"]', {
    name: "description",
    content: metadata.description,
  });
  setMeta('meta[name="robots"]', { name: "robots", content: robots });
  setMeta('meta[name="googlebot"]', { name: "googlebot", content: robots });
  setMeta('meta[property="og:site_name"]', {
    property: "og:site_name",
    content: SITE_NAME,
  });
  setMeta('meta[property="og:locale"]', {
    property: "og:locale",
    content: SITE_LOCALE,
  });
  setMeta('meta[property="og:type"]', {
    property: "og:type",
    content: metadata.type || "website",
  });
  setMeta('meta[property="og:title"]', {
    property: "og:title",
    content: metadata.title,
  });
  setMeta('meta[property="og:description"]', {
    property: "og:description",
    content: metadata.description,
  });
  setMeta('meta[property="og:image"]', {
    property: "og:image",
    content: imageUrl,
  });
  setMeta('meta[property="og:image:type"]', {
    property: "og:image:type",
    content: "image/jpeg",
  });
  setMeta('meta[property="og:image:width"]', {
    property: "og:image:width",
    content: "1200",
  });
  setMeta('meta[property="og:image:height"]', {
    property: "og:image:height",
    content: "630",
  });
  setMeta('meta[property="og:image:alt"]', {
    property: "og:image:alt",
    content: "Cherry blossoms for Chris and Micah's wedding",
  });
  setMeta('meta[name="twitter:card"]', {
    name: "twitter:card",
    content: "summary_large_image",
  });
  setMeta('meta[name="twitter:title"]', {
    name: "twitter:title",
    content: metadata.title,
  });
  setMeta('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: metadata.description,
  });
  setMeta('meta[name="twitter:image"]', {
    name: "twitter:image",
    content: imageUrl,
  });
  setMeta('meta[name="twitter:image:alt"]', {
    name: "twitter:image:alt",
    content: "Cherry blossoms for Chris and Micah's wedding",
  });

  if (canonicalUrl) {
    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
  } else {
    document.head.querySelector('meta[property="og:url"]')?.remove();
  }
  setCanonical(canonicalUrl);
  setStructuredData(metadata);
};
