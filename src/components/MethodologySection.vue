<template>
  <section id="methodology" class="mth-root" ref="sectionRef">
    <!-- Atmospheric glows -->
    <div class="mth-glow mth-glow--tr" aria-hidden="true"></div>
    <div class="mth-glow mth-glow--bl" aria-hidden="true"></div>

    <div class="mth-inner">
      <!-- ── Header ───────────────────────────────────────────────── -->
      <div class="mth-header" data-reveal>
        <span class="mth-eyebrow">Methodology</span>
        <h2 class="mth-title">
          {{ methodology?.title ?? "Engagement Methodology" }}
        </h2>
        <p class="mth-subtitle">
          From first audit to continuous optimisation — our three-phase
          engagement model ensures every OT/IT integration is delivered with
          precision, backed by field-proven engineers, and built to evolve with
          your operations.
        </p>
      </div>

      <!-- ── Interactive layout ───────────────────────────────────── -->
      <div v-if="loaded" class="mth-layout" data-reveal>
        <!-- Left: Tab list -->
        <div class="mth-tabs" role="tablist" aria-label="Methodology stages">
          <button
            v-for="stage in methodology.stages"
            :key="stage.number"
            class="mth-tab"
            :class="{ 'mth-tab--active': activeStage === stage.number }"
            role="tab"
            :aria-selected="activeStage === stage.number"
            :aria-controls="`mth-pane-${stage.number}`"
            :id="`mth-tab-${stage.number}`"
            @click="setStage(stage.number)"
          >
            <span
              class="mth-badge"
              :class="{ 'mth-badge--active': activeStage === stage.number }"
              >{{ stage.number }}</span
            >
            <span class="mth-tab-label">{{ stage.title }}</span>
          </button>
        </div>

        <!-- Right: Detail pane -->
        <div class="mth-detail">
          <Transition name="mth-fade" mode="out-in">
            <div
              :key="activeStage"
              class="mth-pane"
              role="tabpanel"
              :id="`mth-pane-${activeStage}`"
              :aria-labelledby="`mth-tab-${activeStage}`"
            >
              <!-- Ghost icon watermark -->
              <div class="mth-watermark" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>

              <!-- Phase label -->
              <div class="mth-phase-row">
                <svg
                  class="mth-phase-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <template v-if="activeStage === 1">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </template>
                  <template v-else-if="activeStage === 2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </template>
                  <template v-else>
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </template>
                </svg>
                <span class="mth-phase-label">Phase 0{{ activeStage }}</span>
              </div>

              <!-- Content -->
              <h3 class="mth-pane-title">{{ activeData.fullTitle }}</h3>
              <p class="mth-pane-body">{{ activeData.intro }}</p>
              <ul class="mth-pane-list">
                <li
                  v-for="bullet in activeData.bullets"
                  :key="bullet"
                  class="mth-pane-item"
                >
                  <span class="mth-bullet-dot" aria-hidden="true"></span>
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Skeleton -->
      <div v-else class="mth-layout mth-skeleton">
        <div class="mth-skel-tabs">
          <div v-for="n in 3" :key="n" class="mth-skel-row skeleton"></div>
        </div>
        <div class="mth-skel-pane skeleton"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useSiteStore } from "@/stores/useSiteStore";

const siteStore = useSiteStore();
const { methodology, loaded } = storeToRefs(siteStore);

const activeStage = ref(1);
const sectionRef = ref(null);

// Extended descriptions per stage (supplements what's in the data store)
const stageDetails = {
  1: {
    fullTitle: "Strategic Architecture & Industrial Consulting",
    intro:
      "We start by mapping the full picture — legacy systems, data flows, and integration gaps — then design a future-state architecture that bridges your OT and IT worlds.",
    bullets: [
      "Deep-dive infrastructure audit to identify bottlenecks and data silos",
      "IT/OT integration blueprint with technology stack selection and vendor guidance",
      "ROI-based feasibility study and phased implementation roadmap",
    ],
  },
  2: {
    fullTitle: "Implementation & Squad Integration",
    intro:
      "Our hybrid squads embed directly in your environment — commissioning hardware, building custom software, and running agile sprints to deliver working systems fast.",
    bullets: [
      "Hardware commissioning, PLC/SCADA configuration, and field wiring validation",
      "Custom software development for HMI, dashboards, and ERP/SCADA integration",
      "Agile sprint cycles with continuous stakeholder reviews and acceptance testing",
    ],
  },
  3: {
    fullTitle: "Support & Continuous Optimisation",
    intro:
      "Go-live is only the beginning. We stay engaged with proactive monitoring, software iteration, and data-driven tuning to keep your plant performing at its peak.",
    bullets: [
      "Real-time remote monitoring with automated alarm and anomaly detection",
      "Predictive maintenance models updated from live operational data",
      "Quarterly performance reviews with KPI tracking and continuous improvement plans",
    ],
  },
};

const activeData = computed(() => stageDetails[activeStage.value]);

function setStage(n) {
  activeStage.value = n;
}

onMounted(() => {
  if (!sectionRef.value) return;
  const items = [...sectionRef.value.querySelectorAll("[data-reveal]")];
  items.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        items.forEach((el, i) => {
          setTimeout(() => {
            el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, i * 120);
        });
        observer.disconnect();
      });
    },
    { threshold: 0.15 },
  );

  observer.observe(sectionRef.value);
});
</script>

