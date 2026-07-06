<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import HeroSection from "../components/wedding/sections/HeroSection.vue";
import AboutUsSection from "../components/wedding/sections/AboutUsSection.vue";
import OurStorySection from "../components/wedding/sections/OurStorySection.vue";
import TimelineSection from "../components/wedding/sections/TimelineSection.vue";
import WeddingSection from "../components/wedding/sections/WeddingSection.vue";
import WeddingLocationFullSection from "../components/wedding/sections/WeddingLocationFullSection.vue";
import BridesMaidsAndGroomsMenSection from "../components/wedding/sections/BridesMaidsAndGroomsMenSection.vue";
import SponsorsSection from "../components/wedding/sections/SponsorsSection.vue";
import WeddingGiftsSection from "../components/wedding/sections/WeddingGiftsSection.vue";
import GallerySection from "../components/wedding/sections/GallerySection.vue";
import CountdownSection from "../components/wedding/sections/CountdownSection.vue";
import TestimonialsSection from "../components/wedding/sections/TestimonialsSection.vue";
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
  <OurStorySection />
  <TimelineSection />
  <WeddingSection />
  <WeddingLocationFullSection />
  <BridesMaidsAndGroomsMenSection />
  <SponsorsSection />
  <WeddingGiftsSection />
  <GallerySection />
  <CountdownSection />
  <TestimonialsSection />
  <DetailsSection />

  <ScrollToTop v-if="displayScrollToTop" />
</template>
