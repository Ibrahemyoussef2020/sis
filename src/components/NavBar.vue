<template>
  <header
    ref="headerEl"
    class="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-20)] dark:border-white/10 bg-[var(--bg-panel-95)] dark:bg-[#05131f]/95 text-sis-text dark:text-white backdrop-blur-xl shadow-glow"
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
        <span class="hidden md:grid gap-px min-w-0">
          <strong class="text-[0.79rem] font-[800] leading-tight text-sis-text dark:text-white truncate">Superior Integrated Solutions</strong>
          <small class="text-[0.58rem] font-[650] tracking-[0.045em] uppercase text-sis-muted dark:text-[#aebfd8] truncate">Industrial Automation & Digital Integration</small>
        </span>
      </router-link>

      <div class="hidden md:flex items-center flex-1 gap-8">
        <nav
          class="items-center gap-1 text-sm font-medium text-[var(--text-90)] dark:text-white/90 flex justify-center flex-1"
        >
          <router-link
            v-for="item in navWithRoute"
            :key="item.label"
            :to="{ name: item.route }"
            class="relative rounded-full px-4 py-2 transition-all duration-200 hover:text-sis-accent hover:bg-[var(--bg-accent-10)] dark:hover:bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.12)] active:scale-[0.96]"
            :class="
              $route.name === item.route
                ? 'text-sis-accent bg-[var(--bg-accent-10)] dark:bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.12)] dark:text-[var(--accent-blue)] font-semibold'
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
            class="relative rounded-full px-4 py-2 transition-all duration-200 hover:text-sis-accent hover:bg-[var(--bg-accent-10)] dark:hover:bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.12)] active:scale-[0.96] cursor-pointer"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>

      <ThemeToggle />
      <button
        class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sis-border dark:border-white/10 text-sis-text dark:text-white md:hidden transition-all duration-200 hover:bg-[var(--bg-accent-10)] dark:hover:bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.12)] active:scale-[0.92] flex-shrink-0"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Menu"
      >
        <UiIcon
          name="chevron-down"
          :size="24"
          class="transition-transform duration-200"
          :class="menuOpen ? 'rotate-180' : ''"
        />
      </button>
    </div>

    <transition name="content-fade">
      <div
        v-if="menuOpen"
        class="border-t border-[var(--border-20)] dark:border-white/10 bg-[var(--bg-panel-95)] dark:bg-[#061826]/95 px-4 py-6 text-sis-text dark:text-white md:hidden"
      >
        <div class="flex flex-col gap-1">
          <router-link
            v-for="item in allNav"
            :key="item.label"
            :to="{ name: item.route }"
            @click="toggleMenu"
            class="rounded-xl px-4 py-3 transition hover:bg-[var(--bg-accent-10)] dark:hover:bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.12)] flex items-center gap-3"
            :class="
              $route.name === item.route
                ? 'text-sis-accent bg-[var(--bg-accent-10)] dark:bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.12)] dark:text-[var(--accent-blue)] font-semibold'
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
import UiIcon from "@/components/UiIcon.vue";

const route = useRoute();
const router = useRouter();
const headerEl = ref(null);
const menuOpen = ref(false);
const dropdownOpen = ref(false);

const mainNav = [
  { label: "Home", route: "home" },
  { label: "About Us", route: "about" },
  { label: "Projects", route: "projects" },
  { label: "Architecture", route: "architecture" },
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

