<template>
  <SectionWrapper wrapperClass="bg-sis-panel text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Timeline</p>
        <h2 class="mt-3 text-2xl font-semibold sm:text-3xl" data-reveal>{{ timeline?.title }}</h2>
        <p class="mt-3 max-w-2xl text-sis-muted" data-reveal>{{ timeline?.subtitle }}</p>
      </div>

      <!-- Desktop: Vertical zigzag timeline -->
      <div class="relative hidden lg:block">
        <div class="absolute left-1/2 top-4 bottom-4 w-0.5 bg-sis-border -translate-x-1/2"></div>
        <div class="space-y-16">
          <div
            v-for="(milestone, i) in timeline?.milestones"
            :key="milestone.year"
            class="relative flex items-start"
          >
            <!-- Card (left on even, right on odd) -->
            <div
              :class="i % 2 === 0 ? 'pr-10 text-right' : 'pl-10 order-3'"
              class="w-[calc(50%-2.5rem)]"
              data-reveal
            >
              <div
                class="inline-block text-left rounded-2xl border border-sis-border bg-sis-panel p-6 shadow-sm"
              >
                <h3 class="text-lg font-semibold text-sis-text">{{ milestone.label }}</h3>
                <p class="mt-3 text-sm leading-6 text-sis-muted">{{ milestone.description }}</p>
              </div>
            </div>

            <!-- Center dot -->
            <div class="relative z-10 flex w-20 shrink-0 justify-center order-2" style="margin-top: 1.5rem;">
              <div
                class="flex h-14 min-w-[4.5rem] w-auto items-center justify-center rounded-full bg-sis-accent px-4 text-sm font-semibold text-white shadow-lg ring-4 ring-white whitespace-nowrap"
              >
                {{ milestone.year }}
              </div>
              <!-- Connector line -->
              <div
                class="absolute top-1/2 w-6 h-0.5 bg-sis-border -translate-y-1/2"
                :class="i % 2 === 0 ? 'right-full' : 'left-full'"
              ></div>
            </div>

            <!-- Empty spacer (opposite side) -->
            <div
              :class="i % 2 === 0 ? 'order-3' : 'order-1'"
              class="w-[calc(50%-2.5rem)]"
            ></div>
          </div>
        </div>
      </div>

      <!-- Mobile: simple stacked list -->
      <div class="space-y-6 lg:hidden">
        <article
          v-for="milestone in timeline?.milestones"
          :key="milestone.year"
          class="flex items-start gap-5 rounded-3xl border border-sis-border bg-sis-panel p-5 shadow-sm"
          data-reveal
        >
          <div
            class="flex h-14 min-w-[4.5rem] w-auto shrink-0 items-center justify-center rounded-full bg-sis-accent px-4 text-sm font-semibold text-white whitespace-nowrap"
          >
            {{ milestone.year }}
          </div>
          <div>
            <p class="font-semibold text-sis-text">{{ milestone.label }}</p>
            <p class="mt-2 text-sm text-sis-muted">{{ milestone.description }}</p>
          </div>
        </article>
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
