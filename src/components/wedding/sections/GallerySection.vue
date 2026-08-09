<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

import photo01 from "@/assets/images/wedding_mm/gallery/gallery-01.webp";
import photo02 from "@/assets/images/wedding_mm/gallery/gallery-02.webp";
import photo03 from "@/assets/images/wedding_mm/gallery/gallery-03.webp";
import photo04 from "@/assets/images/wedding_mm/gallery/gallery-04.webp";
import photo05 from "@/assets/images/wedding_mm/gallery/gallery-05.webp";
import photo06 from "@/assets/images/wedding_mm/gallery/gallery-06.webp";
import photo07 from "@/assets/images/wedding_mm/gallery/gallery-23.webp";
import photo08 from "@/assets/images/wedding_mm/gallery/gallery-08.webp";
import photo09 from "@/assets/images/wedding_mm/gallery/gallery-09.webp";
import photo10 from "@/assets/images/wedding_mm/gallery/gallery-10.webp";
import photo11 from "@/assets/images/wedding_mm/gallery/gallery-11.webp";
import photo12 from "@/assets/images/wedding_mm/gallery/gallery-12.webp";
import photo14 from "@/assets/images/wedding_mm/gallery/gallery-14.webp";
import photo15 from "@/assets/images/wedding_mm/gallery/gallery-15.webp";
import photo16 from "@/assets/images/wedding_mm/gallery/gallery-16.webp";
import photo17 from "@/assets/images/wedding_mm/gallery/gallery-17.webp";
import photo18 from "@/assets/images/wedding_mm/gallery/gallery-18.webp";
import photo19 from "@/assets/images/wedding_mm/gallery/gallery-19.webp";
import photo20 from "@/assets/images/wedding_mm/gallery/gallery-20.webp";
import photo21 from "@/assets/images/wedding_mm/gallery/gallery-21.webp";
import photo22 from "@/assets/images/wedding_mm/gallery/gallery-22.webp";
import photo24 from "@/assets/images/wedding_mm/gallery/gallery-24.webp";
import photo25 from "@/assets/images/wedding_mm/gallery/gallery-25.webp";

const photos = [
  { src: photo01, alt: "Chris and Micah engagement portrait 1", shape: "wide" },
  {
    src: photo02,
    alt: "Chris and Micah engagement portrait 2",
    shape: "standard",
  },
  {
    src: photo03,
    alt: "Chris and Micah engagement portrait 3",
    shape: "portrait",
  },
  {
    src: photo04,
    alt: "Chris and Micah engagement portrait 4",
    shape: "standard",
  },
  { src: photo05, alt: "Chris and Micah engagement portrait 5", shape: "wide" },
  {
    src: photo06,
    alt: "Chris and Micah engagement portrait 6",
    shape: "standard",
  },
  {
    src: photo07,
    alt: "Chris and Micah engagement portrait 7",
    shape: "portrait",
  },
  { src: photo08, alt: "Chris and Micah engagement portrait 8", shape: "wide" },
  {
    src: photo09,
    alt: "Chris and Micah engagement portrait 9",
    shape: "standard",
  },
  {
    src: photo10,
    alt: "Chris and Micah engagement portrait 10",
    shape: "portrait",
  },
  {
    src: photo11,
    alt: "Chris and Micah engagement portrait 11",
    shape: "wide",
  },
  {
    src: photo12,
    alt: "Chris and Micah engagement portrait 12",
    shape: "standard",
  },
  {
    src: photo14,
    alt: "Chris and Micah engagement portrait 14",
    shape: "wide",
  },
  {
    src: photo15,
    alt: "Chris and Micah engagement portrait 15",
    shape: "standard",
  },
  {
    src: photo16,
    alt: "Chris and Micah engagement portrait 16",
    shape: "portrait",
  },
  {
    src: photo17,
    alt: "Chris and Micah engagement portrait 17",
    shape: "wide",
  },
  {
    src: photo18,
    alt: "Chris and Micah engagement portrait 18",
    shape: "standard",
  },
  {
    src: photo19,
    alt: "Chris and Micah engagement portrait 19",
    shape: "portrait",
  },
  {
    src: photo20,
    alt: "Chris and Micah engagement portrait 20",
    shape: "wide",
  },
  {
    src: photo21,
    alt: "Chris and Micah posing together beside their car",
    shape: "wide",
  },
  {
    src: photo22,
    alt: "Chris and Micah holding hands across a garden table",
    shape: "wide",
  },
  {
    src: photo24,
    alt: "Chris embracing Micah during their engagement session",
    shape: "wide",
  },
  {
    src: photo25,
    alt: "Chris and Micah standing together on the garden steps",
    shape: "wide",
  },
] as const;

const activeIndex = ref<number | null>(null);
const activePhoto = computed(() =>
  activeIndex.value === null ? null : photos[activeIndex.value]
);

const openPhoto = (index: number) => {
  activeIndex.value = index;
};

const closePhoto = () => {
  activeIndex.value = null;
};

const showPrevious = () => {
  if (activeIndex.value !== null) {
    activeIndex.value = (activeIndex.value - 1 + photos.length) % photos.length;
  }
};

const showNext = () => {
  if (activeIndex.value !== null) {
    activeIndex.value = (activeIndex.value + 1) % photos.length;
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (activeIndex.value === null) return;
  if (event.key === "Escape") closePhoto();
  if (event.key === "ArrowLeft") showPrevious();
  if (event.key === "ArrowRight") showNext();
};

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => window.removeEventListener("keydown", handleKeydown));
</script>

