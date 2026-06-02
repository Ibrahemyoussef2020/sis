<template>
  <SectionWrapper id="methodology" wrapperClass="bg-white text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Methodology</p>
        <h2 class="mt-3 text-2xl font-semibold sm:text-3xl" data-reveal>{{ methodology?.title }}</h2>
      </div>
      <div class="grid gap-4 lg:grid-cols-3">
        <template v-if="loaded">
          <button v-for="stage in methodology.stages" :key="stage.number" @click="expandStage = stage.number" class="group rounded-[2rem] border border-sis-border p-4 text-left transition hover:-translate-y-1 hover:border-sis-accent/80">
            <div class="flex items-center gap-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-sis-primary text-lg font-bold text-white">{{ stage.number }}</span>
              <div>
                <h3 class="text-xl font-semibold text-sis-text">{{ stage.title }}</h3>
              </div>
            </div>
            <p class="mt-4 text-sm text-sis-muted">{{ stage.description }}</p>
            <div v-if="expandStage === stage.number" class="mt-4 rounded-3xl bg-sis-accent/10 p-4 text-sm text-sis-text">
              {{ stage.description }} More detail is available for execution, governance, and continuous improvement.
            </div>
          </button>
        </template>
        <template v-else>
          <div v-for="n in 3" :key="n" class="h-48 rounded-[2rem] skeleton"></div>
        </template>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import SectionWrapper from '@/components/SectionWrapper.vue'

const siteStore = useSiteStore()
const { methodology, loaded } = storeToRefs(siteStore)
const expandStage = ref(1)
</script>
