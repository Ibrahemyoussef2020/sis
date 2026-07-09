<template>
  <section class="video-root">
    <div class="circuit-bg" aria-hidden="true"></div>
    <div class="orb orb-tl" aria-hidden="true"></div>
    <div class="orb orb-br" aria-hidden="true"></div>

    <div class="video-inner">
      <div class="video-header" data-reveal>
        <div class="label-row">
          <span class="label-line"></span>
          <span class="label-text">See Us In Action</span>
        </div>
        <h2 class="video-title">
          Industrial Intelligence <em class="title-accent">in Motion</em>
        </h2>
        <p class="video-desc">
          Watch how SiS bridges the gap between operational technology and
          information technology — delivering real results across the MENA region.
        </p>
      </div>

      <div class="video-container" data-reveal>
        <div class="video-wrapper">
          <iframe
            :src="youtubeSrc"
            title="SiS Industrial Automation in Action"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            class="video-iframe"
          ></iframe>
        </div>

        <div class="video-actions">
          <a
            :href="youtubeLink"
            target="_blank"
            rel="noopener noreferrer"
            class="video-cta"
          >
            <svg class="cta-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const videoId = 'jhwNcujM9g0'
const youtubeSrc = computed(() =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=1&modestbranding=1&rel=0`
)
const youtubeLink = computed(() =>
  `https://www.youtube.com/watch?v=${videoId}`
)
</script>

<style scoped>
.video-root {
  position: relative;
  overflow: hidden;
  background: #0b1326;
  padding: 6rem 1.5rem;
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
}

.circuit-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(137,206,255,0.025) 1px, transparent 1px),
    linear-gradient(0deg, rgba(137,206,255,0.025) 1px, transparent 1px);
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
  width: 600px;
  height: 600px;
  top: -15rem;
  left: -10rem;
  background: rgba(175,198,255,0.04);
  filter: blur(120px);
  animation: pulse-slow 6s ease-in-out infinite;
}
.orb-br {
  width: 500px;
  height: 500px;
  bottom: -12rem;
  right: -8rem;
  background: rgba(137,206,255,0.06);
  filter: blur(130px);
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.video-inner {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
}

.video-header {
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.label-row {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}
.label-line {
  display: block;
  width: 3rem;
  height: 1px;
  background: #afc6ff;
}
.label-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #afc6ff;
}

.video-title {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3rem);
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
  text-shadow: 0 0 30px rgba(175,198,255,0.3);
}

.video-desc {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: #8d909c;
  max-width: 36rem;
  margin: 0;
}

.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.video-wrapper {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    0 0 40px rgba(137,206,255,0.06),
    0 20px 60px rgba(0,0,0,0.3);
  aspect-ratio: 16 / 9;
}

.video-iframe {
  width: 100%;
  height: 100%;
  display: block;
}

.video-actions {
  display: flex;
  gap: 1rem;
}

.video-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: #c3c6d3;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;
}

.video-cta:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.25);
  color: #dae2fd;
}

.cta-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #ff0033;
}
</style>
