<template>
  <div class="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-sis backdrop-blur-xl" ref="counterRef">
    <p class="text-4xl font-semibold text-white">
      <span>{{ displayedValue }}</span>{{ suffix }}
    </p>
    <p class="mt-3 text-sm uppercase tracking-[0.24em] text-sis-panel/80">{{ label }}</p>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  value: { type: Number, required: true },
  suffix: { type: String, default: '' },
  label: { type: String, required: true },
})

const displayedValue = ref(0)
const counterRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      gsap.to(displayedValue, {
        value: props.value,
        duration: 1.8,
        ease: 'power2.out',
        snap: 'value',
        onUpdate: () => {
          displayedValue.value = Math.round(displayedValue.value)
        },
      })
      observer.disconnect()
    })
  }, { threshold: 0.6 })

  if (counterRef.value) observer.observe(counterRef.value)
})
</script>
