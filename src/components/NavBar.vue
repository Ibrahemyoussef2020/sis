<template>
  <header
    ref="headerEl"
    class="fixed inset-x-0 top-0 z-50 border-b border-sis-border/20 dark:border-white/10 bg-sis-panel/95 dark:bg-[#05131f]/95 text-sis-text dark:text-white backdrop-blur-xl shadow-glow"
  >
    <div
      class="flex w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-8 gap-6"
    >
      <router-link
        to="/"
        class="flex items-center gap-3 text-sis-text dark:text-white flex-shrink-0"
      >
        <img
          src="../images/SIS-Logo-solid.png"
          alt="SiS Logo"
          class="h-8 w-auto sm:h-9 dark:hidden"
        />
        <img
          src="../images/SIS-Logo-white.png"
          alt="SiS Logo"
          class="h-8 w-auto sm:h-9 hidden dark:block"
        />
      </router-link>

      <div class="hidden md:flex items-center flex-1 gap-8">
        <nav
          class="items-center gap-1 text-sm font-medium text-sis-text/90 dark:text-white/90 flex justify-center flex-1"
        >
          <router-link
            v-for="item in navWithRoute"
            :key="item.label"
            :to="{ name: item.route }"
            class="relative rounded-full px-4 py-2 transition-all duration-200 hover:text-sis-accent hover:bg-sis-accent/10 dark:hover:bg-white/5 active:scale-[0.96]"
            :class="
              $route.name === item.route
                ? 'text-sis-accent bg-sis-accent/10 dark:bg-white/5 font-semibold'
                : ''
            "
          >
            {{ item.label }}
          </router-link>
          <a
            v-for="item in navWithAction"
            :key="item.label"
            href="#"
            @click.prevent="item.action()"
            class="relative rounded-full px-4 py-2 transition-all duration-200 hover:text-sis-accent hover:bg-sis-accent/10 dark:hover:bg-white/5 active:scale-[0.96] cursor-pointer"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>

      <ThemeToggle />
      <button
        class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sis-border dark:border-white/10 text-sis-text dark:text-white md:hidden transition-all duration-200 hover:bg-sis-accent/10 dark:hover:bg-white/10 active:scale-[0.92] flex-shrink-0"
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
        class="border-t border-sis-border/20 dark:border-white/10 bg-sis-panel/95 dark:bg-[#061826]/95 px-4 py-6 text-sis-text dark:text-white md:hidden"
      >
        <div class="flex flex-col gap-1">
          <router-link
            v-for="item in allNav"
            :key="item.label"
            :to="{ name: item.route }"
            @click="toggleMenu"
            class="rounded-3xl px-4 py-3 transition hover:bg-sis-accent/10 dark:hover:bg-white/10 flex items-center gap-3"
            :class="
              $route.name === item.route
                ? 'text-sis-accent bg-sis-accent/10 dark:bg-white/5 font-semibold'
                : ''
            "
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { scrollToSection } from "@/utils/scrollTo.js";
import ThemeToggle from "@/components/ThemeToggle.vue";

const route = useRoute();
const router = useRouter();
const headerEl = ref(null);
const menuOpen = ref(false);
const dropdownOpen = ref(false);

const mainNav = [
  { label: "Home", route: "home" },
  { label: "About Us", route: "about" },
  { label: "Projects", route: "projects" },
  { label: "Timeline", route: "timeline" },
  { label: "Contact", route: "contact" },
];

const dropdownNav = [];

const navWithRoute = computed(() => mainNav.filter((i) => i.route));
const navWithAction = computed(() => mainNav.filter((i) => i.action));
const allNav = [...navWithRoute.value, ...dropdownNav];

const dropdownActive = computed(() =>
  dropdownNav.some((i) => route.name === i.route),
);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

