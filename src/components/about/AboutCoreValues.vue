<template>
  <section class="relative py-28 px-6 overflow-hidden" style="background: #080d1a;">

    <!-- Spotlight glow — top center radial -->
    <div class="absolute inset-0 pointer-events-none z-0"
         style="background: radial-gradient(ellipse 70% 50% at 50% -5%, rgba(62,127,202,0.35) 0%, transparent 70%);"></div>

    <!-- Subtle bottom-edge glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-40 pointer-events-none z-0"
         style="background: radial-gradient(ellipse 80% 100% at 50% 100%, rgba(30,80,180,0.18) 0%, transparent 80%);"></div>

    <div class="max-w-7xl mx-auto relative z-10">

      <!-- Section Header -->
      <div class="text-center mb-16 reveal reveal-fade-up">

        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-8">
          <span class="w-2 h-2 rounded-full bg-[#3e7fca] inline-block"></span>
          <span class="text-[11px] font-bold tracking-[0.18em] uppercase text-white/70">What We Stand For</span>
        </div>

        <!-- Title -->
        <h2 class="text-5xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tight">
          Core Values &amp; <span class="text-[#3e7fca]">Principles</span>
        </h2>

        <!-- Subtitle -->
        <p class="text-[#8b9ab0] text-lg max-w-xl mx-auto">
          The unshakeable pillars that define every project at Superior Integrated Solutions.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-container">

        <!-- Card 1 — Technical Rigor -->
        <div class="reveal reveal-fade-up group relative rounded-2xl p-7 flex flex-col cursor-default transition-all duration-400
                    border border-white/8 bg-white/4 hover:border-[#3e7fca]/60 hover:bg-white/7
                    hover:shadow-[0_0_28px_0_rgba(62,127,202,0.18)]"
             style="backdrop-filter: blur(12px);">
          <!-- Number + Category -->
          <div class="text-[11px] font-bold tracking-[0.15em] uppercase text-[#4a6080] mb-6">
            01 &mdash; Engineering
          </div>
          <!-- Icon -->
          <div class="w-14 h-14 rounded-xl border border-[#3e7fca]/40 bg-[#3e7fca]/10 flex items-center justify-center mb-7
                      group-hover:bg-[#3e7fca]/20 group-hover:border-[#3e7fca]/70 transition-all duration-300">
            <span class="material-symbols-outlined text-[#3e7fca]" style="font-size:26px;">verified_user</span>
          </div>
          <!-- Title -->
          <h3 class="text-xl font-bold text-white mb-2">Technical Rigor</h3>
          <!-- Blue accent line -->
          <div class="w-8 h-0.5 bg-[#3e7fca] mb-4 rounded-full"></div>
          <!-- Description -->
          <p class="text-[#8b9ab0] text-sm leading-relaxed">
            We apply disciplined engineering principles and rigorous standards to deliver safe, reliable, and high-performance solutions.
          </p>
        </div>

        <!-- Card 2 — MENA Focus (Featured / active) -->
        <div class="reveal reveal-fade-up group relative rounded-2xl p-7 flex flex-col cursor-default transition-all duration-400
                    border border-[#3e7fca]/60 bg-white/6
                    shadow-[0_0_36px_0_rgba(62,127,202,0.22)] hover:shadow-[0_0_52px_0_rgba(62,127,202,0.32)]"
             style="backdrop-filter: blur(12px); transition-delay: 0.08s;">
          <!-- Number + Category -->
          <div class="text-[11px] font-bold tracking-[0.15em] uppercase text-[#4a6080] mb-6">
            02 &mdash; Regional
          </div>
          <!-- Icon -->
          <div class="w-14 h-14 rounded-xl border border-[#3e7fca]/60 bg-[#3e7fca]/15 flex items-center justify-center mb-7
                      group-hover:bg-[#3e7fca]/25 transition-all duration-300">
            <span class="material-symbols-outlined text-[#3e7fca]" style="font-size:26px;">language</span>
          </div>
          <!-- Title -->
          <h3 class="text-xl font-bold text-white mb-2">MENA Focus</h3>
          <!-- Blue accent line -->
          <div class="w-8 h-0.5 bg-[#3e7fca] mb-4 rounded-full"></div>
          <!-- Description -->
          <p class="text-[#8b9ab0] text-sm leading-relaxed mb-6">
            Deep regional expertise and local presence enable us to understand unique challenges and deliver relevant, lasting impact.
          </p>
          <!-- Learn more link -->
          <div class="mt-auto">
            <a href="#" @click.prevent class="inline-flex items-center gap-2 text-[#3e7fca] text-sm font-bold tracking-wide
                               hover:gap-3 hover:text-[#5a9fda] transition-all duration-200 active:scale-[0.97]">
              LEARN MORE
              <span class="material-symbols-outlined" style="font-size:17px;">arrow_forward</span>
            </a>
          </div>
        </div>

        <!-- Card 3 — Customer-Centric -->
        <div class="reveal reveal-fade-up group relative rounded-2xl p-7 flex flex-col cursor-default transition-all duration-400
                    border border-white/8 bg-white/4 hover:border-[#3e7fca]/60 hover:bg-white/7
                    hover:shadow-[0_0_28px_0_rgba(62,127,202,0.18)]"
             style="backdrop-filter: blur(12px); transition-delay: 0.16s;">
          <!-- Number + Category -->
          <div class="text-[11px] font-bold tracking-[0.15em] uppercase text-[#4a6080] mb-6">
            03 &mdash; Partnership
          </div>
          <!-- Icon -->
          <div class="w-14 h-14 rounded-xl border border-[#3e7fca]/40 bg-[#3e7fca]/10 flex items-center justify-center mb-7
                      group-hover:bg-[#3e7fca]/20 group-hover:border-[#3e7fca]/70 transition-all duration-300">
            <span class="material-symbols-outlined text-[#3e7fca]" style="font-size:26px;">gps_fixed</span>
          </div>
          <!-- Title -->
          <h3 class="text-xl font-bold text-white mb-2">Customer-Centric</h3>
          <!-- Blue accent line -->
          <div class="w-8 h-0.5 bg-[#3e7fca] mb-4 rounded-full"></div>
          <!-- Description -->
          <p class="text-[#8b9ab0] text-sm leading-relaxed">
            We build lasting partnerships through transparency, responsiveness, and a relentless focus on our customers' success.
          </p>
        </div>

        <!-- Card 4 — Sustainable Innovation -->
        <div class="reveal reveal-fade-up group relative rounded-2xl p-7 flex flex-col cursor-default transition-all duration-400
                    border border-white/8 bg-white/4 hover:border-[#3e7fca]/60 hover:bg-white/7
                    hover:shadow-[0_0_28px_0_rgba(62,127,202,0.18)]"
             style="backdrop-filter: blur(12px); transition-delay: 0.24s;">
          <!-- Number + Category -->
          <div class="text-[11px] font-bold tracking-[0.15em] uppercase text-[#4a6080] mb-6">
            04 &mdash; Future
          </div>
          <!-- Icon -->
          <div class="w-14 h-14 rounded-xl border border-[#3e7fca]/40 bg-[#3e7fca]/10 flex items-center justify-center mb-7
                      group-hover:bg-[#3e7fca]/20 group-hover:border-[#3e7fca]/70 transition-all duration-300">
            <span class="material-symbols-outlined text-[#3e7fca]" style="font-size:26px;">eco</span>
          </div>
          <!-- Title -->
          <h3 class="text-xl font-bold text-white mb-2">Sustainable Innovation</h3>
          <!-- Blue accent line -->
          <div class="w-8 h-0.5 bg-[#3e7fca] mb-4 rounded-full"></div>
          <!-- Description -->
          <p class="text-[#8b9ab0] text-sm leading-relaxed">
            We embrace innovation responsibly to create sustainable solutions that protect resources and enable future generations.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup></script>
