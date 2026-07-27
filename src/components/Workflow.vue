<template>
  <section id="workflow" ref="sectionRef" class="relative bg-sis-panel dark:bg-[#0b1326] overflow-hidden py-24 px-6 font-['Plus_Jakarta_Sans','Inter',sans-serif] text-sis-text dark:text-[#dae2fd]">
    <!-- Atmospheric background glow -->
    <div ref="atmoRef" aria-hidden="true" class="absolute top-0 left-1/2 w-[900px] h-[550px] rounded-full pointer-events-none z-0 transition-transform duration-[600] ease-out -translate-x-1/2 blur-[60px]" style="background: radial-gradient(ellipse, rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.07) 0%, transparent 70%);"></div>

    <!-- Circuit-line overlay -->
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none z-0" style="background-image: linear-gradient(90deg, rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.025) 1px, transparent 1px), linear-gradient(0deg, rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.025) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <div class="relative z-[1] max-w-[1200px] mx-auto">
      <!-- ── Header ─────────────────────────────────────────────────── -->
      <div class="text-center mb-16 md:mb-24 flex flex-col items-center gap-4">
        <span class="text-[0.72rem] font-semibold tracking-[0.3em] uppercase text-[var(--accent-blue)]" data-reveal>System Architecture</span>
        <h2 class="text-[clamp(2.2rem,5.5vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em] text-sis-text dark:text-[#dae2fd] m-0" data-reveal>
          The IT/OT <em class="italic font-bold text-[var(--accent-teal)]" style="text-shadow: 0 0 20px rgba(var(--accent-teal-r), var(--accent-teal-g), var(--accent-teal-b),0.4);">Lifecycle</em>
        </h2>
        <p class="max-w-[38rem] text-base leading-[1.7] text-sis-muted dark:text-[#c3c6d3] m-0 font-['Inter',sans-serif]" data-reveal>
          Bridging the gap between cognitive strategy and physical execution
          through a seamless, integrated digital fabric.
        </p>
      </div>

      <!-- ── Central visual ─────────────────────────────────────────── -->
      <div class="relative w-full max-w-[56rem] mx-auto mb-16 md:mb-20 rounded-xl overflow-hidden border border-[rgba(126,165,224,0.12)] card-glass" data-reveal>
        <div class="max-sm:hidden">
          <!-- SVG architectural diagram (desktop) -->
          <svg
            class="block w-full h-auto"
            viewBox="0 0 900 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="IT/OT Lifecycle Architecture Diagram"
          >
            <!-- Background grid -->
            <defs>
              <pattern
                id="wf-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="var(--svg-grid)"
                  stroke-width="1"
                />
              </pattern>
              <linearGradient id="wf-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="var(--svg-text-primary)" stop-opacity="0" />
                <stop offset="30%" stop-color="var(--svg-text-secondary)" stop-opacity="0.6" />
                <stop offset="70%" stop-color="var(--svg-text-secondary)" stop-opacity="0.6" />
                <stop offset="100%" stop-color="var(--svg-text-primary)" stop-opacity="0" />
              </linearGradient>
              <filter id="wf-glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect width="900" height="320" fill="url(#wf-grid)" />

            <!-- Flow line -->
            <line
              x1="60"
              y1="160"
              x2="840"
              y2="160"
              stroke="url(#wf-flow)"
              stroke-width="1.5"
              stroke-dasharray="6 4"
            />

            <!-- MIND node -->
            <circle
              cx="90"
              cy="160"
              r="36"
              fill="var(--svg-node-fill)"
              stroke="var(--svg-node-stroke)"
              stroke-width="1.5"
              filter="url(#wf-glow)"
            />
            <text
              x="90"
              y="155"
              text-anchor="middle"
              fill="var(--svg-text-primary)"
              font-size="11"
              font-family="Plus Jakarta Sans,Inter,sans-serif"
              font-weight="700"
            >
              MIND
            </text>
            <text
              x="90"
              y="170"
              text-anchor="middle"
              fill="var(--svg-text-secondary)"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Strategy
            </text>

            <!-- Arrow 1 -->
            <path
              d="M128 160 L146 160"
              stroke="var(--svg-flow)"
              stroke-width="1"
              stroke-opacity="0.5"
              marker-end="url(#wf-arrow)"
            />

            <!-- AI node -->
            <circle
              cx="225"
              cy="160"
              r="40"
              fill="var(--svg-node-fill)"
              stroke="var(--svg-node-stroke)"
              stroke-width="1.5"
              filter="url(#wf-glow)"
            />
            <text
              x="225"
              y="155"
              text-anchor="middle"
              fill="var(--svg-text-primary)"
              font-size="11"
              font-family="Plus Jakarta Sans,Inter,sans-serif"
              font-weight="700"
            >
              AI
            </text>
            <text
              x="225"
              y="170"
              text-anchor="middle"
              fill="var(--svg-text-secondary)"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Analytics
            </text>

            <!-- Connection rings -->
            <circle
              cx="225"
              cy="160"
              r="52"
              fill="none"
              stroke="var(--svg-node-stroke)"
              stroke-width="1"
              stroke-dasharray="3 5"
            />

            <!-- PC node -->
            <circle
              cx="450"
              cy="160"
              r="54"
              fill="var(--svg-node-fill)"
              stroke="var(--svg-node-stroke)"
              stroke-width="2"
              filter="url(#wf-glow)"
            />
            <circle
              cx="450"
              cy="160"
              r="64"
              fill="none"
              stroke="var(--svg-node-stroke)"
              stroke-width="1"
              stroke-dasharray="4 6"
            />
            <circle
              cx="450"
              cy="160"
              r="74"
              fill="none"
              stroke="var(--svg-node-stroke)"
              stroke-width="1"
              stroke-dasharray="2 8"
            />
            <text
              x="450"
              y="155"
              text-anchor="middle"
              fill="var(--svg-text-primary)"
              font-size="13"
              font-family="Plus Jakarta Sans,Inter,sans-serif"
              font-weight="700"
            >
              PC
            </text>
            <text
              x="450"
              y="173"
              text-anchor="middle"
              fill="var(--svg-text-secondary)"
              font-size="10"
              font-family="Inter,sans-serif"
            >
              Orchestration
            </text>

            <!-- Vertical data lines from PC -->
            <line
              x1="450"
              y1="96"
              x2="450"
              y2="70"
              stroke="var(--svg-flow)"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <line
              x1="450"
              y1="224"
              x2="450"
              y2="250"
              stroke="var(--svg-flow)"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <text
              x="450"
              y="70"
              text-anchor="middle"
              fill="var(--svg-text-label)"
              font-size="8"
              font-family="Inter,sans-serif"
              opacity="0.7"
            >
              IT Layer
            </text>
            <text
              x="450"
              y="258"
              text-anchor="middle"
              fill="var(--svg-text-label)"
              font-size="8"
              font-family="Inter,sans-serif"
              opacity="0.7"
            >
              OT Layer
            </text>

            <!-- FACTORY node -->
            <circle
              cx="675"
              cy="160"
              r="40"
              fill="var(--svg-node-fill)"
              stroke="var(--svg-node-stroke)"
              stroke-width="1.5"
              filter="url(#wf-glow)"
            />
            <circle
              cx="675"
              cy="160"
              r="52"
              fill="none"
              stroke="var(--svg-node-stroke)"
              stroke-width="1"
              stroke-dasharray="3 5"
            />
            <text
              x="675"
              y="155"
              text-anchor="middle"
              fill="var(--svg-text-primary)"
              font-size="11"
              font-family="Plus Jakarta Sans,Inter,sans-serif"
              font-weight="700"
            >
              Factory
            </text>
            <text
              x="675"
              y="170"
              text-anchor="middle"
              fill="var(--svg-text-secondary)"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Physical
            </text>

            <!-- HUMAN node -->
            <circle
              cx="810"
              cy="160"
              r="36"
              fill="var(--svg-node-fill)"
              stroke="var(--svg-node-stroke)"
              stroke-width="1.5"
              filter="url(#wf-glow)"
            />
            <text
              x="810"
              y="155"
              text-anchor="middle"
              fill="var(--svg-text-primary)"
              font-size="11"
              font-family="Plus Jakarta Sans,Inter,sans-serif"
              font-weight="700"
            >
              Human
            </text>
            <text
              x="810"
              y="170"
              text-anchor="middle"
              fill="var(--svg-text-secondary)"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Expert
            </text>

            <!-- Label: Bidirectional arrows -->
            <text
              x="337"
              y="148"
              text-anchor="middle"
              fill="var(--svg-text-annotation)"
              font-size="8"
              font-family="Inter,sans-serif"
            >
              ⟷ data exchange ⟷
            </text>
            <text
              x="563"
              y="148"
              text-anchor="middle"
              fill="var(--svg-text-annotation)"
              font-size="8"
              font-family="Inter,sans-serif"
            >
              ⟷ command flow ⟷
            </text>

            <!-- Overlay gradient fade at sides -->
            <rect
              x="0"
              y="0"
              width="40"
              height="320"
              fill="url(#fade-l)"
              opacity="0.9"
            />
            <rect
              x="860"
              y="0"
              width="40"
              height="320"
              fill="url(#fade-r)"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="fade-l" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="var(--section-bg, #f4f7fa)" stop-opacity="1" />
                <stop offset="100%" stop-color="var(--section-bg, #f4f7fa)" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="fade-r" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="var(--section-bg, #f4f7fa)" stop-opacity="0" />
                <stop offset="100%" stop-color="var(--section-bg, #f4f7fa)" stop-opacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div class="hidden max-sm:block pb-[25px]">
          <!-- SVG architectural diagram (mobile) -->
          <svg
            class="block w-full h-auto"
            viewBox="0 0 300 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="IT/OT Lifecycle Architecture Diagram"
          >
            <defs>
              <pattern
                id="wf-grid-v"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 30 0 L 0 0 0 30"
                  fill="none"
                  stroke="var(--svg-grid)"
                  stroke-width="1"
                />
              </pattern>
              <linearGradient id="wf-flow-v" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="var(--svg-text-primary)" stop-opacity="0" />
                <stop offset="30%" stop-color="var(--svg-text-secondary)" stop-opacity="0.6" />
                <stop offset="70%" stop-color="var(--svg-text-secondary)" stop-opacity="0.6" />
                <stop offset="100%" stop-color="var(--svg-text-primary)" stop-opacity="0" />
              </linearGradient>
              <filter id="wf-glow-v">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="fade-t" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="var(--section-bg, #f4f7fa)" stop-opacity="1" />
                <stop offset="100%" stop-color="var(--section-bg, #f4f7fa)" stop-opacity="0" />
              </linearGradient>
            </defs>

            <rect width="300" height="600" fill="url(#wf-grid-v)" />

            <!-- Vertical flow line -->
            <line
              x1="150"
              y1="105"
              x2="150"
              y2="515"
              stroke="url(#wf-flow-v)"
              stroke-width="1.5"
              stroke-dasharray="6 4"
            />

            <!-- MIND node -->
            <circle
              cx="150"
              cy="75"
              r="30"
              fill="var(--svg-node-fill)"
              stroke="var(--svg-node-stroke)"
              stroke-width="1.5"
              filter="url(#wf-glow-v)"
            />
            <text
              x="150"
              y="70"
              text-anchor="middle"
              fill="var(--svg-text-primary)"
              font-size="11"
              font-family="Plus Jakarta Sans,Inter,sans-serif"
              font-weight="700"
            >
              MIND
            </text>
            <text
              x="150"
              y="85"
              text-anchor="middle"
              fill="var(--svg-text-secondary)"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Strategy
            </text>

            <!-- Arrow 1 -->
            <path
              d="M150 105 L150 126"
              stroke="var(--svg-flow)"
              stroke-width="1"
              stroke-opacity="0.5"
            />

            <!-- AI node -->
            <circle
              cx="150"
              cy="185"
              r="36"
              fill="var(--svg-node-fill)"
              stroke="var(--svg-node-stroke)"
              stroke-width="1.5"
              filter="url(#wf-glow-v)"
            />
            <circle
              cx="150"
              cy="185"
              r="48"
              fill="none"
              stroke="var(--svg-node-stroke)"
              stroke-width="1"
              stroke-dasharray="3 5"
            />
            <text
              x="150"
              y="180"
              text-anchor="middle"
              fill="var(--svg-text-primary)"
              font-size="11"
              font-family="Plus Jakarta Sans,Inter,sans-serif"
              font-weight="700"
            >
              AI
            </text>
            <text
              x="150"
              y="195"
              text-anchor="middle"
              fill="var(--svg-text-secondary)"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Analytics
            </text>

            <!-- Arrow 2 -->
            <path
              d="M150 221 L150 248"
              stroke="var(--svg-flow)"
              stroke-width="1"
              stroke-opacity="0.5"
            />
            <text
              x="155"
              y="243"
              text-anchor="start"
              fill="var(--svg-text-annotation)"
              font-size="8"
              font-family="Inter,sans-serif"
            >
              data exchange
            </text>

            <!-- PC node -->
            <circle
              cx="150"
              cy="310"
              r="48"
              fill="var(--svg-node-fill)"
              stroke="var(--svg-node-stroke)"
              stroke-width="2"
              filter="url(#wf-glow-v)"
            />
            <circle
              cx="150"
              cy="310"
              r="58"
              fill="none"
              stroke="var(--svg-node-stroke)"
              stroke-width="1"
              stroke-dasharray="4 6"
            />
            <circle
              cx="150"
              cy="310"
              r="68"
              fill="none"
              stroke="var(--svg-node-stroke)"
              stroke-width="1"
              stroke-dasharray="2 8"
            />
            <text
              x="150"
              y="305"
              text-anchor="middle"
              fill="var(--svg-text-primary)"
              font-size="13"
              font-family="Plus Jakarta Sans,Inter,sans-serif"
              font-weight="700"
            >
              PC
            </text>
            <text
              x="150"
              y="322"
              text-anchor="middle"
              fill="var(--svg-text-secondary)"
              font-size="10"
              font-family="Inter,sans-serif"
            >
              Orchestration
            </text>

            <!-- IT/OT Layer labels -->
            <line
              x1="102"
              y1="310"
              x2="55"
              y2="310"
              stroke="var(--svg-flow)"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <line
              x1="198"
              y1="310"
              x2="245"
              y2="310"
              stroke="var(--svg-flow)"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <text
              x="48"
              y="313"
              text-anchor="end"
              fill="var(--svg-text-label)"
              font-size="8"
              font-family="Inter,sans-serif"
              opacity="0.7"
            >
              IT Layer
            </text>
            <text
              x="252"
              y="313"
              text-anchor="start"
              fill="var(--svg-text-label)"
              font-size="8"
              font-family="Inter,sans-serif"
              opacity="0.7"
            >
              OT Layer
            </text>

            <!-- Arrow 3 -->
            <path
              d="M150 358 L150 385"
              stroke="var(--svg-flow)"
              stroke-width="1"
              stroke-opacity="0.5"
            />
            <text
              x="155"
              y="381"
              text-anchor="start"
              fill="var(--svg-text-annotation)"
              font-size="8"
              font-family="Inter,sans-serif"
            >
              command flow
            </text>

            <!-- Factory node -->
            <circle
              cx="150"
              cy="435"
              r="36"
              fill="var(--svg-node-fill)"
              stroke="var(--svg-node-stroke)"
              stroke-width="1.5"
              filter="url(#wf-glow-v)"
            />
            <circle
              cx="150"
              cy="435"
              r="48"
              fill="none"
              stroke="var(--svg-node-stroke)"
              stroke-width="1"
              stroke-dasharray="3 5"
            />
            <text
              x="150"
              y="430"
              text-anchor="middle"
              fill="var(--svg-text-primary)"
              font-size="11"
              font-family="Plus Jakarta Sans,Inter,sans-serif"
              font-weight="700"
            >
              Factory
            </text>
            <text
              x="150"
              y="445"
              text-anchor="middle"
              fill="var(--svg-text-secondary)"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Physical
            </text>

            <!-- Arrow 4 -->
            <path
              d="M150 471 L150 498"
              stroke="var(--svg-flow)"
              stroke-width="1"
              stroke-opacity="0.5"
            />

            <!-- Human node -->
            <circle
              cx="150"
              cy="545"
              r="30"
              fill="var(--svg-node-fill)"
              stroke="var(--svg-node-stroke)"
              stroke-width="1.5"
              filter="url(#wf-glow-v)"
            />
            <text
              x="150"
              y="540"
              text-anchor="middle"
              fill="var(--svg-text-primary)"
              font-size="11"
              font-family="Plus Jakarta Sans,Inter,sans-serif"
              font-weight="700"
            >
              Human
            </text>
            <text
              x="150"
              y="555"
              text-anchor="middle"
              fill="var(--svg-text-secondary)"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Expert
            </text>

            <!-- Fade overlays -->
            <rect
              x="0"
              y="0"
              width="300"
              height="24"
              fill="url(#fade-t)"
              opacity="0.9"
            />
          </svg>
        </div>

        <!-- Glass tint overlays for depth -->
        <div aria-hidden="true" class="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none max-sm:hidden" style="background: linear-gradient(to top, var(--section-bg, #f4f7fa) 0%, transparent 100%);"></div>
        <div aria-hidden="true" class="absolute top-0 left-0 right-0 h-[20%] pointer-events-none max-sm:hidden" style="background: linear-gradient(to bottom, var(--section-bg, #f4f7fa) 0%, transparent 100%);"></div>
      </div>

      <!-- ── Stage cards ─────────────────────────────────────────────── -->
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <!-- Stage 1: Mind -->
        <article class="group p-6 flex flex-col gap-3 rounded-xl border card-glass-border dark:border-[rgba(126,165,224,0.12)] transition-all duration-[400] ease-in-out hover:bg-[rgba(126,165,224,0.08)] hover:border-sis-accent dark:hover:border-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.3)] hover:shadow-[0_0_32px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)] hover:-translate-y-1" data-reveal>
          <div class="flex items-center gap-3 mb-1">
            <div class="w-10 h-10 rounded-lg bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)] flex items-center justify-center shrink-0 text-[var(--accent-blue)] transition-colors duration-300 ease-in-out group-hover:bg-[var(--accent-blue)] group-hover:text-[#00344d]">
              <!-- brain/psychology icon -->
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="w-[1.1rem] h-[1.1rem]"
              >
                <path
                  d="M9.5 2A2.5 2.5 0 007 4.5v.5H6a3 3 0 00-3 3v.5A3.5 3.5 0 006.5 12H7v.5A2.5 2.5 0 009.5 15H10v2a2 2 0 004 0v-2h.5a2.5 2.5 0 002.5-2.5V12h.5A3.5 3.5 0 0021 8.5V8a3 3 0 00-3-3h-1v-.5A2.5 2.5 0 0014.5 2h-5z"
                />
              </svg>
            </div>
            <span class="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[var(--text-muted-70)] dark:text-[#8d909c] not-italic"
              >STAGE <em class="not-italic text-base font-extrabold tracking-[0.06em] text-[var(--text-muted-70)] dark:text-[#8d909c] transition-[color,filter] duration-300 ease-in-out group-hover:text-[var(--accent-blue)] group-hover:drop-shadow-[0_0_14px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.5)]">01</em></span
            >
          </div>
          <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#dae2fd] m-0">Mind</h3>
          <p class="text-[0.82rem] leading-[1.65] text-sis-muted dark:text-[#c3c6d3] m-0 flex-1 font-['Inter',sans-serif]">
            Strategic intent and high-level vision. Where corporate goals are
            translated into actionable digital roadmaps.
          </p>
          <div class="pt-[0.875rem] border-t border-[rgba(126,165,224,0.1)] mt-auto">
            <span class="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[var(--accent-blue)]">Strategic Layer</span>
          </div>
        </article>

        <!-- Stage 2: AI -->
        <article class="group p-6 flex flex-col gap-3 rounded-xl border card-glass-border dark:border-[rgba(126,165,224,0.12)] transition-all duration-[400] ease-in-out hover:bg-[rgba(126,165,224,0.08)] hover:border-sis-accent dark:hover:border-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.3)] hover:shadow-[0_0_32px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)] hover:-translate-y-1" data-reveal>
          <div class="flex items-center gap-3 mb-1">
            <div class="w-10 h-10 rounded-lg bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)] flex items-center justify-center shrink-0 text-[var(--accent-blue)] transition-colors duration-300 ease-in-out group-hover:bg-[var(--accent-blue)] group-hover:text-[#00344d]">
              <!-- AI/neural icon -->
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="w-[1.1rem] h-[1.1rem]"
              >
                <circle cx="12" cy="12" r="3" />
                <circle cx="4" cy="7" r="2" />
                <circle cx="20" cy="7" r="2" />
                <circle cx="4" cy="17" r="2" />
                <circle cx="20" cy="17" r="2" />
                <circle cx="12" cy="2" r="2" />
                <circle cx="12" cy="22" r="2" />
                <path
                  d="M6 7.5L9.5 10M14.5 10L18 7.5M6 16.5L9.5 14M14.5 14L18 16.5M12 5v4M12 15v4"
                />
              </svg>
            </div>
            <span class="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[var(--text-muted-70)] dark:text-[#8d909c] not-italic"
              >STAGE <em class="not-italic text-base font-extrabold tracking-[0.06em] text-[var(--text-muted-70)] dark:text-[#8d909c] transition-[color,filter] duration-300 ease-in-out group-hover:text-[var(--accent-blue)] group-hover:drop-shadow-[0_0_14px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.5)]">02</em></span
            >
          </div>
          <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#dae2fd] m-0">AI</h3>
          <p class="text-[0.82rem] leading-[1.65] text-sis-muted dark:text-[#c3c6d3] m-0 flex-1 font-['Inter',sans-serif]">
            Intelligent processing and advanced analytics. Transforming raw data
            streams into predictive operational insights.
          </p>
          <div class="pt-[0.875rem] border-t border-[rgba(126,165,224,0.1)] mt-auto">
            <span class="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[var(--accent-blue)]">Analytic Layer</span>
          </div>
        </article>

        <!-- Stage 3: PC (Orchestration) -->
        <article class="group p-6 flex flex-col gap-3 rounded-xl border bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.06)] border-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.2)] backdrop-blur-[12px] transition-all duration-[400] ease-in-out hover:bg-[rgba(126,165,224,0.08)] hover:border-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.4)] hover:shadow-[0_0_40px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.18)] hover:-translate-y-1" data-reveal>
          <div class="flex items-center gap-3 mb-1">
            <div class="w-10 h-10 rounded-lg bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.18)] flex items-center justify-center shrink-0 text-[var(--accent-blue)] transition-colors duration-300 ease-in-out group-hover:bg-[var(--accent-blue)] group-hover:text-[#00344d]">
              <!-- control panel icon -->
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="w-[1.1rem] h-[1.1rem]"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <circle cx="7" cy="9" r="1.5" />
                <circle cx="12" cy="9" r="1.5" />
                <circle cx="17" cy="9" r="1.5" />
                <path d="M6 13h12" />
              </svg>
            </div>
            <span class="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[var(--text-muted-70)] dark:text-[#8d909c] not-italic"
              >STAGE <em class="not-italic text-base font-extrabold tracking-[0.06em] text-[var(--text-muted-70)] dark:text-[#8d909c] transition-[color,filter] duration-300 ease-in-out group-hover:text-[var(--accent-blue)] group-hover:drop-shadow-[0_0_14px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.5)]">03</em></span
            >
          </div>
          <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#dae2fd] m-0">PC</h3>
          <p class="text-[0.82rem] leading-[1.65] text-sis-muted dark:text-[#c3c6d3] m-0 flex-1 font-['Inter',sans-serif]">
            Digital orchestration and control interfaces. The mission control
            center for real-time monitoring and command.
          </p>
          <div class="pt-[0.875rem] border-t border-[rgba(126,165,224,0.1)] mt-auto">
            <span class="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[var(--accent-blue)]">Orchestration</span>
          </div>
        </article>

        <!-- Stage 4: Factory -->
        <article class="group p-6 flex flex-col gap-3 rounded-xl border card-glass-border dark:border-[rgba(126,165,224,0.12)] transition-all duration-[400] ease-in-out hover:bg-[rgba(126,165,224,0.08)] hover:border-sis-accent dark:hover:border-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.3)] hover:shadow-[0_0_32px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)] hover:-translate-y-1" data-reveal>
          <div class="flex items-center gap-3 mb-1">
            <div class="w-10 h-10 rounded-lg bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)] flex items-center justify-center shrink-0 text-[var(--accent-blue)] transition-colors duration-300 ease-in-out group-hover:bg-[var(--accent-blue)] group-hover:text-[#00344d]">
              <!-- factory/manufacturing icon -->
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="w-[1.1rem] h-[1.1rem]"
              >
                <path d="M2 20h20M4 20V10l5-5v5l5-5v5l5-5v10" />
                <rect x="9" y="14" width="6" height="6" rx="0.5" />
              </svg>
            </div>
            <span class="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[var(--text-muted-70)] dark:text-[#8d909c] not-italic"
              >STAGE <em class="not-italic text-base font-extrabold tracking-[0.06em] text-[var(--text-muted-70)] dark:text-[#8d909c] transition-[color,filter] duration-300 ease-in-out group-hover:text-[var(--accent-blue)] group-hover:drop-shadow-[0_0_14px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.5)]">04</em></span
            >
          </div>
          <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#dae2fd] m-0">Factory</h3>
          <p class="text-[0.82rem] leading-[1.65] text-sis-muted dark:text-[#c3c6d3] m-0 flex-1 font-['Inter',sans-serif]">
            Physical production and OT integration. High-precision hardware
            executing digital commands on the shop floor.
          </p>
          <div class="pt-[0.875rem] border-t border-[rgba(126,165,224,0.1)] mt-auto">
            <span class="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[var(--accent-blue)]">Physical Layer</span>
          </div>
        </article>

        <!-- Stage 5: Human -->
        <article class="group p-6 flex flex-col gap-3 rounded-xl border card-glass-border dark:border-[rgba(126,165,224,0.12)] transition-all duration-[400] ease-in-out hover:bg-[rgba(126,165,224,0.08)] hover:border-sis-accent dark:hover:border-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.3)] hover:shadow-[0_0_32px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)] hover:-translate-y-1" data-reveal>
          <div class="flex items-center gap-3 mb-1">
            <div class="w-10 h-10 rounded-lg bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.1)] flex items-center justify-center shrink-0 text-[var(--accent-blue)] transition-colors duration-300 ease-in-out group-hover:bg-[var(--accent-blue)] group-hover:text-[#00344d]">
              <!-- people/groups icon -->
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="w-[1.1rem] h-[1.1rem]"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 20a6.5 6.5 0 0113 0" />
                <circle cx="4" cy="9" r="2.5" />
                <path d="M1.5 20a4 4 0 017-2.6" />
                <circle cx="20" cy="9" r="2.5" />
                <path d="M22.5 20a4 4 0 00-7-2.6" />
              </svg>
            </div>
            <span class="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[var(--text-muted-70)] dark:text-[#8d909c] not-italic"
              >STAGE <em class="not-italic text-base font-extrabold tracking-[0.06em] text-[var(--text-muted-70)] dark:text-[#8d909c] transition-[color,filter] duration-300 ease-in-out group-hover:text-[var(--accent-blue)] group-hover:drop-shadow-[0_0_14px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.5)]">05</em></span
            >
          </div>
          <h3 class="text-[1.1rem] font-semibold text-sis-text dark:text-[#dae2fd] m-0">Human</h3>
          <p class="text-[0.82rem] leading-[1.65] text-sis-muted dark:text-[#c3c6d3] m-0 flex-1 font-['Inter',sans-serif]">
            Empowered workforce and oversight. Experts leveraging systems to
            make critical decisions and drive safety.
          </p>
          <div class="pt-[0.875rem] border-t border-[rgba(126,165,224,0.1)] mt-auto">
            <span class="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[var(--accent-blue)]">Expert Layer</span>
          </div>
        </article>
      </div>

      <!-- ── CTA ────────────────────────────────────────────────────── -->
      <div class="mt-16 flex justify-center" data-reveal>
        <a
          @click.prevent="router.push({ name: 'architecture' })"
          href="#"
          class="inline-flex items-center gap-2 px-8 py-3 bg-[var(--accent-blue)] text-[#00344d] text-[0.72rem] font-bold tracking-[0.12em] uppercase rounded-lg no-underline shadow-[0_0_18px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.22)] transition-all duration-[250] ease-in-out hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.4)] hover:bg-[var(--accent-teal)] active:scale-[0.97]"
        >
          Explore Architecture
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { scrollToSection } from "@/utils/scrollTo.js";

const router = useRouter();
const route = useRoute();

const sectionRef = ref(null);
const atmoRef = ref(null);
let revealObserver;

function handleMouseMove(e) {
  if (!atmoRef.value) return;
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  atmoRef.value.style.transform = `translate(calc(-50% + ${(x - 0.5) * 60}px), ${(y - 0.5) * 60}px)`;
}

onMounted(() => {
  // Mouse-follow atmospheric glow
  document.addEventListener("mousemove", handleMouseMove, { passive: true });

  // Staggered entrance observer
  if (!sectionRef.value) return;
  const cards = [...sectionRef.value.querySelectorAll("[data-reveal]")];
  cards.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
  });

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        cards.forEach((el, i) => {
          setTimeout(() => {
            el.style.transition = "opacity 0.65s ease, transform 0.65s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, i * 90);
        });
        revealObserver.disconnect();
      });
    },
    { threshold: 0.12 },
  );

  revealObserver.observe(sectionRef.value);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", handleMouseMove);
  revealObserver?.disconnect();
});
</script>
