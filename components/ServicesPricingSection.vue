<template>
  <section id="sluzby" class="py-24 md:py-32 bg-gradient-to-b from-cream-50 via-white to-cream-100 relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-1/4 left-0 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="section-subtitle">Služby & Cenník</p>
        <h2 class="section-title">Naša ponuka služieb</h2>
        <p class="text-lg text-brown-600 mt-6">
          Vyberte si zo širokej ponuky profesionálnych služieb. Ceny sa môžu líšiť podľa dĺžky a hustoty vlasov.
        </p>
      </div>

      <!-- Categories -->
      <div class="space-y-6 md:space-y-16">
        <div v-for="category in categories" :key="category.id" class="max-w-6xl mx-auto">
          <!-- Category Header - clickable on mobile -->
          <button 
            @click="toggleCategory(category.id)"
            class="flex items-center w-full mb-4 md:mb-8 md:pointer-events-none text-left"
          >
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center shadow-soft mr-4 flex-shrink-0">
              <Icon :name="category.icon" class="text-xl text-white" />
            </div>
            <h3 class="font-serif text-xl md:text-2xl font-bold text-brown-800">{{ category.name }}</h3>
            <div class="flex-1 h-px bg-gradient-to-r from-accent-200 to-transparent ml-4 md:ml-6 hidden md:block"></div>
            <!-- Mobile accordion arrow -->
            <Icon 
              name="mdi:chevron-down" 
              class="md:hidden text-2xl text-accent-500 transition-transform duration-300 ml-auto flex-shrink-0"
              :class="{ 'rotate-180': openCategories.includes(category.id) }"
            />
          </button>

          <!-- Services Grid - collapsible on mobile, always visible on desktop -->
          <div 
            class="accordion-content overflow-hidden transition-all duration-300 ease-in-out md:!max-h-none md:!opacity-100"
            :class="openCategories.includes(category.id) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4 md:pb-0">
              <div
                v-for="service in category.services"
                :key="service.name"
                class="bg-white rounded-2xl p-5 shadow-soft hover:shadow-soft-lg border border-cream-200 hover:border-accent-200 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div class="flex items-start justify-between mb-3">
                  <h4 class="font-serif text-lg font-semibold text-brown-800 leading-tight pr-2">
                    <NuxtLink v-if="service.detailPage" :to="service.detailPage" class="hover:text-accent-600 transition-colors">{{ service.name }}</NuxtLink>
                    <template v-else>{{ service.name }}</template>
                  </h4>
                  <span class="text-xl font-bold text-accent-600 whitespace-nowrap">
                    {{ service.pricePrefix }}{{ service.price }} €
                  </span>
                </div>
                
                <p class="text-brown-500 text-sm leading-relaxed mb-3 line-clamp-2">
                  {{ service.description }}
                </p>
                
                <div class="flex items-center justify-between pt-3 border-t border-cream-100">
                  <span class="text-xs text-brown-400 flex items-center">
                    <Icon name="mdi:clock-outline" class="mr-1" />
                    {{ service.duration }}
                  </span>
                  <NuxtLink 
                    to="/rezervacia" 
                    class="text-accent-600 hover:text-accent-700 text-sm font-medium flex items-center md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                  >
                    Objednať
                    <Icon name="mdi:arrow-right" class="ml-1 text-sm" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <NuxtLink to="/rezervacia" class="btn-primary inline-flex items-center space-x-2">
          <Icon name="mdi:calendar-check" />
          <span>Rezervovať termín</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Accordion state - first category open by default
const openCategories = ref<string[]>(['strihanie'])

const toggleCategory = (categoryId: string) => {
  const index = openCategories.value.indexOf(categoryId)
  if (index === -1) {
    openCategories.value.push(categoryId)
  } else {
    openCategories.value.splice(index, 1)
  }
}

