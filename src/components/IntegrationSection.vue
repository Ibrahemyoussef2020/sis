<template>
  <SectionWrapper wrapperClass="bg-sis-panel text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Digital Integration</p>
        <h2 class="mt-3 text-2xl font-semibold sm:text-3xl" data-reveal>What Drives Our OT–IT Journey</h2>
        <p class="mt-4 max-w-3xl text-sis-muted" data-reveal>
          SiS bridges operational and information technology with precision, innovation, and reliable digital transformation for industrial clients.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <div>
          <h3 class="text-xl font-semibold text-sis-primary" data-reveal>Use Cases</h3>
          <p class="mt-3 text-sm text-sis-muted" data-reveal>Real projects where SiS delivered measurable industrial outcomes.</p>
          <div class="mt-6 space-y-4">
            <template v-if="loaded">
              <article v-for="proj in topProjects" :key="proj.client" class="rounded-xl border border-sis-border bg-white p-4 shadow-sis flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-lg text-xl bg-sis-panel/60">{{ iconFor(proj.sector) }}</div>
                <div>
                  <h4 class="font-semibold text-sis-text">{{ proj.client }} — <span class="text-sm text-sis-muted">{{ proj.sector }}</span></h4>
                  <p class="mt-2 text-sm text-sis-muted">{{ proj.summary }}</p>
                </div>
              </article>
            </template>
            <template v-else>
              <div class="h-20 rounded-xl skeleton"></div>
              <div class="h-20 rounded-xl skeleton"></div>
            </template>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-sis-primary" data-reveal>Sectors</h3>
          <p class="mt-3 text-sm text-sis-muted" data-reveal>Industries we serve with tailored OT–IT solutions.</p>
          <div class="mt-6 grid gap-3">
            <template v-if="loaded">
              <button v-for="s in sectors" :key="s.id" class="flex items-center justify-between rounded-xl border border-sis-border bg-white p-3">
                <div>
                  <div class="font-semibold text-sis-text">{{ s.label }}</div>
                  <div class="text-sm text-sis-muted">{{ s.projects.length }} projects</div>
                </div>
                <div class="h-8 w-8 rounded-full" :style="{ background: s.color }"></div>
              </button>
            </template>
            <template v-else>
              <div class="h-12 rounded-xl skeleton"></div>
              <div class="h-12 rounded-xl skeleton"></div>
            </template>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-sis-primary" data-reveal>Capabilities</h3>
          <p class="mt-3 text-sm text-sis-muted" data-reveal>Our core technical strengths and delivery pillars.</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <template v-if="loaded">
              <span v-for="col in capabilities.columns" :key="col" class="rounded-full bg-sis-primary/10 px-4 py-2 text-sm text-sis-primary">{{ col }}</span>
            </template>
            <template v-else>
              <div class="h-10 w-24 rounded-full skeleton"></div>
            </template>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a href="#/projects" class="inline-block rounded-full bg-sis-accent px-6 py-3 text-white">Explore Case Studies</a>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import SectionWrapper from '@/components/SectionWrapper.vue'

const siteStore = useSiteStore()
const { projects, sectors, capabilities, loaded } = storeToRefs(siteStore)

const topProjects = computed(() => {
  if (!projects.value) return []
  return projects.value.slice(0, 3)
})

function iconFor(sector) {
  if (!sector) return '🔧'
  const s = sector.toLowerCase()
  if (s.includes('oil') || s.includes('gas')) return '🛢️'
  if (s.includes('water')) return '💧'
  if (s.includes('food') || s.includes('beverage')) return '🥫'
  if (s.includes('cement') || s.includes('heavy')) return '🏭'
  if (s.includes('chemical')) return '⚗️'
  return '🔧'
}
</script>
