<template>
  <section id="services" class="services-root">

    <!-- ── Background layers ───────────────────────────────────────── -->
    <div class="circuit-lines" aria-hidden="true"></div>
    <div class="glow-trace trace-1" aria-hidden="true"></div>
    <div class="glow-trace trace-2" aria-hidden="true"></div>
    <div class="glow-trace trace-3" aria-hidden="true"></div>

    <!-- ── Atmospheric orbs ────────────────────────────────────────── -->
    <div class="orb orb-tl" aria-hidden="true"></div>
    <div class="orb orb-br" aria-hidden="true"></div>

    <!-- ── Section inner ──────────────────────────────────────────── -->
    <div class="services-inner">

      <!-- Section header -->
      <div class="section-header" data-reveal>
        <div class="label-row">
          <span class="label-line"></span>
          <span class="label-text">Services &amp; Capabilities</span>
        </div>
        <h2 class="section-title">
          Precision Engineering
          <em class="title-amp">&amp;</em>
          Future Digital Ecosystems
        </h2>
      </div>

      <!-- Cards grid -->
      <div v-if="loaded" class="stagger-grid">

        <!-- Card 1 — Industrial Automation -->
        <article
          class="glass-card card-1"
          data-reveal
          @mousemove="onTilt($event)"
          @mouseleave="onTiltReset($event)"
        >
          <span class="card-index" aria-hidden="true">01</span>
          <div class="icon-wrap">
            <div class="icon-glow" aria-hidden="true"></div>
            <div class="icon-box icon-box--blue">
              <svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
          <h3 class="card-title">
            <strong>Industrial</strong>
            <span class="card-subtitle-word">Automation</span>
          </h3>
          <p class="card-body">
            Pioneering next-generation robotic integration and autonomous systems for modern factory implementations.
          </p>
          <div class="card-cta" aria-hidden="true">
            SYSTEM SPECS
            <svg class="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </article>

        <!-- Card 2 — SCADA & Control -->
        <article
          class="glass-card card-2"
          data-reveal
          @mousemove="onTilt($event)"
          @mouseleave="onTiltReset($event)"
        >
          <span class="card-index" aria-hidden="true">02</span>
          <div class="icon-wrap">
            <div class="icon-glow" aria-hidden="true"></div>
            <div class="icon-box icon-box--cyan">
              <svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                <path d="M6 8h.01M9 8h6M6 11h.01M9 11h3"/>
              </svg>
            </div>
          </div>
          <h3 class="card-title">
            <strong>SCADA</strong>
            <span class="card-subtitle-word">&amp; Control</span>
          </h3>
          <p class="card-body">
            High-fidelity real-time monitoring and mission-critical control interfaces built for zero-latency industrial operations.
          </p>
          <div class="card-cta" aria-hidden="true">
            DASHBOARD PREVIEW
            <svg class="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </article>

        <!-- Card 3 — IIoT & Intelligence -->
        <article
          class="glass-card card-3"
          data-reveal
          @mousemove="onTilt($event)"
          @mouseleave="onTiltReset($event)"
        >
          <span class="card-index" aria-hidden="true">03</span>
          <div class="icon-wrap">
            <div class="icon-glow" aria-hidden="true"></div>
            <div class="icon-box icon-box--green">
              <svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/>
                <circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/>
                <path d="M6 6.5L9.5 9.5M14.5 9.5L18 6.5M6 17.5L9.5 14.5M14.5 14.5L18 17.5"/>
              </svg>
            </div>
          </div>
          <h3 class="card-title">
            <strong>IIoT</strong>
            <span class="card-subtitle-word">&amp; Intelligence</span>
          </h3>
          <p class="card-body">
            Transforming edge data into actionable business intelligence through machine learning and advanced sensor networking.
          </p>
          <div class="card-cta" aria-hidden="true">
            ANALYTICS ENGINE
            <svg class="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </article>

        <!-- Card 4 — Custom Engineering -->
        <article
          class="glass-card card-4"
          data-reveal
          @mousemove="onTilt($event)"
          @mouseleave="onTiltReset($event)"
        >
          <span class="card-index" aria-hidden="true">04</span>
          <div class="icon-wrap">
            <div class="icon-glow" aria-hidden="true"></div>
            <div class="icon-box icon-box--purple">
              <svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8v4l3 3"/>
                <path d="M15.5 8.5a5 5 0 00-7 7"/><circle cx="12" cy="12" r="1"/>
              </svg>
            </div>
          </div>
          <h3 class="card-title">
            <strong>Custom</strong>
            <span class="card-subtitle-word">Engineering</span>
          </h3>
          <p class="card-body">
            Tailored tech ecosystems and strategic R&amp;D outsourcing that accelerate time-to-market.
          </p>
          <div class="card-cta" aria-hidden="true">
            CONSULTING
            <svg class="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </article>

      </div>

      <!-- Skeleton state -->
      <div v-else class="stagger-grid skeleton-grid">
        <div v-for="n in 4" :key="n" class="skeleton-card"></div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'

const siteStore = useSiteStore()
const { services, loaded } = storeToRefs(siteStore)

