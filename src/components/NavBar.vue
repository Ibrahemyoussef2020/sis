<template>
  <header
    ref="headerEl"
    class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05131f]/95 text-white backdrop-blur-xl shadow-glow"
  >
    <div
      class="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8 gap-6"
    >
      <router-link
        to="/"
        class="flex items-center gap-3 text-white flex-shrink-0"
      >
        <img
          src="https://sis-eg.org/wordpress/wp-content/uploads/2023/07/SIS-Logo-white.png"
          alt="SiS Logo"
          class="h-10 w-auto"
        />
      </router-link>

      <!-- Wrapper for nav, search, and language selector -->
      <div class="hidden md:flex items-center flex-1 gap-8">
        <nav
          class="items-center gap-1 text-sm font-medium text-white/90 flex justify-center flex-1"
        >
          <router-link
            v-for="item in navItems"
            :key="item.label"
            :to="item.path ? item.path : { name: item.name }"
            class="relative rounded-full px-4 py-2 transition-all duration-200 hover:text-sis-accent hover:bg-white/5 active:scale-[0.96]"
            :class="
              (item.name && $route.name === item.name) ||
              ($route.path === '/' &&
                item.path &&
                $route.hash === item.path.replace('/#', ''))
                ? 'text-sis-accent bg-white/5 font-semibold'
                : ''
            "
          >
            {{ item.label }}
          </router-link>
        </nav>

        <div class="items-center gap-3 flex flex-shrink-0">
          <button
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.92]"
            aria-label="Search"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.92]"
          >
            EN
            <span class="text-[0.55rem]">▾</span>
          </button>
        </div>
      </div>
      <button
        class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white md:hidden transition-all duration-200 hover:bg-white/10 active:scale-[0.92] flex-shrink-0"
        @click="toggleMenu"
        aria-label="Menu"
      >
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
    </div>

    <transition name="content-fade">
      <div
        v-if="menuOpen"
        class="border-t border-white/10 bg-[#061826]/95 px-4 py-6 text-white md:hidden"
      >
        <div class="flex flex-col gap-3">
          <router-link
            v-for="item in navItems"
            :key="item.label"
            :to="item.path ? item.path : { name: item.name }"
            @click="toggleMenu"
            class="rounded-3xl px-4 py-3 transition hover:bg-white/10 flex items-center gap-3"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const headerEl = ref(null);
const navItems = [
  { name: "home", label: "Home" },
  { path: "/#services", label: "Solutions" },
  { name: "about", label: "About Us" },
  { name: "projects", label: "Our Work" },
  { name: "contact", label: "Contact" },
];

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  // Header stays fixed at top - scroll behavior handled by page layout
  // Ensure no scroll offset issues by maintaining fixed positioning
});

onUnmounted(() => {
  // cleanup
});

function onScroll() {
  // no-op scroll listener preserved for future style updates
}
</script>
