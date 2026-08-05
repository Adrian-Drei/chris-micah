import "vue-router";
import type { PageMetadata } from "./site";

declare module "vue-router" {
  interface RouteMeta {
    metadata?: PageMetadata;
  }
}
