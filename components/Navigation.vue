<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled || isSubPage ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img
            src="/img/logo.jpg"
            alt="Salon Meri"
            class="h-14 w-auto transition-all duration-300 group-hover:scale-105 rounded-lg opacity-90 brightness-110 contrast-105 shadow-sm"
          />
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            class="font-medium transition-all duration-300 relative group"
            :class="isSubPage ? 'text-brown-800 hover:text-accent-600' : 'text-brown-700 hover:text-accent-500'"
          >
            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>

          <!-- Najrobustnejšie: čistý anchor -->
          <a href="/rezervacia" class="btn-primary">
            Rezervovať
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-xl transition-colors duration-300"
          :class="isSubPage ? 'text-brown-900 hover:bg-cream-300' : 'text-brown-800 hover:bg-cream-200'"
        >
          <Icon :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-3xl" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-fade">
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-cream-200 shadow-soft-lg">
        <div class="container mx-auto px-4 py-6 space-y-4">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            @click="mobileMenuOpen = false"
            class="block text-lg font-medium transition-colors py-2"
            :class="isSubPage ? 'text-brown-800 hover:text-accent-600' : 'text-brown-700 hover:text-accent-500'"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Najrobustnejšie: čistý anchor + zatvorenie menu -->
          <a
            href="/rezervacia"
            class="block btn-primary text-center mt-4"
            @click="mobileMenuOpen = false"
          >
            Rezervovať termín
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const isSubPage = computed(() => route.path !== '/')

const menuItems = [
  { label: 'Domov', to: '/' },
  { label: 'Cenník', to: '/#sluzby' },
  { label: 'Galéria', to: '/#galeria' },
  { label: 'Kontakt', to: '/#kontakt' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>