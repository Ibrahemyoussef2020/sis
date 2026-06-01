<template>
  <SectionWrapper wrapperClass="bg-sis-panel text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Timeline</p>
        <h2 class="mt-3 text-3xl font-semibold sm:text-4xl" data-reveal>{{ timeline?.title }}</h2>
        <p class="mt-3 max-w-2xl text-sis-muted" data-reveal>{{ timeline?.subtitle }}</p>
      </div>
      <div class="relative overflow-hidden rounded-[2rem] border border-sis-border bg-white p-6 shadow-sis">
        <div class="hidden lg:block">
          <div class="relative mx-auto max-w-6xl px-6 py-10">
            <div class="absolute inset-x-0 top-1/2 h-1 bg-sis-panel"></div>
            <div class="absolute inset-y-0 left-1/2 w-px bg-sis-border"></div>
            <div class="relative flex gap-6 overflow-x-auto pb-6">
              <article v-for="milestone in timeline?.milestones" :key="milestone.year" class="relative min-w-[280px] snap-start text-center" data-reveal>
                <div class="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sis-accent text-sm font-semibold text-white shadow-lg ring-4 ring-sis-panel">
                  <span class="animate-pulse">{{ milestone.year }}</span>
                </div>
                <div class="mt-6 rounded-[1.5rem] border border-sis-panel bg-sis-panel px-5 py-6 shadow-sm">
                  <h3 class="text-lg font-semibold text-sis-text">{{ milestone.label }}</h3>
                  <p class="mt-3 text-sm leading-6 text-sis-muted">{{ milestone.description }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="space-y-6 lg:hidden">
          <article v-for="milestone in timeline?.milestones" :key="milestone.year" class="flex items-start gap-5 rounded-3xl border border-sis-border bg-sis-panel p-5" data-reveal>
            <div class="flex h-14 w-14 items-center justify-center rounded-3xl bg-sis-primary text-white">{{ milestone.year }}</div>
            <div>
              <p class="font-semibold">{{ milestone.label }}</p>
              <p class="mt-2 text-sm text-sis-muted">{{ milestone.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import SectionWrapper from '@/components/SectionWrapper.vue'

const siteStore = useSiteStore()
const { timeline } = storeToRefs(siteStore)
</script>
