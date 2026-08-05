<script setup lang="ts">
/* global google */
import { onMounted, ref } from "vue";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

const mapElement = ref<HTMLElement | null>(null);
const mapError = ref("");
const venue = { lat: 14.238514644113346, lng: 121.03768978860317 };

onMounted(async () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  if (!apiKey || apiKey === "not-set-yet") {
    mapError.value = "Google Maps is not configured yet.";
    return;
  }

  try {
    setOptions({ key: apiKey, v: "weekly" });
    const { Map } = (await importLibrary("maps")) as google.maps.MapsLibrary;
    const { AdvancedMarkerElement, PinElement } = (await importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;

    if (!mapElement.value) return;

    const map = new Map(mapElement.value, {
      center: venue,
      zoom: 16,
      mapId: import.meta.env.VITE_GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID",
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    });

    const pin = new PinElement({
      background: "#ede8d0",
      borderColor: "#756a4b",
      glyphColor: "#4f493b",
      scale: 1.15,
    });

    new AdvancedMarkerElement({
      map,
      position: venue,
      title: "Chateaux De Paris",
      content: pin,
    });
  } catch (error) {
    mapError.value =
      "We could not load the map. Please use the venue link below.";
    console.error("Google Maps failed to load", error);
  }
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

    <!-- GOOGLE MAPS JAVASCRIPT API -->
    <div class="map-wrapper">
      <div
        ref="mapElement"
        class="google-map"
        aria-label="Wedding venue map"
      ></div>
      <div v-if="mapError" class="map-error">
        <i class="fas fa-map-marker-alt"></i>
        <p>{{ mapError }}</p>
      </div>
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
            <a
              href="https://www.google.com/maps/search/?api=1&query=Chateaux+De+Paris+South+Forbes+Golf+City+Silang+Cavite"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chateaux De Paris<br />
              South Forbes Golf City, South Boulevard Silang, Cavite 4118
            </a>
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

.google-map {
  display: block;
  width: 100%;
  height: 500px;
}

.map-error {
  display: flex;
  min-height: 300px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  color: #665f50;
  text-align: center;
  background: #f8f5e8;
}

.map-error i {
  color: #817655;
  font-size: 36px;
}

.pins a {
  color: inherit;
}

@media (max-width: 768px) {
  .google-map {
    height: 350px;
  }
}
</style>
