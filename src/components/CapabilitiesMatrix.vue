<template>
  <SectionWrapper wrapperClass="bg-white text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Capabilities</p>
        <h2 class="mt-3 text-3xl font-semibold sm:text-4xl" data-reveal>{{ capabilities?.title }}</h2>
      </div>
      <div class="overflow-x-auto rounded-[2rem] border border-sis-border bg-sis-panel shadow-sis">
        <table class="min-w-full border-collapse text-left">
          <thead>
            <tr>
              <th class="border-b border-sis-border px-6 py-4 text-sm font-semibold text-sis-muted">Client</th>
              <th v-for="(column, index) in capabilities?.columns" :key="column" class="border-b border-sis-border px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-sis-muted">
                <button @click="selectedColumn = index" class="flex items-center gap-2">
                  {{ column }}
                  <span v-if="selectedColumn === index" class="h-2 w-2 rounded-full bg-sis-accent"></span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-if="loaded">
              <tr v-for="row in capabilities.rows" :key="row.client" class="border-b border-sis-border bg-white transition hover:bg-sis-panel/80">
                <td class="px-6 py-5 font-semibold text-sis-text">{{ row.client }}</td>
                <td v-for="(active, index) in row.capabilities" :key="index" class="px-6 py-5">
                  <span :class="active ? 'text-sis-accent' : 'text-sis-muted'">{{ active ? '✔' : '–' }}</span>
                </td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="n in 5" :key="n" class="h-20"><td colspan="6" class="skeleton"></td></tr>
            </template>
          </tbody>
        </table>
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
const { capabilities, loaded } = storeToRefs(siteStore)
const selectedColumn = ref(0)
</script>
