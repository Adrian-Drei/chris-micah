/* eslint-disable prettier/prettier */

export const name = "wedding-mm";

export const ROUTE_NAMES = {
  HOME: `${name}`,
  RSVP: `${name}-rsvp`,
  KHMER_CEREMONY: `${name}-khmer-ceremony`,
  DENIED: `${name}-denied`,
  NOT_FOUND: `${name}-404`,
};

import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layout/MainLayout.vue";

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
          components: {
            header: () => import("../components/wedding/headers/MainHeader.vue"),
            content: () => import("../views/WeddingView.vue"),
            footer: () => import("../components/wedding/footers/MainFooter.vue"),
          },
        },
        {
          path: "/rsvp",
          name: ROUTE_NAMES.RSVP,
          components: {
            header: () => import("../components/wedding/headers/RSVPHeader.vue"),
            content: () => import("../views/RSVPView.vue"),
            footer: () => import("../components/wedding/footers/MainFooter.vue"),
          },
        },
        {
          path: "/khmer-ceremony",
          name: ROUTE_NAMES.KHMER_CEREMONY,
          components: {
            header: () => import("../components/wedding/headers/BlogHeader.vue"),
            content: () => import("../views/blog/KhmerCeremonyPost.vue"),
            footer: () => import("../components/wedding/footers/MainFooter.vue"),
          },
        },
        {
          path: "/denied",
          name: ROUTE_NAMES.DENIED,
          components: {
            content: () => import("../views/403View.vue"),
            footer: () => import("../components/wedding/footers/MainFooter.vue"),
          },
        },
        {
          path: '/:pathMatch(.*)*',
          name: ROUTE_NAMES.NOT_FOUND,
          components: {
            content: () => import("../views/404View.vue"),
            footer: () => import("../components/wedding/footers/MainFooter.vue"),
          },
        }
      ],
    },
  ],
});

export default router;
