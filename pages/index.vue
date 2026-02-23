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
  title: 'Salón Meri – Salón krásy | Kaderníctvo Bratislava - Ružinov',
  meta: [
    { 
      name: 'description', 
      content: 'Salón krásy Meri – profesionálne kaderníctvo v Bratislave - Ružinov. Farbenie vlasov, balayage, melír, strihanie, regenerácia a líčenie. Konzultácia zadarmo. Rezervujte na 0902 730 860.' 
    },
    { 
      name: 'keywords', 
      content: 'kaderníctvo Bratislava, salon Meri, salon krásy Meri, salón krásy Meri, salón krásy Bratislava, salón krásy Ružinov, farbenie vlasov, balayage, ombre, melír, strihanie vlasov, regenerácia vlasov, botox na vlasy, líčenie, Ružinov, Ivanská cesta' 
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
