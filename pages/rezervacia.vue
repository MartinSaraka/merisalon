<template>
  <div>
    <Navigation />
    
    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-cream-100 to-cream-100 text-brown-800 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <p class="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-4">Online rezervácia</p>
        <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-brown-800">Rezervujte si termín</h1>
        <p class="text-xl text-brown-700 max-w-2xl mx-auto">
          Vyberte si službu a čas, ktorý vám vyhovuje. Rezervácia je jednoduchá a rýchla.
        </p>
      </div>
    </section>

    <!-- Booking Section -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-cream-100 to-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <BookioWidget />
        </div>
      </div>
    </section>
    
    <!-- Benefits -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-center font-serif text-3xl md:text-4xl font-bold text-brown-800 mb-12">
          Prečo rezervovať online?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="text-center card-elegant p-8">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center mx-auto mb-5">
              <Icon name="mdi:clock-fast" class="text-3xl text-accent-600" />
            </div>
            <h3 class="font-serif font-bold text-xl text-brown-800 mb-2">Rýchle a jednoduché</h3>
            <p class="text-brown-600">Rezervácia trvá len pár minút</p>
          </div>
          <div class="text-center card-elegant p-8">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mx-auto mb-5">
              <Icon name="mdi:calendar-check" class="text-3xl text-primary-600" />
            </div>
            <h3 class="font-serif font-bold text-xl text-brown-800 mb-2">Dostupné 24/7</h3>
            <p class="text-brown-600">Rezervujte kedykoľvek vám to vyhovuje</p>
          </div>
          <div class="text-center card-elegant p-8">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center mx-auto mb-5">
              <Icon name="mdi:bell-check" class="text-3xl text-accent-600" />
            </div>
            <h3 class="font-serif font-bold text-xl text-brown-800 mb-2">Pripomienka</h3>
            <p class="text-brown-600">Dostanete pripomienku pred termínom</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Contact -->
    <section class="py-16 bg-cream-100 text-brown-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="font-serif text-3xl md:text-4xl font-bold mb-4 text-brown-800">Potrebujete pomoc s rezerváciou?</h2>
        <p class="text-brown-700 mb-8 max-w-xl mx-auto">
          Zavolajte nám a radi vám pomôžeme s výberom služby alebo termínu
        </p>
        <a href="tel:+421902730860" class="inline-flex items-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <Icon name="mdi:phone" class="text-2xl" />
          <span class="text-xl">0902 730 860</span>
        </a>
      </div>
    </section>

    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Rezervácia termínu | Salon Meri - Kaderníctvo Bratislava',
  meta: [
    { 
      name: 'description', 
      content: 'Rezervujte si termín v Salon Meri online. Farbenie, strihanie, regenerácia vlasov a líčenie v Bratislave - Ružinov. Jednoduchá online rezervácia 24/7.' 
    },
    { property: 'og:url', content: 'https://salonmeri.sk/rezervacia' }
  ],
  link: [
    { rel: 'canonical', href: 'https://salonmeri.sk/rezervacia' }
  ]
})
</script>
