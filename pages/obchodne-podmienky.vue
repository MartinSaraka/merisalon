<template>
  <div>
    <Navigation />
    
    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-br from-brown-800 to-brown-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="font-serif text-4xl md:text-5xl font-bold mb-4">Obchodné podmienky</h1>
        <p class="text-cream-200">Podmienky poskytovania služieb</p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 md:py-24 bg-cream-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="card-elegant p-8 md:p-12 prose prose-brown max-w-none">
            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">1. Základné ustanovenia</h2>
            <p class="text-brown-600 mb-6">
              Tieto obchodné podmienky upravujú vzťah medzi Salon Meri (ďalej len "poskytovateľ") 
              a zákazníkom pri poskytovaní kaderníckych služieb.
          </p>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">2. Rezervácie</h2>
            <p class="text-brown-600 mb-4">
              Rezervácie je možné uskutočniť:
            </p>
            <ul class="list-disc list-inside text-brown-600 mb-6 space-y-2">
              <li>Online cez rezervačný systém Bookio</li>
              <li>Telefonicky na čísle 0902 730 860</li>
          </ul>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">3. Zrušenie rezervácie</h2>
            <p class="text-brown-600 mb-6">
              Rezerváciu je možné zrušiť alebo zmeniť najneskôr 24 hodín pred plánovaným termínom. 
              V prípade neskoršieho zrušenia alebo nedostavenia sa na termín si vyhradzujeme právo 
              účtovať storno poplatok.
            </p>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">4. Ceny služieb</h2>
            <p class="text-brown-600 mb-6">
              Ceny služieb sú uvedené v cenníku na našej webovej stránke. Konečná cena môže 
              byť upravená podľa dĺžky, hustoty a stavu vlasov po osobnej konzultácii.
            </p>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">5. Platba</h2>
            <p class="text-brown-600 mb-6">
              Platba za služby sa uskutočňuje v hotovosti alebo kartou po dokončení služby.
            </p>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">6. Reklamácie</h2>
            <p class="text-brown-600 mb-6">
              V prípade nespokojnosti so službou nás prosím kontaktujte do 3 pracovných dní 
              od poskytnutia služby. Každú reklamáciu riešime individuálne s cieľom dosiahnuť 
              spokojnosť zákazníka.
            </p>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">7. Kontakt</h2>
            <p class="text-brown-600">
              Salon Meri<br />
              Ivanská cesta 36A, 821 04 Bratislava - Ružinov<br />
              Tel.: 0902 730 860<br />
              Email: galojanm@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Obchodné podmienky | Salon Meri',
  meta: [
    { name: 'description', content: 'Obchodné podmienky a pravidlá poskytovania služieb v Salon Meri.' }
  ]
})
</script>
