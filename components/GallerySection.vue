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

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
        <div v-for="(image, index) in galleryImages" :key="index"
          class="relative overflow-hidden rounded-2xl group cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-500"
          :class="[
            index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/5]',
            index === 5 ? 'lg:col-span-2 lg:row-span-2 lg:aspect-square' : ''
          ]"
          @click="openLightbox(index)">
          <img :src="image.url" :alt="image.alt" 
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
  // 0: Balayage - lokálna fotka (veľký obrázok vľavo)
  { url: '/img/balayage.jpg', alt: 'Balayage vlasy' },
  // 1: Hnedé lesklé vlasy - žena zozadu
  { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop&v=2', alt: 'Lesklé vlasy' },
  // 2: Blondínka portrét
  { url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&v=2', alt: 'Blond vlasy' },
  // 3: Krásna blondínka s dlhými vlasmi
  { url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=2074&auto=format&fit=crop&v=2', alt: 'Styling' },

  // 5: Farbenie vlasov - lokálna fotka (veľký obrázok vpravo)
  { url: '/img/balayage1.jpg', alt: 'Farbenie vlasov' },
  // 6: Highlights - lokálna fotka
  { url: '/img/highlights.jpg', alt: 'Melírovanie' },
  // 7: Interiér salónu 1 - lokálna fotka
  { url: '/img/interier1.jpeg', alt: 'Interiér Salon Meri' },
  // 8: Interiér salónu 2 - lokálna fotka
  { url: '/img/interier2.jpeg', alt: 'Interiér salónu' },
  // 10: Zdravé vlasy - krásny portrét ženy
  { url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2087&auto=format&fit=crop&v=2', alt: 'Zdravé vlasy' },
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
