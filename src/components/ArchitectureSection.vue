<template>
  <section id="architecture" class="relative overflow-hidden py-24 px-6 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-sis-text dark:text-[#dae2fd]">

    <video
      class="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
      :src="increasedNumbersVideo"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    ></video>

    <div class="absolute inset-0 z-[1] pointer-events-none" style="background: var(--overlay-bg);" aria-hidden="true"></div>

    <div aria-hidden="true" class="absolute inset-0 pointer-events-none z-[2]" style="background-image: radial-gradient(circle at 1.5px 1.5px, var(--dot-mesh) 1px, transparent 0); background-size: 28px 28px;"></div>

    <div class="relative z-[1] mx-auto max-w-[1400px] lg:mx-20">
      <header class="mb-12 max-w-[64ch]" data-reveal>
        <span class="inline-flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] uppercase text-[var(--accent-blue)]">
          <span class="block h-px w-8 bg-[var(--accent-blue)]"></span>
          System Architecture
        </span>
        <h2 class="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em] text-sis-text dark:text-[#dae2fd] m-0 mt-4">
          {{ architecture?.title ?? 'Vendor-Agnostic Industrial Digital Architecture' }}
        </h2>
        <p class="max-w-[56ch] text-[15px] leading-relaxed text-sis-muted dark:text-[#a8b3cf] m-0 mt-3">{{ architecture?.subtitle ?? 'Intelligent OT-IT Integration Strategy' }}</p>
      </header>

      <div class="flex flex-col gap-8">

        <!-- ===================== DIAGRAM CARD (fully HTML/CSS, no SVG art) ===================== -->
        <div class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] rounded-xl p-4 sm:p-6 lg:p-8" data-reveal>

          <div class="lg:flex lg:gap-5">

            <!-- Left rail: APPS (desktop/tablet only) -->
            <aside
              class="hidden md:flex md:flex-col md:w-24 lg:w-28 shrink-0 rounded-lg border p-3 gap-2.5 text-center mb-4 md:mb-0"
              style="background: var(--svg-node-fill); border-color: var(--svg-node-stroke);"
            >
              <h5 class="text-[10px] font-bold tracking-[0.14em] uppercase m-0" style="color: var(--svg-text-primary);">Apps</h5>
              <div class="w-6 h-px mx-auto" style="background: var(--svg-flow);"></div>
              <ul class="list-none p-0 m-0 space-y-2 text-[10px] font-medium leading-snug" style="color: var(--svg-text-secondary);">
                <li>Dashboards</li>
                <li>Alarms</li>
                <li>Reporting</li>
                <li>Pred. Maint.</li>
                <li>Asset Perf.</li>
              </ul>
              <div class="w-6 h-px mx-auto opacity-40" style="background: var(--svg-flow);"></div>
              <p class="text-[8.5px] leading-tight opacity-75 m-0" style="color: var(--svg-text-label);">consumes from all layers</p>
            </aside>

            <!-- Main stack: Cloud -> Edge -> Field -->
            <div class="flex-1 min-w-0 flex flex-col gap-3">

              <!-- CLOUD LAYER -->
              <div class="rounded-lg border p-4" style="background: var(--svg-node-fill); border-color: var(--svg-node-stroke);">
                <div class="flex items-baseline justify-between flex-wrap gap-x-3 gap-y-0.5 mb-3">
                  <h5 class="text-[11px] sm:text-xs font-bold tracking-[0.1em] uppercase m-0" style="color: var(--svg-text-primary);">Cloud Layer</h5>
                  <span class="text-[10px] sm:text-[11px] opacity-80" style="color: var(--svg-text-secondary);">{{ architecture?.cloudLayer?.provider ?? 'Microsoft Azure' }}</span>
                </div>

                <div v-if="loaded" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  <div
                    v-for="step in architecture.cloudLayer.steps"
                    :key="step"
                    class="rounded-md border px-2 py-2 flex items-center justify-center text-center text-[10.5px] sm:text-[11px] font-semibold leading-snug break-words min-h-[2.5rem]"
                    style="background: rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b), 0.16); border-color: rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b), 0.32); color: var(--svg-text-primary);"
                  >{{ step }}</div>
                </div>
                <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  <Skeleton v-for="n in 5" :key="n" class="h-10 rounded-md" />
                </div>
              </div>

              <!-- arrow: data -->
              <div class="flex items-center justify-center gap-1.5 text-[10px] opacity-70 select-none" style="color: var(--svg-text-label);">
                <span>data</span>
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17l-6-7h12z"/></svg>
              </div>

              <!-- EDGE LAYER -->
              <div class="rounded-lg border p-4" style="background: var(--svg-node-fill); border-color: var(--svg-node-stroke);">
                <div class="flex items-baseline justify-between flex-wrap gap-x-3 gap-y-0.5 mb-3">
                  <h5 class="text-[11px] sm:text-xs font-bold tracking-[0.1em] uppercase m-0" style="color: var(--svg-text-primary);">Edge Layer</h5>
                  <span class="text-[10px] sm:text-[11px] opacity-80" style="color: var(--svg-text-secondary);">Intelligence at Source</span>
                </div>

                <div v-if="loaded" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  <div
                    v-for="item in architecture.edgeLayer"
                    :key="item"
                    class="rounded-md border px-2 py-2 flex items-center justify-center text-center text-[10.5px] sm:text-[11px] font-semibold leading-snug break-words min-h-[2.5rem]"
                    style="background: rgba(var(--accent-teal-r), var(--accent-teal-g), var(--accent-teal-b), 0.16); border-color: rgba(var(--accent-teal-r), var(--accent-teal-g), var(--accent-teal-b), 0.3); color: var(--svg-text-primary);"
                  >{{ item }}</div>
                </div>
                <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  <Skeleton v-for="n in 5" :key="n" class="h-10 rounded-md" />
                </div>
              </div>

              <!-- arrow: command -->
              <div class="flex items-center justify-center gap-1.5 text-[10px] opacity-70 select-none" style="color: var(--svg-text-label);">
                <span>command</span>
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17l-6-7h12z"/></svg>
              </div>

              <!-- FIELD LAYER -->
              <div class="rounded-lg border p-4" style="background: var(--svg-node-fill); border-color: var(--svg-node-stroke);">
                <div class="flex items-baseline justify-between flex-wrap gap-x-3 gap-y-0.5 mb-3">
                  <h5 class="text-[11px] sm:text-xs font-bold tracking-[0.1em] uppercase m-0" style="color: var(--svg-text-primary);">Field Layer</h5>
                  <span class="text-[10px] sm:text-[11px] opacity-80" style="color: var(--svg-text-secondary);">Physical Infrastructure</span>
                </div>

                <div v-if="loaded" class="flex flex-col gap-2">
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div
                      v-for="item in architecture.fieldLayer.slice(0, 4)"
                      :key="item"
                      class="rounded-md border px-2 py-2 flex items-center justify-center text-center text-[10.5px] sm:text-[11px] font-semibold leading-snug break-words min-h-[2.25rem]"
                      style="background: rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b), 0.13); border-color: rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b), 0.25); color: var(--svg-text-primary);"
                    >{{ item }}</div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div
                      v-for="item in architecture.fieldLayer.slice(4)"
                      :key="item"
                      class="rounded-md border px-2 py-2 flex items-center justify-center text-center text-[10.5px] sm:text-[11px] font-semibold leading-snug break-words min-h-[2.25rem]"
                      style="background: rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b), 0.13); border-color: rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b), 0.25); color: var(--svg-text-primary);"
                    >{{ item }}</div>
                  </div>
                </div>
                <div v-else class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <Skeleton v-for="n in 4" :key="n" class="h-9 rounded-md" />
                </div>
              </div>
            </div>

            <!-- Right rail: SECURITY (desktop/tablet only) -->
            <aside
              class="hidden md:flex md:flex-col md:w-24 lg:w-28 shrink-0 rounded-lg border p-3 gap-2.5 text-center mt-4 md:mt-0"
              style="background: var(--svg-node-fill); border-color: var(--svg-node-stroke);"
            >
              <h5 class="text-[10px] font-bold tracking-[0.14em] uppercase m-0" style="color: var(--svg-text-primary);">Security</h5>
              <div class="w-6 h-px mx-auto" style="background: var(--svg-flow);"></div>
              <ul class="list-none p-0 m-0 space-y-2 text-[10px] font-medium leading-snug" style="color: var(--svg-text-secondary);">
                <li>Segment</li>
                <li>Firewalls</li>
                <li>Access Ctrl</li>
                <li>Encryption</li>
                <li>Monitoring</li>
              </ul>
              <div class="w-6 h-px mx-auto opacity-40" style="background: var(--svg-flow);"></div>
              <p class="text-[8.5px] leading-tight opacity-75 m-0" style="color: var(--svg-text-label);">protects all layers</p>
            </aside>
          </div>

          <!-- Mobile-only summary of Apps & Security (hidden md+ since rails show them there) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 md:hidden">
            <div class="rounded-lg border p-3" style="background: var(--svg-node-fill); border-color: var(--svg-node-stroke);">
              <h5 class="text-[10px] font-bold tracking-[0.12em] uppercase m-0 mb-1.5" style="color: var(--svg-text-primary);">Applications</h5>
              <p class="text-[10.5px] leading-relaxed m-0" style="color: var(--svg-text-secondary);">Dashboards &middot; Alarms &middot; Reporting &middot; Pred. Maint. &middot; Asset Perf.</p>
            </div>
            <div class="rounded-lg border p-3" style="background: var(--svg-node-fill); border-color: var(--svg-node-stroke);">
              <h5 class="text-[10px] font-bold tracking-[0.12em] uppercase m-0 mb-1.5" style="color: var(--svg-text-primary);">Cybersecurity</h5>
              <p class="text-[10.5px] leading-relaxed m-0" style="color: var(--svg-text-secondary);">Segmentation &middot; Firewalls &middot; Access Ctrl &middot; Encryption &middot; Monitoring</p>
            </div>
          </div>

          <!-- bottom banner -->
          <div class="mt-4 rounded-md py-2 px-3 text-center text-[10px] sm:text-[11px]" style="background: rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b), 0.1); color: var(--svg-text-label);">
            Vendor&#8209;Agnostic &nbsp;&bull;&nbsp; OT&#8209;IT Converged &nbsp;&bull;&nbsp; Defense&#8209;in&#8209;Depth Security
          </div>
        </div>
        <!-- ===================== END DIAGRAM CARD ===================== -->

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Protocols card -->
          <div class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] rounded-xl p-6" data-reveal>
            <h4 class="flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.1em] uppercase text-sis-muted dark:text-[#a8b3cf] m-0 mb-4">
              <svg class="w-[0.85rem] h-[0.85rem] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
              </svg>
              Protocols &amp; Components
            </h4>
            <div class="flex flex-wrap gap-[0.4rem]">
              <button
                v-for="p in architecture?.protocols"
                :key="p"
                class="px-3 py-[0.35rem] rounded-full text-[0.72rem] font-medium cursor-pointer border transition-all duration-200"
                :class="activeChip === p
                  ? 'bg-[var(--accent-blue)] text-[#04121f] dark:text-[#04121f] border-[var(--accent-blue)] shadow-[0_2px_10px_rgba(var(--accent-blue-r),var(--accent-blue-g),var(--accent-blue-b),0.35)]'
                  : 'border-[rgba(126,165,224,0.18)] bg-[rgba(126,165,224,0.06)] text-sis-muted dark:text-[#a8b3cf] hover:bg-[rgba(126,165,224,0.12)] hover:border-[rgba(126,165,224,0.3)]'"
                @click="activeChip = p"
              >{{ p }}</button>
            </div>
          </div>

          <!-- Detail panel -->
          <div class="relative overflow-hidden rounded-xl p-6 border" data-reveal :class="activeChip ? 'bg-[rgba(var(--accent-blue-r),var(--accent-blue-g),var(--accent-blue-b),0.06)] border-[rgba(var(--accent-blue-r),var(--accent-blue-g),var(--accent-blue-b),0.18)]' : 'card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)]'">
            <div v-if="activeChip" class="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none" style="background: rgba(var(--accent-blue-r),var(--accent-blue-g),var(--accent-blue-b),0.08); filter: blur(2.5rem);" aria-hidden="true"></div>
            <div class="relative z-[1]">
              <span class="block text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[var(--accent-blue)] mb-2">Detail View</span>
              <h4 class="flex items-center gap-2 text-sm font-semibold text-sis-text dark:text-[#dae2fd] m-0 mb-2">
                {{ activeChip }}
                <svg class="w-[0.85rem] h-[0.85rem] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="color: var(--accent-teal);">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </h4>
              <p class="text-[0.78rem] leading-[1.6] text-sis-muted dark:text-[#a8b3cf] m-0">{{ activeChipDetail }}</p>
              <hr class="border-0 border-t border-[rgba(126,165,224,0.1)] my-3"/>
              <div class="flex flex-col gap-1.5">
                <div class="flex justify-between items-center text-[0.7rem]">
                  <span class="text-sis-muted dark:text-[#a8b3cf]">Security Level</span>
                  <span class="font-bold text-[var(--accent-blue)]">Highest</span>
                </div>
                <div class="flex justify-between items-center text-[0.7rem]">
                  <span class="text-sis-muted dark:text-[#a8b3cf]">Latency</span>
                  <span class="font-bold text-[var(--accent-blue)]">&lt; 10ms</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Partners -->
          <div class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] rounded-xl p-6" data-reveal>
            <h4 class="flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.1em] uppercase text-sis-muted dark:text-[#a8b3cf] m-0 mb-4">
              <svg class="w-[0.85rem] h-[0.85rem] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M15 11l4.9-2.45a2 2 0 000-3.1L14 3a2 2 0 00-1.84 0L9 5M15 11l-6 3M15 11v9l-6-3V8l6 3zM9 5L4.1 7.45a2 2 0 000 3.1L9 13M9 5v3"/>
              </svg>
              Architecture Partners
            </h4>
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="partner in architecture?.partners"
                :key="partner"
                class="border rounded-md px-2 py-[0.55rem] text-center text-[0.72rem] font-bold text-sis-muted dark:text-[#a8b3cf] break-words transition-all duration-200"
                :class="activePartner === partner
                  ? 'border-[var(--accent-blue)] bg-[rgba(var(--accent-blue-r),var(--accent-blue-g),var(--accent-blue-b),0.1)] text-[var(--accent-blue)]'
                  : 'border-[rgba(126,165,224,0.16)] bg-[rgba(126,165,224,0.05)] hover:bg-[rgba(126,165,224,0.1)] hover:border-[rgba(126,165,224,0.3)] cursor-default'"
                @mouseenter="activePartner = partner"
                @mouseleave="activePartner = ''"
              >{{ partner }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import Skeleton from '@/components/Skeleton.vue'
import increasedNumbersVideo from '@/videos/increased-numbers.mp4'

const siteStore = useSiteStore()
const { architecture, loaded } = storeToRefs(siteStore)
const activeChip = ref('OPC UA')
const activePartner = ref('')

const activeChipDetail = computed(() => {
  if (!architecture.value) return 'Select a protocol to see more detail.'
  return `Selected: ${activeChip.value}. This protocol facilitates secure, platform-independent information exchange across enterprise levels — from the sensor to the cloud.`
})
</script>