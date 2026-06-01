<template>
  <section ref="sectionRef" :class="wrapperClasses">
    <div class="relative">
      <slot />
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from 'vue'
import { gsap } from 'gsap'

export default defineComponent({
  props: {
    wrapperClass: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const sectionRef = ref(null)
    const wrapperClasses = computed(() => `px-4 sm:px-6 lg:px-8 py-16 ${props.wrapperClass}`.trim())

    onMounted(() => {
      const target = sectionRef.value
      if (!target) return

      const children = [...target.querySelectorAll('[data-reveal]')]
      gsap.set(children, { y: 30, opacity: 0 })

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          gsap.to(children, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1,
          })
          observer.disconnect()
        })
      }, { threshold: 0.2 })

      observer.observe(target)
    })

    return {
      sectionRef,
      wrapperClasses,
    }
  },
})
</script>
