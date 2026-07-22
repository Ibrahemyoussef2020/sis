<template>
  <section class="relative overflow-hidden bg-sis-panel dark:bg-dark-bg px-6 py-24 font-['Plus_Jakarta_Sans','Manrope','Inter',sans-serif] text-sis-text dark:text-dark-text">
    <div
      class="pointer-events-none absolute rounded-full blur-[80px]"
      :class="'w-96 h-96 -top-24 -right-24 bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.07)] max-md:w-[300px] max-md:h-[300px] max-md:-top-32 max-md:-right-24 max-[480px]:w-[180px] max-[480px]:h-[180px] max-[480px]:-top-20 max-[480px]:-right-16'"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute rounded-full blur-[80px]"
      :class="'w-64 h-64 -bottom-16 -left-16 bg-[rgba(var(--accent-teal-r), var(--accent-teal-g), var(--accent-teal-b),0.05)] max-md:w-[300px] max-md:h-[300px] max-md:-bottom-32 max-md:-left-20 max-[480px]:w-[180px] max-[480px]:h-[180px] max-[480px]:-bottom-20 max-[480px]:-left-12'"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto w-full max-w-[1200px]">
      <div class="mb-16 flex flex-col items-center gap-4 text-center" data-reveal>
        <span class="mb-1 block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[var(--accent-blue)]">Our Clientele</span>
        <h2 class="m-0 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight -tracking-[0.02em] text-sis-text dark:text-[#eaf1fb]">
          Trusted by <em class="not-italic font-bold text-sis-accent dark:text-dark-accent-teal">Industry Leaders</em>
        </h2>
        <p class="m-0 max-w-[36rem] font-sans text-base leading-relaxed text-sis-muted dark:text-dark-text-muted">
          Partnering with leading organizations across the MENA region to
          deliver industrial excellence.
        </p>
      </div>

      <div
        class="clients-marquee w-full min-w-0 overflow-hidden rounded-xl border border-[rgba(126,165,224,0.14)] bg-[rgba(126,165,224,0.06)] px-6 py-2 max-md:px-4 max-[480px]:px-3"
        data-reveal
      >
        <Swiper
          :modules="[Autoplay]"
          :slides-per-view="'auto'"
          :space-between="48"
          :loop="true"
          :speed="5000"
          :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }"
          :allow-touch-move="true"
          :grab-cursor="true"
          class="client-carousel"
        >
          <SwiperSlide v-for="(client, i) in clients" :key="i" class="!w-auto">
            <div class="flex flex-col items-center gap-3 rounded-2xl py-2">
              <img
                :src="client.src"
                :alt="client.name"
                class="h-auto rounded-xl w-48 max-md:w-36 max-[480px]:w-24"
                style="filter: brightness(0.85)"
                loading="lazy"
              />
              <span class="whitespace-nowrap text-center font-sans text-sm font-medium leading-tight text-sis-muted dark:text-dark-text-muted max-[480px]:text-xs">{{ client.name }}</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import delta from "@/images/ourClints/delta.jpg";
import emitsal from "@/images/ourClints/emitsal.jpg";
import energeya from "@/images/ourClints/energeya.jpg";
import gcf from "@/images/ourClints/gcf.jpg";
import gizaSystems from "@/images/ourClints/giza_systems.jpg";
import henkel from "@/images/ourClints/henkel.jpg";
import omis from "@/images/ourClints/omis.jpg";
import orascomConst from "@/images/ourClints/orascom_const.jpg";
import plastCompany from "@/images/ourClints/plast_company.jpg";
import tabreed from "@/images/ourClints/tabreed.jpg";
import uniha from "@/images/ourClints/uniha.jpg";

const clients = [
  { name: "Delta", src: delta },
  { name: "Emisal", src: emitsal },
  { name: "Energeya", src: energeya },
  { name: "GCF", src: gcf },
  { name: "Giza Systems", src: gizaSystems },
  { name: "Henkel", src: henkel },
  { name: "Omis", src: omis },
  { name: "Orascom Construction", src: orascomConst },
  { name: "Plast Company", src: plastCompany },
  { name: "Tabreed", src: tabreed },
  { name: "Uniha", src: uniha },
];
</script>
