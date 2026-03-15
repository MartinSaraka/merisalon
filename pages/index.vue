<template>
  <div class="relative overflow-hidden">
    <Navigation />

    <main>
      <HeroSection />
      <AboutSection />
      <ServicesPricingSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </main>

    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Salon Meri – Najlepšia balayage Bratislava | Kaderníctvo Ružinov',
  meta: [
    {
      name: 'description',
      content: 'Najlepšia balayage v Bratislave – Salon Meri. Profesionálne kaderníctvo v Ružinove. Farbenie vlasov, balayage, melír, strihanie, regenerácia. Rezervujte online na 0902 730 860.'
    },
    {
      name: 'keywords',
      content: 'najlepšia balayage Bratislava, balayage Bratislava, balayage Ružinov, kaderníctvo Bratislava, salon Meri, salón krásy Bratislava, farbenie vlasov, melír, strihanie vlasov, regenerácia vlasov'
    },
    { property: 'og:title', content: 'Salon Meri – Najlepšia balayage Bratislava | Kaderníctvo Ružinov' },
    { property: 'og:description', content: 'Najlepšia balayage v Bratislave – Salon Meri. Profesionálne kaderníctvo v Ružinove. Farbenie, balayage, melír, strihanie a regenerácia vlasov. Rezervujte online!' },
    { property: 'og:url', content: 'https://salonmeri.sk' }
  ],
  link: [
    { rel: 'canonical', href: 'https://salonmeri.sk' }
  ]
})
</script>
