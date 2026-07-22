<template>
  <section class="relative border-y border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] py-24 overflow-hidden" style="background: var(--bg-section-1)">
    <div class="absolute top-0 left-0 w-96 h-96 bg-[var(--accent-blue)]/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-teal)]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-12 reveal reveal-fade-up">
        <span class="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-sis-accent dark:text-[var(--accent-blue)]/70 mb-3">Who We Are</span>
        <h2 class="text-4xl font-bold text-sis-accent dark:text-[var(--accent-blue)] mb-4">Our Mission &amp; Vision</h2>
        <p class="text-sis-muted dark:text-[#aebfd8] text-lg max-w-2xl mx-auto">Driving industrial excellence through intelligent IT-OT convergence across the MENA region.</p>
      </div>

      <div class="mb-12 reveal reveal-fade-up">
        <div class="relative rounded-2xl overflow-hidden border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] shadow-lg">
          <img src="@/images/about-image.webp" alt="Industrial automation and control systems" class="w-full h-auto object-cover" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="reveal reveal-fade-up rounded-2xl border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] shadow-md p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300" style="background: var(--bg-card-1)">
          <div class="absolute top-0 right-0 w-56 h-56 bg-[var(--accent-blue)]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[var(--accent-blue)]/10 transition-colors duration-300"></div>
          <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-sis-accent text-white dark:bg-[var(--accent-blue)] dark:text-[#04121f] mb-7 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span class="material-symbols-outlined" style="font-size: 26px;">flag</span>
          </div>
          <span class="text-xs font-semibold tracking-widest uppercase text-sis-accent dark:text-[var(--accent-blue)]/60 mb-2 block">Our Mission</span>
          <h3 class="text-2xl font-bold text-sis-text dark:text-[#eaf1fb] mb-4 leading-tight">Empowering Industrial Enterprises</h3>
          <p class="text-sis-muted dark:text-[#aebfd8] text-base leading-relaxed mb-7">To empower industrial enterprises by architecting seamless, secure, and scalable connections between the physical shop floor and the digital enterprise. We transform raw operational data into actionable strategic intelligence.</p>
          <ul class="space-y-3">
            <li v-for="item in missionItems" :key="item" class="flex items-center gap-3 text-sis-text dark:text-[#eaf1fb]">
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--bg-accent-10)] dark:bg-[var(--accent-blue)]/10 flex items-center justify-center"><span class="material-symbols-outlined text-sis-accent dark:text-[var(--accent-blue)]" style="font-size: 14px;">check</span></span>
              <span class="text-sm font-medium">{{ item }}</span>
            </li>
          </ul>
        </div>

        <div id="mission-vision" class="reveal reveal-fade-up rounded-2xl border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] shadow-md p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300" style="background: var(--bg-card-1); transition-delay: 0.12s">
          <div class="absolute top-0 right-0 w-56 h-56 bg-[var(--accent-teal)]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[var(--accent-teal)]/10 transition-colors duration-300"></div>
          <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--accent-teal)] text-[#04121f] mb-7 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span class="material-symbols-outlined" style="font-size: 26px;">visibility</span>
          </div>
          <span class="text-xs font-semibold tracking-widest uppercase text-[var(--accent-teal)]/60 mb-2 block">Our Vision</span>
          <h3 class="text-2xl font-bold text-sis-text dark:text-[#eaf1fb] mb-4 leading-tight">Leading the MENA Region</h3>
          <p class="text-sis-muted dark:text-[#aebfd8] text-base leading-relaxed mb-7">To be the undisputed leader in IT-OT convergence across the MENA region, setting the global standard for how modern industries interact with, process, and leverage operational data for a sustainable future.</p>
          <ul class="space-y-3">
            <li v-for="item in visionItems" :key="item" class="flex items-center gap-3 text-sis-text dark:text-[#eaf1fb]">
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-teal)]/10 flex items-center justify-center"><span class="material-symbols-outlined text-[var(--accent-teal)]" style="font-size: 14px;">check</span></span>
              <span class="text-sm font-medium">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="rounded-2xl bg-sis-accent dark:bg-[var(--accent-blue)] px-10 py-12 text-center relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#04121f 1px, transparent 1px); background-size: 32px 32px;"></div>
        <div class="relative z-10">
          <h3 class="text-2xl font-bold text-white dark:text-[#04121f] mb-3">Why Choose SiS?</h3>
          <p class="text-white/70 dark:text-[#04121f]/70 text-base max-w-2xl mx-auto leading-relaxed">We combine deep industry expertise with cutting-edge technology to deliver sustainable, future-proof industrial solutions across the MENA region.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const missionItems = [
  'Eliminate data silos across operations',
  'Ensure critical system uptime',
  'Drive measurable operational excellence',
]

const visionItems = [
  'Pioneer intelligent automation',
  'Cultivate regional technical mastery',
  'Lead the transition to Industry 5.0',
]
</script>
