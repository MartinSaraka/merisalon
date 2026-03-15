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

      <!-- Video showcase -->
      <div class="mt-10">
        <h3 class="font-serif text-2xl font-bold text-brown-800 mb-4">Video ukážky</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="video in galleryVideos"
            :key="video.url"
            class="relative rounded-2xl overflow-hidden shadow-soft border border-cream-200 bg-white cursor-pointer group"
            @click="openVideoLightbox(video)"
          >
            <video
              class="w-full h-80 md:h-[30rem] object-contain bg-brown-900"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              :poster="video.poster"
              @loadeddata="ensureVideoPlayback"
              @ended="forceLoop"
            >
              <source :src="video.url" />
            </video>
            <div class="absolute inset-0 bg-brown-950/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
                <Icon name="mdi:magnify-plus" class="text-white text-2xl" />
              </div>
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

      <!-- Video Lightbox -->
      <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="videoLightboxOpen && selectedVideo"
          class="fixed inset-0 z-[110] bg-brown-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          @click="closeVideoLightbox"
        >
          <button
            @click="closeVideoLightbox"
            class="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Zavrieť video"
          >
            <Icon name="mdi:close" class="text-4xl" />
          </button>

          <div class="w-full max-w-5xl" @click.stop>
            <video
              class="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-black"
              :src="selectedVideo.url"
              controls
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
            />
          </div>
        </div>
      </Transition>
      </Teleport>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const lightboxOpen = ref(false)
const currentImageIndex = ref(0)
const videoLightboxOpen = ref(false)
const selectedVideo = ref<GalleryVideo | null>(null)

type GalleryImage = {
  url: string
  alt: string
  fullFrame?: boolean
}

type GalleryVideo = {
  url: string
  poster: string
}

const galleryImages: GalleryImage[] = [
  { url: '/img/balayage4.png', alt: ''},
  { url: '/img/salonmeriprofilovka.jpg', alt: 'Profesionálka Meri' },
  { url: '/img/premena.png', alt: 'Premena' },
  { url: '/img/balayage5.png', alt: ''},
  { url: '/img/balayage6.png', alt: '' },
  { url: '/img/teple_vlasy.png', alt: 'Farbenie' },
  { url: '/img/IMG_5079.jpeg', alt: '' },
  { url: '/img/IMG_5080.jpeg', alt: '' },
  { url: '/img/IMG_5082.jpeg', alt: '' },
  { url: '/img/interier2.jpeg', alt: 'Interiér salónu' },
  { url: '/img/IMG_5047.jpeg', alt: '' },
  { url: '/img/IMG_5048.jpeg', alt: '' },
]

const galleryVideos: GalleryVideo[] = [
  {
    url: '/vids/balayage_short.mov',
    poster: '/img/IMG_5078.jpeg'
  },
  {
    url: '/vids/mix_prac.MP4',
    poster: '/img/IMG_5079.jpeg'
  },
  {
    url: '/vids/praca_na_vlasoch.mov',
    poster: '/img/IMG_5080.jpeg'
  }
]

const ensureVideoPlayback = (event: Event) => {
  const video = event.target as HTMLVideoElement
  video.muted = true
  void video.play().catch(() => {
    // Some browsers block autoplay for certain codecs; keep poster visible silently.
  })
}

const forceLoop = (event: Event) => {
  const video = event.target as HTMLVideoElement
  video.currentTime = 0
  void video.play().catch(() => {
    // If replay fails, browser policy/codec support is limiting playback.
  })
}

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const openVideoLightbox = (video: GalleryVideo) => {
  selectedVideo.value = video
  videoLightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeVideoLightbox = () => {
  videoLightboxOpen.value = false
  selectedVideo.value = null
  document.body.style.overflow = ''
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.length
}

const previousImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + galleryImages.length) % galleryImages.length
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    if (lightboxOpen.value) closeLightbox()
    if (videoLightboxOpen.value) closeVideoLightbox()
  }

  if (!lightboxOpen.value) return
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') previousImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
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
