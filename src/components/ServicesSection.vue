<template>
  <section
    id="services"
    class="relative overflow-hidden py-20 text-sis-text dark:text-dark-text"
    style="background: var(--bg-section-1)"
  >
    <div class="mx-auto flex max-w-[1140px] flex-col gap-12 px-7 lg:flex-row lg:items-center lg:gap-16">
      <div class="flex-[0_0_35%]" data-reveal>
        <div class="mb-4 inline-flex items-center gap-4">
          <span class="block h-px w-12 bg-sis-accent"></span>
          <span class="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-sis-accent">Services &amp; Capabilities</span>
        </div>
        <h2 class="m-0 max-w-[42rem] font-['Plus_Jakarta_Sans',Inter,sans-serif] text-[clamp(2rem,5.2vw,4.25rem)] font-bold leading-tight -tracking-[0.02em] text-sis-text dark:text-[#eaf1fb]">
          One platform, <em class="not-italic font-normal text-sis-accent">every</em> industrial capability
        </h2>
      </div>

      <div class="flex-1 grid grid-cols-1 gap-[14px] sm:grid-cols-2">
        <template v-for="(card, i) in displayItems" :key="card?.id ?? i">
          <article v-if="loaded" class="group relative overflow-hidden rounded-[14px] border border-[var(--border-40)] dark:border-[rgba(126,165,224,0.14)] p-[22px] transition-all duration-300 hover:-translate-y-[5px] hover:border-[var(--bg-accent-40)] dark:hover:border-[rgba(126,165,224,0.3)]"
            style="background: var(--bg-card-1)"
            data-reveal
          >
            <div class="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-sis-accent to-[var(--accent-teal)] transition-transform duration-300 group-hover:scale-x-100"></div>
            <span class="absolute right-5 top-5 font-['Cascadia_Code',Consolas,monospace] text-[10px] text-[var(--text-muted-40)] dark:text-[rgba(126,165,224,0.4)]">0{{ i + 1 }}</span>
            <div class="mb-4 grid h-11 w-11 place-items-center rounded-[11px] border border-[var(--bg-accent-30)] dark:border-[rgba(126,165,224,0.3)] text-sis-accent [&_svg]:h-[22px] [&_svg]:w-[22px]" style="background: rgba(47,155,224,0.1)">
              <UiIcon :name="card.icon" />
            </div>
            <h3 class="m-0 mb-[7px] font-['Plus_Jakarta_Sans',Inter,sans-serif] text-base font-bold -tracking-[0.01em] text-sis-text dark:text-[#eaf1fb]">{{ card.title }}</h3>
            <p class="m-0 text-[13px] leading-relaxed text-[var(--text-muted-90)] dark:text-[rgba(167,184,212,0.9)]">{{ card.description }}</p>
          </article>
          <div v-else class="rounded-[14px] border border-[var(--border-40)] dark:border-[rgba(126,165,224,0.14)] p-[22px]">
            <Skeleton class="mb-4 h-11 w-11 rounded-[11px]" />
            <Skeleton class="mb-[7px] h-5 w-3/4" />
            <Skeleton class="mb-1 h-4 w-full" />
            <Skeleton class="h-4 w-5/6" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useSiteStore } from "@/stores/useSiteStore";
import UiIcon from "@/components/UiIcon.vue";
import Skeleton from "@/components/Skeleton.vue";

const siteStore = useSiteStore();
const { services, loaded } = storeToRefs(siteStore);

const displayItems = computed(() => {
  if (loaded.value) return services.value;
  return Array.from({ length: 4 });
});
</script>
