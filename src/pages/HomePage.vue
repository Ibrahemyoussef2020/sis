<template>
  <HeroSection />
  <LazyLoadSection :loader="() => import('@/components/PillarsSection.vue')" skeleton-class="min-h-[24rem] rounded-none" />
  <LazyLoadSection :loader="() => import('@/components/IntegrationSection.vue')" skeleton-class="min-h-[36rem]" />
  <LazyLoadSection :loader="() => import('@/components/ServicesSection.vue')" skeleton-class="min-h-[28rem]" />
  <LazyLoadSection :loader="() => import('@/components/IntelligenceBand.vue')" skeleton-class="min-h-[32rem]" />
  <LazyLoadSection :loader="() => import('@/components/ArchitectureSection.vue')" skeleton-class="min-h-[40rem]" />
  <LazyLoadSection :loader="() => import('@/components/Workflow.vue')" skeleton-class="min-h-[48rem]" />
  <LazyLoadSection :loader="() => import('@/components/MethodologySection.vue')" skeleton-class="min-h-[36rem]" />
  <LazyLoadSection :loader="() => import('@/components/PartnersSection.vue')" skeleton-class="min-h-[36rem]" />
  <LazyLoadSection :loader="() => import('@/components/ClientsSection.vue')" skeleton-class="min-h-[28rem]" />
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import LazyLoadSection from "@/components/LazyLoadSection.vue";
</script>
