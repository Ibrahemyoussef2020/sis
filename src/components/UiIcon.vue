<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'monitor'">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4M6 8h.01M9 8h6" />
    </template>
    <template v-else-if="name === 'predictive'">
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <circle cx="12" cy="12" r="4" />
    </template>
    <template v-else-if="name === 'cube'">
      <path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.3 7 12 12l8.7-5M12 22V12" />
    </template>
    <path v-else-if="name === 'layers'" d="m2 7 10-4 10 4-10 4zM2 7v10l10 4 10-4V7" />
    <path v-else-if="name === 'energy'" d="M13 2 3 14h7l-1 8 10-12h-7z" />
    <template v-else-if="name === 'database'">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" />
    </template>
    <template v-else-if="name === 'connect'">
      <circle cx="12" cy="12" r="2" />
      <path d="M4.9 4.9a10 10 0 0 0 0 14.2M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M19.1 4.9a10 10 0 0 1 0 14.2" />
    </template>
    <path v-else-if="name === 'pulse'" d="M3 12h4l3 8 4-16 3 8h4" />
    <path v-else d="M12 20V10M18 20V4M6 20v-4" />
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>
