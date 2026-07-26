<template>
  <section
    class="relative border-y border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] py-32 px-8 overflow-hidden"
    style="background: var(--bg-section-2)"
  >
    <div class="w-[calc(100%-64px)] max-w-[1240px] mx-auto relative z-10">
      <div class="grid justify-items-center text-center mb-[54px] reveal reveal-fade-up">
        <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-sis-accent dark:text-[var(--accent-blue)]">Industry knowledge</span>
        <h2 class="text-sis-text dark:text-[#eaf1fb] leading-[1.04] mt-[17px]" style="font-size: clamp(2.4rem, 4.5vw, 4.75rem); font-weight: 700;">
          Engineered for the realities<br /> of critical operations.
        </h2>
        <p class="text-sis-muted dark:text-[#aebfd8] max-w-[650px] mt-5">
          Sector experience shapes every control philosophy, network decision and commissioning plan.
        </p>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-[minmax(240px,0.32fr)_minmax(0,0.68fr)] min-h-[530px] border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] overflow-hidden"
        style="background: var(--bg-section-1)"
      >
        <div class="lg:border-r border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] flex lg:flex-col overflow-x-auto lg:overflow-visible" role="tablist" aria-label="Industries">
          <button
            v-for="(industry, index) in industries"
            :key="industry.title"
            type="button"
            role="tab"
            :aria-selected="activeIndustry === index"
            class="grid grid-cols-[28px_1fr_18px] items-center gap-3 px-5 min-h-[82px] text-left whitespace-nowrap lg:whitespace-normal transition-all duration-200 border-b border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] last:border-b-0 flex-shrink-0 lg:flex-shrink"
            :class="activeIndustry === index
              ? 'bg-sis-panel dark:bg-[#0e1728] text-sis-accent dark:text-[var(--accent-blue)] shadow-[inset_3px_0_0] shadow-sis-accent dark:shadow-[var(--accent-blue)]'
              : 'text-sis-muted dark:text-[#aebfd8] hover:bg-sis-panel dark:hover:bg-[#0e1728] hover:text-sis-accent dark:hover:text-[var(--accent-blue)]'"
            @click="activeIndustry = index"
          >
            <UiIcon :name="industry.icon" :size="19" class="flex-shrink-0" />
            <span class="text-[0.73rem] font-[730] min-w-0">{{ industry.title }}</span>
            <UiIcon name="arrow" :size="16" class="flex-shrink-0 transition-all duration-200"
              :class="activeIndustry === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'"
            />
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,0.55fr)_minmax(300px,0.45fr)] min-w-0" role="tabpanel">
          <div class="p-[48px_38px]">
            <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-sis-accent dark:text-[var(--accent-blue)]">{{ activeIndustryData.kicker }}</span>
            <h3 class="text-sis-text dark:text-[#eaf1fb] mt-[15px] leading-[1.04]" style="font-size: clamp(1.8rem, 3vw, 3rem); font-weight: 700;">{{ activeIndustryData.title }}</h3>
            <p class="text-sis-muted dark:text-[#aebfd8] max-w-[540px] mt-5 leading-[1.82]">{{ activeIndustryData.text }}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-[28px] mt-[37px] pt-[27px] border-t border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)]">
              <div class="grid content-start gap-2">
                <small class="block text-[0.58rem] font-[800] tracking-[0.1em] uppercase text-sis-accent dark:text-[var(--accent-blue)] mb-[5px]">Relevant programs</small>
                <span
                  v-for="client in activeIndustryData.clients"
                  :key="client"
                  class="relative pl-[11px] text-[0.68rem] text-sis-muted dark:text-[#aebfd8] before:absolute before:top-[0.67em] before:left-0 before:w-[4px] before:h-[4px] before:rounded-full before:bg-sis-accent dark:before:bg-[var(--accent-blue)]"
                >{{ client }}</span>
              </div>
              <div class="grid content-start gap-2">
                <small class="block text-[0.58rem] font-[800] tracking-[0.1em] uppercase text-sis-accent dark:text-[var(--accent-blue)] mb-[5px]">Typical scope</small>
                <span
                  v-for="item in activeIndustryData.scope"
                  :key="item"
                  class="relative pl-[11px] text-[0.68rem] text-sis-muted dark:text-[#aebfd8] before:absolute before:top-[0.67em] before:left-0 before:w-[4px] before:h-[4px] before:rounded-full before:bg-sis-accent dark:before:bg-[var(--accent-blue)]"
                >{{ item }}</span>
              </div>
            </div>
          </div>
          <div class="relative min-h-[340px] lg:min-h-[530px] overflow-hidden">
            <div class="absolute inset-0 z-10" style="background: linear-gradient(180deg, transparent 50%, rgba(3,24,37,0.64))"></div>
            <img
              :src="currentImage"
              :alt="`${activeIndustryData.title} facility`"
              class="w-full h-full absolute inset-0 object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <span class="absolute z-20 bottom-[22px] left-[24px] flex items-center gap-[8px] w-auto whitespace-nowrap text-white text-[0.7rem] font-[750]">
              <UiIcon :name="activeIndustryData.icon" :size="16" />
              {{ activeIndustryData.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useSiteStore } from "@/stores/useSiteStore";
import UiIcon from "@/components/UiIcon.vue";

const siteStore = useSiteStore();
const { industries } = storeToRefs(siteStore);

const activeIndustry = ref(0);

const activeIndustryData = computed(() => {
  if (!industries.value || !industries.value.length) return {};
  return industries.value[activeIndustry.value];
});

const industryImages = {
  'Water & Waste Water': new URL('../images/industry-water.webp', import.meta.url).href,
  'Food, Beverage & FMCG': new URL('../images/industry-food.webp', import.meta.url).href,
  'Chemical Industries': new URL('../images/industry-chemical.webp', import.meta.url).href,
  'Oil & Gas': new URL('../images/industry-oil-gas.webp', import.meta.url).href,
  'Heavy Industries': new URL('../images/industry-heavy.webp', import.meta.url).href,
}

const currentImage = computed(() => {
  const title = activeIndustryData.value?.title
  return title ? industryImages[title] : ''
})
</script>
