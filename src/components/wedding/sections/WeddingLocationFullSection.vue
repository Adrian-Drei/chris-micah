<script setup lang="ts">
import { computed } from "vue";
import { getQueryParam, KEY_QUERY_PARAM } from "../forms/helpers";

const weddingKey = computed(() => {
  const key = getQueryParam(KEY_QUERY_PARAM);
  return key ?? null;
});
</script>

<template>
  <!-- BEGIN WEDDING LOCATION SECTION -->
  <section id="location" class="no-padding-bottom">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="section-title">Location</h2>
        </div>
      </div>
    </div>

    <!-- GOOGLE MAP EMBED -->
    <div class="map-wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7734.504065943806!2d121.03768978860317!3d14.238514644113346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sChateaux%20De%20Paris%20South%20Forbes%20Golf%20City%2C%20South%20BLVD%2C%20Silang%204118%20Cavite!5e0!3m2!1sen!2sph!4v1783374109284!5m2!1sen!2sph"
        width="100%"
        height="500"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

    <div
      class="map_pins_full"
      data-animation-direction="fade"
      data-animation-delay="200"
    >
      <ul class="pins">
        <li>
          <i class="fas fa-praying-hands"></i>
          <p>
            Chateaux De Paris<br />
            South Forbes Golf City, South Boulevard Silang, Cavite 4118
          </p>
        </li>
      </ul>
    </div>
  </section>
  <!-- END WEDDING LOCATION SECTION -->
</template>

<style scoped>
.pins li {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.pins li p {
  margin: 0;
}
.map-wrapper {
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
}

.map-wrapper iframe {
  display: block;
  width: 100%;
  height: 500px;
}

@media (max-width: 768px) {
  .map-wrapper iframe {
    height: 350px;
  }
}
</style>
