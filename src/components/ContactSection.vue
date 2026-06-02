<template>
  <SectionWrapper id="contact" wrapperClass="bg-sis-panel text-sis-text">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="rounded-[2rem] border border-sis-border bg-white p-10 shadow-sis">
          <p class="text-sm uppercase tracking-[0.3em] text-sis-accent" data-reveal>Contact</p>
          <h2 class="mt-3 text-2xl font-semibold sm:text-3xl" data-reveal>{{ contact?.headline }}</h2>
          <div class="mt-8 space-y-6">
            <div class="flex items-center gap-4" data-reveal>
              <span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-sis-primary text-white">🌐</span>
              <div>
                <p class="text-sm uppercase tracking-[0.2em] text-sis-muted">Website</p>
                <p class="mt-2 font-semibold text-sis-text">{{ contact?.website }}</p>
              </div>
            </div>
            <div class="flex items-center gap-4" data-reveal>
              <span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-sis-primary text-white">✉️</span>
              <div>
                <p class="text-sm uppercase tracking-[0.2em] text-sis-muted">Email</p>
                <p class="mt-2 font-semibold text-sis-text">{{ contact?.email }}</p>
              </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-2" data-reveal>
              <div class="rounded-3xl bg-sis-panel p-5">
                <p class="text-sm uppercase tracking-[0.2em] text-sis-muted">Phone</p>
                <div class="mt-3 space-y-2 font-semibold text-sis-text">
                  <p v-for="phone in contact?.phones" :key="phone">{{ phone }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form class="rounded-[2rem] border border-sis-border bg-sis-primary p-10 text-white shadow-sis" @submit.prevent>
          <p class="text-sm uppercase tracking-[0.3em] text-sis-light" data-reveal>Request a Call</p>
          <h3 class="mt-3 text-2xl font-semibold" data-reveal>Start your digital transformation</h3>
          <div class="mt-8 space-y-5">
            <label class="block" data-reveal>
              <span class="text-sm text-sis-panel/80">Name</span>
              <input class="mt-2 w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-sis-light focus:ring-2 focus:ring-sis-light/20" placeholder="Your name" />
            </label>
            <label class="block" data-reveal>
              <span class="text-sm text-sis-panel/80">Company Email</span>
              <input class="mt-2 w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-sis-light focus:ring-2 focus:ring-sis-light/20" placeholder="you@company.com" />
            </label>
            <label class="block" data-reveal>
              <span class="text-sm text-sis-panel/80">Message</span>
              <textarea rows="4" class="mt-2 w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-sis-light focus:ring-2 focus:ring-sis-light/20" placeholder="Tell us about your project"></textarea>
            </label>
            <button type="submit" class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-sis-primary shadow-sis transition hover:scale-[1.01]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import SectionWrapper from '@/components/SectionWrapper.vue'

const siteStore = useSiteStore()
const { contact } = storeToRefs(siteStore)
</script>
