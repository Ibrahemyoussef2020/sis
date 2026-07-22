<template>
  <section class="relative border-y border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] py-24 px-6 overflow-hidden" style="background: var(--bg-section-1)">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent dark:text-[var(--accent-blue)]" data-reveal>Timeline</p>
        <h2 class="mt-3 text-2xl font-semibold sm:text-3xl text-sis-text dark:text-[#eaf1fb]" data-reveal>{{ timeline?.title }}</h2>
        <p class="mt-3 max-w-2xl text-sis-muted dark:text-[#aebfd8]" data-reveal>{{ timeline?.subtitle }}</p>
      </div>

      <div class="relative hidden lg:block">
        <div class="absolute left-1/2 top-4 bottom-4 w-0.5 bg-[rgba(0,0,0,0.08)] dark:bg-[rgba(126,165,224,0.14)] -translate-x-1/2"></div>
        <div class="space-y-16">
          <div v-for="(milestone, i) in timeline?.milestones" :key="milestone.year" class="relative flex items-start">
            <div :class="i % 2 === 0 ? 'pr-10 text-right' : 'pl-10 order-3'" class="w-[calc(50%-2.5rem)]" data-reveal>
              <div class="inline-block text-left rounded-2xl border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] p-6 shadow-sm" style="background: var(--bg-card-2)">
                <h3 class="text-lg font-semibold text-sis-text dark:text-[#eaf1fb]">{{ milestone.label }}</h3>
                <p class="mt-3 text-sm leading-6 text-sis-muted dark:text-[#aebfd8]">{{ milestone.description }}</p>
              </div>
            </div>
            <div class="relative z-10 flex w-20 shrink-0 justify-center order-2" style="margin-top: 1.5rem;">
              <div class="flex h-14 min-w-[4.5rem] w-auto items-center justify-center rounded-full bg-sis-accent dark:bg-[var(--accent-blue)] px-4 text-sm font-semibold text-white dark:text-[#04121f] shadow-lg shadow-[var(--bg-accent-20)] dark:shadow-[var(--shadow-blue-20)] whitespace-nowrap">
                {{ milestone.year }}
              </div>
              <div class="absolute top-1/2 w-6 h-0.5 bg-[rgba(0,0,0,0.08)] dark:bg-[rgba(126,165,224,0.14)] -translate-y-1/2" :class="i % 2 === 0 ? 'right-full' : 'left-full'"></div>
            </div>
            <div :class="i % 2 === 0 ? 'order-3' : 'order-1'" class="w-[calc(50%-2.5rem)]"></div>
          </div>
        </div>
      </div>

      <div class="space-y-6 lg:hidden">
        <article v-for="milestone in timeline?.milestones" :key="milestone.year" class="flex items-start gap-5 rounded-3xl border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] p-5 shadow-sm" style="background: var(--bg-card-2)" data-reveal>
          <div class="flex h-14 min-w-[4.5rem] w-auto shrink-0 items-center justify-center rounded-full bg-sis-accent dark:bg-[var(--accent-blue)] px-4 text-sm font-semibold text-white dark:text-[#04121f] whitespace-nowrap">
            {{ milestone.year }}
          </div>
          <div>
            <p class="font-semibold text-sis-text dark:text-[#eaf1fb]">{{ milestone.label }}</p>
            <p class="mt-2 text-sm text-sis-muted dark:text-[#aebfd8]">{{ milestone.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'

const siteStore = useSiteStore()
const { timeline } = storeToRefs(siteStore)
</script>
