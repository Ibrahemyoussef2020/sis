<template>
  <SectionWrapper wrapperClass="bg-white text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Partners</p>
        <h2 class="mt-3 text-2xl font-semibold sm:text-3xl" data-reveal>Technology & Ecosystem Alliances</h2>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        <template v-if="loaded">
          <div class="rounded-[2rem] border border-sis-border bg-sis-panel p-4 shadow-sis">
            <h3 class="text-lg font-semibold text-sis-primary">Technology Partners</h3>
            <div class="mt-5 grid gap-3 text-sm text-sis-text sm:grid-cols-2">
              <span v-for="partner in partners.technology" :key="partner" class="rounded-3xl border border-sis-border px-4 py-3">{{ partner }}</span>
            </div>
          </div>
          <div class="rounded-[2rem] border border-sis-border bg-sis-panel p-4 shadow-sis">
            <h3 class="text-lg font-semibold text-sis-primary">Ecosystem Networks</h3>
            <div class="mt-5 grid gap-3 text-sm text-sis-text sm:grid-cols-2">
              <span v-for="partner in partners.ecosystem" :key="partner" class="rounded-3xl border border-sis-border px-4 py-3">{{ partner }}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="h-64 rounded-[2rem] skeleton"></div>
          <div class="h-64 rounded-[2rem] skeleton"></div>
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
const { partners, loaded } = storeToRefs(siteStore)
</script>
