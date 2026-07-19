<template>
  <section class="clients-root" ref="sectionRef">

    <!-- Atmospheric glows (Methodology style) -->
    <div class="clients-glow clients-glow--tr" aria-hidden="true"></div>
    <div class="clients-glow clients-glow--bl" aria-hidden="true"></div>

    <div class="clients-inner">
      <div class="clients-header" data-reveal>
        <span class="clients-eyebrow">Our Clientele</span>
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
            <div v-for="(client, i) in clients" :key="i" class="client-card">
              <img
                :src="client.src"
                :alt="client.name"
                class="client-logo"
                loading="lazy"
              />
              <span class="client-name">{{ client.name }}</span>
            </div>
          </div>
          <div class="marquee-group" aria-hidden="true">
            <div v-for="(client, i) in clients" :key="'dup-' + i" class="client-card">
              <img
                :src="client.src"
                :alt="client.name"
                class="client-logo"
                loading="lazy"
              />
              <span class="client-name">{{ client.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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

const sectionRef = ref(null)

onMounted(() => {
  if (!sectionRef.value) return
  const items = [...sectionRef.value.querySelectorAll('[data-reveal]')]
  items.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(24px)' })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      items.forEach((el, i) => {
        setTimeout(() => {
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, i * 120)
      })
      observer.disconnect()
    })
  }, { threshold: 0.15 })

  observer.observe(sectionRef.value)
})
</script>

<style scoped>
/* ── Root ──────────────────────────────────────────────────────────── */
.clients-root {
  position: relative;
  overflow: hidden;
  background: #0a1120;
  padding: 6rem 1.5rem;
  font-family: 'Plus Jakarta Sans', 'Manrope', 'Inter', sans-serif;
  color: #eaf1fb;
}

/* atmospheric glows */
.clients-glow {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
}
.clients-glow--tr {
  width: 24rem; height: 24rem;
  top: -6rem; right: -6rem;
  background: rgba(55, 182, 255, 0.07);
  filter: blur(80px);
}
.clients-glow--bl {
  width: 16rem; height: 16rem;
  bottom: -4rem; left: -4rem;
  background: rgba(94, 224, 196, 0.05);
  filter: blur(80px);
}

.clients-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* ── Header ────────────────────────────────────────────────────────── */
.clients-header {
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.clients-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #37b6ff;
  margin-bottom: 0.25rem;
}

.clients-title {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #eaf1fb;
  margin: 0;
}
.title-accent {
  font-style: italic;
  font-weight: 700;
  color: #5fe0c4;
}

.clients-desc {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: #a8b3cf;
  max-width: 36rem;
  margin: 0;
}

/* ── Marquee ──────────────────────────────────────────────────────── */
.marquee-container {
  overflow: hidden;
  width: 100%;
  min-width: 0;
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
  gap: 3rem;
  width: max-content;
  animation: marquee-scroll 50s linear infinite;
  background: rgba(126, 165, 224, 0.06);
  border: 1px solid rgba(126, 165, 224, 0.14);
  border-radius: 0.75rem;
  padding: 0.5rem 1.5rem;
}

.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-group {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.client-logo {
  flex-shrink: 0;
  width: 12rem;
  height: auto;
  aspect-ratio: auto;
  object-fit: contain;
  cursor: default;
  filter: brightness(0.85);
  transition: filter 0.4s ease;
}
.client-logo:hover {
  filter: brightness(1.1);
}

.client-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.client-name {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #a8b3cf;
  text-align: center;
  line-height: 1.3;
  white-space: nowrap;
  transition: color 0.3s ease;
}
.client-card:hover .client-name {
  color: #eaf1fb;
}

@media (max-width: 768px) {
  .clients-root {
    padding: 4rem 1.5rem;
  }

  .clients-glow--tr {
    width: 300px; height: 300px;
    top: -8rem; right: -6rem;
    filter: blur(80px);
  }
  .clients-glow--bl {
    width: 300px; height: 300px;
    bottom: -8rem; left: -5rem;
    filter: blur(80px);
  }

  .marquee-track {
    padding: 0.5rem 1rem;
    gap: 2rem;
  }
  .marquee-group {
    gap: 2rem;
  }
  .client-logo {
    width: 9rem;
  }
}

@media (max-width: 480px) {
  .clients-root {
    padding: 3rem 1rem;
  }

  .clients-glow--tr {
    width: 180px; height: 180px;
    top: -5rem; right: -4rem;
    filter: blur(50px);
  }
  .clients-glow--bl {
    width: 180px; height: 180px;
    bottom: -5rem; left: -3rem;
    filter: blur(50px);
  }

  .marquee-track {
    padding: 0.4rem 0.75rem;
    gap: 1.25rem;
  }
  .marquee-group {
    gap: 1.25rem;
  }
  .client-logo {
    width: 6rem;
  }
  .client-name {
    font-size: 0.75rem;
  }
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
