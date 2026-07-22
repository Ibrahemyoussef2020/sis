<template>
  <section
    id="hero"
    class="relative w-full overflow-hidden text-sis-text dark:text-white bg-sis-panel dark:bg-[#070d1a]"
  >
    <!-- Background grid pattern with radial mask -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute inset-2"
        style="
          background-image:
            linear-gradient(rgba(126, 165, 224, 0.14) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(126, 165, 224, 0.14) 1px,
              transparent 1px
            );
          background-size: 56px 56px;
          mask-image: radial-gradient(
            120% 90% at 70% 0%,
            #000 30%,
            transparent 75%
          );
          -webkit-mask-image: radial-gradient(
            120% 90% at 70% 0%,
            #000 30%,
            transparent 75%
          );
        "
      ></div>
      <div
        class="absolute -top-[220px] -right-[140px] w-[640px] h-[640px] rounded-full opacity-70"
        style="
          background: radial-gradient(
            circle,
            rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b), 0.45),
            transparent 62%
          );
          filter: blur(30px);
        "
      ></div>
      <div
        class="absolute -bottom-[260px] -left-[160px] w-[560px] h-[560px] rounded-full"
        style="
          background: radial-gradient(
            circle,
            rgba(95, 224, 196, 0.16),
            transparent 65%
          );
          filter: blur(30px);
        "
      ></div>
    </div>

    <div class="relative z-10 mx-auto flex w-full max-w-[1140px] min-h-dvh flex-col justify-center px-7 pt-[82px] pb-[72px]">
      <div
        class="grid grid-cols-1 items-center gap-[46px] lg:grid-cols-[1.02fr_0.98fr]"
      >
        <!-- Left column: text -->
        <div>
          <span
            class="inline-flex items-center gap-[11px] font-mono text-[12px] font-semibold uppercase tracking-[0.26em] text-[var(--accent-blue)]"
          >
            <span
              class="block h-px w-6 bg-gradient-to-r from-[var(--accent-blue)] to-transparent"
            ></span>
            Superior Integrated Solutions
          </span>
          <h1
            class="mt-[22px] text-[clamp(36px,5.2vw,62px)] font-extrabold leading-[1.03] -tracking-[0.035em] text-balance"
          >
            Where
            <span
              class="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-teal)] bg-clip-text text-transparent"
              >operational</span
            >
            meets
            <span
              class="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-teal)] bg-clip-text text-transparent"
              >information</span
            >
            technology
          </h1>
          <p
            class="mt-[22px] max-w-[50ch] text-[15.5px] leading-[1.72] text-[var(--text-muted-90)] dark:text-[rgba(167,184,212,0.9)]"
          >
            Field-proven OT engineering fused with modern IT — SCADA upgrades,
            IIoT and secure digital transformation, engineered and commissioned
            across the MENA region.
          </p>
          <div class="mt-8 flex flex-wrap gap-[13px]">
            <button
              @click="router.push({ name: 'projects' })"
              class="inline-flex items-center gap-[9px] rounded-full bg-[var(--accent-blue)] px-[26px] py-[14px] text-[14px] font-bold text-[#04121f] shadow-[0_10px_30px_-10px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Explore our work
              <svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <button
              @click="router.push({ name: 'contact' })"
              class="inline-flex items-center gap-[9px] rounded-full border border-[var(--border-40)] dark:border-[rgba(126,165,224,0.3)] bg-[var(--bg-accent-5)] dark:bg-[rgba(126,165,224,0.04)] px-[26px] py-[14px] text-[14px] font-bold text-sis-text dark:text-white transition-all duration-200 hover:border-sis-accent hover:text-sis-accent"
            >
              Get in touch
            </button>
          </div>
          <div
            class="mt-9 flex items-center gap-3 font-mono text-[12.5px] text-sis-muted dark:text-[#7688a6]"
          >
            <span
              class="inline-block h-[6px] w-[6px] rounded-full bg-[var(--accent-teal)] shadow-[0_0_8px_var(--accent-teal)]"
            ></span>
            Operational since 2020 &middot; 12+ industrial deployments live
          </div>
        </div>

        <!-- Right column: OT-IT control mesh -->
        <div
          class="relative aspect-[16/12] overflow-hidden rounded-[20px] border border-[var(--border-50)] dark:border-[rgba(126,165,224,0.3)] shadow-[0_46px_90px_-42px_#000,inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <!-- Background image -->
          <div class="absolute inset-0">
            <img
              :src="factoryImg"
              alt=""
              class="h-full w-full object-cover"
              style="filter: saturate(0.9) brightness(0.66)"
            />
          </div>
          <!-- Veil overlay -->
          <div
            class="absolute inset-0"
            style="
              background: linear-gradient(
                180deg,
                rgba(6, 12, 24, 0.8),
                rgba(6, 12, 24, 0.6) 45%,
                rgba(6, 12, 24, 0.9)
              );
            "
          ></div>

          <!-- Layer labels -->
          <div
            class="pointer-events-none absolute inset-0 z-[2] font-mono text-[8.5px] uppercase tracking-[0.2em] text-[#7688a6]"
          >
            <span class="absolute left-4" style="top: 16%">Cloud</span>
            <span class="absolute left-4" style="top: 47%">SCADA / Edge</span>
            <span class="absolute left-4" style="top: 80%">Field</span>
          </div>

          <!-- Caption -->
          <div
            class="absolute left-4 right-4 top-[14px] z-[4] flex justify-between font-mono text-[11px] tracking-[0.08em] text-[#cfe0f6]"
            style="text-shadow: 0 1px 6px #000"
          >
            <span>SIS &middot; OT–IT CONTROL MESH</span>
            <span class="flex items-center gap-[7px] text-[var(--accent-teal)]">
              <i
                class="inline-block h-[7px] w-[7px] animate-[blink_1.6s_ease-in-out_infinite] rounded-full bg-[var(--accent-teal)] shadow-[0_0_8px_var(--accent-teal)]"
              ></i>
              LIVE
            </span>
          </div>

          <!-- SVG mesh -->
          <svg
            class="absolute inset-0 z-[3] h-full w-full"
            viewBox="0 0 600 440"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="meshGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="var(--accent-blue)" />
                <stop offset="1" stop-color="var(--accent-teal)" />
              </linearGradient>
              <filter id="meshGlow">
                <feGaussianBlur stdDeviation="2.6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Connection paths -->
            <g
              stroke="url(#meshGrad)"
              stroke-width="1.4"
              fill="none"
              opacity="0.5"
            >
              <path id="e1" d="M120 360 L160 270" />
              <path id="e2" d="M300 372 L300 268" />
              <path id="e3" d="M480 360 L440 270" />
              <path id="e4" d="M160 250 L300 240" />
              <path id="e5" d="M440 250 L300 240" />
              <path id="e6" d="M300 218 L190 110" />
              <path id="e7" d="M300 218 L410 110" />
            </g>
            <!-- Faint base paths -->
            <g
              stroke="url(#meshGrad)"
              stroke-width="1.4"
              fill="none"
              opacity="0.2"
              stroke-dasharray="3 4"
            >
              <path d="M120 360 L300 372 L480 360" />
              <path d="M190 110 L410 110" />
            </g>

            <!-- Animated telemetry dots (up) -->
            <circle r="3.3" fill="var(--accent-teal)">
              <animateMotion dur="2.6s" repeatCount="indefinite">
                <mpath href="#e1" />
              </animateMotion>
            </circle>
            <circle r="3.3" fill="var(--accent-teal)">
              <animateMotion dur="2.2s" begin="-0.5s" repeatCount="indefinite">
                <mpath href="#e2" />
              </animateMotion>
            </circle>
            <circle r="3.3" fill="var(--accent-teal)">
              <animateMotion dur="2.8s" begin="-1s" repeatCount="indefinite">
                <mpath href="#e3" />
              </animateMotion>
            </circle>
            <circle r="3" fill="var(--accent-teal)">
              <animateMotion dur="2.4s" begin="-0.7s" repeatCount="indefinite">
                <mpath href="#e4" />
              </animateMotion>
            </circle>
            <circle r="3" fill="var(--accent-teal)">
              <animateMotion dur="2.4s" begin="-1.4s" repeatCount="indefinite">
                <mpath href="#e5" />
              </animateMotion>
            </circle>
            <circle r="3.5" fill="#fff">
              <animateMotion dur="3s" begin="-0.3s" repeatCount="indefinite">
                <mpath href="#e6" />
              </animateMotion>
            </circle>
            <circle r="3.5" fill="#fff">
              <animateMotion dur="3.2s" begin="-1.6s" repeatCount="indefinite">
                <mpath href="#e7" />
              </animateMotion>
            </circle>

            <!-- Animated control dots (down) -->
            <circle r="3" fill="var(--accent-blue)">
              <animateMotion
                dur="3s"
                begin="-1.5s"
                repeatCount="indefinite"
                keyPoints="1;0"
                keyTimes="0;1"
              >
                <mpath href="#e6" />
              </animateMotion>
            </circle>
            <circle r="3" fill="var(--accent-blue)">
              <animateMotion
                dur="2.2s"
                begin="-0.9s"
                repeatCount="indefinite"
                keyPoints="1;0"
                keyTimes="0;1"
              >
                <mpath href="#e2" />
              </animateMotion>
            </circle>

            <!-- CLOUD nodes -->
            <g>
              <rect
                x="150"
                y="86"
                width="80"
                height="48"
                rx="12"
                fill="rgba(9,17,32,0.86)"
                stroke="#3a5a80"
                stroke-width="1.4"
              />
              <text
                x="190"
                y="108"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="10.5"
                font-weight="700"
                fill="#e7f0fb"
              >
                IIoT
              </text>
              <text
                x="190"
                y="121"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="8"
                fill="#9fb4d2"
              >
                CLOUD
              </text>
            </g>
            <g>
              <rect
                x="370"
                y="86"
                width="80"
                height="48"
                rx="12"
                fill="rgba(9,17,32,0.86)"
                stroke="#3a5a80"
                stroke-width="1.4"
              />
              <text
                x="410"
                y="108"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="10.5"
                font-weight="700"
                fill="#e7f0fb"
              >
                ERP
              </text>
              <text
                x="410"
                y="121"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="8"
                fill="#9fb4d2"
              >
                MES
              </text>
            </g>

            <!-- SCADA CORE -->
            <g filter="url(#meshGlow)">
              <circle
                cx="300"
                cy="243"
                r="33"
                fill="rgba(9,17,32,0.86)"
                stroke="url(#meshGrad)"
                stroke-width="2"
              />
            </g>
            <text
              x="300"
              y="242"
              text-anchor="middle"
              font-family="Consolas,monospace"
              font-size="11"
              font-weight="700"
              fill="#e7f0fb"
            >
              SCADA
            </text>
            <text
              x="300"
              y="255"
              text-anchor="middle"
              font-family="Consolas,monospace"
              font-size="8"
              fill="#9fb4d2"
            >
              CORE
            </text>

            <!-- EDGE gateways -->
            <g>
              <rect
                x="118"
                y="228"
                width="84"
                height="44"
                rx="11"
                fill="rgba(9,17,32,0.86)"
                stroke="#3a5a80"
                stroke-width="1.4"
              />
              <text
                x="160"
                y="247"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="9"
                font-weight="700"
                fill="#e7f0fb"
              >
                GATEWAY
              </text>
              <text
                x="160"
                y="259"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="7.5"
                fill="#9fb4d2"
              >
                OPC UA
              </text>
            </g>
            <g>
              <rect
                x="398"
                y="228"
                width="84"
                height="44"
                rx="11"
                fill="rgba(9,17,32,0.86)"
                stroke="#3a5a80"
                stroke-width="1.4"
              />
              <text
                x="440"
                y="247"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="9"
                font-weight="700"
                fill="#e7f0fb"
              >
                GATEWAY
              </text>
              <text
                x="440"
                y="259"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="7.5"
                fill="#9fb4d2"
              >
                MQTT
              </text>
            </g>

            <!-- FIELD nodes -->
            <g>
              <rect
                x="82"
                y="340"
                width="76"
                height="42"
                rx="11"
                fill="rgba(9,17,32,0.86)"
                stroke="#3a5a80"
                stroke-width="1.4"
              />
              <text
                x="120"
                y="359"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="9"
                font-weight="700"
                fill="#e7f0fb"
              >
                PLC
              </text>
              <text
                x="120"
                y="371"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="7.5"
                fill="#9fb4d2"
              >
                CONTROL
              </text>
            </g>
            <g>
              <rect
                x="262"
                y="352"
                width="76"
                height="42"
                rx="11"
                fill="rgba(9,17,32,0.86)"
                stroke="#3a5a80"
                stroke-width="1.4"
              />
              <text
                x="300"
                y="371"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="9"
                font-weight="700"
                fill="#e7f0fb"
              >
                SENSOR
              </text>
              <text
                x="300"
                y="383"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="7.5"
                fill="#9fb4d2"
              >
                HART
              </text>
            </g>
            <g>
              <rect
                x="442"
                y="340"
                width="76"
                height="42"
                rx="11"
                fill="rgba(9,17,32,0.86)"
                stroke="#3a5a80"
                stroke-width="1.4"
              />
              <text
                x="480"
                y="359"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="9"
                font-weight="700"
                fill="#e7f0fb"
              >
                VFD
              </text>
              <text
                x="480"
                y="371"
                text-anchor="middle"
                font-family="Consolas,monospace"
                font-size="7.5"
                fill="#9fb4d2"
              >
                DRIVE
              </text>
            </g>
          </svg>

          <!-- Legend -->
          <div
            class="absolute bottom-3 left-4 z-[4] flex gap-[14px] font-mono text-[10px] text-[#aebfd8]"
          >
            <span class="flex items-center gap-[6px]">
              <i class="inline-block h-[2px] w-[14px] rounded bg-[var(--accent-teal)]"></i>
              Telemetry &#9650;
            </span>
            <span class="flex items-center gap-[6px]">
              <i class="inline-block h-[2px] w-[14px] rounded bg-[var(--accent-blue)]"></i>
              Control &#9660;
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useSiteStore } from "@/stores/useSiteStore";
import { useRouter } from "vue-router";
import factory from "@/images/factory.webp";

const siteStore = useSiteStore();
const router = useRouter();
const { hero } = storeToRefs(siteStore);

const factoryImg = factory;
</script>

