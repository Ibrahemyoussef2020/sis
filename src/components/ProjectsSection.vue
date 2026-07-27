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

      <div class="mt-24 pt-16 border-t border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)]">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 reveal reveal-fade-up">
          <div class="max-w-xl">
            <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-sis-accent dark:text-[var(--accent-blue)] mb-3">Selected field work</span>
            <h2 class="text-3xl md:text-4xl font-black text-sis-text dark:text-[#eaf1fb] leading-tight">Complex operations.<br /><span class="text-sis-accent dark:text-[var(--accent-blue)]">Tangible delivery.</span></h2>
          </div>
          <p class="text-sis-muted dark:text-[#aebfd8] leading-relaxed max-w-md">
            Real projects across water infrastructure, energy, chemicals, FMCG and heavy industry—delivered from design through commissioning.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7 reveal reveal-fade-up" style="transition-delay: 0.05s">
          <div class="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-thin" role="group" aria-label="Filter projects">
            <button
              v-for="sector in projectSectors"
              :key="sector"
              type="button"
              class="rounded-lg px-3 py-2 text-[0.68rem] font-bold transition-all duration-200 whitespace-nowrap"
              :class="activeProjectSector === sector
                ? 'bg-sis-accent dark:bg-[var(--accent-blue)] text-white dark:text-[#04121f] shadow-md shadow-[var(--bg-accent-30)] dark:shadow-[var(--accent-blue)]/30'
                : 'bg-sis-panel dark:bg-[#0e1728] text-sis-muted dark:text-[#aebfd8] border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] hover:border-sis-accent dark:hover:border-[var(--accent-blue)] hover:text-sis-accent dark:hover:text-[var(--accent-blue)]'"
              @click="selectProjectSector(sector)"
            >
              {{ sector }}
            </button>
          </div>
          <span class="flex-shrink-0 text-[0.7rem] font-bold text-sis-muted dark:text-[#aebfd8]">{{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'project' : 'projects' }}</span>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 reveal reveal-fade-up" style="transition-delay: 0.1s">
          <article
            v-for="project in filteredProjects"
            :key="project.client"
            class="group rounded-xl border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] p-6 flex flex-col gap-4 hover:border-[var(--bg-accent-50)] dark:hover:border-[rgba(55,182,255,0.5)] hover:shadow-xl hover:shadow-[var(--shadow-accent-8)] dark:hover:shadow-[var(--shadow-blue-8)] hover:-translate-y-1 transition-all duration-300"
            style="background: var(--bg-card-2)"
          >
            <div class="flex items-start justify-between gap-4">
              <img
                v-if="project.logo"
                :src="logoUrl(project.logo)"
                :alt="project.client"
                class="w-[45px] h-[45px] object-contain rounded-xl bg-[var(--bg-accent-8)] dark:bg-[rgba(var(--accent-blue-r),var(--accent-blue-g),var(--accent-blue-b),0.08)] border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] flex-shrink-0"
                loading="lazy"
              />
              <div v-else
                class="w-[45px] h-[45px] rounded-xl bg-[var(--bg-accent-8)] dark:bg-[rgba(var(--accent-blue-r),var(--accent-blue-g),var(--accent-blue-b),0.08)] border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] flex items-center justify-center flex-shrink-0 text-[0.74rem] font-[800] text-sis-accent dark:text-[var(--accent-blue)]" style="font-family: 'Plus Jakarta Sans', Inter, sans-serif;"
              >
                {{ project.mark }}
              </div>
              <span class="text-[0.56rem] font-bold uppercase text-sis-muted dark:text-[#aebfd8] text-right max-w-[160px] leading-tight">{{ project.sector }}</span>
            </div>
            <div class="flex items-center justify-between gap-4">
              <strong class="text-[0.68rem] font-[800] tracking-[0.05em] uppercase text-sis-accent dark:text-[var(--accent-blue)]">{{ project.client }}</strong>
              <small class="inline-flex items-center gap-1 text-[0.58rem] text-sis-muted dark:text-[#aebfd8]">
                <span class="material-symbols-outlined" style="font-size: 13px">location_on</span>
                {{ project.location }}
              </small>
            </div>
            <h3 class="text-lg font-bold text-sis-text dark:text-[#eaf1fb] leading-snug">{{ project.title }}</h3>
            <p class="text-sm text-sis-muted dark:text-[#aebfd8] leading-relaxed flex-1">{{ project.summary }}</p>
            <ul class="flex flex-wrap gap-[6px] pt-4 border-t border-[var(--border-20)] dark:border-[rgba(126,165,224,0.08)]">
              <li v-for="tag in project.tags" :key="tag" class="text-[0.58rem] font-bold bg-[var(--bg-panel-60)] dark:bg-[rgba(126,165,224,0.06)] text-sis-muted dark:text-[#aebfd8] px-[8px] py-[5px] rounded-md">{{ tag }}</li>
            </ul>
          </article>
        </div>

        <div v-if="activeProjectSector === 'All' && !showAllProjects" class="mt-8 text-center">
          <button
            type="button"
            class="inline-flex items-center gap-3 min-h-[52px] px-[22px] rounded-xl text-[0.87rem] font-[750] border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] bg-sis-panel dark:bg-[#0e1728] text-sis-text dark:text-[#eaf1fb] hover:border-sis-accent dark:hover:border-[var(--accent-blue)] hover:text-sis-accent dark:hover:text-[var(--accent-blue)] hover:-translate-y-0.5 transition-all duration-200"
            @click="showAllProjects = true"
          >
            View all {{ projects.length }} projects
            <UiIcon name="arrow" :size="17" />
          </button>
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
const { industries, projects } = storeToRefs(siteStore);

const activeIndustry = ref(0);
const activeProjectSector = ref("All");
const showAllProjects = ref(false);

const activeIndustryData = computed(() => {
  if (!industries.value || !industries.value.length) return {};
  return industries.value[activeIndustry.value];
});

const projectSectors = computed(() => {
  if (!projects.value) return ["All"];
  return ["All", ...new Set(projects.value.map((p) => p.sector))];
});

const filteredProjects = computed(() => {
  if (!projects.value) return [];
  const selected =
    activeProjectSector.value === "All"
      ? projects.value
      : projects.value.filter((p) => p.sector === activeProjectSector.value);

  if (activeProjectSector.value === "All" && !showAllProjects.value) {
    return selected.slice(0, 6);
  }
  return selected;
});

function selectProjectSector(sector) {
  activeProjectSector.value = sector;
  if (sector !== "All") showAllProjects.value = true;
}

const industryImages = {
  'Water & Waste Water': new URL('../images/industry-water.webp', import.meta.url).href,
  'Food, Beverage & FMCG': new URL('../images/industry-food.webp', import.meta.url).href,
  'Chemical Industries': new URL('../images/industry-chemical.webp', import.meta.url).href,
  'Oil & Gas': new URL('../images/industry-oil-gas.webp', import.meta.url).href,
  'Heavy Industries': new URL('../images/industry-heavy.webp', import.meta.url).href,
}

const logoUrl = (filename) => new URL(`../images/ourClints/${filename}`, import.meta.url).href

const currentImage = computed(() => {
  const title = activeIndustryData.value?.title
  return title ? industryImages[title] : ''
})
</script>
