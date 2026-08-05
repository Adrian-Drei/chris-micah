<script setup lang="ts">
import { useRouter } from "vue-router";
import { ROUTE_NAMES, openHomepageFromWelcome } from "@/router";
import { startWeddingMusic } from "@/services/weddingMusic";

const router = useRouter();
const openInvitation = async () => {
  await startWeddingMusic();
  openHomepageFromWelcome();
  await router.push({ name: ROUTE_NAMES.HOME });
};
</script>

<template>
  <main class="welcome-page">
    <div class="welcome-overlay"></div>
    <section class="welcome-card" aria-labelledby="welcome-title">
      <span class="welcome-frame"></span>
      <i class="icon-diamond-ring welcome-icon" aria-hidden="true"></i>
      <p class="welcome-eyebrow">You are invited</p>
      <h1 id="welcome-title">Chris <small>&</small> Micah</h1>
      <div class="welcome-ornament" aria-hidden="true"><span>❦</span></div>
      <p class="welcome-message">
        We would be honored to have you share in the joy of our wedding day.
      </p>
      <p class="welcome-date">October 13, 2026 <span>•</span> Silang, Cavite</p>
      <button type="button" class="welcome-cta" @click="openInvitation">
        <span>Open our invitation</span>
        <i class="fas fa-arrow-right" aria-hidden="true"></i>
      </button>
    </section>
  </main>
</template>

<style scoped>
.welcome-page {
  position: relative;
  display: grid;
  min-height: 100vh;
  min-height: 100svh;
  padding: 28px;
  overflow: hidden;
  place-items: center;
  background: url("/src/assets/images/wedding_mm/fond_sakura.jpg") center /
    cover no-repeat;
}

.welcome-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(248, 245, 232, 0.82),
    rgba(237, 232, 208, 0.68)
  );
  backdrop-filter: blur(2px);
}

.welcome-card {
  position: relative;
  z-index: 1;
  width: min(590px, 100%);
  padding: 72px 62px 58px;
  color: #4f493b;
  text-align: center;
  background: rgba(251, 250, 243, 0.94);
  border: 1px solid rgba(79, 73, 59, 0.42);
  box-shadow: 0 30px 90px rgba(79, 73, 59, 0.2);
  animation: welcome-reveal 0.8s ease both;
}

.welcome-frame {
  position: absolute;
  inset: 10px;
  pointer-events: none;
  border: 1px solid rgba(79, 73, 59, 0.22);
}

.welcome-icon {
  display: block;
  margin-bottom: 17px;
  color: #817755;
  font-size: 43px;
}
.welcome-eyebrow {
  margin: 0 0 13px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
}
.welcome-card h1 {
  margin: 0;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: clamp(3.4rem, 10vw, 5.4rem);
  font-weight: 400;
  line-height: 0.9;
}
.welcome-card h1 small {
  display: inline-block;
  margin: 0 5px;
  font-size: 0.38em;
  font-style: italic;
  vertical-align: middle;
}
.welcome-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 24px 0 20px;
  color: #817755;
}
.welcome-ornament::before,
.welcome-ornament::after {
  width: 70px;
  height: 1px;
  content: "";
  background: rgba(79, 73, 59, 0.45);
}
.welcome-message {
  max-width: 410px;
  margin: 0 auto;
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  line-height: 1.65;
}
.welcome-date {
  margin: 20px 0 30px;
  color: #6d6655;
  font-size: 0.77rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.welcome-date span {
  margin: 0 6px;
}

.welcome-cta {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  min-width: 275px;
  min-height: 56px;
  padding: 15px 28px;
  color: #fbfaf3;
  background: #4f493b;
  border: 1px solid #4f493b;
  font-family: "Playfair Display", serif;
  font-size: 0.87rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: color 0.25s ease, background-color 0.25s ease,
    transform 0.25s ease;
}

.welcome-cta:hover,
.welcome-cta:focus-visible {
  color: #4f493b;
  background: #ede8d0;
  transform: translateY(-2px);
}
.welcome-cta i {
  font-size: 12px;
  transition: transform 0.25s ease;
}
.welcome-cta:hover i {
  transform: translateX(4px);
}
.welcome-sound {
  margin: 17px 0 0;
  color: #817b6d;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
}
.welcome-sound i {
  margin-right: 5px;
}

@keyframes welcome-reveal {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 575px) {
  .welcome-page {
    padding: 14px;
  }
  .welcome-card {
    padding: 56px 26px 44px;
  }
  .welcome-message {
    font-size: 1.1rem;
  }
  .welcome-date {
    line-height: 1.7;
  }
  .welcome-cta {
    width: calc(100% - 20px);
    min-width: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .welcome-card {
    animation: none;
  }
  .welcome-cta {
    transition: none;
  }
}
</style>
