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
          <h3 class="text-2xl font-bold text-sis-text dark:text-[#eaf1fb] mb-4 leading-tight">Our Mission</h3>
          <p class="text-sis-muted dark:text-[#aebfd8] text-base leading-relaxed">To bridge Operational Technology (OT) and Information Technology (IT) through real-time data-driven decision-making.</p>
        </div>

        <div id="mission-vision" class="reveal reveal-fade-up rounded-2xl border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] shadow-md p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300" style="background: var(--bg-card-1); transition-delay: 0.12s">
          <div class="absolute top-0 right-0 w-56 h-56 bg-[var(--accent-teal)]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[var(--accent-teal)]/10 transition-colors duration-300"></div>
          <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--accent-teal)] text-[#04121f] mb-7 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span class="material-symbols-outlined" style="font-size: 26px;">visibility</span>
          </div>
          <span class="text-xs font-semibold tracking-widest uppercase text-[var(--accent-teal)]/60 mb-2 block">Our Vision</span>
          <h3 class="text-2xl font-bold text-sis-text dark:text-[#eaf1fb] mb-4 leading-tight">Our Vision</h3>
          <p class="text-sis-muted dark:text-[#aebfd8] text-base leading-relaxed">To establish a future standard of predictive maintenance and complete process optimization across the region's heaviest industries.</p>
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
</script>
