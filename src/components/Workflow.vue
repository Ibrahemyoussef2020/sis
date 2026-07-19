<template>
  <section id="workflow" class="wf-root" ref="sectionRef">
    <!-- Atmospheric background glow -->
    <div class="wf-atmo" ref="atmoRef" aria-hidden="true"></div>

    <!-- Circuit-line overlay -->
    <div class="wf-circuit" aria-hidden="true"></div>

    <div class="wf-inner">
      <!-- ── Header ─────────────────────────────────────────────────── -->
      <div class="wf-header">
        <span class="wf-eyebrow" data-reveal>System Architecture</span>
        <h2 class="wf-title" data-reveal>
          The IT/OT <em class="wf-title-accent">Lifecycle</em>
        </h2>
        <p class="wf-desc" data-reveal>
          Bridging the gap between cognitive strategy and physical execution
          through a seamless, integrated digital fabric.
        </p>
      </div>

      <!-- ── Central visual ─────────────────────────────────────────── -->
      <div class="wf-visual" data-reveal>
        <div class="wf-diagram--horizontal">
          <!-- SVG architectural diagram (desktop) -->
          <svg
            class="wf-diagram"
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
                  stroke="rgba(137,206,255,0.06)"
                  stroke-width="1"
                />
              </pattern>
              <linearGradient id="wf-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#afc6ff" stop-opacity="0" />
                <stop offset="30%" stop-color="#89ceff" stop-opacity="0.6" />
                <stop offset="70%" stop-color="#89ceff" stop-opacity="0.6" />
                <stop offset="100%" stop-color="#afc6ff" stop-opacity="0" />
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
              fill="rgba(175,198,255,0.08)"
              stroke="rgba(175,198,255,0.35)"
              stroke-width="1.5"
              filter="url(#wf-glow)"
            />
            <text
              x="90"
              y="155"
              text-anchor="middle"
              fill="#afc6ff"
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
              fill="#89ceff"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Strategy
            </text>

            <!-- Arrow 1 -->
            <path
              d="M128 160 L146 160"
              stroke="#89ceff"
              stroke-width="1"
              stroke-opacity="0.5"
              marker-end="url(#wf-arrow)"
            />

            <!-- AI node -->
            <circle
              cx="225"
              cy="160"
              r="40"
              fill="rgba(175,198,255,0.07)"
              stroke="rgba(137,206,255,0.4)"
              stroke-width="1.5"
              filter="url(#wf-glow)"
            />
            <text
              x="225"
              y="155"
              text-anchor="middle"
              fill="#afc6ff"
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
              fill="#89ceff"
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
              stroke="rgba(137,206,255,0.08)"
              stroke-width="1"
              stroke-dasharray="3 5"
            />

            <!-- PC node -->
            <circle
              cx="450"
              cy="160"
              r="54"
              fill="rgba(175,198,255,0.1)"
              stroke="rgba(175,198,255,0.5)"
              stroke-width="2"
              filter="url(#wf-glow)"
            />
            <circle
              cx="450"
              cy="160"
              r="64"
              fill="none"
              stroke="rgba(175,198,255,0.12)"
              stroke-width="1"
              stroke-dasharray="4 6"
            />
            <circle
              cx="450"
              cy="160"
              r="74"
              fill="none"
              stroke="rgba(175,198,255,0.06)"
              stroke-width="1"
              stroke-dasharray="2 8"
            />
            <text
              x="450"
              y="155"
              text-anchor="middle"
              fill="#afc6ff"
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
              fill="#89ceff"
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
              stroke="rgba(137,206,255,0.25)"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <line
              x1="450"
              y1="224"
              x2="450"
              y2="250"
              stroke="rgba(137,206,255,0.25)"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <text
              x="450"
              y="70"
              text-anchor="middle"
              fill="#c3c6d3"
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
              fill="#c3c6d3"
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
              fill="rgba(175,198,255,0.07)"
              stroke="rgba(137,206,255,0.4)"
              stroke-width="1.5"
              filter="url(#wf-glow)"
            />
            <circle
              cx="675"
              cy="160"
              r="52"
              fill="none"
              stroke="rgba(137,206,255,0.08)"
              stroke-width="1"
              stroke-dasharray="3 5"
            />
            <text
              x="675"
              y="155"
              text-anchor="middle"
              fill="#afc6ff"
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
              fill="#89ceff"
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
              fill="rgba(175,198,255,0.08)"
              stroke="rgba(175,198,255,0.35)"
              stroke-width="1.5"
              filter="url(#wf-glow)"
            />
            <text
              x="810"
              y="155"
              text-anchor="middle"
              fill="#afc6ff"
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
              fill="#89ceff"
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
              fill="#8d909c"
              font-size="8"
              font-family="Inter,sans-serif"
            >
              ⟷ data exchange ⟷
            </text>
            <text
              x="563"
              y="148"
              text-anchor="middle"
              fill="#8d909c"
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
                <stop offset="0%" stop-color="#0b1326" stop-opacity="1" />
                <stop offset="100%" stop-color="#0b1326" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="fade-r" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#0b1326" stop-opacity="0" />
                <stop offset="100%" stop-color="#0b1326" stop-opacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div class="wf-diagram--vertical">
          <!-- SVG architectural diagram (mobile) -->
          <svg
            class="wf-diagram"
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
                  stroke="rgba(137,206,255,0.06)"
                  stroke-width="1"
                />
              </pattern>
              <linearGradient id="wf-flow-v" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#afc6ff" stop-opacity="0" />
                <stop offset="30%" stop-color="#89ceff" stop-opacity="0.6" />
                <stop offset="70%" stop-color="#89ceff" stop-opacity="0.6" />
                <stop offset="100%" stop-color="#afc6ff" stop-opacity="0" />
              </linearGradient>
              <filter id="wf-glow-v">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="fade-t" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0b1326" stop-opacity="1" />
                <stop offset="100%" stop-color="#0b1326" stop-opacity="0" />
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
              fill="rgba(175,198,255,0.08)"
              stroke="rgba(175,198,255,0.35)"
              stroke-width="1.5"
              filter="url(#wf-glow-v)"
            />
            <text
              x="150"
              y="70"
              text-anchor="middle"
              fill="#afc6ff"
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
              fill="#89ceff"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Strategy
            </text>

            <!-- Arrow 1 -->
            <path
              d="M150 105 L150 126"
              stroke="#89ceff"
              stroke-width="1"
              stroke-opacity="0.5"
            />

            <!-- AI node -->
            <circle
              cx="150"
              cy="185"
              r="36"
              fill="rgba(175,198,255,0.07)"
              stroke="rgba(137,206,255,0.4)"
              stroke-width="1.5"
              filter="url(#wf-glow-v)"
            />
            <circle
              cx="150"
              cy="185"
              r="48"
              fill="none"
              stroke="rgba(137,206,255,0.08)"
              stroke-width="1"
              stroke-dasharray="3 5"
            />
            <text
              x="150"
              y="180"
              text-anchor="middle"
              fill="#afc6ff"
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
              fill="#89ceff"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Analytics
            </text>

            <!-- Arrow 2 -->
            <path
              d="M150 221 L150 248"
              stroke="#89ceff"
              stroke-width="1"
              stroke-opacity="0.5"
            />
            <text
              x="155"
              y="243"
              text-anchor="start"
              fill="#8d909c"
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
              fill="rgba(175,198,255,0.1)"
              stroke="rgba(175,198,255,0.5)"
              stroke-width="2"
              filter="url(#wf-glow-v)"
            />
            <circle
              cx="150"
              cy="310"
              r="58"
              fill="none"
              stroke="rgba(175,198,255,0.12)"
              stroke-width="1"
              stroke-dasharray="4 6"
            />
            <circle
              cx="150"
              cy="310"
              r="68"
              fill="none"
              stroke="rgba(175,198,255,0.06)"
              stroke-width="1"
              stroke-dasharray="2 8"
            />
            <text
              x="150"
              y="305"
              text-anchor="middle"
              fill="#afc6ff"
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
              fill="#89ceff"
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
              stroke="rgba(137,206,255,0.25)"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <line
              x1="198"
              y1="310"
              x2="245"
              y2="310"
              stroke="rgba(137,206,255,0.25)"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <text
              x="48"
              y="313"
              text-anchor="end"
              fill="#c3c6d3"
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
              fill="#c3c6d3"
              font-size="8"
              font-family="Inter,sans-serif"
              opacity="0.7"
            >
              OT Layer
            </text>

            <!-- Arrow 3 -->
            <path
              d="M150 358 L150 385"
              stroke="#89ceff"
              stroke-width="1"
              stroke-opacity="0.5"
            />
            <text
              x="155"
              y="381"
              text-anchor="start"
              fill="#8d909c"
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
              fill="rgba(175,198,255,0.07)"
              stroke="rgba(137,206,255,0.4)"
              stroke-width="1.5"
              filter="url(#wf-glow-v)"
            />
            <circle
              cx="150"
              cy="435"
              r="48"
              fill="none"
              stroke="rgba(137,206,255,0.08)"
              stroke-width="1"
              stroke-dasharray="3 5"
            />
            <text
              x="150"
              y="430"
              text-anchor="middle"
              fill="#afc6ff"
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
              fill="#89ceff"
              font-size="9"
              font-family="Inter,sans-serif"
            >
              Physical
            </text>

            <!-- Arrow 4 -->
            <path
              d="M150 471 L150 498"
              stroke="#89ceff"
              stroke-width="1"
              stroke-opacity="0.5"
            />

            <!-- Human node -->
            <circle
              cx="150"
              cy="545"
              r="30"
              fill="rgba(175,198,255,0.08)"
              stroke="rgba(175,198,255,0.35)"
              stroke-width="1.5"
              filter="url(#wf-glow-v)"
            />
            <text
              x="150"
              y="540"
              text-anchor="middle"
              fill="#afc6ff"
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
              fill="#89ceff"
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
        <div class="wf-visual-overlay-t" aria-hidden="true"></div>
        <div class="wf-visual-overlay-s" aria-hidden="true"></div>
      </div>

      <!-- ── Stage cards ─────────────────────────────────────────────── -->
      <div class="wf-stages">
        <!-- Stage 1: Mind -->
        <article class="wf-card" data-reveal>
          <div class="wf-card-top">
            <div class="wf-icon">
              <!-- brain/psychology icon -->
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  d="M9.5 2A2.5 2.5 0 007 4.5v.5H6a3 3 0 00-3 3v.5A3.5 3.5 0 006.5 12H7v.5A2.5 2.5 0 009.5 15H10v2a2 2 0 004 0v-2h.5a2.5 2.5 0 002.5-2.5V12h.5A3.5 3.5 0 0021 8.5V8a3 3 0 00-3-3h-1v-.5A2.5 2.5 0 0014.5 2h-5z"
                />
              </svg>
            </div>
            <span class="wf-stage-label"
              >STAGE <em class="wf-stage-num">01</em></span
            >
          </div>
          <h3 class="wf-card-title">Mind</h3>
          <p class="wf-card-body">
            Strategic intent and high-level vision. Where corporate goals are
            translated into actionable digital roadmaps.
          </p>
          <div class="wf-card-footer">
            <span class="wf-card-layer">Strategic Layer</span>
          </div>
        </article>

        <!-- Stage 2: AI -->
        <article class="wf-card" data-reveal>
          <div class="wf-card-top">
            <div class="wf-icon">
              <!-- AI/neural icon -->
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
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
            <span class="wf-stage-label"
              >STAGE <em class="wf-stage-num">02</em></span
            >
          </div>
          <h3 class="wf-card-title">AI</h3>
          <p class="wf-card-body">
            Intelligent processing and advanced analytics. Transforming raw data
            streams into predictive operational insights.
          </p>
          <div class="wf-card-footer">
            <span class="wf-card-layer">Analytic Layer</span>
          </div>
        </article>

        <!-- Stage 3: PC (Orchestration) -->
        <article class="wf-card wf-card--featured" data-reveal>
          <div class="wf-card-top">
            <div class="wf-icon wf-icon--featured">
              <!-- control panel icon -->
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <circle cx="7" cy="9" r="1.5" />
                <circle cx="12" cy="9" r="1.5" />
                <circle cx="17" cy="9" r="1.5" />
                <path d="M6 13h12" />
              </svg>
            </div>
            <span class="wf-stage-label"
              >STAGE <em class="wf-stage-num">03</em></span
            >
          </div>
          <h3 class="wf-card-title">PC</h3>
          <p class="wf-card-body">
            Digital orchestration and control interfaces. The mission control
            center for real-time monitoring and command.
          </p>
          <div class="wf-card-footer">
            <span class="wf-card-layer">Orchestration</span>
          </div>
        </article>

        <!-- Stage 4: Factory -->
        <article class="wf-card" data-reveal>
          <div class="wf-card-top">
            <div class="wf-icon">
              <!-- factory/manufacturing icon -->
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M2 20h20M4 20V10l5-5v5l5-5v5l5-5v10" />
                <rect x="9" y="14" width="6" height="6" rx="0.5" />
              </svg>
            </div>
            <span class="wf-stage-label"
              >STAGE <em class="wf-stage-num">04</em></span
            >
          </div>
          <h3 class="wf-card-title">Factory</h3>
          <p class="wf-card-body">
            Physical production and OT integration. High-precision hardware
            executing digital commands on the shop floor.
          </p>
          <div class="wf-card-footer">
            <span class="wf-card-layer">Physical Layer</span>
          </div>
        </article>

        <!-- Stage 5: Human -->
        <article class="wf-card" data-reveal>
          <div class="wf-card-top">
            <div class="wf-icon">
              <!-- people/groups icon -->
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 20a6.5 6.5 0 0113 0" />
                <circle cx="4" cy="9" r="2.5" />
                <path d="M1.5 20a4 4 0 017-2.6" />
                <circle cx="20" cy="9" r="2.5" />
                <path d="M22.5 20a4 4 0 00-7-2.6" />
              </svg>
            </div>
            <span class="wf-stage-label"
              >STAGE <em class="wf-stage-num">05</em></span
            >
          </div>
          <h3 class="wf-card-title">Human</h3>
          <p class="wf-card-body">
            Empowered workforce and oversight. Experts leveraging systems to
            make critical decisions and drive safety.
          </p>
          <div class="wf-card-footer">
            <span class="wf-card-layer">Expert Layer</span>
          </div>
        </article>
      </div>

      <!-- ── CTA ────────────────────────────────────────────────────── -->
      <div class="wf-cta-wrap" data-reveal>
        <a
          @click.prevent="scrollToSection('architecture', router, route)"
          href="#"
          class="wf-cta"
        >
          Explore Architecture
          <svg
            class="wf-cta-arrow"
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

