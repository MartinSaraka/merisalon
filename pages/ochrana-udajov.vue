<template>
  <div>
    <Navigation />
    
    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-br from-brown-800 to-brown-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="font-serif text-4xl md:text-5xl font-bold mb-4">Ochrana osobných údajov</h1>
        <p class="text-cream-200">Informácie o spracovaní vašich osobných údajov</p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 md:py-24 bg-cream-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="card-elegant p-8 md:p-12 prose prose-brown max-w-none">
            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">1. Prevádzkovateľ</h2>
            <p class="text-brown-600 mb-6">
              Prevádzkovateľom osobných údajov je Salon Meri, so sídlom Ivanská cesta 36A, 
              821 04 Bratislava - Ružinov, kontakt: galojanm@gmail.com, tel.: 0902 730 860.
          </p>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">2. Účel spracovania</h2>
            <p class="text-brown-600 mb-6">
              Vaše osobné údaje spracovávame za účelom:
            </p>
            <ul class="list-disc list-inside text-brown-600 mb-6 space-y-2">
              <li>Rezervácie termínov a poskytovania služieb</li>
              <li>Komunikácie ohľadom rezervácií</li>
              <li>Zasielania pripomienok termínov</li>
          </ul>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">3. Rozsah údajov</h2>
            <p class="text-brown-600 mb-6">
              Spracovávame nasledovné kategórie osobných údajov: meno, priezvisko, 
              telefónne číslo, e-mailová adresa.
            </p>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">4. Doba uchovávania</h2>
            <p class="text-brown-600 mb-6">
              Osobné údaje uchovávame po dobu nevyhnutnú na splnenie účelu spracovania, 
              maximálne však 3 roky od posledného poskytnutia služby.
          </p>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">5. Vaše práva</h2>
            <p class="text-brown-600 mb-4">
              Máte právo na:
            </p>
            <ul class="list-disc list-inside text-brown-600 mb-6 space-y-2">
              <li>Prístup k vašim osobným údajom</li>
              <li>Opravu nesprávnych údajov</li>
              <li>Vymazanie údajov (právo na zabudnutie)</li>
            <li>Obmedzenie spracovania</li>
              <li>Podanie sťažnosti na Úrade na ochranu osobných údajov SR</li>
          </ul>

            <h2 class="font-serif text-2xl font-bold text-brown-800 mb-4">6. Kontakt</h2>
            <p class="text-brown-600">
              V prípade akýchkoľvek otázok ohľadom spracovania vašich osobných údajov 
              nás kontaktujte na e-mailovej adrese: galojanm@gmail.com
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
  title: 'Ochrana osobných údajov | Salon Meri',
  meta: [
    { name: 'description', content: 'Informácie o spracovaní a ochrane osobných údajov v Salon Meri.' }
  ]
})
</script>
