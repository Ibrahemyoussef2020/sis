<template>
  <section id="hero" class="relative w-full h-[calc(100vh-5px)] text-white" style="margin-top: 0; padding-top: 0;">
    <!-- Layer 1: Background image -->
    <div class="absolute inset-0" :style="{ backgroundImage: `url(${homeIntroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }"></div>

    <!-- Overlay layers --> 
    <div class="absolute inset-0 bg-black-lean-gradient bg-gradient-to-r"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1f2d]/20 to-[#0a1f2e]/40"></div>

    <!-- Glowing accents -->
    <div class="absolute top-20 right-1/4 h-80 w-80 rounded-full bg-sis-accent/15 blur-3xl opacity-50"></div>
    <div class="absolute bottom-32 left-1/3 h-96 w-96 rounded-full bg-sis-light/10 blur-3xl opacity-40"></div>

    <!-- Layer 2: Stat rectangles -->
    <div class="relative h-full flex justify-between items-center px-4 sm:px-6 lg:px-8">

      <!-- Left stat cards -->
      <div class="hidden lg:flex flex-col gap-6 w-64">
        <!-- Years card -->
        <div class="glass-card">
          <div class="flex items-center gap-4">
            <span class="text-5xl">👤</span>
            <div>
              <p class="text-4xl font-bold text-white">5+</p>
              <p class="text-xs uppercase tracking-[0.2em] text-sis-light/80 mt-1">Years of Excellence</p>
            </div>
          </div>
        </div>

        <!-- Clients card -->
        <div class="glass-card">
          <div class="flex items-center gap-4">
            <span class="text-5xl">🌍</span>
            <div>
              <p class="text-4xl font-bold text-white">7+</p>
              <p class="text-xs uppercase tracking-[0.2em] text-sis-light/80 mt-1">Major Clients</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Layer 3: Center content -->
      <div class="flex flex-col items-center justify-center text-center space-y-8 max-w-5xl">
        <div class="space-y-6 w-full">
          <h1 class="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl max-w-[700px]">
            Delivering Excellence with Business
          </h1>
          <p class="text-lg sm:text-xl text-sis-light/90 mx-auto max-w-2xl">
            Superior Integrated Solutions (SiS) – Bridging Operational and Information Technology
          </p>
        </div>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 justify-center pt-2">
          <a href="#projects" class="inline-flex items-center justify-center rounded-full bg-sis-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-sis-accent/50 transition hover:bg-sis-light hover:shadow-sis-light/50">
            Explore Our Work
          </a>
          <a href="#contact" class="inline-flex items-center justify-center rounded-full border-2 border-sis-light/50 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-sis-light transition hover:bg-sis-light/10 hover:border-sis-light">
            Get In Touch
          </a>
        </div>
      </div>

      <!-- Right stat cards -->
      <div class="hidden lg:flex flex-col gap-6 w-64">
        <!-- MENA card -->
        <div class="glass-card">
          <div class="flex items-center gap-4">
            <span class="text-5xl">🗺️</span>
            <div>
              <p class="text-4xl font-bold text-white">4</p>
              <p class="text-xs uppercase tracking-[0.2em] text-sis-light/80 mt-1">MENA Countries</p>
            </div>
          </div>
        </div>

        <!-- Reliability card -->
        <div class="glass-card">
          <div class="flex items-center gap-4">
            <span class="text-5xl">🛡️</span>
            <div>
              <p class="text-4xl font-bold text-white">100%</p>
              <p class="text-xs uppercase tracking-[0.2em] text-sis-light/80 mt-1">Project Reliability</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import homeIntroImage from '@/images/home-intro.png'

const siteStore = useSiteStore()
const { hero } = storeToRefs(siteStore)

const heroRef = computed(() => hero.value || {
  tagline: 'Bridging the Gap Between Operational Technology and Information Technology',
  headline: 'Delivering Excellence with Business',
  subheadline: 'Superior Integrated Solutions (SiS)',
  cta: { primary: 'Explore Our Work', secondary: 'Get In Touch' },
  stats: []
})
</script>

<style scoped>
section {
  background-attachment: fixed;
}

.glass-card {
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.glass-card:hover {
  border-color: rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -1px 0 rgba(0, 0, 0, 0.25);
}
</style>