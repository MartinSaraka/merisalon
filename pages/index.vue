<template>
  <div>
    <Navigation />
    <HeroSection />
    <AboutSection />
    <ServicesPricingSection />
    <GallerySection />
    <TestimonialsSection />
    <ContactSection />
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
      content: 'Najlepšia balayage v Bratislave – Salon Meri. Profesionálne kaderníctvo v Ružinove. Farbenie vlasov, balayage, melír, strihanie, regenerácia a líčenie. Konzultácia zadarmo. Rezervujte na 0902 730 860.' 
    },
    { 
      name: 'keywords', 
      content: 'najlepšia balayage Bratislava, balayage Bratislava, balayage Ružinov, kaderníctvo Bratislava, salon Meri, farbenie vlasov Bratislava, melír Bratislava, salón krásy Ružinov' 
    },
    { property: 'og:url', content: 'https://salonmeri.sk' }
  ],
  link: [
    { rel: 'canonical', href: 'https://salonmeri.sk' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon_meri.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon_meri.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicon_meri.png' }
  ]
})
</script>
