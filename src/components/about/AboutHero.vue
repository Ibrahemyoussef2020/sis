<template>
  <section class="relative min-h-screen lg:pt-10 flex items-center overflow-hidden" style="background: var(--bg-section-1)">
    <div class="pointer-events-none absolute inset-0" style="background-image: radial-gradient(rgba(126,165,224,0.06) 1px, transparent 1px); background-size: 28px 28px;" aria-hidden="true"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Text -->
        <div class="reveal reveal-fade-up py-12 lg:py-0">
          <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--bg-accent-10)] dark:bg-white/10 border border-[var(--border-accent-20)] dark:border-white/20 text-sis-accent dark:text-white mb-8 backdrop-blur-md">
            <span class="material-symbols-outlined text-sm text-sis-accent dark:text-blue-200">memory</span>
            <span class="text-[11px] font-bold tracking-[0.2em] uppercase">Pioneering Industrial Evolution</span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-sis-text dark:text-white mb-8 leading-[1.1] tracking-tight">
            Architects of the <br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-sis-accent to-sis-light dark:from-blue-200 dark:to-white">4th Industrial Revolution</span>
          </h1>

          <p class="text-sis-muted dark:text-white/80 max-w-2xl text-base md:text-lg leading-relaxed mb-0">
            Superior Integrated Solutions (SiS) bridges the critical divide
            between Operational Technology and Information Technology, engineering
            the intelligent ecosystems of tomorrow.
          </p>

          <div class="flex flex-wrap gap-4 mt-10">
            <button class="bg-sis-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all active:scale-95 duration-300">
              Discover Our Expertise
            </button>
          </div>
        </div>

        <!-- Right: Image (hidden on mobile, visible on lg+) -->
        <div class="hidden lg:block reveal reveal-fade-up rounded-xl overflow-hidden border border-[var(--border-30)] dark:border-white/10 shadow-xl" style="transition-delay: 0.15s">
          <img
            alt="Industrial Automation Control Center"
            class="w-full h-auto object-cover block"
            src="@/images/about-hero.webp"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="flex justify-center">
        <router-link
          to="#why-it-ot"
          class="flex flex-col items-center animate-bounce opacity-60 hover:opacity-100 transition-opacity"
        >
          <span class="text-sis-muted dark:text-white/60 text-sm mb-2 font-semibold tracking-widest uppercase">Why ITOT</span>
          <span class="material-symbols-outlined text-sis-muted dark:text-white/60">keyboard_arrow_down</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
