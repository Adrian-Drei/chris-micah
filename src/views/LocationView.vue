<script setup lang="ts">
import WeddingLocationFullSection from "@/components/wedding/sections/WeddingLocationFullSection.vue";
import venueArtwork from "@/assets/images/wedding_mm/chateaux-de-paris.png";
import mapsQr from "@/assets/images/wedding_mm/chateaux-de-paris-maps-qr.png";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Chateaux+De+Paris+South+Forbes+Golf+City+Silang+Cavite";
</script>

<template>
  <main class="location-page">
    <section class="location-masthead">
      <div class="location-masthead__ornament" aria-hidden="true"></div>
      <div class="container">
        <p class="location-masthead__eyebrow">Chris &amp; Micah</p>
        <h1>Wedding Location</h1>
        <div class="location-masthead__divider" aria-hidden="true">
          <span></span><i>&#9671;</i><span></span>
        </div>
        <p class="location-masthead__lead">
          We look forward to celebrating with you in the beautiful hills of
          Silang, Cavite.
        </p>

        <div class="location-facts">
          <article>
            <i class="far fa-calendar-alt" aria-hidden="true"></i>
            <span>Date</span>
            <strong>October 13, 2026</strong>
          </article>
          <article>
            <i class="fas fa-landmark" aria-hidden="true"></i>
            <span>Wedding Ceremony & Reception</span>
            <strong>Chateaux De Paris</strong>
          </article>
          <article>
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
            <span>Address</span>
            <strong>South Forbes Golf City, Silang, Cavite</strong>
          </article>
        </div>
      </div>
    </section>

    <section class="venue-feature" aria-labelledby="venue-feature-title">
      <div class="container venue-feature__grid">
        <figure class="venue-feature__artwork">
          <div class="venue-feature__image-frame">
            <img
              :src="venueArtwork"
              alt="Illustration of Chateaux De Paris, the wedding venue"
            />
          </div>
          <figcaption>Chateaux De Paris</figcaption>
        </figure>

        <div class="venue-feature__directions">
          <p class="venue-feature__eyebrow">Your way to our celebration</p>
          <h2 id="venue-feature-title">Find the Venue</h2>
          <div class="venue-feature__divider" aria-hidden="true">
            <span></span><i>&#9671;</i><span></span>
          </div>
          <p>
            Scan the code with your phone camera to open the venue directly in
            Google Maps, or use the directions button below.
          </p>

          <a
            class="venue-feature__qr"
            :href="mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Chateaux De Paris in Google Maps"
          >
            <span class="venue-feature__qr-corners" aria-hidden="true"></span>
            <img
              :src="mapsQr"
              alt="Google Maps QR code for Chateaux De Paris"
            />
          </a>

          <!-- <a
            class="venue-feature__button"
            :href="mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-location-arrow" aria-hidden="true"></i>
            Open in Google Maps
          </a> -->
        </div>
      </div>
    </section>

    <WeddingLocationFullSection />
  </main>
</template>

<style scoped>
.location-page {
  color: #4f493b;
  background: #fbfaf3;
}

.location-masthead {
  position: relative;
  padding: clamp(8rem, 13vw, 11rem) 0 clamp(4.5rem, 8vw, 7rem);
  overflow: hidden;
  text-align: center;
  background: radial-gradient(
      circle at 50% 0%,
      rgba(219, 185, 174, 0.24),
      transparent 38%
    ),
    #fbfaf3 url("/src/assets/images/neela-pattern.png") repeat;
}

