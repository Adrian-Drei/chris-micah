import { fileURLToPath, URL } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import { defineConfig, loadEnv, type Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import {
  SITE_LOCALE,
  SITE_NAME,
  SOCIAL_PREVIEW_IMAGE,
  WEDDING_DATE,
  pageMetadata,
  type PageMetadata,
} from "./metadata.config";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const setStaticMeta = (
  html: string,
  attribute: "name" | "property",
  key: string,
  content: string
) => {
  const pattern = new RegExp(
    `<meta[^>]+${attribute}=["']${key}["'][^>]*>`,
    "i"
  );
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n</head>`);
};

const createMetadataPlugin = (mode: string): Plugin => {
  const rawSiteUrl =
    loadEnv(mode, process.cwd(), "").VITE_SITE_URL?.trim() || "";
  let siteUrl = "";
  let outputDirectory = "";
  let isBuild = false;

  if (rawSiteUrl) {
    const parsed = new URL(rawSiteUrl);
    if (parsed.protocol !== "https:" || parsed.pathname !== "/") {
      throw new Error(
        "VITE_SITE_URL must be an HTTPS origin without a path or trailing slash."
      );
    }
    siteUrl = parsed.origin;
  }

  const publicPages = ["/", "/khmer-ceremony"];

  const buildStructuredData = (metadata: PageMetadata) => {
    if (!siteUrl || metadata.noIndex) return [];
    const absolute = (path: string) => `${siteUrl}${path === "/" ? "/" : path}`;
    const data: object[] = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: absolute("/"),
      },
    ];
    if (metadata.structuredData === "wedding") {
      data.push({
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Wedding of Chris and Micah",
        description:
          "The wedding celebration of Chris and Micah in Silang, Cavite.",
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
        image: [`${siteUrl}${SOCIAL_PREVIEW_IMAGE}`],
        url: absolute("/"),
      });
    }
    if (metadata.structuredData === "article") {
      data.push(
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Schedule of the Cambodian (Khmer) Ceremony",
          description: metadata.description,
          mainEntityOfPage: absolute(metadata.path),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: absolute("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Cambodian Ceremony",
              item: absolute(metadata.path),
            },
          ],
        }
      );
    }
    return data;
  };

  const buildRouteHtml = (source: string, metadata: PageMetadata) => {
    let html = source.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapeHtml(metadata.title)}</title>`
    );
    const robots =
      metadata.noIndex || !siteUrl
        ? "noindex, nofollow, noarchive"
        : "index, follow, max-image-preview:large";
    html = setStaticMeta(html, "name", "description", metadata.description);
    html = setStaticMeta(html, "name", "robots", robots);
    html = setStaticMeta(html, "name", "googlebot", robots);
    html = setStaticMeta(html, "property", "og:site_name", SITE_NAME);
    html = setStaticMeta(html, "property", "og:locale", SITE_LOCALE);
    html = setStaticMeta(
      html,
      "property",
      "og:type",
      metadata.type || "website"
    );
    html = setStaticMeta(html, "property", "og:title", metadata.title);
    html = setStaticMeta(
      html,
      "property",
      "og:description",
      metadata.description
    );
    html = setStaticMeta(html, "name", "twitter:card", "summary_large_image");
    html = setStaticMeta(html, "name", "twitter:title", metadata.title);
    html = setStaticMeta(
      html,
      "name",
      "twitter:description",
      metadata.description
    );
    html = html
      .replace(/\s*<link[^>]+rel=["']canonical["'][^>]*>/gi, "")
      .replace(
        /\s*<meta[^>]+(?:property=["']og:(?:url|image(?::(?:alt|type|width|height))?)["']|name=["']twitter:image(?::alt)?["'])[^>]*>/gi,
        ""
      )
      .replace(
        /\s*<script type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
        ""
      );

    if (siteUrl) {
      const canonical = `${siteUrl}${
        metadata.path === "/" ? "/" : metadata.path
      }`;
      const image = `${siteUrl}${metadata.image || SOCIAL_PREVIEW_IMAGE}`;
      const additions = [
        `<link rel="canonical" href="${canonical}" />`,
        `<meta property="og:url" content="${canonical}" />`,
        `<meta property="og:image" content="${image}" />`,
        '<meta property="og:image:type" content="image/jpeg" />',
        '<meta property="og:image:width" content="1200" />',
        '<meta property="og:image:height" content="630" />',
        `<meta property="og:image:alt" content="Cherry blossoms for Chris and Micah's wedding" />`,
        `<meta name="twitter:image" content="${image}" />`,
        `<meta name="twitter:image:alt" content="Cherry blossoms for Chris and Micah's wedding" />`,
        ...buildStructuredData(metadata).map(
          (data) =>
            `<script type="application/ld+json">${JSON.stringify(
              data
            )}</script>`
        ),
      ];
      html = html.replace("</head>", `  ${additions.join("\n  ")}\n</head>`);
    }
    return html;
  };

  return {
    name: "wedding-metadata",
    configResolved(config) {
      isBuild = config.command === "build";
      outputDirectory = resolve(config.root, config.build.outDir);
    },
    transformIndexHtml(html) {
      const robots = siteUrl
        ? "index, follow, max-image-preview:large"
        : "noindex, nofollow, noarchive";
      let output = html.replaceAll(
        "index, follow, max-image-preview:large",
        robots
      );

      if (siteUrl) {
        output = output.replace(
          "</head>",
          `    <link rel="canonical" href="${siteUrl}/" />\n` +
            `    <meta property="og:url" content="${siteUrl}/" />\n` +
            `    <meta property="og:image" content="${siteUrl}/wedding-social-preview.jpg" />\n` +
            `    <meta property="og:image:alt" content="Cherry blossoms for Chris and Micah's wedding" />\n` +
            `    <meta name="twitter:image" content="${siteUrl}/wedding-social-preview.jpg" />\n` +
            `    <meta name="twitter:image:alt" content="Cherry blossoms for Chris and Micah's wedding" />\n` +
            "  </head>"
        );
      }
      return output;
    },
    generateBundle() {
      const robots = [
        "User-agent: *",
        "Allow: /",
        "Disallow: /responses",
        "Disallow: /denied",
        ...(siteUrl ? [`Sitemap: ${siteUrl}/sitemap.xml`] : []),
        "",
      ].join("\n");
      this.emitFile({ type: "asset", fileName: "robots.txt", source: robots });

      if (!siteUrl) return;

      const sitemap =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        publicPages
          .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
          .join("\n") +
        "\n</urlset>\n";
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: sitemap,
      });
    },
    async closeBundle() {
      if (!isBuild) return;
      const indexPath = resolve(outputDirectory, "index.html");
      const source = await readFile(indexPath, "utf8");
      await writeFile(
        indexPath,
        buildRouteHtml(source, pageMetadata.home),
        "utf8"
      );

      const routeFiles: Record<string, PageMetadata> = {
        "welcome/index.html": pageMetadata.welcome,
        "rsvp/index.html": pageMetadata.rsvp,
        "responses/index.html": pageMetadata.responses,
        "khmer-ceremony/index.html": pageMetadata.khmerCeremony,
        "denied/index.html": pageMetadata.denied,
        "404.html": pageMetadata.notFound,
      };
      await Promise.all(
        Object.entries(routeFiles).map(async ([fileName, metadata]) => {
          const outputPath = resolve(outputDirectory, fileName);
          await mkdir(dirname(outputPath), { recursive: true });
          await writeFile(outputPath, buildRouteHtml(source, metadata), "utf8");
        })
      );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue(), createMetadataPlugin(mode)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
