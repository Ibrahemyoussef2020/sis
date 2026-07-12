<template>
  <section
    id="hero"
    class="relative w-full min-h-full text-white overflow-hidden"
    style="margin-top: 0; padding-top: some courses"
  >
    <!-- Background images with crossfade -->
    <div
      v-for="(img, i) in heroImages"
      :key="i"
      class="absolute inset-0 transition-opacity duration-1500 ease-in-out"
      :class="i === activeIndex ? 'opacity-100' : 'opacity-0'"
      :style="{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    ></div>

    <div
      class="absolute inset-0 bg-gradient-to-b from-[#0b1326]/60 via-[#0b1326]/30 to-[#0a1f2e]/70"
    ></div>

    <div
      class="absolute top-20 right-1/4 h-80 w-80 rounded-full bg-sis-accent/15 blur-3xl opacity-40"
    ></div>
    <div
      class="absolute bottom-32 left-1/3 h-96 w-96 rounded-full bg-sis-light/10 blur-3xl opacity-30"
    ></div>

    <div
      class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div
        class="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl"
      >
        <p
          class="text-sm sm:text-base text-white/90 uppercase tracking-[0.3em] font-medium animate-fade-in-down drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
        >
          Superior Integrated Solutions (SiS)
        </p>
        <h1
          class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white animate-fade-in-up drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
        >
          Delivering Excellence with Business
        </h1>
        <p
          class="text-lg sm:text-xl text-white/80 mx-auto max-w-2xl animate-fade-in-up drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          style="animation-delay: 0.2s"
        >
          Bridging Operational and Information Technology
        </p>

        <div
          class="flex flex-wrap gap-4 justify-center pt-2 animate-fade-in-up"
          style="animation-delay: 0.4s"
        >
          <a
            href="#projects"
            class="inline-flex items-center justify-center rounded-full bg-sis-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-sis-accent/50 transition-all duration-300 hover:bg-sis-light hover:shadow-sis-light/50 hover:scale-105"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full border-2 border-sis-light/50 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-sis-light transition-all duration-300 hover:bg-sis-light/10 hover:border-sis-light hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div class="flex gap-2 pt-4">
          <button
            v-for="(img, i) in heroImages"
            :key="i"
            @click="goToSlide(i)"
            class="h-1.5 rounded-full transition-all duration-500"
            :class="
              i === activeIndex
                ? 'w-8 bg-sis-accent'
                : 'w-1.5 bg-white/30 hover:bg-white/50'
            "
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useSiteStore } from "@/stores/useSiteStore";

const siteStore = useSiteStore();
const { hero } = storeToRefs(siteStore);

const heroImages = [
  "https://sis-eg.org/wordpress/wp-content/uploads/2023/07/slider-1-1.jpg",
  "https://sis-eg.org/wordpress/wp-content/uploads/2023/07/G3-FINAL.jpg",
  "https://sis-eg.org/wordpress/wp-content/uploads/2023/07/g1-final.jpg",
  "https://sis-eg.org/wordpress/wp-content/uploads/2023/07/g2-final.jpg",
];

const activeIndex = ref(0);
let intervalId = null;
let transitionTimer = null;

function goToSlide(index) {
  if (index === activeIndex.value) return;
  if (transitionTimer) clearTimeout(transitionTimer);
  activeIndex.value = index;
  resetAutoPlay();
}

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % heroImages.length;
}

function resetAutoPlay() {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 5000);
}

onMounted(() => {
  resetAutoPlay();
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
  if (transitionTimer) clearTimeout(transitionTimer);
});
</script>

<style scoped>
.transition-opacity {
  transition: opacity 1.5s ease-in-out;
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}
</style>
