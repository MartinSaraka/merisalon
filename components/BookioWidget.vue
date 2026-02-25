<template>
  <div class="bookio-widget-container">
    <div class="card-elegant p-6 sm:p-8">
      <div class="text-center mb-6">
        <h3 class="font-serif text-2xl font-bold text-brown-800 mb-2">Online rezervácia</h3>
        <p class="text-brown-600">Vyberte si termín, ktorý vám vyhovuje</p>
      </div>
      
      <!-- Bookio Widget iframe -->
      <div class="rounded-2xl overflow-hidden bg-cream-50 min-h-[500px] sm:min-h-[600px] relative">
        <!-- Loading placeholder -->
        <div 
          v-show="!iframeLoaded" 
          class="absolute inset-0 flex flex-col items-center justify-center bg-cream-100 text-brown-600 z-10"
          aria-live="polite"
        >
          <div class="animate-pulse flex flex-col items-center gap-4">
            <Icon name="mdi:calendar-clock" class="text-5xl text-accent-400" />
            <p class="font-medium">Načítava sa rezervačný formulár...</p>
            <p class="text-sm">Ak sa formulár nezobrazí do pár sekúnd, skúste obnoviť stránku.</p>
          </div>
        </div>
        <iframe 
          :src="bookioUrl"
          width="100%" 
          height="600"
          frameborder="0"
          title="Rezervačný systém Salón Meri"
          class="w-full min-h-[500px] sm:min-h-[600px]"
          :loading="eager ? 'eager' : 'lazy'"
          referrerpolicy="strict-origin-when-cross-origin"
          @load="iframeLoaded = true"
        ></iframe>
      </div>

      <!-- Fallback - ak sa widget nezobrazí -->
      <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
        <p class="text-brown-700 text-sm">
          <strong>Formulár sa vám nezobrazil?</strong> Kontaktujte nás priamo – radi vám pomôžeme s rezerváciou.
        </p>
      </div>

      <!-- Alternative contact -->
      <div class="mt-8 pt-6 border-t border-cream-200 text-center">
        <p class="text-brown-600 mb-4">Alebo nás kontaktujte priamo:</p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="tel:+421902730860" 
             class="flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors">
            <Icon name="mdi:phone" class="text-xl" />
            <span>0902 730 860</span>
          </a>
          <span class="hidden sm:inline text-brown-300">|</span>
          <a href="mailto:galojanm@gmail.com" 
             class="flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors">
            <Icon name="mdi:email" class="text-xl" />
            <span>galojanm@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  eager?: boolean
}>(), {
  eager: false
})

const bookioUrl = 'https://services.bookio.com/salon-krasy-meri/widget?lang=sk'
const iframeLoaded = ref(false)

// Ak sa iframe nenačíta do 10 s (blokátor, pomalé pripojenie), skryť loading
let timeoutId: ReturnType<typeof setTimeout>
onMounted(() => {
  timeoutId = setTimeout(() => {
    iframeLoaded.value = true
  }, 10000)
})
onUnmounted(() => {
  clearTimeout(timeoutId)
})
</script>

