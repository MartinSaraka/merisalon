<template>
  <div>
    <Navigation />

    <!-- Page Header -->
    <section class="pt-32 pb-12 bg-gradient-to-b from-cream-100 to-cream-100 text-brown-800 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <p class="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-4">Online rezervácia</p>
        <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-brown-800">
          Rezervujte si termín
        </h1>
        <p class="text-xl text-brown-700 max-w-2xl mx-auto">
          Vyberte si vhodný termín v našom online rezervačnom systéme alebo nás kontaktujte priamo.
        </p>
      </div>
    </section>

    <!-- Bookio Widget Section -->
    <section class="py-12 md:py-16 bg-cream-100">
      <div class="container mx-auto px-4">
        <BookioWidget :eager="true" />
      </div>
    </section>

    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Online rezervácia | Salon Meri – Kaderníctvo Bratislava Ružinov',
  meta: [
    {
      name: 'description',
      content: 'Rezervujte si termín v Salóne Meri online. Kaderníctvo Bratislava Ružinov – balayage, farbenie, strihanie. Alebo nás kontaktujte na 0902 730 860.'
    },
    {
      name: 'keywords',
      content: 'rezervácia salon Bratislava, online rezervácia kaderníctvo, Salon Meri rezervácia'
    },
    { property: 'og:title', content: 'Online rezervácia | Salon Meri' },
    { property: 'og:description', content: 'Rezervujte si termín v Salóne Meri online. Kaderníctvo Bratislava Ružinov.' },
    { property: 'og:url', content: 'https://salonmeri.sk/rezervacia' }
  ],
  link: [
    { rel: 'canonical', href: 'https://salonmeri.sk/rezervacia' }
  ]
})
</script>
