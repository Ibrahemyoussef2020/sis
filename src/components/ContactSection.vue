<template>
  <section id="contact" class="relative border-y border-[rgba(126,165,224,0.14)] py-24 px-6 overflow-hidden" style="background: linear-gradient(180deg, #0a1120, #070d1a)">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#37b6ff]/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#37b6ff]/5 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-6 mt-20 reveal reveal-fade-up">
        <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#37b6ff] mb-3">Get in Touch</span>
        <h2 class="text-xl md:text-xl font-black text-[#eaf1fb] leading-tight mb-4">
          Ready to transform your <span class="text-[#37b6ff]">operations?</span>
        </h2>
        <p class="text-[#aebfd8] text-lg max-w-2xl mx-auto">
          {{ contact?.headline || "Let's discuss how our intelligent OT-IT solutions can elevate your industrial performance." }}
        </p>
      </div>

      <div class="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
        <div class="flex flex-col gap-8 reveal reveal-fade-up" style="transition-delay: 0.1s;">
          <div class="rounded-3xl p-8 border border-[rgba(126,165,224,0.14)] hover:shadow-md transition-shadow duration-300" style="background: linear-gradient(180deg, #0e1728, #0a1120)">
            <h3 class="text-2xl font-bold text-[#eaf1fb] mb-8">Contact Information</h3>
            <div class="space-y-8">
              <div class="flex items-start gap-5">
                <div class="w-14 h-14 rounded-2xl bg-[rgba(55,182,255,0.08)] text-[#37b6ff] flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined" style="font-size: 26px;">language</span>
                </div>
                <div>
                  <p class="text-xs font-bold tracking-widest uppercase text-[#7688a6] mb-1">Website</p>
                  <a :href="websiteUrl" target="_blank" rel="noopener noreferrer" class="text-lg font-semibold text-[#eaf1fb] hover:text-[#37b6ff] transition-colors">{{ contact?.website }}</a>
                </div>
              </div>
              <div class="flex items-start gap-5">
                <div class="w-14 h-14 rounded-2xl bg-[rgba(55,182,255,0.08)] text-[#37b6ff] flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined" style="font-size: 26px;">mail</span>
                </div>
                <div>
                  <p class="text-xs font-bold tracking-widest uppercase text-[#7688a6] mb-1">Email</p>
                  <a :href="'mailto:' + contact?.email" class="text-lg font-semibold text-[#eaf1fb] hover:text-[#37b6ff] transition-colors">{{ contact?.email }}</a>
                </div>
              </div>
              <div class="flex items-start gap-5">
                <div class="w-14 h-14 rounded-2xl bg-[rgba(55,182,255,0.08)] text-[#37b6ff] flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined" style="font-size: 26px;">call</span>
                </div>
                <div>
                  <p class="text-xs font-bold tracking-widest uppercase text-[#7688a6] mb-1">Phone</p>
                  <div class="space-y-1">
                    <p v-for="phone in contact?.phones" :key="phone" class="text-lg font-semibold text-[#eaf1fb]">{{ phone }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-3xl p-8 text-white relative overflow-hidden shadow-lg" style="background: linear-gradient(135deg, #1a3a5c, #0e1e34)">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 pointer-events-none"></div>
            <h4 class="text-xl font-bold mb-2">Need Technical Support?</h4>
            <p class="text-white/60 text-sm mb-6 leading-relaxed">Our engineering team is available 24/7 for critical infrastructure assistance.</p>
            <a href="#" @click.prevent class="inline-flex items-center gap-2 text-white font-bold text-sm hover:gap-3 hover:text-white/90 transition-all duration-300 active:scale-[0.97]">
              OPEN SUPPORT TICKET
              <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
            </a>
          </div>
        </div>

        <form class="rounded-3xl p-10 lg:p-12 border border-[rgba(126,165,224,0.14)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] reveal reveal-fade-up" style="background: linear-gradient(180deg, #0e1728, #0a1120); transition-delay: 0.2s;" @submit.prevent="handleSubmit">
          <div class="mb-10">
            <h3 class="text-3xl font-black text-[#eaf1fb] mb-3">Send us a message</h3>
            <p class="text-[#aebfd8]">Fill out the form below and our team will get back to you within 24 hours.</p>
          </div>

          <div class="space-y-6">
            <div class="group">
              <label class="block text-sm font-bold text-[#aebfd8] mb-2 uppercase tracking-wide">Full Name</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#7688a6] group-focus-within:text-[#37b6ff] transition-colors">person</span>
                <input v-model="form.name" type="text" class="w-full bg-[#0a1324] border border-[rgba(126,165,224,0.14)] rounded-xl py-4 pl-12 pr-4 text-[#eaf1fb] placeholder-[#7688a6] focus:outline-none focus:border-[#37b6ff] focus:ring-4 focus:ring-[#37b6ff]/10 transition-all duration-300" placeholder="John Doe" required />
              </div>
            </div>

            <div class="group">
              <label class="block text-sm font-bold text-[#aebfd8] mb-2 uppercase tracking-wide">Company Email</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#7688a6] group-focus-within:text-[#37b6ff] transition-colors">business_center</span>
                <input v-model="form.email" type="email" class="w-full bg-[#0a1324] border border-[rgba(126,165,224,0.14)] rounded-xl py-4 pl-12 pr-4 text-[#eaf1fb] placeholder-[#7688a6] focus:outline-none focus:border-[#37b6ff] focus:ring-4 focus:ring-[#37b6ff]/10 transition-all duration-300" placeholder="john@company.com" required />
              </div>
            </div>

            <div class="group">
              <label class="block text-sm font-bold text-[#aebfd8] mb-2 uppercase tracking-wide">Project Details</label>
              <textarea v-model="form.message" rows="5" class="w-full bg-[#0a1324] border border-[rgba(126,165,224,0.14)] rounded-xl p-4 text-[#eaf1fb] placeholder-[#7688a6] focus:outline-none focus:border-[#37b6ff] focus:ring-4 focus:ring-[#37b6ff]/10 transition-all duration-300 resize-none" placeholder="Tell us about your requirements, timeline, and goals..." required></textarea>
            </div>

            <button type="submit" :disabled="submitting" class="w-full bg-[#37b6ff] text-[#04121f] font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(55,182,255,0.4)] transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
              <span>{{ submitting ? 'Sending...' : 'Send Message' }}</span>
              <span class="material-symbols-outlined" style="font-size: 20px;">send</span>
            </button>
            <p class="text-center text-xs text-[#7688a6] mt-4">By submitting this form, you agree to our privacy policy and terms of service.</p>
          </div>
        </form>

        <ToastNotification v-if="showToast" title="Message Sent Successfully!" message="Thank you for reaching out. Our team will get back to you within 24 hours." @close="showToast = false" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'
import ToastNotification from '@/components/ToastNotification.vue'

const siteStore = useSiteStore()
const { contact } = storeToRefs(siteStore)

const websiteUrl = computed(() => {
  const value = contact.value?.website?.trim()
  if (!value) return '#'

  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`)
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '#'
  } catch {
    return '#'
  }
})

const form = reactive({ name: '', email: '', message: '' })
const submitting = ref(false)
const showToast = ref(false)

function handleSubmit() {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    form.name = ''
    form.email = ''
    form.message = ''
    showToast.value = true
  }, 800)
}
</script>
