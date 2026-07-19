<template>
  <section id="integration" class="int-root">
    <div class="int-bg-dots" aria-hidden="true"></div>

    <div class="int-inner">
      <div class="int-header" data-reveal>
        <div class="int-label-row">
          <span class="int-label-line"></span>
          <span class="int-label-text">Digital Integration</span>
        </div>
        <h2 class="int-title">
          What Drives Our OT–IT Journey
        </h2>
        <p class="int-desc">
          SiS bridges operational and information technology with precision,
          innovation, and reliable digital transformation for industrial clients.
        </p>
      </div>

      <div class="int-grid">
        <div class="int-col">
          <h3 class="int-col-title" data-reveal>Sectors</h3>
          <p class="int-col-desc" data-reveal>
            Industries we serve with tailored OT–IT solutions.
          </p>
          <div class="int-items">
            <template v-if="loaded">
              <div
                v-for="s in sectors"
                :key="s.id"
                class="int-card"
                data-reveal
              >
                <div class="int-card-body">
                  <div class="int-card-label">{{ s.label }}</div>
                  <div class="int-card-count">{{ s.projects.length }} projects</div>
                </div>
                <div
                  class="int-card-dot"
                  :style="{ background: s.color }"
                ></div>
              </div>
            </template>
            <template v-else>
              <div class="int-skel"></div>
              <div class="int-skel"></div>
            </template>
          </div>
        </div>

        <div class="int-col">
          <h3 class="int-col-title" data-reveal>Capabilities</h3>
          <p class="int-col-desc" data-reveal>
            Our core technical strengths and delivery pillars.
          </p>
          <div class="int-items">
            <template v-if="loaded">
              <div
                v-for="col in capabilities.columns"
                :key="col"
                class="int-pill"
                data-reveal
              >
                {{ col }}
              </div>
            </template>
            <template v-else>
              <div class="int-skel"></div>
              <div class="int-skel"></div>
            </template>
          </div>
        </div>
      </div>

      <div class="int-video-band" data-reveal>
        <div class="int-video-grid">
          <div class="int-video-content">
            <p class="int-video-eyebrow">See Us In Action</p>
            <h3 class="int-video-title">
              Industrial Intelligence
              <span class="int-video-accent">in Motion</span>
            </h3>
            <p class="int-video-desc">
              Watch how SiS bridges the gap between operational technology and
              information technology — delivering real results across the MENA
              region.
            </p>
            <a
              :href="`https://www.youtube.com/watch?v=${videoId}`"
              target="_blank"
              rel="noopener noreferrer"
              class="int-yt-btn"
            >
              <svg
                class="int-yt-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
              Watch on YouTube
            </a>
          </div>
          <div class="int-video-frame">
            <video
              src="@/images/sis-showcase.mp4"
              title="SiS Industrial Automation in Action"
              autoplay
              loop
              muted
              controls
              playsinline
              class="int-video-el"
            ></video>
          </div>
        </div>
      </div>

      <div class="int-cta-wrap" data-reveal>
        <a
          @click.prevent="router.push({ name: 'projects' })"
          href="#"
          class="int-cta"
        >
          Explore Case Studies
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useSiteStore } from "@/stores/useSiteStore";
import { useRouter } from "vue-router";

const siteStore = useSiteStore();
const router = useRouter();
const { sectors, capabilities, loaded } = storeToRefs(siteStore);

const videoId = "jhwNcujM9g0";
</script>

<style scoped>
.int-root {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0a1120, #070d1a);
  padding: 5rem 0;
  color: #eaf1fb;
}

.int-bg-dots {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(126, 165, 224, 0.06) 1px, transparent 1px);
  background-size: 28px 28px;
}

