<template>
  <SectionWrapper wrapperClass="bg-white text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Projects</p>
          <h2 class="mt-3 text-2xl font-semibold sm:text-3xl" data-reveal>Sector Success Stories</h2>
        </div>
        <div class="flex flex-wrap gap-2" data-reveal>
          <button v-for="sector in sectors" :key="sector.id" @click="activeSector = sector.id" class="rounded-full px-4 py-2 text-sm transition" :class="activeSector === sector.id ? 'bg-sis-accent text-white' : 'bg-sis-panel text-sis-text border border-sis-border'">{{ sector.label }}</button>
        </div>
      </div>
      <div class="grid gap-4 lg:grid-cols-2">
        <template v-if="loaded">
          <article v-for="project in filteredProjects" :key="project.client" class="rounded-[2rem] border border-sis-border bg-sis-panel p-4 shadow-sis transition hover:-translate-y-1">
            <span class="rounded-full bg-sis-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">{{ project.sector }}</span>
            <h3 class="mt-4 text-xl font-semibold text-sis-text">{{ project.client }}</h3>
            <p class="mt-2 text-sm text-sis-muted">{{ project.location }}</p>
            <p class="mt-4 text-sm leading-6 text-sis-text">{{ project.summary }}</p>
          </article>
        </template>
        <template v-else>
          <div v-for="n in 4" :key="n" class="h-48 rounded-[2rem] skeleton"></div>
        </template>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import SectionWrapper from '@/components/SectionWrapper.vue'

const siteStore = useSiteStore()
const { sectors, projects, loaded } = storeToRefs(siteStore)
const activeSector = ref('oil-gas')

const filteredProjects = computed(() => {
  if (!projects.value) return []
  const sectorLabel = sectors.value?.find((s) => s.id === activeSector.value)?.label
  return projects.value.filter((project) => project.sector === sectorLabel)
})
</script>
