<template>
  <section ref="sectionRef" class="relative overflow-hidden bg-sis-panel dark:bg-dark-bg px-8 py-8 font-['Plus_Jakarta_Sans','Manrope','Inter',sans-serif] text-sis-text dark:text-dark-text">
    <div
      class="pointer-events-none absolute rounded-full blur-[80px]"
      style="width: 24rem; height: 24rem; top: -6rem; right: -6rem; background: rgba(55,182,255,0.07);"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute rounded-full blur-[80px]"
      style="width: 16rem; height: 16rem; bottom: -4rem; left: -4rem; background: rgba(94,224,196,0.05);"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto max-w-[1280px]">
      <div class="mb-14 text-center" data-reveal>
        <span class="mb-3 block text-xs font-bold uppercase tracking-[0.3em] text-[#37b6ff]">Methodology</span>
        <h2 class="mx-auto max-w-[32rem] m-0 text-[clamp(1.5rem,4vw,2rem)] font-bold -tracking-[0.02em] text-sis-text dark:text-dark-text">
          {{ methodology?.title ?? "Engagement Methodology" }}
        </h2>
        <p class="mx-auto mt-4 max-w-[38rem] text-[0.9375rem] leading-relaxed text-sis-muted dark:text-dark-text-muted">
          From first audit to continuous optimisation — our three-phase
          engagement model ensures every OT/IT integration is delivered with
          precision, backed by field-proven engineers, and built to evolve with
          your operations.
        </p>
      </div>

      <div v-if="loaded" class="grid grid-cols-1 gap-6 lg:grid-cols-[5fr_7fr] items-start" data-reveal>
        <div class="flex flex-col gap-3 rounded-2xl border border-[rgba(126,165,224,0.12)] bg-[rgba(126,165,224,0.05)] p-0 backdrop-blur-[16px]" role="tablist" aria-label="Methodology stages">
          <button
            v-for="stage in methodology.stages"
            :key="stage.number"
              class="flex items-center gap-5 rounded-r-lg border-l-4 border-transparent bg-none px-6 py-5 text-left transition-all duration-300"
            :class="activeStage === stage.number
              ? 'border-l-[#37b6ff] bg-[rgba(55,182,255,0.1)] pl-7'
              : 'hover:bg-[rgba(55,182,255,0.06)] hover:pl-7'"
            role="tab"
            :aria-selected="activeStage === stage.number"
            :aria-controls="`mth-pane-${stage.number}`"
            :id="`mth-tab-${stage.number}`"
            @click="setStage(stage.number)"
          >
            <span
              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300"
              :class="activeStage === stage.number
                ? 'bg-[#37b6ff] text-[#00344d] shadow-[0_3px_12px_rgba(55,182,255,0.35)]'
                : 'bg-[rgba(126,165,224,0.14)] text-sis-text dark:text-dark-text'"
            >{{ stage.number }}</span>
            <span
              class="text-[0.95rem] font-semibold leading-relaxed transition-colors duration-300"
              :class="activeStage === stage.number ? 'text-sis-text dark:text-dark-text' : 'text-sis-muted dark:text-dark-text-muted hover:text-sis-text dark:hover:text-dark-text'"
            >{{ stage.title }}</span>
          </button>
        </div>

        <div class="min-h-[20rem]">
          <Transition name="mth-fade" mode="out-in">
            <div
              :key="activeStage"
              class="relative flex min-h-[20rem] flex-col justify-center overflow-hidden rounded-2xl border border-[rgba(126,165,224,0.12)] bg-[rgba(126,165,224,0.06)] p-12 backdrop-blur-[12px]"
              role="tabpanel"
              :id="`mth-pane-${activeStage}`"
              :aria-labelledby="`mth-tab-${activeStage}`"
            >
              <div class="pointer-events-none absolute -right-4 -top-4 opacity-[0.06] text-dark-text" style="width: 10rem; height: 10rem;" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>

              <div class="mb-5 flex items-center gap-2 text-[#37b6ff]">
                <svg class="h-[1.1rem] w-[1.1rem] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
                <span class="text-xs font-bold uppercase tracking-[0.18em] text-[#37b6ff]">Phase 0{{ activeStage }}</span>
              </div>

              <h3 class="m-0 mb-5 max-w-[36rem] text-[clamp(1.1rem,2.5vw,1.35rem)] font-bold leading-tight -tracking-[0.01em] text-sis-text dark:text-dark-text">{{ activeData.fullTitle }}</h3>
              <p class="m-0 mb-6 max-w-[36rem] text-[0.9375rem] leading-relaxed text-sis-muted dark:text-dark-text-muted">{{ activeData.intro }}</p>
              <ul class="m-0 flex list-none flex-col gap-4 p-0">
                <li
                  v-for="bullet in activeData.bullets"
                  :key="bullet"
                  class="relative max-w-[36rem] pl-6 text-[0.9375rem] leading-relaxed text-[#c8d0e0]"
                >
                  <span class="absolute left-0 top-2 h-[6px] w-[6px] rounded-full bg-[#37b6ff]" style="box-shadow: 0 0 8px rgba(55,182,255,0.4)" aria-hidden="true"></span>
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 gap-6 lg:grid-cols-[5fr_7fr] items-stretch">
        <div class="flex flex-col gap-3 rounded-2xl overflow-hidden">
          <div v-for="n in 3" :key="n" class="h-20 rounded-lg skeleton"></div>
        </div>
        <div class="h-80 rounded-2xl skeleton"></div>
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
