<template>
  <footer class="bg-black text-white py-8 px-4 mt-4">
    <div class="container mx-auto max-w-6xl relative">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
        <!-- Social Media Icons -->
        <div class="flex space-x-6 justify-center md:justify-start">
          <a href="#" class="hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" class="hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a href="#" class="hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>

        <!-- Vertical Divider Left -->
        <div class="hidden md:block h-full border-l border-white absolute left-1/3 top-0"></div>

        <!-- Email Form -->
        <div class="text-center">
          <h2 class="text-xl mb-4 tracking-wider">SOMOS LA NUEVA GENERACIÓN</h2>
          <form @submit.prevent="handleSubmit" class="space-y-3">
            <div class="relative">
              <input
                type="email"
                v-model="email"
                placeholder="Ingresa tu email aquí"
                required
                class="w-full px-4 py-2 bg-transparent border border-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              class="w-full px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>

        <!-- Vertical Divider Right -->
        <div class="hidden md:block h-full border-l border-white absolute right-1/3 top-0"></div>

        <!-- Copyright -->
        <div class="text-center md:text-right text-sm">
          © 2025 Creado por Delectus labs
          <br />
          con <a href="#" class="underline hover:opacity-75">Delectuslabs.com</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubmit = () => {
  console.log('Email submitted:', email.value)
  email.value = '' // Clear the input after submission
}
</script>
