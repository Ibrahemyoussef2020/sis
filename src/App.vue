<template>
  <GlobalLoader />
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="default">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useSiteStore } from '@/stores/useSiteStore'
import GlobalLoader from '@/components/GlobalLoader.vue'

const siteStore = useSiteStore()

onMounted(() => {
  if (!siteStore.loaded) {
    siteStore.loadAll()
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  }

  const observeElements = () => {
    document.querySelectorAll('.reveal:not(.active), [data-reveal]:not(.active)').forEach((el) => {
      useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.classList.add('active')
        }
      }, observerOptions)
    })
  }

  observeElements()

  const mutationObserver = new MutationObserver(() => { observeElements() })
  mutationObserver.observe(document.body, { childList: true, subtree: true })
})
</script>

