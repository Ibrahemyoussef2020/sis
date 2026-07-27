<template>
  <div class="relative" ref="dropdownRef">
    <button
      class="inline-flex h-10 items-center gap-0.5 px-2.5 rounded-lg border border-[var(--border-30)] dark:border-white/10 text-sis-muted dark:text-white/80 transition-all duration-200 hover:bg-sis-panel dark:hover:bg-white/10 hover:text-sis-text dark:hover:text-white active:scale-[0.92]"
      @click="open = !open"
      aria-label="Toggle theme"
    >
      <span v-if="resolvedTheme === 'light'" class="material-symbols-outlined text-lg">light_mode</span>
      <span v-else class="material-symbols-outlined text-lg">dark_mode</span>
      <span class="material-symbols-outlined text-sm transition-transform duration-200" :class="open ? 'rotate-180' : ''">expand_more</span>
    </button>

    <Transition name="content-fade">
      <div
        v-if="open"
        class="absolute right-0 top-full mt-2 w-44 rounded-xl border border-[var(--border-30)] dark:border-white/10 bg-white dark:bg-[#0a1120]/95 text-sis-text dark:text-white backdrop-blur-xl shadow-lg dark:shadow-glow py-1.5"
      >
        <button
          v-for="opt in options"
          :key="opt.value"
          class="flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-sis-panel dark:hover:bg-white/5"
          :class="theme === opt.value ? 'text-sis-accent' : 'text-sis-muted dark:text-white/80'"
          @click="select(opt.value)"
        >
          <span class="material-symbols-outlined text-base">{{ opt.icon }}</span>
          {{ opt.label }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme, resolvedTheme, setTheme } = useTheme()
const open = ref(false)

const dropdownRef = ref(null)
const options = [
  { value: 'light', label: 'Light', icon: 'light_mode' },
  { value: 'dark', label: 'Dark', icon: 'dark_mode' },
  { value: 'system', label: 'System', icon: 'brightness_auto' },
]

function select(t) {
  setTheme(t)
  open.value = false
}

function onClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>