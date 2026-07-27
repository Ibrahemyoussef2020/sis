<template>
  <section class="relative border-y border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] py-24 px-8 overflow-hidden" style="background: var(--bg-section-2)">
    <div class="w-[calc(100%-64px)] max-w-[1240px] mx-auto">
      <div class="text-center mb-14 reveal reveal-fade-up">
        <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-sis-accent dark:text-[var(--accent-blue)] mb-3">Our journey</span>
        <h2 class="text-sis-text dark:text-[#eaf1fb] leading-[1.04] mt-[17px]" style="font-size: clamp(2.4rem, 4.5vw, 4.75rem); font-weight: 700;">
          A trajectory of<br /><span class="text-sis-accent dark:text-[var(--accent-blue)]">growth.</span>
        </h2>
      </div>

      <div class="relative">
        <div class="hidden lg:block absolute top-0 left-0 right-0 h-px bg-[var(--border-30)] dark:bg-[rgba(126,165,224,0.14)]"></div>
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-0 lg:pt-[30px]">
          <article
            v-for="(milestone, index) in milestones"
            :key="milestone.year"
            class="relative lg:pr-[22px]"
          >
            <div class="hidden lg:flex absolute -top-[35px] left-0 w-[9px] h-[9px] rounded-full z-10" :style="nodeStyle"></div>
            <div class="flex lg:hidden items-start gap-4">
              <div class="flex flex-col items-center">
                <div class="w-[9px] h-[9px] rounded-full mt-[6px] flex-shrink-0 z-10" :style="nodeStyle"></div>
                <div class="w-px flex-1 bg-[var(--border-30)] dark:bg-[rgba(126,165,224,0.14)]" v-if="index < milestones.length - 1"></div>
              </div>
              <div class="pb-8 flex-1">
                <strong class="text-[0.79rem] font-bold text-sis-accent dark:text-[var(--accent-blue)]">{{ milestone.year }}</strong>
                <span class="block mt-[7px] text-[0.77rem] font-bold text-sis-text dark:text-[#eaf1fb] leading-snug" style="font-family: 'Plus Jakarta Sans', Inter, sans-serif;">{{ milestone.title }}</span>
                <p class="mt-[6px] text-[0.64rem] text-sis-muted dark:text-[#aebfd8] leading-relaxed max-w-[190px]">{{ milestone.text }}</p>
              </div>
            </div>
            <div class="hidden lg:block">
              <strong class="text-[0.79rem] font-bold text-sis-accent dark:text-[var(--accent-blue)]">{{ milestone.year }}</strong>
              <span class="block mt-[7px] text-[0.77rem] font-bold text-sis-text dark:text-[#eaf1fb] leading-snug" style="font-family: 'Plus Jakarta Sans', Inter, sans-serif;">{{ milestone.title }}</span>
              <p class="mt-[6px] text-[0.64rem] text-sis-muted dark:text-[#aebfd8] leading-relaxed max-w-[190px]">{{ milestone.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const milestones = [
  { year: '2020', title: 'Foundation', text: 'Industrial engineering foundations and initial operations.' },
  { year: '2021', title: 'Validation', text: 'Refined the offer and established market fit.' },
  { year: '22–23', title: 'Regional presence', text: 'International expansion and larger contracts.' },
  { year: '2024', title: 'Scaling', text: 'Team expansion and broader delivery capacity.' },
  { year: '2025+', title: 'Industrial intelligence', text: 'Emerging technology and continuous innovation.' },
]

const nodeStyle = {
  background: 'var(--sis-accent)',
  boxShadow: '0 0 0 3px var(--bg), 0 0 0 4px var(--sis-accent), 0 0 12px var(--sis-accent)',
  animation: 'timeline-pulse 2s ease-in-out infinite',
}
</script>

<style scoped>
@keyframes timeline-pulse {
  0%, 100% {
    box-shadow: 0 0 0 3px var(--bg), 0 0 0 4px var(--sis-accent), 0 0 8px var(--sis-accent);
  }
  50% {
    box-shadow: 0 0 0 3px var(--bg), 0 0 0 4px var(--sis-accent), 0 0 16px var(--sis-accent), 0 0 24px rgba(47, 126, 199, 0.3);
  }
}
</style>
