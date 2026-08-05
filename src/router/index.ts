/* eslint-disable prettier/prettier */

export const name = "wedding-mm";

export const ROUTE_NAMES = {
  HOME: `${name}`,
  RSVP: `${name}-rsvp`,
  RESPONSES: `${name}-responses`,
  KHMER_CEREMONY: `${name}-khmer-ceremony`,
  DENIED: `${name}-denied`,
  NOT_FOUND: `${name}-404`,
};

import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layout/MainLayout.vue";
import { applyRouteMetadata } from "../metadata/head";
import { pageMetadata } from "../metadata/site";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: ROUTE_NAMES.HOME,
      component: MainLayout,
      children: [
        {
          path: "/",
          name: ROUTE_NAMES.HOME,
          meta: { metadata: pageMetadata.home },
          components: {
            header: () =>
              import("../components/wedding/headers/MainHeader.vue"),
            content: () => import("../views/WeddingView.vue"),
            footer: () =>
              import("../components/wedding/footers/MainFooter.vue"),
          },
        },
        {
          path: "/rsvp",
          name: ROUTE_NAMES.RSVP,
          meta: { metadata: pageMetadata.rsvp },
          components: {
            header: () =>
              import("../components/wedding/headers/RSVPHeader.vue"),
            content: () => import("../views/RSVPView.vue"),
            footer: () =>
              import("../components/wedding/footers/MainFooter.vue"),
          },
        },
        {
          path: "/responses",
          name: ROUTE_NAMES.RESPONSES,
          meta: { metadata: pageMetadata.responses },
          components: {
            header: () =>
              import("../components/wedding/headers/ResponsesHeader.vue"),
            content: () => import("../views/ResponsesView.vue"),
            footer: () =>
              import("../components/wedding/footers/MainFooter.vue"),
          },
        },
        {
          path: "/khmer-ceremony",
          name: ROUTE_NAMES.KHMER_CEREMONY,
          meta: { metadata: pageMetadata.khmerCeremony },
          components: {
            header: () =>
              import("../components/wedding/headers/BlogHeader.vue"),
            content: () => import("../views/blog/KhmerCeremonyPost.vue"),
            footer: () =>
              import("../components/wedding/footers/MainFooter.vue"),
          },
        },
        {
          path: "/denied",
          name: ROUTE_NAMES.DENIED,
          meta: { metadata: pageMetadata.denied },
          components: {
            content: () => import("../views/403View.vue"),
            footer: () =>
              import("../components/wedding/footers/MainFooter.vue"),
          },
        },
        {
          path: "/:pathMatch(.*)*",
          name: ROUTE_NAMES.NOT_FOUND,
          meta: { metadata: pageMetadata.notFound },
          components: {
            content: () => import("../views/404View.vue"),
            footer: () =>
              import("../components/wedding/footers/MainFooter.vue"),
          },
        },
      ],
    },
  ],
});

router.afterEach((route) => {
  applyRouteMetadata(route);
});

export default router;
