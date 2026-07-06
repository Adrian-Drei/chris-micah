<script setup lang="ts">
import { computed } from "vue";
import { getQueryParam, KEY_QUERY_PARAM } from "../forms/helpers";

const weddingKey = computed(() => {
  const key = getQueryParam(KEY_QUERY_PARAM);
  return key ?? null;
});
</script>

<template>
  <!-- BEGIN THE WEDDING SECTION -->
  <section
    id="the-wedding"
    class="parallax-background bg-color-overlay padding-divider-top section-divider-bottom-1"
  >
    <div class="section-divider-top-1 off-section"></div>

    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="section-title">Invitation</h1>
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 center"
        >
          <div
            class="invite neela-style"
            data-animation-direction="from-left"
            data-animation-delay="100"
          >
            <span class="h-lines"></span>
            <span class="v-lines"></span>

            <div class="invite_title">
              <div class="text">Save<small>the</small>Date</div>
            </div>

            <div class="invite_info">
              <div class="row">
                <div class="col-6">
                  <h2>
                    Mr. Bernardo Madriage <br />
                    <small>&</small> <br />
                    Mrs. Cristina Madriaga
                  </h2>
                </div>

                <div class="col-6">
                  <h2>
                    Mr. Fernando Badua Jr. <br />
                    <small>&</small> <br />
                    Mr. Jacqueline Badua
                  </h2>
                </div>
              </div>

              <div class="uppercase my-4">
                joyfully invite you to celebrate the marriage of their children
              </div>

              <h1 class="my-2">Chris <small>&</small> Micah</h1>

              <div class="date">10 13 2026</div>

              <div class="uppercase">
                <i class="me-1 fas fa-map-marker-alt"></i>
                Location: Silang, Cavite
              </div>

              <br />

              <a
                :href="'/rsvp?key=' + weddingKey"
                class="btn btn-light scrollto"
              >
                RSVP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END THE WEDDING SECTION -->
</template>

<style scoped></style>