// 3-D tilt on mousemove
function onTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const cx = rect.width / 2
  const cy = rect.height / 2
  const rotX = (cy - y) / 22
  const rotY = (x - cx) / 22
  card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.025,1.025,1.025)`
}
function onTiltReset(e) {
  e.currentTarget.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1,1,1)'
}
</script>

<style scoped>
/* ── Root ─────────────────────────────────────────────────────────── */
.services-root {
  position: relative;
  overflow: hidden !important;
  background: #0b1326;
  background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.018) 1px, transparent 0);
  background-size: 40px 40px;
  padding: 0 !important;
  color: #dae2fd;
  height: 100vh !important;
  max-height: 100vh !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
}

/* ── Circuit lines bg ─────────────────────────────────────────────── */
.circuit-lines {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(90deg, rgba(137,206,255,0.03) 1px, transparent 1px),
    linear-gradient(0deg,  rgba(137,206,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* ── Glow traces ──────────────────────────────────────────────────── */
.glow-trace {
  position: absolute;
  width: 220px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #89ceff, transparent);
  opacity: 0.18;
  filter: blur(1px);
  pointer-events: none;
  z-index: 0;
}
.trace-1 { top: 25%; left: 20%; transform: rotate(45deg); }
.trace-2 { top: 66%; right: 22%; transform: rotate(-12deg); }
.trace-3 { bottom: 22%; left: 33%; transform: rotate(120deg); }

/* ── Atmospheric orbs ─────────────────────────────────────────────── */
.orb {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  z-index: 0;
}
.orb-tl {
  width: 600px;
  height: 600px;
  top: -10rem;
  left: -10rem;
  background: rgba(175,198,255,0.05);
  filter: blur(120px);
  animation: pulse-slow 6s ease-in-out infinite;
}
.orb-br {
  width: 600px;
  height: 600px;
  bottom: -10rem;
  right: -10rem;
  background: rgba(137,206,255,0.09);
  filter: blur(150px);
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
}

/* ── Inner container ──────────────────────────────────────────────── */
.services-inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
@media (min-width: 1024px) {
  .services-inner {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
}

/* ── Section header ───────────────────────────────────────────────── */
.section-header {
  flex: 0 0 35%;
  margin-bottom: 0;
}

.label-row {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.label-line {
  display: block;
  width: 3rem;
  height: 1px;
  background: #afc6ff;
}
.label-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #afc6ff;
}

.section-title {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  font-size: clamp(2rem, 5.2vw, 4.25rem);
  font-weight: 700; 
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #dae2fd;
  max-width: 42rem;
  margin: 0;
}
.title-amp {
  font-style: italic;
  font-weight: 400;
  color: #89ceff;
}

/* ── Stagger grid ─────────────────────────────────────────────────── */
.stagger-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
@media (min-width: 640px) {
  .stagger-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* ── Glass card shared ────────────────────────────────────────────── */
.glass-card {
  position: relative;
  overflow: hidden;
  padding: 1.25rem;
  border-radius: 1.25rem;
  background: linear-gradient(165deg, rgba(11,19,38,0.82) 0%, rgba(23,31,51,0.42) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(137,206,255,0.1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: default;
}
.glass-card:hover {
  border-color: rgba(137,206,255,0.5);
  background: linear-gradient(165deg, rgba(19,27,46,0.92) 0%, rgba(34,42,61,0.52) 100%);
  box-shadow:
    0 0 32px rgba(0,162,230,0.18),
    inset 0 0 16px rgba(137,206,255,0.05);
}

/* ── Ghost number ─────────────────────────────────────────────────── */
.card-index {
  position: absolute;
  bottom: -8%;
  right: -4%;
  font-size: 10rem;
  font-weight: 800;
  line-height: 1;
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  color: rgba(137,206,255,0.035);
  pointer-events: none;
  user-select: none;
}

/* ── Card column spans & stagger offsets removed for side-by-side layout ──────────────────────────── */

/* ── Icon wrapper ─────────────────────────────────────────────────── */
.icon-wrap {
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 1rem;
}
.icon-glow {
  position: absolute;
  inset: -4px;
  background: radial-gradient(circle, rgba(137,206,255,0.3) 0%, transparent 70%);
  filter: blur(8px);
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 9999px;
}
.glass-card:hover .icon-glow {
  opacity: 1;
}

/* ── Icon box ─────────────────────────────────────────────────────── */
.icon-box {
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(137,206,255,0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #222a3d;
}
.icon-box::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

/* per-card accent gradient overlays */
.icon-box--blue::before  { background: linear-gradient(135deg, rgba(175,198,255,0.22) 0%, transparent 70%); }
.icon-box--cyan::before  { background: linear-gradient(135deg, rgba(137,206,255,0.22) 0%, transparent 70%); }
.icon-box--green::before { background: linear-gradient(135deg, rgba(74,225,118,0.18) 0%, transparent 70%); }
.icon-box--purple::before{ background: linear-gradient(135deg, rgba(175,130,255,0.18) 0%, transparent 70%); }

.svc-icon {
  position: relative;
  z-index: 1;
  width: 1.75rem;
  height: 1.75rem;
  color: #89ceff;
  stroke-width: 1.6;
}

/* ── Card typography ──────────────────────────────────────────────── */
.card-title {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  font-size: 1.15rem;
  line-height: 1.2;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  color: #dae2fd;
}
.card-title strong {
  font-weight: 700;
}
.card-subtitle-word {
  font-weight: 300;
  color: #8d909c;
}

.card-body {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  line-height: 1.5;
  color: #8d909c;
  max-width: 22rem;
  margin: 0;
}

/* ── Hover CTA reveal ─────────────────────────────────────────────── */
.card-cta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #afc6ff;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.glass-card:hover .card-cta {
  opacity: 1;
  transform: translateY(0);
}
.cta-arrow {
  width: 0.85rem;
  height: 0.85rem;
  stroke: currentColor;
}

/* ── Skeleton ─────────────────────────────────────────────────────── */
.skeleton-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}
.skeleton-card {
  height: 18rem;
  border-radius: 1.25rem;
  background: linear-gradient(90deg, #131b2e 0%, #1c2540 50%, #131b2e 100%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite ease;
}
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}
</style>
