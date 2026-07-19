<template>
  <section id="integration" class="relative overflow-hidden text-sis-text dark:text-dark-text" style="background: var(--bg-section-1); padding: 5rem 0;">
    <div
      class="pointer-events-none absolute inset-0"
      style="background-image: radial-gradient(rgba(126,165,224,0.06) 1px, transparent 1px); background-size: 28px 28px;"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto flex max-w-[1140px] flex-col gap-16 px-7">
      <div class="max-w-[60ch]" data-reveal>
        <div class="mb-4 inline-flex items-center gap-4">
          <span class="block h-px w-12 bg-[#37b6ff]"></span>
          <span class="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#37b6ff]">Digital Integration</span>
        </div>
        <h2 class="m-0 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-[clamp(1.75rem,3.3vw,2.5rem)] font-extrabold leading-tight -tracking-[0.025em] text-sis-text dark:text-dark-text">
          What Drives Our OT–IT Journey
        </h2>
        <p class="mt-[14px] max-w-[56ch] text-[15px] leading-relaxed text-[rgba(167,184,212,0.9)] m-0">
          SiS bridges operational and information technology with precision,
          innovation, and reliable digital transformation for industrial clients.
        </p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="flex flex-col">
          <h3 class="m-0 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-xl font-bold text-sis-text dark:text-dark-text" data-reveal>Sectors</h3>
          <p class="mt-2 text-sm text-[rgba(167,184,212,0.9)] m-0" data-reveal>
            Industries we serve with tailored OT–IT solutions.
          </p>
          <div class="mt-6 flex flex-1 flex-col gap-3">
            <template v-if="loaded">
              <div
                v-for="s in sectors"
                :key="s.id"
                class="flex cursor-default items-center gap-4 rounded-xl border border-sis-border/30 dark:border-[rgba(126,165,224,0.14)] p-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:border-sis-accent/40 dark:hover:border-[rgba(126,165,224,0.3)]"
                style="background: var(--bg-card-1)"
                data-reveal
              >
                <div class="min-w-0 flex-1">
                  <div class="text-sm font-semibold text-sis-text dark:text-dark-text">{{ s.label }}</div>
                  <div class="mt-0.5 text-[13px] text-[rgba(167,184,212,0.8)]">{{ s.projects.length }} projects</div>
                </div>
                <div
                  class="h-8 w-8 flex-shrink-0 rounded-full"
                  :style="{ background: s.color }"
                ></div>
              </div>
            </template>
            <template v-else>
              <div class="h-[52px] animate-shimmer rounded-xl bg-[length:200%_100%]" style="background: linear-gradient(90deg, #101b31 0%, #1c2540 50%, #101b31 100%)"></div>
              <div class="h-[52px] animate-shimmer rounded-xl bg-[length:200%_100%]" style="background: linear-gradient(90deg, #101b31 0%, #1c2540 50%, #101b31 100%)"></div>
            </template>
          </div>
        </div>

        <div class="flex flex-col">
          <h3 class="m-0 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-xl font-bold text-sis-text dark:text-dark-text" data-reveal>Capabilities</h3>
          <p class="mt-2 text-sm text-[rgba(167,184,212,0.9)] m-0" data-reveal>
            Our core technical strengths and delivery pillars.
          </p>
          <div class="mt-6 flex flex-1 flex-col gap-3">
            <template v-if="loaded">
              <div
                v-for="col in capabilities.columns"
                :key="col"
                class="cursor-default rounded-xl border border-sis-border/30 dark:border-[rgba(126,165,224,0.14)] p-[14px] text-sm font-medium text-sis-text dark:text-dark-text transition-all duration-200 hover:-translate-y-0.5 hover:border-sis-accent/40 dark:hover:border-[rgba(126,165,224,0.3)]"
                style="background: var(--bg-card-1)"
                data-reveal
              >
                {{ col }}
              </div>
            </template>
            <template v-else>
              <div class="h-[52px] animate-shimmer rounded-xl bg-[length:200%_100%]" style="background: linear-gradient(90deg, #101b31 0%, #1c2540 50%, #101b31 100%)"></div>
              <div class="h-[52px] animate-shimmer rounded-xl bg-[length:200%_100%]" style="background: linear-gradient(90deg, #101b31 0%, #1c2540 50%, #101b31 100%)"></div>
            </template>
          </div>
        </div>
      </div>

      <div class="rounded-xl border border-sis-border/30 dark:border-[rgba(126,165,224,0.14)] p-8 md:p-10 lg:p-12" style="background: var(--bg-card-2)" data-reveal>
        <div class="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#37b6ff]">See Us In Action</p>
            <h3 class="mt-2 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-sis-text dark:text-dark-text">
              Industrial Intelligence
              <em class="not-italic text-sis-accent dark:text-dark-accent-teal">in Motion</em>
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-[rgba(167,184,212,0.9)]">
              Watch how SiS bridges the gap between operational technology and
              information technology — delivering real results across the MENA
              region.
            </p>
            <a
              :href="`https://www.youtube.com/watch?v=${videoId}`"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-5 inline-flex items-center gap-[10px] rounded-xl border border-sis-border/30 dark:border-[rgba(126,165,224,0.14)] px-[22px] py-[11px] text-sm font-semibold text-sis-text dark:text-dark-text no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-sis-accent hover:text-sis-accent"
              style="background: var(--bg-card-1)"
            >
              <svg
                class="h-5 w-5 flex-shrink-0 text-[#ff0033]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
              Watch on YouTube
            </a>
          </div>
          <div class="overflow-hidden rounded-xl border border-sis-border/30 dark:border-[rgba(126,165,224,0.14])" style="box-shadow: 0 20px 50px -20px rgba(0,0,0,0.7)">
            <video
              src="@/images/sis-showcase.mp4"
              title="SiS Industrial Automation in Action"
              autoplay
              loop
              muted
              controls
              playsinline
              class="block aspect-video w-full"
            ></video>
          </div>
        </div>
      </div>

      <div class="text-center" data-reveal>
        <a
          @click.prevent="router.push({ name: 'projects' })"
          href="#"
          class="inline-block cursor-pointer rounded-full bg-[#37b6ff] px-8 py-[14px] text-[15px] font-bold text-[#04121f] no-underline transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(55,182,255,0.4)] active:scale-[0.97]"
        >
          Explore Case Studies
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useSiteStore } from "@/stores/useSiteStore";
import { useRouter } from "vue-router";

const siteStore = useSiteStore();
const router = useRouter();
const { sectors, capabilities, loaded } = storeToRefs(siteStore);

const videoId = "jhwNcujM9g0";
</script>
