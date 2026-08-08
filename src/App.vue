<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import PreLoader from "./components/wedding/PreLoader.vue";

const route = useRoute();
</script>

<template>
  <div id="wedding-mm">
    <pre-loader v-if="route.path !== '/welcome'" />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/style/style.scss";

/* Shared mobile navigation control. */
#nav-mobile-btn {
  color: #4f493b;
  background-color: #ede8d0;
  border: 1px solid rgba(79, 73, 59, 0.22);
  box-shadow: 0 5px 15px rgba(79, 73, 59, 0.08);
  transition: color 0.25s ease, background-color 0.25s ease,
    border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

#nav-mobile-btn:hover,
#nav-mobile-btn:focus-visible,
#nav-mobile-btn:active,
#wrapper.open #nav-mobile-btn {
  color: #fff;
  background-color: #4f493b;
  border-color: #4f493b;
  box-shadow: 0 8px 20px rgba(79, 73, 59, 0.22);
  transform: translateY(-1px);
}

#nav-mobile-btn:focus-visible {
  outline: 2px solid #4f493b;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  #nav-mobile-btn {
    transition: none;
  }
}
</style>
