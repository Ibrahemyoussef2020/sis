<template>
  <span ref="counterRef">
    <span>{{ displayedValue }}</span>{{ suffix }}
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  value: { type: Number, required: true },
  suffix: { type: String, default: '' },
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
