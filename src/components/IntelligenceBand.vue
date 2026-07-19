<template>
  <svg width="0" height="0" style="position: absolute"><defs>
    <linearGradient id="igGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#37b6ff"/><stop offset="1" stop-color="#5fe0c4"/></linearGradient>
  </defs></svg>
  <section
    ref="sectionRef"
    class="relative border-y border-[rgba(126,165,224,0.14)] py-[92px]"
    style="background: linear-gradient(180deg, #0a1120, #070d1a)"
  >
    <div class="mx-auto max-w-[1140px] px-7">
      <div class="mb-[46px] max-w-[64ch]">
        <span
          class="inline-flex items-center gap-[11px] font-mono text-[12px] font-semibold uppercase tracking-[0.26em] text-[#37b6ff]"
        >
          <span class="block h-px w-6 bg-gradient-to-r from-[#37b6ff] to-transparent"></span>
          Operational intelligence
        </span>
        <h2
          class="mt-4 text-[clamp(27px,3.5vw,42px)] font-extrabold leading-[1.1] -tracking-[0.025em] text-white text-balance"
        >
          We turn plant signals into decisions
        </h2>
        <p class="mt-[14px] max-w-[56ch] text-[15px] text-[#aebfd8]">
          Every deployment ships with live dashboards — efficiency, availability and
          quality tracked continuously, with alarms the moment a metric drifts.
        </p>
      </div>

      <div class="mb-[18px] grid grid-cols-1 gap-[18px] md:grid-cols-3">
        <!-- OEE Gauge -->
        <div
          class="flex flex-col items-center gap-2 rounded-[14px] border border-[rgba(126,165,224,0.14)] p-[22px]"
          style="background: linear-gradient(180deg, #0e1728, #0a1120)"
        >
          <span class="self-start font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7688a6]">OEE / Efficiency</span>
          <svg class="gauge" width="180" height="150" viewBox="0 0 200 168">
            <path d="M20 150 A90 90 0 1 1 180 150" fill="none" stroke="rgba(126,165,224,0.16)" stroke-width="9" stroke-linecap="round"/>
            <path ref="gauge1Val" class="gauge-val" d="M20 150 A90 90 0 1 1 180 150" fill="none" stroke="url(#igGrad)" stroke-width="9" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="283"/>
            <g ref="gauge1Needle" class="gauge-needle">
              <line x1="100" y1="100" x2="100" y2="34" stroke="#eaf1fb" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="100" cy="100" r="6" fill="#37b6ff"/>
            </g>
            <text x="100" y="132" text-anchor="middle" font-family="'Cascadia Code',Consolas,monospace" font-weight="700" font-size="23" fill="#eaf1fb">86%</text>
          </svg>
        </div>

        <!-- Availability Gauge -->
        <div
          class="flex flex-col items-center gap-2 rounded-[14px] border border-[rgba(126,165,224,0.14)] p-[22px]"
          style="background: linear-gradient(180deg, #0e1728, #0a1120)"
        >
          <span class="self-start font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7688a6]">Availability</span>
          <svg class="gauge" width="180" height="150" viewBox="0 0 200 168">
            <path d="M20 150 A90 90 0 1 1 180 150" fill="none" stroke="rgba(126,165,224,0.16)" stroke-width="9" stroke-linecap="round"/>
            <path ref="gauge2Val" class="gauge-val" d="M20 150 A90 90 0 1 1 180 150" fill="none" stroke="url(#igGrad)" stroke-width="9" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="283"/>
            <g ref="gauge2Needle" class="gauge-needle">
              <line x1="100" y1="100" x2="100" y2="34" stroke="#eaf1fb" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="100" cy="100" r="6" fill="#37b6ff"/>
            </g>
            <text x="100" y="132" text-anchor="middle" font-family="'Cascadia Code',Consolas,monospace" font-weight="700" font-size="23" fill="#eaf1fb">99.9%</text>
          </svg>
        </div>

        <!-- Throughput bars -->
        <div
          class="flex flex-col items-center gap-2 rounded-[14px] border border-[rgba(126,165,224,0.14)] p-[22px]"
          style="background: linear-gradient(180deg, #0e1728, #0a1120)"
        >
          <span class="self-start font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7688a6]">Throughput / min</span>
          <div ref="barGroup" class="flex items-end gap-[8px] h-[130px] pt-[10px]">
            <i
              v-for="n in 8"
              :key="n"
              ref="barRefs"
              class="bar w-[14px] rounded-t-[4px]"
              :class="[3, 6].includes(n) ? 'bar-teal' : 'bar-blue'"
            ></i>
          </div>
        </div>
      </div>

      <div
        ref="waveformWrap"
        class="relative h-[130px] overflow-hidden rounded-[14px] border border-[rgba(126,165,224,0.14)]"
        style="background: #0a1324"
      >
        <span class="absolute left-4 top-3 z-[2] font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7688a6]">Live plant telemetry</span>
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(126,165,224,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(126,165,224,0.07) 1px, transparent 1px); background-size: 28px 28px;"></div>
        <canvas ref="oscCanvas" class="relative z-[1] block h-full w-full" width="1100" height="130"></canvas>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const gauge1Val = ref(null);
