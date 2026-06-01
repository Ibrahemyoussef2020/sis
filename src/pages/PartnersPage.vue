<template>
  <PartnersSection />
</template>

<script setup>
import { onMounted } from 'vue'
import { useSiteStore } from '@/stores/useSiteStore'
import PartnersSection from '@/components/PartnersSection.vue'

const siteStore = useSiteStore()

onMounted(() => {
  if (!siteStore.loaded) {
    siteStore.loadAll()
  }
})
</script>
