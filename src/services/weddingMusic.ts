import { ref } from "vue";

const isPlaying = ref(false);
const hasStarted = ref(false);
let audio: HTMLAudioElement | null = null;

const getAudio = () => {
  if (!audio) {
    audio = new Audio("/audio/dear.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.55;
    audio.addEventListener("play", () => {
      isPlaying.value = true;
      hasStarted.value = true;
    });
    audio.addEventListener("pause", () => {
      isPlaying.value = false;
    });
  }
  return audio;
};

export const startWeddingMusic = async () => {
  const player = getAudio();
  try {
    await player.play();
  } catch {
    isPlaying.value = false;
  }
};

export const toggleWeddingMusic = async () => {
  const player = getAudio();
  if (player.paused) {
    await startWeddingMusic();
  } else {
    player.pause();
  }
};

export const weddingMusicState = {
  isPlaying,
  hasStarted,
};
