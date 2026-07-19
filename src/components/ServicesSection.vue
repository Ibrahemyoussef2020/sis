<template>
  <section id="services" class="services-root">
    <div class="services-inner">
      <div class="section-header" data-reveal>
        <div class="label-row">
          <span class="label-line"></span>
          <span class="label-text">Services &amp; Capabilities</span>
        </div>
        <h2 class="section-title">
          One platform, <em class="title-amp">every</em> industrial capability
        </h2>
      </div>

      <div v-if="loaded" class="sol-grid">
        <article
          v-for="(card, i) in cards"
          :key="card.tag"
          class="scard"
          data-reveal
        >
          <span class="scard-tag">{{ card.tag }}</span>
          <div class="scard-ic"><UiIcon :name="card.icon" /></div>
          <h3 class="scard-title">{{ card.title }}</h3>
          <p class="scard-body">{{ card.body }}</p>
        </article>
      </div>

      <div v-else class="sol-grid skeleton-grid">
        <div v-for="n in 6" :key="n" class="skeleton-card"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import UiIcon from "@/components/UiIcon.vue";

const loaded = ref(false);

const cards = [
  {
    tag: "01",
    icon: "monitor",
    title: "IIoT &amp; SCADA",
    body: "Remote monitoring and control of industrial processes with real-time data and alarms."
  },
  {
    tag: "02",
    icon: "predictive",
    title: "Predictive Maintenance",
    body: "Spot equipment failures before they happen and schedule work on data, not guesswork."
  },
  {
    tag: "03",
    icon: "cube",
    title: "Digital Twin",
    body: "Virtual replicas of physical assets to simulate, test and optimize operations safely."
  },
  {
    tag: "04",
    icon: "layers",
    title: "Augmented Reality",
    body: "Overlay live data and guidance onto real equipment for faster, safer field work."
  },
  {
    tag: "05",
    icon: "energy",
    title: "MV &middot; LV &middot; I&amp;C Panels",
    body: "Custom medium/low-voltage and control panels, engineered and factory-tested to standard."
  },
  {
    tag: "06",
    icon: "database",
    title: "Big Data Analytics",
    body: "Make sense of high-volume plant data from many sources to drive better decisions."
  }
];

onMounted(() => {
  setTimeout(() => { loaded.value = true; }, 100);
});
</script>

<style scoped>
.services-root {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0a1120, #070d1a);
  padding: 5rem 0;
  color: #eaf1fb;
}

.services-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 28px;
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
  background: #37b6ff;
}
.label-text {
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #37b6ff;
}

.section-title {
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  font-size: clamp(2rem, 5.2vw, 4.25rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #eaf1fb;
  max-width: 42rem;
  margin: 0;
}
.title-amp {
  font-style: italic;
  font-weight: 400;
  color: #37b6ff;
}

/* ── Solutions grid ───────────────────────────────────────────────── */
.sol-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}
@media (min-width: 640px) {
  .sol-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .sol-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* ── Card ──────────────────────────────────────────────────────────── */
.scard {
  position: relative;
  border: 1px solid rgba(126, 165, 224, 0.14);
  border-radius: 14px;
  background: linear-gradient(180deg, #101b31, #0c1426);
  padding: 22px;
  overflow: hidden;
  transition: transform 0.24s ease, border-color 0.24s ease;
  cursor: default;
}
.scard::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 2px;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left;
  background: linear-gradient(90deg, #37b6ff, #5fe0c4);
  transition: transform 0.35s ease;
}
.scard:hover {
  transform: translateY(-5px);
  border-color: rgba(126, 165, 224, 0.3);
}
.scard:hover::after {
  transform: scaleX(1);
}

.scard-tag {
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: "Cascadia Code", Consolas, monospace;
  font-size: 10px;
  color: rgba(126, 165, 224, 0.4);
}

.scard-ic {
  width: 44px;
  height: 44px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  margin-bottom: 16px;
  background: rgba(47, 155, 224, 0.1);
  border: 1px solid rgba(126, 165, 224, 0.3);
  color: #37b6ff;
}
.scard-ic :deep(svg) {
  width: 22px;
  height: 22px;
}

.scard-title {
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  font-size: 16.5px;
  font-weight: 700;
  margin: 0 0 7px;
  letter-spacing: -0.01em;
  color: #eaf1fb;
}

.scard-body {
  font-size: 13px;
  line-height: 1.55;
  color: rgba(167, 184, 212, 0.9);
  margin: 0;
}

/* ── Skeleton ─────────────────────────────────────────────────────── */
.skeleton-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}
.skeleton-card {
  height: 180px;
  border-radius: 14px;
  background: linear-gradient(90deg, #101b31 0%, #1c2540 50%, #101b31 100%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite ease;
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>