.int-inner {
  position: relative;
  z-index: 1;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* ── Header ───────────────────────────────────────────────────────── */
.int-header {
  max-width: 60ch;
}

.int-label-row {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.int-label-line {
  display: block;
  width: 3rem;
  height: 1px;
  background: #37b6ff;
}
.int-label-text {
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #37b6ff;
}

.int-title {
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  font-size: clamp(1.75rem, 3.3vw, 2.5rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.025em;
  color: #eaf1fb;
  margin: 0;
}

.int-desc {
  margin: 14px 0 0;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(167, 184, 212, 0.9);
  max-width: 56ch;
}

/* ── Two-column grid ──────────────────────────────────────────────── */
.int-grid {
  display: grid;
  gap: 3rem;
}
@media (min-width: 1024px) {
  .int-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.int-col {
  display: flex;
  flex-direction: column;
}

.int-col-title {
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #eaf1fb;
  margin: 0;
}

.int-col-desc {
  font-size: 14px;
  color: rgba(167, 184, 212, 0.9);
  margin: 8px 0 0;
}

.int-items {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

/* ── Sector cards ─────────────────────────────────────────────────── */
.int-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(126, 165, 224, 0.14);
  border-radius: 12px;
  background: linear-gradient(180deg, #101b31, #0c1426);
  padding: 14px;
  transition: border-color 0.24s ease, transform 0.24s ease;
  cursor: default;
}
.int-card:hover {
  border-color: rgba(126, 165, 224, 0.3);
  transform: translateY(-2px);
}

.int-card-body {
  flex: 1;
  min-width: 0;
}

.int-card-label {
  font-weight: 600;
  font-size: 14px;
  color: #eaf1fb;
}

.int-card-count {
  font-size: 13px;
  color: rgba(167, 184, 212, 0.8);
  margin-top: 2px;
}

.int-card-dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ── Capability pills ──────────────────────────────────────────────── */
.int-pill {
  padding: 14px;
  border: 1px solid rgba(126, 165, 224, 0.14);
  border-radius: 12px;
  background: linear-gradient(180deg, #101b31, #0c1426);
  font-size: 14px;
  font-weight: 500;
  color: #eaf1fb;
  transition: border-color 0.24s ease, transform 0.24s ease;
  cursor: default;
}
.int-pill:hover {
  border-color: rgba(126, 165, 224, 0.3);
  transform: translateY(-2px);
}

/* ── Video band ───────────────────────────────────────────────────── */
.int-video-band {
  border: 1px solid rgba(126, 165, 224, 0.14);
  border-radius: 14px;
  background: linear-gradient(180deg, #0c1426, #070d1a);
  padding: 2rem 1.5rem;
}
@media (min-width: 768px) {
  .int-video-band {
    padding: 3rem 2.5rem;
  }
}

.int-video-grid {
  display: grid;
  gap: 2rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .int-video-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.int-video-eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #37b6ff;
}

.int-video-title {
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #eaf1fb;
  margin: 8px 0 0;
}

.int-video-accent {
  font-style: italic;
  color: #5fe0c4;
}

.int-video-desc {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(167, 184, 212, 0.9);
}

.int-yt-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 11px 22px;
  border: 1px solid rgba(126, 165, 224, 0.14);
  border-radius: 10px;
  background: linear-gradient(180deg, #101b31, #0c1426);
  font-size: 14px;
  font-weight: 600;
  color: #eaf1fb;
  text-decoration: none;
  transition: border-color 0.24s ease, color 0.24s ease, transform 0.24s ease;
}
.int-yt-btn:hover {
  border-color: #37b6ff;
  color: #37b6ff;
  transform: translateY(-2px);
}

.int-yt-icon {
  width: 20px;
  height: 20px;
  color: #ff0033;
  flex-shrink: 0;
}

.int-video-frame {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(126, 165, 224, 0.14);
  box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.7);
}

.int-video-el {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
}

/* ── Bottom CTA ───────────────────────────────────────────────────── */
.int-cta-wrap {
  text-align: center;
}

.int-cta {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 9999px;
  background: #37b6ff;
  color: #04121f;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: filter 0.24s ease, transform 0.24s ease, box-shadow 0.24s ease;
  cursor: pointer;
}
.int-cta:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px -8px rgba(55, 182, 255, 0.4);
}
.int-cta:active {
  transform: scale(0.97);
}

/* ── Skeleton ─────────────────────────────────────────────────────── */
.int-skel {
  height: 52px;
  border-radius: 12px;
  background: linear-gradient(90deg, #101b31 0%, #1c2540 50%, #101b31 100%);
  background-size: 200% 100%;
  animation: int-shimmer 1.4s infinite ease;
}
@keyframes int-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>
