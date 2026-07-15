<template>
  <SectionWrapper wrapperClass="bg-sis-panel text-sis-text">
    <div class="mx-auto max-w-7xl" id="sectors">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Sectors</p>
        <h2 class="mt-3 text-2xl font-semibold sm:text-3xl" data-reveal>Regional Industry Expertise</h2>
      </div>
      <div class="grid gap-4 lg:grid-cols-2">
        <template v-if="loaded">
          <article v-for="sector in sectors" :key="sector.id" class="rounded-[2rem] border border-sis-border bg-sis-panel p-4 shadow-sis">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-semibold" :style="{ color: sector.color }">{{ sector.label }}</h3>
              <span class="rounded-full bg-sis-panel px-3 py-1 text-xs uppercase tracking-[0.2em] text-sis-muted">{{ sector.projects.length }} projects</span>
            </div>
            <ul class="mt-5 space-y-4">
              <li v-for="project in sector.projects" :key="project.client" class="rounded-3xl bg-sis-panel p-4">
                <p class="font-semibold">{{ project.client }}</p>
                <p class="text-sm text-sis-muted">{{ project.location }}</p>
                <p class="mt-2 text-sm leading-6">{{ project.scope }}</p>
              </li>
            </ul>
          </article>
        </template>
        <template v-else>
          <div v-for="n in 4" :key="n" class="h-72 rounded-[2rem] skeleton"></div>
        </template>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import SectionWrapper from '@/components/SectionWrapper.vue'

const siteStore = useSiteStore()
const { sectors, loaded } = storeToRefs(siteStore)
</script>
