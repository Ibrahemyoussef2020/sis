<template>
  <SectionWrapper wrapperClass="bg-sis-panel text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6">
        <p
          class="text-sm uppercase tracking-[0.3em] text-sis-accent"
          data-reveal
        >
          Digital Integration
        </p>
        <h2 class="mt-3 text-2xl font-semibold sm:text-3xl" data-reveal>
          What Drives Our OT–IT Journey
        </h2>
        <p class="mt-4 max-w-3xl text-sis-muted" data-reveal>
          SiS bridges operational and information technology with precision,
          innovation, and reliable digital transformation for industrial
          clients.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3 items-stretch">
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-semibold text-sis-primary" data-reveal>
            Use Cases
          </h3>
          <p class="mt-3 text-sm text-sis-muted min-h-[2.75rem]" data-reveal>
            Real projects where SiS delivered measurable industrial outcomes.
          </p>
          <div class="mt-6 space-y-4 flex-1">
            <template v-if="loaded">
              <article
                v-for="proj in topProjects"
                :key="proj.client"
                class="rounded-xl border border-sis-border bg-sis-panel p-4 shadow-sis flex items-start gap-4"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-sis-panel/60 text-sis-accent"
                >
                  <span
                    v-if="iconFor(proj.sector) === 'oil'"
                    class="material-symbols-outlined"
                    style="font-size: 24px"
                    >local_gas_station</span
                  >
                  <span
                    v-else-if="iconFor(proj.sector) === 'water'"
                    class="material-symbols-outlined"
                    style="font-size: 24px"
                    >water_drop</span
                  >
                  <span
                    v-else-if="iconFor(proj.sector) === 'food'"
                    class="material-symbols-outlined"
                    style="font-size: 24px"
                    >restaurant</span
                  >
                  <span
                    v-else-if="iconFor(proj.sector) === 'cement'"
                    class="material-symbols-outlined"
                    style="font-size: 24px"
                    >handyman</span
                  >
                  <span
                    v-else-if="iconFor(proj.sector) === 'chemical'"
                    class="material-symbols-outlined"
                    style="font-size: 24px"
                    >science</span
                  >
                  <span
                    v-else
                    class="material-symbols-outlined"
                    style="font-size: 24px"
                    >precision_manufacturing</span
                  >
                </div>
                <div>
                  <h4 class="font-semibold text-sis-text">
                    {{ proj.client }} —
                    <span class="text-sm text-sis-muted">{{
                      proj.sector
                    }}</span>
                  </h4>
                  <p class="mt-2 text-sm text-sis-muted">{{ proj.summary }}</p>
                </div>
              </article>
            </template>
            <template v-else>
              <div class="h-20 rounded-xl skeleton"></div>
              <div class="h-20 rounded-xl skeleton"></div>
            </template>
          </div>
        </div>

        <div class="flex flex-col h-full">
          <h3 class="text-xl font-semibold text-sis-primary" data-reveal>
            Sectors
          </h3>
          <p class="mt-3 text-sm text-sis-muted min-h-[2.75rem]" data-reveal>
            Industries we serve with tailored OT–IT solutions.
          </p>
          <div class="mt-6 grid gap-3 flex-1 content-start">
            <template v-if="loaded">
              <div
                v-for="s in sectors"
                :key="s.id"
                class="flex items-center gap-4 rounded-xl border border-sis-border bg-sis-panel p-3 w-full text-left"
              >
                <div class="flex-1 min-w-0">
                  <div class="font-semibold text-sis-text">{{ s.label }}</div>
                  <div class="text-sm text-sis-muted">
                    {{ s.projects.length }} projects
                  </div>
                </div>
                <div
                  class="h-8 w-8 rounded-full"
                  :style="{ background: s.color }"
                ></div>
              </div>
            </template>
            <template v-else>
              <div class="h-12 rounded-xl skeleton"></div>
              <div class="h-12 rounded-xl skeleton"></div>
            </template>
          </div>
        </div>

        <div class="flex flex-col h-full">
          <h3 class="text-xl font-semibold text-sis-primary" data-reveal>
            Capabilities
          </h3>
          <p class="mt-3 text-sm text-sis-muted min-h-[2.75rem]" data-reveal>
            Our core technical strengths and delivery pillars.
          </p>
          <div class="mt-6 grid gap-3 flex-1 content-start">
            <template v-if="loaded">
              <div
                v-for="col in capabilities.columns"
                :key="col"
                class="rounded-xl border border-sis-border bg-sis-panel p-3 text-sm font-medium text-sis-text"
              >
                {{ col }}
              </div>
            </template>
            <template v-else>
              <div class="h-12 rounded-xl skeleton"></div>
              <div class="h-12 rounded-xl skeleton"></div>
            </template>
          </div>
        </div>
      </div>

      <div
        class="mt-16 rounded-lg border border-sis-border py-12 px-5"
        data-reveal
      >
        <div class="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p class="text-sm uppercase tracking-[0.3em] text-sis-accent">
              See Us In Action
            </p>
            <h3 class="mt-2 text-2xl font-semibold text-sis-text">
              Industrial Intelligence
              <span class="italic text-sis-accent">in Motion</span>
            </h3>
            <p class="mt-3 text-sis-muted leading-relaxed">
              Watch how SiS bridges the gap between operational technology and
              information technology — delivering real results across the MENA
              region.
            </p>
            <a
              :href="`https://www.youtube.com/watch?v=${videoId}`"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-5 inline-flex items-center gap-2 rounded-lg border border-sis-border bg-sis-panel px-5 py-2.5 text-sm font-medium text-sis-text transition-all duration-300 hover:border-sis-accent hover:text-sis-accent hover:shadow-sm"
            >
              <svg
                class="h-5 w-5 text-[#ff0033]"
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
          <div
            class="rounded-xl overflow-hidden border border-sis-border shadow-lg"
          >
            <video
              src="@/images/sis-showcase.mp4"
              title="SiS Industrial Automation in Action"
              autoplay
              loop
              muted
              controls
              playsinline
              class="w-full block aspect-video"
            ></video>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a
          @click.prevent="router.push({ name: 'projects' })"
          href="#"
          class="inline-block rounded-full bg-sis-accent px-6 py-3 text-white transition-all duration-300 hover:bg-sis-light hover:shadow-lg hover:shadow-sis-accent/40 active:scale-[0.97]"
          >Explore Case Studies</a
        >
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useSiteStore } from "@/stores/useSiteStore";
import { useRouter } from "vue-router";
import SectionWrapper from "@/components/SectionWrapper.vue";

const siteStore = useSiteStore();
const router = useRouter();
const { projects, sectors, capabilities, loaded } = storeToRefs(siteStore);

const videoId = "jhwNcujM9g0";

const topProjects = computed(() => {
  if (!projects.value) return [];
  return projects.value.slice(0, 3);
});

function iconFor(sector) {
  if (!sector) return "gear";
  const s = sector.toLowerCase();
  if (s.includes("oil") || s.includes("gas")) return "oil";
  if (s.includes("water")) return "water";
  if (s.includes("food") || s.includes("beverage")) return "food";
  if (s.includes("cement") || s.includes("heavy")) return "cement";
  if (s.includes("chemical")) return "chemical";
  return "gear";
}
</script>
