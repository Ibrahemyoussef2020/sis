<template>
  <section
    id="services"
    class="relative overflow-hidden py-20 text-sis-text dark:text-dark-text"
    style="background: var(--bg-section-1)"
  >
    <div class="mx-auto flex max-w-[1140px] flex-col gap-12 px-7 lg:flex-row lg:items-center lg:gap-16">
      <div class="flex-[0_0_35%]" data-reveal>
        <div class="mb-4 inline-flex items-center gap-4">
          <span class="block h-px w-12 bg-sis-accent"></span>
          <span class="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-sis-accent">Services &amp; Capabilities</span>
        </div>
        <h2 class="m-0 max-w-[42rem] font-['Plus_Jakarta_Sans',Inter,sans-serif] text-[clamp(2rem,5.2vw,4.25rem)] font-bold leading-tight -tracking-[0.02em] text-sis-text dark:text-[#eaf1fb]">
          One platform, <em class="not-italic font-normal text-sis-accent">every</em> industrial capability
        </h2>
      </div>

      <div v-if="loaded" class="flex-1 grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(card, i) in cards"
          :key="card.tag"
          class="group relative overflow-hidden rounded-[14px] border border-sis-border/40 dark:border-[rgba(126,165,224,0.14)] p-[22px] transition-all duration-300 hover:-translate-y-[5px] hover:border-sis-accent/40 dark:hover:border-[rgba(126,165,224,0.3)]"
          style="background: var(--bg-card-1)"
          data-reveal
        >
          <div class="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-sis-accent to-[#5fe0c4] transition-transform duration-300 group-hover:scale-x-100"></div>
          <span class="absolute right-5 top-5 font-['Cascadia_Code',Consolas,monospace] text-[10px] text-sis-muted/40 dark:text-[rgba(126,165,224,0.4)]">{{ card.tag }}</span>
          <div class="mb-4 grid h-11 w-11 place-items-center rounded-[11px] border border-sis-accent/30 dark:border-[rgba(126,165,224,0.3)] text-sis-accent [&_svg]:h-[22px] [&_svg]:w-[22px]" style="background: rgba(47,155,224,0.1)">
            <UiIcon :name="card.icon" />
          </div>
          <h3 class="m-0 mb-[7px] font-['Plus_Jakarta_Sans',Inter,sans-serif] text-base font-bold -tracking-[0.01em] text-sis-text dark:text-[#eaf1fb]">{{ card.title }}</h3>
          <p class="m-0 text-[13px] leading-relaxed text-sis-muted/90 dark:text-[rgba(167,184,212,0.9)]">{{ card.body }}</p>
        </article>
      </div>

      <div v-else class="grid gap-[14px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] flex-1">
        <div v-for="n in 6" :key="n" class="h-[180px] animate-shimmer rounded-[14px] bg-[length:200%_100%]" style="background: linear-gradient(90deg, #e0e4ea 0%, #d0d5de 50%, #e0e4ea 100%)"></div>
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
