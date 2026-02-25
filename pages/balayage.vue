<template>
  <div>
    <Navigation />

    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-cream-100 to-cream-100 text-brown-800 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <p class="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-4">Balayage Bratislava</p>
        <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-brown-800">
          Najlepšia balayage v Bratislave – Salon Meri
        </h1>
        <p class="text-xl text-brown-700 max-w-2xl mx-auto">
          Prirodzené presvetlenie vlasov technikou balayage. Elegantný výsledok bez ostrých prechodov v srdci Ružinova.
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto space-y-8 text-brown-600 leading-relaxed">
          <p class="text-lg">
            <strong class="text-brown-800">Balayage</strong> je francúzska technika farbenia vlasov, ktorá vytvára prirodzené, 
            slnečnými lúčmi osvetlené pramene. Na rozdiel od klasického melíru sa farba nanáša ručne, pričom vznikajú 
            jemné prechody a individuálny vzhľad pre každú klientku.
          </p>
          <p>
            V <strong>Salóne Meri</strong> v Bratislave – Ružinove sa špecializujeme na balayage a garantujeme vám 
            profesionálny prístup, konzultáciu pred zákrokom a použitie kvalitnej vlasovej kozmetiky. Každá balayage 
            je jedinečná – prispôsobíme ju dĺžke vlasov, pôvodnej farbe a vášmu štýlu.
          </p>
          <h2 class="font-serif text-2xl font-bold text-brown-800 pt-4">Čo zahŕňa balayage v Salon Meri?</h2>
          <ul class="space-y-2 list-disc list-inside">
            <li>Osobná konzultácia a výber odtieňov</li>
            <li>Úplné presvetlenie technikou balayage na mieru</li>
            <li>Regeneračná maska pre zdravé vlasy</li>
            <li>Profesionálny styling a fúkaná</li>
          </ul>
          <p>
            Trvanie zákroku je približne 3 hodiny. Cena od 200 € v závislosti od dĺžky a hustoty vlasov.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-cream-100 text-brown-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="font-serif text-3xl md:text-4xl font-bold mb-4 text-brown-800">Rezervujte si balayage v Bratislave</h2>
        <p class="text-brown-700 mb-8 max-w-xl mx-auto">
          Objednajte si termín online alebo nás kontaktujte telefonicky
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
  href="/rezervacia"
  class="inline-flex items-center justify-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
>
  <Icon name="mdi:calendar-check" class="text-2xl" />
  <span>Rezervovať online</span>
</a>
          <a href="tel:+421902730860" class="inline-flex items-center justify-center space-x-2 bg-white hover:bg-cream-200 text-brown-800 font-semibold py-4 px-10 rounded-full border-2 border-accent-200 transition-all duration-300">
            <Icon name="mdi:phone" class="text-2xl text-accent-500" />
            <span>0902 730 860</span>
          </a>
        </div>
      </div>
    </section>

    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Najlepšia balayage Bratislava | Salon Meri – Kaderníctvo Ružinov',
  meta: [
    {
      name: 'description',
      content: 'Najlepšia balayage v Bratislave – Salon Meri Ružinov. Prirodzené presvetlenie vlasov, konzultácia, regeneračná maska. Rezervujte online alebo na 0902 730 860.'
    },
    {
      name: 'keywords',
      content: 'najlepšia balayage Bratislava, balayage Bratislava, balayage Ružinov, farbenie vlasov balayage'
    },
    { property: 'og:title', content: 'Najlepšia balayage Bratislava | Salon Meri' },
    { property: 'og:description', content: 'Najlepšia balayage v Bratislave – Salon Meri. Prirodzené presvetlenie vlasov technikou balayage v Ružinove.' },
    { property: 'og:url', content: 'https://salonmeri.sk/balayage' }
  ],
  link: [
    { rel: 'canonical', href: 'https://salonmeri.sk/balayage' }
  ]
})
</script>
