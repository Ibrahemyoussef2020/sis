<template>
  <div ref="triggerRef">
    <div v-if="!ready" class="overflow-hidden rounded-xl" :class="skeletonClass">
      <slot name="skeleton">
        <div class="skeleton h-64 w-full rounded-xl"></div>
      </slot>
    </div>
    <component :is="AsyncComp" v-else v-bind="$attrs" />
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  loader: { type: Function, required: true },
  skeletonClass: { type: String, default: '' },
})

const triggerRef = ref(null)
const ready = ref(false)
const AsyncComp = shallowRef(null)

const { stop } = useIntersectionObserver(
  triggerRef,
  ([{ isIntersecting }]) => {
    if (!isIntersecting || ready.value) return
    props.loader().then(mod => {
      AsyncComp.value = mod.default || mod
      ready.value = true
    })
    stop()
  },
  { threshold: 0.01 }
)
</script>
