<template>
  <section
    class="relative z-[2] border-y border-[rgba(126,165,224,0.14)]"
    style="background: linear-gradient(180deg, #0a1120, #070d1a)"
  >
    <div class="mx-auto max-w-[1140px] px-7">
      <div class="grid grid-cols-2 md:grid-cols-4">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="border-l border-[rgba(126,165,224,0.14)] px-6 py-[30px] first:border-l-0"
        >
          <div
            class="font-mono text-[40px] font-extrabold -tracking-[0.03em] tabular-nums"
            style="
              background: linear-gradient(120deg, #eaf1fb, #37b6ff);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            "
          >
            <AnimatedCounter :value="stat.value" :suffix="stat.suffix" />
          </div>
          <div
            class="mt-1.5 font text-[12px] leading-6 tracking-[0.04em] text-[#37b6ff]"
          >
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedCounter from "./AnimatedCounter.vue";

const stats = [
  { value: 5, suffix: "+", label: "Years" },
  { value: 12, suffix: "+", label: "Projects" },
  { value: 6, suffix: "", label: "Sectors" },
  { value: 20, suffix: "+", label: "Tech Partners" },
];
</script>

<style scoped>
.font {
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
}
</style>
