<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import HeroSection from "../components/wedding/sections/HeroSection.vue";
import AboutUsSection from "../components/wedding/sections/AboutUsSection.vue";
import WeddingLocationFullSection from "../components/wedding/sections/WeddingLocationFullSection.vue";
import SponsorsSection from "../components/wedding/sections/SponsorsSection.vue";
import WeddingGiftsSection from "../components/wedding/sections/WeddingGiftsSection.vue";
import GallerySection from "../components/wedding/sections/GallerySection.vue";
import CountdownSection from "../components/wedding/sections/CountdownSection.vue";
import DetailsSection from "../components/wedding/sections/DetailsSection.vue";
import ScrollToTop from "../components/wedding/ScrollToTop.vue";
import { isInnerHeightReached } from "@/utils/helpers";

const displayScrollToTop = ref(false);

const onScroll = () => {
  displayScrollToTop.value = isInnerHeightReached();
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.document.body.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <HeroSection />
  <AboutUsSection />
  <SponsorsSection />
  <DetailsSection />
  <WeddingGiftsSection />
  <GallerySection />
  <WeddingLocationFullSection />
  <CountdownSection />

  <ScrollToTop v-if="displayScrollToTop" />
</template>
