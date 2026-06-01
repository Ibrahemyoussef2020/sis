<template>
  <header class="fixed inset-x-0 top-0 z-50 transition-all duration-500" :class="scrolled ? 'bg-sis-primary/90 shadow-sis backdrop-blur-xl' : 'bg-transparent'">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a href="#hero" class="flex items-center gap-3 text-white">
        <span class="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-xl font-bold">SiS</span>
        <span class="hidden sm:inline-block text-sm uppercase tracking-[0.28em] text-sis-panel">Superior Integrated Solutions</span>
      </a>
      <nav class="hidden items-center gap-8 text-sm font-medium text-sis-panel md:flex">
        <a v-for="item in navItems" :key="item.id" :href="item.href" class="relative transition hover:text-white" :class="currentSection === item.id ? 'text-white' : ''">
          {{ item.label }}
          <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-sis-accent opacity-0 transition-opacity duration-300" :class="currentSection === item.id ? 'opacity-100' : ''"></span>
        </a>
      </nav>
      <button class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white md:hidden" @click="toggleMenu" aria-label="Menu">
        <span class="text-2xl">☰</span>
      </button>
    </div>
    <transition name="content-fade">
      <div v-if="menuOpen" class="border-t border-white/10 bg-sis-primary/95 px-4 py-6 text-sis-panel md:hidden">
        <div class="flex flex-col gap-4">
          <a v-for="item in navItems" :key="item.id" :href="item.href" @click="toggleMenu" class="rounded-xl px-4 py-3 transition hover:bg-sis-light/15">
            {{ item.label }}
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'architecture', label: 'Architecture', href: '#architecture' },
  { id: 'methodology', label: 'Methodology', href: '#methodology' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' }
]

const menuOpen = ref(false)
const scrolled = ref(false)
const currentSection = ref('hero')

const updateScroll = () => {
  scrolled.value = window.scrollY > 24
  const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean)
  const active = sections.find((section) => {
    const rect = section.getBoundingClientRect()
    return rect.top <= 120 && rect.bottom > 120
  })
  currentSection.value = active?.id || 'hero'
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
