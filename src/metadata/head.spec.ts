import { beforeEach, describe, expect, it } from "vitest";
import type { RouteLocationNormalizedLoaded } from "vue-router";
import { applyRouteMetadata } from "./head";
import { pageMetadata } from "./site";

const routeWith = (metadata: typeof pageMetadata[string]) =>
  ({ meta: { metadata } } as unknown as RouteLocationNormalizedLoaded);

describe("route metadata", () => {
  beforeEach(() => {
    document.head.innerHTML = '<meta name="description" content="old" />';
  });

  it("sets unique public page metadata without duplicating tags", () => {
    applyRouteMetadata(routeWith(pageMetadata.khmerCeremony));
    applyRouteMetadata(routeWith(pageMetadata.khmerCeremony));

    expect(document.title).toBe(pageMetadata.khmerCeremony.title);
    expect(
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content")
    ).toBe(pageMetadata.khmerCeremony.description);
    expect(document.querySelectorAll('meta[property="og:title"]')).toHaveLength(
      1
    );
    expect(
      document.querySelectorAll('meta[name="twitter:title"]')
    ).toHaveLength(1);
  });

  it("prevents private routes from being indexed", () => {
    applyRouteMetadata(routeWith(pageMetadata.responses));

    expect(
      document.querySelector('meta[name="robots"]')?.getAttribute("content")
    ).toBe("noindex, nofollow, noarchive");
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
    expect(
      document.querySelector('script[type="application/ld+json"]')
    ).toBeNull();
  });
});
