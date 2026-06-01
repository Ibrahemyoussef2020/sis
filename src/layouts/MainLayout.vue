<template>
  <div class="min-h-screen overflow-x-hidden bg-sis-panel text-sis-text">
    <NavBar />
    <main class="pt-24">
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
