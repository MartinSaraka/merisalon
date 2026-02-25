<template>
  <section id="galeria" class="py-24 md:py-32 bg-cream-100 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="section-subtitle">Galéria</p>
        <h2 class="section-title">Naša práca hovorí za nás</h2>
        <p class="text-lg text-brown-600 mt-6">
          Pozrite si ukážky našich najlepších prác a nechajte sa inšpirovať
        </p>
      </div>

      <!-- Gallery Grid – všetky fotky rovnakej veľkosti -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div v-for="(image, index) in galleryImages" :key="index"
          :class="['relative overflow-hidden rounded-2xl group cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-500 aspect-[4/5]', image.fullFrame ? 'bg-cream-200' : '']"
          @click="openLightbox(index)">
          <img :src="image.url" :alt="image.alt" 
            :class="['w-full h-full transition-transform duration-700', image.fullFrame ? 'object-contain group-hover:scale-20' : 'object-cover group-hover:scale-110']"
            loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute bottom-4 left-4 right-4">
              <p class="text-white font-serif font-semibold text-lg">{{ image.alt }}</p>
            </div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon name="mdi:magnify-plus" class="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <Teleport to="body">
      <Transition name="fade">
        <div v-if="lightboxOpen" 
            class="fixed inset-0 z-[100] bg-brown-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          @click="closeLightbox">
            <button @click="closeLightbox" 
                    class="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
                    aria-label="Zavrieť">
              <Icon name="mdi:close" class="text-4xl" />
          </button>
            <button @click.stop="previousImage" 
                    class="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors"
                    aria-label="Predchádzajúci obrázok">
              <Icon name="mdi:chevron-left" class="text-5xl" />
          </button>
            <button @click.stop="nextImage" 
                    class="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors"
                    aria-label="Nasledujúci obrázok">
              <Icon name="mdi:chevron-right" class="text-5xl" />
          </button>
            <div class="max-h-[85vh] max-w-[90vw]" @click.stop>
          <img :src="galleryImages[currentImageIndex].url" 
            :alt="galleryImages[currentImageIndex].alt"
                class="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" />
              <p class="text-white text-center mt-4 font-serif text-lg">
                {{ galleryImages[currentImageIndex].alt }}
              </p>
            </div>
        </div>
      </Transition>
      </Teleport>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const galleryImages = [
  { url: '/img/balayage4.png', alt: 'Balayage'},
  { url: '/img/salonmeriprofilovka.jpg', alt: 'Profesionálka Meri' },
  { url: '/img/premena.png', alt: 'Premena' },
  { url: '/img/balayage5.png', alt: 'Balayage'},
  { url: '/img/balayage3.png', alt: 'Balayage' },
  { url: '/img/balayage6.png', alt: 'Balayage' },
  { url: '/img/balayageprofil2.png', alt: 'Balayage' },
  { url: '/img/teple_vlasy.png', alt: 'Farbenie' },
  { url: '/img/highlights.jpg', alt: 'Melírovanie' },
  { url: '/img/interier2.jpeg', alt: 'Interiér salónu' },
  { url: '/img/IMG_5047.jpeg', alt: 'Balayage' },
  { url: '/img/IMG_5048.jpeg', alt: 'Zdravé vlasy' },
]

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.length
}

const previousImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + galleryImages.length) % galleryImages.length
}

// Keyboard navigation
if (typeof window !== 'undefined') {
  watch(lightboxOpen, (isOpen) => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') previousImage()
    }
    
    if (isOpen) {
      window.addEventListener('keydown', handleKeydown)
    } else {
      window.removeEventListener('keydown', handleKeydown)
    }
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
