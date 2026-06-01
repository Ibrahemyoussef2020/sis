<template>
  <div class="min-h-screen overflow-x-hidden bg-sis-panel text-sis-text">
    <NavBar />
    <main class="pt-24">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ArchitectureSection />
      <MethodologySection />
      <RoadmapSection />
      <ProjectsSection />
      <SectorsSection />
      <CapabilitiesMatrix />
      <TimelineSection />
      <PartnersSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSiteStore } from '@/stores/useSiteStore'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ArchitectureSection from '@/components/ArchitectureSection.vue'
import MethodologySection from '@/components/MethodologySection.vue'
import RoadmapSection from '@/components/RoadmapSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SectorsSection from '@/components/SectorsSection.vue'
import CapabilitiesMatrix from '@/components/CapabilitiesMatrix.vue'
import TimelineSection from '@/components/TimelineSection.vue'
import PartnersSection from '@/components/PartnersSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'

const siteStore = useSiteStore()

onMounted(() => {
  if (!siteStore.loaded) {
    siteStore.loadAll()
  }
})
</script>
