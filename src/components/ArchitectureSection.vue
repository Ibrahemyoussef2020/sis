<template>
  <section id="architecture" class="arc-root">

    <!-- Layer 1: Video background -->
    <video
      class="arc-video-bg"
      :src="increasedNumbersVideo"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    ></video>

    <!-- Layer 2: Isolation overlay (semi-transparent) -->
    <div class="arc-overlay" aria-hidden="true"></div>

    <!-- Layer 0.5: Dot mesh (sits above video, below content) -->
    <div class="arc-mesh" aria-hidden="true"></div>

    <div class="arc-inner">

      
      

      <!-- ── Main grid: canvas 8 cols + sidebar 4 cols ──────────── -->
      <div class="arc-grid">

        <!-- LEFT CANVAS -->
        <div class="arc-canvas">

          <header class="arc-header" data-reveal>
        <h2 class="arc-title">{{ architecture?.title ?? 'Vendor-Agnostic Industrial Digital Architecture' }}</h2>
        <p class="arc-subtitle">{{ architecture?.subtitle ?? 'Intelligent OT-IT Integration Strategy' }}</p>
      </header>

          <!-- Cloud Layer -->
          <div v-if="loaded" class="glass-card layer-card" data-reveal>
            <div class="layer-head">
              <div>
                <span class="layer-eyebrow">Cloud Layer</span>
                <h3 class="layer-name">{{ architecture.cloudLayer.provider }}</h3>
              </div>
              <div class="layer-icon-wrap layer-icon-wrap--cloud">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
              </div>
            </div>
            <div class="chip-row">
              <span
                v-for="step in architecture.cloudLayer.steps"
                :key="step"
                class="chip chip--blue"
              >{{ step }}</span>
            </div>
          </div>
          <div v-else class="glass-card layer-card skeleton-card" data-reveal></div>

          <!-- Edge Layer -->
          <div v-if="loaded" class="glass-card layer-card" data-reveal>
            <div class="layer-head">
              <div>
                <span class="layer-eyebrow" style="opacity:.75">Edge Layer</span>
                <h3 class="layer-name">Intelligence at Source</h3>
              </div>
              <div class="layer-icon-wrap layer-icon-wrap--edge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="2" y="8" width="8" height="8" rx="1"/><rect x="14" y="3" width="8" height="5" rx="1"/>
                  <rect x="14" y="11" width="8" height="5" rx="1"/><rect x="14" y="19" width="8" height="2" rx="1"/>
                  <path d="M10 12h4M10 6h4M10 20h4"/>
                </svg>
              </div>
            </div>
            <div class="chip-row">
              <span
                v-for="item in architecture.edgeLayer"
                :key="item"
                class="chip chip--neutral"
              >{{ item }}</span>
            </div>
          </div>
          <div v-else class="glass-card layer-card skeleton-card" data-reveal></div>

          <!-- Field Layer -->
          <div v-if="loaded" class="glass-card layer-card" data-reveal>
            <div class="layer-head">
              <div>
                <span class="layer-eyebrow" style="opacity:.55">Field Layer</span>
                <h3 class="layer-name">Physical Infrastructure</h3>
              </div>
              <div class="layer-icon-wrap layer-icon-wrap--field">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M2 20h20M4 20V10l4-4h8l4 4v10M9 20v-5h6v5M12 4v2"/>
                  <rect x="10" y="12" width="4" height="4" rx="0.5"/>
                </svg>
              </div>
            </div>
            <div class="field-grid">
              <span
                v-for="item in architecture.fieldLayer"
                :key="item"
                class="field-chip"
              >{{ item }}</span>
            </div>
          </div>
          <div v-else class="glass-card layer-card skeleton-card" data-reveal></div>

          <!-- Applications + Cybersecurity row -->
          <div class="bottom-row" >

            <!-- Applications -->
            <div v-if="loaded" class="glass-card bottom-card" data-reveal>
              <div class="bc-head">
                <div class="bc-icon-wrap bc-icon--blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17.5h7M17.5 14v7"/>
                  </svg>
                </div>
                <div>
                  <h3 class="bc-title">Applications</h3>
                  <p class="bc-subtitle">Industrial software &amp; orchestration</p>
                </div>
              </div>
              <p class="bc-body">Edge-to-cloud software solutions designed for high-availability industrial monitoring and real-time operational control.</p>
              <div class="chip-row">
                <span v-for="app in architecture.applications" :key="app" class="chip chip--primary">{{ app }}</span>
              </div>
              <div class="bc-footer">
                <span class="bc-meta">Layer 4–5</span>
                <button class="bc-link">View Docs →</button>
              </div>
            </div>
            <div v-else class="glass-card bottom-card skeleton-card" data-reveal></div>

            <!-- Cybersecurity -->
            <div v-if="loaded" class="glass-card bottom-card" data-reveal>
              <div class="bc-head">
                <div class="bc-icon-wrap bc-icon--red">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <h3 class="bc-title">Cybersecurity</h3>
                  <p class="bc-subtitle">Defense-in-depth architecture</p>
                </div>
              </div>
              <p class="bc-body">Zero-trust security frameworks integrated directly into the OT fabric to protect critical infrastructure from evolving threats.</p>
              <div class="chip-row">
                <span v-for="item in architecture.cybersecurity" :key="item" class="chip chip--primary">{{ item }}</span>
              </div>
              <div class="bc-footer">
                <span class="bc-meta">Cross-Cutting</span>
                <button class="bc-link">Security Audit →</button>
              </div>
            </div>
            <div v-else class="glass-card bottom-card skeleton-card" data-reveal></div>

          </div>

          <!-- Integrated Intelligence banner -->
          <div class="glass-card banner-card" data-reveal aria-hidden="true" >
            <div class="banner-grid-bg"></div>
            <div class="banner-content">
              <h3 class="banner-title">Integrated Intelligence</h3>
              <p class="banner-body">Seamlessly bridge the gap between physical assets and digital insights with our multi-tenant architecture.</p>
            </div>
          </div>

        </div>

        <!-- RIGHT SIDEBAR -->
        <aside class="arc-sidebar">

              <!-- Partners card -->
          <div class="glass-card sidebar-card" data-reveal>
            <h4 class="sidebar-eyebrow">
              <svg class="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M15 11l4.9-2.45a2 2 0 000-3.1L14 3a2 2 0 00-1.84 0L9 5M15 11l-6 3M15 11v9l-6-3V8l6 3zM9 5L4.1 7.45a2 2 0 000 3.1L9 13M9 5v3"/>
              </svg>
              Architecture Partners
            </h4>
            <div class="partners-grid">
              <div
                v-for="partner in architecture?.partners"
                :key="partner"
                class="partner-tile"
              >{{ partner }}</div>
            </div>
          </div>

          <!-- Protocols card -->
          <div class="glass-card sidebar-card" data-reveal>
            <h4 class="sidebar-eyebrow">
              <svg class="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
              </svg>
              Protocols &amp; Components
            </h4>
            <div class="proto-chips">
              <button
                v-for="p in architecture?.protocols"
                :key="p"
                class="proto-chip"
                :class="{ 'proto-chip--active': activeChip === p }"
                @click="activeChip = p"
              >{{ p }}</button>
            </div>
          </div>

          <!-- Detail panel -->
          <div class="detail-panel" data-reveal>
            <div class="detail-glow" aria-hidden="true"></div>
            <div class="detail-body">
              <span class="detail-eyebrow">Detail View</span>
              <h4 class="detail-title">
                {{ activeChip }}
                <svg class="detail-verified" viewBox="0 0 24 24" fill="#005fff" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </h4>
              <p class="detail-desc">{{ activeChipDetail }}</p>
              <hr class="detail-hr"/>
              <div class="detail-meta">
                <div class="detail-row">
                  <span class="detail-label">Security Level</span>
                  <span class="detail-value">Highest</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Latency</span>
                  <span class="detail-value">&lt; 10ms</span>
                </div>
              </div>
            </div>
          </div>

        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import increasedNumbersVideo from '@/videos/increased-numbers.mp4'

