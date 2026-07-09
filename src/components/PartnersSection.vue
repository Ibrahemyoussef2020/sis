<template>
  <section class="partners-root" ref="sectionRef">
    <div class="circuit-bg" aria-hidden="true"></div>
    <div class="orb orb-tl" aria-hidden="true"></div>
    <div class="orb orb-br" aria-hidden="true"></div>

    <div class="partners-inner">
      <div class="partners-header" data-reveal>
        <div class="label-row">
          <span class="label-line"></span>
          <span class="label-text">Trusted By Industry Leaders</span>
        </div>
        <h2 class="partners-title">
          Our <em class="title-accent">Partners</em>
        </h2>
        <p class="partners-desc">
          Backed by the world's foremost industrial and technology innovators —
          delivering excellence through strategic alliance.
        </p>
      </div>

      <template v-if="loaded">
        <!-- Technology Partners -->
        <div class="partners-group" data-reveal>
          <div class="group-header">
            <span class="group-line"></span>
            <h3 class="group-title">Technology Partners</h3>
          </div>
          <div class="partners-grid">
            <div v-for="p in partners.technology" :key="p.name" class="partner-card" @mousemove="onTilt($event)" @mouseleave="onTiltReset($event)">
              <div v-if="p.logo && !errored.has(p.name)" class="partner-logo-wrap">
                <img :src="p.logo" :alt="p.name" class="partner-logo" loading="lazy" @error="onImgError(p.name)" />
              </div>
              <div v-else class="partner-initial-wrap" :style="{ background: `${p.color}15`, borderColor: `${p.color}30` }">
                <span class="partner-initial" :style="{ color: p.color }">{{ getInitials(p.name) }}</span>
              </div>
              <span class="partner-name">{{ p.name }}</span>
              <div class="partner-accent" :style="{ background: `linear-gradient(90deg, ${p.color}, transparent)` }"></div>
            </div>
          </div>
        </div>

        <!-- Ecosystem Partners -->
        <div class="partners-group" data-reveal>
          <div class="group-header">
            <span class="group-line"></span>
            <h3 class="group-title">Ecosystem Networks</h3>
          </div>
          <div class="partners-grid ecosystem-grid">
            <div v-for="p in partners.ecosystem" :key="p.name" class="partner-card" @mousemove="onTilt($event)" @mouseleave="onTiltReset($event)">
              <div v-if="p.logo && !errored.has(p.name)" class="partner-logo-wrap">
                <img :src="p.logo" :alt="p.name" class="partner-logo" loading="lazy" @error="onImgError(p.name)" />
              </div>
              <div v-else class="partner-initial-wrap" :style="{ background: `${p.color}15`, borderColor: `${p.color}30` }">
                <span class="partner-initial" :style="{ color: p.color }">{{ getInitials(p.name) }}</span>
              </div>
              <span class="partner-name">{{ p.name }}</span>
              <div class="partner-accent" :style="{ background: `linear-gradient(90deg, ${p.color}, transparent)` }"></div>
            </div>
          </div>
        </div>
      </template>

      <div v-else class="skeleton-wrap">
        <div class="skeleton-grid">
          <div v-for="n in 6" :key="n" class="skeleton-card"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'

const siteStore = useSiteStore()
const { partners, loaded } = storeToRefs(siteStore)
const sectionRef = ref(null)
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

<style scoped>
.partners-root {
  position: relative;
  overflow: hidden;
  background: #0b1326;
  padding: 6rem 1.5rem;
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
}

.circuit-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(137,206,255,0.025) 1px, transparent 1px),
    linear-gradient(0deg, rgba(137,206,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  z-index: 0;
}
.orb-tl {
  width: 600px;
  height: 600px;
  top: -15rem;
  left: -10rem;
  background: rgba(175,198,255,0.04);
  filter: blur(120px);
  animation: pulse-slow 6s ease-in-out infinite;
}
.orb-br {
  width: 500px;
  height: 500px;
  bottom: -12rem;
  right: -8rem;
  background: rgba(137,206,255,0.06);
  filter: blur(130px);
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.partners-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.partners-header {
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.label-row {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.25rem;
}
.label-line {
  display: block;
  width: 3rem;
  height: 1px;
  background: #afc6ff;
}
.label-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #afc6ff;
}

.partners-title {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #dae2fd;
  margin: 0;
}
.title-accent {
  font-style: italic;
  font-weight: 700;
  color: #afc6ff;
  text-shadow: 0 0 30px rgba(175,198,255,0.3);
}

.partners-desc {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: #8d909c;
  max-width: 36rem;
  margin: 0;
}

.partners-group {
  margin-bottom: 3.5rem;
}
.partners-group:last-child {
  margin-bottom: 0;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.group-line {
  display: block;
  width: 1.5rem;
  height: 2px;
  background: #89ceff;
  border-radius: 1px;
}
.group-title {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #89ceff;
  margin: 0;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.875rem;
}
.ecosystem-grid {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 640px) {
  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .ecosystem-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .partners-grid {
    grid-template-columns: repeat(6, 1fr);
  }
  .ecosystem-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.partner-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: default;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.partner-card:hover {
  background: rgba(255,255,255,0.06);
  border-color: rgba(175,198,255,0.2);
  box-shadow: 0 0 30px rgba(14,165,233,0.08);
}

.partner-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.partner-card:hover .partner-accent {
  opacity: 0.6;
}

.partner-logo-wrap {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden;
  padding: 0.5rem;
  transition: all 0.3s ease;
}
.partner-card:hover .partner-logo-wrap {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.15);
  box-shadow: 0 0 20px rgba(175,198,255,0.1);
}

.partner-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.9) contrast(1.1);
  transition: filter 0.3s ease;
}
.partner-card:hover .partner-logo {
  filter: brightness(1.1) contrast(1.1);
}

.partner-initial-wrap {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  transition: all 0.3s ease;
}
.partner-card:hover .partner-initial-wrap {
  transform: scale(1.05);
}

.partner-initial {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.partner-name {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  color: #c3c6d3;
  text-align: center;
  line-height: 1.3;
  transition: color 0.3s ease;
}
.partner-card:hover .partner-name {
  color: #dae2fd;
}

.skeleton-wrap {
  padding: 2rem 0;
}
.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.skeleton-card {
  height: 8rem;
  border-radius: 1rem;
  background: linear-gradient(90deg, #131b2e 0%, #1c2540 50%, #131b2e 100%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite ease;
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>
