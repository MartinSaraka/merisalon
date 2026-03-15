<template>
  <div class="min-h-screen">
    <NuxtPage />

    <Transition name="loader-fade">
      <div v-if="loading" class="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
        <p class="font-serif text-2xl text-neutral-400 animate-pulse">Salon Meri</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  const hide = () => { loading.value = false }

  if (document.readyState === 'complete') {
    requestAnimationFrame(hide)
  } else {
    window.addEventListener('load', () => requestAnimationFrame(hide), { once: true })
    setTimeout(hide, 3000)
  }
})
</script>

<style>
.loader-fade-leave-active {
  transition: opacity 0.4s ease;
}
.loader-fade-leave-to {
  opacity: 0;
}
</style>
