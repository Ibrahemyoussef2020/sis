<template>
  <section class="bg-[#f7f9fb] py-24 relative overflow-hidden">
    <!-- Subtle background decoration -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">

      <!-- Section Header -->
      <div class="text-center mb-12 reveal reveal-fade-up">
        <span class="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-3">Who We Are</span>
        <h2 class="text-4xl font-bold text-[#3e7fca] mb-4">Our Mission &amp; Vision</h2>
        <p class="text-[#444655] text-lg max-w-2xl mx-auto">
          Driving industrial excellence through intelligent IT-OT convergence across the MENA region.
        </p>
      </div>

      <!-- Supporting Image -->
      <div class="mb-12 reveal reveal-fade-up">
        <div class="relative rounded-2xl overflow-hidden border border-[#e6e8ea] shadow-lg">
          <img
            src="@/images/about-image.png"
            alt="Industrial automation and control systems"
            class="w-full h-auto object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

        <!-- Mission Card -->
        <div class="reveal reveal-fade-up bg-white rounded-2xl border border-[#e6e8ea] shadow-md p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div class="absolute top-0 right-0 w-56 h-56 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-300"></div>

          <!-- Icon -->
          <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-[#3e7fca] text-white mb-7 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span class="material-symbols-outlined" style="font-size: 26px;">flag</span>
          </div>

          <!-- Label -->
          <span class="text-xs font-semibold tracking-widest uppercase text-[#3e7fca]/60 mb-2 block">Our Mission</span>

          <!-- Title -->
          <h3 class="text-2xl font-bold text-[#191c1e] mb-4 leading-tight">Empowering Industrial Enterprises</h3>

          <!-- Description -->
          <p class="text-[#444655] text-base leading-relaxed mb-7">
            To empower industrial enterprises by architecting seamless, secure, and scalable connections between the physical shop floor and the digital enterprise. We transform raw operational data into actionable strategic intelligence.
          </p>

          <!-- Checklist -->
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-[#191c1e]">
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#3e7fca]/10 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#3e7fca]" style="font-size: 14px;">check</span>
              </span>
              <span class="text-sm font-medium">Eliminate data silos across operations</span>
            </li>
            <li class="flex items-center gap-3 text-[#191c1e]">
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#3e7fca]/10 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#3e7fca]" style="font-size: 14px;">check</span>
              </span>
              <span class="text-sm font-medium">Ensure critical system uptime</span>
            </li>
            <li class="flex items-center gap-3 text-[#191c1e]">
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#3e7fca]/10 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#3e7fca]" style="font-size: 14px;">check</span>
              </span>
              <span class="text-sm font-medium">Drive measurable operational excellence</span>
            </li>
          </ul>
        </div>

        <!-- Vision Card -->
        <div id="mission-vision" class="reveal reveal-fade-up bg-white rounded-2xl border border-[#e6e8ea] shadow-md p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300" style="transition-delay: 0.12s">
          <div class="absolute top-0 right-0 w-56 h-56 bg-secondary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/10 transition-colors duration-300"></div>

          <!-- Icon -->
          <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-[#515f74] text-white mb-7 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span class="material-symbols-outlined" style="font-size: 26px;">visibility</span>
          </div>

          <!-- Label -->
          <span class="text-xs font-semibold tracking-widest uppercase text-[#515f74]/60 mb-2 block">Our Vision</span>

          <!-- Title -->
          <h3 class="text-2xl font-bold text-[#191c1e] mb-4 leading-tight">Leading the MENA Region</h3>

          <!-- Description -->
          <p class="text-[#444655] text-base leading-relaxed mb-7">
            To be the undisputed leader in IT-OT convergence across the MENA region, setting the global standard for how modern industries interact with, process, and leverage operational data for a sustainable future.
          </p>

          <!-- Checklist -->
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-[#191c1e]">
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#515f74]/10 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#515f74]" style="font-size: 14px;">check</span>
              </span>
              <span class="text-sm font-medium">Pioneer intelligent automation</span>
            </li>
            <li class="flex items-center gap-3 text-[#191c1e]">
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#515f74]/10 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#515f74]" style="font-size: 14px;">check</span>
              </span>
              <span class="text-sm font-medium">Cultivate regional technical mastery</span>
            </li>
            <li class="flex items-center gap-3 text-[#191c1e]">
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#515f74]/10 flex items-center justify-center">
                <span class="material-symbols-outlined text-[#515f74]" style="font-size: 14px;">check</span>
              </span>
              <span class="text-sm font-medium">Lead the transition to Industry 5.0</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom CTA strip – dark navy background -->
      <div class="rounded-2xl bg-[#3e7fca] px-10 py-12 text-center text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 32px 32px;"></div>
        <div class="relative z-10">
          <h3 class="text-2xl font-bold mb-3">Why Choose SiS?</h3>
          <p class="text-[#bcc6ff] text-base max-w-2xl mx-auto leading-relaxed">
            We combine deep industry expertise with cutting-edge technology to deliver sustainable, future-proof industrial solutions across the MENA region.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup></script>
