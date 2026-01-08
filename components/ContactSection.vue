<template>
  <section id="kontakt" class="py-24 md:py-32 bg-gradient-to-b from-white to-cream-100 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="section-subtitle">Kontakt</p>
        <h2 class="section-title">Navštívte nás</h2>
        <p class="text-lg text-brown-600 mt-6">
          Tešíme sa na vašu návštevu v našom salóne v Bratislave
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- Address -->
          <div class="card-elegant p-6 flex items-start space-x-5">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center flex-shrink-0">
              <Icon name="mdi:map-marker" class="text-2xl text-accent-600" />
            </div>
            <div>
              <h3 class="font-serif font-bold text-xl text-brown-800 mb-2">Adresa</h3>
              <p class="text-brown-600 leading-relaxed">
                Ivanská cesta 36A<br />
                821 04 Bratislava - Ružinov<br />
                Slovensko
              </p>
            </div>
          </div>

          <!-- Phone -->
          <div class="card-elegant p-6 flex items-start space-x-5">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center flex-shrink-0">
              <Icon name="mdi:phone" class="text-2xl text-primary-600" />
            </div>
            <div>
              <h3 class="font-serif font-bold text-xl text-brown-800 mb-2">Telefón</h3>
              <a href="tel:+421902730860" class="text-brown-600 hover:text-accent-600 transition-colors text-lg font-medium">
                0902 730 860
              </a>
            </div>
          </div>

          <!-- Email -->
          <div class="card-elegant p-6 flex items-start space-x-5">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center flex-shrink-0">
              <Icon name="mdi:email" class="text-2xl text-accent-600" />
            </div>
            <div>
              <h3 class="font-serif font-bold text-xl text-brown-800 mb-2">Email</h3>
              <a href="mailto:galojanm@gmail.com" class="text-brown-600 hover:text-accent-600 transition-colors">
                galojanm@gmail.com
              </a>
            </div>
          </div>

          <!-- Opening Hours -->
          <div class="card-elegant p-6 flex items-start space-x-5">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center flex-shrink-0">
              <Icon name="mdi:clock-outline" class="text-2xl text-primary-600" />
            </div>
            <div>
              <h3 class="font-serif font-bold text-xl text-brown-800 mb-3">Otváracie hodiny</h3>
              <div class="space-y-2 text-brown-600">
                <div class=" justify-between">
                  <span>Pondelok - Nedeľa</span>

                  <span class="font-medium"> 08:00 - 21:00</span>
                </div>
                <p class="text-sm text-brown-500 mt-2">* Na objednávku</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Map -->
        <div class="lg:sticky lg:top-24">
          <div class="card-elegant overflow-hidden h-[500px] lg:h-[600px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.8!2d17.1558!3d48.1483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89b9fae7d5c7%3A0x400f7d1c6977f40!2sIvansk%C3%A1%20cesta%2036A%2C%20821%2004%20Bratislava!5e0!3m2!1ssk!2ssk!4v1699999999999!5m2!1ssk!2ssk"
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Mapa - Salon Meri, Ivanská cesta 36A, Bratislava"
              class="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
