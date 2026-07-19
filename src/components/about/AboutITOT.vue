<template>
  <section class="relative py-24 overflow-hidden border-y border-[rgba(126,165,224,0.14)]" id="why-it-ot" style="background: linear-gradient(180deg, #0a1120, #070d1a)">
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]"
         style="background-image: linear-gradient(to right, rgba(126,165,224,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(126,165,224,0.3) 1px, transparent 1px); background-size: 100px 100px;">
    </div>
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20 reveal reveal-fade-up">
        <span class="text-xs font-bold tracking-[0.2em] uppercase text-[#37b6ff] mb-4 block">The Convergence</span>
        <h2 class="text-4xl md:text-5xl font-bold text-[#eaf1fb] mb-6">Bridging the IT-OT Divide</h2>
        <p class="text-[#aebfd8] text-lg max-w-3xl mx-auto">
          Historically, the shop floor and the top floor spoke different languages. SiS acts as the master translator, unifying these domains into a single, cohesive nervous system.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        <div class="lg:w-2/5 p-10 rounded-3xl border border-[rgba(126,165,224,0.14)] reveal reveal-slide-in hover:border-[#37b6ff]/30 transition-colors" style="background: linear-gradient(180deg, #0e1728, #0a1120)">
          <div class="w-14 h-14 bg-[rgba(55,182,255,0.1)] text-[#37b6ff] rounded-xl flex items-center justify-center mb-6">
            <span class="material-symbols-outlined text-3xl">precision_manufacturing</span>
          </div>
          <h3 class="text-2xl font-bold text-[#eaf1fb] mb-4">Operational Technology (OT)</h3>
          <p class="text-[#aebfd8] mb-6">The hardware and software that detects or causes a change through the direct monitoring and/or control of industrial equipment, assets, processes, and events.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold border border-[rgba(126,165,224,0.14)] text-[#aebfd8]" style="background: linear-gradient(180deg, #0e1728, #0a1120)">SCADA</span>
            <span class="px-3 py-1 rounded-full text-xs font-bold border border-[rgba(126,165,224,0.14)] text-[#aebfd8]" style="background: linear-gradient(180deg, #0e1728, #0a1120)">PLCs</span>
            <span class="px-3 py-1 rounded-full text-xs font-bold border border-[rgba(126,165,224,0.14)] text-[#aebfd8]" style="background: linear-gradient(180deg, #0e1728, #0a1120)">Sensors</span>
            <span class="px-3 py-1 rounded-full text-xs font-bold border border-[rgba(126,165,224,0.14)] text-[#aebfd8]" style="background: linear-gradient(180deg, #0e1728, #0a1120)">DCS</span>
          </div>
        </div>

        <div class="lg:w-1/5 flex flex-col items-center justify-center reveal reveal-fade-up z-10 py-8 lg:py-0">
          <div class="w-1 bg-gradient-to-b lg:bg-gradient-to-r lg:w-full lg:h-1 from-[#37b6ff] via-[#37b6ff] to-[#5fe0c4] h-24 lg:-mx-4 opacity-50"></div>
          <div class="w-24 h-24 bg-[#37b6ff] text-[#04121f] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(55,182,255,0.4)] my-4 lg:-my-12 z-20">
            <span class="material-symbols-outlined text-4xl">sync_alt</span>
          </div>
          <div class="w-1 bg-gradient-to-b lg:bg-gradient-to-r lg:w-full lg:h-1 from-[#5fe0c4] via-[#37b6ff] to-[#37b6ff] h-24 lg:-mx-4 opacity-50"></div>
        </div>

        <div class="lg:w-2/5 p-10 rounded-3xl border border-[rgba(126,165,224,0.14)] reveal reveal-slide-in hover:border-[#37b6ff]/30 transition-colors" style="background: linear-gradient(180deg, #0e1728, #0a1120); transition-delay: 0.2s">
          <div class="w-14 h-14 bg-[rgba(55,182,255,0.1)] text-[#37b6ff] rounded-xl flex items-center justify-center mb-6">
            <span class="material-symbols-outlined text-3xl">cloud</span>
          </div>
          <h3 class="text-2xl font-bold text-[#eaf1fb] mb-4">Information Technology (IT)</h3>
          <p class="text-[#aebfd8] mb-6">The use of computers, storage, networking, and other physical devices to create, process, store, secure, and exchange all forms of electronic data.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold border border-[rgba(126,165,224,0.14)] text-[#aebfd8]" style="background: linear-gradient(180deg, #0e1728, #0a1120)">ERP</span>
            <span class="px-3 py-1 rounded-full text-xs font-bold border border-[rgba(126,165,224,0.14)] text-[#aebfd8]" style="background: linear-gradient(180deg, #0e1728, #0a1120)">Cloud</span>
            <span class="px-3 py-1 rounded-full text-xs font-bold border border-[rgba(126,165,224,0.14)] text-[#aebfd8]" style="background: linear-gradient(180deg, #0e1728, #0a1120)">Analytics</span>
            <span class="px-3 py-1 rounded-full text-xs font-bold border border-[rgba(126,165,224,0.14)] text-[#aebfd8]" style="background: linear-gradient(180deg, #0e1728, #0a1120)">MES</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
