// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'sk'
      },
      title: 'Salon Meri | Kaderníctvo Bratislava - Ružinov',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Profesionálne kaderníctvo v Bratislave - Ružinov. Farbenie vlasov, balayage, melír, strihanie, regenerácia. Rezervujte si termín online alebo telefonicky na 0902 730 860.' },
        { name: 'keywords', content: 'kaderníctvo Bratislava, salon Meri, farbenie vlasov, balayage, melír, strihanie vlasov, regenerácia vlasov, Ružinov' },
        { name: 'author', content: 'Salon Meri' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Salon Meri | Kaderníctvo Bratislava - Ružinov' },
        { property: 'og:description', content: 'Profesionálne kaderníctvo v Bratislave. Farbenie, balayage, melír, strihanie a regenerácia vlasov. Rezervujte online!' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:locale', content: 'sk_SK' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Salon Meri | Kaderníctvo Bratislava' },
        { name: 'twitter:description', content: 'Profesionálne kaderníctvo v Bratislave. Rezervujte si termín online!' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://salonmeri.sk' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;500;600;700&display=swap' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HairSalon',
            'name': 'Salon Meri',
            'image': 'https://salonmeri.sk/og-image.jpg',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Ivanská cesta 36A',
              'addressLocality': 'Bratislava',
              'addressRegion': 'Ružinov',
              'postalCode': '821 04',
              'addressCountry': 'SK'
            },
            'telephone': '+421902730860',
            'email': 'galojanm@gmail.com',
            'url': 'https://salonmeri.sk',
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              'opens': '08:00',
              'closes': '21:00'
            },
            'priceRange': '€€',
            'sameAs': []
          })
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  }
})
