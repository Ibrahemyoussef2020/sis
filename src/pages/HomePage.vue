<template>
  <HeroSection />
  <IntegrationSection />
  <ServicesSection />
  <ArchitectureSection />
  <Workflow/>
  <MethodologySection />
</template>

<script setup>
import { onMounted } from 'vue'
import { useSiteStore } from '@/stores/useSiteStore'
import HeroSection from '@/components/HeroSection.vue'
import IntegrationSection from '@/components/IntegrationSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ArchitectureSection from '@/components/ArchitectureSection.vue'
import MethodologySection from '@/components/MethodologySection.vue'
import Workflow from '../components/Workflow.vue'

const siteStore = useSiteStore()

onMounted(() => {
  if (!siteStore.loaded) {
    siteStore.loadAll()
  }
})
</script>
