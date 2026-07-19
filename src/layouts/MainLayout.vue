<template>
  <div class="min-h-screen overflow-x-hidden bg-[#070d1a] text-[#eaf1fb]">
    <NavBar />
    <main>
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