const categories = [
  {
    id: 'strihanie',
    name: 'Strihanie & Styling',
    icon: 'mdi:content-cut',
    services: [
      {
        name: 'Podstrihnutie + Fúkaná',
        description: 'Profesionálne podstrihnutie koncov s vysušením a stylizáciou.',
        duration: '40min',
        price: '39',
        pricePrefix: 'od '
      },
      {
        name: 'Strihanie vlasov',
        description: 'Kompletný strih vlasov podľa vašich predstáv s konzultáciou.',
        duration: '40min',
        price: '40',
        pricePrefix: 'od '
      },
      {
        name: 'Wellness Strih & Masáž',
        description: 'Relaxačný strih spojený s uvoľňujúcou masážou hlavy.',
        duration: '1h',
        price: '80',
        pricePrefix: ''
      }
    ]
  },
  {
    id: 'mihalnice',
    name: 'Mihalnice & Obočie',
    icon: 'mdi:eye',
    services: [
      {
        name: 'Farbenie mihalníc',
        description: 'Pre výraznejší pohľad bez denného líčenia.',
        duration: '15min',
        price: '15',
        pricePrefix: ''
      },
      {
        name: 'Laminácia obočia',
        description: 'Pre prirodzený a upravený vzhľad po celý deň.',
        duration: '40min',
        price: '35',
        pricePrefix: ''
      },
      {
        name: 'Lash lift',
        description: 'Zdvihnutie mihalníc pre dlhotrvajúci efekt výrazných očí.',
        duration: '40min',
        price: '40',
        pricePrefix: ''
      }
    ]
  },
  {
    id: 'farbenie',
    name: 'Farbenie vlasov',
    icon: 'mdi:palette',
    services: [
      {
        name: 'Balayage',
        description: 'Úplné presvetlenie na mieru technikou balayage s konzultáciou, regeneračnou maskou a stylingom.',
        duration: '3h 10min',
        price: '200',
        pricePrefix: 'od ',
        detailPage: '/balayage'
      },
      {
        name: 'Farbenie vlasov',
        description: 'Farbenie vlasov vrátane umývania, regeneračnej masky, fúkania a záverečného stylingu.',
        duration: '2h',
        price: '120',
        pricePrefix: 'od '
      }
    ]
  },
  {
    id: 'regeneracia',
    name: 'Regenerácia vlasov',
    icon: 'mdi:sparkles',
    services: [
      {
        name: 'Botox na vlasy',
        description: 'Intenzívna regenerácia pre poškodené vlasy. Obnovuje štruktúru a dodáva lesk.',
        duration: '2h',
        price: '170',
        pricePrefix: 'od '
      },
      {
        name: 'Hĺbková kúra + Masáž',
        description: 'Luxusná regeneračná kúra s relaxačnou masážou hlavy.',
        duration: '1h',
        price: '85',
        pricePrefix: ''
      }
    ]
  },
  {
    id: 'licenie',
    name: 'Líčenie & Účesy',
    icon: 'mdi:brush',
    services: [
      {
        name: 'Fúkaná vlasov',
        description: 'Profesionálne vysušenie a stylizácia pre dokonalý objem.',
        duration: '40min',
        price: '40',
        pricePrefix: 'od '
      },
      {
        name: 'Líčenie na príležitosť',
        description: 'Profesionálne líčenie od denného po večerný glamour look.',
        duration: '1h',
        price: '50',
        pricePrefix: 'od '
      }
    ]
  },
  {
    id: 'konzultacia',
    name: 'Konzultácia',
    icon: 'mdi:comment-question',
    services: [
      {
        name: 'Osobná konzultácia',
        description: 'Konzultácia o starostlivosti o vlasy a vhodných produktoch.',
        duration: '30min',
        price: '25',
        pricePrefix: ''
      },
      {
        name: 'Online konzultácia',
        description: 'Pohodlná online konzultácia o vlasoch bez návštevy salónu.',
        duration: '30min',
        price: '25',
        pricePrefix: ''
      }
    ]
  }
]
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.accordion-content {
  will-change: max-height, opacity;
}
</style>