const gauge1Needle = ref(null);
const gauge2Val = ref(null);
const gauge2Needle = ref(null);
const barRefs = ref([]);
const barGroup = ref(null);
const waveformWrap = ref(null);
const oscCanvas = ref(null);

let animFrameId = null;
let scrollTrigger = null;
let scrollTriggerCanvas = null;

onMounted(() => {
  // ── Gauge + bar animation (once on scroll into view) ──────────────
  const tl = gsap.timeline({ paused: true });
  if (gauge1Val.value) {
    tl.to(gauge1Val.value, { strokeDashoffset: 40, duration: 1.2, ease: "power3.out" }, 0);
  }
  if (gauge1Needle.value) {
    tl.to(gauge1Needle.value, { rotation: 65, transformOrigin: "100px 100px", duration: 1.2, ease: "power3.out" }, 0);
  }
  if (gauge2Val.value) {
    tl.to(gauge2Val.value, { strokeDashoffset: 3, duration: 1.2, ease: "power3.out" }, 0.15);
  }
  if (gauge2Needle.value) {
    tl.to(gauge2Needle.value, { rotation: 88, transformOrigin: "100px 100px", duration: 1.2, ease: "power3.out" }, 0.15);
  }
  const bars = barRefs.value;
  if (bars.length) {
    tl.to(bars, {
      height: (i) => [26, 118, 48, 92, 34, 108, 62, 76][i] || 60,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
    }, 0.3);
  }

  if (sectionRef.value) {
    scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.value,
      start: "top 85%",
      once: true,
      onEnter: () => tl.play(),
    });
  }

  // ── Canvas: only draw when visible ────────────────────────────────
  const canvas = oscCanvas.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  let t = 0;
  const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

  function drawWave() {
    ctx.clearRect(0, 0, w, h);
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, "#37b6ff");
    grad.addColorStop(1, "#5fe0c4");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2.6;
    ctx.shadowColor = "rgba(55,182,255,0.6)";
    ctx.shadowBlur = 8;
    ctx.beginPath();
    for (let i = 0; i <= w; i += 4) {
      const y = h / 2 + Math.sin(i * 0.018 + t) * 46 * Math.sin(t * 0.4 + i * 0.003) + (Math.sin(i * 0.09 + t * 2) > 0.85 ? -30 : 0);
      i === 0 ? ctx.moveTo(i, y) : ctx.lineTo(i, y);
    }
    ctx.stroke();
    t += 0.05;
    animFrameId = requestAnimationFrame(drawWave);
  }

  if (waveformWrap.value) {
    scrollTriggerCanvas = ScrollTrigger.create({
      trigger: waveformWrap.value,
      start: "top 110%",
      end: "bottom -10%",
      onEnter: () => { if (!reduce && !animFrameId) drawWave(); },
      onLeave: () => { if (animFrameId) { cancelAnimationFrame(animFrameId); animFrameId = null; } },
      onEnterBack: () => { if (!reduce && !animFrameId) drawWave(); },
      onLeaveBack: () => { if (animFrameId) { cancelAnimationFrame(animFrameId); animFrameId = null; } },
    });
  }
});

onBeforeUnmount(() => {
  if (scrollTrigger) scrollTrigger.kill();
  if (scrollTriggerCanvas) scrollTriggerCanvas.kill();
  if (animFrameId) cancelAnimationFrame(animFrameId);
});
</script>

<style scoped>
.bar-blue {
  background: linear-gradient(180deg, #37b6ff, #1d6fd0);
}

.bar-teal {
  background: linear-gradient(180deg, #5fe0c4, #2a9d86);
}

.bar {
  height: 18px;
}

.gauge-val {
  stroke-dashoffset: 283;
}

.gauge-needle {
  transform-origin: 100px 100px;
  transform: rotate(-90deg);
}
</style>
