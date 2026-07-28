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

        <!-- Protocol strip -->
        <div class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] rounded-xl p-5 flex items-center gap-6 flex-wrap" data-reveal>
          <span class="text-[0.72rem] font-semibold tracking-[0.28em] uppercase text-[var(--accent-blue)] shrink-0">Industrial protocols</span>
          <div class="flex flex-wrap gap-2">
            <i v-for="p in architecture?.protocols" :key="p" class="not-italic px-3 py-1 rounded-full text-[0.72rem] font-medium border border-[rgba(126,165,224,0.18)] bg-[rgba(126,165,224,0.06)] text-sis-muted dark:text-[#a8b3cf]">{{ p }}</i>
          </div>
        </div>

        <!-- Security foundation -->
        <div class="card-glass card-glass-border dark:border-[rgba(126,165,224,0.14)] rounded-xl p-6 flex items-start gap-5" data-reveal>
          <div class="w-12 h-12 rounded-xl bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] flex items-center justify-center shrink-0 mt-0.5">
            <UiIcon name="shield" :size="25" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <small class="text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-sis-muted dark:text-[#a8b3cf]">Designed into every layer</small>
              <strong class="text-sm font-bold text-sis-text dark:text-[#dae2fd]">Segmentation &middot; Access control &middot; Encryption &middot; Monitoring</strong>
            </div>
            <p class="mt-2 text-[0.82rem] leading-relaxed text-sis-muted dark:text-[#a8b3cf]">Operational resilience is an architectural requirement, not an afterthought.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import Skeleton from '@/components/Skeleton.vue'
import increasedNumbersVideo from '@/videos/increased-numbers.mp4'
import UiIcon from '@/components/UiIcon.vue'

const siteStore = useSiteStore()
const { architecture, loaded } = storeToRefs(siteStore)
</script>