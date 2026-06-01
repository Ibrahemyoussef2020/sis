<template>
  <SectionWrapper id="services" wrapperClass="bg-white text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Services</p>
        <h2 class="mt-3 text-3xl font-semibold sm:text-4xl" data-reveal>What We Deliver</h2>
      </div>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <template v-if="loaded">
          <article v-for="service in services" :key="service.id" class="group rounded-[2rem] border border-sis-border bg-sis-panel p-4 transition hover:-translate-y-2 hover:border-sis-accent/80 hover:shadow-sis">
            <div class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sis-primary text-white transition group-hover:bg-sis-accent">
              <span class="text-xl">●</span>
            </div>
            <h3 class="text-xl font-semibold text-sis-text">{{ service.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-sis-muted">{{ service.description }}</p>
          </article>
        </template>
        <template v-else>
          <div v-for="n in 4" :key="n" class="h-56 rounded-[2rem] skeleton"></div>
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
const { services, loaded } = storeToRefs(siteStore)
</script>
