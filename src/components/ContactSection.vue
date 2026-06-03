<template>
  <section id="contact" class="bg-[#f7f9fb] py-24 px-6 relative overflow-hidden">
    <!-- Subtle background elements -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3e7fca]/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3e7fca]/5 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      
      <!-- Section Header -->  
      <div class="text-center mb-6 mt-20 reveal reveal-fade-up">
        <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#3e7fca] mb-3">Get in Touch</span>
        <h2 class="text-xl md:text-xl font-black text-[#191c1e] leading-tight mb-4">
          Ready to transform your <span class="text-[#3e7fca]">operations?</span>
        </h2>
        <p class="text-[#6b7280] text-lg max-w-2xl mx-auto">
          {{ contact?.headline || "Let's discuss how our intelligent OT-IT solutions can elevate your industrial performance." }}
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
        
        <!-- Left: Contact Info -->
        <div class="flex flex-col gap-8 reveal reveal-fade-up" style="transition-delay: 0.1s;">
          
          <div class="bg-white rounded-3xl p-8 border border-[#e6e8ea] shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-[#191c1e] mb-8">Contact Information</h3>
            
            <div class="space-y-8">
              <!-- Website -->
              <div class="flex items-start gap-5">
                <div class="w-14 h-14 rounded-2xl bg-[#f0f5ff] text-[#3e7fca] flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined" style="font-size: 26px;">language</span>
                </div>
                <div>
                  <p class="text-xs font-bold tracking-widest uppercase text-[#9ca3af] mb-1">Website</p>
                  <a :href="'https://' + contact?.website" target="_blank" class="text-lg font-semibold text-[#191c1e] hover:text-[#3e7fca] transition-colors">
                    {{ contact?.website }}
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-5">
                <div class="w-14 h-14 rounded-2xl bg-[#f0f5ff] text-[#3e7fca] flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined" style="font-size: 26px;">mail</span>
                </div>
                <div>
                  <p class="text-xs font-bold tracking-widest uppercase text-[#9ca3af] mb-1">Email</p>
                  <a :href="'mailto:' + contact?.email" class="text-lg font-semibold text-[#191c1e] hover:text-[#3e7fca] transition-colors">
                    {{ contact?.email }}
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start gap-5">
                <div class="w-14 h-14 rounded-2xl bg-[#f0f5ff] text-[#3e7fca] flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined" style="font-size: 26px;">call</span>
                </div>
                <div>
                  <p class="text-xs font-bold tracking-widest uppercase text-[#9ca3af] mb-1">Phone</p>
                  <div class="space-y-1">
                    <p v-for="phone in contact?.phones" :key="phone" class="text-lg font-semibold text-[#191c1e]">
                      {{ phone }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Optional secondary card (e.g. support or careers) -->
          <div class="bg-[#3e7fca] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 pointer-events-none"></div>
            <h4 class="text-xl font-bold mb-2">Need Technical Support?</h4>
            <p class="text-white/80 text-sm mb-6 leading-relaxed">
              Our engineering team is available 24/7 for critical infrastructure assistance.
            </p>
            <a href="#" class="inline-flex items-center gap-2 text-white font-bold text-sm hover:gap-3 transition-all duration-300">
              OPEN SUPPORT TICKET
              <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
            </a>
          </div>

        </div>

        <!-- Right: Form -->
        <form class="bg-white rounded-3xl p-10 lg:p-12 border border-[#e6e8ea] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] reveal reveal-fade-up" style="transition-delay: 0.2s;" @submit.prevent>
          <div class="mb-10">
            <h3 class="text-3xl font-black text-[#191c1e] mb-3">Send us a message</h3>
            <p class="text-[#6b7280]">Fill out the form below and our team will get back to you within 24 hours.</p>
          </div>

          <div class="space-y-6">
            <!-- Name -->
            <div class="group">
              <label class="block text-sm font-bold text-[#444655] mb-2 uppercase tracking-wide">Full Name</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] group-focus-within:text-[#3e7fca] transition-colors">person</span>
                <input type="text" class="w-full bg-[#f7f9fb] border border-[#e6e8ea] rounded-xl py-4 pl-12 pr-4 text-[#191c1e] placeholder-[#9ca3af] focus:outline-none focus:border-[#3e7fca] focus:ring-4 focus:ring-[#3e7fca]/10 transition-all duration-300" placeholder="John Doe" required />
              </div>
            </div>

            <!-- Email -->
            <div class="group">
              <label class="block text-sm font-bold text-[#444655] mb-2 uppercase tracking-wide">Company Email</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] group-focus-within:text-[#3e7fca] transition-colors">business_center</span>
                <input type="email" class="w-full bg-[#f7f9fb] border border-[#e6e8ea] rounded-xl py-4 pl-12 pr-4 text-[#191c1e] placeholder-[#9ca3af] focus:outline-none focus:border-[#3e7fca] focus:ring-4 focus:ring-[#3e7fca]/10 transition-all duration-300" placeholder="john@company.com" required />
              </div>
            </div>

            <!-- Message -->
            <div class="group">
              <label class="block text-sm font-bold text-[#444655] mb-2 uppercase tracking-wide">Project Details</label>
              <textarea rows="5" class="w-full bg-[#f7f9fb] border border-[#e6e8ea] rounded-xl p-4 text-[#191c1e] placeholder-[#9ca3af] focus:outline-none focus:border-[#3e7fca] focus:ring-4 focus:ring-[#3e7fca]/10 transition-all duration-300 resize-none" placeholder="Tell us about your requirements, timeline, and goals..." required></textarea>
            </div>

            <!-- Submit -->
            <button type="submit" class="w-full bg-[#3e7fca] text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#2c65a8] hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(62,127,202,0.4)] transition-all duration-300 active:scale-[0.98]">
              <span>Send Message</span>
              <span class="material-symbols-outlined" style="font-size: 20px;">send</span>
            </button>
            <p class="text-center text-xs text-[#9ca3af] mt-4">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/useSiteStore'

const siteStore = useSiteStore()
const { contact } = storeToRefs(siteStore)
</script>
