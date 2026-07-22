<template>
  <section class="relative border-y border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] py-24 px-6 overflow-hidden" style="background: var(--bg-section-2)">
    <div class="max-w-7xl mx-auto relative z-10 ">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
        <div class="max-w-xl reveal reveal-fade-up">
          <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-sis-accent dark:text-[var(--accent-blue)] mb-3">Our Portfolio</span>
          <h2 class="text-4xl md:text-5xl font-black text-sis-text dark:text-[#eaf1fb] leading-tight mb-4">
            Sector Success <span class="text-sis-accent dark:text-[var(--accent-blue)]">Stories</span>
          </h2>
          <p class="text-sis-muted dark:text-[#aebfd8] text-lg leading-relaxed">
            Real deployments. Measured outcomes. Industrial-grade solutions delivered across the MENA region.
          </p>
        </div>
        <div class="flex flex-wrap gap-2 reveal reveal-fade-up" style="transition-delay: 0.1s">
          <button
            v-for="sector in sectors"
            :key="sector.id"
            @click="activeSector = sector.id"
            class="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
            :class="activeSector === sector.id
              ? 'bg-sis-accent dark:bg-[var(--accent-blue)] text-white dark:text-[#04121f] shadow-md shadow-[var(--bg-accent-30)] dark:shadow-[var(--accent-blue)]/30'
              : 'bg-sis-panel dark:bg-[#0e1728] text-sis-muted dark:text-[#aebfd8] border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] hover:border-sis-accent dark:hover:border-[var(--accent-blue)] hover:text-sis-accent dark:hover:text-[var(--accent-blue)]'"
          >
            {{ sector.label }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 stagger-container">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="rounded-2xl border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] px-6 py-5 flex flex-col gap-1 reveal reveal-fade-up"
          style="background: var(--bg-card-2)"
          :style="{ transitionDelay: `${0.1 + index * 0.1}s` }"
        >
          <span class="text-3xl font-black text-sis-accent dark:text-[var(--accent-blue)]"><AnimatedCounter :value="stat.value" :suffix="stat.suffix" /></span>
          <span class="text-xs font-semibold text-sis-muted dark:text-[#7688a6] uppercase tracking-wider">{{ stat.label }}</span>
        </div>
      </div>

      <template v-if="loaded">
        <transition name="fade-tab" mode="out-in">
          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3" :key="activeSector">
            <article
              v-for="(project, i) in filteredProjects"
              :key="project.client"
              class="group rounded-2xl border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] p-7 flex flex-col gap-4 reveal reveal-fade-up hover:border-[var(--bg-accent-50)] dark:hover:border-[var(--border-blue-50)] hover:shadow-xl hover:shadow-[var(--shadow-accent-8)] dark:hover:shadow-[var(--shadow-blue-8)] hover:-translate-y-1 transition-all duration-300"
              style="background: var(--bg-card-2)"
              :style="{ transitionDelay: `${i * 0.1}s` }"
            >
              <div class="flex items-center justify-between gap-2 flex-wrap">
                <span class="rounded-full bg-[var(--bg-accent-10)] dark:bg-[var(--accent-blue)]/10 text-sis-accent dark:text-[var(--accent-blue)] px-3 py-1 text-xs font-bold uppercase tracking-wide inline-flex items-center gap-1">{{ project.sector }}</span>
                <span class="flex items-center gap-1 text-xs text-sis-muted dark:text-[#7688a6]">
                  <span class="material-symbols-outlined" style="font-size: 14px">location_on</span>
                  {{ project.location }}
                </span>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-[var(--bg-accent-8)] dark:bg-[rgba(var(--accent-blue-r), var(--accent-blue-g), var(--accent-blue-b),0.08)] border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] flex items-center justify-center flex-shrink-0 group-hover:bg-sis-accent dark:group-hover:bg-[var(--accent-blue)] group-hover:border-sis-accent dark:group-hover:border-[var(--accent-blue)] transition-all duration-300">
                  <span class="material-symbols-outlined text-sis-accent dark:text-[var(--accent-blue)] group-hover:text-white dark:group-hover:text-[#04121f] transition-colors duration-300" style="font-size: 22px">{{ iconForSector(project.sector) || "factory" }}</span>
                </div>
                <h3 class="text-lg font-bold text-sis-text dark:text-[#eaf1fb] leading-snug">{{ project.client }}</h3>
              </div>
              <p class="text-sm text-sis-muted dark:text-[#aebfd8] leading-relaxed flex-1">{{ project.summary }}</p>
              <div class="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-20)] dark:border-[rgba(126,165,224,0.08)]">
                <span v-for="tag in project.tags || []" :key="tag" class="text-xs bg-[var(--bg-panel-60)] dark:bg-[rgba(126,165,224,0.06)] text-sis-muted dark:text-[#7688a6] px-2.5 py-1 rounded-md font-medium">{{ tag }}</span>
              </div>
            </article>
          </div>
        </transition>
      </template>

      <div v-else class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="n in 6" :key="n" class="h-52 rounded-2xl skeleton"></div>
      </div>

      <div v-if="loaded && filteredProjects.length === 0" class="text-center py-20">
        <span class="material-symbols-outlined text-5xl text-[var(--text-border-40)] dark:text-[rgba(126,165,224,0.2)] block mb-4">search_off</span>
        <p class="text-sis-muted dark:text-[#7688a6] text-lg">No projects found for this sector yet.</p>
      </div>

      <div class="mt-24 pt-16 border-t border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)]">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div class="max-w-xl reveal reveal-fade-up">
            <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-sis-accent dark:text-[var(--accent-blue)] mb-3">Project Gallery</span>
            <h2 class="text-3xl md:text-4xl font-black text-sis-text dark:text-[#eaf1fb] leading-tight">Visual <span class="text-sis-accent dark:text-[var(--accent-blue)]">Showcase</span></h2>
          </div>
          <div class="flex flex-wrap gap-2 reveal reveal-fade-up" style="transition-delay: 0.1s">
            <button
              v-for="cat in galleryCategories"
              :key="cat.id"
              @click="activeGallery = cat.id"
              class="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
              :class="activeGallery === cat.id
                ? 'bg-sis-accent dark:bg-[var(--accent-blue)] text-white dark:text-[#04121f] shadow-md shadow-[var(--bg-accent-30)] dark:shadow-[var(--accent-blue)]/30'
                : 'bg-sis-panel dark:bg-[#0e1728] text-sis-muted dark:text-[#aebfd8] border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)] hover:border-sis-accent dark:hover:border-[var(--accent-blue)] hover:text-sis-accent dark:hover:text-[var(--accent-blue)]'"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 reveal reveal-fade-up">
          <div
            v-for="(img, i) in filteredGallery"
            :key="img.src"
            class="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-[var(--border-30)] dark:border-[rgba(126,165,224,0.14)]"
            style="background: var(--bg-card-2)"
            @click="openLightbox(i)"
          >
            <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span class="text-xs text-white/90 font-medium">{{ img.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <Teleport to="body">
        <transition name="lightbox-fade">
          <div v-if="lightboxOpen" class="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" @click.self="closeLightbox">
            <button aria-label="Close image viewer" class="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center text-2xl" @click="closeLightbox">✕</button>
            <button v-if="lightboxIndex > 0" aria-label="Previous image" class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center text-2xl" @click="prevImage">‹</button>
            <img :src="filteredGallery[lightboxIndex]?.fullSrc || filteredGallery[lightboxIndex]?.src" :alt="filteredGallery[lightboxIndex]?.alt" class="max-w-full max-h-[90vh] object-contain rounded-xl" />
            <button v-if="lightboxIndex < filteredGallery.length - 1" aria-label="Next image" class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center text-2xl" @click="nextImage">›</button>
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">{{ lightboxIndex + 1 }} / {{ filteredGallery.length }}</div>
          </div>
        </transition>
      </Teleport>

      <div class="mt-14 text-center">
        <p class="text-sis-muted dark:text-[#7688a6] mb-4 text-sm">Interested in working with SiS on your next industrial project?</p>
        <a @click.prevent="router.push({ name: 'contact' })" href="#" class="inline-flex items-center gap-2 bg-sis-accent dark:bg-[var(--accent-blue)] text-white dark:text-[#04121f] font-bold px-8 py-4 rounded-xl hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--bg-accent-30)] dark:hover:shadow-[var(--accent-blue)]/30 transition-all duration-200">
          <span>Start a Conversation</span>
          <span class="material-symbols-outlined" style="font-size: 18px">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, ref } from "vue";
import { storeToRefs } from "pinia";
import { useSiteStore } from "@/stores/useSiteStore";
import { useRouter } from "vue-router";
import AnimatedCounter from "@/components/AnimatedCounter.vue";

const siteStore = useSiteStore();
const router = useRouter();
const { sectors, projects, loaded } = storeToRefs(siteStore);
const activeSector = ref("oil-gas");

function iconForSector(label) {
  if (!label) return "precision_manufacturing";
  const s = label.toLowerCase();
  if (s.includes("oil") || s.includes("gas")) return "local_gas_station";
  if (s.includes("water")) return "water_drop";
  if (s.includes("food") || s.includes("beverage")) return "restaurant";
  if (s.includes("cement") || s.includes("heavy")) return "handyman";
  if (s.includes("chemical")) return "science";
  return "precision_manufacturing";
}

const filteredProjects = computed(() => {
  if (!projects.value) return [];
  const sectorLabel = sectors.value?.find((s) => s.id === activeSector.value)?.label;
  return projects.value.filter((project) => project.sector === sectorLabel);
});

const stats = [
  { value: 12, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "", label: "Industry Sectors" },
  { value: 7, suffix: "+", label: "Countries" },
  { value: 100, suffix: "%", label: "On-Site Commissioning" },
];

const galleryCategories = [
  { id: "all", label: "All" },
  { id: "scada", label: "SCADA" },
  { id: "field", label: "Field & AR" },
  { id: "panels", label: "Panel Solutions" },
];

const galleryImages = [
  { src: new URL("../images/SCADA/SCADA-1-150x150.jpg", import.meta.url).href, category: "scada", label: "SCADA Dashboard", alt: "SCADA control screen" },
  { src: new URL("../images/SCADA/SCADA-2-150x150.jpg", import.meta.url).href, category: "scada", label: "SCADA Monitoring", alt: "SCADA monitoring display" },
  { src: new URL("../images/SCADA/SCADA-3-150x150.jpg", import.meta.url).href, category: "scada", label: "SCADA Interface", alt: "SCADA interface view" },
  { src: new URL("../images/SCADA/SCADA-4-150x150.jpg", import.meta.url).href, category: "scada", label: "SCADA Control Room", alt: "SCADA control room" },
  { src: new URL("../images/SCADA/SCADA-5-150x150.jpg", import.meta.url).href, category: "scada", label: "Process Overview", alt: "SCADA process overview" },
  { src: new URL("../images/SCADA/SCADA-6-150x150.jpg", import.meta.url).href, category: "scada", label: "System Dashboard", alt: "SCADA system dashboard" },
  { src: new URL("../images/SCADA/SCADA-7-150x150.jpg", import.meta.url).href, category: "scada", label: "Data Visualization", alt: "SCADA data visualization" },
  { src: new URL("../images/SCADA/SCADA-8-150x150.jpg", import.meta.url).href, category: "scada", label: "SCADA Operations", alt: "SCADA operations screen" },
  { src: new URL("../images/AR/7-150x150.jpg", import.meta.url).href, category: "field", label: "Field Installation", alt: "Field installation work" },
  { src: new URL("../images/AR/6-150x150.jpg", import.meta.url).href, category: "field", label: "On-Site Commissioning", alt: "On-site commissioning" },
  { src: new URL("../images/AR/AR-2-150x150.jpg", import.meta.url).href, category: "field", label: "AR-Assisted Validation", alt: "Augmented reality validation" },
  { src: new URL("../images/AR/18-150x150.jpg", import.meta.url).href, category: "field", label: "Field Equipment", alt: "Field equipment setup" },
  { src: new URL("../images/Panel/Panel-Soultions-4-1-150x150.jpg", import.meta.url).href, category: "panels", label: "Control Panel Assembly", alt: "Electrical control panel" },
  { src: new URL("../images/Panel/Panel-Soultions-5-1-150x150.jpg", import.meta.url).href, category: "panels", label: "Panel Wiring", alt: "Panel wiring and assembly" },
  { src: new URL("../images/Panel/Panel-Soultions-2-1-150x150.jpg", import.meta.url).href, category: "panels", label: "Electrical Panel", alt: "Power control panel" },
  { src: new URL("../images/Panel/Panel-Soultions-1-1-150x150.jpg", import.meta.url).href, category: "panels", label: "Panel Integration", alt: "Panel integration work" },
];

const activeGallery = ref("all");

const filteredGallery = computed(() => {
  if (activeGallery.value === "all") return galleryImages;
  return galleryImages.filter((img) => img.category === activeGallery.value);
});

const lightboxOpen = ref(false);
const lightboxIndex = ref(0);

function openLightbox(index) {
  lightboxIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightboxOpen.value = false;
  document.body.style.overflow = "";
}
function prevImage() {
  if (lightboxIndex.value > 0) lightboxIndex.value--;
}
function nextImage() {
  if (lightboxIndex.value < filteredGallery.value.length - 1) lightboxIndex.value++;
}

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>
