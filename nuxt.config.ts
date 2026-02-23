// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/sitemap', 'nuxt-simple-robots'],

  site: {
    url: 'https://salonmeri.sk',
    name: 'Salon Meri'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'sk'
      },
      title: 'Salon Meri – Salón krásy | Kaderníctvo Bratislava - Ružinov',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Salón krásy Meri – profesionálne kaderníctvo v Bratislave - Ružinov. Farbenie vlasov, balayage, melír, strihanie, regenerácia. Rezervujte si termín online alebo telefonicky na 0902 730 860.' },
        { name: 'keywords', content: 'kaderníctvo Bratislava, salon Meri, salon krásy Meri, salón krásy Meri, salón krásy Bratislava, salón krásy Ružinov, farbenie vlasov, balayage, melír, strihanie vlasov, regenerácia vlasov, Ružinov' },
        { name: 'author', content: 'Salon Meri' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Salon Meri' },
        { property: 'og:title', content: 'Salon Meri – Salón krásy | Kaderníctvo Bratislava - Ružinov' },
        { property: 'og:description', content: 'Salón krásy Meri – profesionálne kaderníctvo v Bratislave. Farbenie, balayage, melír, strihanie a regenerácia vlasov. Rezervujte online!' },
        { property: 'og:image', content: 'https://salonmeri.sk/og-image.jpg' },
        { property: 'og:image:alt', content: 'Salon Meri – kaderníctvo Bratislava' },
        { property: 'og:image:width', content: '1024' },
        { property: 'og:image:height', content: '1024' },
        { property: 'og:url', content: 'https://salonmeri.sk' },
        { property: 'og:locale', content: 'sk_SK' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
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
            'alternateName': 'Salon krásy Meri',
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

  sitemap: {
    strictNuxtContentPaths: false
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  }
})
