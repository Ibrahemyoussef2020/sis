<template>
  <SectionWrapper id="architecture" wrapperClass="bg-sis-panel text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Architecture</p>
        <h2 class="mt-3 text-3xl font-semibold sm:text-4xl" data-reveal>{{ architecture?.title }}</h2>
        <p class="mt-4 max-w-3xl text-sis-muted" data-reveal>{{ architecture?.subtitle }}</p>
      </div>
      <div class="grid gap-8 lg:grid-cols-[0.75fr_0.25fr]">
        <div class="space-y-8 rounded-[2rem] border border-sis-border bg-white p-4 shadow-sis">
          <template v-if="loaded">
            <div class="space-y-6">
              <div class="rounded-3xl border border-sis-border bg-sis-panel p-4">
                <p class="text-sm uppercase tracking-[0.24em] text-sis-accent">Cloud Layer</p>
                <p class="mt-3 text-sm text-sis-muted">{{ architecture.cloudLayer.provider }}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span v-for="step in architecture.cloudLayer.steps" :key="step" class="rounded-full bg-sis-primary/10 px-3 py-2 text-sm text-sis-primary">{{ step }}</span>
                </div>
              </div>
              <div class="rounded-3xl border border-sis-border bg-sis-panel p-4">
                <p class="text-sm uppercase tracking-[0.24em] text-sis-accent">Edge Layer</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span v-for="item in architecture.edgeLayer" :key="item" class="rounded-full bg-sis-light/10 px-3 py-2 text-sm text-sis-text">{{ item }}</span>
                </div>
              </div>
              <div class="rounded-3xl border border-sis-border bg-sis-panel p-4">
                <p class="text-sm uppercase tracking-[0.24em] text-sis-accent">Field Layer</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span v-for="item in architecture.fieldLayer" :key="item" class="rounded-full bg-sis-primary/10 px-3 py-2 text-sm text-sis-primary">{{ item }}</span>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="space-y-6">
              <div class="h-32 rounded-3xl skeleton"></div>
              <div class="h-32 rounded-3xl skeleton"></div>
              <div class="h-32 rounded-3xl skeleton"></div>
            </div>
          </template>
        </div>
        <aside class="space-y-6 rounded-[2rem] border border-sis-border bg-white p-4 shadow-sis">
          <div>
            <h3 class="text-lg font-semibold text-sis-primary">Protocols & Components</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <button v-for="item in architecture?.protocols" :key="item" @click="activeChip = item" class="rounded-full border px-4 py-2 text-sm transition" :class="activeChip === item ? 'border-sis-accent bg-sis-accent/10 text-sis-primary' : 'border-sis-border text-sis-muted'">{{ item }}</button>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-sis-primary">Architecture Partners</h3>
            <div class="mt-4 flex flex-wrap gap-2 text-sm text-sis-muted">
              <span v-for="partner in architecture?.partners" :key="partner" class="rounded-full border border-sis-border px-3 py-2">{{ partner }}</span>
            </div>
          </div>
          <div class="rounded-3xl bg-sis-primary/5 p-5 text-sis-text">
            <h4 class="text-sm uppercase tracking-[0.22em] text-sis-accent">Detail</h4>
            <p class="mt-3 leading-6 text-sis-muted">{{ activeChipDetail }}</p>
          </div>
        </aside>
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
const { architecture, loaded } = storeToRefs(siteStore)
const activeChip = ref('OPC UA')

const activeChipDetail = computed(() => {
  if (!architecture.value) return 'Select a protocol to see more detail.'
  return `Selected: ${activeChip.value}. This chip represents a flexible integration point in the OT/IT architecture.`
})
</script>
