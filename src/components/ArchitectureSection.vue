<template>
  <section id="architecture" class="relative overflow-x-hidden px-4 sm:px-8 py-8 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-sis-text dark:text-[#e8edf8]">

    <!-- Layer 1: Video background -->
    <video
      class="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
      :src="increasedNumbersVideo"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    ></video>

    <!-- Layer 2: Isolation overlay (semi-transparent) -->
    <div class="absolute inset-0 z-[1] pointer-events-none" style="background: var(--overlay-bg);" aria-hidden="true"></div>

    <!-- Layer 0.5: Dot mesh (sits above video, below content) -->
    <div class="absolute inset-0 pointer-events-none z-[2]" style="background-image: radial-gradient(circle at 1.5px 1.5px, var(--dot-mesh) 1px, transparent 0); background-size: 28px 28px;" aria-hidden="true"></div>

    <div class="relative z-[3] max-w-[1280px] mx-auto">

      <!-- ── Main grid: canvas 8 cols + sidebar 4 cols ──────────── -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">

        <!-- LEFT CANVAS -->
        <div class="flex flex-col gap-6 min-w-0">

          <header class="mb-4" data-reveal>
            <h2 class="text-[clamp(1.6rem,3.5vw,2rem)] font-bold tracking-[-0.02em] leading-[1.2] text-sis-text dark:text-[#e8edf8] m-0 mb-[0.4rem]">{{ architecture?.title ?? 'Vendor-Agnostic Industrial Digital Architecture' }}</h2>
            <p class="text-base font-normal text-sis-muted dark:text-[#a8b3cf] m-0">{{ architecture?.subtitle ?? 'Intelligent OT-IT Integration Strategy' }}</p>
          </header>

          <!-- Cloud Layer -->
          <div v-if="loaded" class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] p-8" data-reveal>
            <div class="flex items-start justify-between mb-6">
              <div>
                <span class="block text-[0.7rem] font-bold tracking-[0.12em] uppercase text-sis-accent dark:text-[#147fbd] mb-[0.35rem]">Cloud Layer</span>
                <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#153c63] m-0 tracking-[-0.01em]">{{ architecture.cloudLayer.provider }}</h3>
              </div>
              <div class="w-10 h-10 rounded-[0.5rem] flex items-center justify-center shrink-0" style="background: rgba(20,127,189,0.1); color: #147fbd;">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="step in architecture.cloudLayer.steps"
                :key="step"
                class="inline-block px-[0.85rem] py-[0.4rem] rounded-[0.5rem] text-[0.8rem] font-medium cursor-default transition-all duration-200 whitespace-nowrap hover:-translate-y-[1px] bg-[rgba(20,127,189,0.12)] text-sis-accent dark:text-[#147fbd] border border-[rgba(20,127,189,0.2)] hover:bg-[rgba(20,127,189,0.18)]"
              >{{ step }}</span>
            </div>
          </div>
          <div v-else class="backdrop-blur-[20px] border border-[rgba(24,105,164,0.16)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] min-h-[8rem]" style="background: linear-gradient(90deg, rgba(12,25,55,0.4) 0%, rgba(20,40,80,0.6) 50%, rgba(12,25,55,0.4) 100%); background-size: 200% 100%;" data-reveal></div>

          <!-- Edge Layer -->
          <div v-if="loaded" class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] p-8" data-reveal>
            <div class="flex items-start justify-between mb-6">
              <div>
                <span class="block text-[0.7rem] font-bold tracking-[0.12em] uppercase text-sis-accent dark:text-[#147fbd] mb-[0.35rem]" style="opacity:.75">Edge Layer</span>
                <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#153c63] m-0 tracking-[-0.01em]">Intelligence at Source</h3>
              </div>
              <div class="w-10 h-10 rounded-[0.5rem] flex items-center justify-center shrink-0" style="background: rgba(20,127,189,0.07); color: #147fbd;">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="2" y="8" width="8" height="8" rx="1"/><rect x="14" y="3" width="8" height="5" rx="1"/>
                  <rect x="14" y="11" width="8" height="5" rx="1"/><rect x="14" y="19" width="8" height="2" rx="1"/>
                  <path d="M10 12h4M10 6h4M10 20h4"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in architecture.edgeLayer"
                :key="item"
                class="inline-block px-[0.85rem] py-[0.4rem] rounded-[0.5rem] text-[0.8rem] font-medium cursor-default transition-all duration-200 whitespace-nowrap hover:-translate-y-[1px] bg-[rgba(126,165,224,0.08)] text-sis-muted dark:text-[#49687f] border border-[rgba(126,165,224,0.18)] hover:border-[#147fbd]"
              >{{ item }}</span>
            </div>
          </div>
          <div v-else class="backdrop-blur-[20px] border border-[rgba(24,105,164,0.16)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] min-h-[8rem]" style="background: linear-gradient(90deg, rgba(12,25,55,0.4) 0%, rgba(20,40,80,0.6) 50%, rgba(12,25,55,0.4) 100%); background-size: 200% 100%;" data-reveal></div>

          <!-- Field Layer -->
          <div v-if="loaded" class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] p-8" data-reveal>
            <div class="flex items-start justify-between mb-6">
              <div>
                <span class="block text-[0.7rem] font-bold tracking-[0.12em] uppercase text-sis-accent dark:text-[#147fbd] mb-[0.35rem]" style="opacity:.55">Field Layer</span>
                <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#153c63] m-0 tracking-[-0.01em]">Physical Infrastructure</h3>
              </div>
              <div class="w-10 h-10 rounded-[0.5rem] flex items-center justify-center shrink-0" style="background: rgba(20,127,189,0.05); color: #147fbd;">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M2 20h20M4 20V10l4-4h8l4 4v10M9 20v-5h6v5M12 4v2"/>
                  <rect x="10" y="12" width="4" height="4" rx="0.5"/>
                </svg>
              </div>
            </div>
            <div class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-[0.625rem]">
              <span
                v-for="item in architecture.fieldLayer"
                :key="item"
                class="bg-[rgba(126,165,224,0.07)] text-sis-muted dark:text-[#49687f] border border-[rgba(126,165,224,0.15)] rounded-[0.5rem] px-3 py-[0.6rem] flex items-center justify-center text-center text-[0.73rem] font-medium leading-[1.35] transition-colors duration-200 cursor-default hover:border-[#147fbd] hover:bg-[rgba(126,165,224,0.12)]"
              >{{ item }}</span>
            </div>
          </div>
          <div v-else class="backdrop-blur-[20px] border border-[rgba(24,105,164,0.16)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] min-h-[8rem]" style="background: linear-gradient(90deg, rgba(12,25,55,0.4) 0%, rgba(20,40,80,0.6) 50%, rgba(12,25,55,0.4) 100%); background-size: 200% 100%;" data-reveal></div>

          <!-- Applications + Cybersecurity row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <!-- Applications -->
            <div v-if="loaded" class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] p-7 flex flex-col gap-4" data-reveal>
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-[0.5rem] flex items-center justify-center shrink-0" style="background: rgba(20,127,189,0.1); color: #147fbd;">
                  <svg class="w-[1.15rem] h-[1.15rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17.5h7M17.5 14v7"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#153c63] m-0">Applications</h3>
                  <p class="text-[0.88rem] text-sis-muted dark:text-[#a8b3cf] m-0 mt-[0.15rem]">Industrial software &amp; orchestration</p>
                </div>
              </div>
              <p class="text-[0.8rem] leading-[1.6] text-sis-muted dark:text-[#a8b3cf] m-0">Edge-to-cloud software solutions designed for high-availability industrial monitoring and real-time operational control.</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="app in architecture.applications" :key="app" class="inline-block px-[0.85rem] py-[0.4rem] rounded-[0.5rem] text-[0.8rem] font-medium cursor-default transition-all duration-200 whitespace-nowrap hover:-translate-y-[1px] bg-[rgba(20,127,189,0.08)] text-sis-text dark:text-[#153c63] border border-[rgba(20,127,189,0.18)] hover:bg-[rgba(20,127,189,0.14)]">{{ app }}</span>
              </div>
              <div class="flex justify-between items-center pt-[0.9rem] border-t border-[rgba(126,165,224,0.1)] mt-auto">
                <span class="text-[0.68rem] font-bold tracking-[0.1em] uppercase text-sis-muted dark:text-[#a8b3cf]">Layer 4–5</span>
                <button class="bg-transparent border-none p-0 cursor-pointer text-[0.75rem] font-semibold text-sis-accent dark:text-[#147fbd] hover:opacity-70">View Docs →</button>
              </div>
            </div>
            <div v-else class="backdrop-blur-[20px] border border-[rgba(24,105,164,0.16)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] min-h-[8rem]" style="background: linear-gradient(90deg, rgba(12,25,55,0.4) 0%, rgba(20,40,80,0.6) 50%, rgba(12,25,55,0.4) 100%); background-size: 200% 100%;" data-reveal></div>

            <!-- Cybersecurity -->
            <div v-if="loaded" class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] p-7 flex flex-col gap-4" data-reveal>
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-[0.5rem] flex items-center justify-center shrink-0" style="background: rgba(224,94,94,0.08); color: #e05e5e;">
                  <svg class="w-[1.15rem] h-[1.15rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#153c63] m-0">Cybersecurity</h3>
                  <p class="text-[0.88rem] text-sis-muted dark:text-[#a8b3cf] m-0 mt-[0.15rem]">Defense-in-depth architecture</p>
                </div>
              </div>
              <p class="text-[0.8rem] leading-[1.6] text-sis-muted dark:text-[#a8b3cf] m-0">Zero-trust security frameworks integrated directly into the OT fabric to protect critical infrastructure from evolving threats.</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="item in architecture.cybersecurity" :key="item" class="inline-block px-[0.85rem] py-[0.4rem] rounded-[0.5rem] text-[0.8rem] font-medium cursor-default transition-all duration-200 whitespace-nowrap hover:-translate-y-[1px] bg-[rgba(20,127,189,0.08)] text-sis-text dark:text-[#153c63] border border-[rgba(20,127,189,0.18)] hover:bg-[rgba(20,127,189,0.14)]">{{ item }}</span>
              </div>
              <div class="flex justify-between items-center pt-[0.9rem] border-t border-[rgba(126,165,224,0.1)] mt-auto">
                <span class="text-[0.68rem] font-bold tracking-[0.1em] uppercase text-sis-muted dark:text-[#a8b3cf]">Cross-Cutting</span>
                <button class="bg-transparent border-none p-0 cursor-pointer text-[0.75rem] font-semibold text-sis-accent dark:text-[#147fbd] hover:opacity-70">Security Audit →</button>
              </div>
            </div>
            <div v-else class="backdrop-blur-[20px] border border-[rgba(24,105,164,0.16)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] min-h-[8rem]" style="background: linear-gradient(90deg, rgba(12,25,55,0.4) 0%, rgba(20,40,80,0.6) 50%, rgba(12,25,55,0.4) 100%); background-size: 200% 100%;" data-reveal></div>

          </div>

          <!-- Integrated Intelligence banner -->
          <div class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] relative overflow-hidden min-h-[10rem] p-8 flex items-end" data-reveal aria-hidden="true">
            <div class="absolute inset-0 z-0 pointer-events-none" style="background-image: linear-gradient(rgba(20,127,189,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20,127,189,0.04) 1px, transparent 1px); background-size: 32px 32px;"></div>
            <div class="relative z-[1]">
              <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#153c63] m-0 mb-[0.4rem]">Integrated Intelligence</h3>
              <p class="text-[0.85rem] text-sis-muted dark:text-[#a8b3cf] max-w-[36rem] m-0 leading-[1.55]">Seamlessly bridge the gap between physical assets and digital insights with our multi-tenant architecture.</p>
            </div>
          </div>

        </div>

        <!-- RIGHT SIDEBAR -->
        <aside class="flex flex-col gap-6 max-w-full lg:sticky lg:top-8">

          <!-- Partners card -->
          <div class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] p-6" data-reveal>
            <h4 class="flex items-center gap-[0.4rem] text-[0.7rem] font-bold tracking-[0.1em] uppercase text-sis-muted dark:text-[#a8b3cf] m-0 mb-4">
              <svg class="w-[0.85rem] h-[0.85rem] shrink-0 stroke-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M15 11l4.9-2.45a2 2 0 000-3.1L14 3a2 2 0 00-1.84 0L9 5M15 11l-6 3M15 11v9l-6-3V8l6 3zM9 5L4.1 7.45a2 2 0 000 3.1L9 13M9 5v3"/>
              </svg>
              Architecture Partners
            </h4>
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="partner in architecture?.partners"
                :key="partner"
                class="bg-[rgba(126,165,224,0.07)] border border-[rgba(24,105,164,0.16)] rounded-[0.5rem] px-2 py-[0.6rem] text-center text-[0.78rem] font-bold text-sis-muted dark:text-[#49687f] cursor-default break-words hover:bg-[rgba(126,165,224,0.12)] hover:border-[rgba(20,127,189,0.3)]"
              >{{ partner }}</div>
            </div>
          </div>

          <!-- Protocols card -->
          <div class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] rounded-[0.875rem] text-sis-muted dark:text-[#a8b3cf] p-6" data-reveal>
            <h4 class="flex items-center gap-[0.4rem] text-[0.7rem] font-bold tracking-[0.1em] uppercase text-sis-muted dark:text-[#a8b3cf] m-0 mb-4">
              <svg class="w-[0.85rem] h-[0.85rem] shrink-0 stroke-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
              </svg>
              Protocols &amp; Components
            </h4>
            <div class="flex flex-wrap gap-[0.4rem]">
              <button
                v-for="p in architecture?.protocols"
                :key="p"
                class="px-3 py-[0.35rem] rounded-full text-[0.75rem] font-medium cursor-pointer border border-[rgba(126,165,224,0.18)] bg-[rgba(126,165,224,0.06)] text-sis-muted dark:text-[#49687f] hover:bg-[rgba(20,127,189,0.1)] hover:border-[rgba(20,127,189,0.3)] active:scale-95 transition-all duration-200"
                :class="[activeChip === p ? 'bg-[#147fbd] text-[#00344d] border-[#147fbd] shadow-[0_2px_8px_rgba(20,127,189,0.35)]' : '']"
                @click="activeChip = p"
              >{{ p }}</button>
            </div>
          </div>

          <!-- Detail panel -->
          <div class="relative overflow-hidden bg-[rgba(20,127,189,0.06)] border border-[rgba(20,127,189,0.18)] rounded-[0.875rem] p-6 group" data-reveal>
            <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150" style="background: rgba(20,127,189,0.1); filter: blur(2.5rem);" aria-hidden="true"></div>
            <div class="relative z-[1]">
              <span class="block text-[0.68rem] font-bold tracking-[0.12em] uppercase text-sis-accent dark:text-[#147fbd] mb-2">Detail View</span>
              <h4 class="flex items-center gap-[0.4rem] text-base font-semibold text-sis-text dark:text-[#e8edf8] m-0 mb-3">
                {{ activeChip }}
                <svg class="w-[0.95rem] h-[0.95rem] shrink-0" viewBox="0 0 24 24" fill="#147fbd" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </h4>
              <p class="text-[0.8rem] leading-[1.6] text-sis-muted dark:text-[#a8b3cf] m-0">{{ activeChipDetail }}</p>
              <hr class="border-0 border-t border-[rgba(20,127,189,0.12)] my-4"/>
              <div class="flex flex-col gap-2">
                <div class="flex justify-between items-center text-[0.75rem]">
                  <span class="text-sis-muted dark:text-[#a8b3cf]">Security Level</span>
                  <span class="font-bold text-sis-accent dark:text-[#147fbd]">Highest</span>
                </div>
                <div class="flex justify-between items-center text-[0.75rem]">
                  <span class="text-sis-muted dark:text-[#a8b3cf]">Latency</span>
                  <span class="font-bold text-sis-accent dark:text-[#147fbd]">&lt; 10ms</span>
                </div>
              </div>
            </div>
          </div>

        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import increasedNumbersVideo from '@/videos/increased-numbers.mp4'

const siteStore = useSiteStore()
const { architecture, loaded } = storeToRefs(siteStore)
const activeChip = ref('OPC UA')

const activeChipDetail = computed(() => {
  if (!architecture.value) return 'Select a protocol to see more detail.'
  return `Selected: ${activeChip.value}. This chip represents a flexible integration point in the OT/IT architecture. It facilitates secure, platform-independent information exchange across enterprise levels — from the sensor to the cloud.`
})
</script>
