<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";

// @ts-ignore
import Sakura from "@micman/sakura/dist/sakura.min.js";
// @ts-ignore
import Neela from "@/assets/js/scripts.js";
// import { setDescription, setImage, setTitle } from "./helpers";

onMounted(async () => {
  // @ts-ignore
  await import("/src/assets/js/richmarker.js");
  // @ts-ignore
  await import("/src/assets/js/ismobile.js");

  /**** Template Script ****/
  Neela.init();

  /**** Sakura JS ****/
  new Sakura("div#wrapper", {
    fallSpeed: 20,
    delay: 200,
  });
});
</script>

<template>
  <div id="wrapper">
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<style>
@import "@micman/sakura/dist/sakura.min.css";
</style>
