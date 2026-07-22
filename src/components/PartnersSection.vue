<template>
  <section ref="sectionRef" class="relative overflow-hidden bg-sis-panel dark:bg-dark-bg px-6 py-24 font-['Plus_Jakarta_Sans','Inter',sans-serif]">
    <div
      class="pointer-events-none absolute inset-0 z-0"
      style="background-image: linear-gradient(90deg, rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.025) 1px, transparent 1px), linear-gradient(0deg, rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.025) 1px, transparent 1px); background-size: 60px 60px;"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute z-0 rounded-full blur-[120px] animate-pulse"
      style="width: 600px; height: 600px; top: -15rem; left: -10rem; background: rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.05);"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute z-0 rounded-full blur-[130px]"
      style="width: 500px; height: 500px; bottom: -12rem; right: -8rem; background: rgba(var(--accent-teal-r), var(--accent-teal-g), var(--accent-teal-b),0.05);"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto max-w-[1200px]">
      <div class="mb-16 flex flex-col items-center gap-4 text-center" data-reveal>
        <div class="mb-1 inline-flex items-center gap-4">
          <span class="block h-px w-12 bg-[var(--accent-blue)]"></span>
          <span class="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-blue)]">Trusted By Industry Leaders</span>
        </div>
        <h2 class="m-0 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight -tracking-[0.02em] text-sis-text dark:text-[#dae2fd]">
          Our <em class="not-italic font-bold text-sis-accent dark:text-dark-accent-teal" style="text-shadow:0 0 30px rgba(var(--accent-teal-r), var(--accent-teal-g), var(--accent-teal-b),0.3)">Partners</em>
        </h2>
        <p class="m-0 max-w-[36rem] font-sans text-base leading-relaxed text-sis-muted dark:text-dark-text-muted">
          Backed by the world's foremost industrial and technology innovators —
          delivering excellence through strategic alliance.
        </p>
      </div>

      <div class="mb-14 last:mb-0" data-reveal>
        <div class="mb-6 flex items-center gap-4">
          <span class="block h-[2px] w-6 rounded bg-[var(--accent-blue)]"></span>
          <h3 class="m-0 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-base font-semibold uppercase tracking-[0.15em] text-[var(--accent-blue)]">Technology Partners</h3>
        </div>
        <div class="grid grid-cols-2 gap-[14px] sm:grid-cols-3 lg:grid-cols-6">
          <template v-for="(p, i) in (loaded ? partners.technology : placeholderTech)" :key="p?.name ?? i">
            <div v-if="loaded" class="group relative flex cursor-default flex-col items-center gap-3 overflow-hidden rounded-2xl border border-[rgba(126,165,224,0.12)] p-6 backdrop-blur-[12px] transition-all duration-[400ms] hover:border-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.3)] hover:shadow-[0_0_30px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)]" style="background: rgba(126,165,224,0.04); transition-timing-function: cubic-bezier(0.4,0,0.2,1)" @mousemove="onTilt($event)" @mouseleave="onTiltReset($event)">
              <div v-if="p.logo && !errored.has(p.name)" class="flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-xl border border-[rgba(126,165,224,0.12)] bg-[rgba(126,165,224,0.08)] p-2 transition-all duration-300 group-hover:border-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.25)] group-hover:bg-[rgba(126,165,224,0.14)] group-hover:shadow-[0_0_20px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)]">
                <img :src="p.logo" :alt="p.name" class="h-full w-full object-contain transition-[filter] duration-300" style="filter: brightness(0.9) contrast(1.1)" loading="lazy" @error="onImgError(p.name)" />
              </div>
              <div v-else class="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105" :style="{ background: `${p.color}15`, borderColor: `${p.color}30` }">
                <span class="font-['Plus_Jakarta_Sans','Inter',sans-serif] text-[1.4rem] font-extrabold tracking-[0.05em]" :style="{ color: p.color }">{{ getInitials(p.name) }}</span>
              </div>
              <span class="text-center font-sans text-[0.78rem] font-medium leading-tight text-sis-muted dark:text-dark-text-muted transition-colors duration-300 group-hover:text-sis-text dark:group-hover:text-dark-text">{{ p.name }}</span>
              <div class="absolute left-0 right-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-60" :style="{ background: `linear-gradient(90deg, ${p.color}, transparent)` }"></div>
            </div>
            <div v-else class="flex flex-col items-center gap-3 rounded-2xl border border-[rgba(126,165,224,0.12)] p-6" style="background: rgba(126,165,224,0.04);">
              <Skeleton class="h-[4.5rem] w-[4.5rem] rounded-xl" />
              <Skeleton class="h-4 w-20" />
            </div>
          </template>
        </div>
      </div>

      <div class="mb-14 last:mb-0" data-reveal>
        <div class="mb-6 flex items-center gap-4">
          <span class="block h-[2px] w-6 rounded bg-[var(--accent-blue)]"></span>
          <h3 class="m-0 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-base font-semibold uppercase tracking-[0.15em] text-[var(--accent-blue)]">Ecosystem Networks</h3>
        </div>
        <div class="grid grid-cols-2 gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
          <template v-for="(p, i) in (loaded ? partners.ecosystem : placeholderEcosystem)" :key="p?.name ?? i">
            <div v-if="loaded" class="group relative flex cursor-default flex-col items-center gap-3 overflow-hidden rounded-2xl border border-[rgba(126,165,224,0.12)] p-6 backdrop-blur-[12px] transition-all duration-[400ms] hover:border-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.3)] hover:shadow-[0_0_30px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)]" style="background: rgba(126,165,224,0.04); transition-timing-function: cubic-bezier(0.4,0,0.2,1)" @mousemove="onTilt($event)" @mouseleave="onTiltReset($event)">
              <div v-if="p.logo && !errored.has(p.name)" class="flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-xl border border-[rgba(126,165,224,0.12)] bg-[rgba(126,165,224,0.08)] p-2 transition-all duration-300 group-hover:border-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.25)] group-hover:bg-[rgba(126,165,224,0.14)] group-hover:shadow-[0_0_20px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)]">
                <img :src="p.logo" :alt="p.name" class="h-full w-full object-contain transition-[filter] duration-300" style="filter: brightness(0.9) contrast(1.1)" loading="lazy" @error="onImgError(p.name)" />
              </div>
              <div v-else class="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105" :style="{ background: `${p.color}15`, borderColor: `${p.color}30` }">
                <span class="font-['Plus_Jakarta_Sans','Inter',sans-serif] text-[1.4rem] font-extrabold tracking-[0.05em]" :style="{ color: p.color }">{{ getInitials(p.name) }}</span>
              </div>
              <span class="text-center font-sans text-[0.78rem] font-medium leading-tight text-sis-muted dark:text-dark-text-muted transition-colors duration-300 group-hover:text-sis-text dark:group-hover:text-dark-text">{{ p.name }}</span>
              <div class="absolute left-0 right-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-60" :style="{ background: `linear-gradient(90deg, ${p.color}, transparent)` }"></div>
            </div>
            <div v-else class="flex flex-col items-center gap-3 rounded-2xl border border-[rgba(126,165,224,0.12)] p-6" style="background: rgba(126,165,224,0.04);">
              <Skeleton class="h-[4.5rem] w-[4.5rem] rounded-xl" />
              <Skeleton class="h-4 w-20" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import Skeleton from '@/components/Skeleton.vue'

const siteStore = useSiteStore()
const { partners, loaded } = storeToRefs(siteStore)
const sectionRef = ref(null)

const placeholderTech = Array.from({ length: 6 })
const placeholderEcosystem = Array.from({ length: 4 })
const errored = reactive(new Set())

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

function onImgError(name) {
  errored.add(name)
}

function onTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const cx = rect.width / 2
  const cy = rect.height / 2
  const rotX = (cy - y) / 25
  const rotY = (x - cx) / 25
  card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`
}

function onTiltReset(e) {
  e.currentTarget.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)'
}
</script>
