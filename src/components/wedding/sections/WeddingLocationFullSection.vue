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
          <h2 class="section-title">Location & Schedule</h2>
        </div>
      </div>
    </div>

    <div class="gmap" id="map_canvas_full"></div>

    <div
      class="map_pins_full"
      data-animation-direction="fade"
      data-animation-delay="200"
    >
      <ul class="pins">
        <li><i class="fas fa-praying-hands"></i>Khmer Ceremony</li>
        <li><i class="fas fa-church"></i>Church Ceremony</li>
        <li><i class="fas fa-glass-cheers"></i>Wedding Reception</li>
        <li><i class="fas fa-utensils"></i>Brunch</li>
      </ul>
    </div>
  </section>
  <!-- END WEDDING LOCATION SECTION -->

  <section id="wedding-details">
    <div class="container">
      <div class="row mt-5">
        <div
          class="col-md-3 my-5 wedding-details"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <i class="fas fa-praying-hands fa-xs"></i>
          <br />
          <h4>
            Khmer Ceremony
            <small>DD MM YYYY</small>
            <small>8:30 AM – 4:00 PM</small>
          </h4>
          <p>Paris, France <br /></p>
          <a
            :href="'/khmer-ceremony?key=' + weddingKey"
            class="btn btn-primary"
          >
            View Ceremony Program
          </a>
        </div>

        <div
          class="col-md-3 my-5 wedding-details"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <i class="fas fa-church fa-xs"></i>
          <br />
          <h4>
            Church Ceremony
            <small>DD MM YYYY</small>
            <small>1:30 PM – 3:00 PM</small>
          </h4>
          <p>Paris, France <br /></p>
          <a href="#location" class="btn btn-primary">
            More Details Coming Soon
          </a>
        </div>

        <div
          class="col-md-3 my-5 wedding-details"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <i class="fas fa-glass-cheers fa-xs"></i>
          <br />
          <h4>
            Wedding Reception
            <small>DD MM YYYY</small>
            <small>5:30 PM – 3:00 AM</small>
          </h4>
          <p>Paris, France <br /></p>
          <a href="#" class="btn btn-primary"> Nearby Accommodations </a>
        </div>

        <div
          class="col-md-3 my-5 wedding-details"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <i class="fas fa-utensils fa-xs"></i>
          <br />
          <h4>
            Brunch
            <br /><br />
            <small>DD MM YYYY</small>
            <small>11:00 AM – 2:00 PM at the Venue</small>
          </h4>
          <p>Paris, France <br /></p>
          <a href="#" class="btn btn-primary"> Visit the Venue </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