<style scoped>
/* ── Root ─────────────────────────────────────────────────────────── */
.wf-root {
  position: relative;
  background: #0b1326;
  overflow: hidden;
  padding: 6rem 1.5rem;
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  color: #dae2fd;
}

/* circuit grid */
.wf-circuit {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(55, 182, 255, 0.025) 1px, transparent 1px),
    linear-gradient(0deg, rgba(55, 182, 255, 0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

/* atmospheric orb */
.wf-atmo {
  position: absolute;
  top: 0;
  left: 50%;
  width: 900px;
  height: 550px;
  background: radial-gradient(
    ellipse,
    rgba(55, 182, 255, 0.07) 0%,
    transparent 70%
  );
  filter: blur(60px);
  border-radius: 9999px;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 0;
  transition: transform 0.6s ease-out;
}

/* ── Inner ────────────────────────────────────────────────────────── */
.wf-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

/* ── Header ───────────────────────────────────────────────────────── */
.wf-header {
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
@media (min-width: 768px) {
  .wf-header {
    margin-bottom: 6rem;
  }
}

.wf-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #37b6ff;
}
.wf-title {
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  font-size: clamp(2.2rem, 5.5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #dae2fd;
  margin: 0;
}
.wf-title-accent {
  font-style: italic;
  font-weight: 700;
  color: #5fe0c4;
  text-shadow: 0 0 20px rgba(94, 224, 196, 0.4);
}
.wf-desc {
  max-width: 38rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: #c3c6d3;
  margin: 0;
}

/* ── Central visual ───────────────────────────────────────────────── */
.wf-visual {
  position: relative;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto 4rem;
  border-radius: 0.875rem;
  overflow: hidden;
  border: 1px solid rgba(126, 165, 224, 0.12);
  background: rgba(126, 165, 224, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
@media (min-width: 768px) {
  .wf-visual {
    margin-bottom: 5rem;
  }
}

.wf-diagram {
  display: block;
  width: 100%;
  height: auto;
}

.wf-diagram--vertical {
  display: none;
  padding-bottom: 25px;
}

@media (max-width: 640px) {
  .wf-diagram--horizontal {
    display: none;
  }
  .wf-diagram--vertical {
    display: block;
  }
  .wf-visual-overlay-t,
  .wf-visual-overlay-s {
    display: none;
  }
}

.wf-visual-overlay-t {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, #0b1326 0%, transparent 100%);
  pointer-events: none;
}
.wf-visual-overlay-s {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20%;
  background: linear-gradient(
    to bottom,
    rgba(11, 19, 38, 0.4) 0%,
    transparent 100%
  );
  pointer-events: none;
}

/* ── Stage cards grid ─────────────────────────────────────────────── */
.wf-stages {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 640px) {
  .wf-stages {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .wf-stages {
    grid-template-columns: repeat(5, 1fr);
  }
}

/* ── Glass card ───────────────────────────────────────────────────── */
.wf-card {
  background: rgba(126, 165, 224, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(126, 165, 224, 0.12);
  border-radius: 0.875rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.wf-card:hover {
  background: rgba(126, 165, 224, 0.08);
  border-color: rgba(55, 182, 255, 0.3);
  box-shadow: 0 0 32px rgba(55, 182, 255, 0.1);
  transform: translateY(-4px);
}

/* featured center card */
.wf-card--featured {
  border-color: rgba(55, 182, 255, 0.2);
  background: rgba(55, 182, 255, 0.06);
}
.wf-card--featured:hover {
  border-color: rgba(55, 182, 255, 0.4);
  box-shadow: 0 0 40px rgba(55, 182, 255, 0.18);
}

/* card top row */
.wf-card-top {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
}

/* icon */
.wf-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: rgba(55, 182, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #37b6ff;
  transition:
    background 0.3s ease,
    color 0.3s ease;
}
.wf-icon svg {
  width: 1.1rem;
  height: 1.1rem;
}
.wf-card:hover .wf-icon {
  background: #37b6ff;
  color: #00344d;
}
.wf-icon--featured {
  background: rgba(55, 182, 255, 0.18);
}

/* stage label wrapper */
.wf-stage-label {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8d909c;
  font-style: normal;
}

/* stage number — the part that lights up */
.wf-stage-num {
  font-style: normal;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: #8d909c;
  transition:
    color 0.3s ease,
    text-shadow 0.3s ease;
}
.wf-card:hover .wf-stage-num {
  color: #37b6ff;
  text-shadow: 0 0 14px rgba(55, 182, 255, 0.5);
}

/* card text */
.wf-card-title {
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #dae2fd;
  margin: 0;
}
.wf-card-body {
  font-family: "Inter", sans-serif;
  font-size: 0.82rem;
  line-height: 1.65;
  color: #c3c6d3;
  margin: 0;
  flex: 1;
}

/* card footer */
.wf-card-footer {
  padding-top: 0.875rem;
  border-top: 1px solid rgba(126, 165, 224, 0.1);
  margin-top: auto;
}
.wf-card-layer {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #37b6ff;
}

/* ── CTA ──────────────────────────────────────────────────────────── */
.wf-cta-wrap {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
}
.wf-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: #37b6ff;
  color: #00344d;
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 0.5rem;
  text-decoration: none;
  box-shadow: 0 0 18px rgba(55, 182, 255, 0.22);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}
.wf-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(55, 182, 255, 0.4);
  background: #5fe0c4;
}
.wf-cta:active {
  transform: scale(0.97);
}
.wf-cta-arrow {
  width: 1rem;
  height: 1rem;
}
</style>
