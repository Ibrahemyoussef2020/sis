<template>
  <section class="clients-root">
    <div class="circuit-bg" aria-hidden="true"></div>
    <div class="orb orb-tl" aria-hidden="true"></div>
    <div class="orb orb-br" aria-hidden="true"></div>

    <div class="clients-inner">
      <div class="clients-header" data-reveal>
        <div class="label-row">
          <span class="label-line"></span>
          <span class="label-text">Our Clientele</span>
        </div>
        <h2 class="clients-title">
          Trusted by <em class="title-accent">Industry Leaders</em>
        </h2>
        <p class="clients-desc">
          Partnering with leading organizations across the MENA region to
          deliver industrial excellence.
        </p>
      </div>

      <div class="marquee-container" data-reveal>
        <div class="marquee-track">
          <div class="marquee-group">
            <img
              v-for="(client, i) in clients"
              :key="i"
              :src="client.src"
              :alt="client.name"
              class="client-logo"
              loading="lazy"
            />
          </div>
          <div class="marquee-group" aria-hidden="true">
            <img
              v-for="(client, i) in clients"
              :key="'dup-' + i"
              :src="client.src"
              :alt="client.name"
              class="client-logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
  { name: "Emitsal", src: emitsal },
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

<style scoped>
.clients-root {
  position: relative;
  overflow: hidden;
  background: #0b1326;
  padding: 6rem 1.5rem;
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
}

.circuit-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(137, 206, 255, 0.025) 1px, transparent 1px),
    linear-gradient(0deg, rgba(137, 206, 255, 0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  z-index: 0;
}
.orb-tl {
  width: 500px;
  height: 500px;
  top: -12rem;
  left: -10rem;
  background: rgba(175, 198, 255, 0.04);
  filter: blur(120px);
  animation: pulse-slow 6s ease-in-out infinite;
}
.orb-br {
  width: 500px;
  height: 500px;
  bottom: -12rem;
  right: -8rem;
  background: rgba(137, 206, 255, 0.06);
  filter: blur(130px);
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.clients-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.clients-header {
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.label-row {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.25rem;
}
.label-line {
  display: block;
  width: 3rem;
  height: 1px;
  background: #afc6ff;
}
.label-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #afc6ff;
}

.clients-title {
  font-family: "Plus Jakarta Sans", "Inter", sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #dae2fd;
  margin: 0;
}
.title-accent {
  font-style: italic;
  font-weight: 700;
  color: #afc6ff;
  text-shadow: 0 0 30px rgba(175, 198, 255, 0.3);
}

.clients-desc {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: #8d909c;
  max-width: 36rem;
  margin: 0;
}

/* ── Marquee ──────────────────────────────────────────────────────── */
.marquee-container {
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
}

.marquee-track {
  display: flex;
  gap: 4rem;
  width: max-content;
  animation: marquee-scroll 50s linear infinite;
}

.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-group {
  display: flex;
  gap: 4rem;
  align-items: center;
}

.client-logo {
  flex-shrink: 0;
  width: 14rem;
  height: auto;
  aspect-ratio: auto;
  object-fit: contain;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 1.25rem 2rem;
  filter: brightness(0.85) contrast(1.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
}

.client-logo:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(175, 198, 255, 0.2);
  box-shadow: 0 0 24px rgba(14, 165, 233, 0.1);
  transform: scale(1.05);
  filter: brightness(1.1) contrast(1.1);
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
