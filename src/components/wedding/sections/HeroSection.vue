<script setup lang="ts">
import { computed } from "vue";
import { getQueryParam, KEY_QUERY_PARAM } from "../forms/helpers";

const weddingKey = computed(() => {
  const key = getQueryParam(KEY_QUERY_PARAM);
  return key ?? null;
});
</script>

<template>
  <!-- BEGIN HERO SECTION -->
  <section id="hero" class="bg-slideshow section-divider-bottom-1">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="hero-wrapper v-center">
            <h2 data-animation-direction="fade" data-animation-delay="600">
              Save the Date
            </h2>

            <h1 class="hero-title">
              <span
                data-animation-direction="from-right"
                data-animation-delay="300"
                class="me-2"
                >Chris</span
              >
              <small
                data-animation-direction="from-top"
                data-animation-delay="300"
                class="me-2"
                >&</small
              >
              <span
                data-animation-direction="from-left"
                data-animation-delay="300"
                >Micah</span
              >
            </h1>

            <div
              class="hero-subtitle"
              data-animation-direction="fade"
              data-animation-delay="1000"
            >
              <span>October 13, 2026</span>
            </div>

            <div data-animation-direction="fade" data-animation-delay="1000">
              <a
                :href="'/rsvp?key=' + weddingKey"
                class="btn btn-primary scrollto"
              >
                Confirm your presence
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END HERO SECTION -->
</template>

<style scoped></style>
