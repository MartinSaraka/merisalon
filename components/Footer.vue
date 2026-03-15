<template>
  <footer class="bg-black text-neutral-100 py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- About -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            
            <span class="font-serif text-2xl font-bold text-white">Salón krásy Meri</span>
          </div>
          <p class="text-neutral-300 mb-6 max-w-md leading-relaxed">
            Profesionálne kaderníctvo v Bratislave - Ružinov. 
            Ponúkame farbenie, strihanie, regeneráciu vlasov a líčenie 
            v príjemnom prostredí s individuálnym prístupom.
          </p>
          <p class="text-neutral-500 text-sm">
            Webstránka vytvorená firmou <a href="https://www.appinara.sk" target="_blank" rel="noopener noreferrer" class="text-neutral-200 hover:text-white transition-colors underline">Appinara</a>
          </p>
          <div class="flex space-x-3">
            <a href="https://www.facebook.com/profile.php?id=61568519063082" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-11 h-11 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-neutral-700">
              <Icon name="mdi:facebook" class="text-xl" />
            </a>
            <a href="https://www.instagram.com/salonmeri.sk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-11 h-11 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-neutral-700">
              <Icon name="mdi:instagram" class="text-xl" />
            </a>
            <a href="https://share.google/lsndT11p2zv5kQxGj" target="_blank" rel="noopener noreferrer" aria-label="Google" class="w-11 h-11 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-neutral-700">
              <Icon name="mdi:google" class="text-xl" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-serif font-bold text-lg text-white mb-5">Rýchle odkazy</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="text-neutral-300 hover:text-white transition-colors flex items-center space-x-2">
                <Icon name="mdi:chevron-right" class="text-sm text-neutral-400" />
                <span>Domov</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#sluzby" class="text-neutral-300 hover:text-white transition-colors flex items-center space-x-2">
                <Icon name="mdi:chevron-right" class="text-sm text-neutral-400" />
                <span>Cenník</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#galeria" class="text-neutral-300 hover:text-white transition-colors flex items-center space-x-2">
                <Icon name="mdi:chevron-right" class="text-sm text-neutral-400" />
                <span>Galéria</span>
              </NuxtLink>
            </li>
            <li>
  <a href="/rezervacia" class="text-neutral-300 hover:text-white transition-colors flex items-center space-x-2">
    <Icon name="mdi:chevron-right" class="text-sm text-neutral-400" />
    <span>Rezervácia</span>
  </a>
</li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-serif font-bold text-lg text-white mb-5">Kontakt</h3>
          <ul class="space-y-4 text-neutral-300">
            <li class="flex items-start space-x-3">
              <Icon name="mdi:map-marker" class="text-neutral-400 mt-1 flex-shrink-0" />
              <span>Ivanská cesta 36A<br />821 04 Bratislava</span>
            </li>
            <li>
              <a href="tel:+421902730860" class="flex items-center space-x-3 hover:text-white transition-colors">
                <Icon name="mdi:phone" class="text-neutral-400 flex-shrink-0" />
                <span>0902 730 860</span>
              </a>
            </li>
            <li>
              <a href="mailto:galojanm@gmail.com" class="flex items-center space-x-3 hover:text-white transition-colors">
                <Icon name="mdi:email" class="text-neutral-400 flex-shrink-0" />
                <span>galojanm@gmail.com</span>
              </a>
            </li>
            <li class="flex items-start space-x-3">
              <Icon name="mdi:clock-outline" class="text-neutral-400 mt-1 flex-shrink-0" />
              <span>Po-Ne: 08:00 - 21:00<br /><small class="text-neutral-500">Na objednávku</small></span>
            </li>
          </ul>

          <div class="mt-6 pt-4 border-t border-neutral-800">
            <p class="text-xs text-neutral-500 mb-3">Certifikáty (kliknutím zväčšíte)</p>
            <div class="grid grid-cols-4 gap-2">
              <button
                v-for="certificate in certificates"
                :key="certificate.src"
                type="button"
                class="group relative w-full h-16 overflow-hidden rounded-md border border-neutral-700 bg-neutral-800/40 hover:border-neutral-400 transition-colors"
                :aria-label="`Zobraziť certifikát: ${certificate.title}`"
                @click="openCertificate(certificate)"
              >
                <img
                  v-if="certificate.type === 'image'"
                  :src="certificate.src"
                  :alt="certificate.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div
                  v-else
                  class="w-full h-full bg-white text-neutral-700 flex flex-col items-center justify-center"
                >
                  <Icon name="mdi:file-pdf-box" class="text-xl text-red-600" />
                  <span class="text-[10px] font-semibold mt-1">PDF</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-neutral-500 text-sm">
          © {{ currentYear }} Salón Meri. Všetky práva vyhradené.
        </p>
        <div class="flex flex-wrap justify-center gap-6 text-sm">
          <NuxtLink to="/ochrana-udajov" class="text-neutral-500 hover:text-white transition-colors">
            Ochrana údajov
          </NuxtLink>
          <NuxtLink to="/obchodne-podmienky" class="text-neutral-500 hover:text-white transition-colors">
            Obchodné podmienky
          </NuxtLink>
        </div>
      </div>

    </div>

    <!-- Certificate modal -->
    <div
      v-if="selectedCertificate"
      class="fixed inset-0 z-50 bg-black/85 p-4 sm:p-8 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      :aria-label="selectedCertificate.title"
      @click.self="closeCertificate"
    >
      <button
        type="button"
        class="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Zavrieť certifikát"
        @click="closeCertificate"
      >
        <Icon name="mdi:close" class="text-2xl" />
      </button>

      <img
        v-if="selectedCertificate.type === 'image'"
        :src="selectedCertificate.src"
        :alt="selectedCertificate.title"
        class="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
      />

      <iframe
        v-else
        :src="`${selectedCertificate.src}#page=1&view=FitH`"
        title="PDF certifikát"
        class="w-[95vw] max-w-4xl h-[85vh] bg-white rounded-lg shadow-2xl"
      />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

type Certificate = {
  title: string
  src: string
  type: 'image' | 'pdf'
}

const certificates: Certificate[] = [
  {
    title: 'Certifikát 1',
    src: '/certs/IMG_5098.JPG',
    type: 'image'
  },
  {
    title: 'Certifikát 2',
    src: '/certs/IMG_5099.JPG',
    type: 'image'
  },
  {
    title: 'Certifikát 3',
    src: '/certs/IMG_5100.JPG',
    type: 'image'
  },
  {
    title: 'Certifikát 4',
    src: '/certs/cert.jpg',
    type: 'image'
  }
]

const selectedCertificate = ref<Certificate | null>(null)

function openCertificate(certificate: Certificate) {
  selectedCertificate.value = certificate
}

function closeCertificate() {
  selectedCertificate.value = null
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && selectedCertificate.value) {
    closeCertificate()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>
