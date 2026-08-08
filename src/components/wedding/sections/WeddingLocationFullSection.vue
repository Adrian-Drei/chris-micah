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
          <p class="location-eyebrow">Where we say “I do”</p>
          <h2 class="section-title">Location</h2>
          <p class="location-intro">
            Chateaux De Paris <span>-</span> Silang, Cavite
          </p>
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
#location {
  position: relative;
  padding-top: 90px;
  overflow: hidden;
  color: #4f493b;
  background: radial-gradient(
      circle at 50% 0%,
      rgba(219, 185, 174, 0.18),
      transparent 35%
    ),
    linear-gradient(180deg, #fbfaf3, #f4efdf);
  isolation: isolate;
}

#location::before,
#location::after {
  position: absolute;
  z-index: -1;
  top: -90px;
  width: clamp(260px, 27vw, 520px);
  aspect-ratio: 1;
  background: url("/src/assets/images/flower-medium.svg") center / contain
    no-repeat;
  content: "";
  opacity: 0.13;
  pointer-events: none;
}

#location::before {
  left: -7%;
  transform: rotate(38deg);
  animation: location-leaf-left 15s ease-in-out infinite alternate;
}

#location::after {
  right: -7%;
  transform: scaleX(-1) rotate(38deg);
  animation: location-leaf-right 18s ease-in-out infinite alternate;
}

.location-eyebrow,
.location-intro {
  text-align: center;
}

.location-eyebrow {
  margin: 0 0 0.65rem;
  color: #8b8062;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
}

.location-intro {
  margin: -1.9rem 0 3rem;
  color: #68604f;
  font-family: "Playfair Display", serif;
  font-size: 0.88rem;
  font-style: italic;
  letter-spacing: 0.08em;
}

.location-intro span {
  margin: 0 0.55rem;
  color: #a99f7e;
}

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
  position: relative;
  width: 100%;
  margin-top: 0;
  overflow: hidden;
  border-top: 1px solid rgba(79, 73, 59, 0.2);
  border-bottom: 1px solid rgba(79, 73, 59, 0.2);
  box-shadow: 0 18px 50px rgba(79, 73, 59, 0.13);
  transition: box-shadow 0.65s ease;
}

.map-wrapper:hover {
  box-shadow: 0 24px 65px rgba(79, 73, 59, 0.2);
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

.map_pins_full {
  padding: 16px 20px;
  background: rgba(237, 232, 208, 0.94);
  border-bottom: 1px solid rgba(79, 73, 59, 0.18);
}

.pins a {
  transition: color 0.3s ease;
}

.pins a:hover,
.pins a:focus-visible {
  color: #817655;
}

@keyframes location-leaf-left {
  to {
    transform: translate3d(16px, 12px, 0) rotate(41deg);
  }
}

@keyframes location-leaf-right {
  to {
    transform: translate3d(-18px, 9px, 0) scaleX(-1) rotate(35deg);
  }
}

@media (max-width: 768px) {
  #location {
    padding-top: 65px;
  }

  #location::before,
  #location::after {
    top: -25px;
    opacity: 0.08;
  }

  .location-intro {
    margin-bottom: 2.2rem;
  }

  .google-map {
    height: 350px;
  }
}

@media (prefers-reduced-motion: reduce) {
  #location::before,
  #location::after {
    animation: none;
  }

  .map-wrapper,
  .pins a {
    transition: none;
  }
}
</style>
