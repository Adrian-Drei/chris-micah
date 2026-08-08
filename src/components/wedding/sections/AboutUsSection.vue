<script setup lang="ts">
import couplePhoto from "@/assets/images/wedding_mm/gallery/gallery-13.webp";
</script>

<template>
  <!-- BEGIN ABOUT US SECTION -->
  <section id="about-us">
    <div class="about-background" aria-hidden="true"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-lg-9 col-xl-8"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <figure class="couple-photo neela-style">
            <img
              :src="couplePhoto"
              alt="Chris and Micah together during their engagement session"
            />
            <figcaption>
              Chris &amp; Micah <span>&bull;</span> Forever begins here
            </figcaption>
          </figure>
        </div>
      </div>

      <div class="row">
        <div
          class="about-us-desc col-lg-8 offset-lg-2"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <p class="about-eyebrow">Together, always</p>
          <h3 class="mt-10">We're Getting Married for Life!</h3>
          <div class="about-ornament" aria-hidden="true">
            <span></span><i>&#9671;</i><span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END ABOUT US SECTION -->
</template>

<style scoped>
#about-us {
  position: relative;
  margin-top: -130px;
  padding: 30px 0 105px;
  z-index: 1;
  isolation: isolate;
}

.about-background {
  position: absolute;
  z-index: -2;
  inset: 0;
  background: radial-gradient(
      circle at 18% 35%,
      rgba(218, 180, 169, 0.2),
      transparent 27%
    ),
    radial-gradient(
      circle at 84% 72%,
      rgba(191, 181, 137, 0.2),
      transparent 30%
    ),
    linear-gradient(135deg, #fbfaf3 0%, #f3eedc 50%, #fbfaf3 100%);
  clip-path: polygon(0 130px, 100% 0, 100% 100%, 0 100%);
  pointer-events: none;
}

#about-us > .container {
  position: relative;
  z-index: 2;
}

#about-us::before,
#about-us::after {
  position: absolute;
  z-index: -1;
  width: clamp(290px, 32vw, 620px);
  aspect-ratio: 1;
  background: url("/src/assets/images/flower-large.svg") center / contain
    no-repeat;
  content: "";
  opacity: 0.11;
  pointer-events: none;
}

#about-us::before {
  top: 130px;
  left: -10%;
  transform: rotate(22deg);
  animation: botanical-drift-left 14s ease-in-out infinite alternate;
}

#about-us::after {
  right: -9%;
  bottom: -20%;
  transform: rotate(205deg);
  animation: botanical-drift-right 17s ease-in-out infinite alternate;
}

.couple-photo {
  position: relative;
  margin: 0;
  padding: 12px 12px 0;
  background: rgba(251, 250, 243, 0.94);
  border: 1px solid rgba(79, 73, 59, 0.38);
  box-shadow: 0 28px 75px rgba(79, 73, 59, 0.2);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.7s ease;
}

.couple-photo::before {
  position: absolute;
  inset: -12px;
  border: 1px solid rgba(79, 73, 59, 0.16);
  content: "";
  pointer-events: none;
}

.couple-photo img {
  display: block;
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}

.couple-photo:hover {
  box-shadow: 0 34px 90px rgba(79, 73, 59, 0.25);
  transform: translateY(-6px);
}

.couple-photo:hover img {
  transform: scale(1.012);
}

.couple-photo figcaption {
  padding: 13px 8px 12px;
  color: #68604f;
  font-family: "Playfair Display", serif;
  font-size: 0.72rem;
  font-style: italic;
  letter-spacing: 0.16em;
  text-align: center;
  text-transform: uppercase;
}

.couple-photo figcaption span {
  margin: 0 0.55rem;
  color: #a99f7e;
}

.about-us-desc {
  text-align: center;
}

.about-eyebrow {
  margin: 3.5rem 0 -2.6rem;
  color: #8b8062;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
}

.about-us-desc h3 {
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3.35rem);
  font-weight: 400;
}

.about-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  color: #8b8062;
}

.about-ornament span {
  width: 3rem;
  height: 1px;
  background: rgba(79, 73, 59, 0.4);
}

.about-ornament i {
  font-style: normal;
  animation: ornament-breathe 3.8s ease-in-out infinite;
}

@keyframes botanical-drift-left {
  to {
    transform: translate3d(18px, 10px, 0) rotate(25deg);
  }
}

@keyframes botanical-drift-right {
  to {
    transform: translate3d(-16px, -12px, 0) rotate(201deg);
  }
}

@keyframes ornament-breathe {
  50% {
    opacity: 0.45;
    transform: scale(0.86) rotate(45deg);
  }
}

@media (max-width: 575px) {
  #about-us {
    margin-top: -60px;
    padding: 20px 0 75px;
  }

  .about-background {
    background: #f3eedc;
    clip-path: polygon(0 60px, 100% 0, 100% 100%, 0 100%);
  }

  .couple-photo {
    padding: 7px 7px 0;
  }

  .couple-photo::before {
    inset: -6px;
  }

  .couple-photo figcaption {
    font-size: 0.6rem;
    letter-spacing: 0.1em;
  }
}

@media (prefers-reduced-motion: reduce) {
  #about-us::before,
  #about-us::after,
  .about-ornament i {
    animation: none;
  }

  .couple-photo,
  .couple-photo img {
    transition: none;
  }
}
</style>
