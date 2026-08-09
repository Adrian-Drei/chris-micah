<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- BEGIN HERO SECTION -->
  <section
    id="hero"
    class="bg-slideshow section-divider-bottom-1 section-divider-bg-color"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="hero-wrapper v-center">
            <h2
              class="hero-kicker"
              data-animation-direction="fade"
              data-animation-delay="600"
            >
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
              <span>10.13.26</span>
            </div>
            <p
              class="hero-hashtag"
              data-animation-direction="fade"
              data-animation-delay="1200"
            >
              #MICAHyakapnasiCHRIS
            </p>

            <blockquote
              class="hero-quote"
              data-animation-direction="fade"
              data-animation-delay="1350"
            >
              <span>
                There is no fear in love. But perfect love drives out fear
                because fear has to do with punishment. The one who fears is not
                made perfect in love. We love because he first loved us.
              </span>
              <cite>1 John 4:18–19</cite>
            </blockquote>

            <div
              class="hero-actions"
              data-animation-direction="fade"
              data-animation-delay="1500"
            >
              <RouterLink to="/rsvp" class="btn hero-rsvp-cta">
                RSVP
              </RouterLink>
              <RouterLink to="/location" class="btn hero-location-cta">
                View Location
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END HERO SECTION -->
</template>

<style scoped>
#hero.section-divider-bg-color::after {
  border-color: transparent transparent #f3eedc transparent;
}

.hero-kicker {
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero-title {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
}

.hero-subtitle {
  font-family: "Playfair Display", serif;
  font-weight: 500;
}

.hero-hashtag {
  margin: 22px 0 0;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: 1.15rem;
  font-style: italic;
  letter-spacing: 0.08em;
}

.hero-quote {
  position: relative;
  width: min(720px, calc(100% - 30px));
  margin: 28px auto 0;
  padding: 18px 72px 16px;
  color: #4f493b;
  background: rgba(237, 232, 208, 0.1);
  border: 1px solid rgba(79, 73, 59, 0.18);
  font-family: "Playfair Display", serif;
  font-size: 0.96rem;
  line-height: 1.65;
  backdrop-filter: blur(3px);
}

.hero-quote::before,
.hero-quote::after {
  position: absolute;
  top: 50%;
  color: #9a9276;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 4.6rem;
  font-weight: 700;
  line-height: 1;
  opacity: 0.42;
  transform: translateY(-55%);
}

.hero-quote::before {
  left: 18px;
  content: "“";
}

.hero-quote::after {
  right: 18px;
  content: "”";
}

.hero-quote span,
.hero-quote cite {
  display: block;
}

.hero-quote cite {
  margin-top: 8px;
  color: #665f50;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  margin-top: 20px;
}

.hero-rsvp-cta,
.hero-location-cta {
  min-width: 190px;
  margin: 0;
  border: 1px solid #4f493b;
}

.hero-rsvp-cta {
  color: #fbfaf3;
  background: #4f493b;
}

.hero-rsvp-cta:hover,
.hero-rsvp-cta:focus {
  color: #4f493b;
  background: #ede8d0;
  border-color: #4f493b;
}

.hero-location-cta {
  color: #4f493b;
  background: rgba(251, 250, 243, 0.78);
  backdrop-filter: blur(4px);
}

.hero-location-cta:hover,
.hero-location-cta:focus {
  color: #fbfaf3;
  background: #4f493b;
}

@media (max-width: 575px) {
  #hero.section-divider-bg-color::after {
    border-color: transparent transparent #f3eedc transparent;
  }

  .hero-kicker {
    font-size: 0.82rem;
  }

  .hero-hashtag {
    margin-top: 16px;
    font-size: 0.95rem;
    letter-spacing: 0.04em;
  }

  .hero-quote {
    width: calc(100% - 20px);
    margin-top: 20px;
    padding: 15px 42px 14px;
    font-size: 0.82rem;
    line-height: 1.55;
  }

  .hero-quote::before,
  .hero-quote::after {
    font-size: 3.25rem;
  }

  .hero-quote::before {
    left: 9px;
  }

  .hero-quote::after {
    right: 9px;
  }

  .hero-quote cite {
    margin-top: 6px;
    font-size: 0.88rem;
  }

  .hero-actions {
    width: min(100%, 310px);
    margin: 16px auto 0;
    flex-direction: column;
    gap: 0.65rem;
  }

  .hero-rsvp-cta,
  .hero-location-cta {
    width: 100%;
    min-width: 170px;
  }
}
</style>
