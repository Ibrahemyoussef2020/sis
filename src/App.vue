<template>
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useSiteStore } from '@/stores/useSiteStore'

const siteStore = useSiteStore()

onMounted(() => {
  // Load site data
  if (!siteStore.loaded) {
    siteStore.loadAll()
  }

  // Global Reveal Observer setup
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const observeElements = () => {
    const elements = document.querySelectorAll('.reveal:not(.active), [data-reveal]:not(.active)')
    elements.forEach((el) => revealObserver.observe(el))
  }

  // Initial observation
  observeElements()

  // Use MutationObserver to detect when new components are added to the DOM (like routing)
  const mutationObserver = new MutationObserver(() => {
    observeElements()
  })
  
  mutationObserver.observe(document.body, { 
    childList: true, 
    subtree: true 
  })

  // Cleanup on unmount
  onUnmounted(() => {
    revealObserver.disconnect()
    mutationObserver.disconnect()
  })
})
</script>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease;
}
.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
