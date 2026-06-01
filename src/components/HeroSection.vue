<template>
  <section id="hero" class="relative overflow-hidden bg-sis-primary text-white">
    <div class="absolute inset-0 opacity-20">
      <div class="h-full w-full bg-[radial-gradient(circle_at_top,rgba(79,149,212,0.28),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
    </div>
    <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_40%,rgba(255,255,255,0.02),transparent_60%)]"></div>
    <div class="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div class="space-y-8">
          <p class="max-w-xl text-sm uppercase tracking-[0.28em] text-sis-light" data-reveal>{{ heroRef.tagline }}</p>
          <h1 class="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl" data-reveal>
            {{ heroRef.headline }}
          </h1>
          <p class="max-w-2xl text-lg text-sis-panel/90 sm:text-xl" data-reveal>
            {{ heroRef.subheadline }}
          </p>
          <div class="flex flex-wrap gap-4" data-reveal>
            <a href="#projects" class="relative inline-flex items-center rounded-full bg-sis-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-sis-light">
              {{ heroRef.cta.primary }}
            </a>
            <a href="#contact" class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition hover:bg-white/15">
              {{ heroRef.cta.secondary }}
            </a>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2" data-reveal>
          <AnimatedCounter v-for="stat in heroRef.stats" :key="stat.label" :value="stat.value" :suffix="stat.suffix" :label="stat.label" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import AnimatedCounter from '@/components/AnimatedCounter.vue'

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
