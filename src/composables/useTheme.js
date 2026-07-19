import { ref, computed } from 'vue'

const STORAGE_KEY = 'sis-theme'

const theme = ref(localStorage.getItem(STORAGE_KEY) || 'system')
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const resolvedTheme = computed(() => {
  if (theme.value === 'system') {
    return mediaQuery.matches ? 'dark' : 'light'
  }
  return theme.value
})

function applyTheme(resolved) {
  if (resolved === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function onSystemChange(e) {
  if (theme.value === 'system') {
    applyTheme(e.matches ? 'dark' : 'light')
  }
}

mediaQuery.addEventListener('change', onSystemChange)

applyTheme(resolvedTheme.value)

function setTheme(t) {
  theme.value = t
  localStorage.setItem(STORAGE_KEY, t)
  applyTheme(resolvedTheme.value)
}

export function useTheme() {
  return { theme, resolvedTheme, setTheme }
}
