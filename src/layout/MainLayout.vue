<script setup lang="ts">
import { nextTick, onMounted, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import MusicToggle from "@/components/wedding/MusicToggle.vue";
import { ROUTE_NAMES } from "@/router";

// @ts-ignore
import Sakura from "@micman/sakura/dist/sakura.min.js";
// @ts-ignore
import Neela from "@/assets/js/scripts.js";
// import { setDescription, setImage, setTitle } from "./helpers";

const route = useRoute();
let templateDependenciesReady = false;

const initializeTemplate = async () => {
  if (
    !templateDependenciesReady ||
    route.name === ROUTE_NAMES.WELCOME ||
    Neela.initialized
  ) {
    return;
  }

  await nextTick();
  Neela.init();
};

onMounted(async () => {
  // @ts-ignore
  await import("/src/assets/js/ismobile.js");
  templateDependenciesReady = true;
  await initializeTemplate();

  /**** Sakura JS ****/
  new Sakura("div#wrapper", {
    fallSpeed: 20,
    delay: 200,
  });
});

watch(
  () => route.name,
  () => initializeTemplate(),
  { immediate: true, flush: "post" }
);
</script>

<template>
  <div id="wrapper">
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view>
    <MusicToggle />
  </div>
</template>

<style>
@import "@micman/sakura/dist/sakura.min.css";
</style>
