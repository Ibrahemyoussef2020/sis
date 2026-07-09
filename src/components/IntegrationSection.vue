<template>
  <SectionWrapper wrapperClass="bg-sis-panel text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6">
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
                <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-sis-panel/60 text-sis-accent">
                  <svg v-if="iconFor(proj.sector) === 'oil'" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 00-6.5 12l6.5 8 6.5-8A8 8 0 0012 2z"/><circle cx="12" cy="8" r="2"/></svg>
                  <svg v-else-if="iconFor(proj.sector) === 'water'" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 00-6.5 12l6.5 8 6.5-8A8 8 0 0012 2z"/><path d="M7 14a5 5 0 0010 0"/></svg>
                  <svg v-else-if="iconFor(proj.sector) === 'food'" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>
                  <svg v-else-if="iconFor(proj.sector) === 'cement'" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="12" width="18" height="10" rx="1"/><path d="M7 12V8a2 2 0 012-2h6a2 2 0 012 2v4"/><path d="M12 4V2"/></svg>
                  <svg v-else-if="iconFor(proj.sector) === 'chemical'" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v6a4 4 0 01-4 4H4a4 4 0 01-4-4V2"/><path d="M14 2v6a4 4 0 004 4h2a4 4 0 004-4V2"/><path d="M4 22v-4a2 2 0 012-2h12a2 2 0 012 2v4"/><path d="M9 22v-2"/></svg>
                  <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                </div>
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

      <div class="mt-8 text-center">
        <a href="#/projects" class="inline-block rounded-full bg-sis-accent px-6 py-3 text-white transition-all duration-300 hover:bg-sis-light hover:shadow-lg hover:shadow-sis-accent/40 active:scale-[0.97]">Explore Case Studies</a>
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
  if (!sector) return 'gear'
  const s = sector.toLowerCase()
  if (s.includes('oil') || s.includes('gas')) return 'oil'
  if (s.includes('water')) return 'water'
  if (s.includes('food') || s.includes('beverage')) return 'food'
  if (s.includes('cement') || s.includes('heavy')) return 'cement'
  if (s.includes('chemical')) return 'chemical'
  return 'gear'
}
</script>
