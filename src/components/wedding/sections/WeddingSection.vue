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
    <!-- The class "section-divider-top-1" can also be applied to the tag <section>. In this case, it was added on a new <div> because the tag <section> have all pseudo elements (::after and ::before) in use. -->
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
                    Mme. DOE Jane <br />
                    <small>&</small> <br />
                    M. DOE John
                  </h2>
                </div>

                <div class="col-6">
                  <h2>
                    Mme. ROE Rosalie <br />
                    <small>&</small> <br />
                    M. ROE Richard
                  </h2>
                </div>
              </div>

              <div class="uppercase my-4">
                ont la joie de vous faire part du mariage de leurs enfants
              </div>

              <h1 class="my-2">Mélaine <small>&</small> Michel</h1>

              <div class="date">le DD-DD MM, YYYY</div>
              <div class="uppercase">
                <i class="me-1 fas fa-map-marker-alt"></i>
                Localisation: Ile-De-France
              </div>
              <br />

              <a
                :href="'/rsvp?key=' + weddingKey"
                class="btn btn-light scrollto"
              >
                Confirmer votre présence
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
