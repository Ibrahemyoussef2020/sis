<template>
  <section class="py-24 bg-sis-panel relative overflow-hidden scroll-mt-[72px]" id="why-it-ot">
    <!-- Decorative background lines -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.02]"
         style="background-image: linear-gradient(to right, #1b3a6b 1px, transparent 1px), linear-gradient(to bottom, #1b3a6b 1px, transparent 1px); background-size: 100px 100px;">
    </div>
    <div class="max-w-7xl mx-auto px-container-padding relative z-10">
      <div class="text-center mb-20 reveal reveal-fade-up">
        <span class="font-label-caps text-primary tracking-widest text-sm mb-4 block uppercase">The Convergence</span>
        <h2 class="font-headline-lg text-5xl text-on-surface mb-6">Bridging the IT-OT Divide</h2>
        <p class="text-on-surface-variant font-body-lg text-xl max-w-3xl mx-auto">
          Historically, the shop floor and the top floor spoke different languages. SiS acts as the master translator, unifying these domains into a single, cohesive nervous system.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        <!-- OT Side -->
        <div class="lg:w-2/5 p-10 bg-surface-container-low rounded-3xl border border-outline-variant/30 reveal reveal-slide-in hover:border-primary/30 transition-colors">
          <div class="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
            <span class="material-symbols-outlined text-3xl">precision_manufacturing</span>
          </div>
          <h3 class="font-headline-sm text-2xl mb-4">Operational Technology (OT)</h3>
          <p class="text-on-secondary-container mb-6">
            The hardware and software that detects or causes a change through the direct monitoring and/or control of industrial equipment, assets, processes, and events.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-sis-panel rounded-full text-xs font-bold text-on-surface-variant shadow-sm">SCADA</span>
            <span class="px-3 py-1 bg-sis-panel rounded-full text-xs font-bold text-on-surface-variant shadow-sm">PLCs</span>
            <span class="px-3 py-1 bg-sis-panel rounded-full text-xs font-bold text-on-surface-variant shadow-sm">Sensors</span>
            <span class="px-3 py-1 bg-sis-panel rounded-full text-xs font-bold text-on-surface-variant shadow-sm">DCS</span>
          </div>
        </div>

        <!-- The Bridge -->
        <div class="lg:w-1/5 flex flex-col items-center justify-center reveal reveal-fade-up z-10 py-8 lg:py-0">
          <div class="w-1 bg-gradient-to-b lg:bg-gradient-to-r lg:w-full lg:h-1 from-secondary via-primary to-primary-container h-24 lg:-mx-4 opacity-50"></div>
          <div class="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,74,198,0.4)] my-4 lg:-my-12 z-20 pulse-glow">
            <span class="material-symbols-outlined text-4xl">sync_alt</span>
          </div>
          <div class="w-1 bg-gradient-to-b lg:bg-gradient-to-r lg:w-full lg:h-1 from-primary-container via-primary to-secondary h-24 lg:-mx-4 opacity-50"></div>
        </div>

        <!-- IT Side -->
        <div class="lg:w-2/5 p-10 bg-surface-container-low rounded-3xl border border-outline-variant/30 reveal reveal-slide-in hover:border-primary/30 transition-colors" style="transition-delay: 0.2s">
          <div class="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
            <span class="material-symbols-outlined text-3xl">cloud</span>
          </div>
          <h3 class="font-headline-sm text-2xl mb-4">Information Technology (IT)</h3>
          <p class="text-on-secondary-container mb-6">
            The use of computers, storage, networking, and other physical devices to create, process, store, secure, and exchange all forms of electronic data.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-sis-panel rounded-full text-xs font-bold text-on-surface-variant shadow-sm">ERP</span>
            <span class="px-3 py-1 bg-sis-panel rounded-full text-xs font-bold text-on-surface-variant shadow-sm">Cloud</span>
            <span class="px-3 py-1 bg-sis-panel rounded-full text-xs font-bold text-on-surface-variant shadow-sm">Analytics</span>
            <span class="px-3 py-1 bg-sis-panel rounded-full text-xs font-bold text-on-surface-variant shadow-sm">MES</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