const siteStore = useSiteStore()
const { architecture, loaded } = storeToRefs(siteStore)
const activeChip = ref('OPC UA')

const activeChipDetail = computed(() => {
  if (!architecture.value) return 'Select a protocol to see more detail.'
  return `Selected: ${activeChip.value}. This chip represents a flexible integration point in the OT/IT architecture. It facilitates secure, platform-independent information exchange across enterprise levels — from the sensor to the cloud.`
})
</script>

<style scoped>
/* ── Root ──────────────────────────────────────────────────────────── */
.arc-root {
  position: relative;
  background: transparent;
  overflow: hidden;
  padding: 2rem 2rem;
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  color: #e8edf8;
}

/* Layer 1 – video background */
.arc-video-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  pointer-events: none;
}

/* Layer 2 – isolation overlay */
.arc-overlay {
  position: absolute;
  inset: 0;
  background: rgba(8, 18, 40, 0.72);
  z-index: 1;
  pointer-events: none;
}

/* dot mesh */
.arc-mesh {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.06) 1px, transparent 0);
  background-size: 28px 28px;
  pointer-events: none;
  z-index: 2;
}

/* ── Inner container ───────────────────────────────────────────────── */
.arc-inner {
  position: relative;
  z-index: 3;
  max-width: 1280px;
  margin: 0 auto;
}

