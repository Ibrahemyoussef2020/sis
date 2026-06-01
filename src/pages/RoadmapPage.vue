<template>
  <RoadmapSection />
</template>

<script setup>
import { onMounted } from 'vue'
import { useSiteStore } from '@/stores/useSiteStore'
import RoadmapSection from '@/components/RoadmapSection.vue'

const siteStore = useSiteStore()

onMounted(() => {
  if (!siteStore.loaded) {
    siteStore.loadAll()
  }
})
</script>
