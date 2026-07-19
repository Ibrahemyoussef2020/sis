<template>
  <section id="how-it-works" class="pillars-root">
    <div class="pillars-inner">
      <div class="section-header" data-reveal>
        <div class="label-row">
          <span class="label-line"></span>
          <span class="label-text">How It Works</span>
        </div>
        <h2 class="section-title">
          From sensor to decision, <em class="title-amp">in real time</em>
        </h2>
      </div>

      <div class="pillars-grid">
        <article
          v-for="(pillar, i) in pillars"
          :key="pillar.step"
          class="pillar-card"
          data-reveal
        >
          <div class="pillar-ic"><UiIcon :name="pillar.icon" /></div>
          <span class="pillar-step">{{ pillar.step }}</span>
          <h3 class="pillar-title">{{ pillar.title }}</h3>
          <p class="pillar-body">{{ pillar.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import UiIcon from "@/components/UiIcon.vue";

const pillars = [
  {
    step: "01 \u00b7 Connect",
    title: "Connect any asset",
    body: "PLCs, sensors, drives and legacy equipment onto one secure network over OPC UA, MQTT and Modbus.",
    icon: "connect",
  },
  {
    step: "02 \u00b7 Monitor",
    title: "Monitor in real time",
    body: "Live SCADA dashboards, alarms and trends \u2014 every metric visible the moment it moves.",
    icon: "pulse",
  },
  {
    step: "03 \u00b7 Optimize",
    title: "Optimize & predict",
    body: "Analytics, digital twins and predictive maintenance turn data into fewer stoppages and higher output.",
    icon: "chart",
  },
];
</script>

<style scoped>
.pillars-root {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #070d1a, #0a1120);
  border-top: 1px solid rgba(126, 165, 224, 0.14);
  border-bottom: 1px solid rgba(126, 165, 224, 0.14);
  padding: 5rem 0;
  color: #eaf1fb;
}

.pillars-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* ── Section header ───────────────────────────────────────────────── */
.section-header {
  max-width: 60ch;
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
  font-size: clamp(1.75rem, 3.3vw, 2.5rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.025em;
  color: #eaf1fb;
  margin: 0;
}
.title-amp {
  font-style: italic;
  font-weight: 400;
  color: #37b6ff;
}

/* ── Pillars grid ─────────────────────────────────────────────────── */
.pillars-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 768px) {
  .pillars-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ── Pillar card ──────────────────────────────────────────────────── */
.pillar-card {
  border: 1px solid rgba(126, 165, 224, 0.14);
  border-radius: 14px;
  background: linear-gradient(180deg, #101b31, #0c1426);
  padding: 26px;
  transition:
    transform 0.24s ease,
    border-color 0.24s ease;
}
.pillar-card:hover {
  transform: translateY(-5px);
  border-color: rgba(126, 165, 224, 0.3);
}

.pillar-ic {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  background: linear-gradient(
    150deg,
    rgba(47, 155, 224, 0.2),
    rgba(47, 155, 224, 0.04)
  );
  border: 1px solid rgba(126, 165, 224, 0.3);
  color: #37b6ff;
}
.pillar-ic :deep(svg) {
  width: 23px;
  height: 23px;
}

.pillar-step {
  display: block;
  font-family: "Cascadia Code", Consolas, monospace;
  font-size: 11px;
  color: #5fe0c4;
  margin-bottom: 6px;
}

.pillar-title {
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 8px;
  color: #eaf1fb;
}

.pillar-body {
  font-size: 13.5px;
  line-height: 1.6;
  color: rgba(167, 184, 212, 0.9);
  margin: 0;
}
</style>
