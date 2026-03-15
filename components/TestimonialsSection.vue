<template>
  <section class="py-24 md:py-32 bg-gradient-to-br from-neutral-100 via-white to-neutral-200 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-neutral-200 rounded-full blur-3xl opacity-60"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-neutral-300 rounded-full blur-3xl opacity-60"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="section-subtitle">Recenzie</p>
        <h2 class="section-title">Čo hovoria naše klientky</h2>
        <p class="text-lg text-neutral-600 mt-6">
          Spokojnosť našich klientiek je pre nás prioritou
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div v-for="(testimonial, index) in testimonials" :key="index" 
             class="card-elegant p-8 relative cursor-pointer group"
             @click="openModal(testimonial)">
          <!-- Quote icon -->
          <div class="absolute top-6 right-6">
            <Icon name="mdi:format-quote-close" class="text-4xl text-neutral-300" />
          </div>
          
          <!-- Stars -->
          <div class="flex space-x-1 mb-4">
            <Icon v-for="star in 5" :key="star" name="mdi:star" class="text-xl text-[#D4AF37]" />
          </div>
          
          <!-- Content (shortened) -->
          <p class="text-neutral-700 mb-6 leading-relaxed italic line-clamp-4">
            "{{ testimonial.shortText }}"
          </p>
          
          <!-- Read more indicator -->
          <div class="flex items-center text-neutral-700 text-sm font-medium mb-4 group-hover:text-black transition-colors">
            <span>Čítať celú recenziu</span>
            <Icon name="mdi:arrow-right" class="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
          
          <!-- Author -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center shadow-soft">
              <span class="font-serif font-bold text-white text-lg">{{ testimonial.initials }}</span>
            </div>
            <div>
              <p class="font-serif font-bold text-neutral-900">{{ testimonial.name }}</p>
              <p class="text-sm text-neutral-600">{{ testimonial.service }}</p>
            </div>
          </div>
          
          <!-- Time ago -->
          <p class="text-xs text-neutral-500 mt-3">{{ testimonial.timeAgo }}</p>
        </div>
      </div>

      <!-- Google Reviews link -->
      <div class="text-center mt-12">
        <a href="https://share.google/lsndT11p2zv5kQxGj" 
           target="_blank"
           class="inline-flex items-center space-x-2 text-neutral-700 hover:text-black font-medium transition-colors">
          <Icon name="mdi:google" class="text-xl" />
          <span>Zobraziť všetky recenzie na Google</span>
          <Icon name="mdi:arrow-right" class="text-lg" />
        </a>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click="closeModal">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/85 backdrop-blur-sm"></div>
          
          <!-- Modal Content -->
          <div class="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" @click.stop>
            <!-- Close button -->
            <button @click="closeModal" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors z-10">
              <Icon name="mdi:close" class="text-xl text-neutral-700" />
            </button>
            
            <div class="p-8 md:p-10">
              <!-- Stars -->
              <div class="flex space-x-1 mb-6">
                <Icon v-for="star in 5" :key="star" name="mdi:star" class="text-2xl text-[#D4AF37]" />
              </div>
              
              <!-- Full review text -->
              <p class="text-neutral-700 text-lg leading-relaxed mb-8 whitespace-pre-line">
                "{{ selectedTestimonial?.fullText }}"
              </p>
              
              <!-- Author -->
              <div class="flex items-center space-x-4 pt-6 border-t border-neutral-200">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center shadow-soft">
                  <span class="font-serif font-bold text-white text-2xl">{{ selectedTestimonial?.initials }}</span>
                </div>
                <div>
                  <p class="font-serif font-bold text-neutral-900 text-xl">{{ selectedTestimonial?.name }}</p>
                  <p class="text-neutral-600">{{ selectedTestimonial?.service }}</p>
                  <p class="text-sm text-neutral-500 mt-1">{{ selectedTestimonial?.timeAgo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Testimonial {
  name: string
  initials: string
  service: string
  shortText: string
  fullText: string
  timeAgo: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Vanesa L.',
    initials: 'VL',
    service: 'Blond farbenie',
    timeAgo: 'pred 5 mesiacmi',
    shortText: 'Nájsť kaderníčku, ktorá naozaj rozumie vlasom a najmä blond farbe je dnes veľmi náročné. Meri je však úplne šikovná. Od prvého sedenia som bola nadšená...',
    fullText: `Nájsť kaderníčku, ktorá naozaj rozumie vlasom a najmä blond farbe je dnes veľmi náročné. Kým som objavila Meri, mala som len samé zlé skúsenosti. Farby mi nikdy nevyšli tak, ako som si predstavovala a často som odchádzala s fľakatými, žltými alebo aj s ryšavími vlasmi.

Meri je však úplne šikovná. Od prvého sedenia som bola nadšená. Konečne niekto, kto vie vytvoriť krásnu, čistú a prirodzene pôsobiacu blond farbu a nie ako také kuriatko 🥹🙏

Prišla som k nej po nevydarenej farbe od inej kaderníčky a Meri to okamžite napravila. Zachránila mi vlasy aj náladu. Odvtedy by som nemenila a vraciam sa k nej pravidelne a vždy s radosťou.

Okrem šikovných rúk má aj skvelý prístup a je veľmi milá, ústretová a vždy sa u nej cítim príjemne.`
  },
  {
    name: 'Michaela K.',
    initials: 'MK',
    service: 'Pravidelná klientka',
    timeAgo: 'pred 8 mesiacmi',
    shortText: 'K Meri chodím viac než 4 roky. Je najúžasnejšia a nedám na ňu dopustiť! Vďaka nej mám zdravé a dokonalé vlasy, ktoré som nikdy predtým nemala...',
    fullText: `K Meri chodím viac než 4 roky ✨. Je najúžasnejšia a nedám na ňu dopustiť! 🙂

Vďaka nej, jej prístupu a vlasovej kozmetike, ktorú používa mám zdravé a dokonalé vlasy, ktoré som nikdy predtým nemala.

Vždy od nej odchádzam s úsmevom od ucha k uchu 🙂✨`
  },
  {
    name: 'Veronika',
    initials: 'V',
    service: 'Pravidelná klientka',
    timeAgo: 'pred 4 rokmi',
    shortText: 'K Meri chodím už viac ako 4 roky a vždy odchádzam spokojná. Veľmi príjemná, komunikatívna kaderníčka, používa len kvalitnú kozmetiku...',
    fullText: `K Meri chodím už viac ako 4 roky a vždy odchádzam spokojná.

Veľmi príjemná, komunikatívna kaderníčka, používa len kvalitnú kozmetiku. Rovnako viete u nej zakúpiť aj vlasovú kozmetiku kvalitnej značky.

Krátka čakacia doba na termín. Takisto bezproblémové parkovanie pred salónom. Určite odporúčam!`
  }
]

const isModalOpen = ref(false)
const selectedTestimonial = ref<Testimonial | null>(null)

const openModal = (testimonial: Testimonial) => {
  selectedTestimonial.value = testimonial
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}
</style>
