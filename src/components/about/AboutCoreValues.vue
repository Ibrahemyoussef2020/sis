<template>
  <section class="relative py-28 px-6 overflow-hidden" style="background: var(--bg-section-1)">
    <div class="absolute inset-0 pointer-events-none z-0"
         style="background: radial-gradient(ellipse 70% 50% at 50% -5%, rgba(62, 127, 202, 0.35) 0%, transparent 70%);">
    </div>

    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-40 pointer-events-none z-0"
         style="background: radial-gradient(ellipse 80% 100% at 50% 100%, rgba(30, 80, 180, 0.18) 0%, transparent 80%);">
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16 reveal reveal-fade-up">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--border-30)] dark:border-white/15 bg-[var(--bg-panel-80)] dark:bg-white/5 backdrop-blur-sm mb-8">
          <span class="w-2 h-2 rounded-full bg-sis-accent dark:bg-[#3e7fca] inline-block"></span>
          <span class="text-[11px] font-bold tracking-[0.18em] uppercase text-sis-muted dark:text-white/70">What We Stand For</span>
        </div>

        <h2 class="text-5xl md:text-6xl font-black text-sis-text dark:text-white mb-5 leading-tight tracking-tight">
          Core Values &amp; <span class="text-sis-accent dark:text-[#3e7fca]">Principles</span>
        </h2>

        <p class="text-sis-muted dark:text-[#8b9ab0] text-lg max-w-xl mx-auto">
          Delivering excellence through a team of highly skilled engineers, blending deep industrial legacy with modern data science.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-container">
        <div v-for="(card, i) in cards" :key="card.title"
             class="reveal reveal-fade-up group relative rounded-xl p-7 flex flex-col cursor-default transition-all duration-400"
             :style="{ backdropFilter: 'blur(12px)', transitionDelay: `${i * 0.08}s`, background: card.featured ? 'var(--bg-card-2)' : 'var(--bg-card-1)', border: card.featured ? '1px solid var(--border-glass)' : '1px solid var(--border-glass)' }"
             :class="card.featured ? 'hover:shadow-xl' : 'hover:shadow-lg'">
          <div class="text-[11px] font-bold tracking-[0.15em] uppercase text-sis-muted dark:text-[#4a6080] mb-6">
            {{ card.number }} &mdash; {{ card.category }}
          </div>
          <div class="w-14 h-14 rounded-xl border border-[var(--bg-accent-40)] dark:border-[#3e7fca]/40 bg-[var(--bg-accent-10)] dark:bg-[#3e7fca]/10 flex items-center justify-center mb-7 group-hover:bg-[var(--bg-accent-20)] dark:group-hover:bg-[#3e7fca]/20 group-hover:border-[var(--border-accent-70)] dark:group-hover:border-[#3e7fca]/70 transition-all duration-300">
            <span class="material-symbols-outlined text-sis-accent dark:text-[#3e7fca]" style="font-size: 26px">{{ card.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-sis-text dark:text-white mb-2">{{ card.title }}</h3>
          <div class="w-8 h-0.5 bg-sis-accent dark:bg-[#3e7fca] mb-4 rounded-full"></div>
          <p class="text-sis-muted dark:text-[#8b9ab0] text-sm leading-relaxed" :class="card.link ? 'mb-6' : ''">
            {{ card.description }}
          </p>
          <div v-if="card.link" class="mt-auto">
            <a href="#" @click.prevent
               class="inline-flex items-center gap-2 text-sis-accent dark:text-[#3e7fca] text-sm font-bold tracking-wide hover:gap-3 hover:text-sis-light dark:hover:text-[#5a9fda] transition-all duration-200 active:scale-[0.97]">
              LEARN MORE
              <span class="material-symbols-outlined" style="font-size: 17px">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    number: '01',
    category: 'Principle',
    icon: 'verified_user',
    title: 'Precision',
    description: 'Execution of highly complex industrial automation and data science with exactitude.',
    link: false,
  },
  {
    number: '02',
    category: 'Principle',
    icon: 'tips_and_updates',
    title: 'Innovation',
    description: 'Pioneering custom software and IIoT approaches to solve legacy challenges.',
    link: false,
  },
  {
    number: '03',
    category: 'Principle',
    icon: 'verified',
    title: 'Reliability',
    description: 'Successfully implementing and sustaining large-scale solutions for critical regional industries.',
    link: false,
  },
]
</script>
