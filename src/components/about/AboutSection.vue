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
          <template v-for="(paragraph, index) in (loaded ? about.paragraphs : placeholderText)" :key="index">
            <p v-if="loaded" class="leading-relaxed text-sis-muted" data-reveal>
              {{ paragraph }}
            </p>
            <Skeleton v-else class="h-5 rounded-full" :class="skeletonWidths[index % skeletonWidths.length]" />
          </template>
        </div>
        <div class="grid gap-4">
          <template v-for="(pillar, i) in (loaded ? about.pillars : [1,2,3])" :key="pillar?.title ?? i">
            <div v-if="loaded" class="rounded-3xl border border-sis-border bg-sis-panel p-4 shadow-sis">
              <h3 class="text-lg font-semibold text-sis-primary">{{ pillar.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-sis-muted">{{ pillar.body }}</p>
            </div>
            <Skeleton v-else class="h-24 rounded-3xl" />
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
import Skeleton from '@/components/Skeleton.vue'

const siteStore = useSiteStore()
const { about, loaded } = storeToRefs(siteStore)

const placeholderText = Array.from({ length: 3 })
const skeletonWidths = ['w-5/6', 'w-full', 'w-4/5']
</script>