/* ── Header ────────────────────────────────────────────────────────── */
.arc-header {
  margin-bottom: 1rem;
}
.arc-title {
  font-size: clamp(1.6rem, 3.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: #e8edf8;
  margin: 0 0 0.4rem 0;
}
.arc-subtitle {
  font-size: 1rem;
  font-weight: 400;
  color: #a0adc4;
  margin: 0;
}

/* ── Layout grid ───────────────────────────────────────────────────── */
.arc-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}
@media (min-width: 1024px) {
  .arc-grid {
    grid-template-columns: 1fr 340px;
  }
}

/* ── Canvas ────────────────────────────────────────────────────────── */
.arc-canvas {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* ── Glass card base ───────────────────────────────────────────────── */
.glass-card {
  background: rgba(12, 25, 55, 0.55);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.35), 0 1px 0 rgba(255,255,255,0.08) inset;
  border-radius: 0.875rem;
  color: #999;
}

/* ── Layer cards ───────────────────────────────────────────────────── */
.layer-card {
  padding: 2rem;
}

.layer-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.layer-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #005fff;
  margin-bottom: 0.35rem;
}

.layer-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #e8edf8;
  margin: 0;
  letter-spacing: -0.01em;
}

/* layer icon */
.layer-icon-wrap {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.layer-icon-wrap svg { width: 1.25rem; height: 1.25rem; }
.layer-icon-wrap--cloud { background: rgba(0,74,198,0.08); color: #005fff; }
.layer-icon-wrap--edge  { background: rgba(0,74,198,0.06); color: #005fff; }
.layer-icon-wrap--field { background: rgba(0,74,198,0.04); color: #005fff; }

/* ── Chips ─────────────────────────────────────────────────────────── */
.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.chip {
  display: inline-block;
  padding: 0.4rem 0.85rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: default;
  transition: all 0.2s ease;
  white-space: nowrap;
}
.chip:hover { transform: translateY(-1px); }

.chip--blue {
  background: #d3e4fe;
  color: #38485d;
  border: 1px solid rgba(0,74,198,0.15);
}
.chip--blue:hover { background: #c0d6fd; }

.chip--neutral {
  background: rgba(255,255,255,0.08);
  color: #c8d4ec;
  border: 1px solid rgba(255,255,255,0.15);
}
.chip--neutral:hover { border-color: #5b8aff; }

.chip--primary {
  background: rgba(0,74,198,0.07);
  color: #fff;
  border: 1px solid rgba(0,74,198,0.18);
}
.chip--primary:hover { background: rgba(0,74,198,0.13); }

/* ── Field grid ────────────────────────────────────────────────────── */
.field-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 0.625rem;
}
.field-chip {
  background: rgba(255,255,255,0.07);
  color: #c8d4ec;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 0.5rem;
  padding: 0.6rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.73rem;
  font-weight: 500;
  line-height: 1.35;
  transition: border-color 0.2s ease, background 0.2s ease;
  cursor: default;
}
.field-chip:hover { border-color: #5b8aff; background: rgba(255,255,255,0.12); }

/* ── Bottom row ────────────────────────────────────────────────────── */
.bottom-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .bottom-row { grid-template-columns: 1fr 1fr; }
}

.bottom-card {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bc-head {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}
.bc-icon-wrap {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.bc-icon-wrap svg { width: 1.15rem; height: 1.15rem; }
.bc-icon--blue { background: rgba(37,99,235,0.1); color: #2563eb; }
.bc-icon--red  { background: rgba(186,26,26,0.08); color: #ba1a1a; }

.bc-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #eee;
  margin: 0; 
} 
.bc-subtitle {
  font-size: 0.88rem;
  color: #ccc;
  margin: 0.15rem 0 0 0;
}
.bc-body {
  font-size: 0.8rem;
  line-height: 1.6;
  color: #999;
  margin: 0;
}
.bc-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.9rem;
  border-top: 1px solid rgba(0,0,0,0.07);
  margin-top: auto;
}
.bc-meta {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #999;
}
.bc-link {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  color: #005fff;
  font-family: inherit;
  transition: opacity 0.2s;
}
.bc-link:hover { opacity: 0.7; }

/* ── Banner card ───────────────────────────────────────────────────── */
.banner-card {
  position: relative;
  overflow: hidden;
  min-height: 10rem;
  padding: 2rem;
  display: flex;
  align-items: flex-end;
}
.banner-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,74,198,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,74,198,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  z-index: 0;
}
.banner-content {
  position: relative;
  z-index: 1;
}
.banner-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #eee;
  margin: 0 0 0.4rem 0;
}
.banner-body {
  font-size: 0.85rem;
  color: #999;
  max-width: 36rem;
  margin: 0;
  line-height: 1.55;
}

/* ── Skeleton ──────────────────────────────────────────────────────── */
.skeleton-card {
  min-height: 8rem;
  background: linear-gradient(90deg, #eceef0 0%, #e0e3e5 50%, #eceef0 100%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite ease;
}
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}

/* ── Sidebar ───────────────────────────────────────────────────────── */
.arc-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
@media (min-width: 1024px) {
  .arc-sidebar { position: sticky; top: 2rem; }
}

.sidebar-card {
  padding: 1.5rem;
}
.sidebar-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #999;
  margin: 0 0 1rem 0;
}
.sidebar-icon {
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
  stroke: currentColor;
}

/* protocol chips */
.proto-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.proto-chip {
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  border: 1px solid rgba(67,70,85,0.2);
  background: #e0e3e5;
  color: #191c1e;
  transition: all 0.2s ease;
}
.proto-chip:hover { background: #d3e4fe; border-color: rgba(0,74,198,0.3); }
.proto-chip--active {
  background: #005fff;
  color: #fff;
  border-color: #005fff;
  box-shadow: 0 2px 8px rgba(0,74,198,0.35);
}
.proto-chip:active { transform: scale(0.95); }

/* partners */
.partners-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}
.partner-tile {
  background: #f2f4f6;
  border: 1px solid rgba(67,70,85,0.12);
  border-radius: 0.5rem;
  padding: 0.6rem 0.5rem;
  text-align: center;
  font-size: 0.78rem;
  font-weight: 700;
  color: #191c1e;
  cursor: default;
  transition: background 0.2s ease, border-color 0.2s ease;
  min-width: fit-content !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.partner-tile:hover { background: #fff; border-color: rgba(0,74,198,0.3); }

/* detail panel */
.detail-panel {
  position: relative;
  overflow: hidden;
  background: rgba(0,74,198,0.06);
  border: 1px solid rgba(8,100,255,0.18); 
  border-radius: 0.875rem;
  padding: 1.5rem;
}
.detail-glow {
  position: absolute;
  top: -3rem;
  right: -3rem;
  width: 8rem;
  height: 8rem;
  background: rgba(0,74,198,0.1);
  border-radius: 9999px;
  filter: blur(2.5rem);
  pointer-events: none;
  transition: transform 0.7s ease;
}
.detail-panel:hover .detail-glow { transform: scale(1.5); }
.detail-body { position: relative; z-index: 1; }

.detail-eyebrow {
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #005fff;
  margin-bottom: 0.5rem;
}
.detail-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ccc;
  margin: 0 0 0.75rem 0;
}
.detail-verified {
  width: 0.95rem;
  height: 0.95rem;
  flex-shrink: 0;
}
.detail-desc {
  font-size: 0.8rem;
  line-height: 1.6;
  color: #ccc;
  margin: 0;
}
.detail-hr {
  border: none;
  border-top: 1px solid rgba(0,74,198,0.1);
  margin: 1rem 0;
}
.detail-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
}
.detail-label { color: #ddd; }
.detail-value { font-weight: 700; color: #025eff; }
</style>
