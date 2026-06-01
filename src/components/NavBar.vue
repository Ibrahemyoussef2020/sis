<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-sis-border bg-sis-panel text-sis-text transition-all duration-500">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <router-link to="/" class="flex items-center gap-3 text-sis-text">
        <span class="grid h-12 w-12 place-items-center rounded-full bg-sis-primary/10 text-xl font-bold text-sis-primary">SiS</span>
        <span class="hidden sm:inline-block text-sm uppercase tracking-[0.28em] text-sis-text">Superior Integrated Solutions</span>
      </router-link>
      <nav class="hidden items-center gap-8 text-sm font-medium text-sis-text md:flex">
        <router-link v-for="item in navItems" :key="item.label" :to="item.path ? item.path : { name: item.name }" class="relative flex items-center gap-2 transition hover:text-sis-accent" :class="(item.name && $route.name === item.name) || ($route.path === '/' && item.path && $route.hash === item.path.replace('/#','') ) ? 'text-sis-accent font-semibold' : ''">
          <span class="text-lg" aria-hidden="true">{{ getIcon(item) }}</span>
          <span>{{ item.label }}</span>
          <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-sis-accent opacity-0 transition-opacity duration-300" :class="(item.name && $route.name === item.name) || ($route.path === '/' && item.path && $route.hash === item.path.replace('/#','') ) ? 'opacity-100' : ''"></span>
        </router-link>
      </nav>
      <button class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sis-border text-sis-text md:hidden transition hover:bg-sis-panel/80" @click="toggleMenu" aria-label="Menu">
        <span class="text-2xl">☰</span>
      </button>
    </div>
    <transition name="content-fade">
      <div v-if="menuOpen" class="border-t border-sis-border bg-sis-panel px-4 py-6 text-sis-text md:hidden">
        <div class="flex flex-col gap-4">
          <router-link v-for="item in navItems" :key="item.label" :to="item.path ? item.path : { name: item.name }" @click="toggleMenu" class="rounded-xl px-4 py-3 transition hover:bg-sis-panel/80 flex items-center gap-3">
            <span class="text-lg" aria-hidden="true">{{ getIcon(item) }}</span>
            <span>{{ item.label }}</span>
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const navItems = [
  { name: 'home', label: 'Home' },
  { name: 'about', label: 'About' },
  { path: '/#services', label: 'Services' },
  { path: '/#architecture', label: 'Architecture' },
  { path: '/#methodology', label: 'Methodology' },
  { name: 'projects', label: 'Projects' },
  { name: 'contact', label: 'Contact' }
]

const menuOpen = ref(false)
const scrolled = ref(false)

function getIcon(item) {
  // Sections (anchor paths) get a down-arrow prefix
  if (item.path) return '⬇️'
  const map = {
    home: '🏠',
    about: '📘',
    projects: '🗂️',
    contact: '✉️'
  }
  return map[item.name] || '📄'
}

const updateScroll = () => {
  scrolled.value = window.scrollY > 24
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>