<style scoped>
/* ── Root ──────────────────────────────────────────────────────────── */
.mth-root {
  /* min-height: 100vh; */
  position: relative;
  background: #0a1120;
  overflow: hidden;
  padding: 2rem 2rem;
  font-family: "Plus Jakarta Sans", "Manrope", "Inter", sans-serif;
  color: #eaf1fb;
}

/* atmospheric glows */
.mth-glow {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
}
.mth-glow--tr {
  width: 24rem;
  height: 24rem;
  top: -6rem;
  right: -6rem;
  background: rgba(55, 182, 255, 0.07);
  filter: blur(80px);
}
.mth-glow--bl {
  width: 16rem;
  height: 16rem;
  bottom: -4rem;
  left: -4rem;
  background: rgba(94, 224, 196, 0.05);
  filter: blur(80px);
}

/* ── Inner ─────────────────────────────────────────────────────────── */
.mth-inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
}

/* ── Header ────────────────────────────────────────────────────────── */
.mth-header {
  text-align: center;
  margin-bottom: 3.5rem;
}
.mth-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #37b6ff;
  margin-bottom: 0.75rem;
}
.mth-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #eaf1fb;
  margin: 0;
  max-width: 32rem;
  margin-inline: auto;
}
.mth-subtitle {
  margin: 1rem auto 0;
  max-width: 38rem;
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #a8b3cf;
}

/* ── Layout ────────────────────────────────────────────────────────── */
.mth-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;
}
@media (min-width: 1024px) {
  .mth-layout {
    grid-template-columns: 5fr 7fr;
    gap: 1.5rem;
  }
}

/* ── Tabs column ───────────────────────────────────────────────────── */
.mth-tabs {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: rgba(126, 165, 224, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(126, 165, 224, 0.12);
  border-radius: 1rem;
  padding: 1.25rem 0;
}

.mth-tab {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  border-left: 4px solid transparent;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition:
    background 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    border-color 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    padding-left 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 0 0.5rem 0.5rem 0;
}
.mth-tab:hover:not(.mth-tab--active) {
  background: rgba(55, 182, 255, 0.06);
  padding-left: 1.75rem;
}
.mth-tab--active {
  background: rgba(55, 182, 255, 0.1);
  border-left-color: #37b6ff;
  padding-left: 1.75rem;
}

/* badge */
.mth-badge {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  background: rgba(126, 165, 224, 0.14);
  color: #eaf1fb;
  transition:
    background 0.3s ease,
    color 0.3s ease;
}
.mth-badge--active {
  background: #37b6ff;
  color: #00344d;
  box-shadow: 0 3px 12px rgba(55, 182, 255, 0.35);
}

/* tab label */
.mth-tab-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #a8b3cf;
  transition: color 0.3s ease;
  line-height: 1.35;
}
.mth-tab--active .mth-tab-label {
  color: #eaf1fb;
}
.mth-tab:hover:not(.mth-tab--active) .mth-tab-label {
  color: #eaf1fb;
}

/* ── Detail pane ───────────────────────────────────────────────────── */
.mth-detail {
  min-height: 20rem;
}
.mth-pane {
  position: relative;
  overflow: hidden;
  background: rgba(126, 165, 224, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(126, 165, 224, 0.14);
  border-radius: 1rem;
  padding: 3rem;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* ghost watermark */
.mth-watermark {
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 10rem;
  height: 10rem;
  opacity: 0.06;
  color: #eaf1fb;
  pointer-events: none;
}
.mth-watermark svg {
  width: 100%;
  height: 100%;
}

/* phase row */
.mth-phase-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  color: #37b6ff;
}
.mth-phase-icon {
  width: 1.1rem;
  height: 1.1rem;
  flex-shrink: 0;
}
.mth-phase-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

/* pane content */
.mth-pane-title {
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  font-weight: 700;
  color: #eaf1fb;
  margin: 0 0 1.25rem 0;
  letter-spacing: -0.01em;
  line-height: 1.3;
  max-width: 36rem;
}
.mth-pane-body {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #a8b3cf;
  max-width: 36rem;
  margin: 0 0 1.5rem 0;
}

.mth-pane-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mth-pane-item {
  position: relative;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #c8d0e0;
  padding-left: 1.5rem;
  max-width: 36rem;
}

.mth-bullet-dot {
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 6px;
  height: 6px;
  background-color: #37b6ff;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(55, 182, 255, 0.4);
}

/* ── Fade transition ───────────────────────────────────────────────── */
.mth-fade-enter-active,
.mth-fade-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}
.mth-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.mth-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Skeleton ──────────────────────────────────────────────────────── */
.mth-skeleton {
  align-items: stretch;
}
.mth-skel-tabs {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: 1rem;
  overflow: hidden;
}
.mth-skel-row {
  height: 5rem;
  border-radius: 0.5rem;
}
.mth-skel-pane {
  height: 20rem;
  border-radius: 1rem;
}
.skeleton {
  background: linear-gradient(90deg, rgba(126,165,224,0.06) 0%, rgba(126,165,224,0.14) 50%, rgba(126,165,224,0.06) 100%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite ease;
}
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
