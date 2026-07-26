<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" :width="size" :height="size">
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
    <template v-else-if="name === 'robot-arm'">
      <path d="M5 20h14M12 20V8M8 8h8l4 4H4z" />
      <circle cx="12" cy="5" r="2" />
    </template>
    <template v-else-if="name === 'cpu'">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
      <path d="M2 12h2M20 12h2M12 2v2M12 20v2" />
    </template>
    <template v-else-if="name === 'settings'">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M1 12h2M21 12h2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </template>
    <template v-else-if="name === 'arrow'">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </template>
    <template v-else-if="name === 'water'">
      <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z" />
      <path d="M9 16c.7 1.3 1.7 2 3 2" />
    </template>
    <template v-else-if="name === 'factory'">
      <path d="M3 21V10l7 4v-4l7 4V6h4v15Z" />
      <path d="M7 18h2M13 18h2M18 18h2" />
    </template>
    <template v-else-if="name === 'science'">
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
      <path d="M7.5 16h9" />
    </template>
    <template v-else-if="name === 'oil'">
      <path d="M7 22h10M9 22l1-12h4l1 12M8 10h8M10 6h4M12 2v4M5 8l5 2M19 8l-5 2" />
    </template>
    <template v-else-if="name === 'engineering'">
      <path d="m14.7 6.3 3-3a4 4 0 0 1-5 5l-6.4 6.4a2 2 0 1 0 3 3l6.4-6.4a4 4 0 0 1 5-5l-3 3" />
      <path d="m5 4 3 3" />
    </template>
    <path v-else d="M12 20V10M18 20V4M6 20v-4" />
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 20,
  },
})
</script>
