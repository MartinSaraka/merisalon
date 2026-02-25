<template>
  <section class="py-24 md:py-32 bg-white relative overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream-100 to-transparent"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Image Side -->
        <div class="relative lg:pl-4 flex justify-center lg:justify-start">
          <div class="relative rounded-3xl overflow-hidden shadow-soft-xl bg-cream-100 aspect-[4/3] w-full max-w-[500px] md:max-w-[600px]">
            <img 
              src="/img/interier_profilovka.jpeg" 
              alt="Interiér Salón Meri" 
              class="w-full h-full object-cover object-center"
            />
          </div>
          <!-- Decorative accent -->
          <div class="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-accent-200/60 -z-10"></div>
        </div>

        <!-- Content Side -->
        <div class="lg:pl-8">
          <p class="section-subtitle">O nás</p>
          <h2 class="section-title mb-6">Kde krása stretáva profesionalitu</h2>
          <div class="space-y-6 text-brown-600 leading-relaxed">
            <p class="text-lg">
              V <strong>Salóne krásy Meri</strong> veríme, že vlasy sú korunou ženskej krásy. 
              Držte sa aj Vy tohto kréda a garantujeme Vám, že budete neodolateľné.
            </p>
      
            <p>
              Poradíme Vám pri výbere Vášho nového strihu, účesu alebo novej farby vlasov. 
              Ponúkame nadštandardnú starostlivosť o Vaše vlasy s použitím vysoko kvalitnej 
              vlasovej kozmetiky.
            </p>
            <p>
              Špecializujeme sa na balayage techniku – prirodzené presvetlenie vlasov, ktoré vyzerá elegantne 
              a bez ostrých prechodov. Pri výbere farby a štýlu vás radi poradíme.
            </p>
          </div>

          <!-- Features -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center flex-shrink-0">
                <Icon name="mdi:home-heart" class="text-xl text-accent-600" />
              </div>
              <div>
                <h3 class="font-serif font-bold text-brown-800 mb-1">Pohodlie domova</h3>
                <p class="text-sm text-brown-500">Príjemné a relaxačné prostredie</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center flex-shrink-0">
                <Icon name="mdi:star-circle" class="text-xl text-primary-600" />
              </div>
              <div>
                <h3 class="font-serif font-bold text-brown-800 mb-1">Kvalitné služby</h3>
                <p class="text-sm text-brown-500">Profesionálny prístup ku každému</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center flex-shrink-0">
                <Icon name="mdi:clock-check" class="text-xl text-accent-600" />
              </div>
              <div>
                <h3 class="font-serif font-bold text-brown-800 mb-1">Flexibilné termíny</h3>
                <p class="text-sm text-brown-500">Prispôsobíme sa vám</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center flex-shrink-0">
                <Icon name="mdi:check-decagram" class="text-xl text-primary-600" />
              </div>
              <div>
                <h3 class="font-serif font-bold text-brown-800 mb-1">Prémiová kozmetika</h3>
                <p class="text-sm text-brown-500">Loreal a ďalšie značky</p>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="mt-10">
  <a href="/rezervacia" class="btn-primary inline-flex items-center space-x-2">
    <span>Rezervovať termín</span>
    <Icon name="mdi:arrow-right" />
  </a>
</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

