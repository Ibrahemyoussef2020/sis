<template>
  <section class=" projects bg-[#f7f9fb] !py-24 px-6 relative overflow-hidden">

    <!-- Subtle top gradient -->
    <div class="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto relative z-10 mt-16">

      <!-- Header -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
        <div class="max-w-xl reveal reveal-fade-up">
          <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#3e7fca] mb-3">Our Portfolio</span>
          <h2 class="text-4xl md:text-5xl font-black text-[#191c1e] leading-tight mb-4">
            Sector Success <span class="text-[#3e7fca]">Stories</span>
          </h2>
          <p class="text-[#6b7280] text-lg leading-relaxed">
            Real deployments. Measured outcomes. Industrial-grade solutions delivered across the MENA region.
          </p>
        </div>

        <!-- Sector filter tabs -->
        <div class="flex flex-wrap gap-2 reveal reveal-fade-up" style="transition-delay: 0.1s;">
          <button
            v-for="sector in sectors"
            :key="sector.id"
            @click="activeSector = sector.id"
            class="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
            :class="activeSector === sector.id
              ? 'bg-[#3e7fca] text-white shadow-md shadow-[#3e7fca]/30'
              : 'bg-white text-[#444655] border border-[#dde1e7] hover:border-[#3e7fca] hover:text-[#3e7fca]'"
          >{{ sector.label }}</button>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 stagger-container">
        <div v-for="(stat, index) in stats" :key="stat.label"
             class="bg-white rounded-2xl border border-[#e6e8ea] px-6 py-5 flex flex-col gap-1 reveal reveal-fade-up"
             :style="{ transitionDelay: `${0.1 + (index * 0.1)}s` }">
          <span class="text-3xl font-black text-[#3e7fca]"><AnimatedCounter :value="stat.value" :suffix="stat.suffix" /></span>
          <span class="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">{{ stat.label }}</span>
        </div>
      </div>

      <!-- Project cards grid -->
      <template v-if="loaded">
        <transition name="fade-tab" mode="out-in">
          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3" :key="activeSector">
            <article
              v-for="(project, i) in filteredProjects"
              :key="project.client"
              class="group bg-white rounded-2xl border border-[#e6e8ea] p-7 flex flex-col gap-4 reveal reveal-fade-up
                     hover:border-[#3e7fca]/50 hover:shadow-xl hover:shadow-[#3e7fca]/8
                     hover:-translate-y-1 transition-all duration-300"
              :style="{ transitionDelay: `${i * 0.1}s` }"
            >
              <!-- Top row: sector badge + location -->
              <div class="flex items-center justify-between gap-2 flex-wrap">
                <span class="rounded-full bg-[#3e7fca]/10 text-[#3e7fca] px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {{ project.sector }}
                </span>
                <span class="flex items-center gap-1 text-xs text-[#9ca3af]">
                  <span class="material-symbols-outlined" style="font-size:14px;">location_on</span>
                  {{ project.location }}
                </span>
              </div>

              <!-- Icon + client name -->
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-[#f0f5ff] border border-[#dde8ff] flex items-center justify-center flex-shrink-0
                            group-hover:bg-[#3e7fca] group-hover:border-[#3e7fca] transition-all duration-300">
                  <span class="material-symbols-outlined text-[#3e7fca] group-hover:text-white transition-colors duration-300"
                        style="font-size:22px;">{{ project.icon || 'factory' }}</span>
                </div>
                <h3 class="text-lg font-bold text-[#191c1e] leading-snug">{{ project.client }}</h3>
              </div>

              <!-- Summary -->
              <p class="text-sm text-[#6b7280] leading-relaxed flex-1">{{ project.summary }}</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 pt-2 border-t border-[#f0f0f0]">
                <span
                  v-for="tag in (project.tags || [])"
                  :key="tag"
                  class="text-xs bg-[#f2f4f6] text-[#444655] px-2.5 py-1 rounded-md font-medium"
                >{{ tag }}</span>
              </div>
            </article>
          </div>
        </transition>
      </template>

      <!-- Skeleton loaders -->
      <div v-else class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="n in 6" :key="n"
             class="h-52 rounded-2xl animate-pulse bg-gradient-to-r from-[#e6e8ea] via-[#f2f4f6] to-[#e6e8ea]"
             :style="{ animationDelay: `${n * 100}ms` }">
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="loaded && filteredProjects.length === 0" class="text-center py-20">
        <span class="material-symbols-outlined text-5xl text-[#dde1e7] block mb-4">search_off</span>
        <p class="text-[#9ca3af] text-lg">No projects found for this sector yet.</p>
      </div>

      <!-- ── Gallery Section ──────────────────────────────────────────── -->
      <div class="mt-24 pt-16 border-t border-[#e6e8ea]">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div class="max-w-xl reveal reveal-fade-up">
            <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#3e7fca] mb-3">Project Gallery</span>
            <h2 class="text-3xl md:text-4xl font-black text-[#191c1e] leading-tight">
              Visual <span class="text-[#3e7fca]">Showcase</span>
            </h2>
          </div>
          <div class="flex flex-wrap gap-2 reveal reveal-fade-up" style="transition-delay: 0.1s;">
            <button
              v-for="cat in galleryCategories"
              :key="cat.id"
              @click="activeGallery = cat.id"
              class="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
              :class="activeGallery === cat.id
                ? 'bg-[#3e7fca] text-white shadow-md shadow-[#3e7fca]/30'
                : 'bg-white text-[#444655] border border-[#dde1e7] hover:border-[#3e7fca] hover:text-[#3e7fca]'"
            >{{ cat.label }}</button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 reveal reveal-fade-up">
          <div
            v-for="(img, i) in filteredGallery"
            :key="img.src"
            class="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-[#e6e8ea] bg-white"
            @click="openLightbox(i)"
          >
            <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" loading="lazy" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
            >
              <span class="text-xs text-white/90 font-medium">{{ img.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <Teleport to="body">
        <transition name="lightbox-fade">
          <div
            v-if="lightboxOpen"
            class="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            @click.self="closeLightbox"
          >
            <button
              class="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center text-2xl"
              @click="closeLightbox"
            >✕</button>

            <button
              v-if="lightboxIndex > 0"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center text-2xl"
              @click="prevImage"
            >‹</button>

            <img
              :src="filteredGallery[lightboxIndex]?.fullSrc || filteredGallery[lightboxIndex]?.src"
              :alt="filteredGallery[lightboxIndex]?.alt"
              class="max-w-full max-h-[90vh] object-contain rounded-xl"
            />

            <button
              v-if="lightboxIndex < filteredGallery.length - 1"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center text-2xl"
              @click="nextImage"
            >›</button>

            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">
              {{ lightboxIndex + 1 }} / {{ filteredGallery.length }}
            </div>
          </div>
        </transition>
      </Teleport>

      <!-- CTA -->
      <div class="mt-14 text-center">
        <p class="text-[#6b7280] mb-4 text-sm">Interested in working with SiS on your next industrial project?</p>
        <a href="#contact"
           class="inline-flex items-center gap-2 bg-[#3e7fca] text-white font-bold px-8 py-4 rounded-xl
                  hover:bg-[#2d6bb5] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3e7fca]/30
                  transition-all duration-200">
          <span>Start a Conversation</span>
          <span class="material-symbols-outlined" style="font-size:18px;">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import AnimatedCounter from '@/components/AnimatedCounter.vue'

const siteStore = useSiteStore()
const { sectors, projects, loaded } = storeToRefs(siteStore)
const activeSector = ref('oil-gas')

const filteredProjects = computed(() => {
  if (!projects.value) return []
  const sectorLabel = sectors.value?.find((s) => s.id === activeSector.value)?.label
  return projects.value.filter((project) => project.sector === sectorLabel)
})

const stats = [
  { value: 12, suffix: '+', label: 'Projects Delivered' },
  { value: 5,  suffix: '',  label: 'Industry Sectors' },
  { value: 7,  suffix: '+', label: 'Countries' },
  { value: 100, suffix: '%', label: 'On-Site Commissioning' },
]

// ── Gallery ──────────────────────────────────────────────────────────
const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'scada', label: 'SCADA' },
  { id: 'field', label: 'Field & AR' },
  { id: 'panels', label: 'Panel Solutions' },
]

const galleryImages = [
  // SCADA group
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/SCADA-1-150x150.jpg', category: 'scada', label: 'SCADA Dashboard', alt: 'SCADA control screen' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/SCADA-2-150x150.jpg', category: 'scada', label: 'SCADA Monitoring', alt: 'SCADA monitoring display' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/SCADA-3-150x150.jpg', category: 'scada', label: 'SCADA Interface', alt: 'SCADA interface view' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/SCADA-4-150x150.jpg', category: 'scada', label: 'SCADA Control Room', alt: 'SCADA control room' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/SCADA-5-150x150.jpg', category: 'scada', label: 'Process Overview', alt: 'SCADA process overview' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/SCADA-6-150x150.jpg', category: 'scada', label: 'System Dashboard', alt: 'SCADA system dashboard' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/SCADA-7-150x150.jpg', category: 'scada', label: 'Data Visualization', alt: 'SCADA data visualization' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/SCADA-8-150x150.jpg', category: 'scada', label: 'SCADA Operations', alt: 'SCADA operations screen' },
  // Field & AR group
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/7-150x150.jpeg', category: 'field', label: 'Field Installation', alt: 'Field installation work' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/6-150x150.jpeg', category: 'field', label: 'On-Site Commissioning', alt: 'On-site commissioning' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/AR-2-150x150.jpg', category: 'field', label: 'AR-Assisted Validation', alt: 'Augmented reality validation' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/18-150x150.jpeg', category: 'field', label: 'Field Equipment', alt: 'Field equipment setup' },
  // Panel Solutions group
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/Panel-Soultions-4-1-150x150.jpg', category: 'panels', label: 'Control Panel Assembly', alt: 'Electrical control panel' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/Panel-Soultions-5-1-150x150.jpg', category: 'panels', label: 'Panel Wiring', alt: 'Panel wiring and assembly' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/Panel-Soultions-2-1-150x150.jpg', category: 'panels', label: 'Electrical Panel', alt: 'Power control panel' },
  { src: 'https://sis-eg.org/wordpress/wp-content/uploads/2023/07/Panel-Soultions-1-1-150x150.jpg', category: 'panels', label: 'Panel Integration', alt: 'Panel integration work' },
]

const activeGallery = ref('all')

const filteredGallery = computed(() => {
  if (activeGallery.value === 'all') return galleryImages
  return galleryImages.filter((img) => img.category === activeGallery.value)
})

// Lightbox
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index) {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  if (lightboxIndex.value > 0) lightboxIndex.value--
}

function nextImage() {
  if (lightboxIndex.value < filteredGallery.value.length - 1) lightboxIndex.value++
}
</script>

<style scoped>
.fade-tab-enter-active,
.fade-tab-leave-active {
  transition: all 0.35s ease;
}

.fade-tab-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-tab-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
