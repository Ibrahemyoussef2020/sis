<template>
  <section
    id="how-it-works"
    class="relative overflow-hidden border-y border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] py-20 text-sis-text dark:text-dark-text"
    style="background: var(--bg-section-2)"
  >
    <div class="mx-auto flex max-w-[1140px] flex-col gap-12 px-7">
      <div class="max-w-[60ch]" data-reveal>
        <div class="mb-4 inline-flex items-center gap-4">
          <span class="block h-px w-12 bg-[var(--accent-blue)]"></span>
          <span class="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-blue)]">How It Works</span>
        </div>
        <h2 class="m-0 font-['Plus_Jakarta_Sans',Inter,sans-serif] text-[clamp(1.75rem,3.3vw,2.5rem)] font-extrabold leading-tight -tracking-[0.025em] text-sis-text dark:text-[#eaf1fb]">
          From sensor to decision,
          <em class="not-italic font-normal text-[var(--accent-blue)]">in real time</em>
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article
          v-for="(pillar, i) in pillars"
          :key="pillar.step"
          class="flex flex-col rounded-[14px] border border-[var(--border-40)] dark:border-[rgba(126,165,224,0.14)] p-[26px] transition-all duration-300 hover:-translate-y-[5px] hover:border-[var(--bg-accent-40)] dark:hover:border-[rgba(126,165,224,0.3)]"
          style="background: var(--bg-card-1)"
          data-reveal
        >
          <div class="mb-[18px] grid h-12 w-12 place-items-center rounded-xl border border-[rgba(126,165,224,0.3)] text-[var(--accent-blue)] [&_svg]:h-[23px] [&_svg]:w-[23px]" style="background: linear-gradient(150deg, rgba(47,155,224,0.2), rgba(47,155,224,0.04))">
            <UiIcon :name="pillar.icon" />
          </div>
          <span class="mb-[6px] block font-['Cascadia_Code',Consolas,monospace] text-[11px] text-[var(--accent-teal)]">{{ pillar.step }}</span>
          <h3 class="m-0 mb-2 font-['Plus_Jakarta_Sans',Inter,sans-serif] text-lg font-bold -tracking-[0.01em] text-sis-text dark:text-[#eaf1fb]">{{ pillar.title }}</h3>
          <p class="m-0 text-[13.5px] leading-relaxed text-[var(--text-muted-90)] dark:text-[rgba(167,184,212,0.9)]">{{ pillar.body }}</p>
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
