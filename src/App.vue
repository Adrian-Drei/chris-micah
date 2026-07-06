<script setup lang="ts">
import { RouterView } from "vue-router";
import PreLoader from "./components/wedding/PreLoader.vue";
</script>

<template>
  <div id="wedding-mm">
    <pre-loader />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/style/style.scss";
</style>
