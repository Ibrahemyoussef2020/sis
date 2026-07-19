<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen pt-[72px] flex items-center justify-center overflow-hidden"
  >
    <img
      alt="Industrial Automation Control Center"
      class="absolute inset-0 w-full h-full object-cover scale-105"
      src="@/images/about-hero.webp"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#0b1326]/60 via-[#0b1326]/30 to-[#0a1f2e]/50"
    ></div>
    <!-- Hexagon Pattern Overlay -->
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.477-27.14 47.01L1.176.476 2.006 0h52.62zm-51.8 1.43l25.488 44.15L53.8 1.43H2.827zM28.318 60L.83 12.385l.83-.477L29.148 59.52l.001.002-.83.477zm25.489-47.615l-.83-.477L25.49 59.52l.83.477 27.509-47.612z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E');
    }"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-[#0b1326]/40 to-transparent pointer-events-none"
    ></div>
    <div
      class="relative z-20 max-w-7xl mx-auto px-container-padding w-full text-center"
    >
      <div class="reveal reveal-fade-up">
        <div
          class="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <span class="material-symbols-outlined text-sm mr-2 text-blue-200"
            >memory</span
          >
          <span class="font-label-caps text-[11px] tracking-[0.2em] uppercase"
            >Pioneering Industrial Evolution</span
          >
        </div>
        <h1
          class="font-headline-lg text-4xl md:text-6xl text-white mb-8 leading-[1.1] tracking-tight"
        >
          Architects of the <br /><span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white"
            >4th Industrial Revolution</span
          >
        </h1>
        <p
          class="text-white/80 max-w-3xl mx-auto font-body-lg text-m md:text-xl leading-relaxed mb-12"
        >
          Superior Integrated Solutions (SiS) bridges the critical divide
          between Operational Technology and Information Technology, engineering
          the intelligent ecosystems of tomorrow.
        </p>
        <div class="flex flex-wrap gap-6 justify-center">
          <button
            class="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 transition-all active:scale-95 duration-300"
            v-if="false"
          >
            Our Mission
          </button>
          <button
            class="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Discover Our Expertise
          </button>
        </div>
      </div>
    </div>
    <!-- Scroll Indicator -->
    <router-link
      to="#why-it-ot"
      class="absolute bottom-5 flex flex-col items-center animate-bounce opacity-70"
    >
      <span class="text-white text-sm mb-2 font-label-caps tracking-widest"
        >Why ITOT</span
      >
      <span class="material-symbols-outlined text-white"
        >keyboard_arrow_down</span
      >
    </router-link>
  </section>
</template>

<script setup></script>
