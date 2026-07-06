<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import RSVPFormSection from "../components/wedding/sections/RSVPFormSection.vue";
import RSVPWeddingSection from "../components/wedding/sections/RSVPWeddingSection.vue";
import WeddingLocationFullSection from "../components/wedding/sections/WeddingLocationFullSection.vue";

import BridesMaidsAndGroomsMenSection from "../components/wedding/sections/BridesMaidsAndGroomsMenSection.vue";
import WeddingGiftsSection from "../components/wedding/sections/WeddingGiftsSection.vue";
import GallerySection from "../components/wedding/sections/GallerySection.vue";
import CountdownSection from "../components/wedding/sections/CountdownSection.vue";
import TestimonialsSection from "../components/wedding/sections/TestimonialsSection.vue";

import ScrollToTop from "@/components/wedding/ScrollToTop.vue";
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
  <RSVPWeddingSection />
  <RSVPFormSection />
  <WeddingLocationFullSection />
  <BridesMaidsAndGroomsMenSection />
  <WeddingGiftsSection />
  <GallerySection />
  <CountdownSection />
  <TestimonialsSection />

  <ScrollToTop v-if="displayScrollToTop" />
</template>
