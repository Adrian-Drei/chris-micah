<script setup lang="ts">
import { toggleWeddingMusic, weddingMusicState } from "@/services/weddingMusic";
</script>

<template>
  <Transition name="music-control">
    <button
      v-if="weddingMusicState.hasStarted.value"
      type="button"
      class="music-toggle"
      :aria-label="
        weddingMusicState.isPlaying.value
          ? 'Pause background music'
          : 'Play background music'
      "
      :title="
        weddingMusicState.isPlaying.value
          ? 'Pause background music'
          : 'Play background music'
      "
      @click="toggleWeddingMusic"
    >
      <i
        :class="
          weddingMusicState.isPlaying.value
            ? 'fas fa-volume-high'
            : 'fas fa-volume-xmark'
        "
        aria-hidden="true"
      ></i>
      <span
        class="music-bars"
        :class="{ paused: !weddingMusicState.isPlaying.value }"
      >
        <span></span><span></span><span></span>
      </span>
    </button>
  </Transition>
</template>

<style scoped>
.music-toggle {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 1200;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 54px;
  height: 54px;
  padding: 0;
  color: #fbfaf3;
  background: rgba(79, 73, 59, 0.92);
  border: 1px solid rgba(251, 250, 243, 0.65);
  border-radius: 50%;
  box-shadow: 0 9px 28px rgba(79, 73, 59, 0.24);
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.music-toggle:hover,
.music-toggle:focus-visible {
  background: #4f493b;
  transform: translateY(-2px);
}

.music-toggle i {
  font-size: 14px;
}

.music-bars {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 13px;
}

.music-bars span {
  width: 2px;
  background: #fbfaf3;
  animation: music-wave 0.8s ease-in-out infinite alternate;
}

.music-bars span:nth-child(1) {
  height: 7px;
}
.music-bars span:nth-child(2) {
  height: 13px;
  animation-delay: 0.2s;
}
.music-bars span:nth-child(3) {
  height: 9px;
  animation-delay: 0.4s;
}
.music-bars.paused span {
  animation-play-state: paused;
}

@keyframes music-wave {
  to {
    height: 4px;
  }
}

.music-control-enter-active,
.music-control-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.music-control-enter-from,
.music-control-leave-to {
  opacity: 0;
  transform: scale(0.85);
}

@media (max-width: 575px) {
  .music-toggle {
    right: 15px;
    bottom: 15px;
    width: 48px;
    height: 48px;
  }
}
</style>
