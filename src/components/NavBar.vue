<template>
  <header ref="headerEl" class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05131f]/95 text-white backdrop-blur-xl shadow-glow">
    <div class="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8 gap-6">
      <router-link to="/" class="flex items-center gap-3 text-white flex-shrink-0">
        <span class="grid h-12 w-12 place-items-center rounded-full bg-sis-accent/15 text-xl font-bold text-sis-accent">SiS</span>
        <span class="hidden md:inline-block text-sm uppercase tracking-[0.28em] text-white/80">
        Superior <br/> Integrated Solutions
        </span>
      </router-link>

      <!-- Wrapper for nav, search, and language selector -->
      <div class="hidden md:flex items-center flex-1 gap-8">
        <nav class="items-center gap-8 text-sm font-medium text-white/90 flex justify-center flex-1">
          <router-link v-for="item in navItems" :key="item.label" :to="item.path ? item.path : { name: item.name }" class="relative flex items-center gap-2 rounded-full px-3 py-2 transition hover:text-sis-accent hover:bg-white/5" :class="(item.name && $route.name === item.name) || ($route.path === '/' && item.path && $route.hash === item.path.replace('/#','')) ? 'text-sis-accent bg-white/5 font-semibold' : ''">
            <span class="text-base" aria-hidden="true">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </router-link>
        </nav>

        <div class="items-center gap-3 flex flex-shrink-0">
          <button class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
            🔍
          </button>
          <button class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-white/10">
            EN
            <span class="text-[0.55rem]">▾</span>
          </button>
        </div>
      </div>
      <button class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white md:hidden transition hover:bg-white/10 flex-shrink-0" @click="toggleMenu" aria-label="Menu">
        <span class="text-2xl">☰</span>
      </button>
    </div>

    <transition name="content-fade">
      <div v-if="menuOpen" class="border-t border-white/10 bg-[#061826]/95 px-4 py-6 text-white md:hidden">
        <div class="flex flex-col gap-3">
          <router-link v-for="item in navItems" :key="item.label" :to="item.path ? item.path : { name: item.name }" @click="toggleMenu" class="rounded-3xl px-4 py-3 transition hover:bg-white/10 flex items-center gap-3">
            <span class="text-lg" aria-hidden="true">{{ item.icon }}</span>
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
const headerEl = ref(null)
const navItems = [
  { name: 'home', label: 'Home', icon: '🏠' },
  { path: '/#services', label: 'Solutions ▾', icon: '🛠️' },
  { name: 'about', label: 'About Us', icon: '📘' },
  { name: 'projects', label: 'Our Work', icon: '🗂️' },
  { name: 'contact', label: 'Contact', icon: '✉️' }
]

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  // Header stays fixed at top - scroll behavior handled by page layout
  // Ensure no scroll offset issues by maintaining fixed positioning
})

onUnmounted(() => {
  // cleanup
})

function onScroll() {
  // no-op scroll listener preserved for future style updates
}
</script>