<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <header class="gallery-heading">
        <h2>Our Gallery</h2>
        <div class="gallery-divider" aria-hidden="true">
          <span></span><i>◇</i><span></span>
        </div>
        <p>A collection of moments from our journey to forever.</p>
      </header>

      <div class="gallery-grid">
        <button
          v-for="(photo, index) in photos"
          :key="photo.src"
          type="button"
          class="gallery-card"
          :class="`gallery-card--${photo.shape}`"
          :aria-label="`View photo ${index + 1} of ${photos.length}`"
          @click="openPhoto(index)"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            :loading="index < 4 ? 'eager' : 'lazy'"
          />
          <span class="gallery-card__overlay" aria-hidden="true">
            <i class="fa-solid fa-expand"></i>
            <small>{{ String(index + 1).padStart(2, "0") }}</small>
          </span>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="gallery-lightbox">
        <div
          v-if="activePhoto"
          class="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Engagement photo viewer"
          @click.self="closePhoto"
        >
          <button
            type="button"
            class="lightbox__close"
            aria-label="Close photo viewer"
            @click="closePhoto"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>

          <button
            type="button"
            class="lightbox__nav lightbox__nav--previous"
            aria-label="Previous photo"
            @click="showPrevious"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>

          <figure>
            <img :src="activePhoto.src" :alt="activePhoto.alt" />
            <figcaption>
              {{ String((activeIndex ?? 0) + 1).padStart(2, "0") }}
              <span>/</span>
              {{ String(photos.length).padStart(2, "0") }}
            </figcaption>
          </figure>

          <button
            type="button"
            class="lightbox__nav lightbox__nav--next"
            aria-label="Next photo"
            @click="showNext"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: clamp(5rem, 9vw, 8rem) 0;
  color: #4f493b;
  background: #fbfaf3 url("/src/assets/images/neela-pattern.png") repeat;
}

.gallery-heading {
  width: min(100%, 680px);
  margin: 0 auto clamp(2.5rem, 5vw, 4rem);
  text-align: center;
}

.gallery-eyebrow {
  display: block;
  margin-bottom: 0.7rem;
  color: #817655;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.gallery-heading h2 {
  margin: 0;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: clamp(2.6rem, 6vw, 4.5rem);
  font-weight: 400;
  line-height: 1.05;
}

.gallery-heading p {
  margin: 0;
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  font-style: italic;
}

.gallery-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin: 1.3rem auto;
}

.gallery-divider span {
  width: 3.5rem;
  height: 1px;
  background: rgba(79, 73, 59, 0.45);
}

.gallery-divider i {
  font-style: normal;
}

.gallery-grid {
  column-count: 3;
  column-gap: clamp(0.75rem, 1.6vw, 1.25rem);
}

.gallery-card {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 0 clamp(0.75rem, 1.6vw, 1.25rem);
  padding: 7px;
  overflow: hidden;
  break-inside: avoid;
  appearance: none;
  color: #4f493b;
  background: #fbfaf3;
  border: 1px solid rgba(79, 73, 59, 0.35);
  box-shadow: 0 14px 38px rgba(79, 73, 59, 0.1);
  cursor: zoom-in;
}

.gallery-card::before {
  position: absolute;
  z-index: 2;
  inset: 12px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  content: "";
  pointer-events: none;
}

.gallery-card img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.55s ease;
}

.gallery-card__overlay {
  position: absolute;
  z-index: 3;
  inset: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(45, 42, 34, 0.38);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card__overlay i {
  font-size: 1.3rem;
}

.gallery-card__overlay small {
  position: absolute;
  right: 1rem;
  bottom: 0.85rem;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
}

.gallery-card:hover img,
.gallery-card:focus-visible img {
  transform: scale(1.035);
}

.gallery-card:hover .gallery-card__overlay,
.gallery-card:focus-visible .gallery-card__overlay {
  opacity: 1;
}

.lightbox {
  position: fixed;
  z-index: 10000;
  inset: 0;
  display: grid;
  grid-template-columns: minmax(3rem, 8vw) minmax(0, 1fr) minmax(3rem, 8vw);
  align-items: center;
  padding: 2rem 1rem;
  color: #fbfaf3;
  background: rgba(24, 23, 20, 0.96);
  backdrop-filter: blur(8px);
}

.lightbox figure {
  display: flex;
  min-width: 0;
  height: min(84vh, 900px);
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lightbox figure img {
  display: block;
  max-width: 100%;
  max-height: calc(100% - 2.5rem);
  object-fit: contain;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
}

.lightbox figcaption {
  margin-top: 1rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
}

.lightbox figcaption span {
  margin: 0 0.45rem;
  opacity: 0.55;
}

.lightbox button {
  color: inherit;
  background: transparent;
  border: 1px solid rgba(251, 250, 243, 0.35);
}

.lightbox__close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 2.8rem;
  height: 2.8rem;
}

.lightbox__nav {
  width: 3rem;
  height: 3rem;
  justify-self: center;
}

.lightbox__nav--previous {
  grid-column: 1;
}

.lightbox figure {
  grid-column: 2;
}

.lightbox__nav--next {
  grid-column: 3;
}

.gallery-lightbox-enter-active,
.gallery-lightbox-leave-active {
  transition: opacity 0.25s ease;
}

.gallery-lightbox-enter-from,
.gallery-lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 991px) {
  .gallery-grid {
    column-count: 2;
  }
}

@media (max-width: 575px) {
  .gallery-section {
    padding: 4.5rem 0;
  }

  .gallery-grid {
    column-count: 1;
  }

  .lightbox {
    grid-template-columns: 3rem minmax(0, 1fr) 3rem;
    padding: 4rem 0.35rem 1rem;
  }

  .lightbox__nav {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-card img,
  .gallery-card__overlay,
  .gallery-lightbox-enter-active,
  .gallery-lightbox-leave-active {
    transition: none;
  }
}
</style>
