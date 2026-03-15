<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
  >
    <!-- Background Image -->
    <img
      src="/img/interier2.jpeg"
      alt="Interiér Salon Meri"
      class="absolute inset-0 w-full h-full object-cover object-center z-[1]"
      fetchpriority="high"
    />
    <!-- Dark overlay for text contrast -->
    <div class="absolute inset-0 z-[2] bg-gradient-to-b from-black/65 via-black/50 to-black/70"></div>

    <!-- Decorative Elements -->
    <div class="absolute inset-0 z-[3] overflow-hidden pointer-events-none opacity-30">
      <div class="absolute top-1/4 -left-20 w-96 h-96 bg-neutral-700 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/3 w-72 h-72 bg-neutral-500 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-[4] container mx-auto px-4 text-center py-20">
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Main Heading -->
        <div class="space-y-4 animate-slide-up">
          <h1 class="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
            Vaša krása,<br />
            <span class="bg-gradient-to-r from-[#C9A84C] via-[#F0D080] to-[#C9A84C] bg-clip-text text-transparent">
              naša vášeň
            </span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-neutral-100 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            Najlepšia balayage v Bratislave. Farbenie, strihanie, regenerácia vlasov a líčenie v príjemnom prostredí s individuálnym prístupom.
          </p>
        </div>

<!-- CTA Buttons - matching accent colors -->
<div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in animation-delay-400">
  <a
    href="/rezervacia"
    class="group w-full sm:w-auto bg-gradient-to-r from-black to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white text-lg px-10 py-4 rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-white/20"
  >
    <span class="flex items-center justify-center space-x-2">
      <span>Rezervovať termín</span>
      <Icon name="mdi:arrow-right" class="group-hover:translate-x-1 transition-transform" />
    </span>
  </a>

  <a
    href="tel:+421902730860"
    class="w-full sm:w-auto text-lg px-10 py-4 rounded-full bg-white/10 border-2 border-white/40 text-white hover:border-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
  >
    <span class="flex items-center justify-center space-x-2">
      <Icon name="mdi:phone" class="text-white" />
      <span>0902 730 860</span>
    </span>
  </a>
</div>

        <!-- Benefits - matching site style -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 max-w-2xl mx-auto animate-fade-in animation-delay-600">
          <div class="bg-white/90 rounded-2xl p-5 flex items-center space-x-4 shadow-soft border border-neutral-200 hover:border-neutral-400 transition-all duration-300">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center flex-shrink-0 shadow-soft">
              <Icon name="mdi:home-heart" class="text-xl text-white" />
            </div>
            <div class="text-left">
              <p class="font-serif font-bold text-neutral-900 text-lg">Pohodlie domova</p>
              <p class="text-sm text-neutral-600">Príjemné prostredie</p>
            </div>
          </div>
          <div class="bg-white/90 rounded-2xl p-5 flex items-center space-x-4 shadow-soft border border-neutral-200 hover:border-neutral-400 transition-all duration-300">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center flex-shrink-0 shadow-soft">
              <Icon name="mdi:star-circle" class="text-xl text-white" />
            </div>
            <div class="text-left">
              <p class="font-serif font-bold text-neutral-900 text-lg">Kvalitné služby</p>
              <p class="text-sm text-neutral-600">Profesionálny prístup</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
