<template>
  <SectionWrapper wrapperClass="bg-sis-panel text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Roadmap</p>
        <h2 class="mt-3 text-2xl font-semibold sm:text-3xl" data-reveal>{{ roadmap?.title }}</h2>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        <template v-if="loaded">
          <article v-for="phase in roadmap.phases" :key="phase.label" class="rounded-[2rem] border border-sis-border bg-sis-panel p-4 shadow-sis">
            <h3 class="text-xl font-semibold text-sis-primary">{{ phase.label }}</h3>
            <div class="mt-5 space-y-4">
              <div v-for="step in phase.steps" :key="step.number" class="rounded-3xl bg-sis-panel p-4">
                <div class="flex items-center gap-4 text-sis-text">
                  <span class="flex h-10 w-10 items-center justify-center rounded-3xl bg-sis-accent text-white">{{ step.number }}</span>
                  <div>
                    <h4 class="font-semibold">{{ step.title }}</h4>
                    <p class="mt-2 text-sm text-sis-muted">{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </template>
        <template v-else>
          <div class="space-y-6">
            <div class="h-60 rounded-[2rem] skeleton"></div>
            <div class="h-60 rounded-[2rem] skeleton"></div>
          </div>
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
const { roadmap, loaded } = storeToRefs(siteStore)
</script>
