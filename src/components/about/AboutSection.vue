<template>
  <SectionWrapper wrapperClass="bg-sis-panel text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>About</p>
          <h2 class="mt-3 text-2xl font-semibold sm:text-3xl" data-reveal>{{ about?.title }}</h2>
        </div>
      </div>
      <div class="grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
        <div class="space-y-5">
          <template v-if="loaded">
            <p v-for="(paragraph, index) in about.paragraphs" :key="index" class="leading-relaxed text-sis-muted" data-reveal>
              {{ paragraph }}
            </p>
          </template>
          <div v-else class="space-y-4">
            <div class="h-5 w-5/6 rounded-full skeleton"></div>
            <div class="h-5 w-full rounded-full skeleton"></div>
            <div class="h-5 w-4/5 rounded-full skeleton"></div>
          </div>
        </div>
        <div class="grid gap-4">
          <template v-if="loaded">
            <div v-for="pillar in about.pillars" :key="pillar.title" class="rounded-3xl border border-sis-border bg-white p-4 shadow-sis">
              <h3 class="text-lg font-semibold text-sis-primary">{{ pillar.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-sis-muted">{{ pillar.body }}</p>
            </div>
          </template>
          <template v-else>
            <div class="space-y-4">
              <div class="h-24 rounded-3xl skeleton"></div>
              <div class="h-24 rounded-3xl skeleton"></div>
              <div class="h-24 rounded-3xl skeleton"></div>
            </div>
          </template>
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
const { about, loaded } = storeToRefs(siteStore)
</script>