.location-masthead__ornament {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(82vw, 850px);
  height: min(82vw, 850px);
  border: 1px solid rgba(79, 73, 59, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.location-masthead__ornament::before,
.location-masthead__ornament::after {
  position: absolute;
  width: clamp(230px, 28vw, 430px);
  aspect-ratio: 1;
  background: url("/src/assets/images/flower-medium.svg") center / contain
    no-repeat;
  content: "";
  opacity: 0.16;
}

.location-masthead__ornament::before {
  top: 8%;
  left: -12%;
  transform: rotate(28deg);
}

.location-masthead__ornament::after {
  right: -12%;
  bottom: 8%;
  transform: scaleX(-1) rotate(28deg);
}

.location-masthead .container {
  position: relative;
  z-index: 1;
}

.location-masthead__eyebrow,
.location-facts span {
  color: #817655;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.location-masthead h1 {
  margin: 0;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: clamp(3rem, 7vw, 5.75rem);
  font-weight: 400;
  line-height: 1.05;
}

.location-masthead__divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 1.5rem auto;
  color: #817655;
}

.location-masthead__divider span {
  width: 3.5rem;
  height: 1px;
  background: rgba(79, 73, 59, 0.4);
}

.location-masthead__divider i {
  font-style: normal;
}

.location-masthead__lead {
  width: min(100%, 620px);
  margin: 0 auto 3rem;
  font-family: "Playfair Display", serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-style: italic;
  line-height: 1.75;
}

.location-facts {
  display: grid;
  width: min(100%, 980px);
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid rgba(79, 73, 59, 0.25);
  background: rgba(251, 250, 243, 0.82);
  box-shadow: 0 22px 60px rgba(79, 73, 59, 0.11);
  backdrop-filter: blur(5px);
}

.location-facts article {
  min-width: 0;
  padding: 2rem 1.35rem;
}

.location-facts article + article {
  border-left: 1px solid rgba(79, 73, 59, 0.18);
}

.location-facts i {
  display: block;
  margin-bottom: 1rem;
  color: #817655;
  font-size: 1.35rem;
}

.location-facts span,
.location-facts strong {
  display: block;
}

.venue-feature {
  position: relative;
  padding: clamp(4.5rem, 8vw, 7.5rem) 0;
  overflow: hidden;
  background: linear-gradient(135deg, #f4efdf 0%, #fbfaf3 55%, #f0e9d6 100%);
}

.venue-feature::before {
  position: absolute;
  right: -7rem;
  bottom: -10rem;
  width: min(42vw, 520px);
  aspect-ratio: 1;
  background: url("/src/assets/images/flower-medium.svg") center / contain
    no-repeat;
  content: "";
  opacity: 0.09;
  transform: rotate(-28deg);
}

.venue-feature__grid {
  position: relative;
  display: grid;
  align-items: center;
  gap: clamp(2.5rem, 7vw, 7rem);
  grid-template-columns: minmax(0, 1.45fr) minmax(270px, 0.72fr);
}

.venue-feature__artwork {
  margin: 0;
}

.venue-feature__image-frame {
  position: relative;
  padding: clamp(0.45rem, 1vw, 0.75rem);
  border: 1px solid rgba(79, 73, 59, 0.34);
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0 28px 70px rgba(79, 73, 59, 0.18);
}

.venue-feature__image-frame::after {
  position: absolute;
  inset: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.72);
  content: "";
  pointer-events: none;
}

.venue-feature__image-frame img,
.venue-feature__qr img {
  display: block;
  width: 100%;
  height: auto;
}

.venue-feature__artwork figcaption {
  margin-top: 1rem;
  color: #817655;
  font-family: "Playfair Display", serif;
  font-size: 0.92rem;
  font-style: italic;
  letter-spacing: 0.08em;
  text-align: center;
}

.venue-feature__directions {
  text-align: center;
}

.venue-feature__eyebrow {
  margin-bottom: 0.7rem;
  color: #817655;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.venue-feature__directions h2 {
  margin: 0;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: clamp(2.1rem, 4vw, 3.5rem);
  font-weight: 400;
}

.venue-feature__directions > p:not(.venue-feature__eyebrow) {
  margin: 0 auto 1.8rem;
  line-height: 1.75;
}

.venue-feature__divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin: 1.15rem auto 1.35rem;
  color: #817655;
}

.venue-feature__divider span {
  width: 2.5rem;
  height: 1px;
  background: rgba(79, 73, 59, 0.42);
}
.venue-feature__divider i {
  font-style: normal;
}

.venue-feature__qr {
  position: relative;
  display: block;
  width: min(100%, 220px);
  margin: 0 auto 1.4rem;
  padding: 0.85rem;
  border: 1px solid rgba(79, 73, 59, 0.36);
  background: #fff;
  box-shadow: 0 16px 40px rgba(79, 73, 59, 0.14);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.venue-feature__qr:hover,
.venue-feature__qr:focus-visible {
  box-shadow: 0 21px 50px rgba(79, 73, 59, 0.23);
  transform: translateY(-4px);
}

.venue-feature__qr-corners::before,
.venue-feature__qr-corners::after {
  position: absolute;
  width: 1.7rem;
  height: 1.7rem;
  border-color: #817655;
  content: "";
}

.venue-feature__qr-corners::before {
  top: -0.35rem;
  left: -0.35rem;
  border-top: 2px solid;
  border-left: 2px solid;
}

.venue-feature__qr-corners::after {
  right: -0.35rem;
  bottom: -0.35rem;
  border-right: 2px solid;
  border-bottom: 2px solid;
}

.venue-feature__button {
  display: inline-flex;
  min-height: 3.35rem;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.9rem 1.5rem;
  border: 1px solid #4f493b;
  color: #fff;
  font-family: "Playfair Display", serif;
  font-size: 0.78rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  background: #4f493b;
  transition: color 0.3s ease, background 0.3s ease;
}

.venue-feature__button:hover,
.venue-feature__button:focus-visible {
  color: #4f493b;
  background: transparent;
}

.location-facts strong {
  margin-top: 0.65rem;
  font-family: "Playfair Display", serif;
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.5;
}

@media (max-width: 767px) {
  .location-masthead {
    padding: 7rem 1rem 4rem;
  }

  .location-facts {
    width: min(100%, 430px);
    grid-template-columns: 1fr;
  }

  .location-facts article {
    padding: 1.4rem 1.2rem;
  }

  .location-facts article + article {
    border-top: 1px solid rgba(79, 73, 59, 0.18);
    border-left: 0;
  }

  .venue-feature {
    padding: 4rem 1rem;
  }

  .venue-feature__grid {
    gap: 3rem;
    grid-template-columns: 1fr;
  }

  .venue-feature__directions {
    width: min(100%, 430px);
    margin: 0 auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .location-masthead__ornament::before,
  .location-masthead__ornament::after {
    animation: none;
  }

  .venue-feature__qr {
    transition: none;
  }
}
</style>
