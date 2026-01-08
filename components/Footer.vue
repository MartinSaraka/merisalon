<template>
  <footer class="bg-brown-800 text-cream-100 py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- About -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            
            <span class="font-serif text-2xl font-bold text-white">Salon Meri</span>
          </div>
          <p class="text-cream-300 mb-6 max-w-md leading-relaxed">
            Profesionálne kaderníctvo v Bratislave - Ružinov. 
            Ponúkame farbenie, strihanie, regeneráciu vlasov a líčenie 
            v príjemnom prostredí s individuálnym prístupom.
          </p>
          <p class="text-cream-400 text-sm">
            Webstránka vytvorená firmou <a href="https://www.appinara.sk" target="_blank" rel="noopener noreferrer" class="text-accent-400 hover:text-accent-300 transition-colors underline">Appinara</a>
          </p>
          <div class="flex space-x-3">
            <a href="https://www.facebook.com/profile.php?id=61568519063082" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-11 h-11 rounded-full bg-brown-700 hover:bg-accent-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
              <Icon name="mdi:facebook" class="text-xl" />
            </a>
            <a href="https://www.instagram.com/salonmeri.sk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-11 h-11 rounded-full bg-brown-700 hover:bg-accent-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
              <Icon name="mdi:instagram" class="text-xl" />
            </a>
            <a href="https://share.google/lsndT11p2zv5kQxGj" target="_blank" rel="noopener noreferrer" aria-label="Google" class="w-11 h-11 rounded-full bg-brown-700 hover:bg-accent-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
              <Icon name="mdi:google" class="text-xl" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-serif font-bold text-lg text-white mb-5">Rýchle odkazy</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="text-cream-300 hover:text-accent-400 transition-colors flex items-center space-x-2">
                <Icon name="mdi:chevron-right" class="text-sm text-accent-400" />
                <span>Domov</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#sluzby" class="text-cream-300 hover:text-accent-400 transition-colors flex items-center space-x-2">
                <Icon name="mdi:chevron-right" class="text-sm text-accent-400" />
                <span>Cenník</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#galeria" class="text-cream-300 hover:text-accent-400 transition-colors flex items-center space-x-2">
                <Icon name="mdi:chevron-right" class="text-sm text-accent-400" />
                <span>Galéria</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/rezervacia" class="text-cream-300 hover:text-accent-400 transition-colors flex items-center space-x-2">
                <Icon name="mdi:chevron-right" class="text-sm text-accent-400" />
                <span>Rezervácia</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-serif font-bold text-lg text-white mb-5">Kontakt</h3>
          <ul class="space-y-4 text-cream-300">
            <li class="flex items-start space-x-3">
              <Icon name="mdi:map-marker" class="text-accent-400 mt-1 flex-shrink-0" />
              <span>Ivanská cesta 36A<br />821 04 Bratislava</span>
            </li>
            <li>
              <a href="tel:+421902730860" class="flex items-center space-x-3 hover:text-accent-400 transition-colors">
                <Icon name="mdi:phone" class="text-accent-400 flex-shrink-0" />
                <span>0902 730 860</span>
              </a>
            </li>
            <li>
              <a href="mailto:galojanm@gmail.com" class="flex items-center space-x-3 hover:text-accent-400 transition-colors">
                <Icon name="mdi:email" class="text-accent-400 flex-shrink-0" />
                <span>galojanm@gmail.com</span>
              </a>
            </li>
            <li class="flex items-start space-x-3">
              <Icon name="mdi:clock-outline" class="text-accent-400 mt-1 flex-shrink-0" />
              <span>Po-Ne: 08:00 - 21:00<br /><small class="text-cream-400">Na objednávku</small></span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-brown-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-cream-400 text-sm">
          © {{ currentYear }} Salon Meri. Všetky práva vyhradené.
        </p>
        <div class="flex flex-wrap justify-center gap-6 text-sm">
          <NuxtLink to="/ochrana-udajov" class="text-cream-400 hover:text-accent-400 transition-colors">
            Ochrana údajov
          </NuxtLink>
          <NuxtLink to="/obchodne-podmienky" class="text-cream-400 hover:text-accent-400 transition-colors">
            Obchodné podmienky
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
