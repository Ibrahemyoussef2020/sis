<template>
  <section class=" projects bg-[#f7f9fb] !py-24 px-6 relative overflow-hidden">

    <!-- Subtle top gradient -->
    <div class="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto relative z-10 mt-16">

      <!-- Header -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
        <div class="max-w-xl reveal reveal-fade-up">
          <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#3e7fca] mb-3">Our Portfolio</span>
          <h2 class="text-4xl md:text-5xl font-black text-[#191c1e] leading-tight mb-4">
            Sector Success <span class="text-[#3e7fca]">Stories</span>
          </h2>
          <p class="text-[#6b7280] text-lg leading-relaxed">
            Real deployments. Measured outcomes. Industrial-grade solutions delivered across the MENA region.
          </p>
        </div>

        <!-- Sector filter tabs -->
        <div class="flex flex-wrap gap-2 reveal reveal-fade-up" style="transition-delay: 0.1s;">
          <button
            v-for="sector in sectors"
            :key="sector.id"
            @click="activeSector = sector.id"
            class="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
            :class="activeSector === sector.id
              ? 'bg-[#3e7fca] text-white shadow-md shadow-[#3e7fca]/30'
              : 'bg-white text-[#444655] border border-[#dde1e7] hover:border-[#3e7fca] hover:text-[#3e7fca]'"
          >{{ sector.label }}</button>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 stagger-container">
        <div v-for="(stat, index) in stats" :key="stat.label"
             class="bg-white rounded-2xl border border-[#e6e8ea] px-6 py-5 flex flex-col gap-1 reveal reveal-fade-up"
             :style="{ transitionDelay: `${0.1 + (index * 0.1)}s` }">
          <span class="text-3xl font-black text-[#3e7fca]">{{ stat.value }}</span>
          <span class="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">{{ stat.label }}</span>
        </div>
      </div>

      <!-- Project cards grid -->
      <template v-if="loaded">
        <transition name="fade-tab" mode="out-in">
          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3" :key="activeSector">
            <article
              v-for="(project, i) in filteredProjects"
              :key="project.client"
              class="group bg-white rounded-2xl border border-[#e6e8ea] p-7 flex flex-col gap-4 reveal reveal-fade-up
                     hover:border-[#3e7fca]/50 hover:shadow-xl hover:shadow-[#3e7fca]/8
                     hover:-translate-y-1 transition-all duration-300"
              :style="{ transitionDelay: `${i * 0.1}s` }"
            >
              <!-- Top row: sector badge + location -->
              <div class="flex items-center justify-between gap-2 flex-wrap">
                <span class="rounded-full bg-[#3e7fca]/10 text-[#3e7fca] px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {{ project.sector }}
                </span>
                <span class="flex items-center gap-1 text-xs text-[#9ca3af]">
                  <span class="material-symbols-outlined" style="font-size:14px;">location_on</span>
                  {{ project.location }}
                </span>
              </div>

              <!-- Icon + client name -->
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-[#f0f5ff] border border-[#dde8ff] flex items-center justify-center flex-shrink-0
                            group-hover:bg-[#3e7fca] group-hover:border-[#3e7fca] transition-all duration-300">
                  <span class="material-symbols-outlined text-[#3e7fca] group-hover:text-white transition-colors duration-300"
                        style="font-size:22px;">{{ project.icon || 'factory' }}</span>
                </div>
                <h3 class="text-lg font-bold text-[#191c1e] leading-snug">{{ project.client }}</h3>
              </div>

              <!-- Summary -->
              <p class="text-sm text-[#6b7280] leading-relaxed flex-1">{{ project.summary }}</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 pt-2 border-t border-[#f0f0f0]">
                <span
                  v-for="tag in (project.tags || [])"
                  :key="tag"
                  class="text-xs bg-[#f2f4f6] text-[#444655] px-2.5 py-1 rounded-md font-medium"
                >{{ tag }}</span>
              </div>
            </article>
          </div>
        </transition>
      </template>

      <!-- Skeleton loaders -->
      <div v-else class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="n in 6" :key="n"
             class="h-52 rounded-2xl animate-pulse bg-gradient-to-r from-[#e6e8ea] via-[#f2f4f6] to-[#e6e8ea]"
             :style="{ animationDelay: `${n * 100}ms` }">
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="loaded && filteredProjects.length === 0" class="text-center py-20">
        <span class="material-symbols-outlined text-5xl text-[#dde1e7] block mb-4">search_off</span>
        <p class="text-[#9ca3af] text-lg">No projects found for this sector yet.</p>
      </div>

      <!-- CTA -->
      <div class="mt-14 text-center">
        <p class="text-[#6b7280] mb-4 text-sm">Interested in working with SiS on your next industrial project?</p>
        <a href="#contact"
           class="inline-flex items-center gap-2 bg-[#3e7fca] text-white font-bold px-8 py-4 rounded-xl
                  hover:bg-[#2d6bb5] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3e7fca]/30
                  transition-all duration-200">
          <span>Start a Conversation</span>
          <span class="material-symbols-outlined" style="font-size:18px;">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'

const siteStore = useSiteStore()
const { sectors, projects, loaded } = storeToRefs(siteStore)
const activeSector = ref('oil-gas')

const filteredProjects = computed(() => {
  if (!projects.value) return []
  const sectorLabel = sectors.value?.find((s) => s.id === activeSector.value)?.label
  return projects.value.filter((project) => project.sector === sectorLabel)
})

const stats = [
  { value: '12+', label: 'Projects Delivered' },
  { value: '5',   label: 'Industry Sectors' },
  { value: '7+',  label: 'Countries' },
  { value: '100%', label: 'On-Site Commissioning' },
]
</script>

<style scoped>
.fade-tab-enter-active,
.fade-tab-leave-active {
  transition: all 0.35s ease;
}

.fade-tab-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-tab-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
