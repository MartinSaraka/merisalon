<template>
  <div class="bookio-widget-container">
    <div class="card-elegant p-8">
      <div class="text-center mb-6">
        <h3 class="font-serif text-2xl font-bold text-brown-800 mb-2">Online rezervácia</h3>
        <p class="text-brown-600">Vyberte si termín, ktorý vám vyhovuje</p>
      </div>
      
      <!-- Bookio Widget iframe -->
      <div class="rounded-2xl overflow-hidden bg-cream-50 min-h-[600px]">
        <iframe 
          src="https://services.bookio.com/salon-krasy-meri/widget?lang=sk"
          width="100%" 
          height="600"
          frameborder="0"
          title="Rezervačný systém Salon Meri"
          class="w-full"
          loading="lazy"
        ></iframe>
      </div>

      <!-- Alternative contact -->
      <div class="mt-8 pt-6 border-t border-cream-200 text-center">
        <p class="text-brown-600 mb-4">Alebo nás kontaktujte priamo:</p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="tel:+421902730860" 
             class="flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors">
            <Icon name="mdi:phone" class="text-xl" />
            <span>0902 730 860</span>
          </a>
          <span class="hidden sm:inline text-brown-300">|</span>
          <a href="mailto:galojanm@gmail.com" 
             class="flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors">
            <Icon name="mdi:email" class="text-xl" />
            <span>galojanm@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

