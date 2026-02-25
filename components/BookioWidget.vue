<template>
  <div class="bookio-widget-container">
    <div class="card-elegant p-6 sm:p-8">
      <div class="text-center mb-6">
        <h3 class="font-serif text-2xl font-bold text-brown-800 mb-2">Online rezervácia</h3>
        <p class="text-brown-600">Vyberte si termín, ktorý vám vyhovuje</p>
      </div>

      <!-- Extra notice for in-app browsers (IG/FB/Messenger), where iframes often fail -->
      <div
        v-if="isInAppBrowser"
        class="mb-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-brown-700 text-sm"
        role="status"
      >
        <strong>Poznámka:</strong> Ak ste otvorili stránku cez Instagram/Facebook, rezervačný formulár sa
        niekedy nezobrazí priamo v stránke. Odporúčame otvoriť rezerváciu v novom okne.
        <div class="mt-3">
          <a
            :href="bookioUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold bg-accent-500 text-white hover:opacity-90 transition"
          >
            Otvoriť rezerváciu
          </a>
        </div>
      </div>

      <!-- Bookio Widget -->
      <div
        class="rounded-2xl overflow-hidden bg-cream-50 relative"
        :class="containerHeightClass"
      >
        <!-- Loading / Error overlay -->
        <div
          v-show="showOverlay"
          class="absolute inset-0 flex flex-col items-center justify-center bg-cream-100 text-brown-600 z-10 p-6 text-center"
          aria-live="polite"
        >
          <div class="flex flex-col items-center gap-4 max-w-md">
            <Icon name="mdi:calendar-clock" class="text-5xl text-accent-400" />
            <p class="font-medium">
              {{ overlayTitle }}
            </p>

            <p class="text-sm">
              {{ overlayText }}
            </p>

            <div v-if="showOpenButton" class="pt-2 flex flex-col gap-2 w-full">
              <a
                :href="bookioUrl"
                target="_blank"
                rel="noopener"
                class="w-full inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold bg-accent-500 text-white hover:opacity-90 transition"
              >
                Otvoriť rezerváciu v novom okne
              </a>

              <button
                type="button"
                class="w-full inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold border border-brown-300 text-brown-700 hover:bg-cream-50 transition"
                @click="retry()"
              >
                Skúsiť znova načítať
              </button>
            </div>

            <p v-if="showOpenButton" class="text-xs opacity-80">
              Na niektorých mobiloch môže iframe blokovať prehliadač alebo nastavenia ochrany súkromia.
            </p>
          </div>
        </div>

        <iframe
          :key="iframeKey"
          :src="bookioUrl"
          width="100%"
          height="650"
          frameborder="0"
          title="Rezervačný systém Salón Meri"
          class="w-full h-full"
          :loading="eager ? 'eager' : 'lazy'"
          referrerpolicy="strict-origin-when-cross-origin"
          @load="onIframeLoad"
        ></iframe>
      </div>

      <!-- Fallback - ak sa widget nezobrazí -->
      <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
        <p class="text-brown-700 text-sm">
          <strong>Formulár sa vám nezobrazil? </strong>
          Kliknite sem:
          <a
            :href="bookioUrl"
            target="_blank"
            rel="noopener"
            class="font-semibold text-accent-700 underline"
          >
            otvoriť online rezerváciu
          </a>
          alebo nás kontaktujte priamo – radi vám pomôžeme.
        </p>
      </div>

      <!-- Alternative contact -->
      <div class="mt-8 pt-6 border-t border-cream-200 text-center">
        <p class="text-brown-600 mb-4">Alebo nás kontaktujte priamo:</p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="tel:+421902730860"
            class="flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors"
          >
            <Icon name="mdi:phone" class="text-xl" />
            <span>0902 730 860</span>
          </a>
          <span class="hidden sm:inline text-brown-300">|</span>
          <a
            href="mailto:galojanm@gmail.com"
            class="flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors"
          >
            <Icon name="mdi:email" class="text-xl" />
            <span>galojanm@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    eager?: boolean
  }>(),
  {
    eager: false
  }
)

const bookioUrl = 'https://services.bookio.com/salon-krasy-meri/widget?lang=sk'

const iframeLoaded = ref(false)
const loadTimedOut = ref(false)
const iframeKey = ref(0)

const isInAppBrowser = ref(false)

let timeoutId: ReturnType<typeof setTimeout> | undefined

function detectInAppBrowser() {
  // Instagram / Facebook / Messenger in-app browsers frequently break embedded widgets
  const ua = navigator.userAgent || ''
  const isFB = /FBAN|FBAV|FB_IAB|FBIOS|FB4A/i.test(ua)
  const isIG = /Instagram/i.test(ua)
  const isMessenger = /MESSENGER/i.test(ua)
  return isFB || isIG || isMessenger
}

function startTimeout() {
  clearTimeoutIfAny()
  iframeLoaded.value = false
  loadTimedOut.value = false

  // If it doesn't load in time, show action buttons instead of hiding overlay
  timeoutId = setTimeout(() => {
    if (!iframeLoaded.value) loadTimedOut.value = true
  }, 8000)
}

function clearTimeoutIfAny() {
  if (timeoutId) clearTimeout(timeoutId)
  timeoutId = undefined
}

function onIframeLoad() {
  iframeLoaded.value = true
  loadTimedOut.value = false
  clearTimeoutIfAny()
}

function retry() {
  // Force iframe reload
  iframeKey.value += 1
  startTimeout()
}

onMounted(() => {
  isInAppBrowser.value = detectInAppBrowser()
  startTimeout()
})

onUnmounted(() => {
  clearTimeoutIfAny()
})

const showOverlay = computed(() => !iframeLoaded.value || loadTimedOut.value)

const overlayTitle = computed(() => {
  if (iframeLoaded.value) return 'Rezervačný formulár je pripravený'
  if (loadTimedOut.value) return 'Formulár sa nepodarilo načítať'
  return 'Načítava sa rezervačný formulár...'
})

const overlayText = computed(() => {
  if (!loadTimedOut.value) {
    return 'Prosíme chvíľu strpenia. Ak sa formulár nezobrazí do pár sekúnd, skúste ho otvoriť v novom okne.'
  }
  return 'Niektoré mobilné prehliadače alebo blokátory môžu iframe obmedziť. Rezerváciu viete vždy otvoriť aj priamo.'
})

const showOpenButton = computed(() => loadTimedOut.value || isInAppBrowser.value)

// Responsive height: mobile uses viewport height + minimum so it never looks "empty"
const containerHeightClass = computed(() => {
  // Tailwind classes (no extra CSS needed)
  // Mobile: 80vh but at least 820px (Bookio forms are tall)
  // Desktop: fixed 650px
  return 'h-[80vh] min-h-[820px] sm:h-[650px] sm:min-h-[650px]'
})
</script>