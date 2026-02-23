<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay - very soft cream like pricing section -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-cream-50/95 via-white/90 to-cream-100/85 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1633681122967-1a1b0e5ede23?q=80&w=2070&auto=format&fit=crop"
        alt="Salon Meri - Interiér kaderníctva"
        class="w-full h-full object-cover opacity-40"
        loading="eager"
      />
    </div>

    <!-- Decorative Elements matching pricing section style -->
    <div class="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-40">
      <div class="absolute top-1/4 -left-20 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>

      <div class="absolute top-1/2 left-1/3 w-72 h-72 bg-cream-300 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-20 container mx-auto px-4 text-center py-20">
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Main Heading -->
        <div class="space-y-4 animate-slide-up">
          <h1 class="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-brown-800 leading-[1.1]">
            Vaša krása,<br />
            <span class="text-gradient bg-gradient-to-r from-accent-500 via-accent-600 to-accent-500 bg-clip-text text-transparent">
              naša vášeň
            </span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-brown-600 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Farbenie, strihanie, regenerácia vlasov a líčenie v príjemnom prostredí s individuálnym prístupom.
          </p>
        </div>

        <!-- CTA Buttons - matching accent colors -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in animation-delay-400">
          <NuxtLink to="/rezervacia" class="group w-full sm:w-auto bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white text-lg px-10 py-4 rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300">
            <span class="flex items-center justify-center space-x-2">
              <span>Rezervovať termín :</span>
              <Icon name="mdi:arrow-right" class="group-hover:translate-x-1 transition-transform" />
            </span>
          </NuxtLink>
          <a href="tel:+421902730860" class="w-full sm:w-auto text-lg px-10 py-4 rounded-full bg-white border-2 border-accent-200 text-brown-700 hover:border-accent-400 hover:bg-accent-50 transition-all duration-300">
            <span class="flex items-center justify-center space-x-2">
              <Icon name="mdi:phone" class="text-accent-500" />
              <span>0902 730 860</span>
            </span>
          </a>
        </div>

        <!-- Benefits - matching site style -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 max-w-2xl mx-auto animate-fade-in animation-delay-600">
          <div class="bg-white rounded-2xl p-5 flex items-center space-x-4 shadow-soft border border-cream-200 hover:border-accent-200 transition-all duration-300">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center flex-shrink-0 shadow-soft">
              <Icon name="mdi:home-heart" class="text-xl text-white" />
            </div>
            <div class="text-left">
              <p class="font-serif font-bold text-brown-800 text-lg">Pohodlie domova</p>
              <p class="text-sm text-brown-500">Príjemné prostredie</p>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-5 flex items-center space-x-4 shadow-soft border border-cream-200 hover:border-accent-200 transition-all duration-300">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center flex-shrink-0 shadow-soft">
              <Icon name="mdi:star-circle" class="text-xl text-white" />
            </div>
            <div class="text-left">
              <p class="font-serif font-bold text-brown-800 text-lg">Kvalitné služby</p>
              <p class="text-sm text-brown-500">Profesionálny prístup</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script setup lang="ts">
</script>
