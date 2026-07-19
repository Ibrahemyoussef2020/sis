<template>
  <div ref="triggerRef">
    <div v-if="!ready" class="overflow-hidden rounded-xl" :class="skeletonClass">
      <slot name="skeleton">
        <div class="flex h-64 w-full items-center justify-center bg-[rgba(126,165,224,0.04)]">
          <div class="h-8 w-8 animate-spin rounded-full border-2 border-[#37b6ff] border-t-transparent"></div>
        </div>
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
