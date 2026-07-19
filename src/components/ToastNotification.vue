<template>
  <Teleport to="body">
    <transition name="toast-slide">
      <div
        v-if="visible"
        class="fixed top-6 right-6 z-[99999] flex items-center gap-4 bg-white rounded-2xl border border-[#e6e8ea] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-5 pr-4 max-w-md"
      >
        <div class="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined" style="font-size: 22px;">check</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-[#191c1e] text-sm">{{ title }}</p>
          <p class="text-xs text-[#6b7280] mt-0.5">{{ message }}</p>
        </div>
        <button
          @click="close"
          class="w-8 h-8 rounded-full hover:bg-[#f7f9fb] flex items-center justify-center text-[#9ca3af] hover:text-[#444655] transition-colors flex-shrink-0"
        >
          <span class="material-symbols-outlined" style="font-size: 18px;">close</span>
        </button>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Message Sent' },
  message: { type: String, default: "We'll get back to you within 24 hours." },
  duration: { type: Number, default: 5000 },
})

const emit = defineEmits(['close'])
const visible = ref(false)
let timer = null

onMounted(() => {
  visible.value = true
  timer = setTimeout(close, props.duration)
})

function close() {
  visible.value = false
  clearTimeout(timer)
  setTimeout(() => emit('close'), 300)
}
</script>

