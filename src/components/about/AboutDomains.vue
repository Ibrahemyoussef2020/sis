<template>
  <section class="relative py-24 px-6 overflow-hidden">

    <div class="absolute inset-0 z-0 dark:bg-gradient-to-b dark:from-black dark:via-[#0a1a3a] dark:to-[#1a3a6e]" style="background: var(--bg-section-1);"></div>

    <canvas ref="starsCanvas" class="absolute inset-0 w-full h-full z-10 pointer-events-none hidden dark:block"></canvas>

    <div class="absolute inset-0 z-20 pointer-events-none hidden dark:block"
         style="background: rgba(10, 30, 80, 0.55);"></div>

    <div class="max-w-7xl mx-auto relative z-30">

      <div class="text-center mb-16 reveal reveal-fade-up">
        <span class="inline-block text-xs font-bold tracking-[0.15em] uppercase text-sis-accent dark:text-[#8ba3c7] mb-4">
          Our Domain Expertise
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-sis-text dark:text-white mb-6 tracking-tight">
          Industries We Empower
        </h2>
        <p class="text-sis-muted dark:text-[#a1a1aa] text-lg max-w-2xl mx-auto">
          Deep technical understanding applied across the most demanding industrial sectors.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-container">

        <div class="reveal reveal-fade-up group rounded-2xl p-8 transition-all duration-300 cursor-pointer backdrop-blur-sm"
             :style="{ background: isDark ? '' : 'var(--bg-card-1)', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--border-glass)' }"
             :class="isDark ? 'bg-white/5 hover:bg-[#0d6efd] border-white/10 hover:border-[#0d6efd]' : 'hover:shadow-xl border-[var(--border-30)]'">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-8 transition-colors duration-300"
               :class="isDark ? 'bg-white/10 group-hover:bg-white/20' : 'bg-[var(--bg-accent-10)] group-hover:bg-[var(--bg-accent-20)]'">
            <span class="material-symbols-outlined" :class="isDark ? 'text-white' : 'text-sis-accent'" style="font-size: 22px;">factory</span>
          </div>
          <h3 class="text-2xl font-bold text-sis-text dark:text-white mb-4">Smart Manufacturing</h3>
          <p class="text-sis-muted dark:text-[#a1a1aa] group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
            Implementing predictive maintenance, real-time OEE tracking, and automated quality control for modern production lines.
          </p>
        </div>

        <!-- Energy & Utilities -->
        <div class="reveal reveal-fade-up group rounded-2xl p-8 transition-all duration-300 cursor-pointer backdrop-blur-sm"
             style="background: var(--bg-card-1); border: 1px solid var(--border-glass); transition-delay: 0.1s"
             :class="isDark ? 'bg-white/5 hover:bg-[#0d6efd] border-white/10 hover:border-[#0d6efd]' : 'hover:shadow-xl'">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-8 transition-colors duration-300"
               :class="isDark ? 'bg-white/10 group-hover:bg-white/20' : 'bg-[var(--bg-accent-10)] group-hover:bg-[var(--bg-accent-20)]'">
            <span class="material-symbols-outlined" :class="isDark ? 'text-white' : 'text-sis-accent'" style="font-size: 22px;">bolt</span>
          </div>
          <h3 class="text-2xl font-bold text-sis-text dark:text-white mb-4">Energy &amp; Utilities</h3>
          <p class="text-sis-muted dark:text-[#a1a1aa] group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
            Optimizing grid performance, monitoring remote assets, and ensuring rigorous cybersecurity standards for critical infrastructure.
          </p>
        </div>

        <!-- Logistics & Supply Chain -->
        <div class="reveal reveal-fade-up group rounded-2xl p-8 transition-all duration-300 cursor-pointer backdrop-blur-sm"
             style="background: var(--bg-card-1); border: 1px solid var(--border-glass); transition-delay: 0.2s"
             :class="isDark ? 'bg-white/5 hover:bg-[#0d6efd] border-white/10 hover:border-[#0d6efd]' : 'hover:shadow-xl'">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-8 transition-colors duration-300"
               :class="isDark ? 'bg-white/10 group-hover:bg-white/20' : 'bg-[var(--bg-accent-10)] group-hover:bg-[var(--bg-accent-20)]'">
            <span class="material-symbols-outlined" :class="isDark ? 'text-white' : 'text-sis-accent'" style="font-size: 22px;">local_shipping</span>
          </div>
          <h3 class="text-2xl font-bold text-sis-text dark:text-white mb-4">Logistics &amp; Supply Chain</h3>
          <p class="text-sis-muted dark:text-[#a1a1aa] group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
            End-to-end material tracking, automated warehouse integration, and fleet telematics for transparent operations.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'

const starsCanvas = ref(null)
let animationId = null
const isDark = inject('isDark', ref(false))

onMounted(() => {
  const canvas = starsCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let width = canvas.offsetWidth
  let height = canvas.offsetHeight

  canvas.width = width
  canvas.height = height

  const STAR_COUNT = 120
  const stars = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.8 + 0.3,
    opacity: Math.random() * 0.7 + 0.2,
    speedX: (Math.random() - 0.5) * 0.25,
    speedY: (Math.random() - 0.5) * 0.25,
    twinkleSpeed: Math.random() * 0.02 + 0.005,
    twinkleDir: Math.random() > 0.5 ? 1 : -1,
  }))

  function draw() {
    ctx.clearRect(0, 0, width, height)

    for (const star of stars) {
      star.opacity += star.twinkleSpeed * star.twinkleDir
      if (star.opacity >= 0.95 || star.opacity <= 0.1) {
        star.twinkleDir *= -1
      }

      star.x += star.speedX
      star.y += star.speedY

      if (star.x < 0) star.x = width
      if (star.x > width) star.x = 0
      if (star.y < 0) star.y = height
      if (star.y > height) star.y = 0

      ctx.beginPath()
      const grd = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r * 3)
      grd.addColorStop(0, `rgba(180, 210, 255, ${star.opacity})`)
      grd.addColorStop(1, `rgba(100, 160, 255, 0)`)
      ctx.arc(star.x, star.y, star.r * 3, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()

      ctx.beginPath()
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(220, 235, 255, ${star.opacity})`
      ctx.fill()
    }

    animationId = requestAnimationFrame(draw)
  }

  draw()

  const handleResize = () => {
    width = canvas.offsetWidth
    height = canvas.offsetHeight
    canvas.width = width
    canvas.height = height
  }
  window.addEventListener('resize', handleResize)

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', handleResize)
  })
})
</script>
