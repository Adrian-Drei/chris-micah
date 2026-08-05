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
</style>
