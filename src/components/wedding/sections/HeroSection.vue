<script setup lang="ts"></script>

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
            <p
              class="hero-hashtag"
              data-animation-direction="fade"
              data-animation-delay="1200"
            >
              #MICAHyakapnasiCHRIS
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END HERO SECTION -->
</template>

<style scoped>
.hero-hashtag {
  margin: 22px 0 0;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  font-style: italic;
  letter-spacing: 0.08em;
}

@media (max-width: 575px) {
  .hero-hashtag {
    margin-top: 16px;
    font-size: 0.86rem;
    letter-spacing: 0.04em;
  }
}
</style>
