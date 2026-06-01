<template>
  <TimelineSection />
</template>

<script setup>
import { onMounted } from 'vue'
import { useSiteStore } from '@/stores/useSiteStore'
import TimelineSection from '@/components/TimelineSection.vue'

const siteStore = useSiteStore()

onMounted(() => {
  if (!siteStore.loaded) {
    siteStore.loadAll()
  }
})
</script>
